# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two confirmed audiences, both technical readers arriving cold:

- **Technical peers and open-source users.** JVM and Spring engineers who hit a heap dump, thread dump or GC problem, found a SegfaultSorcerer tool, and want to know who wrote it and whether the work is trustworthy. They arrive from GitHub or from a search about a failure they are currently debugging.
- **Recruiters and hiring managers.** People evaluating Patrik Neumann for a role. They skim for seniority, scope, stack and location before deciding whether to pursue.

Peers set the credibility bar; recruiters are served by the same evidence rather than by a separate recruiting track. Nothing on the site is tuned to make applying easy.

## Product Purpose

A single-page personal site that convinces a technical reader within roughly thirty seconds that the same person both carries serious enterprise systems in production and builds unusual open-source forensics tooling — and then sends them to GitHub.

Success takes three confirmed forms, all valid:

1. A click through to the GitHub profile or a specific repository.
2. The visitor remembers the person and reaches out later, on their own initiative, through GitHub.
3. The visitor goes on to use one of the tools.

It is explicitly not an application page.

## Positioning

The combination is the claim a neighbouring portfolio could not truthfully copy: eleven years of production Java and Spring responsibility inside a regulated industry, team leadership over roughly 25 live systems, *and* a coherent published ecosystem of JVM post-mortem tooling built for AI coding agents. Neither half alone is unusual; holding both at once is.

The site's supporting idea, already committed in the 2026-08-19 spec, is a factual parallel rather than decoration: JVM forensics and astronomy both read the past out of a frozen image. A thread dump is a still of a system that no longer exists; a stellar spectrum is light from something that may already have gone out.

## Operating Context

- Availability posture: **not looking, but worth knowing.** Employed and staying. The page proves capability and never invites applications.
- The only contact path is the GitHub profile. There is no form, no address, no network profile.
- Visitors typically arrive mid-problem (peers) or mid-shortlist (recruiters), on desktop or phone, and read fast.
- Bilingual audience: English is the default, German is available via a toggle; the choice persists in `localStorage` and `<html lang>` follows it.

## Capabilities and Constraints

- Static one-page site. Hand-written HTML, CSS and native ES modules; **no build step and no framework**. Pure logic lives in `assets/lib.js` and is covered by `node --test tests/`.
- Deployment is fixed and out of scope for design work: Docker image on nginx behind Caddy, pushed to a VPS by the `main`-branch GitHub Action, served at `me.raistlin.net`.
- Two live GitHub API reads: repository stars and languages for the catalogue chart, and the recent-activity feed. **The page must stay complete and readable when the API does not answer** — curated descriptions are hard-coded, star sizes fall back to a fixed radius, the feed degrades to a calm line plus a profile link.
- **The page must stay readable with JavaScript disabled.** Content lives in the markup; only the starfield, the catalogue interaction and the live feed are lost.
- Every string is bilingual (EN/DE) through the `data-i18n` mechanism. New copy is not shippable in one language.
- Quality bar carried from the spec: responsive from 320px, visible keyboard focus on every interactive element, at least 4.5:1 contrast for body text, and all motion — including the starfield drift — disabled under `prefers-reduced-motion: reduce`.

### Binding exclusions

All four confirmed as still binding:

- **No light theme.** Dark-only; a light mode would break the core idea.
- **No contact form, email address or LinkedIn.** GitHub is the only contact path.
- **No CV or résumé download.**
- **The employer is never named** — the pharmaceutical source-data publisher is always described, never identified.

## Brand Commitments

- Name: Patrik Neumann. Open-source handle: **SegfaultSorcerer**. Monogram: PN with a four-pointed star.
- Voice: measured, factual, unhurried; German-technical register in both languages. Claims are stated plainly and never inflated. The arcane note belongs to the tool names themselves (`thread-necromancer`, `heap-seance`, `gc-exorcist`, `spring-grimoire`) and is never asserted through occult ornament.
- Binding copy, both languages: "I build systems that have to keep running. And the tools that explain why they don't." / "Ich baue Systeme, die laufen müssen. Und die Werkzeuge, die erklären, warum sie es nicht tun."
- An approved visual world exists and is documented in `docs/superpowers/specs/2026-08-19-portfolio-redesign-design.md` (Celestial Forensics: star atlas, two accent colours, no violet, no rounded corners, Newsreader / Spectral / JetBrains Mono).

## Evidence on Hand

Real and verifiable:

- Five own tools, live on GitHub with real star counts and licences: `heap-seance` (Python, MCP server for heap forensics), `thread-necromancer` (Shell, thread-dump analysis), `gc-exorcist` (Shell, GC-log analysis with tuning advice), `spring-grimoire` (Shell, skills and hooks for Java/Spring), `conduit` (Rust, MCP DevTools).
- Career facts: development team lead since 2018, seven developers, roughly 25 systems in production; software developer at the same company from June 2015; University of Duisburg-Essen 2005–2015, M.Sc. Applied Computer Science, ten-plus years as student then research assistant running the Java tutorial groups, plus first-level IT support.
- Location: Frankfurt am Main, Germany (50.11°N 8.68°E). Languages: German, English.
- Live data: GitHub star counts, repository languages, public repository count, recent activity.

Absent, and never to be fabricated: testimonials, named clients or employer, customer logos, metrics, pricing, certifications, press, awards, photography of the person.

## Product Principles

1. **Evidence over assertion.** Every claim on the page is checkable — a repository, a star count, a date, a named technology. Nothing is decorated into significance.
2. **Both halves, one person.** Enterprise responsibility and open-source forensics must read as the same practice, never as two separate résumés on one page.
3. **Thirty seconds, then GitHub.** The page earns the click; it does not try to be the destination.
4. **Degrade without embarrassment.** No API, no JavaScript, no motion — the page still reads completely and still looks deliberate.
5. **Nothing is ever only in one language.** German and English are equally finished.

## Accessibility & Inclusion

No formal conformance standard is required. The binding bar is the one already recorded under Capabilities and Constraints: 4.5:1 body-text contrast, visible keyboard focus everywhere, full `prefers-reduced-motion` support, responsive from 320px, and complete readability without JavaScript.
