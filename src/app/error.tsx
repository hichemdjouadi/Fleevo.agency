"use client";

import { useEffect } from "react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="flex flex-col items-center text-center space-y-8 max-w-xl relative z-10">
        <h2 className="text-[6vw] md:text-[4vw] font-medium tracking-tighter leading-none">
          Systems <span className="italic text-white/50">offline.</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light">
          We encountered an anomaly in the deployment architecture. 
        </p>
        <div className="flex gap-4 pt-8">
          <Magnetic intensity={0.5}>
            <button
              onClick={() => reset()}
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors duration-500"
            >
              Reboot Engine
            </button>
          </Magnetic>
          <Magnetic intensity={0.5}>
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-500"
            >
              Return Base
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
