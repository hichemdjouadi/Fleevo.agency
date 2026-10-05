"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Filter, MessageSquare, Coins, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    id: "01",
    title: "Filter Time-Wasters",
    desc: "Stop wasting hours replying to unqualified DMs. The system automatically qualifies prospects before they reach your calendar.",
    icon: Filter,
    color: "from-blue-500 to-cyan-400",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#f8f9fa] relative overflow-hidden">
        {/* Abstract UI for filtering */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="relative w-full max-w-sm flex flex-col gap-3 z-10">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`w-full p-4 rounded-xl border flex items-center justify-between ${i === 2 ? 'bg-white border-blue-200 shadow-xl' : 'bg-white/50 border-black/5 opacity-50 blur-[1px]'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5" />
                <div className="flex flex-col gap-2">
                  <div className="w-24 h-2 rounded-full bg-black/10" />
                  <div className="w-16 h-2 rounded-full bg-black/5" />
                </div>
              </div>
              {i === 2 && <CheckCircle2 className="text-blue-500 w-5 h-5" />}
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "Automate Follow-ups",
    desc: "Replace manual chasing with instant SMS and Telegram alerts. When a lead drops off, the system automatically re-engages them.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-400",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-8 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.08),_transparent_60%)]" />
        <div className="relative w-full max-w-sm">
          {/* Chat bubbles */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-4/5 p-4 rounded-2xl rounded-tl-sm bg-white border border-black/5 shadow-md mb-4"
          >
            <div className="w-full h-2 rounded-full bg-black/10 mb-2" />
            <div className="w-3/4 h-2 rounded-full bg-black/10" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-3/4 p-4 rounded-2xl rounded-br-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-xl ml-auto"
          >
            <div className="w-full h-2 rounded-full bg-white/40 mb-2" />
            <div className="w-1/2 h-2 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "Command Premium Pricing",
    desc: "If you look like your cheapest competitor, you compete on price. We design a visual presence that justifies a high-ticket fee without negotiation.",
    icon: Coins,
    color: "from-violet-500 to-purple-400",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_60%)]" />
        <div className="relative w-full max-w-sm flex items-end justify-center gap-4 h-48 z-10">
          {[30, 45, 60, 100].map((height, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              className={`w-12 rounded-t-lg ${i === 3 ? 'bg-gradient-to-t from-violet-600 to-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'bg-black/5 border border-black/10 border-b-0'}`}
            />
          ))}
        </div>
      </div>
    )
  }
];

export default function ValueProps() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-32 px-6 w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left: The Interactive List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/50 block mb-12">The Automation Advantage</span>
          
          <div className="flex flex-col relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/5 rounded-full" />
            <motion.div 
              className="absolute left-0 w-[2px] bg-black rounded-full transition-all duration-500 ease-[0.16,1,0.3,1]"
              style={{ 
                height: `${100 / FEATURES.length}%`, 
                top: `${(activeFeature * 100) / FEATURES.length}%` 
              }} 
            />

            {FEATURES.map((feature, i) => {
              const isActive = activeFeature === i;
              return (
                <div 
                  key={feature.id} 
                  className="pl-8 md:pl-12 py-8 cursor-pointer group"
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-xs font-bold mt-2 uppercase tracking-widest transition-opacity duration-300 ${isActive ? 'text-black' : 'text-black/30'}`}>
                      {feature.id}
                    </span>
                    <div className="flex flex-col">
                      <h3 className={`text-3xl md:text-4xl font-medium tracking-tight mb-4 transition-all duration-300 ${isActive ? 'text-black translate-x-2' : 'text-black/40'}`}>
                        {feature.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg font-medium leading-relaxed text-black/70 max-w-md overflow-hidden"
                          >
                            <span className="block pt-2">{feature.desc}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: The Visual Payoff */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] sticky top-32">
          <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#f8f9fa] shadow-2xl relative border border-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {FEATURES[activeFeature].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
