"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  ArrowRight, 
  Smartphone, 
  ShoppingBag, 
  Calendar, 
  MessageCircle, 
  Clock, 
  Check, 
  Send,
  Search,
  Sparkles
} from "lucide-react";

interface DemoScenario {
  id: "mopizza" | "bookstore" | "clinic";
  tabLabel: string;
  niche: string;
  client: string;
  headline: string;
  phoneUi: {
    badge: string;
    title: string;
    price: string;
    detail: string;
    buttonText: string;
    inputVal?: string;
  };
  terminalUi: {
    eventTag: string;
    customer: string;
    phone: string;
    destination: string;
    payload: string;
    latency: string;
    status: string;
  };
}

const SCENARIOS: DemoScenario[] = [
  {
    id: "mopizza",
    tabLabel: "01. Mo Pizza (WhatsApp Order)",
    niche: "Restaurant & Delivery",
    client: "Mo Pizza Restaurants",
    headline: "Direct mobile ordering without 25% app fees.",
    phoneUi: {
      badge: "Wood-Fired Pizza",
      title: "Pizza Truffe & Mozzarella",
      price: "1,450 DZD",
      detail: "Fresh dough, fior di latte, truffle cream, mushrooms.",
      buttonText: "Send Order to WhatsApp"
    },
    terminalUi: {
      eventTag: "DISPATCH // WHATSAPP TICKET",
      customer: "Sofiane M. (Hydra, Algiers)",
      phone: "+213 655 •• •• 24 (Verified)",
      destination: "Kitchen Phone & Manager WhatsApp",
      payload: "1x Truffe & Mozzarella · 1x San Pellegrino",
      latency: "0.4s edge dispatch",
      status: "Confirmed & Printed"
    }
  },
  {
    id: "bookstore",
    tabLabel: "02. Almadina Bookstore (Catalog Search)",
    niche: "Headless E-Commerce",
    client: "Almadina Bookstore",
    headline: "3,000+ publications with sub-second mobile search.",
    phoneUi: {
      badge: "Scholarly Catalog",
      title: "Tafsir Ibn Kathir (Complete 4-Vol)",
      price: "4,800 DZD",
      detail: "Verified edition. In stock for national delivery.",
      buttonText: "Order via Yalidine COD",
      inputVal: "Tafsir Ibn Kathir"
    },
    terminalUi: {
      eventTag: "HEADLESS COMMERCE // CART SYNC",
      customer: "Kamel B. (Setif Centre)",
      phone: "+213 550 •• •• 89 (Verified)",
      destination: "Yalidine Express Logistics API",
      payload: "4-Vol Boxset · Tracking #YAL-849204",
      latency: "28ms catalog query",
      status: "Ready for Pickup"
    }
  },
  {
    id: "clinic",
    tabLabel: "03. Medical Clinic (Direct Consultation)",
    niche: "Private Healthcare",
    client: "Cabinet Dentaire Dr. Amine",
    headline: "Pre-screened patient appointments routed to WhatsApp.",
    phoneUi: {
      badge: "Dental Surgery",
      title: "Orthodontic Consultation",
      price: "Deposit Confirmed",
      detail: "Patient triage: Aesthetic alignment & scan.",
      buttonText: "Confirm Slot via WhatsApp"
    },
    terminalUi: {
      eventTag: "INTAKE GATEWAY // PATIENT VERIFIED",
      customer: "Amina T. (Sidi Yahia)",
      phone: "+213 770 •• •• 12 (Verified)",
      destination: "Clinic WhatsApp & Secretary Calendar",
      payload: "Slot: Tuesday 15:30 · Orthodontics",
      latency: "Under 60s patient triage",
      status: "Calendar Synced"
    }
  }
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [orderedCount, setOrderedCount] = useState<number>(142);
  const [isClickingOrder, setIsClickingOrder] = useState<boolean>(false);

  // 3D Tilt Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Auto rotation when idle
  useEffect(() => {
    if (isInteracting) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SCENARIOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isInteracting]);

  const current = SCENARIOS[activeTab];

  const handleSimulateOrder = () => {
    setIsClickingOrder(true);
    setOrderedCount((prev) => prev + 1);
    setTimeout(() => {
      setIsClickingOrder(false);
    }, 800);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative w-full h-full bg-[#070709] border border-white/10 rounded-[32px] md:rounded-[40px] p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden select-none transition-shadow duration-500 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Top Header & Scenario Switcher */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
          </div>
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-white/90 font-semibold block">
              Interactive Deployment Engine
            </span>
            <span className="text-[11px] font-mono text-white/40">
              Live Test Mode · Simulated Algerian Infrastructure
            </span>
          </div>
        </div>

        {/* Interactive Scenario Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#121218] p-1.5 rounded-2xl border border-white/10">
          {SCENARIOS.map((scen, idx) => (
            <button
              key={scen.id}
              onClick={() => {
                setIsInteracting(true);
                setActiveTab(idx);
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === idx
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {scen.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Main Staging Bay: Left Phone UI, Right Automated Dispatch */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        
        {/* Left: Photorealistic Mobile Screen Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] bg-[#0c0c10] border-[2px] border-white/15 rounded-[36px] p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between aspect-[9/16] max-h-[460px]">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center border border-white/5">
              <div className="w-2 h-2 rounded-full bg-neutral-800 mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
            </div>

            {/* Mobile Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Mock Browser URL Bar */}
                  <div className="bg-black/60 rounded-xl px-3 py-1.5 border border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50 mb-4">
                    <span className="truncate">https://{current.client.toLowerCase().replace(/[^a-z]/g, "")}.dz</span>
                    <span className="text-emerald-400 text-[9px]">SSL · 4G</span>
                  </div>

                  {/* Search Bar for Bookstore */}
                  {current.phoneUi.inputVal && (
                    <div className="mb-3 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2 text-xs text-white/80">
                      <Search className="w-3.5 h-3.5 text-white/40" />
                      <span className="font-mono text-xs text-white">{current.phoneUi.inputVal}</span>
                      <span className="ml-auto text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">28ms</span>
                    </div>
                  )}

                  {/* Product / Service Card */}
                  <div className="bg-[#15151c] border border-white/10 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block">
                      {current.phoneUi.badge}
                    </span>
                    <h5 className="text-base font-semibold text-white tracking-tight">
                      {current.phoneUi.title}
                    </h5>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {current.phoneUi.detail}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-white">
                        {current.phoneUi.price}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Zero 3rd-party cut
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Clickable CTA Button on Mobile */}
                <div className="pt-4">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={handleSimulateOrder}
                    className={`w-full py-3.5 px-4 rounded-2xl font-medium text-xs flex items-center justify-center gap-2 shadow-lg transition-all ${
                      isClickingOrder
                        ? "bg-emerald-500 text-black font-bold scale-95"
                        : "bg-white text-black hover:bg-neutral-100"
                    }`}
                  >
                    {isClickingOrder ? (
                      <>
                        <Check className="w-4 h-4 text-black" />
                        <span>Ticket Dispatched!</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-black/20" />
                        <span>{current.phoneUi.buttonText}</span>
                      </>
                    )}
                  </motion.button>
                  <span className="text-[9px] font-mono text-white/30 text-center block mt-2">
                    (Click to test WhatsApp dispatch simulation)
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: The Automated Terminal (What Happens Behind the Scenes) */}
        <div className="lg:col-span-7 bg-[#0d0d12]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8 flex flex-col justify-between shadow-2xl h-full min-h-[420px]">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                  {current.terminalUi.eventTag}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live WhatsApp Hook</span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-2">
              {current.headline}
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light mb-6">
              When a buyer taps the button on their phone, the entire ticket details, phone verification, and delivery address route directly without manual intervention.
            </p>

            {/* Terminal Parameter Cards */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-white/40 uppercase">Customer & Location:</span>
                <span className="text-white font-medium">{current.terminalUi.customer}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-white/40 uppercase">Verified WhatsApp:</span>
                <span className="text-emerald-400 font-medium">{current.terminalUi.phone}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-white/40 uppercase">Payload Items:</span>
                <span className="text-white font-medium">{current.terminalUi.payload}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-emerald-300">
                <span className="uppercase text-emerald-400 font-semibold">Destination:</span>
                <span className="font-bold">{current.terminalUi.destination}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-4 text-white/60">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                {current.terminalUi.latency}
              </span>
              <span>•</span>
              <span className="text-white/80">{current.terminalUi.status}</span>
            </div>

            <div className="text-[11px] text-white/40">
              Simulated dispatches today: <span className="text-white font-bold">{orderedCount}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer System Stats Bar */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          EDGE PLATFORM: NEXT.JS 16 // SUPABASE // DIRECT WHATSAPP DISPATCH
        </span>
        <span className="text-white/70">
          ALGERIAN MOBILE 4G OPTIMIZED · ZERO APP COMMISSIONS
        </span>
      </div>
    </motion.div>
  );
}
