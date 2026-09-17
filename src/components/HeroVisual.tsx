"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center p-8">
      {/* Structural Wireframe / Grid - Extremely minimalist and elite */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Central Architecture Node */}
      <div className="relative z-10 w-full max-w-[600px] aspect-[21/9] border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col justify-between p-6">
         <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-white animate-pulse" />
               <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">Asset Placeholder</span>
            </div>
            <span className="text-[10px] font-mono text-white/30">W-1000px / H-428px</span>
         </div>
         
         <div className="flex justify-between items-end w-full">
            <span className="text-[10px] font-mono text-white/30">INJECT_3D_RENDER_HERE</span>
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
               <div className="w-1 h-1 bg-white/50" />
            </div>
         </div>
      </div>
    </div>
  );
}
