"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { useTranslation } from "@/lib/i18n";

export default function MobileQuickAction() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const isExcludedRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/contact");

  useEffect(() => {
    if (isExcludedRoute) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExcludedRoute]);

  if (isExcludedRoute) return null;

  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(
    t.contact.whatsappCard.prefillMessage
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          className="fixed bottom-3 inset-x-4 z-40 md:hidden max-w-md mx-auto pointer-events-auto"
        >
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0b0b0c]/95 backdrop-blur-md border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
            <TransitionLink
              href="/contact?mode=audit"
              className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 rounded-full bg-white text-[#0b0b0c] text-xs font-semibold"
            >
              <span>{t.mobileQuickBar.auditBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
            </TransitionLink>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.mobileQuickBar.whatsappAria}
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
