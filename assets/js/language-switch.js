(function () {
  function setLanguage(lang) {
    // 切换内容显示
    var en = document.getElementById('content-en');
    var zh = document.getElementById('content-zh');
    if (en) en.style.display = lang === 'en' ? 'block' : 'none';
    if (zh) zh.style.display = lang === 'zh' ? 'block' : 'none';

    // 切换导航栏链接和文本
    document.querySelectorAll('.masthead__menu-item a[data-en-text]').forEach(function (a) {
      a.textContent = a.getAttribute('data-' + lang + '-text');
      a.setAttribute('href', a.getAttribute('data-' + lang + '-url'));
    });

    // 切换按钮文本
    var btn = document.getElementById('lang-switch');
    if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';

    // 更新 <html> lang 属性
    document.documentElement.lang = lang;

    // 保存偏好
    localStorage.setItem('lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    var btn = document.getElementById('lang-switch');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('lang') || 'en';
        setLanguage(current === 'en' ? 'zh' : 'en');
      });
    }
  });
})();
