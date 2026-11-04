"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles,
  Server,
  Activity
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

export default function AutonomousEngineSimulator() {
  const { t, isRTL } = useTranslation();
  const sim = t.home.engineSimulator;

  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = sim.scenarios[activeScenarioIdx] || sim.scenarios[0];

  const clearCurrentTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleRunSimulation = () => {
    if (isRunning) return;
    clearCurrentTimer();
    setIsRunning(true);
    setIsFinished(false);
    setActiveStep(0);

    let step = 0;
    const totalSteps = scenario.events.length;

    timerRef.current = setInterval(() => {
      step += 1;
      if (step < totalSteps) {
        setActiveStep(step);
      } else {
        clearCurrentTimer();
        setIsRunning(false);
        setIsFinished(true);
      }
    }, 950);
  };

  const handleReset = () => {
    clearCurrentTimer();
    setIsRunning(false);
    setIsFinished(false);
    setActiveStep(-1);
  };

  const handleScenarioChange = (idx: number) => {
    clearCurrentTimer();
    setActiveScenarioIdx(idx);
    setIsRunning(false);
    setIsFinished(false);
    setActiveStep(-1);
  };

  useEffect(() => {
    return () => clearCurrentTimer();
  }, []);

  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto text-start">
      {/* 1. Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-mono font-medium mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{sim.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
            {sim.headline}
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
          {sim.subhead}
        </p>
      </div>

      {/* 2. Main Simulator Stage */}
      <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#0a0a0a] text-white border border-white/10 p-5 sm:p-8 md:p-12 shadow-2xl overflow-hidden relative">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          {/* Top Control Bar: Scenario Selector & Actions */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Scenarios Segmented Tabs */}
            <div 
              role="tablist"
              aria-label="Simulation Scenarios"
              className="flex flex-wrap sm:flex-nowrap gap-2 bg-white/5 p-1 rounded-2xl border border-white/10"
            >
              {sim.scenarios.map((sc, idx) => {
                const isActive = activeScenarioIdx === idx;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleScenarioChange(idx)}
                    className={`relative min-h-[44px] flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer text-center whitespace-nowrap ${
                      isActive ? "text-black font-semibold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSimulatorTab"
                        className="absolute inset-0 bg-white rounded-xl shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{sc.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons & System State */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isRunning 
                    ? "bg-white/10 text-white/50 cursor-not-allowed" 
                    : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? sim.statusRunning : sim.triggerBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-white/70 transition-colors cursor-pointer"
                title={sim.resetBtn}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{sim.resetBtn}</span>
              </button>
            </div>
          </div>

          {/* Scenario Overview Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-xs font-semibold">
                  {scenario.badge}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {scenario.niche}
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                {scenario.desc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-start">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">Runtime</span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-emerald-400">{scenario.speedMetric}</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-start">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">Commission</span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-white">{scenario.commissionMetric}</span>
              </div>
            </div>
          </div>

          {/* Interactive Event Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Column 1: Live Event Nodes */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-2">
                // Pipeline Event Sequence
              </span>

              {scenario.events.map((ev, idx) => {
                const isExecuted = isFinished || (activeStep >= 0 && idx <= activeStep);
                const isCurrent = activeStep === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1.01 : 1,
                      backgroundColor: isCurrent 
                        ? "rgba(16, 185, 129, 0.12)" 
                        : isExecuted 
                        ? "rgba(255, 255, 255, 0.05)" 
                        : "rgba(255, 255, 255, 0.02)",
                      borderColor: isCurrent 
                        ? "rgba(16, 185, 129, 0.4)" 
                        : isExecuted 
                        ? "rgba(255, 255, 255, 0.15)" 
                        : "rgba(255, 255, 255, 0.05)"
                    }}
                    className="p-4 sm:p-4.5 rounded-2xl border transition-colors flex items-start gap-3.5 relative overflow-hidden"
                  >
                    {/* Active pulse bar on left/right edge */}
                    {isCurrent && (
                      <div className="absolute top-0 bottom-0 start-0 w-1 bg-emerald-400" />
                    )}

                    {/* Step indicator */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isExecuted 
                        ? "bg-emerald-500 text-black shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                        : "bg-white/10 text-white/40"
                    }`}>
                      {isExecuted ? "✓" : ev.step}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`text-sm sm:text-base font-medium truncate ${
                          isExecuted ? "text-white" : "text-white/60"
                        }`}>
                          {ev.title}
                        </h4>
                        <span className="text-[11px] font-mono text-emerald-400 shrink-0 font-medium">
                          {ev.timestamp}s
                        </span>
                      </div>

                      <p className={`text-xs sm:text-sm font-light leading-relaxed mb-2 ${
                        isExecuted ? "text-white/80" : "text-white/40"
                      }`}>
                        {ev.detail}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/70">
                          {ev.system}
                        </span>
                        <span className={`px-2 py-0.5 rounded-md ${
                          isExecuted ? "bg-emerald-500/20 text-emerald-300" : "bg-white/5 text-white/30"
                        }`}>
                          {ev.badge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Column 2: Live Telemetry Terminal & Outcome */}
            <div className="flex flex-col justify-between gap-4">
              {/* Telemetry Console */}
              <div className="rounded-2xl bg-black border border-white/10 p-4 sm:p-5 font-mono text-xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/50 text-[11px]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>TELEMETRY CONSOLE // v4.2</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-400 animate-ping" : isFinished ? "bg-emerald-400" : "bg-neutral-600"}`} />
                      <span>{isRunning ? "STREAMING" : isFinished ? "SECURED" : "IDLE"}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px] sm:text-xs leading-relaxed text-white/70">
                    <p className="text-white/40">// System status: {isRunning ? sim.statusRunning : isFinished ? sim.statusComplete : sim.statusIdle}</p>
                    
                    {activeStep >= 0 && (
                      <p className="text-emerald-400">
                        &gt; [00:00.15] META_CAPI: Handshake 200 OK. Zero cookie drop.
                      </p>
                    )}
                    {activeStep >= 1 && (
                      <p className="text-white/90">
                        &gt; [00:00.38] EDGE_ROUTER: Render complete in 240ms. HTTP/2 stream active.
                      </p>
                    )}
                    {activeStep >= 2 && (
                      <p className="text-emerald-300">
                        &gt; [00:01.05] INTAKE_AGENT: Auto-qualified. Valid phone and buyer intent locked.
                      </p>
                    )}
                    {activeStep >= 3 && (
                      <p className="text-white/90">
                        &gt; [00:01.62] POSTGRES_SYNC: Encrypted ledger row committed. Cal event created.
                      </p>
                    )}
                    {activeStep >= 4 && (
                      <p className="text-emerald-400">
                        &gt; [00:01.80] DISPATCH_WEBHOOK: Push delivered to staff device in &lt; 18s.
                      </p>
                    )}
                    {isFinished && (
                      <p className="text-emerald-300 font-bold pt-2 border-t border-white/10">
                        &gt;&gt; RESULT: REVENUE SECURED · 0% COMMISSION · 100% AUTONOMOUS
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40 mt-4">
                  <span>SSL TLS 1.3 // 256-bit</span>
                  <span>PostgreSQL Edge Cluster</span>
                </div>
              </div>

              {/* Outcome Card */}
              <div className={`p-4 sm:p-5 rounded-2xl border transition-all text-start ${
                isFinished 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-white" 
                  : "bg-white/[0.02] border-white/5 text-white/60"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className={`w-4 h-4 ${isFinished ? "text-emerald-400" : "text-white/30"}`} />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    {isFinished ? "Automation Result Verified" : "Awaiting Trigger Execution"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-light leading-relaxed mb-4">
                  {scenario.resultSummary}
                </p>

                <TransitionLink
                  href="/contact"
                  className="w-full min-h-[44px] inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold transition-colors group cursor-pointer"
                >
                  <span>Build This System For My Business</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
