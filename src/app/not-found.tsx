"use client";

import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { useTranslation } from "@/lib/i18n";

export default function NotFound() {
  const { t, isRTL } = useTranslation();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-[#0B0B0C] px-6 py-24">
      <div className="max-w-2xl w-full rounded-[32px] bg-[#F4F4F6] border border-black/[0.08] p-8 sm:p-14 text-start">
        <p
          aria-hidden="true"
          className="text-6xl sm:text-8xl font-semibold tracking-[-0.04em] leading-none text-[#0B0B0C]/15 mb-6 select-none"
        >
          404
        </p>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#0B0B0C] mb-4">
          {t.notFound.title}
        </h1>

        <p className="text-base sm:text-lg text-[#4B4D52] leading-relaxed mb-9 max-w-lg">
          {t.notFound.message}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <TransitionLink
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0B0C] text-white px-7 min-h-[48px] text-sm font-semibold transition-colors hover:bg-[#1E1F23]"
          >
            <span>{t.notFound.home}</span>
            <ArrowRight
              className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </TransitionLink>

          <TransitionLink
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0B0B0C] border border-black/[0.12] px-7 min-h-[48px] text-sm font-semibold transition-colors hover:border-black/30"
          >
            {t.notFound.services}
          </TransitionLink>
        </div>
      </div>
    </main>
  );
}
