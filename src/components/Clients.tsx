"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  { name: "OAK & IRON", class: "font-serif tracking-tight" },
  { name: "NEXUS HOLDINGS", class: "font-bold tracking-tighter" },
  { name: "APEX DENTAL", class: "font-light tracking-widest" },
  { name: "LUMIERE", class: "font-black tracking-tight" },
  { name: "VERTEX", class: "font-medium tracking-widest" }
];

// Duplicate to create seamless loop
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function Clients() {
  return (
    <section className="bg-white text-black py-16 md:py-24 border-t border-black/5 overflow-hidden">
      <div className="flex flex-col gap-12">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 px-6 md:px-16 block">
          Trusted By Industry Leaders
        </span>
        
        <div data-cursor="DRAG" className="relative w-full flex overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-33.3333%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="flex items-center gap-16 md:gap-32 px-8 w-max opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
            {TRACK.map((client, idx) => (
              <span key={idx} className={`text-2xl md:text-3xl uppercase ${client.class}`}>
                {client.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
