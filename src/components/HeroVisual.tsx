"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroVisual() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#030303] overflow-hidden flex items-center justify-center">
      {/* Noise texture overlay for that high-end tactile feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay z-20 pointer-events-none"></div>
      
      {/* Animated Liquid Gradient Orbs */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-60 will-change-transform"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50 will-change-transform"
      />
      <motion.div 
        animate={{ 
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[50%] h-[50%] bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] opacity-40 will-change-transform"
      />

      {/* Center Glassmorphic Floating Element (Parallax on Mouse Move) */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="relative z-30 flex flex-col items-center cursor-crosshair"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-2xl overflow-hidden relative group">
          {/* Inner scanning ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[2px] border-transparent border-t-white/30 border-r-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-[1px] border-transparent border-b-cyan-400/40 border-l-cyan-400/10 rounded-full"
          />
          <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)] group-hover:scale-150 transition-transform duration-500" />
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-2 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/80">Architecture Active</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
