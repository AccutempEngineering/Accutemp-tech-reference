"""Prove the card move lost nothing.

Renders the OLD single-file page (from a git commit) and the NEW page (cards.js + app.js)
in headless Chrome, then compares every card: id, title, tab, parent group, order, tags,
text, links and images. Prints a per-card match count and exits non-zero on any mismatch.

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
      clone.querySelectorAll('details.cd, .quickcheck, .updated').forEach(x => x.remove());
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
    ap.add_argument("--chrome", default=shutil.which("google-chrome") or shutil.which("chromium"))
    a = ap.parse_args()
    tmp = tempfile.mkdtemp()
    old = subprocess.run(["git", "show", f"{a.old_ref}:index.html"], cwd=ROOT, capture_output=True, text=True, check=True).stdout
    open(os.path.join(tmp, "old.html"), "w").write(old)
    s_old, s_new = serve(tmp), serve(ROOT)
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=a.chrome, args=["--no-sandbox"])
        pg = b.new_page(service_workers="block")
        pg.goto(f"http://127.0.0.1:{s_old.server_port}/old.html")
        O = pg.evaluate(OLD_JS)
        pg.goto(f"http://127.0.0.1:{s_new.server_port}/index.html")
        N = pg.evaluate(NEW_JS)
        b.close()
    fields = ["tab", "title", "level", "tags", "parent", "text", "links", "imgs"]
    oi = {c["id"]: (i, c) for i, c in enumerate(O["cards"])}
    ni = {c["id"]: (i, c) for i, c in enumerate(N["cards"])}
    bad = []
    if list(oi) != list(ni):
        bad.append(("ORDER/ID SET", f"old {len(oi)} ids, new {len(ni)} ids"))
    match = 0
    for cid, (_, oc) in oi.items():
        nc = ni.get(cid, (None, None))[1]
        if nc is None:
            bad.append((cid, "missing in new")); continue
        diffs = [f for f in fields if oc[f] != nc[f]]
        if diffs:
            bad.append((cid, ", ".join(diffs)))
        else:
            match += 1
    if O["extras"] != N["extras"]:
        bad.append(("NON-CARD TEXT", repr(O["extras"])[:200] + " vs " + repr(N["extras"])[:200]))
    if O["chips"] != N["chips"]:
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
