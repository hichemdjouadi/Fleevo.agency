"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import AutonomousEngineSimulator from "@/components/AutonomousEngineSimulator";
import SovereignGuarantee from "@/components/SovereignGuarantee";
import AnatomyOfTheLeak from "@/components/AnatomyOfTheLeak";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Bot,
  MessageCircle,
  Check,
  Clock,
  Cpu,
  Layers,
  Radio,
  Activity,
  Server
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { t, isRTL, locale } = useTranslation();

  return (
    <main className="bg-white text-black selection:bg-black selection:text-white min-h-screen w-full max-w-full overflow-x-hidden">

      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full flex flex-col items-center pt-28 sm:pt-36 md:pt-48 pb-16 sm:pb-24 overflow-hidden bg-white text-black">
        {/* Subtle architectural ambient aura */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.04),transparent)] pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto overflow-x-clip">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[28px] xs:text-[32px] sm:text-5xl md:text-7xl lg:text-[78px] font-medium tracking-[-0.035em] leading-[1.15] sm:leading-[0.94] text-black w-full max-w-5xl text-balance break-words"
          >
            {t.home.hero.headlineStart}{" "}
            <span className="rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic font-light">{t.home.hero.headlineEnd}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-8 text-sm sm:text-xl md:text-2xl text-black/75 font-light max-w-[640px] leading-relaxed text-pretty break-words"
          >
            {t.home.hero.subtitle}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-10 flex flex-col items-center justify-center z-30 w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/contact"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-black text-white font-medium text-sm sm:text-base hover:bg-neutral-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.12)] text-center group"
                >
                  <span>{t.home.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </TransitionLink>
              </Magnetic>
              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/work"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border border-black/15 text-black font-medium text-sm sm:text-base hover:bg-black/5 transition-colors text-center"
                >
                  {t.home.hero.ctaSecondary}
                </TransitionLink>
              </Magnetic>
            </div>

            {/* Direct Executive Fast-Track Line */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20an%20acquisition%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 hover:bg-emerald-500/15 text-xs font-mono font-medium transition-all min-h-[40px]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-black/60 font-mono">WhatsApp:</span>
                <span dir="ltr" className="font-semibold text-emerald-900">+213 655 934 124</span>
                <span className="text-neutral-500 hidden xs:inline">// Technical Desk</span>
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

      {/* 2. LIVE AUTONOMOUS REVENUE ENGINE (EXCITEMENT) */}
      <AutonomousEngineSimulator />

      {/* 3. ANATOMY OF THE LEAK (ENLIGHTENMENT) */}
      <AnatomyOfTheLeak />

      {/* 4. THE 2 PILLARS OF ACQUISITION ARCHITECTURE */}
      <section className="py-28 md:py-44 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] max-w-2xl text-balance">
            {t.home.pillars.headline}
          </h2>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-sm leading-relaxed text-pretty">
            {t.home.pillars.subhead}
          </p>
        </div>

        {/* PILLAR 1: Platforms & Digital Infrastructure */}
        <div className="p-6 sm:p-12 md:p-16 rounded-3xl sm:rounded-[2.5rem] bg-[#f9f9fb] border border-black/10 mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-3 text-balance">
                {t.home.pillars.pillarOneTitle}
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-semibold text-black">
                <span>{t.home.pillars.badge} · 01</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-neutral-600 font-light max-w-sm leading-relaxed text-pretty">
              {t.home.pillars.pillarOneDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-black/10">
            {/* Left: 3 Capability Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-start">
              {t.home.pillars.pillarOneServices.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white border border-black/10 text-start"
                >
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-black tracking-tight mb-2 text-balance">
                      <span className="font-mono text-xs text-neutral-500 me-1.5">{item.num}. </span>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed text-pretty">
                      {item.desc}
                    </p>
                  </div>
                  {item.tags && (
                    <div className="pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-neutral-100 font-mono text-[11px] text-neutral-800 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Tangible Visual UI Artifact (Live Sovereign Checkout) */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-black/15 shadow-md flex flex-col justify-between gap-5 text-start">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10 text-xs font-mono">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span dir="ltr" className="text-neutral-800 font-semibold truncate">mopizzarestaurants.vercel.app</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider shrink-0 font-semibold">Live Node</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-3">
                  <div className="flex items-center justify-between text-xs font-medium text-black mb-1">
                    <span>Pizza Truffe & Double Fromage</span>
                    <span className="font-mono font-bold">1,400 DZD</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>Mo Pizza Resto #01</span>
                    <span className="text-emerald-700 font-semibold">✓ 380ms TTFB on 4G</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-neutral-700">
                  <div className="flex items-center justify-between">
                    <span>Platform Commission:</span>
                    <span className="font-bold text-black">0% Toll (Kept in Full)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Logistics Pipeline:</span>
                    <span className="text-neutral-800">58 Wilayas COD Connected</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs font-mono text-emerald-900">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified via WhatsApp Webhook</span>
                </span>
                <span className="font-bold">&lt; 14s</span>
              </div>
            </div>
          </div>
        </div>

        {/* PILLAR 2: Growth & Customer Acquisition */}
        <div className="p-6 sm:p-12 md:p-16 rounded-3xl sm:rounded-[2.5rem] bg-[#050505] text-white">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 gap-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-white/15">
            {/* Left: 3 Capability Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-start">
              {t.home.pillars.pillarTwoServices.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-start"
                >
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-white tracking-tight mb-2 text-balance">
                      <span className="font-mono text-xs text-white/60 me-1.5">{item.num}. </span>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed text-pretty">
                      {item.desc}
                    </p>
                  </div>
                  {item.tags && (
                    <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 font-mono text-[11px] text-white/85 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Tangible Visual UI Artifact (Meta CAPI Telemetry Stream) */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#0c0c0e] border border-white/15 shadow-2xl flex flex-col justify-between gap-4 font-mono text-xs text-start">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-white/50">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span className="text-white/80 font-bold uppercase tracking-wider">Meta Server-Side CAPI</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">200 OK</span>
                </div>

                <div className="space-y-2 text-[11px] text-white/70 leading-relaxed">
                  <p className="text-white/40">// Real-time conversion event pipeline</p>
                  <p className="text-emerald-400">&gt; [00:00.12] EVENT: PurchaseInitiated · ID: #88921</p>
                  <p className="text-white/90">&gt; [00:00.35] HANDSHAKE: Attribution Match 9.9/10</p>
                  <p className="text-emerald-300">&gt; [00:00.68] BOT_QUALIFIED: Phone and location confirmed</p>
                  <p className="text-white/80">&gt; [00:01.05] DISPATCH: Pushed to client team in 14s</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span className="text-emerald-300 font-bold">ROAS Target: 4.8x</span>
                <span>Zero Cookie Loss</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED DEPLOYMENTS */}
      <section className="bg-white text-black py-28 md:py-44 border-t border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
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

      {/* 4. THE EXECUTIVE DELIVERY PROTOCOL (14-DAY ROADMAP) */}
      <section className="bg-[#050505] text-white py-28 md:py-44 px-4 sm:px-6 md:px-12 border-t border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white mb-4">
                <Clock className="w-3.5 h-3.5 text-white/80" />
                <span>{t.home.flow.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.04] text-white text-balance">
                {t.home.flow.headline}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-light max-w-sm leading-relaxed text-pretty text-start">
              {t.home.flow.subhead}
            </p>
          </div>

          {/* 4-Stage Milestone Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.flow.steps.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-3xl bg-[#0c0c0e] hover:bg-[#121215] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between gap-6 text-start group"
              >
                <div>
                  {/* Top Meta Strip */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-white/50">{item.phase}</span>
                    {item.timeline && (
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 font-mono text-[11px] font-semibold text-white">
                        {item.timeline}
                      </span>
                    )}
                  </div>

                  {/* Stage Title & Description */}
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mt-5 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Deliverable Chip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  {item.deliverable && (
                    <div className="flex items-center gap-1.5 text-white/90">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate max-w-[200px]">{item.deliverable}</span>
                    </div>
                  )}
                  <span className="text-white/40 font-mono text-[11px] ms-auto">{item.num}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-start">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  {locale === "fr" 
                    ? "Coût Forfaitaire Ferme — Zéro Dépassement" 
                    : locale === "ar" 
                    ? "تكلفة ثابتة معلنة — دون أي رسوم غير متوقعة" 
                    : "Guaranteed Fixed Pricing — Zero Hidden Overages"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  {locale === "fr" 
                    ? "Cession 100% Code & Domaines à Votre Nom" 
                    : locale === "ar" 
                    ? "ملكية كاملة 100% للشفرة والنطاقات باسمك" 
                    : "100% Code & Domain Ownership Transferred"}
                </span>
              </div>
            </div>

            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-mono font-semibold shrink-0 group"
            >
              <span>
                {locale === "fr" 
                  ? "Démarrer Votre Feuille de Route" 
                  : locale === "ar" 
                  ? "ابدأ خارطة طريق مشروعك" 
                  : "Launch Your Roadmap"}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* 5. SOVEREIGN PERFORMANCE GUARANTEE & MONEY-BACK RISK REVERSAL */}
      <SovereignGuarantee />

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <FAQ />

      {/* 6. CINEMATIC OUTRO & COLLABORATION GATEWAY */}
      <section className="relative w-full bg-[#050505] text-white py-36 sm:py-48 md:py-56 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
        {/* Architectural Ambient Depth Aura (Zero Video Dependency) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />

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
