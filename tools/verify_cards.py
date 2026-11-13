"""Prove an edit lost nothing.

Renders an OLD version of the page (from a git commit) and the current page in headless
Chrome, then compares every card: id, title, tab, parent group, order, tags, text, links and
images. Prints a per-card match count and exits non-zero on any unexpected difference.

--old-ref REF     a commit. If it has cards.js it is rendered with its own app.js; if not, its
                  single-file index.html is used (default 79ecb71, the last single-file page).
--allow-new IDS   comma-separated ids of cards added since REF.
--allow-diff X    comma-separated id=field+field pairs that are expected to differ, for example
                  "eq-87=links,vrf-5=tags". Each allowed difference is printed.
--allow-chips-added   new filter chips may be appended after the old ones.
--allow-extras    non-card tab text may differ (for example when a tab is hidden).

Usage: python3 tools/verify_cards.py [--old-ref 79ecb71] [--chrome /usr/bin/google-chrome]
Needs: pip install playwright
"""
import argparse, functools, http.server, os, re, shutil, subprocess, sys, tempfile, threading
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

OLD_JS = r"""() => {
  const out = [];
  const panes = [...document.querySelectorAll('.pane')];
  panes.forEach(p => {
    const tab = p.className.split(' ').find(c => /^p\d$/.test(c));
    if (tab === 'p0') return;
    p.querySelectorAll('input.tgl').forEach(inp => {
      const label = inp.nextElementSibling, body = label.nextElementSibling;
      const clone = body.cloneNode(true);
      clone.querySelectorAll('input.tgl').forEach(i => { const l = i.nextElementSibling, b = l.nextElementSibling; b.remove(); l.remove(); i.remove(); });
      const parentBody = inp.parentElement.closest('.accordion-body');
      out.push({
        id: inp.id, tab, title: label.querySelector('.card-header span').textContent,
        level: label.classList.contains('sub') ? 'sub' : 'top',
        tags: [...label.classList].filter(c => c.startsWith('tg-')).map(c => c.slice(3)).sort().join(' '),
        parent: parentBody ? parentBody.previousElementSibling.previousElementSibling.id : '',
        text: clone.textContent.replace(/\s+/g, ' ').trim(),
        links: [...clone.querySelectorAll('a')].map(a => a.getAttribute('href') + '|' + a.textContent.trim()).join('\n'),
        imgs: [...clone.querySelectorAll('img')].map(i => i.getAttribute('src') + '|' + i.getAttribute('alt')).join('\n'),
      });
    });
  });
  const extras = panes.filter(p => !p.classList.contains('p0')).map(p => {
    const c = p.cloneNode(true); c.querySelectorAll('input.tgl').forEach(i => { const l = i.nextElementSibling, b = l.nextElementSibling; b.remove(); l.remove(); i.remove(); });
    return c.textContent.replace(/\s+/g, ' ').trim();
  });
  const chips = [...document.querySelectorAll('.pane.p0 label.chip')].map(l => l.textContent.trim()).filter(t => t !== 'Clear / Show All');
  return { cards: out, extras, chips };
}"""

NEW_JS = r"""async () => {
  const out = [], extras = [];
  const tabs = [...document.querySelectorAll('#tabbar button')];
  for (let t = 0; t < tabs.length; t++) {
    tabs[t].click();
    await new Promise(r => setTimeout(r, 30));
    const main = document.getElementById('main');
    main.querySelectorAll('details.cd').forEach(d => {
      const body = d.querySelector(':scope > .accordion-body');
      const clone = body.cloneNode(true);
      clone.querySelectorAll('details.cd, .quickcheck, .updated, .cardmeta').forEach(x => x.remove());
      const par = d.parentElement.closest('details.cd');
      out.push({
        id: d.id, tab: 'p' + (t + 1), title: d.querySelector(':scope > summary .ctitle').textContent,
        level: d.querySelector(':scope > summary').classList.contains('sub') ? 'sub' : 'top',
        tags: (d.dataset.tags || '').split(' ').filter(Boolean).sort().join(' '),
        parent: par ? par.id : '',
        text: clone.textContent.replace(/\s+/g, ' ').trim(),
        links: [...clone.querySelectorAll('a')].map(a => a.getAttribute('href') + '|' + a.textContent.trim()).join('\n'),
        imgs: [...clone.querySelectorAll('img')].map(i => i.getAttribute('src') + '|' + i.getAttribute('alt')).join('\n'),
      });
    });
    const c = main.cloneNode(true); c.querySelectorAll('details.cd, .tools').forEach(x => x.remove());
    extras.push(c.textContent.replace(/\s+/g, ' ').trim());
  }
  const chips = [...document.querySelectorAll('#chips .chip')].map(l => l.textContent.trim()).filter(t => t !== 'Clear / Show All');
  return { cards: out, extras, chips };
}"""


