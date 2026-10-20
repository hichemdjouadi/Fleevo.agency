"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";
import { useTranslation } from "@/lib/i18n";

interface ProjectMeta {
  url: string;
  liveUrl: string;
  image: string;
  statusDotColor: string;
}

const STATIC_METAS: Record<string, ProjectMeta> = {
  mopizza: {
    url: "mopizzarestaurants.vercel.app",
    liveUrl: "https://mopizzarestaurants.vercel.app/",
    image: "/mopizza-mobile.png",
    statusDotColor: "bg-emerald-400",
  },
  adrena: {
    url: "adrenaclub.vercel.app",
    liveUrl: "https://adrenaclub.vercel.app/",
    image: "/adrena-mobile.png",
    statusDotColor: "bg-amber-400",
  },
  almadina: {
    url: "almadinabookstore.com",
    liveUrl: "https://almadinabookstore.com/",
    image: "/almadina-mobile.png",
    statusDotColor: "bg-emerald-400",
  },
};

export default function HeroVisual() {
  const { t, isRTL } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const projects = t.heroVisual.projects;
  const current = projects[activeTab] || projects[0];
  const meta = STATIC_METAS[current.id] || STATIC_METAS.mopizza;

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center py-2 sm:py-4 select-none"
    >
      {/* 1. Project Selector Segmented Control */}
      <div 
        role="tablist"
        aria-label="Featured client platforms"
        className="relative z-30 mb-6 sm:mb-10 w-full max-w-[360px] sm:max-w-xl grid grid-cols-3 p-1 sm:p-1.5 bg-[#f4f4f5] rounded-xl sm:rounded-full border border-black/10 gap-1 text-center"
      >
        {projects.map((proj, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={proj.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${proj.id}`}
              id={`tab-${proj.id}`}
              onClick={() => setActiveTab(idx)}
              className={`relative z-10 py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-black ${
                isActive ? "text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeHeroTab"
                  className="absolute inset-0 bg-black rounded-lg sm:rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="sm:hidden">{proj.shortLabel}</span>
              <span className="hidden sm:inline">{proj.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Realistic Dynamic Mobile Showcase */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-20 flex flex-col items-center"
      >
        <div className="w-[300px] sm:w-[340px] md:w-[370px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
          <DeviceFrame
            url={meta.url}
            statusBadge={current.statusBadge}
            statusDotColor={meta.statusDotColor}
            className="w-full"
          >
            <div className="relative w-full h-full bg-[#050505] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={meta.image}
                    alt={current.client}
                    fill
                    sizes="(max-width: 640px) 300px, 370px"
                    priority={activeTab === 0}
                    className="object-cover object-top"
                    unoptimized
                  />

                  {/* Top Edge Gradient overlay for realistic luxury glass depth */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Live Badge inside viewport */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-white flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${meta.statusDotColor} animate-pulse`} />
                      <span className="text-[11px] font-mono tracking-tight font-medium">
                        {current.statusBadge}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/50">
                      {current.client}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </DeviceFrame>
        </div>

        {/* Directional Benefits Ledger below device */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl text-center px-2 min-h-[42px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {current.benefits.map((b, i) => (
                <motion.div
                  key={`${current.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.94, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.28, 
                    delay: i * 0.07, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 hover:bg-white border border-black/10 hover:border-black/30 text-[11px] sm:text-xs font-mono text-neutral-800 hover:text-black transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] duration-200 cursor-default"
                >
                  <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-black/5 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-black shrink-0">
                    <span className="sr-only">{b.direction === "up" ? "Increased: " : "Reduced: "}</span>
                    <span aria-hidden="true" className={`inline-block transition-transform duration-200 ${
                      b.direction === "up" ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
                    }`}>
                      {b.direction === "up" ? "↑" : "↓"}
                    </span>
                  </span>
                  <span className="font-medium tracking-tight">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 3. Direct Live Platform Link */}
      <div className="relative z-30 mt-5 sm:mt-6 flex items-center justify-center w-full px-4">
        <a
          href={meta.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
          data-cursor="Visit"
        >
          <span className="sm:hidden">{current.ctaText}</span>
          <span className="hidden sm:inline">{current.ctaTextDesktop}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]" />
        </a>
      </div>
    </div>
  );
}
