/* ═══════════════════════════════════════════════════════
   Patrik Neumann — Portfolio
   JavaScript: i18n, typing, animations, GitHub, toggles
   ═══════════════════════════════════════════════════════ */

// ── Translations ──
const translations = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.github": "GitHub",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.education": "M.Sc. Applied Computer Science — University of Duisburg-Essen",
    "hero.location": "Frankfurt am Main, Germany",
    "hero.subtitle": "Engineering robust systems at the intersection of enterprise Java and artificial intelligence.",
    "hero.cta.work": "View My Work",
    "hero.cta.github": "GitHub Profile",

    // About
    "about.label": "About Me",
    "about.title": "Building Software That Matters",
    "about.p1": "I am a senior full-stack developer and team lead based in the Frankfurt am Main area, holding a Master's degree in Applied Computer Science from the University of Duisburg-Essen. With deep expertise in the Java and Spring ecosystem, I design and build enterprise-grade microservice architectures, complex database systems, and full-stack web applications that serve critical business functions in healthcare and pharmaceutical industries.",
    "about.p2": "What excites me most is the convergence of traditional software engineering with artificial intelligence. I actively integrate LLMs, document processing AI, and intelligent automation into production systems — not as experiments, but as reliable, tested components of enterprise software. From Spring AI to Claude and Codex, I believe the next generation of great software will be built by developers who understand both solid architecture and AI capabilities.",
    "about.p3": "I value clean API design, maintainable codebases, and pragmatic solutions over hype-driven development. Whether it is a Spring Boot microservice handling millions of transactions, a JavaFX desktop application with a custom UI framework, or an Angular frontend with complex domain logic — I focus on building software that works reliably at scale and is a pleasure for other developers to maintain.",

    // Terminal
    "terminal.title": "~/about-patrik",
    "terminal.whoami": "Patrik Neumann",
    "terminal.skills": "Java, Spring Boot, Angular, AI",
    "terminal.location": "Frankfurt am Main, Germany",
    "terminal.languages": "Deutsch | English",
    "terminal.focus": "Enterprise Software × AI Integration",

    // Skills
    "skills.label": "Tech Stack",
    "skills.title": "Technologies I Work With",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.ai": "AI & ML",
    "skills.databases": "Databases",
    "skills.devops": "DevOps & Tools",
    "skills.domain": "Domain Knowledge",

    // Projects
    "projects.label": "Selected Work",
    "projects.title": "What I Build",
    "projects.subtitle": "Project types and domains I specialize in — built with care, engineered for scale.",

    "project.1.title": "Enterprise Microservices Platform",
    "project.1.desc": "Designed and built large-scale Spring Boot microservice architectures serving millions of healthcare data transactions. Focused on clean API design, resilience patterns, and maintainable service meshes.",
    "project.2.title": "AI-Powered Document Processing",
    "project.2.desc": "Integrated LLMs and OCR into document extraction pipelines, transforming unstructured pharmaceutical documents into structured, validated data using Spring AI and modern vision models.",
    "project.3.title": "Healthcare Data Integration",
    "project.3.desc": "Built FHIR-compliant data exchange systems bridging legacy pharmaceutical databases with modern healthcare interoperability standards and real-time data synchronization.",
    "project.4.title": "Full-Stack Web Applications",
    "project.4.desc": "Developed Angular and Spring Boot applications with complex domain logic, real-time data grids, sophisticated form-driven workflows, and comprehensive role-based access control.",
    "project.5.title": "Desktop Application Frameworks",
    "project.5.desc": "Created custom JavaFX and Swing frameworks for rich desktop applications used in pharmaceutical data management, including reusable component libraries and MVC architectures.",
    "project.6.title": "Database Architecture & Migration",
    "project.6.desc": "Designed complex Oracle database schemas and migration strategies for large-scale pharmaceutical data systems with millions of records and intricate relational models.",

    // GitHub
    "github.label": "Open Source",
    "github.title": "GitHub Activity",
    "github.subtitle": "My public repositories and contributions.",
    "github.visit": "Visit Profile",
    "github.loading": "Loading repositories...",
    "github.error": "Could not load repositories. Visit my GitHub profile directly.",
    "github.stars": "stars",
    "github.member_since": "Member since 2014",
    "github.coming_soon": "More projects coming soon — I'm actively moving personal projects to open source.",
    "github.no_repos": "No public repositories yet — visit my profile directly.",

    // Contact
    "contact.label": "Get In Touch",
    "contact.title": "Let's Connect",
    "contact.text": "Interested in discussing enterprise Java, AI integration, or collaboration opportunities? I'd love to hear from you.",
    "contact.github": "GitHub",

    // Footer
    "footer.built": "Built with HTML, Tailwind CSS & JavaScript",
    "footer.rights": "All rights reserved.",
  },
  de: {
    // Navbar
    "nav.about": "Über mich",
    "nav.skills": "Skills",
    "nav.projects": "Projekte",
    "nav.github": "GitHub",
    "nav.contact": "Kontakt",

    // Hero
    "hero.greeting": "Hallo, ich bin",
    "hero.education": "M.Sc. Angewandte Informatik — Universität Duisburg-Essen",
    "hero.location": "Frankfurt am Main, Deutschland",
    "hero.subtitle": "Entwicklung robuster Systeme an der Schnittstelle von Enterprise Java und künstlicher Intelligenz.",
    "hero.cta.work": "Meine Arbeit",
    "hero.cta.github": "GitHub Profil",

    // About
    "about.label": "Über mich",
    "about.title": "Software die zählt",
    "about.p1": "Ich bin ein erfahrener Full-Stack-Entwickler und Teamleiter im Raum Frankfurt am Main mit einem Masterabschluss in Angewandter Informatik der Universität Duisburg-Essen. Mit tiefgehender Expertise im Java- und Spring-Ökosystem entwerfe und entwickle ich Enterprise-Microservice-Architekturen, komplexe Datenbanksysteme und Full-Stack-Webanwendungen für geschäftskritische Funktionen im Gesundheits- und Pharmabereich.",
    "about.p2": "Was mich am meisten begeistert, ist die Verschmelzung traditioneller Softwareentwicklung mit künstlicher Intelligenz. Ich integriere aktiv LLMs, KI-gestützte Dokumentenverarbeitung und intelligente Automatisierung in Produktivsysteme — nicht als Experimente, sondern als zuverlässige, getestete Komponenten von Enterprise-Software. Von Spring AI bis Claude und Codex — ich bin überzeugt, dass die nächste Generation großartiger Software von Entwicklern gebaut wird, die sowohl solide Architektur als auch KI-Fähigkeiten verstehen.",
    "about.p3": "Ich schätze sauberes API-Design, wartbare Codebasen und pragmatische Lösungen mehr als Hype-getriebene Entwicklung. Ob Spring-Boot-Microservice mit Millionen von Transaktionen, JavaFX-Desktopanwendung mit eigenem UI-Framework oder Angular-Frontend mit komplexer Domänenlogik — ich konzentriere mich darauf, Software zu bauen, die zuverlässig skaliert und die andere Entwickler gerne warten.",

    // Terminal
    "terminal.title": "~/über-patrik",
    "terminal.whoami": "Patrik Neumann",
    "terminal.skills": "Java, Spring Boot, Angular, KI",
    "terminal.location": "Frankfurt am Main, Deutschland",
    "terminal.languages": "Deutsch | English",
    "terminal.focus": "Enterprise Software × KI-Integration",

    // Skills
    "skills.label": "Tech Stack",
    "skills.title": "Technologien mit denen ich arbeite",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.ai": "KI & ML",
    "skills.databases": "Datenbanken",
    "skills.devops": "DevOps & Tools",
    "skills.domain": "Domänenwissen",

    // Projects
    "projects.label": "Ausgewählte Arbeiten",
    "projects.title": "Was ich baue",
    "projects.subtitle": "Projekttypen und Domänen in denen ich mich spezialisiere — mit Sorgfalt gebaut, für Skalierung entwickelt.",

    "project.1.title": "Enterprise Microservices Plattform",
    "project.1.desc": "Entwurf und Aufbau großer Spring-Boot-Microservice-Architekturen für Millionen von Gesundheitsdaten-Transaktionen. Fokus auf sauberes API-Design, Resilienz-Muster und wartbare Service-Meshes.",
    "project.2.title": "KI-gestützte Dokumentenverarbeitung",
    "project.2.desc": "Integration von LLMs und OCR in Dokumentenextraktions-Pipelines zur Umwandlung unstrukturierter pharmazeutischer Dokumente in strukturierte, validierte Daten mit Spring AI und modernen Vision-Modellen.",
    "project.3.title": "Gesundheitsdaten-Integration",
    "project.3.desc": "Aufbau FHIR-konformer Datenaustauschsysteme zur Verbindung von Legacy-Pharma-Datenbanken mit modernen Healthcare-Interoperabilitätsstandards und Echtzeit-Datensynchronisation.",
    "project.4.title": "Full-Stack Webanwendungen",
    "project.4.desc": "Entwicklung von Angular- und Spring-Boot-Anwendungen mit komplexer Domänenlogik, Echtzeit-Datengrids, anspruchsvollen formularbasierten Workflows und umfassender rollenbasierter Zugriffskontrolle.",
    "project.5.title": "Desktop-Anwendungs-Frameworks",
    "project.5.desc": "Erstellung eigener JavaFX- und Swing-Frameworks für umfangreiche Desktopanwendungen im pharmazeutischen Datenmanagement, einschließlich wiederverwendbarer Komponentenbibliotheken und MVC-Architekturen.",
    "project.6.title": "Datenbankarchitektur & Migration",
    "project.6.desc": "Entwurf komplexer Oracle-Datenbankschemata und Migrationsstrategien für große pharmazeutische Datensysteme mit Millionen von Datensätzen und komplexen relationalen Modellen.",

    // GitHub
    "github.label": "Open Source",
    "github.title": "GitHub Aktivität",
    "github.subtitle": "Meine öffentlichen Repositories und Beiträge.",
    "github.visit": "Profil besuchen",
    "github.loading": "Repositories werden geladen...",
    "github.error": "Repositories konnten nicht geladen werden. Besuche mein GitHub-Profil direkt.",
    "github.stars": "Sterne",
    "github.member_since": "Mitglied seit 2014",
    "github.coming_soon": "Weitere Projekte folgen — ich veröffentliche aktiv persönliche Projekte als Open Source.",
    "github.no_repos": "Noch keine öffentlichen Repositories — besuche mein Profil direkt.",

    // Contact
    "contact.label": "Kontakt",
    "contact.title": "Lass uns vernetzen",
    "contact.text": "Interesse an Enterprise Java, KI-Integration oder Zusammenarbeit? Ich freue mich von dir zu hören.",
    "contact.github": "GitHub",

    // Footer
    "footer.built": "Gebaut mit HTML, Tailwind CSS & JavaScript",
    "footer.rights": "Alle Rechte vorbehalten.",
  }
};

