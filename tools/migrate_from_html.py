"""One-time migration: pull every card out of the old single-file index.html into cards.js.

Usage: python3 tools/migrate_from_html.py OLD_INDEX.html cards.js
Card body HTML is copied byte-for-byte from the old file.
"""
import json, re, sys

CARD_RE = re.compile(
    r'<input type="checkbox" id="([^"]+)" class="tgl"><label for="\1" class="([^"]+)">'
    r'<div class="card-header"><span>(.*?)</span><span class="arrow">&#9660;</span></div></label>'
    r'<div class="accordion-body b-\1">', re.S)
TAG_RE = re.compile(r'<(/?)div\b[^>]*>', re.I)


def parse_seq(s, i, until_close):
    """Parse siblings starting at i. Returns (nodes, index after closing </div> or end)."""
    nodes, buf, depth = [], [], 0
    def flush():
        h = ''.join(buf)
        if h.strip():
            nodes.append({"html": h})
        buf.clear()
    while i < len(s):
        if depth == 0:
            m = CARD_RE.match(s, i)
            if m:
                flush()
                cid, cls, title = m.group(1), m.group(2).split(), m.group(3)
                content, i = parse_seq(s, m.end(), True)
                card = {"id": cid, "title": title,
                        "level": "sub" if "sub" in cls else "top",
                        "tags": [c[3:] for c in cls if c.startswith("tg-")]}
                card["content"] = content
                nodes.append(card)
                continue
        nxt_card = s.find('<input type="checkbox"', i) if depth == 0 else -1
        m = TAG_RE.search(s, i)
        stop = min([x for x in [nxt_card, m.start() if m else -1] if x >= 0], default=len(s))
        if stop > i:
            buf.append(s[i:stop]); i = stop; continue
        if nxt_card == i and depth == 0 and not CARD_RE.match(s, i):
            buf.append(s[i]); i += 1; continue
        if m and m.start() == i:
            if m.group(1):  # closing
                if depth == 0 and until_close:
                    flush(); return nodes, m.end()
                depth -= 1
            else:
                depth += 1
            buf.append(m.group(0)); i = m.end(); continue
        if i < len(s) and stop == len(s):
            break
    flush()
    if until_close:
        raise ValueError("unclosed accordion body")
    return nodes, i


def main(src, dst):
    s = open(src, encoding="utf-8").read()
    tabs_meta = re.findall(r'<label for="t(\d)"><span class="icon">(.*?)</span>(.*?)</label>', s)
    panes = {}
    for m in re.finditer(r'<div class="pane (p\d)">', s):
        panes[m.group(1)] = m.end()
    data = {"version": 1, "chips": [], "tabs": []}
    p0 = s[panes["p0"]:panes["p1"]]
    data["searchIntro"] = re.search(r'<div class="searchintro">(.*?)</div>', p0).group(1)
    for cid, label in re.findall(r'<input type="radio" name="searchtag" id="stag-([^"]+)"><label for="stag-\1" class="chip">(.*?)</label>', p0):
        data["chips"].append({"tag": cid, "label": label})
    keys = {"1": "diagnostics", "2": "checklists", "3": "reference", "4": "tests"}
    for num, icon, label in tabs_meta:
        if num == "0":
            continue
        nodes, end = parse_seq(s, panes["p" + num], True)
        data["tabs"].append({"key": keys[num], "label": label, "icon": icon, "content": nodes})
    with open(dst, "w", encoding="utf-8") as f:
        f.write("/* Accutemp Field Reference card data. See CONTRIBUTING.md for how to add a card. */\n")
        f.write("window.ACCUTEMP_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    n = 0
    def walk(ns):
        nonlocal n
        for x in ns:
            if "id" in x:
                n += 1; walk(x["content"])
    for t in data["tabs"]:
        walk(t["content"])
    print("cards:", n, "chips:", len(data["chips"]))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
