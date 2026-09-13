# Visual World

<!-- impeccable:design-schema 1 -->

## Design Strategy

**Mode:** Persuade
**Aesthetic Authority:** Cuberto / Fantasy / Clay.global (Brutalist, cinematic, high-contrast)
**Core Thesis:** The agency is an institution, not a freelancer. The design must communicate uncompromising technical superiority, extreme precision, and luxury positioning ($50k+ contracts). 

## Typography

**Primary Typeface:** Manrope (Geometric, stark, highly legible at massive scales)
- **Display (Hero/Headers):** Massive (`text-[8vw]`), extremely tight kerning (`tracking-tighter`), medium weight. No wrapping unless deliberate.
- **Body:** Small (`1.6rem` - `2rem`), loose line-height (`leading-relaxed`), light weight, high contrast against background.
- **Utility/Labels:** Monospace or highly tracked uppercase (`text-xs tracking-[0.2em]`).

## Color & Theming

**Theme:** Pure Contrast (Black & White). No soft grays, no generic brand colors.
- **Backgrounds:** `#000000` (Primary), `#FFFFFF` (Secondary), `#111111` (Cards/Panels).
- **Foregrounds:** `#FFFFFF` (on black), `#000000` (on white).
- **Accents:** None. Depth is created via opacity (`text-white/60`, `border-white/10`) rather than color.

## Motion & Interaction

**The Physics:** Heavy, smooth, and deliberate. 
- **Smooth Scroll:** Lenis must be implemented globally. Standard browser scroll is strictly forbidden as it breaks the cinematic pacing.
- **Scroll Reveals:** Elements do not "fade up". They are revealed via `clip-path` masks linked to the scroll position, or they scale down into view.
- **The Cursor:** A custom mathematical cursor with `mix-blend-difference`. It must snap magnetically to interactive elements (buttons, links) and expand/contract based on context.
- **Parallax:** Subtle speed differences between foreground typography and background media.

## Layout & Space

**The Grid:** Brutalist and unapologetic.
- **Spacing:** Massive padding. Minimum section padding is `py-32` (128px), often `py-48` (192px). Elements must have room to breathe.
- **Borders:** Hairline dividers (`border-t border-white/10`) to structure information architecturally.
- **Radii:** Extreme. `rounded-[3rem]` for massive architectural panels, `rounded-full` for interactive pills/buttons. No standard `rounded-md` generic corners.

## Component Patterns

- **Buttons (Magnetic):** Wrapped in Framer Motion spring physics. They physically pull toward the cursor (`useMouseMove`, `useSpring`).
- **Navbar (Inverted):** Pure `mix-blend-difference` on the text. No JS scroll state. It flawlessly inverts against any background.
- **Featured Work (3D Glass Cards):** Use massive `preserve-3d` cards. `rotateX` and `rotateY` mapped to `useMotionValue`. Child elements (UI image vs text) must have different `translateZ` values to create physical glass-box depth.
- **Architectures (Sticky Stacking):** Structural cards that use `sticky top-[offset]` and sequential z-indexes to physically slide over each other like a deck of cards on scroll.

## Anti-Patterns (Banned)

- 🚫 **Bootstrap/Generic Tailwind:** No default shadow classes (`shadow-lg`), no generic blue/indigo primary colors.
- 🚫 **Floating 3D Slop:** No pure CSS gradients pretending to be 3D spheres. 
- 🚫 **Standard Fades:** No basic `opacity: 0 -> 1` without a corresponding mask or transform.
- 🚫 **Cramped Spacing:** Never place sections closer than 128px vertically.
