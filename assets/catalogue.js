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

function byName(name) {
  return TOOLS.find((tool) => tool.name === name);
}

/** name -> license (SPDX id or null), for the entry panel. */
function licensesByName(repos) {
  const map = new Map();
  (repos || []).forEach((repo) => map.set(repo.name, repo.license));
  return map;
}

export function initCatalogue(root, repos) {
  if (!root) return;
  const svg = root.querySelector('.chart__svg');
  const lineLayer = root.querySelector('.chart__lines');
  const starLayer = root.querySelector('.chart__stars');
  const entry = root.querySelector('.entry');
  if (!svg || !lineLayer || !starLayer || !entry) return;

  const stars = starsByName(repos);
  const licenses = licensesByName(repos);
  const hasData = stars.size > 0;

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
    // Chart units are 1/10 of a px at the reference size, so scale radius down.
    const radius = count === null ? FALLBACK_RADIUS / 6 : starRadius(count) / 6;
    const colour = spectralColor(tool.language);

    const link = document.createElementNS(SVG_NS, 'a');
    link.setAttribute('href', tool.url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.setAttribute('class', 'chart__star');
    link.dataset.tool = tool.name;

    const halo = document.createElementNS(SVG_NS, 'circle');
    halo.setAttribute('class', 'chart__halo');
    halo.setAttribute('cx', tool.x);
    halo.setAttribute('cy', tool.y);
    halo.setAttribute('r', radius * 3);
    halo.setAttribute('fill', colour);

    const disc = document.createElementNS(SVG_NS, 'circle');
    disc.setAttribute('class', 'chart__disc');
    disc.setAttribute('cx', tool.x);
    disc.setAttribute('cy', tool.y);
    disc.setAttribute('r', radius);
    disc.setAttribute('fill', colour);

    const label = document.createElementNS(SVG_NS, 'text');
    label.setAttribute('class', 'chart__label');
    label.setAttribute('x', tool.x);
    label.setAttribute('y', tool.y + radius + 3.6);
    label.setAttribute('text-anchor', 'middle');
    label.textContent = tool.name;

    const title = document.createElementNS(SVG_NS, 'title');
    title.textContent = count === null ? tool.name : `${tool.name}, ${count} stars`;

    link.append(title, halo, disc, label);
    starLayer.appendChild(link);

    const show = () => renderEntry(entry, tool, count, licence);
    link.addEventListener('mouseenter', show);
    link.addEventListener('focus', show);
  });

  renderIntro(entry);
  onLanguageChange(() => renderIntro(entry));

  svg.addEventListener('mouseleave', () => renderIntro(entry));
}

function renderIntro(entry) {
  const lang = currentLang();
  entry.dataset.tool = '';
  entry.innerHTML = `<p class="entry__intro">${escapeHtml(translate(translations, lang, 'catalogue.intro'))}</p>`;
}

function renderEntry(entry, tool, count, licence) {
  const lang = currentLang();
  const description = translate(translations, lang, `catalogue.${tool.name}`);
  const starsLabel = translate(translations, lang, 'catalogue.stars');
  const openLabel = translate(translations, lang, 'catalogue.open');

  entry.dataset.tool = tool.name;
  entry.innerHTML = `
    <p class="entry__designation mono">${escapeHtml(tool.name)}</p>
    <p class="entry__meta mono"><i style="--c:${spectralColor(tool.language)}"></i>${escapeHtml(tool.language)}${
      count === null ? '' : ` &middot; ${count} ${escapeHtml(starsLabel)}`
    } &middot; ${escapeHtml(licence ?? 'Apache-2.0')}</p>
    <p class="entry__text">${escapeHtml(description)}</p>
    <a class="btn btn--compact" href="${escapeHtml(tool.url)}" target="_blank" rel="noopener">${escapeHtml(openLabel)}</a>
  `;
}
