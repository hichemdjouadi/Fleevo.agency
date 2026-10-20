"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function FAQ() {
  const { t, isRTL } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
        
        <div className="w-full md:w-1/3 md:sticky md:top-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 text-black text-balance">
            {t.faq.title}
          </h2>
          <p className="text-base md:text-lg text-black/70 font-light leading-relaxed text-pretty">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col border-t border-black/10">
          {t.faq.items.map((faq, index) => (
            <div key={index} className="border-b border-black/10">
              <button
                id={`faq-btn-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 sm:py-8 flex justify-between items-center text-start group focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none rounded-lg px-2 -mx-2"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight group-hover:text-black transition-colors text-black pe-4">
                  {faq.question}
                </span>
                <span className="ms-4 shrink-0 text-black/40 group-hover:text-black transition-colors">
                  {openIndex === index ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-base md:text-lg text-black/70 font-light leading-relaxed max-w-2xl px-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
