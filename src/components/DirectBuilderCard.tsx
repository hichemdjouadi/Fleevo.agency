"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function DirectBuilderCard() {
  const { t } = useTranslation();
  const b = t.home.builder;

  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(
    t.contact.whatsappCard.prefillMessage
  )}`;

  return (
    <div className="rounded-[24px] sm:rounded-[28px] bg-[#f4f4f6] border border-black/[0.06] p-6 sm:p-9 flex flex-col justify-between gap-7 text-start h-full">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="text-xs font-semibold text-neutral-600">
          {b.badge}
        </span>
        <span className="px-3 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-[#0b0b0c]">
          {b.tag}
        </span>
      </div>

      <blockquote className="text-lg sm:text-2xl font-medium tracking-[-0.02em] leading-[1.35] text-[#0b0b0c] text-pretty">
        &ldquo;{b.quote}&rdquo;
      </blockquote>

      <div className="pt-5 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-base font-semibold text-[#0b0b0c]">{b.name}</div>
          <div className="text-xs sm:text-sm text-neutral-600">{b.role}</div>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0b0c] text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors shrink-0"
        >
          <span>{b.cta}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
        </a>
      </div>
    </div>
  );
}
