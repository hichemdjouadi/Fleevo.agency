"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Clock, FileCheck, ChevronRight, MousePointerClick, Calendar, Coins } from "lucide-react";

export default function Bottlenecks() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/10 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-24 items-center text-center">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/60 block mb-6">The Diagnosis</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.9] max-w-4xl text-white">
            The Bottlenecks <br className="hidden md:block"/> We Eliminate.
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Column 01: Ad-Spend Bleed */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-amber-500/50 p-6 md:p-10 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-56 md:h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-amber-500/30 mb-8 md:mb-12 flex flex-col p-6 md:p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.15),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-amber-500/10 to-transparent p-2 rounded-xl border border-amber-500/30">
                    <MousePointerClick className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Performance</span>
                </div>
                <div className="bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-amber-500" />
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">Monthly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2 leading-none">
                  240<span className="text-[2.5rem] lg:text-4xl text-amber-500 ml-1">%</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">More Clicks</span>
                  <span className="text-sm text-white/60">than last month</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Stop Wasting Ad Spend</h3>
            <p className="text-base text-white/70 font-light leading-relaxed mb-8">
              You pay premium rates for traffic, but your system fails to convert them. Users bounce before seeing the offer.
            </p>
            <div className="mt-auto border-t border-white/10 pt-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-500 flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-lg font-medium tracking-tight leading-snug text-white">
                We plug the holes in your funnel so the traffic you buy actually converts into cash.
              </p>
            </div>
          </motion.div>

          {/* Column 02: Operational Nightmare */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-emerald-400/50 p-6 md:p-10 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-56 md:h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-emerald-400/30 mb-8 md:mb-12 flex flex-col p-6 md:p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.15),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-emerald-400/10 to-transparent p-2 rounded-xl border border-emerald-400/30">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Efficiency</span>
                </div>
                <div className="bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Weekly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2 leading-none">
                  18<span className="text-[2.5rem] lg:text-4xl text-emerald-400 ml-3">Hours</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">Saved</span>
                  <span className="text-sm text-white/60">from manual tasks</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Automate Operations</h3>
            <p className="text-base text-white/70 font-light leading-relaxed mb-8">
              Your staff wastes hours manually replying to messages and qualifying leads. Let the system do it.
            </p>
            <div className="mt-auto border-t border-white/10 pt-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-lg font-medium tracking-tight leading-snug text-white">
                You get your life back. The system talks to clients, filters time-wasters, and routes ready-to-buy leads directly to you.
              </p>
            </div>
          </motion.div>

          {/* Column 03: Commodity Trap */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-violet-500/50 p-6 md:p-10 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-56 md:h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-violet-500/30 mb-8 md:mb-12 flex flex-col p-6 md:p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.15),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-violet-500/10 to-transparent p-2 rounded-xl border border-violet-500/30">
                    <Coins className="w-5 h-5 text-violet-500" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Revenue</span>
                </div>
                <div className="bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-violet-500" />
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-wider">Monthly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2 leading-none">
                  2.5M<span className="text-[2.5rem] lg:text-4xl text-violet-500 ml-2 uppercase tracking-wide">DA</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">Reclaimed</span>
                  <span className="text-sm text-white/60">from premium clients</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Command Premium Pricing</h3>
            <p className="text-base text-white/70 font-light leading-relaxed mb-8">
              You look like your cheapest competitor. We position you to charge premium prices without negotiation.
            </p>
            <div className="mt-auto border-t border-white/10 pt-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-violet-500 flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-lg font-medium tracking-tight leading-snug text-white">
                We position you as the undeniable premium option, allowing you to charge high-ticket prices without negotiation.
              </p>
            </div>
          </motion.div>

        </div>

        {/* The Proof Bridge */}
        <div className="w-full flex flex-col items-center justify-center pt-32 pb-16 relative z-10">
          <p className="text-3xl font-light tracking-tight text-white/60 mb-8 text-center max-w-2xl">
            Don't take our word for it. <br/> <strong className="text-white font-medium">Experience the performance yourself.</strong>
          </p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}><ArrowDown className="w-8 h-8 text-white" /></motion.div>
        </div>

      </div>
    </section>
  );
}
