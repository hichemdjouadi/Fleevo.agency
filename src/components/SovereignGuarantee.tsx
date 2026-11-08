"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Check, ArrowRight, MessageCircle, Zap, Clock, Lock, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

export default function SovereignGuarantee() {
  const { t, isRTL, locale } = useTranslation();
  const g = t.home.guarantee;

  const pillarIcons = [
    <Zap key="speed" className="w-4 h-4 text-emerald-400" />,
    <Clock key="triage" className="w-4 h-4 text-emerald-400" />,
    <ShieldCheck key="comm" className="w-4 h-4 text-emerald-400" />,
    <Lock key="code" className="w-4 h-4 text-emerald-400" />
  ];

  return (
    <section className="bg-[#050505] text-white py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Strip */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 text-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{g.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.04] text-balance">
              {g.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-md leading-relaxed text-pretty">
            {g.subhead}
          </p>
        </div>

        {/* 4 Pillars Outcome Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {g.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0b0b0e] hover:bg-[#101014] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between gap-6 text-start group shadow-lg"
            >
              <div>
                {/* Metric Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    {pillarIcons[idx] || <Check className="w-4 h-4 text-emerald-400" />}
                    <span className="text-white/40">SLA // 0{idx + 1}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs font-bold text-emerald-300">
                    {pillar.metric}
                  </span>
                </div>

                {/* Outcome Title */}
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mt-5 mb-2.5">
                  {pillar.label}
                </h3>

                {/* Outcome Description */}
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Verification Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400/90">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    {locale === "ar" ? "معيار ملزم تعاقدياً" : locale === "fr" ? "Critère Contractuel" : "Contractual SLA"}
                  </span>
                </span>
                <span className="text-white/30 text-[11px]">100% SLA</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The 100% Money-Back Pledge Box */}
        <div className="mt-12 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#121217] to-[#0a0a0d] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-start">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{g.pledgeTitle}</span>
              </div>
              <p className="text-base sm:text-xl text-white font-medium leading-relaxed mb-4 text-pretty">
                {g.pledgeText}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{g.founderSignature}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/contact"
                  className="min-h-[48px] px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold shadow-lg inline-flex items-center justify-center gap-2 text-center"
                >
                  <span>{g.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
                </TransitionLink>
              </Magnetic>

              <Magnetic intensity={0.2}>
                <a
                  href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'm%20asking%20about%20the%20100%25%20Money-Back%20Performance%20Guarantee%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-colors text-xs sm:text-sm font-medium inline-flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{g.directDeskBtn}</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
