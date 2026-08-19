import { translate } from './lib.js';

export const translations = {
  en: {
    'a11y.skip': 'Skip to content',
    'a11y.lang': 'Switch language to German',
    'a11y.menu': 'Open menu',

    'nav.observer': 'Observer',
    'nav.instruments': 'Instruments',
    'nav.catalogue': 'Catalogue',
    'nav.log': 'Log',
    'nav.transmissions': 'Transmissions',

    'footer.built': 'Hand-written HTML, CSS and JavaScript. No frameworks.',
  },
  de: {
    'a11y.skip': 'Zum Inhalt springen',
    'a11y.lang': 'Sprache auf Englisch umstellen',
    'a11y.menu': 'Menü öffnen',

    'nav.observer': 'Beobachter',
    'nav.instruments': 'Instrumente',
    'nav.catalogue': 'Katalog',
    'nav.log': 'Logbuch',
    'nav.transmissions': 'Signale',

    'footer.built': 'Handgeschriebenes HTML, CSS und JavaScript. Ohne Framework.',
  },
};

const STORAGE_KEY = 'lang';
const listeners = new Set();
let lang = 'en';

export function currentLang() {
  return lang;
}

export function onLanguageChange(fn) {
  listeners.add(fn);
}

export function applyLanguage(next) {
  lang = next === 'de' ? 'de' : 'en';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = translate(translations, lang, el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-label]').forEach((el) => {
    el.setAttribute('aria-label', translate(translations, lang, el.dataset.i18nLabel));
  });

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'DE' : 'EN';

  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode */ }

  listeners.forEach((fn) => fn(lang));
}

export function initLanguage() {
  let stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch { /* private mode */ }
  applyLanguage(stored === 'de' ? 'de' : 'en');

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => applyLanguage(lang === 'en' ? 'de' : 'en'));
  }
}
