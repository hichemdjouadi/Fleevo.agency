"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const cards = [
    {
      text: "The architectural shift they brought to our clinic doubled our high-ticket consultations. The autonomous systems they build are fundamentally different from standard websites.",
      author: "Dr. Sarah Chen",
      role: "Founder, Nexus Dental",
      bg: "bg-[#e8f5e9]" // Mint-ish
    },
    {
      text: "Fleevo rebuilt our entire booking infrastructure. We went from manual WhatsApp chaos to a fully automated reservation engine that fills tables without us lifting a finger.",
      author: "Marcus Thorne",
      role: "Director, Oasis Resorts",
      bg: "bg-[#e3f2fd]" // Powder blue
    },
    {
      text: "Our conversion rate was stuck for months. After they deployed the new frontend architecture, we saw a 142% uplift in premium service sales within three weeks.",
      author: "Elena Rodriguez",
      role: "CEO, Vertex Commerce",
      bg: "bg-[#f3e5f5]" // Lavender
    }
  ];

  return (
    <section className="bg-studio-light py-32 px-6 rounded-t-[4rem] relative z-30 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tighter text-black mb-24 text-center"
        >
          Trusted by our clients
        </motion.h2>

        {/* The Overlapping Pastel Cards */}
        <div className="relative w-full max-w-[900px] h-[500px] md:h-[400px] flex items-center justify-center">
          
          {/* Back Card Left */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: -120, rotate: -6 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute w-[300px] md:w-[350px] p-8 rounded-3xl ${cards[1].bg} shadow-xl z-10 border border-black/5`}
          >
            <p className="text-sm md:text-base text-black/80 font-medium leading-relaxed mb-6">"{cards[1].text}"</p>
            <div>
              <p className="font-bold text-black">{cards[1].author}</p>
              <p className="text-xs text-black/60 uppercase tracking-widest">{cards[1].role}</p>
            </div>
          </motion.div>

          {/* Back Card Right */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 120, rotate: 6 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute w-[300px] md:w-[350px] p-8 rounded-3xl ${cards[2].bg} shadow-xl z-10 border border-black/5`}
          >
            <p className="text-sm md:text-base text-black/80 font-medium leading-relaxed mb-6">"{cards[2].text}"</p>
            <div>
              <p className="font-bold text-black">{cards[2].author}</p>
              <p className="text-xs text-black/60 uppercase tracking-widest">{cards[2].role}</p>
            </div>
          </motion.div>

          {/* Center Front Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute w-[320px] md:w-[400px] p-10 rounded-3xl ${cards[0].bg} shadow-2xl z-20 border border-black/5`}
          >
            <p className="text-base md:text-lg text-black font-medium leading-relaxed mb-8">"{cards[0].text}"</p>
            <div>
              <p className="font-bold text-black">{cards[0].author}</p>
              <p className="text-xs text-black/60 uppercase tracking-widest">{cards[0].role}</p>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid below the testimonials (similar to the image) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
           <div className="bg-[#f0f9ff] p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
              <span className="text-3xl font-bold text-black mb-2">10+</span>
              <span className="text-xs text-black/50 uppercase tracking-widest">Industry Awards</span>
           </div>
           <div className="bg-[#f5f3ff] p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
              <span className="text-3xl font-bold text-black mb-2">900+</span>
              <span className="text-xs text-black/50 uppercase tracking-widest">Leads Generated</span>
           </div>
           <div className="bg-[#fffbeb] p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
              <span className="text-3xl font-bold text-black mb-2">14M</span>
              <span className="text-xs text-black/50 uppercase tracking-widest">Revenue Captured</span>
           </div>
           <div className="bg-[#f1f5f9] p-8 rounded-2xl border border-black/5 flex flex-col justify-between">
              <span className="text-3xl font-bold text-black mb-2">24/7</span>
              <span className="text-xs text-black/50 uppercase tracking-widest">Autonomous Uptime</span>
           </div>
        </div>

      </div>
    </section>
  );
}

