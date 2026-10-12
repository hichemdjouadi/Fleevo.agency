---
target: src/app/(marketing)/services/page.tsx
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-10-11T22-49-17Z
slug: src-app-marketing-services-page-tsx
---
# Design Critique: Services Page & Architectures

## Report Header Provenance
Method: dual-agent (A: e3accfa5-424c-438c-9938-3f36940e2bb9 · B: 503a5e88-b934-4024-b37a-2bb071dbb9a8)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 3 | Live simulated telemetry (Stripe cleared, Telegram alert, WhatsApp confirmation) is effective. Lacks sticky deck progress indicator. |
| 2 | Match System / Real World | 4 | Real-world business mechanics (150,000 DA lead value, test drives, table reservations, cart recovery). |
| 3 | User Control and Freedom | 3 | Smooth scroll and magnetic CTA escapes without scroll-hijacking traps. |
| 4 | Consistency and Standards | 2 | Dark card islands inside white body create visual fragmentation; chromatic palette drifts across 5+ Tailwind accents contrary to DESIGN.md. |
| 5 | Error Prevention | 3 | High-intent single conversion path with large magnetic buttons. |
| 6 | Recognition Rather Than Recall | 4 | Tangible operational mockups demonstrate complex engines visually; eliminates tech jargon recall. |
| 7 | Flexibility and Efficiency | n/a | Persuade landing page mode; power user accelerators not applicable. |
| 8 | Aesthetic and Minimalist Design | 3 | Bold Manrope typography and strong white space; docked for noisy multi-color badges and uncurated gradients. |
| 9 | Error Recovery | 3 | Robust fallback navigation and resilient static routes. |
| 10 | Help and Documentation | n/a | Persuade landing page mode; internal docs not applicable. |
| **Total** | | **25/32** | **Good (78.1%)** |

## Design Specificity Verdict

- **LLM Assessment**: The restored interactive version represents a quantum leap in product specificity over the prior static bulleted layout. Instead of generic agency claims, it showcases tangible operational artifacts (Telegram alerts in Algerian Dinar, automated WhatsApp booking, Stripe checkout, live ROAS indicators). However, structural containment (floating dark cards inside white gutters) and multi-color chromatic drift dilute its luxury brutalist identity.
- **Deterministic Scan**: 0 AST pattern warnings from detect.mjs. Code inspection revealed mobile width clipping (<360px) on fixed `w-[320px]` widgets, and dynamic Tailwind string purge bugs in `Architectures.tsx`.

## Overall Impression
The page has moved from a generic B2B agency brochure into a high-converting, demonstrative engineering showcase. The core narrative is strong, but execution details—mobile responsive layout for card collages, dynamic Tailwind purging, and full-bleed environmental section contrast—are the difference between a good website and a $50k Cuberto-grade authority piece.

## What's Working
1. **Tangible Operational Artifacts**: Showing real messages, payments, and notifications directly sells business results instead of abstract tech buzzwords.
2. **Editorial Display Typography**: The Manrope hero lockup with italic serif accent (`Growth is an engineering problem.`) sets immediate authority.
3. **Strategic Elimination of Commodity Pricing**: Removing low-tier $500/mo self-select cards protects consultative high-ticket positioning.

## Priority Issues

### [P1] Dynamic Tailwind Purge & Stacking Physics in Architectures.tsx
- **Why it matters**: `z-${index * 10}` and `via-${gradientColor}-500/50` are purged by Tailwind v4 at build time. Furthermore, cards scroll normally rather than executing true sticky card-deck stacking.
- **Fix**: Replace dynamic strings with static record mappings (`const Z_INDEX_MAP`) and enable true `sticky top-28` stacking with scroll scaling decay.
- **Suggested command**: `/impeccable harden`

### [P1] Mobile Layout Collision & Viewport Overflow
- **Why it matters**: On viewports < 375px, fixed `w-[320px]` cards exceed the 264px container width, and absolute offsets cause floating badges to collide.
- **Fix**: On mobile screens (`< md`), transform floating collages into a clean vertical stack with `max-w-full`, reserving absolute positioning for desktop viewports.
- **Suggested command**: `/impeccable adapt`

### [P2] Full-Bleed Environmental Worlds vs. "Zebra Island" Cards
- **Why it matters**: Floating dark card containers (`rounded-[3rem] bg-[#020202] mx-auto`) inside a white canvas feel like embedded widgets rather than the immersive world-shifts characteristic of Cuberto and Fantasy.
- **Fix**: Transition cleanly from full-bleed Pure White (Hero) to a full-bleed Obsidian Void section for the deep dives.
- **Suggested command**: `/impeccable layout`

### [P2] Chromatic Drift vs. Monochrome Luxury Constitution
- **Why it matters**: Uncurated multi-color badges (indigo, orange, purple, green, red) conflict with the strict black/white/obsidian standard in DESIGN.md.
- **Fix**: Keep color strictly on authentic 3rd-party brand marks (Stripe, WhatsApp, Telegram); make all internal badges and borders crisp monochrome glass.
- **Suggested command**: `/impeccable quieter`

## Persona Red Flags
- **Jordan (B2B Clinic / High-Ticket Founder)**: Enthusiastic about the automated WhatsApp and Telegram pipeline, but the crossed-out `"$500/mo"` in the Strategy section creates low-ticket price anchoring that feels inconsistent with a $10k+ investment.
- **Riley (Design-Conscious Brand Director)**: Notices that `StackCard` does not physically stack like a deck on scroll and is distracted by disparate Tailwind accent colors.

## Minor Observations
- Section spacing between deep dives (`mt-12`) is too tight compared to the `py-32` luxury standard in DESIGN.md.
- Missing `aria-hidden="true"` on decorative icons and background video.
- Height animation in Strategy section should use GPU-accelerated `scaleY`.

## Questions to Consider
1. What if prospects could click an interactive vertical toggle (e.g. "Clinic", "E-Commerce", "Hospitality") that instantly tailors the live Telegram alerts, WhatsApp messages, and checkout metrics to their exact industry?
2. What if the stacking cards had tactile scroll decay—subtly scaling down and blurring as the next architecture card slides into view?
