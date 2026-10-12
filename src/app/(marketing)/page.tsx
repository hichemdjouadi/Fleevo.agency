"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Bot
} from "lucide-react";

const PILLAR_ONE_SERVICES = [
  {
    num: "01",
    title: "Client Acquisition Funnels & Brand Vitrines",
    desc: "Service websites that capture leads and qualify buyers automatically on WhatsApp.",
    tags: ["Instant Bot Intake", "Zero-Friction Booking"]
  },
  {
    num: "02",
    title: "Direct Customer Ordering & E-Commerce Engines",
    desc: "Mobile online stores with zero commission fees and instant kitchen or warehouse alerts.",
    tags: ["0% Commission", "58-Wilayas COD"]
  },
  {
    num: "03",
    title: "Custom Web Applications & Client Portals",
    desc: "Private client portals and booking systems that automate repeat orders and onboarding.",
    tags: ["Client Portals", "Cloud Database"]
  }
];

const PILLAR_TWO_SERVICES = [
  {
    num: "01",
    title: "Performance Meta Ads & Video Direction",
    desc: "Facebook and Instagram ad campaigns paired with high-converting video scripts.",
    tags: ["Video Scripts", "Click-to-WhatsApp Ads"]
  },
  {
    num: "02",
    title: "Pipeline Leak & Content Audits",
    desc: "A clear breakdown of where leads drop off plus an organic content plan.",
    tags: ["Funnel Audit", "Content Roadmap"]
  },
  {
    num: "03",
    title: "Brand Credibility Polish",
    desc: "Clean visual identity and branded ad templates included free with core builds.",
    tags: ["Logo Polish", "Ad Templates"]
  }
];

const ACQUISITION_FLOW = [
  {
    num: "01",
    phase: "Attract",
    title: "Ads & Video Scripts",
    desc: "Targeted Meta ads and clear video hooks pull in ready-to-buy prospects."
  },
  {
    num: "02",
    phase: "Convert",
    title: "Fast Web Platforms",
    desc: "Sub-second websites and mobile stores turn visitors into orders or bookings."
  },
  {
    num: "03",
    phase: "Close",
    title: "30s Bot Dispatch",
    desc: "Automated WhatsApp or Telegram bots qualify details and alert your team immediately."
  }
];

export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white min-h-screen">

      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full flex flex-col items-center pt-32 md:pt-44 pb-20 overflow-hidden bg-white text-black">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none transform-gpu" />

        <div className="relative z-20 flex flex-col items-center justify-start text-center px-6 md:px-12 w-full max-w-[1400px] mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-medium tracking-[-0.035em] leading-[0.94] text-black w-full max-w-5xl"
          >
            We engineer customer acquisition systems{" "}
            <span className="font-serif italic font-light">&amp; digital infrastructure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-black/75 font-light max-w-[680px] leading-relaxed"
          >
            Fast websites, online stores, and web apps wired with instant WhatsApp bots and targeted Meta ads.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 z-30 w-full sm:w-auto"
          >
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-full bg-black text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-colors shadow-sm text-center"
              >
                Book a 15-Minute Strategy Call
                <ArrowRight className="w-4 h-4 shrink-0" />
              </TransitionLink>
            </Magnetic>
            <TransitionLink
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-4 rounded-full border border-black/15 text-black font-medium text-sm sm:text-base hover:bg-black/5 transition-colors text-center"
            >
              View Selected Work
            </TransitionLink>
          </motion.div>

          {/* Micro Reassurances */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-black/65"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-black" />
              <span>Automated Bot Intake</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-black" />
              <span>Direct Margin Retained</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-black" />
              <span>Enduring Architecture</span>
            </div>
          </motion.div>

          {/* Photorealistic Floating Device Stage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-16 w-full max-w-[1300px] relative z-20"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* 2. THE 2 PILLARS OF ACQUISITION ARCHITECTURE (OPEN EDITORIAL CANVAS) */}
      <section className="py-28 md:py-40 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] max-w-2xl">
            The 2-Pillar Acquisition <span className="font-serif italic font-light">Architecture.</span>
          </h2>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-sm leading-relaxed">
            Two connected engines that attract buyers, automate intake, and close sales.
          </p>
        </div>

        {/* PILLAR 1: Conversion Engine (Open Canvas Hairline Grid) */}
        <div className="pt-12 border-t border-black/15 mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-3">
                Customer Acquisition Platforms &amp; Bot Intake
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
                <span>Pillar 01 · The Conversion Engine</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-neutral-600 font-light max-w-sm leading-relaxed">
              Websites, online stores, and portals built to turn visitors into buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10">
            {PILLAR_ONE_SERVICES.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6"
              >
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-black tracking-tight mb-3">
                    <span className="font-mono text-sm text-neutral-500 mr-2">{item.num}. </span>
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/10 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#f4f4f5] font-mono text-xs text-neutral-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PILLAR 2: Scaling Engine (High-Contrast Obsidian Theater Block) */}
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-[#050505] text-white">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
                Demand Generation &amp; Acquisition Scaling
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                <span>Pillar 02 · The Scaling Engine</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/70 font-light max-w-sm leading-relaxed">
              Targeted ads, video scripts, and conversion audits to fill your pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
            {PILLAR_TWO_SERVICES.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6"
              >
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
                    <span className="font-mono text-sm text-white/60 mr-2">{item.num}. </span>
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-white/85 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED DEPLOYMENTS */}
      <section className="bg-white text-black py-28 md:py-40 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <h2 className="text-4xl md:text-7xl font-medium text-black tracking-[-0.03em] leading-[0.94]">
              Selected <span className="font-serif italic font-light">deployments.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-lg text-black/70 font-light max-w-sm leading-relaxed">
                Live platforms built to convert traffic from day one.
              </p>
              <TransitionLink
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold shadow-sm shrink-0"
              >
                View all deployments <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>
          </div>
          <FeaturedWork />
        </div>
      </section>

      {/* 4. 3-STEP ACQUISITION FLOW */}
      <section className="bg-[#050505] text-white py-28 md:py-40 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.04] text-white">
                How our systems turn attention{" "}
                <span className="font-serif italic font-light">into revenue.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-light max-w-sm leading-relaxed">
              One connected flow from first ad impression to verified sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
            {ACQUISITION_FLOW.map((item) => (
              <div
                key={item.num}
                className="py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-mono font-semibold text-white/60">
                      Step {item.num}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <FAQ />

      {/* 6. CINEMATIC OUTRO & COLLABORATION GATEWAY */}
      <section className="relative w-full bg-black text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-25 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.95] mb-6"
          >
            Ready to build an acquisition <br className="hidden sm:block" />
            engine that scales?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Book a 15-minute call. We review your setup and map out a clear build plan.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold transition-colors hover:bg-neutral-200 shadow-2xl text-center gap-2"
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
                <span>contact@fleevo.net</span>
              </a>
            </Magnetic>
          </div>

          {/* Outro Reassurance Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-white/65">
            <span>Direct engineering consultation</span>
            <span>·</span>
            <span>Full codebase ownership</span>
            <span>·</span>
            <span>Detailed scope breakdown</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
