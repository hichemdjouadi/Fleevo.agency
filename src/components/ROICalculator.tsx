"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ROICalculator() {
  // Adjusted realistic ranges for standard businesses
  const [traffic, setTraffic] = useState(5000);
  const [aov, setAov] = useState(15000); 
  const [conversion, setConversion] = useState(1.2);
  const [currency, setCurrency] = useState<"DA" | "USD">("DA");

  const handleCurrencyChange = (newCurrency: "DA" | "USD") => {
    if (currency === newCurrency) return;
    if (newCurrency === "USD") {
      setAov(Math.round(aov * 0.0075));
    } else {
      setAov(Math.round(aov / 0.0075));
    }
    setCurrency(newCurrency);
  };

  // The Math: Universal default friction leak. 
  // Migrating from a commodity site to a premium, zero-friction architecture yields an average 65% uplift globally.
  const currentRevenue = traffic * (conversion / 100) * aov;
  const optimizedRevenue = traffic * ((conversion * 1.65) / 100) * aov; 
  const leakDisplay = optimizedRevenue - currentRevenue;

  const leakValue = useMotionValue(0);
  const springLeak = useSpring(leakValue, { damping: 40, stiffness: 80 });
  const displayLeak = useTransform(springLeak, (latest) => {
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    leakValue.set(leakDisplay);
  }, [leakDisplay, leakValue]);

  return (
    <div className="w-full text-white font-sans flex flex-col h-full justify-between">
      
      {/* Header & Toggle */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-6 border-b border-white/10 pb-8">
        <p className="text-white/50 max-w-sm font-light text-sm leading-relaxed">
          Globally—across the US, Europe, and MENA—standard commodity websites leak up to <strong className="text-white">68%</strong> of potential revenue due to poor mobile UX, friction, and a lack of visual trust.
        </p>
        
        <div className="flex bg-white/5 p-1 rounded-full text-[10px] font-bold tracking-[0.2em] border border-white/10 shrink-0">
          <button 
            onClick={() => handleCurrencyChange("DA")}
            className={`px-5 py-2.5 rounded-full transition-all duration-300 ${currency === "DA" ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"}`}
          >
            DZD
          </button>
          <button 
            onClick={() => handleCurrencyChange("USD")}
            className={`px-5 py-2.5 rounded-full transition-all duration-300 ${currency === "USD" ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"}`}
          >
            USD
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 flex-grow">
        
        {/* Sliders Container */}
        <div className="flex flex-col gap-10 justify-center pr-0 xl:pr-8 xl:border-r border-white/10">
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Monthly Traffic</label>
              <span className="font-mono text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">{traffic.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="500" max="50000" step="500" value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Average Order Value</label>
              <span className="font-mono text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">{aov.toLocaleString()} {currency}</span>
            </div>
            <input 
              type="range" min={currency === "DA" ? 1000 : 10} max={currency === "DA" ? 100000 : 1000} step={currency === "DA" ? 1000 : 10} value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Current Conversion</label>
              <span className="font-mono text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">{conversion}%</span>
            </div>
            <input 
              type="range" min="0.1" max="10" step="0.1" value={conversion}
              onChange={(e) => setConversion(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
            />
          </div>

        </div>

        {/* Output Container */}
        <div className="flex flex-col justify-center items-start xl:items-center relative">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-6 xl:mb-2 text-left xl:text-center w-full">
            Default Monthly Leak
          </span>
          <div className="flex items-baseline gap-2 xl:gap-4">
            <motion.span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              {displayLeak}
            </motion.span>
            <span className="text-xl md:text-3xl font-light text-white/40">{currency}</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mt-8 text-left xl:text-center max-w-[250px] leading-relaxed">
            Calculated using a highly conservative <strong className="text-white/50">+65%</strong> conversion uplift benchmark when migrating from a commodity template to a zero-friction premium architecture.
          </p>
        </div>

      </div>
    </div>
  );
}
