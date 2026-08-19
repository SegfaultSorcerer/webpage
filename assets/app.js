/**
 * Entry module. Boots the page and owns navigation and scroll reveal.
 * Sections are wired in by later modules.
 */

import { initLanguage, translations, currentLang, onLanguageChange } from './i18n.js';
import { initStarfield } from './starfield.js';
import { experienceYears, visibleRepos, spectralColor, formatMonthYear, escapeHtml, translate } from './lib.js';
import { fetchRepos } from './github.js';
import { initCatalogue } from './catalogue.js';

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

function initHeroSequence() {
  const start = () => document.body.classList.add('is-loaded');
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start).catch(start);
    // Never let a font failure hold the hero hostage.
    setTimeout(start, 1200);
  } else {
    start();
  }
}

function initFacts() {
  const slot = document.querySelector('[data-fact="years"]');
  if (slot) slot.textContent = String(experienceYears());
}

function renderTransmissions(container, repos, lang) {
  if (!container) return;

  if (repos === null) {
    container.innerHTML = `<p class="feed__status mono">${escapeHtml(translate(translations, lang, 'transmissions.error'))}</p>`;
    return;
  }

  const shown = visibleRepos(repos);
  if (!shown.length) {
    container.innerHTML = `<p class="feed__status mono">${escapeHtml(translate(translations, lang, 'transmissions.empty'))}</p>`;
    return;
  }

  const starsLabel = translate(translations, lang, 'transmissions.stars');

  container.innerHTML = shown.map((repo) => `
    <a class="feed__item" href="${escapeHtml(repo.url)}" target="_blank" rel="noopener">
      <span class="feed__name">${escapeHtml(repo.name)}</span>
      <p class="feed__desc">${escapeHtml(repo.description)}</p>
      <span class="feed__meta">
        <i style="--c:${spectralColor(repo.language)}"></i>
        <span>${escapeHtml(repo.language || '')}</span>
        <span>${repo.stars} ${escapeHtml(starsLabel)}</span>
        <span>${escapeHtml(formatMonthYear(repo.updatedAt, lang))}</span>
      </span>
    </a>
  `).join('');
}

function renderRepoCount(repos) {
  const slot = document.querySelector('[data-fact="repos"]');
  const cell = document.querySelector('[data-fact-slot="repos"]');
  if (!slot || !cell || !repos) return;
  slot.textContent = String(visibleRepos(repos).length);
  cell.hidden = false;
}

async function initData() {
  const catalogueRoot = document.getElementById('catalogue-root');
  const feed = document.getElementById('feed');

  let repos = null;
  try {
    repos = await fetchRepos();
  } catch (error) {
    console.warn('GitHub unavailable, falling back to static catalogue data.', error);
  }

  initCatalogue(catalogueRoot, repos);
  renderTransmissions(feed, repos, currentLang());
  renderRepoCount(repos);

  onLanguageChange((lang) => renderTransmissions(feed, repos, lang));
}

function boot() {
  initLanguage();
  initFacts();
  initHeroSequence();
  initStarfield(document.getElementById('starfield'));
  initTopbar();
  initMobileMenu();
  initScrollReveal();
  initActiveSection();
  initData();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
