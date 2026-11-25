# Product

<!-- impeccable:product-schema 1 -->

## Platform

web (`Next.js 16.3.5` App Router + Tailwind v4 + Supabase + Telegram + Trello + Resend)

## Dual-Audience Context & Localization

- **Local Algerian Operators (EN / FR / AR RTL — DZD defaults when in FR/AR):** Clinics, real estate developers, bookstores/retailers, sports clubs, and quick-service food brands needing mobile-first (`390px`, 4G-fast) commission-free 58-wilaya COD ordering, instant WhatsApp/Telegram routing, and direct Meta ad conversion.
- **International B2B & Service Founders (EN — USD defaults):** Founders upgrading legacy brochure sites into fast, high-trust web platforms, proprietary CRMs, and automated acquisition pipelines.
- **Full Localization:** Instant switching across English (`EN`), French (`FR`), and Right-to-Left Arabic (`AR`) preserved across route transitions via `?lang=` and context storage.

## Core Two-Discipline Service Architecture (`AGENCY_SERVICES.md`)

- **Discipline 01 — The Engine (Platforms, CRMs & AI Intake):**
  1. **Client Acquisition Funnels & Brand Vitrines** (`2–3 Weeks`): High-speed service & B2B sites with <30s WhatsApp/Telegram alert routing and clean local SEO.
  2. **Direct Ordering & 58-Wilaya E-Commerce Engines** (`2–4 Weeks`): Zero-commission storefronts with instant search, 58-wilaya COD checkout, optional online card payment, and automated courier tickets.
  3. **Custom Web Apps, Proprietary CRMs & Automation** (`3–4 Weeks`): Kanban pipelines, client/ops portals, and 7-day cold-lead tracking replacing spreadsheets.
  4. **Domain-Specific Conversational AI Agents** (*Vertical Tier*): Custom AI assistants trained on business pricing, schedules, and catalog specs to qualify and book buyers 24/7.
- **Discipline 02 — The Fuel (Growth & Acquisition):**
  5. **Full-Funnel Strategy & Performance Meta Ads** (`1–2 Weeks Setup`): Offer angles, direct-response video scripts, Meta CAPI tracking, and click-to-WhatsApp/funnel campaigns.
  6. **Customer Pipeline & Content Marketing Audits** (`48h Delivery`): 10-point funnel teardown across ad click, landing page, pricing structure, DM reply speed, and organic content roadmap.
  7. **Brand Credibility Polish** (*Complimentary Onboarding Bonus*): Clean vector lockup, monochrome hierarchy polish, and launch ad creative templates included alongside builds (never sold standalone).

## Packages & Intake Funnel (`/contact`)

- **3 Package Tiers:** `01 Foundational Engine`, `02 Turnkey Growth Machine` (Most Popular + Free Brand Polish), `03 Scale & AI Automation` (Custom CRM + Domain AI Agent + Monthly Optimization), scoped via fixed 24h quote.
- **Honest Work Evidence (`src/lib/projects.ts`):** Clearly labels **Live Client Builds** (`Almadina Bookstore`, `Mo Pizza`, `Tawheed Bookstore`), **Sector System Demos** (`Adréna Club`), and **Built In-House** (`Command Center CRM` — `/admin`).
- **3-Mode Contact Hub (`/contact`):**
  - `Free 48h Video Audit` (`AuditQuickForm` — fast URL/Instagram + WhatsApp submission)
  - `3-Tap System Scope` (`OnboardingWizard` — interactive branched scope configurator generating a prefilled WhatsApp brief + Supabase lead row)
  - `Full Project Brief` (`ContactForm` — auto-selected when arriving from package/service links via `?service=` or `?subject=`)
- All public form submissions invoke `submitAuditRequest` (`src/app/actions.ts`), saving to Supabase (`leads`), alerting Telegram, creating a Trello card, and dispatching Resend notifications without exposing `/admin`.
