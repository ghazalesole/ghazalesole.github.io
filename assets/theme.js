const themeButton = document.getElementById('theme');
const preference = window.matchMedia('(prefers-color-scheme: dark)');
function currentMode() { return document.documentElement.dataset.mode || (preference.matches ? 'dark' : 'light'); }
function updateButton() {
  const dark = currentMode() === 'dark';
  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  themeButton.setAttribute('aria-label',label);
  themeButton.title = label;
  document.getElementById('sun').classList.toggle('hide',!dark);
  document.getElementById('moon').classList.toggle('hide',dark);
}
themeButton.addEventListener('click', () => {
  const mode = currentMode() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.mode = mode;
  try { localStorage.setItem('ghazale-portfolio-mode',mode); } catch {}
  updateButton();
});
preference.addEventListener('change',updateButton);
updateButton();