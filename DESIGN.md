---
name: Celestial Forensics
description: A dark star-atlas identity for a JVM-forensics portfolio — engraved hairlines, two stellar accents, no soft corners.
colors:
  void: "#04060C"
  deepfield: "#080C16"
  panel: "#0E131F"
  rule: "#1B2434"
  rule-bright: "#2C3A52"
  starlight: "#E6E9F2"
  parchment: "#CFC5AE"
  dim: "#7C8799"
  ice: "#8FC7FF"
  ember: "#F2A65A"
  spectral-b-shell: "#A8C8FF"
  spectral-f-python: "#FFE9B8"
  spectral-g-java: "#FFF3D6"
  spectral-k-rust: "#FFB86B"
  spectral-m-other: "#FF9B8A"
typography:
  display:
    fontFamily: "Newsreader, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 13vw, 7rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Newsreader, 'Times New Roman', serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Newsreader, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.18em"
  control:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.12em"
rounded:
  none: "0"
  button: "2px"
  dot: "50%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
  "24": "6rem"
  "40": "10rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.starlight}"
    typography: "{typography.control}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ice}"
    rounded: "{rounded.button}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.control}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ice}"
    rounded: "{rounded.button}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.ice}"
    rounded: "{rounded.none}"
  eyebrow:
    backgroundColor: "transparent"
    textColor: "{colors.ice}"
    typography: "{typography.label}"
  plate:
    backgroundColor: "{colors.void}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.none}"
    padding: "6rem 0"
  plate-alt:
    backgroundColor: "{colors.deepfield}"
    textColor: "{colors.starlight}"
    rounded: "{rounded.none}"
    padding: "6rem 0"
  panel-chart:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.dim}"
    rounded: "{rounded.none}"
    padding: "1rem"
---

# Design System: Celestial Forensics

## Overview

**Creative North Star: "Celestial Forensics"**

Two disciplines read the past out of a frozen image. A thread dump is a still of a system that no longer exists; a stellar spectrum is light from a body that may already have gone out. This system is built on that parallel as a structural fact, not as decoration — which is why the page is an engraved star atlas rather than a developer portfolio wearing a space theme. Sections are plates. Labels are catalogue entries. The five open-source tools are plotted as a constellation whose star radii are the real GitHub star counts, not an illustration.

The register is **precise and instrument-like, quiet and unhurried**. Structure is drawn with 1px hairlines rather than asserted with filled boxes. Nothing is approximate: the mono voice carries every measurement, coordinate and designation, and the serif voices are reserved for the two things a person actually reads — a name and a paragraph. There is exactly one orchestrated moment, the hero load sequence, and after it the page holds still. Motion that is not carrying information does not exist here.

Precision is not coldness, and this is not an archival system. Warmth is rationed rather than absent, and it is placed where a person is present: parchment for everything that has been catalogued by hand, and ember reserved for human time — the thesis beside the hero, the dates in the log. The exactness is a form of hospitality. A reader who can see that every number is real and every line is placed on purpose stops checking and starts reading, which is the whole point of holding the page this still.

The arcane lives entirely in the vocabulary — `thread-necromancer`, `heap-seance`, `gc-exorcist` — and is never restated visually. No skulls, no runes, no gothic ornament. The darkness is an observing condition, not a mood board. The discarded predecessor of this site was a violet Tailwind-CDN one-pager with a typing effect and six invented project cards; that page is the standing anti-reference, and violet is banned outright because of it.

**Key Characteristics:**

- Dark-only. There is no light theme and there will not be one.
- Exactly two accents, both derived from stellar spectral classes.
- Square corners everywhere; 2px on buttons and nothing else.
- Hairlines over containers: 1px rules do the structural work.
- Three type voices with strictly separated jobs.
- No cast shadows anywhere in the system.
- Warmth is rationed, not absent: parchment for the catalogued, ember for human time.

## Colors

A near-black field with a blue cast, two spectral accents, and a warm parchment that marks anything catalogued.

### Primary

