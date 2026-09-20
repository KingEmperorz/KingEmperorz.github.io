// =============================================
// SITE CONFIGURATION
// Change this one value when you pick the name.
// =============================================
const SITE_CONFIG = {
  studioName: "YOUR STUDIO"
};

document.querySelectorAll('[data-studio-name]').forEach(el => {
  el.textContent = SITE_CONFIG.studioName;
});

document.title = document.body.classList.contains('hudson-page')
  ? `Project Hudson | ${SITE_CONFIG.studioName}`
  : `${SITE_CONFIG.studioName} | Development Projects`;

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
