/**
 * Pure helpers for the portfolio.
 * No DOM, no network, no side effects, so this file is unit-testable
 * with `node --test` and importable straight into the browser modules.
 */

const SPECTRAL_CLASSES = {
  shell: '#A8C8FF',
  python: '#FFE9B8',
  rust: '#FFB86B',
  java: '#FFF3D6',
};

/** Colour for anything outside the mapped languages (M class, red). */
export const SPECTRAL_DEFAULT = '#FF9B8A';

/** Repos that exist but should not appear on the site. */
export const HIDDEN_REPOS = ['webpage', 'SegfaultSorcerer'];

const CAREER_START = new Date('2015-06-01T00:00:00Z');

/** Full years of professional experience, so the number stays current by itself. */
export function experienceYears(now = new Date(), start = CAREER_START) {
  let years = now.getUTCFullYear() - start.getUTCFullYear();
  const months = now.getUTCMonth() - start.getUTCMonth();
  if (months < 0 || (months === 0 && now.getUTCDate() < start.getUTCDate())) {
    years -= 1;
  }
  return years;
}

/**
 * Star radius in px from the GitHub star count.
 * Logarithmic with a floor so a zero-star repo is still clearly visible.
 */
export function starRadius(stars) {
  const n = typeof stars === 'number' && Number.isFinite(stars) && stars > 0 ? stars : 0;
  return 3.5 + 2.6 * Math.log1p(n);
}

/** Spectral class colour for a repository language. */
export function spectralColor(language) {
  if (!language) return SPECTRAL_DEFAULT;
  return SPECTRAL_CLASSES[String(language).toLowerCase()] || SPECTRAL_DEFAULT;
}

/** Own work only: no forks, nothing on the hidden list. */
export function visibleRepos(repos, hidden = HIDDEN_REPOS) {
  if (!Array.isArray(repos)) return [];
  return repos.filter((repo) => repo && !repo.fork && !hidden.includes(repo.name));
}

/** "Aug 2026" / "Aug. 2026". Empty string when the input is not a date. */
export function formatMonthYear(iso, lang = 'en') {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

const HTML_ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape a value before it goes into innerHTML. */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
}

/** Look up a translation, falling back to English and then to the key. */
export function translate(dict, lang, key) {
  const table = dict[lang];
  if (table && key in table) return table[key];
  const fallback = dict.en;
  if (fallback && key in fallback) return fallback[key];
  return key;
}
