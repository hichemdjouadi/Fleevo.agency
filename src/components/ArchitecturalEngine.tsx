"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LayerData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  spec: string;
  metrics: { label: string; value: string }[];
  technicalFlow: string[];
  sla: string;
}

const LAYERS: LayerData[] = [
  {
    id: "speed",
    number: "01",
    title: "Sub-Second Mobile Architecture",
    subtitle: "Built for Local 4G & Mobile Connections",
    spec: "Built with custom Next.js code instead of heavy WordPress themes. Pages render in under 1 second on mobile phones, keeping visitors focused on your offer without loading delays.",
    metrics: [
      { label: "Mobile Load Speed", value: "< 1.0s" },
      { label: "Core Web Vitals", value: "100 / 100" },
      { label: "Code Overhead", value: "Zero Bloat" }
    ],
    technicalFlow: [
      "Custom React code optimized for mobile screens and slow connections",
      "Images compressed and served instantly from edge servers",
      "Zero third-party script bloat that slows down customer checkout"
    ],
    sla: "Loads fast across all mobile devices"
  },
  {
    id: "whatsapp",
    number: "02",
    title: "Direct WhatsApp & Call Routing",
    subtitle: "Zero Middleman Fees, Instant Notifications",
    spec: "Every inquiry, table booking, or order is wired directly into your WhatsApp and phone within seconds. You speak directly to the customer while their interest is fresh, with zero third-party app cuts.",
    metrics: [
      { label: "Routing Speed", value: "< 5s" },
      { label: "Platform Commission", value: "0%" },
      { label: "Customer Contact", value: "Direct" }
    ],
    technicalFlow: [
      "Customer fills out order or consultation request on mobile",
      "Formatted ticket with customer details dispatches to your WhatsApp",
      "Confirmation displayed instantly to the buyer on their screen"
    ],
    sla: "Orders and inquiries land straight in your pocket"
  },
  {
    id: "database",
    number: "03",
    title: "Secure Database & Order Intake",
    subtitle: "Private Storage & Automated Logging",
    spec: "Your customer inquiries and orders are safely stored in a dedicated Supabase database. No lost emails, no messy spreadsheets, and no forgotten follow-ups.",
    metrics: [
      { label: "Data Retention", value: "100%" },
      { label: "Lookup Latency", value: "< 200ms" },
      { label: "Manual Data Entry", value: "None" }
    ],
    technicalFlow: [
      "Inbound submission verified and saved instantly to secure database",
      "Automatic email and notification triggers dispatched to your team",
      "Synced directly to your private agency command dashboard"
    ],
    sla: "Every inquiry safely logged with zero data loss"
  },
  {
    id: "dashboard",
    number: "04",
    title: "Private Command Dashboard",
    subtitle: "Track Inquiries, Orders, & Customer Status",
    spec: "A clean internal dashboard where you can see all your incoming inquiries, update client statuses, and monitor your business pipeline from desktop or phone.",
    metrics: [
      { label: "Pipeline Visibility", value: "Real-Time" },
      { label: "Device Support", value: "Mobile + PC" },
      { label: "Access Security", value: "Encrypted" }
    ],
    technicalFlow: [
      "Single private login to view all new customer inquiries",
      "Update lead statuses and track client communication history",
      "Easy management of product menus, catalog items, and hours"
    ],
    sla: "Full operational control with zero technical complexity"
  }
];

export default function ArchitecturalEngine() {
  const [activeLayer, setActiveLayer] = useState<string>("speed");
  const selected = LAYERS.find((l) => l.id === activeLayer) || LAYERS[0];

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 text-black">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-black">
            The Four Core <br />
            <span className="text-black/40 italic font-light">Technical Standards.</span>
          </h2>
        </div>
        <p className="text-base md:text-lg text-black/70 max-w-md font-light leading-relaxed">
          We don't build generic brochure templates. We engineer fast, connected systems designed to bring in paying customers.
        </p>
      </div>

      {/* Interactive Layer Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Layer Selectors (Left Column: Brutalist Hairline Divided List) */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
          {LAYERS.map((layer) => {
            const isActive = layer.id === activeLayer;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`text-left py-6 px-4 md:px-6 transition-all duration-300 relative group flex items-start justify-between ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black/[0.03]"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-xs tracking-[0.2em] font-semibold block mb-1 ${
                      isActive ? "text-white/60" : "text-black/40"
                    }`}
                  >
                    LAYER {layer.number}
                  </span>
                  <span className="block text-xl md:text-2xl font-medium tracking-tight mb-1">
                    {layer.title}
                  </span>
                  <p
                    className={`text-sm font-light ${
                      isActive ? "text-white/70" : "text-black/60"
                    }`}
                  >
                    {layer.subtitle}
                  </p>
                </div>
                <ArrowUpRight
                  className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-300 ${
                    isActive
                      ? "text-white translate-x-0.5 -translate-y-0.5"
                      : "text-black/30 group-hover:text-black group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Live Layer Telemetry & Blueprint (Right Column) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-black text-white p-8 md:p-12 rounded-[3rem] border border-black flex flex-col gap-10 min-h-[520px] justify-between relative overflow-hidden"
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60">
                      Layer {selected.number} Blueprint
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/50 tracking-wider">
                    {selected.sla}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
                  {selected.title}
                </h3>
                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                  {selected.spec}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/10">
                {selected.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-mono font-medium tracking-tight text-white">
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-white/50">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical Flow Execution */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 block mb-4">
                  How It Operates
                </span>
                <div className="space-y-3 font-light text-sm md:text-base text-white/80">
                  {selected.technicalFlow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-white/40 pt-1">0{idx + 1}</span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
