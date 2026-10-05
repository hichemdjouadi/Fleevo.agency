"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Target, Zap, Shield, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#020202] text-white min-h-screen selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* 1. HERO - THE MANIFESTO */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden pt-20">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em]">The Manifesto</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[120px] font-medium tracking-tighter leading-[0.9]"
          >
            We don't build <br className="hidden md:block"/>
            <span className="text-white/40 italic">websites.</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[90px] font-medium tracking-tighter leading-[0.9] mt-4"
          >
            We build revenue <br className="hidden md:block"/>
            engines.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-xl text-white/50 max-w-2xl font-light leading-relaxed"
          >
            Most agencies are bloated with project managers and focus on pretty aesthetics that don't convert. We are a lean team of product engineers obsessed with your bottom line.
          </motion.div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-orange-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-white/40 uppercase text-[10px] font-bold tracking-[0.2em]"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" /> Scroll to explore
        </motion.div>
      </section>

      {/* 2. CORE TENETS */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5 relative z-20 bg-[#020202]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-orange-500" />,
              title: "Engineering over Art",
              desc: "Aesthetics only matter if they drive action. We don't design for awards; we engineer for conversions and scalability."
            },
            {
              icon: <Shield className="w-8 h-8 text-emerald-500" />,
              title: "Risk Reversal",
              desc: "We align our incentives with your success. We don't just deliver code, we guarantee the outcome."
            },
            {
              icon: <Target className="w-8 h-8 text-blue-500" />,
              title: "The Grand Slam Offer",
              desc: "Before we write a single line of code or spend a dollar on traffic, we fix your pricing, packaging, and sales argument."
            }
          ].map((tenet, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] hover:border-white/10 transition-colors"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                {tenet.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4">{tenet.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{tenet.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE FOUNDER (EDITORIAL) */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-[3/4] rounded-[3rem] overflow-hidden group"
          >
            {/* The Image */}
            <div className="absolute inset-0 bg-black z-10 opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
            <Image 
              src="/founder-real.jpg" 
              alt="Hichem Djouadi - Founder" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
            {/* Decorative Elements */}
            <div className="absolute inset-0 border border-white/10 rounded-[3rem] z-20 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full z-0" />
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">Hichem Djouadi</h3>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">Founder & Architect</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6 text-xl text-white/60 font-light leading-relaxed"
            >
              <p>
                "I started Fleevo because I was tired of watching businesses burn capital on beautiful websites that generated zero revenue."
              </p>
              <p>
                We don't operate like a traditional agency. We don't charge for hours, we charge for outcomes. When you work with us, you're not getting a junior designer—you're getting an executive partner who understands unit economics, customer acquisition cost, and lifetime value.
              </p>
              <p className="text-white/90 font-medium italic">
                If we can't make you money, we don't deserve yours.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-8 flex items-center gap-6"
            >
               {/* Signature / Branding */}
               <div className="text-3xl font-serif italic text-white/30">H. Djouadi</div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. THE CHALLENGE (CTA) */}
      <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto text-center border-t border-white/10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent opacity-60" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
              Ready to stop <br className="hidden md:block"/> leaking revenue?
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
              We only work with a select few partners who are ready to scale aggressively. If you're looking for a cheap website, look elsewhere.
            </p>
            <Magnetic intensity={0.2}>
              <Link href="/contact" className="inline-block">
                <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:bg-orange-500 hover:text-white transition-all flex items-center gap-3 mx-auto group">
                  Apply to Work With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
