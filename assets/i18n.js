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

    'hero.eyebrow': 'Segfaultsorcerer · Frankfurt am Main · 50.11°N 8.68°E',
    'hero.spectrum_alt': 'Spectral analysis showing Java, Spring, JVM, Oracle, Angular and AI as absorption lines',
    'hero.line': "I build systems that have to keep running. And the tools that explain why they don't.",
    'hero.cta_catalogue': 'See the catalogue',
    'hero.cta_github': 'GitHub profile',

    'facts.experience': 'Experience',
    'facts.years': 'years',
    'facts.team': 'Team',
    'facts.developers': 'developers',
    'facts.systems': 'Systems in production',
    'facts.repos': 'Public repositories',

    'observer.eyebrow': 'Observer',
    'observer.title': 'Who is looking through the instrument',
    'observer.p1': "I am a senior full-stack developer and development team lead near Frankfurt am Main, with a Master's degree in Applied Computer Science from the University of Duisburg-Essen. My working life is the Java and Spring ecosystem: microservice architectures, large Oracle schemas and full-stack applications that carry critical business functions in the pharmaceutical industry.",
    'observer.p2': 'What holds my attention is the point where ordinary software engineering meets machine learning. I put LLMs and document-processing models into production pipelines, not as experiments but as tested components with clear failure modes, using Spring AI alongside the tooling that Claude and Codex have made practical.',
    'observer.p3': 'Outside work I publish forensics tooling for the JVM under the handle SegfaultSorcerer. Thread dumps, heap dumps and GC logs are post-mortem artefacts, and reading them well is a skill that most teams only reach for once something has already gone wrong. The tools in the catalogue below exist to make that reading faster.',
    'observer.k_role': 'Role',
    'observer.v_role': 'Team lead, development',
    'observer.k_location': 'Location',
    'observer.v_location': 'Frankfurt am Main, Germany',
    'observer.k_education': 'Education',
    'observer.v_education': 'M.Sc. Applied Computer Science, University of Duisburg-Essen',
    'observer.k_languages': 'Languages',
    'observer.v_languages': 'German, English',
    'observer.k_focus': 'Focus',
    'observer.v_focus': 'Enterprise Java, AI integration, JVM forensics',

    'instruments.eyebrow': 'Instruments',
    'instruments.title': 'What I work with',
    'instruments.backend': 'Backend',
    'instruments.frontend': 'Frontend',
    'instruments.desktop': 'Desktop',
    'instruments.data': 'Data',
    'instruments.ai': 'AI',
    'instruments.ops': 'Operations',
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

    'hero.eyebrow': 'Segfaultsorcerer · Frankfurt am Main · 50,11°N 8,68°E',
    'hero.spectrum_alt': 'Spektralanalyse mit Java, Spring, JVM, Oracle, Angular und KI als Absorptionslinien',
    'hero.line': 'Ich baue Systeme, die laufen müssen. Und die Werkzeuge, die erklären, warum sie es nicht tun.',
    'hero.cta_catalogue': 'Zum Katalog',
    'hero.cta_github': 'GitHub-Profil',

    'facts.experience': 'Erfahrung',
    'facts.years': 'Jahre',
    'facts.team': 'Team',
    'facts.developers': 'Entwickler',
    'facts.systems': 'Systeme in Produktion',
    'facts.repos': 'Öffentliche Repositories',

    'observer.eyebrow': 'Beobachter',
    'observer.title': 'Wer durch das Instrument schaut',
    'observer.p1': 'Ich bin Senior Full-Stack-Entwickler und Teamleiter der Entwicklung im Raum Frankfurt am Main, mit einem Master in Angewandter Informatik der Universität Duisburg-Essen. Mein Arbeitsalltag ist das Java- und Spring-Ökosystem: Microservice-Architekturen, große Oracle-Schemata und Full-Stack-Anwendungen, die kritische Fachprozesse der pharmazeutischen Industrie tragen.',
    'observer.p2': 'Was mich festhält, ist die Stelle, an der gewöhnliches Software-Engineering auf maschinelles Lernen trifft. Ich bringe LLMs und Modelle zur Dokumentenverarbeitung in produktive Verarbeitungsstrecken, nicht als Experiment, sondern als geprüfte Komponenten mit klarem Fehlerverhalten, mit Spring AI und den Werkzeugen, die Claude und Codex praktikabel gemacht haben.',
    'observer.p3': 'Außerhalb der Arbeit veröffentliche ich Forensik-Werkzeuge für die JVM unter dem Handle SegfaultSorcerer. Thread-Dumps, Heap-Dumps und GC-Logs sind Artefakte einer Obduktion, und sie gut zu lesen ist eine Fähigkeit, nach der die meisten Teams erst greifen, wenn schon etwas schiefgegangen ist. Die Werkzeuge im Katalog weiter unten existieren, um dieses Lesen zu beschleunigen.',
    'observer.k_role': 'Rolle',
    'observer.v_role': 'Teamleiter Entwicklung',
    'observer.k_location': 'Ort',
    'observer.v_location': 'Frankfurt am Main, Deutschland',
    'observer.k_education': 'Ausbildung',
    'observer.v_education': 'M.Sc. Angewandte Informatik, Universität Duisburg-Essen',
    'observer.k_languages': 'Sprachen',
    'observer.v_languages': 'Deutsch, Englisch',
    'observer.k_focus': 'Schwerpunkt',
    'observer.v_focus': 'Enterprise-Java, KI-Integration, JVM-Forensik',

    'instruments.eyebrow': 'Instrumente',
    'instruments.title': 'Womit ich arbeite',
    'instruments.backend': 'Backend',
    'instruments.frontend': 'Frontend',
    'instruments.desktop': 'Desktop',
    'instruments.data': 'Daten',
    'instruments.ai': 'KI',
    'instruments.ops': 'Betrieb',
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
