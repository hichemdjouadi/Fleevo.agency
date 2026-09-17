"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import FeaturedWork from "@/components/FeaturedWork";

export default function Work() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden pt-40 md:pt-56 flex flex-col">
      <div className="flex-1 max-w-[1600px] mx-auto px-6 md:px-16 mb-24 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-6 block">Live Infrastructure</span>
          <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none mb-8">
            Proof of Concept.
          </h1>
          <p className="text-2xl md:text-3xl text-white/60 max-w-3xl font-light leading-relaxed tracking-tight">
            We don't build portfolios. We deploy autonomous profit engines. Explore the live architectures currently scaling operations across the MENA region.
          </p>
        </motion.div>

      </div>
      
      {/* Reusing the highly technical 3D Glass Cards component */}
      <div className="border-y border-white/10">
        <FeaturedWork />
      </div>

      <div className="py-32" />
      <Footer />
    </main>
  );
}
