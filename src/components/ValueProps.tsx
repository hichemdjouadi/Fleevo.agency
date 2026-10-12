"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Filter, MessageSquare, Coins, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const FEATURES = [
  {
    id: "01",
    title: "Filter Unqualified Tire-Kickers",
    desc: "Stop wasting founder and closer hours on non-buyers. Progressive qualification screens out bad fits before they ever touch your calendar.",
    icon: Filter,
    tag: "Lead Qualification",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 bg-[#0a0a0e] relative overflow-hidden">
        <div className="relative w-full max-w-sm flex flex-col gap-3 z-10">
          {[
            { label: "Spam Bot / Missing Phone", status: "Filtered", match: false },
            { label: "Customer Order (Mo Pizza Web App)", status: "WhatsApp Routed", match: true },
            { label: "Vendor Pitch (Irrelevant)", status: "Blocked", match: false }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${
                item.match 
                  ? 'bg-[#141824] border-blue-500/40 shadow-lg' 
                  : 'bg-[#0f0f14]/60 border-white/5 opacity-40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono ${
                  item.match ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/40'
                }`}>
                  {i + 1}
                </div>
                <div>
                  <div className={`text-sm font-medium ${item.match ? 'text-white' : 'text-white/60'}`}>
                    {item.label}
                  </div>
                  <div className="text-xs font-mono text-white/50">
                    {item.status}
                  </div>
                </div>
              </div>
              {item.match ? (
                <CheckCircle2 className="text-blue-400 w-5 h-5 shrink-0" />
              ) : (
                <span className="text-xs font-mono text-white/40">DROP</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "Instant 60-Second Lead Routing",
    desc: "Speed to lead decides the close. Inbound inquiries get validated in real time and pushed directly to your sales team's WhatsApp or CRM with complete intake notes.",
    icon: MessageSquare,
    tag: "Speed to Lead",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 bg-[#0a0a0e] relative overflow-hidden">
        <div className="relative w-full max-w-sm space-y-4 z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-2xl bg-[#12161f] border border-white/10 shadow-lg text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Form Submitted · 0s
              </span>
              <span className="text-xs font-mono text-white/50">Verified Number</span>
            </div>
            <p className="text-xs text-white/80 font-medium leading-relaxed">
              New qualified inquiry: <strong>Mobile Storefront & WhatsApp Engine</strong>
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="p-4 rounded-2xl bg-neutral-900/90 border border-emerald-500/30 text-white shadow-xl text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-emerald-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Auto-Dispatched · 14s
              </span>
              <span className="text-xs font-mono text-emerald-200/70">WhatsApp & Phone</span>
            </div>
            <p className="text-xs text-white/90 font-medium leading-relaxed">
              Customer order and details delivered directly to owner WhatsApp with zero commission loss.
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "Direct Customer Ownership",
    desc: "Third-party delivery apps and marketplace platforms charge up to 25% on every transaction. We build custom platforms where 100% of the customer relationship and revenue stays in your pocket.",
    icon: Coins,
    tag: "Margin Protection",
    visual: (
      <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 bg-[#070709] relative overflow-hidden text-white font-sans">
        {/* Top Architecture Status */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-wider text-white/70">
              Stack Performance Comparison
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
            Production Standard
          </span>
        </div>

        {/* Comparison Stack Nodes */}
        <div className="relative z-10 flex flex-col gap-3 my-auto">
          {/* Legacy Stack */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Slow Monolithic Template
              </span>
              <span className="text-rose-400 font-semibold">4.8s Load Time</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-rose-500/80 h-full w-[85%] rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-white/50 font-mono">
              <span>Third-party delivery apps</span>
              <span className="text-rose-400/90 font-medium">20-25% Cut on Every Sale</span>
            </div>
          </div>

          {/* Fleevo Edge Architecture */}
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/10 flex flex-col gap-2 shadow-lg">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Fleevo Custom Platform
              </span>
              <span className="text-emerald-300 font-semibold font-mono">Sub-1s Mobile</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-emerald-400 h-full rounded-full" 
              />
            </div>
            <div className="flex justify-between text-xs text-white/70 font-mono">
              <span className="text-emerald-400/90 font-medium">Direct WhatsApp Orders</span>
              <span className="text-emerald-300 font-semibold">0% Commission Cut</span>
            </div>
          </div>
        </div>

        {/* Bottom Authority Proof */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
          <span>Business Outcome:</span>
          <span className="text-white font-medium">100% Profit Stays with Owner</span>
        </div>
      </div>
    )
  }
];

export default function ValueProps() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
      
      {/* Desktop Layout (Interactive Sticky Experience) */}
      <div className="hidden md:flex flex-row gap-12 md:gap-24">
        {/* Left: The Interactive List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-12 leading-[1.05]">
            How we protect your margins and sales time.
          </h2>
          
          <div className="flex flex-col relative" role="tablist" aria-label="Fleevo Operational Architecture Pillars">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 rounded-full" />
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
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`feature-panel-${feature.id}`}
                  className="pl-8 md:pl-12 py-8 cursor-pointer group rounded-2xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                  onMouseEnter={() => setActiveFeature(i)}
                  onClick={() => setActiveFeature(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveFeature(i);
                    }
                  }}
                >
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-medium tracking-tight mb-3 transition-all duration-300 ${isActive ? 'text-black translate-x-2' : 'text-neutral-500'}`}>
                      <span className="font-mono text-neutral-400 font-light mr-4 text-xl md:text-2xl">
                        {feature.id}
                      </span>
                      {feature.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-base md:text-lg font-light leading-relaxed text-neutral-600 max-w-md overflow-hidden"
                        >
                          <span className="block pt-2">{feature.desc}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: The Visual Payoff */}
        <div className="w-full md:w-1/2 h-[420px] md:h-[580px] sticky top-32">
          <div 
            id={`feature-panel-${FEATURES[activeFeature].id}`}
            role="tabpanel"
            aria-label={FEATURES[activeFeature].title}
            className="w-full h-full rounded-[36px] overflow-hidden bg-[#0a0a0e] shadow-2xl relative border border-black/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {FEATURES[activeFeature].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden gap-16">
        <h2 className="text-3xl font-medium tracking-tight text-black leading-tight">
          How we protect your margins and sales time.
        </h2>
        
        <div className="flex flex-col gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-medium tracking-tight mb-2 text-black">
                  <span className="font-mono text-neutral-400 font-light mr-3 text-xl">
                    {feature.id}
                  </span>
                  {feature.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
              
              <div className="w-full h-[320px] rounded-[28px] overflow-hidden bg-[#0a0a0e] shadow-xl relative border border-black/10">
                 {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
