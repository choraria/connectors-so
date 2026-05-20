(function () {
  var html = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function syncLabel() {
    var isDark = html.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode');
  }

  syncLabel();

  btn.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('cnct-theme', next); } catch (e) {}
    syncLabel();
  });
})();
