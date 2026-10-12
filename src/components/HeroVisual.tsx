"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Construction, Dumbbell } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";
import TelemetryCard from "@/components/ui/TelemetryCard";

interface ShowcaseProject {
  id: "mopizza" | "almadina" | "gym";
  tabLabel: string;
  client: string;
  url: string;
  liveUrl: string;
  image?: string;
  isStaging?: boolean;
  notification: {
    badge: string;
    title: string;
    details: string;
    location: string;
    price: string;
    latency: string;
  };
  metrics: {
    badge: string;
    metric: string;
    title: string;
    description: string;
    sla: string;
  };
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: "mopizza",
    tabLabel: "Mo Pizza",
    client: "Mo Pizza Restaurants",
    url: "mopizzarestaurants.netlify.app",
    liveUrl: "https://mopizzarestaurants.netlify.app/",
    image: "/mopizza-mobile.png",
    notification: {
      badge: "KITCHEN DISPATCH",
      title: "New Order: Truffe Special",
      details: "1x Truffe Special · 1x San Pellegrino",
      location: "Hydra, Algiers",
      price: "1,450 DZD",
      latency: "0.4s Edge Dispatch"
    },
    metrics: {
      badge: "UNIT ECONOMICS",
      metric: "100%",
      title: "Direct Margin Retained",
      description: "Eliminates third-party delivery commissions, protecting 20–25% net profit on every basket.",
      sla: "0% Marketplace Take Rate"
    }
  },
  {
    id: "almadina",
    tabLabel: "Almadina",
    client: "Almadina Bookstore",
    url: "almadinabookstore.com",
    liveUrl: "https://almadinabookstore.com/",
    image: "/almadina-mobile.png",
    notification: {
      badge: "LOGISTICS DISPATCH",
      title: "Order: Tafsir Ibn Kathir (4-Vol)",
      details: "Hardcover Complete Edition · In Stock",
      location: "Setif Centre (Yalidine COD)",
      price: "4,800 DZD",
      latency: "28ms DB Latency"
    },
    metrics: {
      badge: "EDGE SPEED",
      metric: "< 45ms",
      title: "Sub-Second Mobile Catalog",
      description: "Instantaneous Arabic/French catalog queries and checkout tested on Algerian mobile 4G.",
      sla: "Zero Layout Shift (CLS 0.00)"
    }
  },
  {
    id: "gym",
    tabLabel: "Adréna Club",
    client: "Adréna Athletics Club",
    url: "adrena-club.staging.fleevy.dz",
    liveUrl: "/contact?subject=VIP+Gym+Early+Access",
    isStaging: true,
    notification: {
      badge: "MEMBERSHIP INTAKE",
      title: "VIP Session Confirmed",
      details: "Pre-qualified athlete · Phone OTP Verified",
      location: "Adréna Athletics · Hydra",
      price: "VIP Pass Reserved",
      latency: "Auto WhatsApp Routing"
    },
    metrics: {
      badge: "AUTONOMOUS CRM",
      metric: "0 Min",
      title: "Zero Manual DM Chasing",
      description: "Pre-qualifies incoming athlete commitment and deposits before touching the head coach's calendar.",
      sla: "100% Verified Phone Leads"
    }
  }
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 3D Tilt Physics
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
    setIsHovered(false);
  };

  // Auto rotation every 6 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const current = PROJECTS[activeTab];

  return (
    <div 
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center py-6 select-none"
    >
      {/* 1. Project Selector Pills */}
      <div className="relative z-30 mb-8 sm:mb-12 flex items-center p-1.5 bg-black/[0.04] rounded-full border border-black/10">
        {PROJECTS.map((proj, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-black text-white shadow-sm"
                  : "text-black/60 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              {proj.tabLabel}
            </button>
          );
        })}
      </div>

      {/* 2. The 3D Floating Hardware Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full max-w-[1040px] flex items-center justify-center px-4"
      >
        
        {/* SATELLITE CARD 1 (LEFT): Real-Time Webhook Dispatch Telemetry */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex flex-col absolute -left-2 lg:-left-6 top-1/4 z-30 w-[280px] lg:w-[310px] text-left"
        >
          <TelemetryCard
            badge={current.notification.badge}
            title={current.notification.title}
            description={current.notification.details}
            footerRight="REAL-TIME DISPATCH"
            footerLeft={current.notification.latency}
            rows={[
              { label: "Destination", value: current.notification.location, isMono: true },
              { label: "Transaction", value: current.notification.price, isMono: true }
            ]}
          />
        </motion.div>

        {/* CENTERPIECE: The Reusable DeviceFrame Component */}
        <div className="relative z-20">
          <DeviceFrame
            url={current.url}
            statusBadge={current.isStaging ? "LAB STAGING" : "EDGE · <50MS"}
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
                {current.isStaging ? (
                  /* Staging View for Adréna Club */
                  <div className="w-full h-full bg-[#0a0a0f] p-5 flex flex-col justify-between text-left select-none relative overflow-hidden">
                    <div className="relative z-10 pt-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 font-medium mb-3">
                        <Construction className="w-3.5 h-3.5" />
                        <span>ACTIVE LAB STAGING</span>
                      </div>
                      <div className="text-xl font-medium text-white tracking-tight leading-tight">
                        Adréna Club Private Gateway
                      </div>
                      <p className="text-xs text-white/70 font-light mt-2 leading-relaxed">
                        Currently engineering athlete pre-qualification and automated WhatsApp coach dispatch.
                      </p>
                    </div>

                    <div className="relative z-10 space-y-2.5 font-mono text-xs">
                      <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                        <span className="text-white/60">Target:</span>
                        <span className="text-white font-medium">VIP Trial Booking</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-between text-white">
                        <span className="flex items-center gap-1.5">
                          <Dumbbell className="w-3.5 h-3.5" />
                          Coach Dispatch:
                        </span>
                        <span className="font-semibold">Automated</span>
                      </div>
                    </div>

                    <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                      <span>Build Status: 85%</span>
                      <span className="text-white font-semibold">Deploying Soon</span>
                    </div>
                  </div>
                ) : (
                  /* Real Client Platform Screenshot */
                  <Image
                    src={current.image || "/project-mopizza2.png"}
                    alt={`${current.client} mobile platform`}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </DeviceFrame>
        </div>

        {/* SATELLITE CARD 2 (RIGHT): Margin & Technical Outcome Telemetry */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex flex-col absolute -right-2 lg:-right-6 bottom-1/4 z-30 w-[280px] lg:w-[310px] text-left"
        >
          <TelemetryCard
            badge={current.metrics.badge}
            metric={current.metrics.metric}
            title={current.metrics.title}
            description={current.metrics.description}
            footerRight="VERIFIED SLA"
            footerLeft={current.metrics.sla}
          />
        </motion.div>

      </motion.div>

      {/* 3. Bottom Direct Live Testing Pill */}
      <div className="relative z-30 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
        <a
          href={current.liveUrl}
          target={current.isStaging ? undefined : "_blank"}
          rel={current.isStaging ? undefined : "noopener noreferrer"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
        >
          <span>{current.isStaging ? "Inquire About Early Staging Access" : `Test Live Deployment: ${current.url}`}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

    </div>
  );
}
