import test from 'node:test';
import assert from 'node:assert/strict';
import {
  experienceYears,
  starRadius,
  spectralColor,
  visibleRepos,
  formatMonthYear,
  escapeHtml,
  translate,
  HIDDEN_REPOS,
  SPECTRAL_DEFAULT,
} from '../assets/lib.js';

test('experienceYears counts full years since June 2015', () => {
  assert.equal(experienceYears(new Date('2026-08-19T00:00:00Z')), 11);
  assert.equal(experienceYears(new Date('2026-06-01T00:00:00Z')), 11);
  assert.equal(experienceYears(new Date('2026-05-31T00:00:00Z')), 10);
  assert.equal(experienceYears(new Date('2015-06-01T00:00:00Z')), 0);
});

test('starRadius grows logarithmically and never collapses to zero', () => {
  assert.equal(starRadius(0), 3.5);
  assert.ok(Math.abs(starRadius(4) - 7.6845) < 0.001);
  assert.ok(starRadius(4) > starRadius(1));
  assert.equal(starRadius(-3), 3.5, 'negative input is clamped');
  assert.equal(starRadius(undefined), 3.5, 'missing input is clamped');
});

test('spectralColor maps languages case-insensitively', () => {
  assert.equal(spectralColor('Shell'), '#A8C8FF');
  assert.equal(spectralColor('python'), '#FFE9B8');
  assert.equal(spectralColor('Rust'), '#FFB86B');
  assert.equal(spectralColor('Java'), '#FFF3D6');
  assert.equal(spectralColor('Brainfuck'), SPECTRAL_DEFAULT);
  assert.equal(spectralColor(null), SPECTRAL_DEFAULT);
});

test('visibleRepos drops forks and the hidden list', () => {
  const input = [
    { name: 'heap-seance', fork: false },
    { name: 'awesome-java', fork: true },
    { name: 'webpage', fork: false },
    { name: 'SegfaultSorcerer', fork: false },
    { name: 'conduit', fork: false },
  ];
  assert.deepEqual(visibleRepos(input).map(r => r.name), ['heap-seance', 'conduit']);
  assert.deepEqual(visibleRepos(null), []);
  assert.ok(HIDDEN_REPOS.includes('webpage'));
});

test('formatMonthYear renders a short month and year, or empty on garbage', () => {
  assert.equal(formatMonthYear('2026-08-19T10:00:00Z', 'en'), 'Aug 2026');
  assert.match(formatMonthYear('2026-08-19T10:00:00Z', 'de'), /2026/);
  assert.equal(formatMonthYear('not-a-date'), '');
});

test('escapeHtml neutralises markup', () => {
  assert.equal(escapeHtml('<img src=x onerror="a">'), '&lt;img src=x onerror=&quot;a&quot;&gt;');
  assert.equal(escapeHtml(null), '');
});

test('translate falls back to English, then to the key itself', () => {
  const dict = { en: { 'a': 'Alpha', 'b': 'Beta' }, de: { 'a': 'Alfa' } };
  assert.equal(translate(dict, 'de', 'a'), 'Alfa');
  assert.equal(translate(dict, 'de', 'b'), 'Beta');
  assert.equal(translate(dict, 'de', 'zz'), 'zz');
  assert.equal(translate(dict, 'fr', 'a'), 'Alpha');
});
