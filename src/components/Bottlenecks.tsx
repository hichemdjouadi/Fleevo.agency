"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Clock, FileCheck, ChevronRight, MousePointerClick, Calendar, Coins } from "lucide-react";

export default function Bottlenecks() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-16 border-t border-white/10 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-24 items-center text-center">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 block mb-6">The Diagnosis</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] max-w-5xl text-white">
            The Bottlenecks <br className="hidden md:block"/> We Eliminate.
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 01: Ad-Spend Bleed */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 flex flex-col group relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 mb-12 flex flex-col p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-white/10 to-transparent p-2 rounded-xl border border-white/20">
                    <MousePointerClick className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Performance</span>
                </div>
                <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Monthly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2  leading-none">
                  240<span className="text-[2.5rem] lg:text-4xl text-white ml-1">%</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">More Clicks</span>
                  <span className="text-sm text-white/40">than last month</span>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">The Ad-Spend Bleed</h3>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-10">
              You pay premium rates for ads, but your site is so slow that users leave before seeing your offer. You are burning money.
            </p>
            <div className="mt-auto border-t border-white/10 pt-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-xl font-medium tracking-tight leading-snug text-white">
                We eliminate the friction. Every single click you pay for actually stays, converts, and becomes profit.
              </p>
            </div>
          </motion.div>

          {/* Column 02: Operational Nightmare */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 flex flex-col group relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-studio-mint/0 group-hover:bg-studio-mint/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 mb-12 flex flex-col p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-studio-mint/20 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(224,242,254,0.1),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-studio-mint/10 to-transparent p-2 rounded-xl border border-studio-mint/30">
                    <Clock className="w-5 h-5 text-studio-mint" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Efficiency</span>
                </div>
                <div className="bg-studio-mint/10 px-3 py-1.5 rounded-full border border-studio-mint/20 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-studio-mint" />
                  <span className="text-[10px] font-bold text-studio-mint uppercase tracking-wider">Weekly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2  leading-none">
                  18<span className="text-[2.5rem] lg:text-4xl text-studio-mint ml-3">Hours</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">Saved</span>
                  <span className="text-sm text-white/40">from manual tasks</span>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">Operational Nightmare</h3>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-10">
              Your staff wastes hours manually replying to messages, missing calls, and trying to qualify leads. Time is wasted, clients are lost.
            </p>
            <div className="mt-auto border-t border-white/10 pt-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-studio-mint flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-xl font-medium tracking-tight leading-snug text-white">
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
            className="bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 flex flex-col group relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-studio-lavender/0 group-hover:bg-studio-lavender/5 transition-colors duration-700 pointer-events-none" />
            
            {/* Highly Polished UI Graphic */}
            <div className="h-64 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 mb-12 flex flex-col p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-studio-lavender/20 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(243,232,255,0.1),_transparent_50%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br bg-studio-lavender/10 to-transparent p-2 rounded-xl border border-studio-lavender/30">
                    <Coins className="w-5 h-5 text-studio-lavender" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Revenue</span>
                </div>
                <div className="bg-studio-lavender/10 px-3 py-1.5 rounded-full border border-studio-lavender/20 flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-studio-lavender" />
                  <span className="text-[10px] font-bold text-studio-lavender uppercase tracking-wider">Monthly</span>
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 mt-4 justify-center flex-1">
                <span className="text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter text-white mb-2  leading-none">
                  2.5M<span className="text-[2.5rem] lg:text-4xl text-studio-lavender ml-2 uppercase tracking-wide">DA</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base text-white/80 font-medium tracking-wide">Reclaimed</span>
                  <span className="text-sm text-white/40">from premium clients</span>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">The Commodity Trap</h3>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-10">
              Your digital presence looks exactly like your cheapest competitor, forcing you to constantly lower your prices to win clients.
            </p>
            <div className="mt-auto border-t border-white/10 pt-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-studio-lavender flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3" /> The Business Result
              </span>
              <p className="text-xl font-medium tracking-tight leading-snug text-white">
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
