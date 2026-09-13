"use client";

import { motion } from "framer-motion";

export default function Metrics() {
  return (
    <section className="bg-white text-black py-32 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col mb-24">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 block mb-6">By The Numbers</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
            Proof of infrastructure.
          </h2>
          <p className="mt-6 text-xl text-black/60 font-light max-w-3xl">
            We do not build generic landing pages. We engineer autonomous conversion vehicles designed to dominate specific markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 md:py-16 md:pr-12 md:border-r border-b md:border-b-0 border-black/10"
          >
            <h3 className="text-[12vw] md:text-[6vw] font-medium tracking-tighter leading-[0.8] mb-8">
              4.2<span className="text-[6vw] md:text-[3vw] text-black/30">x</span>
            </h3>
            <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
              Average increase in qualified lead volume within 90 days of deploying our custom architecture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 md:py-16 md:px-12 md:border-r border-b md:border-b-0 border-black/10"
          >
            <h3 className="text-[12vw] md:text-[6vw] font-medium tracking-tighter leading-[0.8] mb-8">
              &lt;1<span className="text-[6vw] md:text-[3vw] text-black/30">s</span>
            </h3>
            <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
              Routing latency. High-ticket leads are qualified and delivered to your CRM or WhatsApp instantly.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 md:py-16 md:pl-12"
          >
            <h3 className="text-[12vw] md:text-[6vw] font-medium tracking-tighter leading-[0.8] mb-8">
              99<span className="text-[6vw] md:text-[3vw] text-black/30">%</span>
            </h3>
            <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
              Reduction in manual data entry. The system autonomously handles intake, categorization, and tracking.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
