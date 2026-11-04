"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldAlert, 
  TrendingDown, 
  TrendingUp,
  Cpu,
  Layers,
  Clock
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

export default function AnatomyOfTheLeak() {
  const { t, isRTL } = useTranslation();
  const diagnostic = t.home.leakDiagnostic;

  const [activeMode, setActiveMode] = useState<"traditional" | "fleevy">("traditional");

  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto text-start border-t border-black/10">
      {/* 1. Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 text-xs font-mono font-semibold mb-3 sm:mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{diagnostic.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
            {diagnostic.headline}
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
          {diagnostic.subhead}
        </p>
      </div>

      {/* 2. Interactive Toggle Bar */}
      <div className="flex justify-center mb-10 sm:mb-14">
        <div className="p-1 sm:p-1.5 bg-neutral-100 rounded-full border border-neutral-200/80 inline-flex items-center gap-1 shadow-sm w-full max-w-xl">
          <button
            type="button"
            onClick={() => setActiveMode("traditional")}
            className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
              activeMode === "traditional"
                ? "bg-neutral-900 text-white shadow-md"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            <TrendingDown className={`w-4 h-4 ${activeMode === "traditional" ? "text-red-400" : "text-neutral-400"}`} />
            <span className="truncate">{diagnostic.traditionalTab}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("fleevy")}
            className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
              activeMode === "fleevy"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            <TrendingUp className={`w-4 h-4 ${activeMode === "fleevy" ? "text-emerald-200" : "text-neutral-400"}`} />
            <span className="truncate">{diagnostic.fleevyTab}</span>
          </button>
        </div>
      </div>

      {/* 3. 4-Stage Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {diagnostic.stages.map((stage) => {
          const isTraditional = activeMode === "traditional";
          const data = isTraditional ? stage.traditional : stage.fleevy;

          return (
            <motion.div
              key={stage.id}
              layout
              transition={{ duration: 0.3 }}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between gap-6 transition-all ${
                isTraditional 
                  ? "bg-red-50/40 border-red-200/80 text-black" 
                  : "bg-emerald-50/40 border-emerald-200/80 text-black shadow-sm"
              }`}
            >
              <div>
                {/* Stage Number & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-neutral-500 font-semibold">
                    STAGE {stage.num}
                  </span>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                    isTraditional 
                      ? "bg-red-100 text-red-800 border-red-200" 
                      : "bg-emerald-100 text-emerald-800 border-emerald-200"
                  }`}>
                    {data.badge}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  {stage.title}
                </span>

                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-black mb-3 text-balance leading-snug">
                  {data.headline}
                </h3>

                <p className="text-sm text-neutral-700 font-light leading-relaxed text-pretty">
                  {data.desc}
                </p>
              </div>

              {/* Impact Metric Strip */}
              <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono font-semibold ${
                isTraditional 
                  ? "border-red-200/60 text-red-800" 
                  : "border-emerald-200/60 text-emerald-800"
              }`}>
                <span>{isTraditional ? "Loss Metric:" : "Capture Metric:"}</span>
                <span className="text-sm font-bold">{data.metric}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Bottom-Line Verdict Strip */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 font-semibold mb-2 sm:mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>THE ARCHITECTURAL VERDICT</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2 text-balance">
            {diagnostic.bottomNotice.headline}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed text-pretty">
            {diagnostic.bottomNotice.desc}
          </p>
        </div>

        <TransitionLink
          href="/contact"
          className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-md"
        >
          <span>{diagnostic.bottomNotice.cta}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </TransitionLink>
      </div>
    </section>
  );
}
