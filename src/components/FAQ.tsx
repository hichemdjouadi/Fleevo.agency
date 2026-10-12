"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What makes Fleevo different from a typical web agency?",
    answer: "Most agencies build slow templates that look like everyone else and take three months to deliver. We build custom, sub-second mobile platforms that send orders and qualified inquiries straight to your WhatsApp in seconds. Custom code, delivered in 14 days."
  },
  {
    question: "How does the 50/50 milestone guarantee work?",
    answer: "You pay a 50% deposit to initiate custom design and engineering. You only pay the remaining 50% after you test and approve the live working platform on your own smartphone before public launch. Zero surprise invoices."
  },
  {
    question: "How long does it take from start to launch?",
    answer: "A standard platform launch takes 10 to 14 days. This includes custom mobile design, catalog configuration, WhatsApp order integration, and testing on local 4G connections."
  },
  {
    question: "Do I need technical skills to manage my platform?",
    answer: "None. When a customer orders or books an appointment, a complete formatted ticket lands directly in your WhatsApp or phone. You manage your business the same way you already do every day."
  },
  {
    question: "What happens on the 15-minute call?",
    answer: "We review your business, understand what products or services you sell, and show you the exact mobile layout and WhatsApp flow that will work best for your buyers. Honest advice, zero pressure, and a fixed quote in 24 hours."
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
            Clear answers about our 14-day turnaround, WhatsApp integration, and the 50/50 guarantee.
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
