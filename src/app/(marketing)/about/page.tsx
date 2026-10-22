"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  ShoppingBag, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  ChevronRight 
} from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";

function StudioCapabilitiesCard({ scopeCard }: { scopeCard: any }) {
  const [activeId, setActiveId] = useState<string>(scopeCard?.items?.[0]?.id || "intake");

  const icons: Record<string, React.ElementType> = {
    intake: Globe,
    commerce: ShoppingBag,
    portals: Layers,
    growth: TrendingUp,
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden bg-[#070707] border border-black/15 shadow-2xl p-6 sm:p-8 text-white flex flex-col justify-between gap-6 transition-all duration-300">
      {/* Top Background Glow */}
      <div 
        className="absolute -top-24 -left-24 w-72 h-72 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase">{scopeCard.badge}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-white/75">
            {scopeCard.countBadge}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white text-balance">
          {scopeCard.headline}
        </h3>
      </div>

      {/* Interactive Capabilities Stack */}
      <div className="relative z-10 flex flex-col gap-2.5">
        {scopeCard.items.map((item: any) => {
          const isActive = activeId === item.id;
          const Icon = icons[item.id] || Sparkles;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`w-full text-start p-4 sm:p-4.5 rounded-2xl transition-all duration-300 border ${
                isActive
                  ? "bg-white/[0.08] border-white/20 shadow-md"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? "bg-white text-black" : "bg-white/5 text-white/60"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-white/40 me-2">{item.num}.</span>
                    <span className={`text-sm sm:text-base font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/80"
                    }`}>
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-white/40">
                  <ChevronRight className={`w-4 h-4 rtl:rotate-180 transition-transform duration-200 ${
                    isActive ? "rotate-90 rtl:-rotate-90 text-white" : ""
                  }`} />
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 text-start overflow-hidden"
                  >
                    <div className="text-[11px] font-mono text-white/55">
                      {item.sector}
                    </div>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      {item.output}
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-mono text-white/90 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>{item.tag}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Footer Studio Seal */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-[11px] font-mono text-white/50">
        <span className="truncate">{scopeCard.footerText}</span>
        <span className="shrink-0 text-white/30">FLEEVY</span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t, isRTL, locale } = useTranslation();

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">

      {/* 1. THE MANIFESTO HERO */}
      <section className="relative w-full pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 mb-6">
            <span>{t.nav.about.toUpperCase()}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-[-0.035em] leading-[1.02] text-black mb-8 text-balance">
            {t.about.hero.headlineStart}{" "}
            <span className="rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic font-light">{t.about.hero.headlineEnd}</span>
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-12 text-pretty">
            {t.about.hero.subhead}
          </p>

          {/* Credibility Hairline Ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-black/15 border-y border-black/15">
            <div className="py-6 sm:px-6 first:sm:ps-0 last:sm:pe-0 text-start">
              <div className="text-xl font-medium text-black">{t.about.hero.ledger.speedTitle}</div>
              <div className="text-sm text-neutral-600 mt-1">{t.about.hero.ledger.speedSub}</div>
            </div>
            <div className="py-6 sm:px-6 first:sm:ps-0 last:sm:pe-0 text-start">
              <div className="text-xl font-medium text-black">{t.about.hero.ledger.botTitle}</div>
              <div className="text-sm text-neutral-600 mt-1">{t.about.hero.ledger.botSub}</div>
            </div>
            <div className="py-6 sm:px-6 first:sm:ps-0 last:sm:pe-0 text-start">
              <div className="text-xl font-medium text-black">{t.about.hero.ledger.lockinTitle}</div>
              <div className="text-sm text-neutral-600 mt-1">{t.about.hero.ledger.lockinSub}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THREE ARCHITECTURAL STANDARDS */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15 text-start">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
              {t.about.standards.headline}
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-sm leading-relaxed text-pretty">
            {t.about.standards.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-black/15 border-y border-black/15">
          {t.about.standards.items.map((std) => (
            <div
              key={std.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:ps-0 last:lg:pe-0 flex flex-col justify-between gap-8 text-start"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-3 text-balance">
                  <span className="font-mono text-sm text-neutral-500 me-2">{std.num}. </span>
                  {std.title}
                </h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed text-pretty">
                  {std.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 flex items-center justify-between gap-2 text-xs font-mono">
                <span className="text-neutral-600">{std.benchmark}</span>
                <span className="px-3 py-1 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium">
                  {std.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FULL ENGINEERING STACK */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10 text-start">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.04] text-balance">
                {t.about.techStack.headline}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/75 font-light max-w-sm leading-relaxed text-pretty">
              {t.about.techStack.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-s border-white/15">
            {t.about.techStack.items.map((item) => (
              <div
                key={item.num}
                className="p-8 sm:p-10 border-e border-b border-white/15 flex flex-col justify-between gap-6 text-start"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 text-balance">
                    <span className="font-mono text-sm text-white/55 me-2">{item.num}. </span>
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed text-pretty">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE CREATIVE & TECHNICAL LEADERSHIP */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15 text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Studio Capabilities Column */}
          <div className="lg:col-span-5">
            <StudioCapabilitiesCard scopeCard={t.about.scopeCard} />
          </div>

          {/* Executive Statement Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs rtl:font-sans ltr:font-mono font-medium text-neutral-800 mb-4 w-fit">
              <span>{t.about.founder.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] mb-8 text-balance">
              {t.about.founder.headline}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-neutral-700 font-light leading-relaxed max-w-[58ch] text-pretty">
              {t.about.founder.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-3xl rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic text-black font-medium">
                  {t.about.founder.founderName}
                </div>
                <span className="rtl:font-sans ltr:font-mono text-xs text-neutral-600 block mt-1">
                  {t.about.founder.founderRole} · Fleevy
                </span>
              </div>

              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono font-semibold shrink-0"
              >
                <span>{t.about.bottomCta.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </TransitionLink>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUTRO COLLABORATION GATEWAY */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] mb-8 leading-[0.96] text-white text-balance">
            {t.about.bottomCta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-white/75 mb-12 max-w-lg mx-auto font-light leading-relaxed text-balance">
            {t.about.bottomCta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-200 transition-all group"
              >
                <span>{t.about.bottomCta.ctaBtn}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevy.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white font-medium text-base sm:text-lg transition-all"
              >
                <span>contact@fleevy.net</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
