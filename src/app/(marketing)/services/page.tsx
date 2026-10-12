"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck
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
      desc: "Websites built for clinics and service firms to book qualified appointments automatically.",
      deliverables: [
        "Mobile booking flow",
        "WhatsApp qualification bot",
        "Instant lead alerts",
        "CRM database sync"
      ]
    },
    {
      num: "02",
      title: "Direct Customer Ordering & E-Commerce Engines",
      badge: "D2C & Retail",
      desc: "Online stores that cut out middleman fees and speed up mobile checkout.",
      deliverables: [
        "Fast mobile catalog",
        "58-Wilayas COD checkout",
        "WhatsApp order tickets",
        "Courier dispatch sync"
      ]
    },
    {
      num: "03",
      title: "Custom Web Applications & Client Portals",
      badge: "Web Software",
      desc: "Client portals and booking software that automate repeat orders and daily operations.",
      deliverables: [
        "Secure client login",
        "Private admin dashboard",
        "Automated intake forms",
        "Custom cloud database"
      ]
    }
  ];

  const pillarTwo = [
    {
      num: "01",
      title: "Performance Meta Ads & Video Direction",
      badge: "Paid Demand",
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
      desc: "We review your current funnel, spot leaks, and map the build."
    },
    {
      step: "02",
      title: "Fixed Blueprint",
      desc: "You get a fixed scope and clear delivery timeline within 24 hours."
    },
    {
      step: "03",
      title: "Build & Bot Setup",
      desc: "We code the platform, connect WhatsApp or Telegram bots, and link couriers."
    },
    {
      step: "04",
      title: "Test & Launch",
      desc: "We test speed on mobile networks, set up ad pixels, and launch."
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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-medium tracking-[-0.035em] leading-[0.95] max-w-4xl text-black"
        >
          Customer acquisition systems{" "}
          <span className="font-serif italic font-light">&amp; digital infrastructure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed"
        >
          High-speed websites, online stores, and ad systems that bring you paying clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/contact"
              className="w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-black text-white text-base font-semibold hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-2 group"
            >
              <span>Book a 15-Minute Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </TransitionLink>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/work"
              className="w-full sm:w-auto justify-center px-8 py-4 rounded-full border border-black/15 text-black text-base font-medium hover:bg-black/5 transition-colors flex items-center"
            >
              View Selected Deployments
            </TransitionLink>
          </Magnetic>
        </motion.div>
      </section>

      {/* 2. PILLAR 1: CUSTOMER ACQUISITION PLATFORMS (THE CONVERSION ENGINE) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] mb-4">
              Customer Acquisition Platforms{" "}
              <span className="font-serif italic font-light">&amp; Automated Intake.</span>
            </h2>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
              Pillar 01 · The Conversion Engine
            </div>
          </div>
          <p className="text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            Websites, online stores, and custom portals built to convert traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/15 border-y border-black/15">
          {pillarOne.map((service) => (
            <div
              key={service.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono font-semibold text-neutral-500">
                    System {service.num}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-neutral-600 font-light text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-black/10">
                <div className="text-xs font-mono font-semibold text-black mb-3">
                  Included
                </div>
                <div className="space-y-2">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PILLAR 2: DEMAND GENERATION & ACQUISITION SCALING (THE SCALING ENGINE) */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.02] mb-4">
                Demand Generation{" "}
                <span className="font-serif italic font-light">&amp; Acquisition Scaling.</span>
              </h2>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                Pillar 02 · The Scaling Engine
              </div>
            </div>
            <p className="text-base md:text-lg text-white/75 font-light max-w-md leading-relaxed">
              Targeted ads, video scripts, and conversion audits to scale your buyer flow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/15 border-y border-white/15">
            {pillarTwo.map((service) => (
              <div
                key={service.num}
                className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono font-semibold text-white/60">
                      Scaling {service.num}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/75 font-light text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <div className="text-xs font-mono font-semibold text-white mb-3">
                    Included
                  </div>
                  <div className="space-y-2">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY & COLLABORATION PROCESS */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02]">
            How we work.{" "}
            <span className="font-serif italic font-light">Four clear steps.</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-sm font-light leading-relaxed">
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
                <div className="text-xs font-mono font-bold text-neutral-500 mb-4">
                  Step {m.step}
                </div>
                <h3 className="text-xl font-medium text-black mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CINEMATIC OUTRO */}
      <section className="relative w-full text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 bg-black">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.98] mb-6">
            Ready to build an acquisition engine that scales?
          </h2>
          <p className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed">
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
