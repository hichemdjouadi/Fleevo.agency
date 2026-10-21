"use client";

import OnboardingWizard from "@/components/OnboardingWizard";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function StartPage() {
  const { t, isRTL } = useTranslation();

  const titleByLocale = {
    en: "Configure your acquisition system.",
    fr: "Configurez votre système d'acquisition.",
    ar: "صمّم بنية اكتساب العملاء المناسبة لمشروعك.",
  }[t.locale];

  const subheadByLocale = {
    en: "Tap through three structured questions to generate a tailored technical scope blueprint and connect directly with Hichem on WhatsApp.",
    fr: "Répondez à trois questions pour générer un plan technique sur mesure et échanger directement avec Hichem sur WhatsApp.",
    ar: "أجب عن ثلاثة أسئلة سريعة لاستخراج المخطط الفني الملائم لنموذج عملك، ثم ابدأ محادثة مباشرة مع هشام عبر واتساب.",
  }[t.locale];

  return (
    <main className="min-h-screen bg-white text-black pt-36 pb-0 selection:bg-black selection:text-white relative overflow-hidden flex flex-col justify-between text-start">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800 font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>SYSTEM CONFIGURATOR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.02] text-black text-balance">
            {titleByLocale}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed text-pretty">
            {subheadByLocale}
          </p>
        </div>

        {/* Wizard Container */}
        <div className="w-full">
          <OnboardingWizard />
        </div>

        {/* Outro Reassurance Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-black/10 text-xs font-mono text-neutral-600 text-center sm:text-start">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.contact.reassurance.noSalesReps}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.contact.reassurance.fixedProposal}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.contact.reassurance.confidential}</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
