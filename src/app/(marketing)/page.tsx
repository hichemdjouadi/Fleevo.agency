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
    desc: "Conversion-first web platforms built for clinics, consulting firms, and service practices. Incoming inquiries trigger instant WhatsApp or Telegram bot qualification so prospective clients are contacted while buying intent is highest.",
    footer: "Instant Bot Qualification · Zero Friction Booking"
  },
  {
    num: "02",
    title: "Direct Customer Ordering & E-Commerce Engines",
    desc: "Direct-to-consumer digital storefronts that eliminate middleman commission cuts. Designed for frictionless mobile purchasing with 58-Wilayas COD checkout, instant WhatsApp order tickets, and courier dispatch sync.",
    footer: "0% Commission Cuts · 58-Wilayas COD Ready"
  },
  {
    num: "03",
    title: "Custom Web Applications, Portals & Booking Software",
    desc: "Tailored client portals, self-service re-ordering systems, and operational web apps that remove friction from repeat business, automated onboarding, and multi-step intake flows.",
    footer: "Private Dashboards · Supabase Infrastructure"
  }
];

const PILLAR_TWO_SERVICES = [
  {
    num: "01",
    title: "Performance Meta Ads & Direct-Response Video Direction",
    desc: "Targeted acquisition campaigns across Facebook and Instagram. We write high-converting video scripts, hook angles, and creative guidance so you attract qualified buyers and route them straight into your funnel.",
    footer: "Direct-Response Scripts · Click-to-WhatsApp Funnels"
  },
  {
    num: "02",
    title: "Pipeline Leak & Content Marketing Audits",
    desc: "An end-to-end diagnostic pinpointing where prospective customers drop off before paying, paired with a practical organic content roadmap to attract inbound clients without relying solely on paid ads.",
    footer: "Full Conversion Funnel Leak Teardown · Offer Review"
  },
  {
    num: "03",
    title: "Brand Credibility Polish (Complimentary Onboarding Bonus)",
    desc: "Visual identity refinement, modern typography, and branded social/ad assets included complimentary with our core packages to establish authority and eliminate buyer hesitation.",
    footer: "Visual Identity · Authority Assets"
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
            className="mt-6 md:mt-8 text-lg md:text-2xl text-black/75 font-light max-w-[780px] leading-relaxed"
          >
            Conversion-engineered web platforms, e-commerce stores, and custom applications wired with automated bot intake — fueled by targeted Meta ads and direct-response video direction.
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
          <p className="text-base sm:text-lg text-black/70 font-light max-w-md leading-relaxed">
            We install complete customer acquisition engines that capture qualified prospects, automate intake, and convert attention into measurable revenue.
          </p>
        </div>

        {/* PILLAR 1: Conversion Engine (Open Canvas Hairline Grid) */}
        <div className="pt-12 border-t border-black/15 mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black mb-4">
                <span>Pillar 01 · The Conversion Engine</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-black">
                Customer Acquisition Platforms &amp; Bot Intake
              </h3>
            </div>
            <p className="text-sm md:text-base text-neutral-600 font-light max-w-md leading-relaxed">
              Digital infrastructure engineered specifically to turn visitors into paying clients, with embedded bot qualification and real-time sales dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10">
            {PILLAR_ONE_SERVICES.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-8"
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
                <div className="pt-4 border-t border-black/10 font-mono text-xs text-neutral-600">
                  {item.footer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PILLAR 2: Scaling Engine (High-Contrast Obsidian Theater Block) */}
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-[#050505] text-white">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white mb-4">
                <span>Pillar 02 · The Scaling Engine</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                Demand Generation &amp; Acquisition Scaling
              </h3>
            </div>
            <p className="text-sm md:text-base text-white/70 font-light max-w-md leading-relaxed">
              Fueling your acquisition platform with qualified buyers, fixing conversion leaks, and guiding direct-response video creative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
            {PILLAR_TWO_SERVICES.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-8"
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
                <div className="pt-4 border-t border-white/10 font-mono text-xs text-white/65">
                  {item.footer}
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
              <p className="text-lg text-black/70 font-light max-w-md leading-relaxed">
                Live platforms and custom systems engineered to turn attention into paying clients from day one.
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

      {/* 4. STUDIO MANIFESTO (CORE SUPERPOWER & VALUE PROPOSITION) */}
      <section className="bg-[#050505] text-white py-28 md:py-40 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80">
                Studio Manifesto
              </span>
            </div>
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.04] text-white">
                We don&apos;t just build websites — we engineer integrated systems that{" "}
                <span className="font-serif italic font-light">acquire customers and turn attention into revenue.</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/75 font-light leading-relaxed max-w-[68ch]">
                We build customer-acquiring web platforms, e-commerce stores, and custom applications wired with automated bot intake — fueled by targeted Meta ads, video scripting guidance, and acquisition audits to predictably grow your client base.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/15">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">The Problem We Solve</h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    Most businesses spend money on social media or isolated websites, but lack a reliable mechanism to turn viewers into paying clients. Inquiries sit unanswered in DMs and prospects slip away before booking.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">How We Make Clients Money</h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    Targeted ads pull in high-intent buyers, conversion-engineered platforms convince them to act, and automated WhatsApp or Telegram bots capture their details and route them to sales in 30 seconds.
                  </p>
                </div>
              </div>
            </div>
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
            className="text-lg md:text-2xl text-white/75 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Book a 15-minute consultation with our engineering team. We will review your acquisition pipeline, diagnose leaks, and present an exact digital infrastructure plan.
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
                href="mailto:hello@fleevy.agency"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors text-center"
              >
                <span>Direct Studio Email</span>
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
