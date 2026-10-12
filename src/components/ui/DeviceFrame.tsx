"use client";

import { ReactNode } from "react";

interface DeviceFrameProps {
  url?: string;
  statusBadge?: string;
  children: ReactNode;
  className?: string;
}

export default function DeviceFrame({
  url = "fleevo.agency",
  statusBadge = "4G · <50ms",
  children,
  className = ""
}: DeviceFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] bg-black border-[5px] sm:border-[6px] border-neutral-900 rounded-[48px] p-2 sm:p-2.5 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.3)] ${className}`}
    >
      {/* Outer Screen Bezel */}
      <div className="relative rounded-[40px] overflow-hidden bg-neutral-950 aspect-[9/18.5] flex flex-col justify-between border border-white/10">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-neutral-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
        </div>

        {/* Minimal Mobile Browser Bar */}
        <div className="pt-9 pb-2 px-3.5 bg-neutral-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/70 z-20">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="truncate text-white/80">{url}</span>
          </div>
          {statusBadge && (
            <span className="text-xs font-mono font-medium tracking-wider text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 shrink-0">
              {statusBadge}
            </span>
          )}
        </div>

        {/* Device Viewport Canvas */}
        <div className="relative flex-1 w-full bg-neutral-950 overflow-hidden">
          {children}
        </div>

        {/* Bottom Hardware Home Indicator */}
        <div className="py-2 bg-neutral-900/90 flex justify-center z-20 border-t border-white/5">
          <div className="w-28 h-1 bg-white/30 rounded-full" />
        </div>

      </div>
    </div>
  );
}
