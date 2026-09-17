"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const cards = [
    { text: "The architectural shift they brought to our clinic doubled our high-ticket consultations.", author: "Dr. Sarah Chen", bg: "bg-emerald-50" },
    { text: "Fleevo rebuilt our entire booking infrastructure. We went from manual chaos to a fully automated engine.", author: "Marcus Thorne", bg: "bg-indigo-50" },
    { text: "Our conversion rate was stuck for months. After they deployed the new frontend architecture, we saw a 142% uplift.", author: "Elena Rodriguez", bg: "bg-blue-50" },
    { text: "The fastest execution we have ever seen. They built our entire digital product in less than 30 days.", author: "David Kim", bg: "bg-orange-50" }
  ];

  return (
    <section className="bg-[#fafafa] flex flex-col items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#050505] mb-24 text-center">
          Trusted by our clients
        </h2>

        {/* The Overlapping Square Pastel Cards */}
        <div className="relative w-full max-w-[800px] h-[400px] md:h-[400px] flex items-center justify-center">
          
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -15, x: -180, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`absolute w-[240px] h-[240px] p-6 ${cards[0].bg} shadow-lg z-10 flex flex-col justify-between`}
          >
            <p className="text-sm text-black/80 font-medium leading-relaxed">"{cards[0].text}"</p>
            <p className="font-bold text-black text-sm">{cards[0].author}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -5, x: -60, y: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`absolute w-[240px] h-[240px] p-6 ${cards[1].bg} shadow-xl z-20 flex flex-col justify-between`}
          >
            <p className="text-sm text-black/80 font-medium leading-relaxed">"{cards[1].text}"</p>
            <p className="font-bold text-black text-sm">{cards[1].author}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 5, x: 60, y: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute w-[240px] h-[240px] p-6 ${cards[2].bg} shadow-xl z-30 flex flex-col justify-between`}
          >
            <p className="text-sm text-black/80 font-medium leading-relaxed">"{cards[2].text}"</p>
            <p className="font-bold text-black text-sm">{cards[2].author}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 15, x: 180, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`absolute w-[240px] h-[240px] p-6 ${cards[3].bg} shadow-lg z-40 flex flex-col justify-between`}
          >
            <p className="text-sm text-black/80 font-medium leading-relaxed">"{cards[3].text}"</p>
            <p className="font-bold text-black text-sm">{cards[3].author}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

