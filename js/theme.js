const btn = document.getElementById('theme-switch');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
}
btn.addEventListener('click', () => {
  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
    localStorage.setItem('theme', 'theme-light');
  }
});
