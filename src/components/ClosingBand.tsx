"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

interface ClosingBandProps {
  headline?: string;
  note?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export default function ClosingBand({
  headline,
  note,
  primaryHref = "/contact",
  primaryLabel,
}: ClosingBandProps) {
  const { t } = useTranslation();
  const c = t.home.closeBand;

  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(
    t.contact.whatsappCard.prefillMessage
  )}`;

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 pb-12 md:pb-16">
      <div className="rounded-[28px] sm:rounded-[40px] bg-[#0B0B0C] text-white p-7 sm:p-12 md:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-start">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-[-0.035em] leading-[1.04] text-white text-balance">
            {headline ?? c.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-lg text-pretty">
            {note ?? c.note}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
          <TransitionLink
            href={primaryHref}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 rounded-full bg-white text-[#0B0B0C] text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            <span>{primaryLabel ?? c.primaryBtn}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
          </TransitionLink>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-7 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            {c.whatsappBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
