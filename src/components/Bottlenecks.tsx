"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Clock, MousePointerClick, Calendar, Coins, Zap } from "lucide-react";

export default function Bottlenecks() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 border-t border-white/10 overflow-hidden relative">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-24 text-left">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 block mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/30" />
              The Diagnosis
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] text-white">
              The bottlenecks <br className="hidden md:block"/> we eliminate.
            </h2>
          </div>
          <div className="max-w-md pt-2 md:pt-14">
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Growth stalls when systems break under pressure. We identify the exact points where your business leaks revenue and replace them with scalable infrastructure.
            </p>
          </div>
        </div>
        
        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Card 01: Ad-Spend Bleed (Large Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 p-8 md:p-12 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-700"
          >
            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/[0.03] transition-colors duration-700 pointer-events-none" />
            
            {/* Graphic: Upward Line Chart */}
            <div className="h-64 w-full bg-[#0a0a0a]/90 rounded-3xl border border-white/5 group-hover:border-amber-500/20 mb-10 p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.1),_transparent_60%)]" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    <MousePointerClick className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Acquisition</span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-40">
                <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(245,158,11,0.3)" />
                      <stop offset="100%" stopColor="rgba(245,158,11,0)" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 0 150 L 0 120 Q 50 120 100 90 T 200 70 T 300 40 T 400 10 L 400 150 Z" 
                    fill="url(#amberGrad)" 
                    className="opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <motion.path 
                    d="M 0 120 Q 50 120 100 90 T 200 70 T 300 40 T 400 10" 
                    fill="none" 
                    stroke="#f59e0b" 
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  />
                </svg>
              </div>

              <div className="absolute right-8 bottom-8 z-10 flex flex-col items-end">
                <span className="text-5xl font-medium tracking-tighter text-white drop-shadow-lg">
                  2.4x
                </span>
                <span className="text-sm text-amber-500 font-bold uppercase tracking-wider mt-1">ROAS Baseline</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-3xl font-medium tracking-tight mb-4 text-white">The Traffic Bleed</h3>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  Traffic is a commodity. Conversion is a competitive advantage. If your landing pages can't capture and retain attention, you are funding the ad platforms for zero return.
                </p>
              </div>
              <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4" /> The Result
                </span>
                <p className="text-base font-medium tracking-tight leading-snug text-white/90">
                  We rebuild the funnel physics so every dollar spent yields compounding returns, allowing you to outspend competitors to acquire customers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 02: Operational Nightmare (Small Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 hover:border-emerald-400/30 p-8 md:p-12 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-700"
          >
            <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/[0.03] transition-colors duration-700 pointer-events-none" />
            
            {/* Graphic: Progress Ring */}
            <div className="h-64 w-full bg-[#0a0a0a]/90 rounded-3xl border border-white/5 group-hover:border-emerald-400/20 mb-10 p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 flex items-center justify-center">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.1),_transparent_60%)]" />

              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="bg-emerald-400/10 p-2.5 rounded-xl border border-emerald-400/20">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="relative w-40 h-40 flex items-center justify-center mt-6">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#34d399" 
                    strokeWidth="8"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-medium tracking-tighter text-white leading-none">18</span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Hrs/Wk</span>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-medium tracking-tight mb-4 text-white">Manual Fulfillment</h3>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
              Human capital is too expensive for data entry. When your team is trapped in DMs managing unqualified leads, response times stretch from minutes to days.
            </p>
            <div className="mt-auto bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4" /> The Result
              </span>
              <p className="text-base font-medium tracking-tight leading-snug text-white/90">
                We deploy autonomous qualifying systems. Your team only speaks to prospects who are financially ready to buy.
              </p>
            </div>
          </motion.div>

          {/* Card 03: Commodity Trap (Full Width Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 bg-[#050505]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 hover:border-violet-500/30 p-8 md:p-12 flex flex-col md:flex-row gap-12 group relative overflow-hidden shadow-2xl transition-all duration-700"
          >
            <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/[0.02] transition-colors duration-700 pointer-events-none" />
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <h3 className="text-4xl font-medium tracking-tight mb-6 text-white">The Commodity Trap</h3>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-10 max-w-2xl">
                Competing on price is a race to the bottom. If your digital presence looks identical to your cheapest competitor, you surrender your pricing power. You become an expense to be negotiated rather than an investment to be secured.
              </p>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 max-w-2xl">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 flex items-center gap-2 mb-4">
                  <Coins className="w-4 h-4" /> The Result
                </span>
                <p className="text-lg font-medium tracking-tight leading-relaxed text-white/90">
                  We construct a visual authority that justifies high-ticket margins before the first sales call even begins. You stop defending your rates and start dictating them.
                </p>
              </div>
            </div>

            {/* Graphic: Vertical Bar Chart */}
            <div className="flex-1 h-80 w-full bg-[#0a0a0a]/90 rounded-3xl border border-white/5 group-hover:border-violet-500/20 p-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 flex items-end justify-between px-12 pb-12">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.1),_transparent_60%)]" />
              
              <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
                <div className="bg-violet-500/10 p-2.5 rounded-xl border border-violet-500/20">
                  <Calendar className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-xs uppercase tracking-widest text-white/50 font-medium">LTV Growth</span>
              </div>

              {[40, 65, 45, 90, 140].map((height, i) => (
                <div key={i} className="w-12 md:w-16 flex flex-col items-center gap-4 relative z-10">
                  <motion.div 
                    className={`w-full rounded-t-lg ${i === 4 ? 'bg-gradient-to-t from-violet-900 to-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'bg-white/5 border border-white/10 border-b-0'}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: height }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), type: "spring", bounce: 0.4 }}
                  />
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Q{i+1}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        <div className="w-full flex flex-col items-center text-center pt-32 pb-16 relative z-10 border-t border-white/5 mt-16">
          <p className="text-2xl md:text-3xl font-light tracking-tight text-white/60 mb-10 max-w-2xl">
            Don't take our word for it. <br/> <strong className="text-white font-medium mt-2 block">Experience the performance yourself.</strong>
          </p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm">
              <ArrowDown className="w-6 h-6 text-white/80" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
