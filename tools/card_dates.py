"""Fill each card's "updated" date from real git history.

For every card in cards.js, the date is the first commit where the card's current
title + text (not tags, not child cards) appears in the repo, looking at the old
index.html history before the move to cards.js and at cards.js after it.
Nothing is guessed: a card whose text cannot be found in history keeps no date.

Usage (from the repo root):  python3 tools/card_dates.py          # rewrite cards.js
                             python3 tools/card_dates.py --check  # report only
"""
import html, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
from migrate_from_html import parse_seq  # noqa: E402
from cardsfile import load, save  # noqa: E402


def git(*a):
    return subprocess.run(["git", *a], cwd=ROOT, capture_output=True, text=True, check=True).stdout


def own_html(c):
    """The card's own text: stored HTML pieces, or the simple fields used by newer cards."""
    nodes = c.get("content", [])
    if nodes:
        return "".join(n["html"] for n in nodes if "html" in n)
    parts = [c.get("intro", "")]
    parts += [r[0] + " " + r[1] for r in c.get("rows", [])]
    parts += [c.get("tip", "")]
    parts += [s.get("name", "") + " " + s.get("url", "") for s in c.get("sources", [])]
    return " ".join(parts)


def norm(c):
    title, own = c["title"], own_html(c)
    txt = html.unescape(re.sub(r"<[^>]+>", " ", title + " " + own))
    return re.sub(r"\s+", " ", txt).strip()


def walk(nodes):
    for n in nodes:
        if "id" in n:
            yield n
            yield from walk(n.get("content", []))


def cards_from_old_html(s):
    out = []
    for m in re.finditer(r'<div class="pane (p[1-9])">', s):
        try:
            nodes, _ = parse_seq(s, m.end(), True)
        except Exception:
            continue
        out.extend(walk(nodes))
    return out


def cards_from_js(s):
    data = json.loads(s[s.index("=") + 1:].strip().rstrip(";"))
    return [c for t in data["tabs"] for c in walk(t["content"])]


def main():
    check = "--check" in sys.argv
    first_seen = {}
    log = git("log", "--reverse", "--format=%H %ad", "--date=short", "--", "index.html", "cards.js")
    for line in log.splitlines():
        sha, date = line.split()
        for path, fn in (("index.html", cards_from_old_html), ("cards.js", cards_from_js)):
            try:
                s = git("show", f"{sha}:{path}")
            except subprocess.CalledProcessError:
                continue
            if path == "index.html" and "window.ACCUTEMP_DATA" in s:
                continue
            try:
                cards = fn(s)
            except Exception:
                continue
            for c in cards:
                first_seen.setdefault(norm(c), date)
    data = load()
    missing = []
    for t in data["tabs"]:
        for c in walk(t["content"]):
            if not own_html(c).strip():
                c.pop("updated", None)  # pure group header, nothing to date
                continue
            d = first_seen.get(norm(c))
            if d:
                c["updated"] = d
            else:
                c.pop("updated", None)
                missing.append(c["id"])
    if missing:
        print("no history yet (new or edited since last commit):", ", ".join(missing))
    if not check:
        save(data)
    print("dated", sum(1 for t in data["tabs"] for c in walk(t["content"]) if c.get("updated")), "cards")


if __name__ == "__main__":
    main()
