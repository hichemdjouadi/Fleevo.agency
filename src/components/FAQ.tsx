"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What makes Fleevo different from a typical web agency?",
    answer: "Most agencies build static digital brochures that dump form submissions into an unmonitored inbox. We build high-converting frontends wired directly into real-time sales pipelines. Your platform screens out unqualified tire-kickers, verifies contact details, and routes serious prospects straight to your team within 60 seconds."
  },
  {
    question: "Who are your systems built for?",
    answer: "We specialize in two core profiles: high-ticket service operators (medical clinics, consulting, advisory, B2B firms) who need to protect their calendar from bad leads; and high-yield transactional businesses (restaurants, retail, specialized commerce) that require sub-second mobile speed and frictionless order capture."
  },
  {
    question: "What does the tech stack look like?",
    answer: "We build on modern edge architecture: Next.js for fast mobile rendering, Tailwind CSS for custom responsive typography and layout, and Supabase for secure data storage. Everything integrates directly with your WhatsApp, phone, or email notifications."
  },
  {
    question: "How long does a deployment take?",
    answer: "A standard deployment runs between 2 to 4 weeks from initial blueprint to live launch. This includes full custom interface design, edge frontend development, database schema configuration, and automated pipeline testing."
  },
  {
    question: "What happens during the 15-minute pipeline teardown?",
    answer: "We review your current frontend and intake flow, pinpoint exactly where you are dropping qualified prospects or losing sales momentum, and present the specific architecture needed to fix it. No pressure, no generic sales pitch."
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
          <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
            Everything you need to know about our engineering standards, deployment timelines, and integration process.
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
                <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-black transition-colors text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-neutral-400 group-hover:text-black transition-colors">
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
                    <p className="pb-8 text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl px-2">
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
