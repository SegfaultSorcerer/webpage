/**
 * Entry module. Boots the page and owns navigation and scroll reveal.
 * Sections are wired in by later modules.
 */

const SECTION_IDS = ['observer', 'instruments', 'catalogue', 'log', 'transmissions'];

function initTopbar() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  const onScroll = () => topbar.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if (open) { close(); return; }
    nav.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((el) => observer.observe(el));
}

function initActiveSection() {
  const links = new Map();
  document.querySelectorAll('.topbar__nav a').forEach((link) => {
    links.set(link.getAttribute('href').slice(1), link);
  });
  if (!links.size || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = links.get(entry.target.id);
      if (link) link.classList.toggle('is-current', entry.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  SECTION_IDS.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function boot() {
  initTopbar();
  initMobileMenu();
  initScrollReveal();
  initActiveSection();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
