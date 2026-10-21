"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";

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

          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-black/10 bg-[#f4f4f5]">
              <Image
                src="/founder-real.jpg"
                alt="Hichem Djouadi - Founder & Technical Lead at Fleevo"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-[#050505] text-white border border-white/15 font-mono text-xs">
                <div className="font-semibold text-white text-sm">{t.about.founder.founderName}</div>
                <div className="text-white/75 text-xs mt-0.5">{t.about.founder.founderRole}</div>
              </div>
            </div>
          </div>

          {/* Executive Statement Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono font-medium text-neutral-800 mb-4 w-fit">
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
                <span className="font-mono text-xs text-neutral-600 block mt-1">
                  {t.about.founder.founderRole} · Fleevo
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
                href="mailto:contact@fleevo.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white font-medium text-base sm:text-lg transition-all"
              >
                <span>contact@fleevo.net</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
