"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MessageCircle, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";

export default function ContactPage() {
  const { t, isRTL, locale } = useTranslation();

  const waPreFillMessage = {
    en: "Hi Hichem, I'd like to discuss an acquisition system for my business.",
    fr: "Bonjour Hichem, je souhaite échanger sur un système d'acquisition pour mon entreprise.",
    ar: "مرحباً هشام، أرغب في مناقشة بناء نظام اكتساب عملاء لمشروعي التجاري."
  }[locale];

  return (
    <main className="min-h-screen bg-white text-black pt-36 pb-0 selection:bg-black selection:text-white relative overflow-hidden flex flex-col justify-between text-start">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-28 relative z-10 w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>{t.contact.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.96] text-black text-balance">
            {t.contact.hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-2xl text-pretty">
            {t.contact.hero.subhead}
          </p>
        </div>

        {/* Dual-Channel Grid: Left Fast-Lane + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct WhatsApp Fast-Lane Card & Reassurance */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Fast-Lane WhatsApp Card */}
            <div className="rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.contact.fastLane.badge}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.contact.fastLane.responseBadge}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug mb-4 text-balance">
                  {t.contact.fastLane.headline}
                </h2>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8 text-pretty">
                  {t.contact.fastLane.body}
                </p>

                {/* Founder Info */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-8">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image 
                      src="/founder-real.jpg" 
                      alt={t.contact.fastLane.founderName} 
                      fill 
                      sizes="44px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.contact.fastLane.founderName}</div>
                    <div className="text-xs text-neutral-400 font-mono">{t.contact.fastLane.founderRole}</div>
                  </div>
                </div>
              </div>

              <Magnetic intensity={0.2}>
                <a
                  href={`https://wa.me/213655934124?text=${encodeURIComponent(waPreFillMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-lg group"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>{t.contact.fastLane.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </a>
              </Magnetic>
            </div>

            {/* Card 2: Reassurance Pillars */}
            <div className="rounded-[2.5rem] bg-neutral-50 border border-black/10 p-8 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.contact.reassurance.noSalesReps}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.contact.reassurance.fixedProposal}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.contact.reassurance.confidential}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Intake Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
