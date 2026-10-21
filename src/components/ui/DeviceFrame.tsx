"use client";

import { ReactNode } from "react";

interface DeviceFrameProps {
  url?: string;
  statusBadge?: string;
  statusDotColor?: string;
  children: ReactNode;
  className?: string;
}

export default function DeviceFrame({
  url = "fleevo.net",
  statusBadge = "Live",
  statusDotColor,
  children,
  className = ""
}: DeviceFrameProps) {
  return (
    <div
      className={`relative w-[280px] sm:w-[340px] lg:w-[360px] aspect-[9/19.5] rounded-[36px] sm:rounded-[44px] overflow-hidden bg-[#050505] flex flex-col justify-between ring-2 sm:ring-4 ring-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] sm:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.35)] border border-white/10 shrink-0 ${className}`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-2 sm:px-2.5 shadow-sm border border-white/5">
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#1c1c20]" />
        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#121214]" />
      </div>

      {/* Minimal Mobile Browser Bar */}
      <div className="pt-8 sm:pt-9 pb-2 sm:pb-2.5 px-3.5 sm:px-4 border-b border-white/10 flex items-center justify-between gap-2 text-[11px] sm:text-xs rtl:font-sans ltr:font-mono text-white/80 z-20 bg-[#08080c]">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 animate-pulse ${statusDotColor || "bg-emerald-400"}`} />
          <span dir="ltr" className="text-white/90 truncate">{url}</span>
        </div>
        {statusBadge && (
          <span className="text-[10px] sm:text-xs rtl:font-sans ltr:font-mono font-medium text-white/90 shrink-0">
            {statusBadge}
          </span>
        )}
      </div>

      {/* Device Viewport Canvas */}
      <div className="relative flex-1 w-full overflow-hidden bg-neutral-900">
        {children}
      </div>

      {/* Bottom Hardware Home Indicator */}
      <div className="py-2 sm:py-2.5 flex justify-center z-20 border-t border-white/5 bg-[#050505]">
        <div className="w-24 sm:w-28 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}
