"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";
import TransitionLink from "@/components/TransitionLink";

interface ShowcaseProject {
  id: "mopizza" | "adrena" | "almadina" | "tawheed";
  tabLabel: string;
  shortLabel: string;
  client: string;
  category: string;
  url: string;
  liveUrl: string;
  isExternal: boolean;
  statusBadge: string;
  statusDotColor?: string;
  ctaText: string;
  ctaTextDesktop: string;
  image?: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
  renderCanvas?: () => React.ReactNode;
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: "mopizza",
    tabLabel: "Mo Pizza",
    shortLabel: "Mo Pizza",
    client: "Mo Pizza Restaurants",
    category: "Direct Intake & Mobile Commerce Engine",
    url: "mopizzarestaurants.vercel.app",
    liveUrl: "https://mopizzarestaurants.vercel.app/",
    isExternal: true,
    statusBadge: "Live Production Platform",
    statusDotColor: "bg-emerald-400",
    ctaText: "Visit Live Deployment",
    ctaTextDesktop: "Visit Live Deployment (Mo Pizza Direct Ordering)",
    image: "/mopizza-mobile.png",
    benefits: [
      { direction: "up", label: "0% Commission Direct Orders" },
      { direction: "up", label: "Sub-800ms Mobile Velocity" }
    ]
  },
  {
    id: "adrena",
    tabLabel: "Adréna Club",
    shortLabel: "Adréna",
    client: "Adréna Club (Bab Ezzouar)",
    category: "Athletic Club & Intake System",
    url: "adrenaclub.vercel.app",
    liveUrl: "https://adrenaclub.vercel.app/",
    isExternal: true,
    statusBadge: "Private Preview · Staging Deployment",
    statusDotColor: "bg-amber-400",
    ctaText: "Explore Staging Platform",
    ctaTextDesktop: "Explore Staging Platform (Adréna Club)",
    image: "/adrena-mobile.png",
    benefits: [
      { direction: "up", label: "Direct WhatsApp Enrollment (dès 3 000 DA)" },
      { direction: "down", label: "Front-Desk Inquiry Overload" }
    ]
  },
  {
    id: "almadina",
    tabLabel: "Almadina Bookstore",
    shortLabel: "Almadina",
    client: "Almadina Publishing",
    category: "Headless Catalog Architecture",
    url: "almadinabookstore.com",
    liveUrl: "https://almadinabookstore.com/",
    isExternal: true,
    statusBadge: "Live Production Platform",
    statusDotColor: "bg-emerald-400",
    ctaText: "Visit Live Deployment",
    ctaTextDesktop: "Visit Live Deployment (Almadina Bookstore)",
    image: "/almadina-mobile.png",
    benefits: [
      { direction: "up", label: "Instant Title & ISBN Search" },
      { direction: "down", label: "58-Wilayas Cart Drop-Off" }
    ]
  }
];

export default function HeroVisual() {
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

  const current = PROJECTS[activeTab];

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center py-2 sm:py-4 select-none"
    >
      {/* 1. Project Selector Segmented Control (Responsive 3-col on mobile, full pill on desktop) */}
      <div 
        role="tablist"
        aria-label="Featured client platforms"
        className="relative z-30 mb-6 sm:mb-10 w-full max-w-[360px] sm:max-w-xl grid grid-cols-3 p-1 sm:p-1.5 bg-[#f4f4f5] rounded-xl sm:rounded-full border border-black/10 gap-1 text-center"
      >
        {PROJECTS.map((proj, idx) => {
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
              className={`min-h-[44px] flex items-center justify-center py-2 px-2 sm:px-4 rounded-lg sm:rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-black text-white shadow-sm font-semibold"
                  : "text-neutral-700 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              <span className="sm:hidden">{proj.shortLabel}</span>
              <span className="hidden sm:inline">{proj.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* 2. The Clean Photorealistic Hardware Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full max-w-[900px] flex flex-col items-center justify-center px-2 sm:px-4"
      >
        <div
          className="relative z-20 group w-full flex justify-center"
          data-cursor="Explore"
        >
          <DeviceFrame
            url={current.url}
            statusBadge={current.statusBadge}
            statusDotColor={current.statusDotColor}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {current.renderCanvas ? (
                  current.renderCanvas()
                ) : (
                  <Image
                    src={current.image!}
                    alt={`${current.client} mobile interface`}
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 768px) 360px, 420px"
                    priority
                    unoptimized
                    className="object-cover object-top"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </DeviceFrame>
        </div>

        {/* Directional Benefits Ledger below device with Delightful Motion */}
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
                  data-cursor="Outcome"
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

      {/* 3. Direct Live Platform Link or Staging Access Link */}
      <div className="relative z-30 mt-5 sm:mt-6 flex items-center justify-center w-full px-4">
        {current.isExternal ? (
          <a
            href={current.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
            data-cursor="Visit"
          >
            <span className="sm:hidden">{current.ctaText}</span>
            <span className="hidden sm:inline">{current.ctaTextDesktop}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <TransitionLink
            href={current.liveUrl}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
            data-cursor="Preview"
          >
            <span className="sm:hidden">{current.ctaText}</span>
            <span className="hidden sm:inline">{current.ctaTextDesktop}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </TransitionLink>
        )}
      </div>
    </div>
  );
}
