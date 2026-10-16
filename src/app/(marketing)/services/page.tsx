"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  Clock,
  Lock,
  Bot,
  MessageCircle
} from "lucide-react";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

export default function ServicesPage() {
  const pillarOne = [
    {
      num: "01",
      title: "Client Acquisition Funnels & Brand Vitrines",
      badge: "Clinics & Services",
      sla: "2–3 Weeks Delivery",
      queryService: "Website / Landing Page",
      desc: "High-conversion platforms built for clinics and service firms to capture and qualify client inquiries automatically.",
      deliverables: [
        "Mobile conversion flow",
        "WhatsApp qualification bot",
        "Instant lead notification alerts",
        "CRM database sync"
      ]
    },
    {
      num: "02",
      title: "Direct Customer Ordering & E-Commerce Engines",
      badge: "D2C & Retail",
      sla: "2–3 Weeks Delivery",
      queryService: "E-Commerce Store",
      desc: "Dedicated digital storefronts that eliminate marketplace cuts and streamline mobile purchasing.",
      deliverables: [
        "High-conversion mobile catalog",
        "58-Wilayas COD checkout",
        "Instant WhatsApp order tickets",
        "Courier dispatch sync"
      ]
    },
    {
      num: "03",
      title: "Custom Web Apps, Proprietary CRMs & Automation",
      badge: "Custom CRMs & Software",
      sla: "3–4 Weeks Delivery",
      queryService: "Custom CRM / Web App",
      desc: "Tailored lead tracking pipelines, client portals, and back-office automations that eliminate manual spreadsheet data entry.",
      deliverables: [
        "Lightweight deal pipeline CRM",
        "Lead-going-cold tracking & alerts",
        "Automated courier & dispatch sync",
        "Custom database & client portal"
      ]
    }
  ];

  const pillarTwo = [
    {
      num: "01",
      title: "Performance Meta Ads & Video Direction",
      badge: "Paid Demand",
      sla: "1–2 Weeks Delivery",
      queryService: "Meta Ads & Video Scripts",
      desc: "Facebook and Instagram ad campaigns paired with video scripts that attract buyers.",
      deliverables: [
        "Meta ad campaigns",
        "Conversion video scripts",
        "Ad hook testing",
        "WhatsApp ad funnels"
      ]
    },
    {
      num: "02",
      title: "Pipeline Leak & Content Audits",
      badge: "Growth Audit",
      sla: "48-Hour Delivery",
      queryService: "Conversion & Content Audit",
      desc: "A clear audit showing where buyers drop off and what converts best.",
      deliverables: [
        "Funnel leak teardown",
        "Offer positioning review",
        "Organic content roadmap",
        "Priority fix checklist"
      ]
    },
    {
      num: "03",
      title: "Brand Credibility Polish",
      badge: "Included Bonus",
      sla: "Included With Build",
      queryService: "Website / Landing Page",
      desc: "Clean visual identity and branded ad assets included free with core builds.",
      deliverables: [
        "Logo mark cleanup",
        "Modern typography system",
        "Branded ad templates",
        "Social profile kit"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit & Strategy",
      desc: "We review your current funnel, spot leaks, and map the build.",
      deliverable: "Funnel Audit Brief"
    },
    {
      step: "02",
      title: "Fixed Blueprint",
      desc: "You get a fixed scope and clear delivery timeline within 24 hours.",
      deliverable: "Fixed-Scope Roadmap"
    },
    {
      step: "03",
      title: "Build & Bot Setup",
      desc: "We code the platform, connect WhatsApp or Telegram bots, and link couriers.",
      deliverable: "Staging Platform & Bots"
    },
    {
      step: "04",
      title: "Test & Launch",
      desc: "We test speed on mobile networks, set up ad pixels, and launch.",
      deliverable: "Live Production Handover"
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-5xl md:text-7xl lg:text-[72px] font-medium tracking-tight leading-[1.04] sm:leading-[0.95] max-w-4xl text-black text-balance"
        >
          Customer acquisition systems{" "}
          <span className="font-serif italic font-light">&amp; digital infrastructure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed text-balance"
        >
          High-speed websites, online stores, and ad systems that bring you paying clients.
        </motion.p>

        {/* Dual CTAs for Mobile & Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
            <Magnetic intensity={0.2}>
              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20an%20acquisition%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-all shadow-sm text-center"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </TransitionLink>
            </Magnetic>

            <TransitionLink
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/15 text-black text-sm sm:text-base font-medium hover:bg-black/5 transition-colors text-center"
            >
              View Deployments
            </TransitionLink>
          </motion.div>
      </section>

      {/* 2. DISCIPLINE 01: PLATFORMS & DIGITAL INFRASTRUCTURE */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] mb-4 text-balance">
              Platforms{" "}
              <span className="font-serif italic font-light">&amp; Digital Infrastructure.</span>
            </h2>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
              Discipline 01 · Platforms &amp; Digital Infrastructure
            </div>
          </div>
          <p className="text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
            Customer acquisition platforms, stores, and custom CRMs engineered to convert traffic and automate intake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/15 border-y border-black/15">
          {pillarOne.map((service) => (
            <div
              key={service.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.sla}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-black mb-3 text-balance">
                  <span className="font-mono text-sm text-neutral-500 mr-2">{service.num}. </span>
                  {service.title}
                </h3>

                <p className="text-neutral-600 font-light text-base leading-relaxed text-pretty">
                  {service.desc}
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-black/10">
                  <span className="text-xs font-mono font-semibold text-black block mb-4">
                    Core Deliverables Included
                  </span>
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <TransitionLink
                  href={`/contact?service=${encodeURIComponent(service.queryService)}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-neutral-50 hover:bg-black hover:text-white border border-black/10 transition-colors text-xs font-mono font-semibold group"
                >
                  <span>Inquire About This Build</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Niche Capability Callout */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-neutral-800 font-semibold mb-3">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              <span>SPECIALIZED VERTICAL CAPABILITY · HIGH-INQUIRY NICHES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-2">
              Domain-Specific Conversational AI &amp; Triage Agents
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              We do not deploy novelty chatbots everywhere. For inquiry-heavy sectors like polyclinics, real estate developments, and specialized service firms, we train custom AI agents on your pricing, procedures, and availability to pre-qualify leads and book consultations 24/7 without consuming staff hours.
            </p>
          </div>
          <TransitionLink
            href="/contact?service=Domain-Specific%20AI%20Agent"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono uppercase tracking-wider font-semibold shrink-0"
          >
            <span>Inquire for Your Niche</span>
            <ArrowRight className="w-4 h-4" />
          </TransitionLink>
        </div>
      </section>

      {/* 3. ZERO-RISK GUARANTEE CALLOUT */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="rounded-[2.5rem] bg-neutral-50 border border-black/10 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-neutral-800 font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>THE FLEEVO ACQUISITION GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-3">
              Built to capture leads and process orders without friction.
            </h3>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              Every system we deploy is tested against real-world customer journeys. If inquiries fail to alert your team in 30 seconds, or if your checkout sequence creates friction on mobile, we do not sign off on delivery until the pipeline is airtight.
            </p>
          </div>
          <TransitionLink
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono uppercase tracking-wider font-semibold shrink-0"
          >
            <span>Discuss Your Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </TransitionLink>
        </div>
      </section>

      {/* 4. DISCIPLINE 02: GROWTH & CUSTOMER ACQUISITION */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.02] mb-4 text-balance">
                Growth{" "}
                <span className="font-serif italic font-light">&amp; Customer Acquisition.</span>
              </h2>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                Discipline 02 · Growth &amp; Customer Acquisition
              </div>
            </div>
            <p className="text-base md:text-lg text-white/75 font-light max-w-md leading-relaxed text-pretty">
              Targeted Meta campaigns, direct-response video direction, and pipeline audits to fuel your platform with qualified buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/15 border-y border-white/15">
            {pillarTwo.map((service) => (
              <div
                key={service.num}
                className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-white font-semibold">
                      {service.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.sla}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-white mb-3 text-balance">
                    <span className="font-mono text-sm text-white/55 mr-2">{service.num}. </span>
                    {service.title}
                  </h3>

                  <p className="text-white/75 font-light text-base leading-relaxed text-pretty">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-6 border-t border-white/15">
                    <span className="text-xs font-mono font-semibold text-white block mb-4">
                      Core Deliverables Included
                    </span>
                    <div className="space-y-2 mb-6">
                      {service.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-white/85">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <TransitionLink
                    href={`/contact?service=${encodeURIComponent(service.queryService)}`}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-colors text-xs font-mono font-semibold group"
                  >
                    <span>Inquire About This Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </TransitionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY & COLLABORATION PROCESS */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] text-balance">
            How we work.{" "}
            <span className="font-serif italic font-light">Four clear steps.</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-sm font-light leading-relaxed text-pretty">
            From initial audit to live launch in four structured milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/15 border-y border-black/15">
          {methodology.map((m, idx) => (
            <div
              key={idx}
              className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <h3 className="text-xl font-medium text-black mb-2 text-balance">
                  <span className="font-mono text-sm text-neutral-500 mr-2">{m.step}. </span>
                  {m.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed text-pretty">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>{m.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CINEMATIC OUTRO */}
      <section className="relative w-full text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 bg-black">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.98] mb-6 text-balance">
            Ready to build an acquisition engine that scales?
          </h2>
          <p className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed text-balance">
            Book a 15-minute call. We send a clear build plan within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold transition-all hover:bg-neutral-200 shadow-2xl text-center gap-2"
              >
                <span>Book a 15-Minute Strategy Call</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevo.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors text-center"
              >
                contact@fleevo.net
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
