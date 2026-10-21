"use client";

import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  const { t, isRTL } = useTranslation();
  const nf = t.notFound;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 selection:bg-white selection:text-black relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="flex flex-col items-center text-center space-y-8 max-w-xl relative z-10">
        {/* Monospace route status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs rtl:font-sans ltr:font-mono text-white/80 font-medium">
          <Compass className="w-3.5 h-3.5 text-neutral-400" />
          <span>{nf.badge}</span>
        </div>

        {/* Display headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-none text-balance">
          {nf.title}
          <span className="rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic text-white/50 font-light">
            {nf.titleItalic}
          </span>
        </h1>

        {/* Descriptive message */}
        <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-md text-pretty">
          {nf.message}
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 w-full sm:w-auto">
          <Magnetic intensity={0.4}>
            <TransitionLink
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs rtl:font-sans ltr:font-mono font-semibold tracking-wider uppercase border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors duration-300 inline-flex items-center justify-center gap-2 group"
            >
              <span>{nf.returnHome}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </TransitionLink>
          </Magnetic>

          <Magnetic intensity={0.4}>
            <TransitionLink
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs rtl:font-sans ltr:font-mono font-medium tracking-wider uppercase border border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <span>{nf.exploreServices}</span>
            </TransitionLink>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