def serve(directory):
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    h = functools.partial(Quiet, directory=directory)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--old-ref", default="79ecb71")
    ap.add_argument("--allow-new", default="", help="comma-separated ids of cards added since --old-ref")
    ap.add_argument("--allow-diff", default="", help="comma-separated id=field+field pairs expected to differ")
    ap.add_argument("--allow-chips-added", action="store_true")
    ap.add_argument("--allow-extras", action="store_true")
    ap.add_argument("--chrome", default=shutil.which("google-chrome") or shutil.which("chromium"))
    a = ap.parse_args()
    tmp = tempfile.mkdtemp()
    files = subprocess.run(["git", "ls-tree", "--name-only", a.old_ref], cwd=ROOT, capture_output=True, text=True, check=True).stdout.split()
    old_is_cards = "cards.js" in files
    if old_is_cards:
        arc = subprocess.run(["git", "archive", a.old_ref], cwd=ROOT, capture_output=True, check=True).stdout
        import io, tarfile
        tarfile.open(fileobj=io.BytesIO(arc)).extractall(tmp, filter="data")
    else:
        old = subprocess.run(["git", "show", f"{a.old_ref}:index.html"], cwd=ROOT, capture_output=True, text=True, check=True).stdout
        open(os.path.join(tmp, "old.html"), "w").write(old)
    s_old, s_new = serve(tmp), serve(ROOT)
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=a.chrome, args=["--no-sandbox"])
        pg = b.new_page(service_workers="block")
        if old_is_cards:
            pg.goto(f"http://127.0.0.1:{s_old.server_port}/index.html")
            pg.wait_for_selector("details.cd")
            O = pg.evaluate(NEW_JS)
        else:
            pg.goto(f"http://127.0.0.1:{s_old.server_port}/old.html")
            O = pg.evaluate(OLD_JS)
        pg.goto(f"http://127.0.0.1:{s_new.server_port}/index.html")
        pg.wait_for_selector("details.cd")
        N = pg.evaluate(NEW_JS)
        b.close()
    fields = ["tab", "title", "level", "tags", "parent", "text", "links", "imgs"]
    new_ok = set(filter(None, a.allow_new.split(",")))
    added = [c["id"] for c in N["cards"] if c["id"] in new_ok]
    N["cards"] = [c for c in N["cards"] if c["id"] not in new_ok]
    oi = {c["id"]: (i, c) for i, c in enumerate(O["cards"])}
    ni = {c["id"]: (i, c) for i, c in enumerate(N["cards"])}
    if new_ok:
        print("new cards (not in old page, skipped):", ", ".join(added) or "none found")
    allowed = {}
    for x in filter(None, a.allow_diff.split(",")):
        cid, fl = x.split("=")
        allowed[cid] = set(fl.split("+"))
    bad = []
    if list(oi) != list(ni):
        bad.append(("ORDER/ID SET", f"old {len(oi)} ids, new {len(ni)} ids"))
    match = 0
    for cid, (_, oc) in oi.items():
        nc = ni.get(cid, (None, None))[1]
        if nc is None:
            bad.append((cid, "missing in new")); continue
        diffs = [f for f in fields if oc[f] != nc[f]]
        ok = [f for f in diffs if f in allowed.get(cid, ())]
        for f in ok:
            print(f"allowed change {cid}.{f}: {oc[f][:90]!r} -> {nc[f][:90]!r}")
        diffs = [f for f in diffs if f not in ok]
        if diffs:
            bad.append((cid, ", ".join(diffs)))
        else:
            match += 1
    unused = [f"{c}={'+'.join(sorted(fs))}" for c, fs in allowed.items() if c in oi and c in ni and not any(oi[c][1][f] != ni[c][1][f] for f in fs)]
    if unused:
        bad.append(("ALLOWED BUT UNCHANGED", ", ".join(unused)))
    if O["extras"] != N["extras"]:
        if a.allow_extras:
            print("allowed non-card text change:", repr(O["extras"])[:160], "->", repr(N["extras"])[:160])
        else:
            bad.append(("NON-CARD TEXT", repr(O["extras"])[:200] + " vs " + repr(N["extras"])[:200]))
    if O["chips"] != N["chips"]:
        if a.allow_chips_added and N["chips"][:len(O["chips"])] == O["chips"]:
            print("chips added:", N["chips"][len(O["chips"]):])
        else:
            bad.append(("CHIPS", f"{O['chips']} vs {N['chips']}"))
    print(f"filter chips identical: {O['chips'] == N['chips']} ({len(N['chips'])})")
    print(f"cards old={len(O['cards'])} new={len(N['cards'])} identical={match}/{len(O['cards'])}")
    print("order and ids identical:", list(oi) == list(ni))
    print("non-card tab text identical:", O["extras"] == N["extras"])
    for x in bad[:30]:
        print("MISMATCH", x)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
