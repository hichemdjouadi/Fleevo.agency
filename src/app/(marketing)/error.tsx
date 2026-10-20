"use client";

import { useEffect } from "react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="flex flex-col items-center text-center space-y-8 max-w-xl relative z-10">
        <h2 className="text-[6vw] md:text-[4vw] font-medium tracking-tighter leading-none">
          {t.error.title}<span className="italic text-white/50">{t.error.titleItalic}</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light">
          {t.error.message}
        </p>
        <div className="flex gap-4 pt-8">
          <Magnetic intensity={0.5}>
            <button
              onClick={() => reset()}
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors duration-500"
            >
              {t.error.reboot}
            </button>
          </Magnetic>
          <Magnetic intensity={0.5}>
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-500"
            >
              {t.error.returnBase}
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
