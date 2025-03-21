async function setLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const strings = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) el.textContent = strings[key];
  });
}
setLanguage('en');
