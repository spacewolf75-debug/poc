(function(){
  try {
    console.log("✅ POC-REMOTE-LOADED on:", window.location.href);
    alert("✅ Remote JS executed on " + window.location.hostname);
    window.__POC_REMOTE = { loaded: true, ts: Date.now() };
    try { document.documentElement.setAttribute('data-poc-remote','1'); } catch(e){}
  } catch(e){ console.error('POC error', e && e.message); }
})();

