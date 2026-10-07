"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import Testimonials from "@/components/Testimonials";
import Bottlenecks from "@/components/Bottlenecks";
import Methodology from "@/components/Methodology";
import ValueProps from "@/components/ValueProps";

import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="bg-[#fff] text-black selection:bg-black selection:text-white">
      
      {/* Pristine Light-Mode Hero */}
      <section className="relative w-full flex flex-col items-center pt-32 md:pt-56 pb-24 overflow-hidden bg-[#fff]">
        {/* Subtle Vercel-style background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] transform-gpu"></div>
        
        <div className="relative z-20 flex flex-col items-start md:items-center justify-start text-left md:text-center px-6 md:px-8 w-full max-w-[1400px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[110px] font-semibold tracking-tighter leading-[0.95] text-[#050505] w-full"
          >
            Marketing & software <br className="hidden md:block"/>
            growth agency.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12 text-lg md:text-[24px] text-black/90 font-semibold max-w-[700px] leading-[1.4]">
            We design, build, and deploy the operational frameworks that scale high-ticket brands and eliminate revenue bleed.
          </motion.p>
          

          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 w-full max-w-[1500px] h-[60vh] md:h-[80vh] rounded-[40px] shadow-2xl relative overflow-hidden bg-[#050505]"
          >
             <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 w-full max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-medium tracking-tight text-black/50 uppercase">The Reality</h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] text-black">
            Most agencies sell aesthetics. We build operational infrastructure. You get a frontend that positions you as the premium option, and a backend that converts attention into cash.
          </p>
        </div>
      </section>

      <div className="relative z-30 bg-[#050505] rounded-[32px] overflow-hidden pt-24 pb-32 px-6 mx-4 md:mx-8 my-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-16 text-left tracking-tight">Proof of Work</h2>
          <FeaturedWork />
          <div className="mt-24 flex justify-center">
             <TransitionLink href="/work" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-lg font-medium z-50">
               View all projects
             </TransitionLink>
          </div>
        </div>
      </div>

      <ValueProps />

      <Methodology />
      
      <Bottlenecks />

      <Testimonials />

      <FAQ />


      {/* Cinematic Outro */}
      <section className="relative w-full text-white py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark gradient overlay so text is super readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[80px] font-medium tracking-tighter leading-[0.9] mb-6"
          >
            Stop leaking <br className="md:hidden" /> revenue.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/60 font-medium max-w-xl mx-auto mb-14"
          >
            Your current infrastructure is costing you clients. We build the systems that capture them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[40px] z-50"
          >
            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="relative inline-flex items-center justify-center px-12 py-6 rounded-full bg-white text-black text-xl font-semibold overflow-hidden group transition-transform z-50 hover:scale-[1.02] active:scale-95"
              >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
              >
                Audit Your Infrastructure
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </motion.span>
              
              {/* Premium clean sweep hover effect */}
              <div className="absolute inset-0 w-full h-full bg-neutral-200 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full z-0" />
            </TransitionLink>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

