"use client";

import { ReactNode } from "react";

interface DeviceFrameProps {
  url?: string;
  statusBadge?: string;
  children: ReactNode;
  className?: string;
}

export default function DeviceFrame({
  url = "fleevy.agency",
  statusBadge = "Live",
  children,
  className = ""
}: DeviceFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[380px] rounded-[42px] overflow-hidden bg-[#050505] aspect-[9/18.5] flex flex-col justify-between ring-4 ring-black shadow-[0_30px_80px_-15px_rgba(0,0,0,0.35)] ${className}`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
        <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
      </div>

      {/* Minimal Mobile Browser Bar */}
      <div className="pt-9 pb-2.5 px-4 border-b border-white/10 flex items-center justify-between gap-2 text-xs font-mono text-white/80 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
          <span className="text-white/90">{url}</span>
        </div>
        {statusBadge && (
          <span className="text-xs font-mono font-medium text-white/90 shrink-0">
            {statusBadge}
          </span>
        )}
      </div>

      {/* Device Viewport Canvas */}
      <div className="relative flex-1 w-full overflow-hidden">
        {children}
      </div>

      {/* Bottom Hardware Home Indicator */}
      <div className="py-2 flex justify-center z-20 border-t border-white/5">
        <div className="w-28 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}
