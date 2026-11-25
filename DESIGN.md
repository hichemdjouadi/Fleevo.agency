# Visual World

<!-- impeccable:design-schema 1 -->

## Design Strategy

**Mode:** Persuade
**Aesthetic Authority:** Pure Monochrome Editorial Studio (Cuberto x Clay clarity)
**Core Thesis:** Fleevy is a direct engineering studio shipping commercial platforms (funnels, 58-wilaya stores, internal CRMs, domain AI agents) paired with performance Meta ads and funnel audits. The interface refuses generic dark-terminal SaaS tropes, green accents, fake status dots, and personal vanity portrait cards.

## Color & Theming

Strict monochrome contrast system — **only real client project screenshots and silent product recordings carry color**:

- **Primary Canvas:** `#FFFFFF` (Light ground across editorial sections)
- **Primary Ink & Contrast Surfaces:** `#0B0B0C` (Display headings, obsidian pill CTAs, monolith showcase/calculator bands, Discipline 02 panel, WhatsApp Direct card, and global footer)
- **Gallery Framing Surfaces:** `#F4F4F6` (Showcase card wells, Discipline 01 panel, testimonial/ guarantee panel, form cards, and secondary badges)
- **Readable Body Ink:** `#4B4D52` and `#525252` on `#FFFFFF`/`#F4F4F6`; `rgba(255, 255, 255, 0.75–0.85)` on `#0B0B0C` (minimum >= 4.5:1 text contrast everywhere)
- **Hairline Borders:** `rgba(11, 11, 12, 0.06–0.14)` on light surfaces; `rgba(255, 255, 255, 0.12–0.25)` on dark surfaces

## Typography & Localization

- **Latin (`EN` / `FR`):** `Manrope` loaded via `next/font/google` (`--font-manrope`), wired into Tailwind v4 `@theme inline` (`--font-sans`) and `body` font stack.
- **Arabic (`AR` RTL):** `Cairo` loaded via `next/font/google` (`--font-cairo`), activated automatically when `<html dir="rtl" lang="ar">`. Directional icons use `rtl:rotate-180` and logical spacing utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`).
- **Editorial Discipline:** Zero eyebrows or tracked uppercase kickers placed above `<h1>`, `<h2>`, or `<h3>` headings. Headlines scale smoothly from `38px` mobile (`390px`) to `62px` desktop (`tracking-[-0.035em]`, `leading-[1.03–1.08]`).

## Layout, Media & Components

- **Mobile-First First Viewport (`390×844`):** Single-row crisp header (`68px` height), bold display headline, dual full-width/flex pill CTAs (`>= 48px`), and an immediate interactive 3-specimen showcase card (`Funnel`, `Store`, `CRM`) using native tab switching.
- **Editorial Work Gallery:** Staggered 2-column showcase linking to dedicated `/work/[slug]` case studies (`almadina-bookstore`, `adrena-club`, `mo-pizza`, `command-center-crm`, `tawheed-bookstore`). Supports optional silent looping `videoSrc`/`mobileVideoSrc` via `ProjectMedia` cleanly falling back to optimized `<Image>` captures. Zero scale transforms on images; hover states use clean border contrast shifts only.
- **Native Scroll & Tap Hygiene:** Zero smooth-scroll hijack (`Lenis` removed), zero custom cursor overrides (`cursor: none` removed), zero preloader splash screens. Bottom mobile quick bar (`MobileQuickAction`) sits above page bottoms cleared with `pb-28` footer padding on small screens. Interactive pills use `rounded-full` with `>= 40–48px` tap targets.

## Explicit Refusals (Banned Patterns)

- Zero green/emerald accents, gradients, glowing blurs, or matrix backgrounds.
- Zero pulsing availability dots (`animate-pulse` / `animate-ping`), monospace fake terminal logs, or simulated typewriter console widgets.
- Zero personal portrait photography (`founder-real.jpg` excluded site-wide across `/`, `/about`, and `/contact`).
- Zero public unrequested pricing figures (clear 3-package scope structure routing into fixed 24h custom quotes).
