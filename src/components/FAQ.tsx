"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What makes Fleevy different from a traditional agency?",
    answer: "Most agencies build decorative websites that fail to generate revenue. We engineer customer acquisition systems: custom high-speed web platforms wired directly with automated bot intake, targeted Meta ads, and acquisition audits to convert traffic into clients."
  },
  {
    question: "How does automated bot intake work in practice?",
    answer: "When prospective clients or buyers request an appointment or place an order, our automated WhatsApp or Telegram bot captures their details, pre-qualifies their requirements, and dispatches the verified lead directly to your team in under 30 seconds."
  },
  {
    question: "Do we own all codebase assets and customer data?",
    answer: "Yes, 100%. You own your codebase, database architecture, and custom domain with zero recurring platform take-rates or proprietary software locks."
  },
  {
    question: "What is the typical engineering timeline?",
    answer: "Core acquisition platform deployments typically complete in two to four weeks depending on architectural scope, followed by bot intake verification, courier sync, and launch testing."
  },
  {
    question: "What is covered in our initial strategic consultation?",
    answer: "We examine your current customer acquisition flow, diagnose pipeline friction, and map out the exact digital infrastructure required to convert attention into verified revenue."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="w-full md:w-1/3 md:sticky md:top-32">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-black/70 font-light leading-relaxed">
            Direct answers on our acquisition architecture, bot intake workflows, and engineering methodology.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col border-t border-black/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/10">
              <button
                id={`faq-btn-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none rounded-lg px-2 -mx-2"
              >
                <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-black transition-colors text-black pr-4">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-black/40 group-hover:text-black transition-colors">
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
