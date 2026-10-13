"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";

interface ShowcaseProject {
  id: "mopizza" | "almadina";
  tabLabel: string;
  shortLabel: string;
  client: string;
  category: string;
  url: string;
  liveUrl: string;
  image: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: "mopizza",
    tabLabel: "Mo Pizza Direct Ordering",
    shortLabel: "Mo Pizza",
    client: "Mo Pizza Restaurants",
    category: "Mobile Commerce & Bot Intake",
    url: "mopizza.app",
    liveUrl: "https://mopizzarestaurants.netlify.app/",
    image: "/mopizza-mobile.png",
    benefits: [
      { direction: "up", label: "Direct Margin Retained (0% Commission)" },
      { direction: "up", label: "Sub-800ms Mobile Checkout Velocity" }
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
    image: "/almadina-mobile.png",
    benefits: [
      { direction: "up", label: "Search & Discovery Speed" },
      { direction: "down", label: "Mobile Catalog Drop-off" }
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
      {/* 1. Project Selector Segmented Control (Responsive 2-col on mobile, full pill on desktop) */}
      <div className="relative z-30 mb-6 sm:mb-10 w-full max-w-[340px] sm:max-w-md grid grid-cols-2 p-1 sm:p-1.5 bg-[#f4f4f5] rounded-xl sm:rounded-full border border-black/10 gap-1 text-center">
        {PROJECTS.map((proj, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`py-2 px-3 sm:px-6 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
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
            statusBadge="Live"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={`${current.client} mobile interface`}
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 768px) 360px, 420px"
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </DeviceFrame>
        </div>

        {/* Directional Benefits Ledger below device */}
        <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl text-center px-2">
          {current.benefits.map((b, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f7f7f8] border border-black/10 text-[11px] sm:text-xs font-mono text-neutral-800 font-medium"
            >
              <span className="font-bold text-black">{b.direction === "up" ? "↑" : "↓"}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Direct Live Platform Link */}
      <div className="relative z-30 mt-5 sm:mt-6 flex items-center justify-center w-full px-4">
        <a
          href={current.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
          data-cursor="Visit"
        >
          <span className="sm:hidden">Visit Live Deployment</span>
          <span className="hidden sm:inline">Visit Live Deployment ({current.tabLabel})</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
