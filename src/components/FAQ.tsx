"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full text-start">
      <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-[#0b0b0c] mb-5">
        {t.home.faq.title}
      </h2>

      <div className="border-t border-black/[0.1] divide-y divide-black/[0.1]">
        {t.home.faq.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx}>
              <button
                type="button"
                id={`faq-btn-${idx}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full min-h-[54px] py-4 flex items-center justify-between gap-4 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
              >
                <span className="text-base sm:text-[17px] font-semibold text-[#0b0b0c] leading-snug">
                  {item.question}
                </span>
                <span className="w-7 h-7 rounded-full bg-[#f4f4f6] flex items-center justify-center shrink-0 text-[#0b0b0c]">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="pb-4 pe-8"
                >
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
