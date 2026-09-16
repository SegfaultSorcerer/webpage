import { starRadius, spectralColor, escapeHtml, translate } from './lib.js';
import { translations, currentLang, onLanguageChange } from './i18n.js';
import { starsByName } from './github.js';

/**
 * The five tools, positioned by hand in the 100x72 chart viewBox.
 * spring-grimoire sits at the centre because the other tools plug into it.
 */
const TOOLS = [
  { name: 'heap-seance',        x: 32, y: 14, language: 'Python', url: 'https://github.com/SegfaultSorcerer/heap-seance' },
  { name: 'thread-necromancer', x: 70, y: 22, language: 'Shell',  url: 'https://github.com/SegfaultSorcerer/thread-necromancer' },
  { name: 'spring-grimoire',    x: 50, y: 40, language: 'Shell',  url: 'https://github.com/SegfaultSorcerer/spring-grimoire' },
  { name: 'conduit',            x: 14, y: 47, language: 'Rust',   url: 'https://github.com/SegfaultSorcerer/conduit' },
  { name: 'gc-exorcist',        x: 63, y: 61, language: 'Shell',  url: 'https://github.com/SegfaultSorcerer/gc-exorcist' },
];

const EDGES = [
  ['heap-seance', 'spring-grimoire'],
  ['thread-necromancer', 'spring-grimoire'],
  ['conduit', 'spring-grimoire'],
  ['spring-grimoire', 'gc-exorcist'],
];

const SVG_NS = 'http://www.w3.org/2000/svg';
const FALLBACK_RADIUS = 5;
/** Height of the chart's coordinate space, for turning tool.y into a percentage. */
const CHART_HEIGHT = 72;

function byName(name) {
  return TOOLS.find((tool) => tool.name === name);
}

/** Localised "N star"/"N stars" word for a count, sharing the singular/plural keys. */
function starWord(lang, count) {
  const key = count === 1 ? 'catalogue.star_one' : 'catalogue.star_other';
  return translate(translations, lang, key);
}

/**
 * Accessible name for a chart star: "name, N star(s), opens in a new tab".
 * This is the star's whole name, so the visible label must not be read again.
 */
function chartTitleText(tool, count) {
  const lang = currentLang();
  const newTab = translate(translations, lang, 'a11y.new_tab');
  if (count === null) return `${tool.name}, ${newTab}`;
  return `${tool.name}, ${count} ${starWord(lang, count)}, ${newTab}`;
}

/** name -> license (SPDX id or null), for the entry panel. */
function licensesByName(repos) {
  const map = new Map();
  (repos || []).forEach((repo) => map.set(repo.name, repo.license));
  return map;
}

export function initCatalogue(root, repos) {
  if (!root) return;
  const plot = root.querySelector('.chart__plot');
  const lineLayer = root.querySelector('.chart__lines');
  const starLayer = root.querySelector('.chart__stars');
  const entry = root.querySelector('.entry');
  if (!plot || !lineLayer || !starLayer || !entry) return;

  const stars = starsByName(repos);
  const licenses = licensesByName(repos);
  const hasData = stars.size > 0;
  const named = [];

  EDGES.forEach(([fromName, toName]) => {
    const from = byName(fromName);
    const to = byName(toName);
    if (!from || !to) return;
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    lineLayer.appendChild(line);
  });

  TOOLS.forEach((tool) => {
    const count = hasData ? (stars.get(tool.name) ?? 0) : null;
    const licence = licenses.get(tool.name) ?? null;
    // Radius is in real pixels: it encodes the star count, so it stays the same
    // size at every viewport instead of shrinking with the chart.
    const radius = count === null ? FALLBACK_RADIUS : starRadius(count);
    const colour = spectralColor(tool.language);

    const link = document.createElement('a');
    link.className = 'chart__star';
    link.href = tool.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.dataset.tool = tool.name;
    link.style.setProperty('--x', `${tool.x}%`);
    link.style.setProperty('--y', `${(tool.y / CHART_HEIGHT) * 100}%`);
    link.style.setProperty('--r', `${radius}px`);
    link.style.setProperty('--c', colour);
    link.setAttribute('aria-label', chartTitleText(tool, count));
    named.push({ el: link, tool, count });

    const halo = document.createElement('span');
    halo.className = 'chart__halo';

    const disc = document.createElement('span');
    disc.className = 'chart__disc';

    const label = document.createElement('span');
    label.className = 'chart__label';
    label.textContent = tool.name;
    // The link's aria-label already carries the name; without this the label
    // would be appended to it and every star would announce its name twice.
    label.setAttribute('aria-hidden', 'true');

    link.append(halo, disc, label);
    starLayer.appendChild(link);

    const show = () => renderEntry(entry, tool, count, licence);
    link.addEventListener('mouseenter', show);
    link.addEventListener('focus', show);
  });

  renderIntro(entry);
  onLanguageChange(() => {
    renderIntro(entry);
    named.forEach(({ el, tool, count }) => {
      el.setAttribute('aria-label', chartTitleText(tool, count));
    });
  });

  plot.addEventListener('mouseleave', () => renderIntro(entry));
}

function renderIntro(entry) {
  const lang = currentLang();
  entry.dataset.tool = '';
  entry.innerHTML = `<p class="entry__intro">${escapeHtml(translate(translations, lang, 'catalogue.intro'))}</p>`;
}

function renderEntry(entry, tool, count, licence) {
  const lang = currentLang();
  const description = translate(translations, lang, `catalogue.${tool.name}`);
  const starsLabel = count === null ? '' : starWord(lang, count);
  const openLabel = translate(translations, lang, 'catalogue.open');

  entry.dataset.tool = tool.name;
  entry.innerHTML = `
    <p class="entry__designation mono">${escapeHtml(tool.name)}</p>
    <p class="entry__meta mono"><i style="--c:${spectralColor(tool.language)}"></i>${escapeHtml(tool.language)}${
      count === null ? '' : ` &middot; ${count} ${escapeHtml(starsLabel)}`
    } &middot; ${escapeHtml(licence ?? 'Apache-2.0')}</p>
    <p class="entry__text">${escapeHtml(description)}</p>
    <a class="btn btn--compact" href="${escapeHtml(tool.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(`${openLabel}: ${tool.name}, ${translate(translations, lang, 'a11y.new_tab')}`)}">${escapeHtml(openLabel)}</a>
  `;
}
