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
  Bot,
  MessageCircle
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { t, isRTL } = useTranslation();

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
            className="text-[32px] sm:text-5xl md:text-7xl lg:text-[78px] font-medium tracking-[-0.035em] leading-[1.04] sm:leading-[0.94] text-black w-full max-w-5xl text-balance"
          >
            {t.home.hero.headlineStart}{" "}
            <span className="rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic font-light">{t.home.hero.headlineEnd}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl text-black/75 font-light max-w-[640px] leading-relaxed text-pretty"
          >
            {t.home.hero.subtitle}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center z-30 w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-full bg-black text-white font-medium text-sm sm:text-base hover:bg-neutral-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.12)] text-center group"
                >
                  <span>{t.home.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </TransitionLink>
              </Magnetic>
              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-4 rounded-full border border-black/15 text-black font-medium text-sm sm:text-base hover:bg-black/5 transition-colors text-center"
                >
                  {t.home.hero.ctaSecondary}
                </TransitionLink>
              </Magnetic>
            </div>

            {/* Direct Executive Fast-Track Line */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-black/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>WhatsApp:</span>
              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20an%20acquisition%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-black underline underline-offset-4 hover:text-neutral-600 transition-colors inline-flex items-center gap-1"
              >
                <span dir="ltr">+213 655 934 124 (&lt; 15m)</span>
                <span className="rtl:rotate-180">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Micro Reassurances */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-8 text-[11px] sm:text-xs font-mono text-black/65"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Bot className="w-3.5 h-3.5 text-black shrink-0" />
              <span>{t.home.hero.badges.bot}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-3.5 h-3.5 text-black shrink-0" />
              <span>{t.home.hero.badges.commission}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
              <span>{t.home.hero.badges.speed}</span>
            </div>
          </motion.div>

          {/* Photorealistic Floating Device Stage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-16 w-full max-w-[1300px] relative z-20"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* 2. THE 2 PILLARS OF ACQUISITION ARCHITECTURE */}
      <section className="py-28 md:py-40 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] max-w-2xl text-balance">
            {t.home.pillars.headline}
          </h2>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-sm leading-relaxed text-pretty">
            {t.home.pillars.subhead}
          </p>
        </div>

        {/* PILLAR 1: Platforms & Digital Infrastructure */}
        <div className="pt-12 border-t border-black/15 mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-3 text-balance">
                {t.home.pillars.pillarOneTitle}
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
                <span>{t.home.pillars.badge} · 01</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-neutral-600 font-light max-w-sm leading-relaxed text-pretty">
              {t.home.pillars.pillarOneDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-black/10 border-y border-black/10">
            {t.home.pillars.pillarOneServices.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:ps-0 last:md:pe-0 flex flex-col justify-between gap-6 text-start"
              >
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-black tracking-tight mb-3 text-balance">
                    <span className="font-mono text-sm text-neutral-500 me-2">{item.num}. </span>
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
                {item.tags && (
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
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PILLAR 2: Growth & Customer Acquisition */}
        <div className="p-6 sm:p-12 md:p-16 rounded-3xl sm:rounded-[2.5rem] bg-[#050505] text-white">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3 text-balance">
                {t.home.pillars.pillarTwoTitle}
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                <span>{t.home.pillars.badge} · 02</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/70 font-light max-w-sm leading-relaxed text-pretty">
              {t.home.pillars.pillarTwoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/15 border-y border-white/15">
            {t.home.pillars.pillarTwoServices.map((item) => (
              <div
                key={item.num}
                className="py-8 md:py-10 md:px-8 first:md:ps-0 last:md:pe-0 flex flex-col justify-between gap-6 text-start"
              >
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3 text-balance">
                    <span className="font-mono text-sm text-white/60 me-2">{item.num}. </span>
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-white/75 font-light leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
                {item.tags && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED DEPLOYMENTS */}
      <section className="bg-white text-black py-28 md:py-40 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <h2 className="text-4xl md:text-7xl font-medium text-black tracking-[-0.03em] leading-[0.94] text-balance">
              {t.home.showcase.headline}
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-lg text-black/70 font-light max-w-sm leading-relaxed text-pretty">
                {t.home.showcase.subhead}
              </p>
              <TransitionLink
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold shadow-sm shrink-0"
              >
                <span>{t.home.showcase.viewAll}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </TransitionLink>
            </div>
          </div>
          <FeaturedWork />

          {/* Proof-to-Action Conversion Bridge */}
          <div className="mt-16 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-start">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                {t.work.bottomCta.headline}
              </span>
              <p className="text-base sm:text-lg text-black font-medium">
                {t.work.bottomCta.subhead}
              </p>
            </div>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono font-semibold shrink-0"
            >
              <span>{t.home.ctaBanner.primaryBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* 4. 3-STEP ACQUISITION FLOW */}
      <section className="bg-[#050505] text-white py-28 md:py-40 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.04] text-white text-balance">
                {t.home.flow.headline}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-light max-w-sm leading-relaxed text-pretty">
              {t.home.flow.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/15 border-y border-white/15">
            {t.home.flow.steps.map((item) => (
              <div
                key={item.num}
                className="py-10 md:px-8 first:md:ps-0 last:md:pe-0 flex flex-col justify-between gap-6 text-start"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3 text-balance">
                    <span className="font-mono text-sm text-white/55 me-2">{item.num}. </span>
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/75 font-light leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                  <span>{item.num}</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                    {item.phase}
                  </span>
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
        <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden pointer-events-none">
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
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.95] mb-6 text-balance"
          >
            {t.home.ctaBanner.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed text-pretty"
          >
            {t.home.ctaBanner.subhead}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold transition-colors hover:bg-neutral-200 shadow-2xl text-center gap-2"
              >
                <span>{t.home.ctaBanner.primaryBtn}</span>
                <ArrowRight className="w-5 h-5 shrink-0 rtl:rotate-180" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="https://wa.me/213655934124"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors text-center gap-2"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>{t.home.ctaBanner.whatsappBtn}</span>
              </a>
            </Magnetic>
          </div>

          {/* Outro Reassurance Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-white/65">
            <span>{t.home.founder.badge}</span>
            <span>·</span>
            <span>{t.about.hero.ledger.lockinTitle}</span>
            <span>·</span>
            <span>{t.contact.reassurance.fixedProposal}</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
