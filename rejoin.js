// "Join QR" pop-up, the same in every game (Buzz In, Doodle Gallery, Party, Tap That Tune; Roll On has its own copy).
// Shows a big QR code and the 4-letter code so anyone who dropped out (or a late
// arrival) can scan back in. On the TV it's the 📱 Join QR button; on the host's
// phone it's in ⚙️ Host controls, so others can scan the host's screen.
window.joinQR = function (code) {
  const old = document.getElementById("joinqr-pop"); if (old) old.remove();
  const local = /[?&]local=1/.test(location.search) ? "&local=1" : "";
  const url = location.origin + location.pathname + "?join=" + code + local;
  const d = document.createElement("div"); d.id = "joinqr-pop";
  d.style.cssText = "position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:4vmin";
  d.innerHTML = `<div style="background:#fffaf0;color:#2b1d12;border-radius:24px;padding:4vmin;text-align:center;max-width:92vw;font-family:Nunito,system-ui,sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.5)">
    <div style="font-weight:900;font-size:min(5vmin,1.6rem)">📱 Scan to join or get back in</div>
    <div id="joinqr-box" style="background:#fff;padding:2vmin;border-radius:14px;display:inline-block;margin:2.5vmin 0"></div>
    <div style="font-weight:800;font-size:min(3.6vmin,1.1rem)">Or open the game and type the code <b style="letter-spacing:.15em;font-size:1.4em">${code}</b></div>
    <div style="font-weight:700;opacity:.75;font-size:min(3vmin,.95rem);margin-top:1vmin">Dropped out? Join with the <b>same name</b> to get your place back.</div>
    <button style="margin-top:2.5vmin;font:inherit;font-weight:900;font-size:min(3.6vmin,1.1rem);padding:.7em 2em;border-radius:14px;border:0;background:#ffc94a;color:#2a1b00;cursor:pointer">Close</button></div>`;
  document.body.appendChild(d);
  const size = Math.round(Math.min(innerWidth, innerHeight) * .5);
  try { new QRCode(document.getElementById("joinqr-box"), { text: url, width: 400, height: 400, correctLevel: QRCode.CorrectLevel.M }); const b = document.getElementById("joinqr-box"); b.querySelectorAll("img,canvas").forEach(e => { e.style.width = e.style.height = size + "px"; e.style.display = "block"; }); }
  catch (e) { document.getElementById("joinqr-box").textContent = url; }
  d.onclick = e => { if (e.target === d || e.target.tagName === "BUTTON") d.remove(); };
};

// A small "📱 Join QR" button in the corner of the TV, so it's always there.
window.joinQRButton = function (code, where) {
  let b = document.getElementById("joinqr-btn");
  if (!b) {
    b = document.createElement("button"); b.id = "joinqr-btn"; b.type = "button";
    b.textContent = "📱 Join QR"; b.title = "Show the QR code so people can join, or get back in";
    b.style.cssText = "position:fixed;z-index:150;font:800 clamp(12px,1.6vh,22px) Nunito,system-ui,sans-serif;padding:.45em .9em;border-radius:99px;border:2px solid rgba(255,255,255,.35);background:rgba(0,0,0,.55);color:#fff;cursor:pointer;opacity:.85;backdrop-filter:blur(4px)";
    document.body.appendChild(b);
  }
  const pos = where || "bl";
  b.style.left = pos.includes("l") ? "1.2vh" : ""; b.style.right = pos.includes("r") ? "1.2vh" : "";
  b.style.bottom = pos.includes("b") ? "1.2vh" : ""; b.style.top = pos.includes("t") ? "1.2vh" : "";
  const get = () => typeof code === "function" ? code() : code;
  b.onclick = e => { e.stopPropagation(); const c = get(); if (c) joinQR(c); };
  // only show it once there's a game code
  const vis = () => { b.style.display = get() ? "" : "none"; }; vis();
  clearInterval(window.__jqrT); window.__jqrT = setInterval(vis, 1000);
};

// Same name on a new phone = your old place back (score, turn and all).
// Renames every mention of the old player id inside the game state to the new one.
window.rebindId = function (root, a, b) {
  const seen = new Set();
  (function walk(o) {
    if (!o || typeof o !== "object" || seen.has(o)) return; seen.add(o);
    if (Array.isArray(o)) { for (let i = 0; i < o.length; i++) { if (o[i] === a) o[i] = b; else walk(o[i]); } return; }
    if (o instanceof Set) { if (o.has(a)) { o.delete(a); o.add(b); } return; }
    if (o instanceof Map) { if (o.has(a)) { o.set(b, o.get(a)); o.delete(a); } o.forEach(walk); return; }
    const pr = Object.getPrototypeOf(o); if (pr !== Object.prototype && pr !== null) return;
    for (const k of Object.keys(o)) { const v = o[k]; if (v === a) o[k] = b; else walk(v); if (k === a) { o[b] = o[a]; delete o[a]; } }
  })(root);
};
// find an offline player with this name (so two people both called Tom don't swap places)
window.findRejoin = function (players, name, newId, ms) {
  const n = String(name || "").trim().toLowerCase(); if (!n) return null;
  const old = Object.values(players).find(p => p && p.id !== newId && !p.bot && String(p.name || "").trim().toLowerCase() === n && (!p.seen || Date.now() - p.seen > (ms || 15000)));
  return old ? old.id : null;
};
