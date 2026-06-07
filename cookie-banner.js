/* MIMBAI — Cookie Banner (adapted from Paulo Barros design) */
function cookieAccept() {
  localStorage.setItem('mimbai_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
  document.getElementById('cookie-banner').classList.remove('show');
}
function cookieDecline() {
  localStorage.setItem('mimbai_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
  document.getElementById('cookie-banner').classList.remove('show');
}
function cookieSaveChoice() {
  const prefs = {
    necessary: true,
    analytics: document.getElementById('tog-analytics').checked,
    marketing: document.getElementById('tog-marketing').checked
  };
  localStorage.setItem('mimbai_cookie_consent', JSON.stringify(prefs));
  document.getElementById('cookie-banner').classList.remove('show');
}
window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('mimbai_cookie_consent')) {
    setTimeout(() => {
      const b = document.getElementById('cookie-banner');
      if (b) b.classList.add('show');
    }, 1200);
  }
});
