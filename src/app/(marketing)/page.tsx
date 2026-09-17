"use client";

import { useEffect } from "react";
import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="bg-[#fafafa] text-black selection:bg-black selection:text-white">
      
      {/* Pristine Light-Mode Hero */}
      <section className="relative w-full flex flex-col items-center pt-32 pb-16 overflow-hidden bg-[#fafafa]">
        
        {/* Ultra-Clean Typography Layout exactly like reference */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-[1200px] mx-auto">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] text-[#050505] w-full"
          >
            Digital design & <br className="hidden md:block"/>
            development Agency
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[15px] text-black/60 font-medium max-w-[400px] leading-[1.6]"
          >
            We engineer autonomous systems for high-ticket service brands. Scale your revenue and buy back your time.
          </motion.p>
          
          {/* MASSIVE HERO VISUAL ANCHOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 w-full max-w-[1000px] aspect-video rounded-3xl md:rounded-[40px] shadow-2xl relative overflow-hidden bg-blue-600"
          >
             <HeroVisual />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-[1000px] flex justify-between items-start text-left mt-6 px-4"
          >
            <p className="text-[10px] md:text-xs text-black/60 max-w-[300px] uppercase font-bold tracking-widest leading-relaxed">
              We are a digital agency that builds high-conversion architecture. Ready to scale your brand.
            </p>
            <p className="text-[10px] md:text-xs text-black/60 uppercase font-bold tracking-widest hidden md:block">
              SCROLL TO EXPLORE
            </p>
          </motion.div>

        </div>
      </section>

      {/* Dark Block */}
      <div className="relative z-30 bg-[#050505] rounded-t-[40px] overflow-hidden pt-24 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Accordions matching the image */}
          <div className="flex flex-col gap-4">
            <div className="group relative rounded-3xl overflow-hidden bg-[#111111] p-10 cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-2">Digital product design</h3>
              <p className="text-white/60 text-sm md:text-base max-w-[400px]">Strategic UI/UX design tailored for enterprise conversion.</p>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden bg-[#111111] p-10 cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-2">Web & app development</h3>
              <p className="text-white/60 text-sm md:text-base max-w-[400px]">Next.js and Supabase infrastructure that runs autonomously.</p>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden bg-[#111111] p-10 cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-2">Brand identity</h3>
              <p className="text-white/60 text-sm md:text-base max-w-[400px]">Premium positioning and visual world-building for high-ticket offers.</p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-5xl font-medium text-white mb-12">Selected work</h2>
            <FeaturedWork />
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] pt-32 pb-32">
        <Testimonials />
        
        {/* Stats Grid matching image */}
        <div className="max-w-[1000px] mx-auto px-6 mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <span className="text-4xl font-medium text-black">15+</span>
              <span className="text-sm font-medium text-black/50 mt-1">Partners</span>
            </div>
            <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <span className="text-4xl font-medium text-black">40+</span>
              <span className="text-sm font-medium text-black/50 mt-1">Projects Launched</span>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <span className="text-4xl font-medium text-black">300+</span>
              <span className="text-sm font-medium text-black/50 mt-1">Million Generated</span>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <span className="text-4xl font-medium text-black">24/7</span>
              <span className="text-sm font-medium text-black/50 mt-1">Support</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}



