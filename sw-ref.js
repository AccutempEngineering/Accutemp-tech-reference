/* Accutemp Field Reference offline support.
   Network first: when there is signal, techs always get the newest cards.
   No signal: the last copy saved on the phone is used.
   Bump VERSION when this file's caching rules change. The supplyfinder/ page has its own worker and is left alone. */
var VERSION = "accutemp-ref-v2";
var CORE = ["./", "index.html", "app.js", "styles.css", "cards.js", "app.webmanifest",
  "app-icon-180.png", "app-icon-192.png", "app-icon-512.png",
  "refs/capacitor-load-test-guide.jpg", "refs/emerson-compressor-not-running-flowchart.jpg"];
var TIMEOUT_MS = 5000;

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(CORE.map(function (u) {
      return fetch(u, { cache: "no-cache" }).then(function (r) { if (r.ok) return c.put(u, r); }).catch(function () {});
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("accutemp-ref-") === 0 && k !== VERSION; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function validCards(text) {
  try { JSON.parse(text.slice(text.indexOf("=") + 1).trim().replace(/;\s*$/, "")); return true; } catch (e) { return false; }
}

function fromNetwork(req) {
  return new Promise(function (resolve, reject) {
    var t = setTimeout(function () { reject(new Error("timeout")); }, TIMEOUT_MS);
    fetch(req, { cache: "no-cache" }).then(function (r) { clearTimeout(t); resolve(r); }, function (err) { clearTimeout(t); reject(err); });
  });
}

function cached(req, isNav) {
  return caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (m) {
      if (m || !isNav) return m;
      return c.match("index.html").then(function (x) { return x || c.match("./"); });
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var scope = new URL(self.registration.scope);
  if (url.origin !== location.origin || url.pathname.indexOf(scope.pathname) !== 0) return;
  if (url.pathname.indexOf(scope.pathname + "supplyfinder/") === 0) return; // supply finder handles itself
  var isNav = req.mode === "navigate";
  var isCards = /\/cards\.js$/.test(url.pathname);
  e.respondWith(fromNetwork(req).then(function (res) {
    if (!res || !res.ok || res.type === "opaque") return res;
    if (isCards) {
      return res.clone().text().then(function (txt) {
        if (!validCards(txt)) {
          // A broken edit was pushed: keep using the last good copy if we have one.
          return cached(req, false).then(function (m) { return m || res; });
        }
        return caches.open(VERSION).then(function (c) { c.put(req, res.clone()); return res; });
      });
    }
    var copy = res.clone();
    caches.open(VERSION).then(function (c) { c.put(isNav ? "index.html" : req, copy); });
    return res;
  }).catch(function () {
    return cached(req, isNav).then(function (m) {
      return m || new Response("Offline and this item was not saved yet.", { status: 503, headers: { "Content-Type": "text/plain" } });
    });
  }));
});