// Typing effect phrases per language
const typingPhrases = {
  en: [
    "Senior Full-Stack Developer",
    "Java & Spring Architect",
    "AI Integration Enthusiast",
    "Team Lead"
  ],
  de: [
    "Senior Full-Stack Entwickler",
    "Java & Spring Architekt",
    "KI-Integrations-Enthusiast",
    "Teamleiter"
  ]
};

// ── State ──
let currentLang = localStorage.getItem('lang') || 'en';
let typingTimeout = null;

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTypingEffect();
  initScrollAnimations();
  initNavbarScroll();
  initActiveNav();
  initMobileMenu();
  initThemeToggle();
  initLangToggle();
  fetchGitHubRepos();
});


// ═══════════════════════════
// i18n System
// ═══════════════════════════
function initI18n() {
  applyTranslations(currentLang);
  updateLangButton();
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.documentElement.lang = lang;
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  updateLangButton();
  // Restart typing with new language
  restartTypingEffect();
}

function updateLangButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'DE' : 'EN';
    btn.setAttribute('aria-label',
      currentLang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'
    );
  }
}


// ═══════════════════════════
// Typing Effect
// ═══════════════════════════
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pauseTime = 0;

  function tick() {
    const phrases = typingPhrases[currentLang] || typingPhrases.en;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (pauseTime > 0) {
      pauseTime -= 50;
      typingTimeout = setTimeout(tick, 50);
      return;
    }

    if (!isDeleting) {
      charIndex++;
      el.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        pauseTime = 2200;
      }
      typingTimeout = setTimeout(tick, 65 + Math.random() * 40);
    } else {
      charIndex--;
      el.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        pauseTime = 400;
      }
      typingTimeout = setTimeout(tick, 35);
    }
  }

  tick();
}

