"use client";

import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

export default function PackagesSection() {
  const { t } = useTranslation();
  const p = t.home.packages;

  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 text-start">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.06] text-[#0b0b0c] text-balance max-w-xl">
          {p.headline}
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed text-pretty">
          {p.subhead}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        {p.cards.map((card) => {
          const isFeatured = Boolean(card.featured);
          return (
            <div
              key={card.id}
              className={`rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between gap-8 border ${
                isFeatured
                  ? "bg-[#0b0b0c] text-white border-[#0b0b0c]"
                  : "bg-[#f4f4f6] text-[#0b0b0c] border-black/[0.06]"
              }`}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                  {card.title}
                </h3>

                <div className="mb-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      isFeatured
                        ? "bg-white text-[#0b0b0c]"
                        : "bg-white text-[#0b0b0c] border border-black/[0.08]"
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isFeatured ? "text-white/80" : "text-neutral-600"
                  }`}
                >
                  {card.desc}
                </p>

                <ul className="space-y-2.5">
                  {card.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2.5 text-sm leading-snug ${
                        isFeatured ? "text-white/90" : "text-neutral-800"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? "text-white" : "text-[#0b0b0c]"
                        }`}
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`pt-5 border-t flex items-center justify-between gap-3 ${
                  isFeatured ? "border-white/15" : "border-black/[0.08]"
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    isFeatured ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {t.common.customScopeLabel}
                </span>
                <TransitionLink
                  href={`/contact?service=${encodeURIComponent(card.serviceParam)}`}
                  className={`min-h-[42px] inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    isFeatured
                      ? "bg-white text-[#0b0b0c] hover:bg-neutral-200"
                      : "bg-[#0b0b0c] text-white hover:bg-neutral-800"
                  }`}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
                </TransitionLink>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sign-Off Standard Note */}
      <div className="mt-6 rounded-[20px] border border-black/[0.08] bg-white px-5 sm:px-7 py-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
        {p.guaranteeLine}
      </div>
    </section>
  );
}
