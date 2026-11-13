/* Accutemp Field Reference app: renders cards.js, search, filters, offline. */
(function () {
  "use strict";
  var DATA = window.ACCUTEMP_DATA;
  var main = document.getElementById("main");
  if (!DATA || !DATA.tabs) {
    main.innerHTML = '<div class="loaderr"><b>The card list did not load.</b><br>Check your signal and reload. If it keeps happening, tell the office: the cards.js file may have a typo.</div>';
    return;
  }

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var state = { tab: 0, q: "", chip: "" };
  var cards = [];      // flat index of every card
  var byId = {};
  var chipLabel = {};
  (DATA.chips || []).forEach(function (c) { chipLabel[c.tag] = c.label; });

  // ---------- helpers ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function norm(s) {
    return String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  function htmlText(h) { var t = document.createElement("template"); t.innerHTML = h; return t.content.textContent || ""; }
  function fmtDate(d) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || "");
    return m ? MONTHS[+m[2] - 1] + " " + (+m[3]) + ", " + m[1] : "";
  }
  function attr(el, k) { return el.getAttribute(k); }

  // Build body HTML for a card from simple fields (for new cards) or stored HTML.
  function ownHtml(card) {
    var out = "";
    (card.content || []).forEach(function (n) { if (n.html != null) out += n.html; });
    if (!card.content || !card.content.length) {
      if (card.intro) out += '<p class="ptext">' + card.intro + "</p>";
      if (card.rows && card.rows.length) {
        out += '<div class="ftable">' + card.rows.map(function (r) {
          return '<div class="frow"><div class="flabel">' + r[0] + '</div><div class="fval">' + r[1] + "</div></div>";
        }).join("") + "</div>";
      }
      if (card.tip) out += '<div class="tip"><b>Field tip:</b> ' + card.tip + "</div>";
      (card.sources || []).forEach(function (s) {
        out += '<div class="reflink">' + (s.label || "Source") + ': <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + (s.name || s.url) + "</a></div>";
      });
    }
    return out;
  }
  function children(card) { return (card.content || []).filter(function (n) { return n.id; }); }

  // ---------- index ----------
  function indexNodes(nodes, tabIdx, parents) {
    nodes.forEach(function (n) {
      if (!n.id) return;
      var own = ownHtml(n);
      var entry = {
        card: n, tab: tabIdx, parents: parents.slice(), own: own,
        titleText: htmlText(n.title), order: cards.length
      };
      cards.push(entry); byId[n.id] = entry;
      indexNodes(n.content || [], tabIdx, parents.concat([n]));
    });
  }
  DATA.tabs.forEach(function (t, i) { if (!t.hidden) indexNodes(t.content, i, []); });
  var indexed = false;
  function buildSearchIndex() {
    if (indexed) return;
    cards.forEach(function (e) {
      var body = htmlText(e.own);
      var tagText = (e.card.tags || []).map(function (t) { return t + " " + (chipLabel[t] || ""); }).join(" ");
      var crumb = DATA.tabs[e.tab].label + " " + e.parents.map(function (p) { return htmlText(p.title); }).join(" ");
      crumb += " " + (e.card.sources || []).map(function (s) { return htmlText(s.name || ""); }).join(" ");
      e.bodyText = body;
      e.nTitle = norm(e.titleText); e.cTitle = e.nTitle.replace(/ /g, "");
      e.nBody = norm(body); e.cBody = e.nBody.replace(/ /g, "");
      e.nMeta = norm(tagText + " " + crumb); e.cMeta = e.nMeta.replace(/ /g, "");
    });
    indexed = true;
  }

  function countOcc(hay, needle) { var c = 0, i = 0; while ((i = hay.indexOf(needle, i)) !== -1) { c++; i += needle.length; if (c > 20) break; } return c; }

  function search(q, chip) {
    buildSearchIndex();
    var toks = norm(q).split(" ").filter(Boolean);
    var res = [];
    cards.forEach(function (e) {
      if (chip && (e.card.tags || []).indexOf(chip) === -1) return;
      var score = 0;
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i], s = 0;
        // Joined-up matching (ignores spaces/dashes, e.g. "r410a" finds "R-410A") only for
        // model-number-like or longer words, so short words do not match across word breaks.
        var joined = t.length >= 5 || /\d/.test(t);
        if (e.nTitle.indexOf(t) !== -1 || (joined && e.cTitle.indexOf(t) !== -1)) {
          s += (" " + e.nTitle).indexOf(" " + t) !== -1 ? 100 : 70;
        }
        if (e.nMeta.indexOf(t) !== -1 || (joined && e.cMeta.indexOf(t) !== -1)) s += 15;
        var occ = countOcc(e.nBody, t);
        if (occ) s += 10 + Math.min(occ, 10);
        else if (joined && e.cBody.indexOf(t) !== -1) s += 8;
        if (!s) return;          // every word must match somewhere
        score += s;
      }
      if (!e.own.trim() && !toks.length) return; // chip only: skip pure group headers
      res.push({ e: e, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score || a.e.order - b.e.order; });
    return { toks: toks, list: res };
  }

  // ---------- rendering ----------
  function quickCheckHtml(card) {
    if (!card.quickCheck || !card.quickCheck.length) return "";
    return '<div class="quickcheck"><div class="qh">Check this first</div><ul>' + card.quickCheck.map(function (q) {
      return typeof q === "string" ? "<li>" + q + "</li>" : "<li><b>" + q.label + ":</b> " + q.text + "</li>";
    }).join("") + "</ul></div>";
  }
  // Reviewed date (kept apart from "Last updated") and a sources line for sources not already linked in the card body.
  function metaHtml(card, bodySoFar) {
    var out = "";
    if (card.reviewed) {
      out += '<div class="reviewed"><b>Reviewed:</b> ' + fmtDate(card.reviewed) + (card.reviewNote ? ". " + card.reviewNote : "") + "</div>";
    }
    var extra = (card.sources || []).filter(function (s) {
      return bodySoFar.indexOf('href="' + s.url + '"') === -1 && bodySoFar.indexOf('href="' + esc(s.url) + '"') === -1;
    });
    if (extra.length) {
      out += '<div class="srcline"><b>Sources:</b> ' + extra.map(function (s) {
        return (s.label ? s.label + ": " : "") + '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + (s.name || s.url) + "</a>" + (s.date ? " (" + s.date + ")" : "");
      }).join("; ") + "</div>";
    }
    return out ? '<div class="cardmeta">' + out + "</div>" : "";
  }
  function cardHtml(card, opts) {
    opts = opts || {};
    var cls = "card" + (card.level === "sub" ? " sub" : "");
    var tags = (card.tags || []).map(function (t) { return " tg-" + t; }).join("");
    var h = '<details class="cd' + tags + '" id="' + esc(card.id) + '" data-tags="' + esc((card.tags || []).join(" ")) + '"' + (opts.open ? " open" : "") + ">";
    h += '<summary class="' + cls + '"><span class="ctitle">' + card.title + (opts.snip ? '<span class="snip">' + opts.snip + "</span>" : "") + '</span><span class="arrow">&#9660;</span></summary>';
    h += '<div class="accordion-body">' + quickCheckHtml(card);
    var own = "";
    if (card.content && card.content.length) {
      card.content.forEach(function (n) {
        if (n.id) { if (!opts.ownOnly) h += cardHtml(n); }
        else { h += n.html; own += n.html; }
      });
    } else {
      own = ownHtml(card); h += own;
    }
    if (card.updated) h += '<div class="updated">Last updated: ' + fmtDate(card.updated) + "</div>";
    h += metaHtml(card, own);
    h += "</div></details>";
    return h;
  }

  var tabbar = document.getElementById("tabbar");
  tabbar.innerHTML = DATA.tabs.map(function (t, i) {
    if (t.hidden) return "";
    return '<button type="button" data-tab="' + i + '"><span class="icon">' + t.icon + "</span>" + t.label + "</button>";
  }).join("");

  var chipsEl = document.getElementById("chips");
  document.getElementById("searchintro").textContent = "Tap a keyword to filter every tab down to matching cards. Type in the search box too, to narrow it further.";
  chipsEl.innerHTML = '<button type="button" class="chip clearchip" data-chip="">Clear / Show All</button>' +
    DATA.chips.map(function (c) { return '<button type="button" class="chip" data-chip="' + esc(c.tag) + '">' + c.label + "</button>"; }).join("");

  function renderTab() {
    var t = DATA.tabs[state.tab];
    var h = '<div class="tools"><button type="button" data-act="expand">Expand all</button><button type="button" data-act="collapse">Collapse all</button></div>';
    t.content.forEach(function (n) { h += n.id ? cardHtml(n) : n.html; });
    main.innerHTML = h;
  }

  function snippet(e, toks) {
    if (!toks.length) return "";
    var body = e.bodyText.replace(/\s+/g, " ");
    var low = body.toLowerCase(), at = -1;
    for (var i = 0; i < toks.length && at < 0; i++) at = low.indexOf(toks[i]);
    if (at < 0) return "";
    var st = Math.max(0, at - 40), en = Math.min(body.length, at + 90);
    return (st ? "..." : "") + esc(body.slice(st, en)) + (en < body.length ? "..." : "");
  }

  function renderResults() {
    var r = search(state.q, state.chip);
    var parts = [];
    if (state.q) parts.push('"' + esc(state.q) + '"');
    if (state.chip) parts.push("filter: " + (chipLabel[state.chip] || state.chip));
    var h = '<div class="reshead">' + r.list.length + " result" + (r.list.length === 1 ? "" : "s") + " for " + parts.join(" + ") + "</div>";
    if (!r.list.length) {
      h += '<div class="empty">No cards match. Try fewer or shorter words (for example a model prefix like <b>rgecyb</b>), check spelling, or clear the filter.</div>';
    }
    var inRes = {};
    r.list.forEach(function (x) { inRes[x.e.card.id] = 1; });
    r.list.forEach(function (x) {
      var e = x.e, card = e.card;
      var crumb = [DATA.tabs[e.tab].label].concat(e.parents.map(function (p) { return p.title; })).join(" &rsaquo; ");
      var kidsIn = children(card).some(function (k) { return inRes[k.id]; });
      h += '<div class="result"><div class="crumb">' + crumb + "</div>" +
        cardHtml(card, { snip: snippet(e, r.toks), ownOnly: kidsIn }) + "</div>";
    });
    main.innerHTML = h;
    if (r.toks.length) highlight(main, r.toks);
  }

  function highlight(root, toks) {
    var pats = toks.map(function (t) { return t.split("").map(function (c) { return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("[^a-z0-9]?"); });
    var re = new RegExp("(" + pats.join("|") + ")", "gi");
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!n.nodeValue.trim() || p.closest(".crumb,.reshead,.empty,.tools,script,style,mark")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var v = n.nodeValue; re.lastIndex = 0;
      if (!re.test(v)) return;
      re.lastIndex = 0;
      var frag = document.createDocumentFragment(), last = 0, m;
      while ((m = re.exec(v))) {
        if (!m[0]) { re.lastIndex++; continue; }
        frag.appendChild(document.createTextNode(v.slice(last, m.index)));
        var mk = document.createElement("mark"); mk.textContent = m[0]; frag.appendChild(mk);
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(v.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
  }

  function syncUi() {
    var searching = !!(state.q.trim() || state.chip);
    Array.prototype.forEach.call(tabbar.children, function (b) { b.classList.toggle("on", !searching && +attr(b, "data-tab") === state.tab); });
    Array.prototype.forEach.call(chipsEl.children, function (b) { b.classList.toggle("on", attr(b, "data-chip") === state.chip && !!state.chip); });
    var af = document.getElementById("activefilter");
    af.classList.toggle("show", !!state.chip);
    document.getElementById("activelabel").textContent = state.chip ? "Filter: " + htmlText(chipLabel[state.chip] || state.chip) : "";
    document.getElementById("clearq").hidden = !state.q;
    document.getElementById("filterbtn").classList.toggle("on", !!state.chip);
  }

  function render() {
    syncUi();
    if (state.q.trim() || state.chip) renderResults(); else renderTab();
  }

  // ---------- events ----------
  var qEl = document.getElementById("q"), timer = null;
  qEl.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () { state.q = qEl.value; render(); window.scrollTo(0, 0); }, 150);
  });
  qEl.addEventListener("keydown", function (ev) { if (ev.key === "Enter") { qEl.blur(); } });
  document.getElementById("clearq").addEventListener("click", function () { qEl.value = ""; state.q = ""; render(); qEl.focus(); });
  var drawer = document.getElementById("drawer"), fbtn = document.getElementById("filterbtn");
  fbtn.addEventListener("click", function () {
    var open = !drawer.classList.contains("open");
    drawer.classList.toggle("open", open); fbtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  chipsEl.addEventListener("click", function (ev) {
    var b = ev.target.closest(".chip"); if (!b) return;
    var c = attr(b, "data-chip");
    state.chip = (c && c !== state.chip) ? c : "";
    drawer.classList.remove("open"); fbtn.setAttribute("aria-expanded", "false");
    render(); window.scrollTo(0, 0);
  });
  document.getElementById("clearfilter").addEventListener("click", function () { state.chip = ""; render(); });
  tabbar.addEventListener("click", function (ev) {
    var b = ev.target.closest("button"); if (!b) return;
    state.tab = +attr(b, "data-tab"); state.q = ""; state.chip = ""; qEl.value = "";
    try { localStorage.setItem("accutemp-tab", String(state.tab)); } catch (e) {}
    render(); window.scrollTo(0, 0);
  });
  main.addEventListener("click", function (ev) {
    var b = ev.target.closest(".tools button"); if (!b) return;
    var open = attr(b, "data-act") === "expand";
    Array.prototype.forEach.call(main.querySelectorAll("details.cd"), function (d) { d.open = open; });
  });
  var totop = document.getElementById("totop");
  window.addEventListener("scroll", function () { totop.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  function openFromHash() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    var e = id && byId[id];
    if (!e) return false;
    state.tab = e.tab; state.q = ""; state.chip = ""; qEl.value = "";
    render();
    var el = document.getElementById(id);
    var p = el; while (p) { if (p.tagName === "DETAILS") p.open = true; p = p.parentElement; }
    var top = el.getBoundingClientRect().top + window.scrollY - document.getElementById("topbar").offsetHeight - 6;
    window.scrollTo(0, top);
    return true;
  }
  window.addEventListener("hashchange", openFromHash);

  var net = document.getElementById("netstate");
  function netUi() { net.hidden = navigator.onLine !== false; }
  window.addEventListener("online", netUi); window.addEventListener("offline", netUi); netUi();

  // ---------- start ----------
  try { var saved = +localStorage.getItem("accutemp-tab"); if (saved >= 0 && saved < DATA.tabs.length && !DATA.tabs[saved].hidden) state.tab = saved; } catch (e) {}
  if (!openFromHash()) render();

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("sw-ref.js", { scope: "./" }).catch(function () {});
  }
})();
