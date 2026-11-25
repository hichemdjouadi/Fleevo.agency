"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const next = window.scrollY > 16;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    document.body.style.overflow = "";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: t.nav.work, href: "/work" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[0.08]"
            : "bg-white/85 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 h-[68px] md:h-[80px] flex items-center justify-between gap-4">
          <TransitionLink
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label={t.nav.homeAria}
            className="inline-flex items-center min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
          >
            <Logo className="h-6 md:h-7 w-auto text-[#0b0b0c]" />
          </TransitionLink>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8 lg:gap-11 text-[15px] font-medium"
          >
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/work" && pathname?.startsWith("/work/"));
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className={`py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md ${
                    isActive
                      ? "text-[#0b0b0c] font-semibold"
                      : "text-neutral-600 hover:text-[#0b0b0c]"
                  }`}
                >
                  {item.label}
                </TransitionLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher variant="navbar" />
            </div>

            <div className="md:hidden">
              <LanguageSwitcher variant="navbar" />
            </div>

            <TransitionLink
              href="/contact?mode=audit"
              className="hidden md:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {t.nav.auditCta}
            </TransitionLink>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-11 h-11 rounded-full bg-[#0b0b0c] text-white flex items-center justify-center hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            paddingTop: "max(1.25rem, env(safe-area-inset-top))",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
          className="fixed inset-0 z-[100] bg-[#0b0b0c] text-white flex flex-col justify-between px-6 min-h-[100dvh] overflow-y-auto animate-[fleevyFadeIn_180ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          <div className="flex items-center justify-between h-14">
            <TransitionLink
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t.nav.homeAria}
              className="inline-flex items-center min-h-[44px]"
            >
              <Logo className="h-6 w-auto text-white" />
            </TransitionLink>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t.nav.closeMenu}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col py-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-4 min-h-[56px] border-b border-white/12 flex items-center justify-between text-3xl font-medium tracking-tight transition-colors ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                </TransitionLink>
              );
            })}

            <div className="pt-6">
              <TransitionLink
                href="/contact?mode=audit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] inline-flex items-center justify-center rounded-full bg-white text-[#0b0b0c] text-base font-semibold"
              >
                {t.common.bookAudit}
              </TransitionLink>
            </div>

            <div className="pt-6">
              <div className="text-xs font-medium text-white/60 mb-2">
                {t.nav.switchLanguage}
              </div>
              <LanguageSwitcher variant="mobile" />
            </div>
          </nav>

          <div className="pt-5 border-t border-white/12 flex flex-col gap-2 text-sm text-white/75">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <a
                href="mailto:contact@fleevy.net"
                className="py-2 hover:text-white transition-colors"
              >
                contact@fleevy.net
              </a>
              <a
                href="https://wa.me/213655934124"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="py-2 hover:text-white transition-colors"
              >
                +213 655 934 124
              </a>
            </div>
            <div className="text-xs text-white/55">{t.nav.hqNotice}</div>
          </div>
        </div>
      )}
    </>
  );
}
