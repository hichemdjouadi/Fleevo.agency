---
timestamp: 2026-10-11T20-35-13Z
slug: src-app-marketing-page-tsx
---
# Fleevo Agency Landing Page — Comprehensive UI/UX Design Critique

**Target:** `src/app/(marketing)/page.tsx`  
**Method:** dual-agent (A: `d5a34138-1f12-4a7a-9532-869383f402e0` · B: `b5eb157d-b699-424a-ab2b-033ed3c6dc93`)  
**Mode:** Persuade (High-Ticket Digital Product & Sales Engineering Agency)

---

## 1. Design Health Score

| # | Nielsen Heuristic | Score (0–4) | Key Finding / Issue |
|---|-------------------|:-----------:|---------------------|
| 1 | Visibility of System Status | **3/4** | Active steps & pulsing indicators in HeroVisual/ValueProps; hero visual lacks manual interactive controls. |
| 2 | Match Between System & Real World | **4/4** | Authentic B2B commercial vernacular ("tire-kickers", "speed to lead", "calendar locked"). |
| 3 | User Control & Freedom | **3/4** | Working mobile menu, sticky nav, and FAQ accordions; hero live feed cannot be paused or scrubbed. |
| 4 | Consistency & Standards | **2/4** | Container widths jump (`1400px` vs `1200px`), horizontal gutters shift (`px-6` vs `px-12`), and card radii drift (28px to 40px). |
| 5 | Error Prevention | **4/4** | Clean external links with `rel="noreferrer"`, unambiguous primary and secondary CTAs. |
| 6 | Recognition Rather Than Recall | **4/4** | "Before vs With Fleevo" comparison pills in Metrics make value shifts immediately scannable. |
| 7 | Flexibility & Efficiency | `n/a` | *Mode: Persuade* — Power-user accelerators not applicable to public agency landing page. |
| 8 | Aesthetic & Minimalist Design | **3/4** | Exceptional micro-interactions, but compromised by 3x redundant sections (ValueProps, Metrics, Bottlenecks) and a generic bar chart. |
| 9 | Error Recovery | `n/a` | *Mode: Persuade* — No transactional forms directly hosted on this landing page root. |
| 10| Help & Documentation | `n/a` | *Mode: Persuade* — Addressed via objection-handling FAQ. |
| **Total** | | **23/28 (82.1%)** | **Strong Foundation with Architectural Inconsistencies** |

---

## 2. Design Specificity Verdict

- **Unanchored LLM Assessment:** Fleevo successfully avoids generic SaaS cliché territory in its headline, premise, and interactive HeroVisual intake terminal. However, compared to Cuberto-level luxury standards, the page suffers from an identity split: it vacillates between a refined editorial publication and a developer SaaS dashboard, weighed down by an arbitrary bar chart in ValueProps Card 3 and "zebra-stripe" luminance shocks between stark white and obsidian black.
- **Deterministic Detector Scan:** Clean static regex pass (`0 violations`), confirming the absence of crude template slop (no stock purple gradients, no left border accent cards, no bounce keyframes).
- **Deep Code Evidence Audit (13 Findings):**
  - **P0 Critical:** Outro CTA button (`px-10 py-5` with 33-char text) causes horizontal overflow blowout on viewports ≤390px (iPhone SE, Galaxy S-series).
  - **P1 Accessibility & Architecture:** Inconsistent container widths (`1400px` vs `1200px`), sub-4.5:1 contrast failures (`text-neutral-400` on white), unsemantic clickable `<span>` in HeroVisual, and missing ARIA attributes on FAQ and tabs.
  - **P2 Motion & Reflow:** `height: "auto"` layout thrashing in accordions and unthrottled 4-second `setInterval` firing off-screen.

---

## 3. Overall Impression
The page has immense commercial power and technical ambition. The core premise—wiring bespoke frontends into automated sales pipelines—is world-class and clearly articulated. But the user journey currently suffers from **"The Triplet of Redundancy"**: the visitor is forced to read the exact same three arguments (sub-60s routing, tire-kicker filtering, pricing power) across three consecutive sections. Trimming the redundant sections and smoothing the contrast transitions will elevate this into a true \$30k–\$50k agency presence.

---

## 4. Top Strengths
1. **The Hero Intake Terminal (`HeroVisual.tsx`):** Demonstrates actual engineering proof (Next.js + Postgres + WhatsApp dispatch) rather than generic marketing mockups.
2. **Sharp, Commercial Copywriting Tone:** Zero agency fluff; speaks directly to high-ticket business bottlenecks.
3. **Cinematic Outro & Footer:** The ambient video texture behind obsidian gradients provides a memorable, authoritative conclusion.

---

## 5. Priority Issues & Actionable Fixes

### [P0] Fix Mobile Horizontal Overflow on Outro CTA Button
- **What:** `page.tsx#L186` uses `px-10 py-5` on a 33-character button string, yielding a min-width of ~405px that blows out mobile viewports ≤390px.
- **Fix:** Update to `px-6 sm:px-10 py-4 text-base sm:text-xl max-w-full text-center`.
- **Command:** `/impeccable adapt`

### [P1] Eliminate Section Duplication: Consolidate Bottlenecks into ValueProps
- **What:** Sections 4 (`ValueProps`), 6 (`Metrics`), and 7 (`Bottlenecks`) repeat the same three concepts in a row, bloating page length by ~1,500px and creating narrative fatigue.
- **Fix:** Merge the high-impact copy of `Bottlenecks` into `ValueProps` (the Mechanism) and let `Metrics` stand as the pure quantifiable Outcomes.
- **Command:** `/impeccable distill`

### [P1] Eradicate the Generic SaaS Bar Chart in ValueProps
- **What:** Feature 03 uses a generic bar chart ("Template 30% vs Fleevo 100%") that drags the agency down into template-builder aesthetic.
- **Fix:** Replace with an Architecture / Latency blueprint comparing bloated WordPress plugins with Fleevo's edge SSR stack.
- **Command:** `/impeccable craft`

### [P1] Standardize Layout Grid & Gutters
- **What:** Container widths jump between `1400px` and `1200px`, and gutters snap between `px-6`, `px-8`, and `px-12`.
- **Fix:** Unify all section wrappers to `max-w-[1400px] px-6 md:px-12 mx-auto`.
- **Command:** `/impeccable layout`

### [P2] Fix Contrast and ARIA Accessibility Gaps
- **What:** `text-neutral-400` on white produces an illegal 2.85:1 contrast; HeroVisual has an unsemantic clickable `<span>`; FAQ lacks `aria-expanded`.
- **Fix:** Upgrade muted labels to `text-neutral-500`/`text-neutral-600` (≥4.5:1), convert `<span>` to `<TransitionLink>`, and wire proper ARIA attributes.
- **Command:** `/impeccable audit`

---

## 6. Persona Gut-Checks
- **Marcus (B2B Clinic Founder, $8M ARR):** Convinced by the hero terminal, but alienated by seeing only two case studies (pizza and bookstore) and reading about 60-second routing three times. Wants proof of medical/advisory high-ticket intake.
- **Elena (Brand Principal & Design Director):** Praises the micro-interactions and typography, but calls out the bar chart and alternating white/black striping as unrefined compared to Cuberto's seamless spatial transitions.
