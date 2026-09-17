"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What separates Fleevo from standard web design agencies?",
    answer: "Most agencies build static brochures. We build digital ecosystems. We combine stunning, award-winning front-end design with battle-tested backend architecture (PostgreSQL, Supabase) to create systems that actively generate and route revenue."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with established B2B firms and ambitious startups. Our architecture is designed to scale from 100 to 1,000,000 users without breaking. We frequently help early-stage companies look and operate like enterprise market leaders."
  },
  {
    question: "How do the autonomous lead engines actually work?",
    answer: "We replace standard contact forms with intelligent, progressive intake systems. When a user interacts, the system qualifies them in real-time, stores their data in a secure PostgreSQL database, and instantly routes high-value prospects directly to your sales team via webhook (e.g., WhatsApp, Slack, or your CRM)."
  },
  {
    question: "How much does a full deployment cost?",
    answer: "We do not offer cheap templates. We build bespoke digital infrastructure. Because every business requires different integrations and database architectures, we price based on the scope of the ecosystem required. Submit an audit request to receive a precise technical proposal."
  },
  {
    question: "What is your tech stack?",
    answer: "We strictly use modern, enterprise-grade tooling. Our frontend infrastructure is built on React, Next.js, and Framer Motion for cinematic physics. Our backend engines rely on PostgreSQL, Supabase, and custom serverless endpoints to ensure latency stays under 100ms."
  },
  {
    question: "How long does it take to launch a system?",
    answer: "A standard autonomous engine takes between 4 to 8 weeks from the initial architecture blueprint to full deployment. Complex builds involving multiple third-party API integrations (Stripe, Twilio, Salesforce) may extend the timeline."
  },
  {
    question: "Do you handle hosting and maintenance?",
    answer: "Yes. Every system we build is deployed on global edge networks (Vercel/AWS) for maximum uptime. We offer continuous infrastructure management retainers to ensure your database and webhooks scale flawlessly as your lead volume increases."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="w-full md:w-1/3 sticky top-32">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 block mb-4">Briefing</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Common inquiries.</h2>
          <p className="text-lg text-white/60 font-light">
            Everything you need to know about our methodology, infrastructure, and deployment timelines.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col border-t border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white/80 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-8 flex-shrink-0 text-white/60 group-hover:text-white transition-colors">
                  {openIndex === index ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-xl text-white/70 font-light leading-relaxed max-w-2xl">
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
