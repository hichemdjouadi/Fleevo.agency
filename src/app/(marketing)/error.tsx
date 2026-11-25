"use client";

import { useEffect } from "react";
import { RotateCcw, ArrowRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { useTranslation } from "@/lib/i18n";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t, isRTL } = useTranslation();

  useEffect(() => {
    console.error("Unhandled marketing route error:", error);
  }, [error]);

  return (
    <main className="min-h-[82vh] flex items-center justify-center bg-white text-[#0B0B0C] px-6 py-24">
      <div className="max-w-xl w-full rounded-[28px] bg-[#F4F4F6] border border-black/[0.08] p-8 sm:p-12 text-start">
        <span className="inline-flex items-center justify-center rounded-full bg-white border border-black/[0.08] px-3.5 py-1.5 text-xs font-semibold text-[#0B0B0C] mb-6">
          500
        </span>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#0B0B0C] mb-4">
          {t.error.title}
        </h1>

        <p className="text-base sm:text-lg text-[#4B4D52] leading-relaxed mb-8">
          {t.error.message}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0B0C] text-white px-7 min-h-[48px] text-sm font-semibold transition-colors hover:bg-[#1E1F23] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>{t.error.retry}</span>
          </button>

          <TransitionLink
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0B0B0C] border border-black/[0.12] px-7 min-h-[48px] text-sm font-semibold transition-colors hover:border-black/30"
          >
            <span>{t.error.home}</span>
            <ArrowRight
              className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </TransitionLink>
        </div>
      </div>
    </main>
  );
}
