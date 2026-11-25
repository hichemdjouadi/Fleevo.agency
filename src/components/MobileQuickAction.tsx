"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, ArrowRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { useTranslation } from "@/lib/i18n";

export default function MobileQuickAction() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [hasScrolled, setHasScrolled] = useState(false);

  const isExcludedRoute =
    Boolean(pathname?.startsWith("/admin")) || Boolean(pathname?.startsWith("/contact"));

  useEffect(() => {
    if (isExcludedRoute) {
      return;
    }

    const handleScroll = () => {
      const next = window.scrollY > 360;
      setHasScrolled((prev) => (prev === next ? prev : next));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExcludedRoute]);

  if (isExcludedRoute) return null;

  const isVisible = hasScrolled;
  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(
    t.contact.whatsappCard.prefillMessage
  )}`;

  return (
    <div
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!isVisible}
      className={`fixed bottom-3 inset-x-4 z-40 md:hidden max-w-md mx-auto transition-[opacity,transform] duration-200 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0b0b0c]/95 backdrop-blur-md border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
        <TransitionLink
          href="/contact?mode=audit"
          tabIndex={isVisible ? undefined : -1}
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
          tabIndex={isVisible ? undefined : -1}
          className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
