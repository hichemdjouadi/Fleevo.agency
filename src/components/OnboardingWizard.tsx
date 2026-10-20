"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, RotateCcw, MessageCircle, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Magnetic from "@/components/Magnetic";

interface OnboardingWizardProps {
  className?: string;
  onComplete?: () => void;
}

export default function OnboardingWizard({ className = "", onComplete }: OnboardingWizardProps) {
  const { t, isRTL, locale } = useTranslation();
  const w = t.onboardingWizard;

  const [step, setStep] = useState<number>(1);
  const [selectedSystem, setSelectedSystem] = useState<{ id: string; title: string; desc: string } | null>(null);
  const [selectedBottleneck, setSelectedBottleneck] = useState<{ id: string; title: string; desc: string } | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<{ id: string; title: string; desc: string; badge: string; window: string } | null>(null);

  const handleSelectSystem = (opt: { id: string; title: string; desc: string }) => {
    setSelectedSystem(opt);
    setStep(2);
  };

  const handleSelectBottleneck = (opt: { id: string; title: string; desc: string }) => {
    setSelectedBottleneck(opt);
    setStep(3);
  };

  const handleSelectTimeline = (opt: { id: string; title: string; desc: string; badge: string; window: string }) => {
    setSelectedTimeline(opt);
    setStep(4);
    if (onComplete) onComplete();
  };

  const handleReset = () => {
    setSelectedSystem(null);
    setSelectedBottleneck(null);
    setSelectedTimeline(null);
    setStep(1);
  };

  // Build localized WhatsApp message
  const generateWhatsAppHref = () => {
    if (!selectedSystem || !selectedBottleneck || !selectedTimeline) return "https://wa.me/213655934124";
    const s4 = w.step4;
    const msg = 
      `${s4.waPrefix}\n\n` +
      `• ${s4.waSystemLabel}: ${selectedSystem.title}\n` +
      `• ${s4.waChallengeLabel}: ${selectedBottleneck.title}\n` +
      `• ${s4.waTimelineLabel}: ${selectedTimeline.title} (${selectedTimeline.window})\n\n` +
      `${s4.waClosing}`;
    return `https://wa.me/213655934124?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className={`w-full bg-[#fbfbfc] border border-black/10 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden text-start ${className}`}>
      
      {/* Top Header & Step Progress Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-wider">
            {w.badge}
          </span>
        </div>
        <div className="text-xs font-mono font-semibold text-black bg-white px-3 py-1 rounded-full border border-black/10 shadow-xs">
          {step <= 3 ? `${w.stepPrefix} ${step} ${w.stepOf}` : w.blueprintReady}
        </div>
      </div>

      {/* Progress Line */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? "bg-black" : "bg-black/10"}`} />
        <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? "bg-black" : "bg-black/10"}`} />
        <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? "bg-black" : "bg-black/10"}`} />
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: System Selection */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black leading-snug">
                {w.step1.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light mt-2">
                {w.step1.subhead}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {w.step1.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectSystem(opt)}
                  className="group p-5 rounded-2xl border border-black/10 bg-white hover:border-black hover:shadow-md transition-all text-start flex flex-col justify-between gap-3 active:scale-[0.99] cursor-pointer"
                >
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-black group-hover:text-black mb-1 flex items-center justify-between">
                      <span>{opt.title}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 2: Main Bottleneck */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black leading-snug">
                {w.step2.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light mt-2">
                {w.step2.subhead}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {w.step2.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectBottleneck(opt)}
                  className="w-full group p-4 sm:p-5 rounded-2xl border border-black/10 bg-white hover:border-black hover:shadow-md transition-all text-start flex items-center justify-between gap-4 active:scale-[0.99] cursor-pointer"
                >
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-black mb-0.5">
                      {opt.title}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-600 hover:text-black transition-colors"
              >
                {w.step2.backBtn}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Timeline & Scale */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black leading-snug">
                {w.step3.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light mt-2">
                {w.step3.subhead}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {w.step3.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectTimeline(opt)}
                  className="w-full group p-4 sm:p-5 rounded-2xl border border-black/10 bg-white hover:border-black hover:shadow-md transition-all text-start flex items-center justify-between gap-4 active:scale-[0.99] cursor-pointer"
                >
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-black mb-0.5">
                      {opt.title}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0">
                    {opt.badge}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-600 hover:text-black transition-colors"
              >
                {w.step3.backBtn}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: Blueprint Ready & WhatsApp Launch */}
        {step === 4 && selectedSystem && selectedBottleneck && selectedTimeline && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mb-3 border border-emerald-500/20">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
                {w.step4.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                {w.step4.subhead}
              </p>
            </div>

            {/* Blueprint Summary Card */}
            <div className="bg-white border border-black/15 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-black/10 pb-4 gap-3">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    {w.step4.cardSystemLabel}
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-black">
                    {selectedSystem.title}
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    {w.step4.cardWindowLabel}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-mono font-semibold">
                    {selectedTimeline.window}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                  {w.step4.cardChallengeLabel}
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                  {selectedBottleneck.title}
                </p>
              </div>

              <div className="pt-2 border-t border-black/10">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  {w.step4.cardDeliverablesLabel}
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 font-light">
                  {w.step4.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <Magnetic intensity={0.2}>
                <a
                  href={generateWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg group text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>{w.step4.whatsappBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </a>
              </Magnetic>

              <button
                type="button"
                onClick={handleReset}
                className="w-full text-center py-2 text-xs font-mono text-neutral-500 hover:text-black transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{w.step4.resetBtn}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