- **B-Class Ice** (#8FC7FF): The live, interactive, machine-read signal. It marks every eyebrow, the current nav item, the monogram, repository names in the feed, the instrument category labels, catalogue designations, and the focus ring. When something on this page is a link, is currently active, or came from an API a moment ago, it is ice. Derived from B-class stellar colour.

### Secondary

- **K-Class Ember** (#F2A65A): Human time and human voice. It appears in exactly two places — the vertical marginal rule beside the hero thesis, and the dates in the observation log — plus the far-right end of the hero spectrum band. Ember is scarce on purpose; it is the warm end of the continuum and it marks where a person, not a system, is speaking. Derived from K-class stellar colour.

### Tertiary

The language encoding, used only as data on the catalogue chart and in the feed's language dots. These are not decorative choices; each is a real stellar class mapped to a real repository language, and the legend states the mapping.

- **B-Class Shell** (#A8C8FF), **F-Class Python** (#FFE9B8), **G-Class Java** (#FFF3D6), **K-Class Rust** (#FFB86B), **M-Class Other** (#FF9B8A).

### Neutral

- **Void** (#04060C): The page ground. Black with a blue cast, never pure #000.
- **Deepfield** (#080C16): The alternating plate ground and the facts bar. The only surface distinction most sections get.
- **Panel** (#0E131F): Genuine containers — the catalogue chart plate, the feed row hover state, the skip link.
- **Rule** (#1B2434): The default hairline. Every divider, section edge, table row and panel border.
- **Rule Bright** (#2C3A52): Hairlines under emphasis — button borders, chart constellation lines, spectrum ticks, scrollbar thumb.
- **Starlight** (#E6E9F2): Body prose and the name itself. Cool white.
- **Parchment** (#CFC5AE): Warm off-white for catalogued values — plate titles, data-panel values, instrument lists, catalogue entry text, feed descriptions, log roles, the facts figures.
- **Dim** (#7C8799): Recessed text — inactive nav, leads, labels, metadata, captions.

### Named Rules

**The Two-Accent Rule.** Ice and ember are the entire accent vocabulary. A third accent is never introduced, and violet is prohibited outright as the anti-reference. Language dots are data, not accents, and are exempt.

**The Starlight/Parchment Rule.** Starlight is for what you read; parchment is for what has been catalogued. Prose is starlight, values are parchment. Mixing them flattens the distinction between narration and record, which is the page's central device.

**The Ember Scarcity Rule.** Ember appears at most twice per screen. Its job is to mark human time; spending it anywhere else makes the ice signal meaningless.

## Typography

**Display Font:** Newsreader (with Times New Roman, serif)
**Body Font:** Spectral (with Georgia, serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo)

**Character:** An editorial serif with an optical-size axis for the plate headings, a screen-optimised serif that reads like a scientific monograph for prose, and an exact mono for every measurement. None is the obvious choice for a developer portfolio, and that is deliberate. Newsreader replaced Bodoni Moda after visual review: light text on a black ground optically thins strokes, and a Didone lives on extreme stroke contrast, so its hairlines broke down.

### Hierarchy

- **Display** (700, `clamp(3rem, 13vw, 7rem)`, 1.05, -0.015em): The name in the hero. Set as two stacked blocks, one word per line. This is the only place display size is used.
- **Headline** (600, 2.75rem desktop / 1.75rem below 900px, 1.05): Plate titles. Always parchment, always preceded by an ice eyebrow.
- **Title** (600, 1.25rem, 1.05): Log entry roles, and at 1.75rem the figures in the facts bar.
- **Body** (300, 1rem, 1.7): All prose, capped at a 62ch measure. Set in Spectral at weight 300 — the light weight is load-bearing, not incidental; it keeps long passages quiet against the void.
- **Label** (500, 0.6875rem, 0.18em, uppercase): Every mono label, coordinate, designation and caption. Eyebrows widen to 0.28em; the monogram and footer mark to 0.22em.
- **Control** (500, 0.8125rem, 0.12em, uppercase): Buttons, mobile nav items, feed repository names, the skip link.

### Named Rules

**The Three Voices Rule.** Newsreader states, Spectral explains, JetBrains Mono measures. No voice takes another's job. A number that is a measurement is mono; a number that is a headline figure is Newsreader; nothing that is prose is ever mono.

**The Wide Label Rule.** Mono labels are always uppercase and always tracked at 0.18em or wider. A tight, lowercase mono string reads as code; a wide, uppercase one reads as an instrument marking. This system only ever wants the second.

## Layout

A single centred column, 1180px maximum, with 20px side padding below 720px and 40px above it. Prose is capped independently at 62ch, so text never spans the full container even when the container is wide.

The vertical rhythm is deliberately large: plates are 6rem tall in padding on mobile and 10rem on desktop, with 3rem between a plate's heading block and its content. Spacing is a 4px scale (0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6 / 10rem); no value outside it appears.

Two-column sections — Observer and Catalogue — use a 3fr/2fr split, never an even one, with the prose or the chart on the left and a hairline-separated data panel on the right. Both collapse to a single column at 900px, where the panel's left border becomes a top border. The instruments table and the log use a fixed-width first column (180px and 200px) against a fluid second, so labels form a true vertical axis.

Breakpoints, in the order they actually fire: 480px (hero spectrum labels rewrap as a legend), 640px (facts bar goes two-up), 720px (padding widens, instruments table splits), 820px (log and feed rows split), 900px (nav appears, two-column sections split, rhythm opens up), 960px (facts bar goes four-up).

### Named Rules

**The Asymmetric Pair Rule.** Paired columns are 3fr/2fr. A 50/50 split reads as a web layout; an uneven one reads as a plate with a margin note, which is what these sections are.

**The Fixed-Axis Rule.** Where rows carry a label and a value, the label column is a fixed pixel width so the labels align into a visible axis. Fluid label columns destroy the instrument-panel read.

## Elevation & Depth

This system has **no cast shadows**. There is not a single `box-shadow` in it, and adding one would break the conceit: an engraved plate does not drop a shadow. Depth is produced by three means only — tonal layering through the three ground tones (void → deepfield → panel), 1px hairlines in two brightnesses, and genuine parallax from the canvas starfield drifting behind the content at a rate divided by each star's depth band.

Luminance, however, is legitimate, because light is the subject matter. Catalogue stars carry a radial halo at 0.14 opacity rising to 0.30 on hover or focus. Backdrop blur (10px) is used on the fixed topbar once scrolled and on the mobile nav sheet, both over an 82–96% void wash.

### Named Rules

**The Light Emits, Never Falls Rule.** Radiance is allowed; cast shadows are not. A halo around a light source is a physical fact of the subject. A drop shadow under a card is a UI convention from a different world, and it does not enter this one.

**The Three Grounds Rule.** Surfaces come in exactly three tones. Void is the page, deepfield is the alternating plate, panel is a real container. A fourth surface tone means the hierarchy has gone wrong somewhere else.

## Shapes

The atlas has no soft corners. Radius is 0 everywhere — plates, panels, data tables, feed rows, the chart — with exactly two exceptions: buttons and the menu toggle carry 2px, just enough to read as a manufactured control rather than a cut; and the 7px language dots in the legend, catalogue entry and feed are full circles, because they depict stars.

Form language is linear. Structure is drawn rather than boxed: 1px rules separate every row, panel and section, and only genuine containers (the chart plate, a hovered feed row) receive a fill. The catalogue chart carries a 40px graph-paper grid drawn from two hairline gradients over the panel tone.

Two recurring marks: the four-pointed star of the monogram and favicon, and the 7px square rotated 45° that pins each observation-log entry to its axis.

### Named Rules

**The Square Corner Rule.** Radius is 0 unless the element is a button (2px) or a depicted star (50%). There is no third case.

**The Drawn-Not-Boxed Rule.** Prefer a hairline to a container. A list of rows gets rules between them, never a card each. Fill is reserved for surfaces that are genuinely objects.

## Components

Character across the board: **engraved and exact**. Components read as printed onto the plate — drawn with a fine nib, precisely placed, structurally inseparable from the page. They never float and never bulge.

### Buttons

- **Shape:** Near-square (2px radius), 1px border, transparent fill. Buttons are outlines, not solids; the system has no filled button.
- **Primary:** Starlight text on transparent, bordered in rule-bright (#2C3A52), padded 0.75rem × 1.5rem, mono uppercase at 0.12em.
- **Ghost:** The same geometry with a dimmer border (rule, #1B2434) and dim text — used for the secondary action in a pair.
- **Hover / Focus:** Both variants converge on ice: border and text both shift to #8FC7FF over 160ms. Focus adds the global 2px ice outline at 3px offset.
- **Compact:** A tighter padding variant for the language toggle, held to a 44px minimum touch target in both dimensions.

### Navigation

- **Style:** Fixed topbar, 68px tall, transparent until scrolled — then an 82% void wash with 10px backdrop blur and a rule hairline along the bottom.
- **Links:** Mono label voice, dim at rest, starlight on hover, ice with an ice bottom-border when the section is current. The underline is the active indicator; there is no pill, no fill, no background change.
- **Mobile:** Below 900px the links collapse into a full-width sheet at 96% void, one link per row separated by hairlines, with a two-line toggle that rotates into an X.

### Data Panels

- **Style:** No border box. Definition rows are separated by top hairlines, with a closing bottom hairline on the last row only.
- **Content:** Mono dim label above a parchment value at 0.8125rem, 1rem of vertical padding per row.

### Feed Rows

- **Style:** Full-width rows on a hairline grid, no cards. Three columns above 820px: ice mono repository name, parchment description, dim mono metadata held on one line.
- **Hover:** The row fills to panel tone (#0E131F) over 180ms. This is the only background-change hover in the system.

### Signature: The Catalogue Constellation

The system's defining component and the reason for the whole world. Five tools plotted by hand in a 100×72 coordinate space on a graph-paper panel, joined by rule-bright constellation lines into a figure with `spring-grimoire` at its centre. The constellation lines are drawn in an SVG in chart units; the stars themselves sit in an HTML layer over it, positioned by percentage but **sized in real pixels**, so a star's radius means the same thing at 320px as at 1440px.

- **Star radius is real data:** `r = 3.5 + 2.6 · ln(1 + stars)`, live from the GitHub API. A zero-star repository still renders at 3.5px; four stars gives ~7.7px. Without an API response every star falls back to 5px and the chart stays fully functional.
- **Labels hold the type scale.** Star labels are set at the label size (0.6875rem) at every viewport, on a line-height of 1 so the closest pairs clear each other at 320px. Nothing in the chart is allowed to scale text below the ramp.
- **Every star carries a 44px hit area**, an invisible square centred on the disc. The two closest stars are 61px apart at 320px, so the hit areas never overlap.
- **Star colour is real data:** the language's spectral class, with the legend naming the mapping explicitly so the chart cannot be misread as invented graphics.
- **Each star is a focusable link** with an accessible name. Hover or focus raises its halo, brightens its label to starlight, strokes the disc in ice, and swaps the adjacent entry panel — which sits behind a left hairline on desktop and a top hairline below 900px.
- **Descriptions are hard-coded, never fetched.** Only stars, language and licence come from the API.

### Signature: The Hero Spectrum

An inline SVG absorption spectrum standing in for a skills list. A continuum band runs blue to red across six stops; six absorption lines fall at the positions of six labelled technologies. The band is `aria-hidden` with the technology list carried as real text beneath.

Its load sequence is the page's one orchestrated moment, roughly 1.6s end to end: name rises line by line (200–320ms), eyebrow (600ms), band wipes from the left on a 420ms `cubic-bezier(0.2, 0.8, 0.2, 1)` (700ms), absorption lines drop in staggered 60ms apart (from 1000ms), then labels, thesis and actions (1200–1350ms). Below 480px the labels abandon their tick positions and rewrap as a flex legend, because six labels cannot clear each other under 393px.

## Do's and Don'ts

### Do:

- **Do** draw structure with 1px hairlines in rule (#1B2434), reserving rule-bright (#2C3A52) for borders under emphasis.
- **Do** keep every measurement, label, coordinate and repository name in JetBrains Mono, uppercase, tracked 0.18em or wider.
- **Do** put prose in starlight and catalogued values in parchment — the distinction is the page's central device.
- **Do** use the 4px spacing scale exclusively, and give plates 6rem of vertical padding on mobile, 10rem on desktop.
- **Do** split paired columns 3fr/2fr and collapse them at 900px.
- **Do** make anything derived from live data survive the API being unreachable, with a stated fallback — star radii fall back to 5px, the feed falls back to a calm line and a profile link.
- **Do** disable every animation, including the starfield drift, under `prefers-reduced-motion: reduce`, and keep all content visible without JavaScript.
- **Do** state the mapping whenever a visual property encodes data, as the catalogue legend does with "Size = GitHub stars".

### Don't:

- **Don't** introduce a third accent, and never use violet — it is the anti-reference of the discarded predecessor.
- **Don't** add a light theme. The aesthetic lives on the black ground and a light mode would break the core idea.
- **Don't** round a corner beyond 2px. Radius is 0 for everything except buttons (2px) and depicted stars (50%).
- **Don't** add a `box-shadow`. Depth is tonal layering, hairlines and parallax; halos are permitted, cast shadows are not.
- **Don't** add occult ornament — no skulls, pentagrams, runes or gothic decoration. The arcane is carried by the tool names alone.
- **Don't** spend ember on anything but human time: the hero thesis rule and the log dates.
- **Don't** use pure black (#000) or pure white (#FFF). The ground is void (#04060C); text is starlight (#E6E9F2) or parchment (#CFC5AE).
- **Don't** wrap a list of rows in cards when hairlines between them will do.
- **Don't** animate anything that is not carrying information. The page gets one orchestrated moment at load and then holds still.
