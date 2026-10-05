"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import Testimonials from "@/components/Testimonials";
import Bottlenecks from "@/components/Bottlenecks";
import Architectures from "@/components/Architectures";
import Methodology from "@/components/Methodology";
import ConversionEngine from "@/components/ConversionEngine";
import TransitionLink from "@/components/TransitionLink";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="bg-[#fff] text-black selection:bg-black selection:text-white">
      
      {/* Pristine Light-Mode Hero */}
      <section className="relative w-full flex flex-col items-center pt-56 pb-24 overflow-hidden bg-[#fff]">
        {/* Subtle Vercel-style background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-[1200px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] sm:text-6xl md:text-7xl lg:text-[95px] font-semibold tracking-tighter leading-[1.15] text-white w-full flex flex-col items-center"
          >
            <span className="bg-[#404040] px-4 pt-4 pb-1 mb-1">Marketing & software</span>
            <span className="bg-[#404040] px-4 pt-4 pb-1">growth agency.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 text-base md:text-[22px] text-black font-medium max-w-[700px] leading-[1.4]">
            We design, build, and deploy the operational frameworks that scale high-ticket brands and eliminate revenue bleed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <TransitionLink href="/contact" className="px-8 py-4 bg-black text-white rounded-full font-medium text-base hover:scale-105 transition-transform z-50">
              Start Generating Revenue
            </TransitionLink>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 w-full max-w-[1500px] aspect-video rounded-[40px] shadow-2xl relative overflow-hidden bg-gray-100"
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

      {/* Selected Work (Dark Block) */}
      <div className="relative z-30 bg-[#050505] rounded-[32px] overflow-hidden pt-24 pb-32 px-6 mx-4 md:mx-8 my-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-16 text-center tracking-tight">Proof of Work</h2>
          <FeaturedWork />
          <div className="mt-24 flex justify-center">
             <TransitionLink href="/work" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-lg font-medium z-50">
               View all projects
             </TransitionLink>
          </div>
        </div>
      </div>

      {/* Features - Biz Sales Focus */}
      <section className="py-24 px-6 w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col border-t border-black/10">
          {[
            { title: "Filter Time-Wasters", desc: "Stop wasting hours replying to unqualified DMs. The system automatically qualifies prospects before they reach your calendar." },
            { title: "Automate Follow-ups", desc: "Replace manual chasing with instant SMS and Telegram alerts. When a lead drops off, the system automatically re-engages them." },
            { title: "Command Premium Pricing", desc: "If you look like your cheapest competitor, you compete on price. We design a visual presence that justifies a high-ticket fee without negotiation." },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-b border-black/10 group cursor-pointer">
              <div className="w-full md:w-1/2 flex items-start gap-6">
                <span className="text-xs font-bold opacity-40 mt-2 uppercase tracking-widest">0{i+1}</span>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">{feature.title}</h3>
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <p className="text-base md:text-lg font-medium leading-relaxed text-black/70">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Methodology />
      
      <Bottlenecks />
      <Architectures />

      <Testimonials />

      <FAQ />

      <ConversionEngine />

      {/* Cinematic Outro */}
      <section className="relative w-full text-white py-40 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-[80px] font-medium tracking-tighter leading-none mb-10">
            Stop guessing.
          </h2>
          <TransitionLink href="/contact" className="inline-block px-10 py-5 rounded-full bg-white text-black text-lg font-medium hover:scale-105 transition-transform duration-300 z-50">
            Book an Audit
          </TransitionLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}