function restartTypingEffect() {
  if (typingTimeout) clearTimeout(typingTimeout);
  const el = document.getElementById('typing-text');
  if (el) el.textContent = '';
  initTypingEffect();
}


// ═══════════════════════════
// Scroll Animations
// ═══════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}


// ═══════════════════════════
// Navbar Scroll Effect
// ═══════════════════════════
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}


// ═══════════════════════════
// Active Nav Highlighting
// ═══════════════════════════
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}


// ═══════════════════════════
// Mobile Menu
// ═══════════════════════════
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


// ═══════════════════════════
// Theme Toggle
// ═══════════════════════════
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  // Set initial icon
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  if (theme === 'light') {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to light mode');
  }
}


// ═══════════════════════════
// Language Toggle
// ═══════════════════════════
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    switchLanguage(currentLang === 'en' ? 'de' : 'en');
  });
}


// ═══════════════════════════
// GitHub API
// ═══════════════════════════
async function fetchGitHubRepos() {
  const container = document.getElementById('github-repos');
  if (!container) return;

  const cacheKey = 'gh_repos_segfaultsorcerer';
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    try {
      renderRepos(JSON.parse(cached), container);
      return;
    } catch (e) { /* fall through to fetch */ }
  }

  try {
    const res = await fetch('https://api.github.com/users/SegfaultSorcerer/repos?sort=updated&per_page=20');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const repos = await res.json();
    sessionStorage.setItem(cacheKey, JSON.stringify(repos));
    renderRepos(repos, container);
  } catch (err) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <p class="text-sm" style="color: var(--text-muted)" data-i18n="github.error">${translations[currentLang]['github.error']}</p>
        <a href="https://github.com/SegfaultSorcerer" target="_blank" rel="noopener"
           class="btn-primary mt-4 inline-flex" style="font-size: 0.85rem; padding: 0.5rem 1.25rem;">
          <span data-i18n="github.visit">${translations[currentLang]['github.visit']}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>`;
  }
}

function renderRepos(repos, container) {
  // Filter out forked repos — show only original work
  const hiddenRepos = ['webpage', 'SegfaultSorcerer'];
  const originalRepos = (repos || []).filter(repo => !repo.fork && !hiddenRepos.includes(repo.name));

  if (originalRepos.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <p class="text-sm mb-4" style="color: var(--text-muted)" data-i18n="github.no_repos">${translations[currentLang]['github.no_repos']}</p>
        <a href="https://github.com/SegfaultSorcerer" target="_blank" rel="noopener"
           class="btn-primary inline-flex" style="font-size: 0.85rem; padding: 0.5rem 1.25rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span data-i18n="github.visit">${translations[currentLang]['github.visit']}</span>
        </a>
      </div>`;
    return;
  }

  // Use compact single-row layout if 3 or fewer repos
  if (originalRepos.length <= 3) {
    container.className = 'flex flex-col sm:flex-row gap-4 justify-center';
  }

  const langColors = {
    JavaScript: '#f7df1e', TypeScript: '#3178c6', Java: '#b07219',
    Python: '#3572A5', HTML: '#e34c26', CSS: '#563d7c',
    Shell: '#89e051', Kotlin: '#A97BFF', Go: '#00ADD8',
    Rust: '#dea584', 'C#': '#178600', C: '#555555',
    'C++': '#f34b7d', Ruby: '#701516', PHP: '#4F5D95',
  };

  const cardSizeClass = originalRepos.length <= 3 ? 'repo-card repo-card-featured group' : 'repo-card group';

  container.innerHTML = originalRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank" rel="noopener" class="${cardSizeClass}" style="${originalRepos.length <= 3 ? 'flex: 1 1 0; min-width: 0;' : ''}">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h4 class="font-mono text-sm font-semibold" style="color: var(--text-primary)">
          ${escapeHtml(repo.name)}
        </h4>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted); flex-shrink: 0; margin-top: 2px; transition: all 0.3s;" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
      ${repo.description ? `<p class="text-xs mb-3" style="color: var(--text-secondary); line-height: 1.5;">${escapeHtml(repo.description)}</p>` : '<div class="mb-3"></div>'}
      <div class="flex items-center gap-4 text-xs" style="color: var(--text-muted)">
        ${repo.language ? `
          <span class="flex items-center gap-1.5">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${langColors[repo.language] || '#888'}; display: inline-block;"></span>
            ${escapeHtml(repo.language)}
          </span>
        ` : ''}
        ${repo.stargazers_count > 0 ? `
          <span class="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${repo.stargazers_count}
          </span>
        ` : ''}
        ${repo.forks_count > 0 ? `
          <span class="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>
            ${repo.forks_count}
          </span>
        ` : ''}
      </div>
    </a>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
