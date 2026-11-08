"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function MobileQuickAction() {
  const { locale, isRTL } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 260px, hide when near top
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = {
    en: {
      label: "Technical Desk",
      status: "Live & Available",
      btn: "WhatsApp Chat",
      msg: "Hi Hichem, I'm reviewing Fleevy and would like to ask a technical question about an acquisition system for my business."
    },
    fr: {
      label: "Support Technique",
      status: "En direct",
      btn: "Échanger sur WhatsApp",
      msg: "Bonjour Hichem, je consulte Fleevy et souhaite poser une question technique sur un système d'acquisition pour mon entreprise."
    },
    ar: {
      label: "المكتب التقني المباشر",
      status: "متاح الآن",
      btn: "تواصل عبر واتساب",
      msg: "مرحباً هشام، أطلع حالياً على منصة فليفي وأرغب في استفسار تقني حول بناء نظام اكتساب لمشروعي."
    }
  }[locale];

  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(copy.msg)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-4 inset-x-3 sm:inset-x-6 z-40 md:hidden max-w-md mx-auto pointer-events-auto"
        >
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 ps-3.5 pe-2.5 rounded-full bg-[#0a0a0d]/95 backdrop-blur-2xl border border-white/20 text-white shadow-[0_16px_40px_rgba(0,0,0,0.6)] group active:scale-[0.98] transition-transform"
          >
            {/* Status & Label */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="flex flex-col text-start min-w-0">
                <span className="text-xs font-semibold text-white truncate leading-tight">
                  {copy.label}
                </span>
                <span className="text-[10px] font-mono text-emerald-400/90 leading-tight">
                  {copy.status}
                </span>
              </div>
            </div>

            {/* Action Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 shadow-md">
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>{copy.btn}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
