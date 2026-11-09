"""Browser checks for the field reference: phone layout, search, filters, offline, console errors.

Usage: python3 tools/test_site.py [--shots DIR]   (needs: pip install playwright)
Serves the repo at http://127.0.0.1:PORT/Accutemp-tech-reference/ like GitHub Pages does.
"""
import argparse, functools, http.server, os, shutil, sys, tempfile, threading, time
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails = []


def check(cond, msg):
    print(("PASS " if cond else "FAIL ") + msg)
    if not cond:
        fails.append(msg)


def serve():
    tmp = tempfile.mkdtemp()
    os.symlink(ROOT, os.path.join(tmp, "Accutemp-tech-reference"))
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=tmp))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def search(pg, q):
    pg.fill("#q", q)
    pg.wait_for_timeout(350)
    head = pg.inner_text(".reshead")
    titles = pg.eval_on_selector_all(".result > details > summary .ctitle", "els => els.map(e => e.childNodes[0] ? e.firstChild.textContent || e.textContent : '')")
    titles = pg.eval_on_selector_all(".result > details > summary .ctitle", "els => els.map(e => { const c = e.cloneNode(true); c.querySelectorAll('.snip').forEach(s => s.remove()); return c.textContent; })")
    return head, titles


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--shots", default="")
    ap.add_argument("--url", default="", help="test a live site instead, e.g. https://accutempengineering.github.io/Accutemp-tech-reference/")
    ap.add_argument("--chrome", default=shutil.which("google-chrome") or shutil.which("chromium"))
    a = ap.parse_args()
    if a.url:
        base = a.url
    else:
        srv = serve()
        base = f"http://localhost:{srv.server_port}/Accutemp-tech-reference/"
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=a.chrome, args=["--no-sandbox"])
        ctx = b.new_context(viewport={"width": 375, "height": 812}, device_scale_factor=2, is_mobile=True, has_touch=True)
        pg = ctx.new_page()
        errors = []
        pg.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errors.append(str(e)))
        pg.goto(base)
        pg.wait_for_selector("details.cd")
        if a.shots:
            pg.screenshot(path=os.path.join(a.shots, "1-phone-home.png"))
        # layout: no sideways scroll on any tab with everything expanded
        ntabs = pg.locator("#tabbar button").count()
        total = 0
        for t in range(ntabs):
            pg.locator("#tabbar button").nth(t).click()
            pg.click("text=Expand all") if pg.locator("text=Expand all").count() else None
            total += pg.locator("details.cd").count()
            sw = pg.evaluate("document.documentElement.scrollWidth")
            check(sw <= 375, f"tab {t + 1}: no horizontal scroll at 375px with all cards open (scrollWidth={sw})")
            opened = pg.evaluate("[...document.querySelectorAll('details.cd')].every(d => d.open)")
            check(opened, f"tab {t + 1}: Expand all opens every card")
            pg.click("text=Collapse all")
            check(pg.evaluate("[...document.querySelectorAll('details.cd')].every(d => !d.open)"), f"tab {t + 1}: Collapse all closes every card")
        check(total == 152, f"152 cards rendered across tabs ({total})")
        small = pg.evaluate("""[...document.querySelectorAll('#tabbar button, .tools button, #filterbtn, #q')].filter(e => e.getBoundingClientRect().height < 44).length""")
        check(small == 0, "main controls are at least 44px tall")
        # back to top
        pg.locator("#tabbar button").nth(2).click(); pg.click("text=Expand all")
        pg.mouse.wheel(0, 4000); pg.wait_for_timeout(300)
        check(pg.is_visible("#totop"), "back-to-top button shows after scrolling")
        pg.click("#totop"); pg.wait_for_timeout(900)
        check(pg.evaluate("window.scrollY") < 50, "back-to-top returns to top")
        check(pg.evaluate("getComputedStyle(document.getElementById('topbar')).position") == "sticky", "search/filter bar is sticky")
        pg.click("text=Collapse all")
        # search
        cases = {
            "rgecyb": "Rheem Classic (RGECYB)", "RGECYB-048": "Rheem Classic (RGECYB)", "transformer": "Transformer keeps failing",
            "flame sens": "Flame sensing", "tesp": "Total external static pressure", "Gasket": "Door won't seal",
            "kit03033": None, "hsi": None, "superheat": None, "r410a": None, "City Multi": None,
        }
        for q, want in cases.items():
            head, titles = search(pg, q)
            print(f"  search {q!r}: {head} | top: {titles[:3]}")
            if want:
                check(bool(titles) and want.lower() in titles[0].lower(), f"search {q!r} ranks '{want}' first")
        head, titles = search(pg, "flame sens")
        check(pg.locator(".result mark").count() > 0, "search terms are highlighted")
        if a.shots:
            pg.click(".result >> nth=0 >> summary")
            pg.screenshot(path=os.path.join(a.shots, "2-phone-search-flame.png"))
        # chip + search
        pg.fill("#q", ""); pg.wait_for_timeout(300)
        pg.click("#filterbtn"); pg.click("#chips .chip:has-text('Wiring / Schematics')"); pg.wait_for_timeout(200)
        h1, t1 = search(pg, "")
        pg.fill("#q", "transformer"); pg.wait_for_timeout(350)
        h2 = pg.inner_text(".reshead")
        print("  chip Wiring:", h1, "| + 'transformer':", h2)
        check(pg.evaluate("[...document.querySelectorAll('.result > details')].every(d => d.dataset.tags.split(' ').includes('wiring'))"), "chip + search only returns cards with that tag")
        check(int(h2.split()[0]) < int(h1.split()[0]), "adding a search word narrows a chip filter")
        pg.click("#clearfilter"); pg.fill("#q", ""); pg.wait_for_timeout(300)
        # deep link + quick check + last updated
        pg.goto(base + "#walk-152"); pg.wait_for_timeout(400)
        check(pg.evaluate("document.getElementById('walk-152').open"), "deep link #walk-152 opens the card")
        check(pg.locator("#walk-152 .quickcheck").count() == 1, "quick check box shows on walk-152")
        check("Last updated:" in pg.inner_text("#walk-152 .updated"), "Last updated line shows")
        if a.shots:
            pg.screenshot(path=os.path.join(a.shots, "3-phone-card-quickcheck.png"))
        # offline
        pg.goto(base); pg.wait_for_timeout(500)
        pg.evaluate("navigator.serviceWorker.ready.then(() => true)")
        pg.reload(); pg.wait_for_timeout(800)
        check(pg.evaluate("!!navigator.serviceWorker.controller"), "service worker controls the page")
        ctx.set_offline(True)
        pg.reload(); pg.wait_for_selector("details.cd", timeout=8000)
        n = pg.evaluate("document.querySelectorAll('#tabbar button').length")
        check(n == 4, "offline reload still shows the page")
        head, titles = search(pg, "rgecyb")
        check(bool(titles), "offline search works")
        check(pg.is_visible("#netstate"), "offline badge shows")
        pg.goto(base + "index.html?x=1"); pg.wait_for_selector("details.cd", timeout=8000)
        check(True, "offline load of index.html works")
        ctx.set_offline(False)
        # supply finder untouched and loads
        sf = ctx.new_page(); sferr = []
        sf.on("pageerror", lambda e: sferr.append(str(e)))
        sf.goto(base + "supplyfinder/"); sf.wait_for_timeout(800)
        check(sf.title() != "" and not sferr, f"supplyfinder page loads with no script errors ({sf.title()})")
        sf.wait_for_timeout(1500)
        scope = sf.evaluate("navigator.serviceWorker.getRegistration().then(r => r ? r.scope : '')")
        if base.startswith("https"):
            check(scope.endswith("/supplyfinder/"), f"supplyfinder keeps its own worker ({scope})")
        else:
            print(f"SKIP supplyfinder registers its worker only on https (local scope seen: {scope})")
        # the supply finder worker must not wipe the field reference offline copy
        ctx.set_offline(True)
        pg.goto(base); pg.wait_for_selector("details.cd", timeout=8000)
        check(pg.locator("#tabbar button").count() == 4, "field reference still opens offline after visiting supplyfinder")
        ctx.set_offline(False)
        # desktop
        d = b.new_page(viewport={"width": 1280, "height": 900})
        derr = []
        d.on("pageerror", lambda e: derr.append(str(e)))
        d.on("console", lambda m: derr.append(m.text) if m.type == "error" else None)
        d.goto(base); d.wait_for_selector("details.cd")
        check(d.evaluate("document.documentElement.scrollWidth") <= 1280, "desktop: no horizontal scroll")
        if a.shots:
            d.screenshot(path=os.path.join(a.shots, "4-desktop.png"))
        check(not derr, f"desktop console clean {derr[:3]}")
        check(not errors, f"phone console clean {errors[:3]}")
        b.close()
    print("\nALL PASSED" if not fails else f"\n{len(fails)} FAILED")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
