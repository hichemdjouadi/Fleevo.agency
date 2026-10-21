"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import TransitionLink from "./TransitionLink";
import Logo from "./Logo";
import Magnetic from "./Magnetic";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { t, isRTL } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsScrolled(scrollY.get() > 20);
  }, [scrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { label: t.nav.services, href: "/services", num: "01" },
    { label: t.nav.projects, href: "/work", num: "02" },
    { label: t.nav.about, href: "/about", num: "03" },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" }
        }}
        initial={false}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-center pointer-events-none"
      >
        <div className={`w-full max-w-[1300px] flex items-center justify-between transition-all duration-300 ease-[0.16,1,0.3,1] pointer-events-auto rounded-full ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-2xl border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-5 md:px-8 py-3" 
            : "bg-white/75 backdrop-blur-xl border border-neutral-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-5 md:px-8 py-3.5"
        }`}>
          {/* Logo */}
          <div className="w-28 md:w-36 h-7 md:h-9 relative z-[60] flex items-center">
            <TransitionLink 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t.nav.homeAria}
              className="block w-full h-full"
            >
              <Logo className={`w-full h-full transition-colors duration-300 ${isMobileMenuOpen ? "text-white" : "text-black"}`} />
            </TransitionLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 text-[14px] font-medium text-neutral-600">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <TransitionLink 
                  key={item.href}
                  href={item.href} 
                  className={`px-4 py-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isActive
                      ? "text-black bg-black/[0.07] font-semibold"
                      : "hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  {item.label}
                </TransitionLink>
              );
            })}
          </div>

          {/* CTA & Language Switcher & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 z-[60]">
            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher variant="navbar" />
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden md:block">
              <Magnetic intensity={0.3}>
                <TransitionLink 
                  href="/contact" 
                  className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-[14px] font-semibold tracking-tight transition-all shadow-sm hover:shadow active:scale-95 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    pathname === "/contact"
                      ? "bg-neutral-800 text-white ring-2 ring-black"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  {t.nav.contact}
                </TransitionLink>
              </Magnetic>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-11 h-11 flex items-center justify-center -me-1.5 transition-colors rounded-full text-black hover:bg-black/5 active:bg-black/10 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Editorial Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar with Logo & Close Button */}
            <div className="w-full flex items-center justify-between pt-2">
              <div className="w-28 h-7">
                <TransitionLink 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  aria-label={t.nav.homeAria}
                >
                  <Logo className="w-full h-full text-white" />
                </TransitionLink>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={t.nav.closeMenu}
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Nav Links */}
            <div className="flex flex-col gap-5 py-4">
              {[
                { num: "01", label: t.nav.services, href: "/services" },
                { num: "02", label: t.nav.projects, href: "/work" },
                { num: "03", label: t.nav.about, href: "/about" },
                { num: "04", label: t.nav.contact, href: "/contact" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <TransitionLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 border-b border-white/10"
                  >
                    <span className={`text-2xl sm:text-4xl font-medium tracking-tight group-hover:text-neutral-300 transition-colors ${isActive ? "text-white font-semibold" : "text-white/80"}`}>
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-white/50 group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                  </TransitionLink>
                );
              })}

              {/* Mobile Language Switcher Row */}
              <div className="pt-2">
                <div className="text-xs font-mono text-white/50 mb-2 uppercase tracking-wider">
                  {t.nav.switchLanguage}
                </div>
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>

            {/* Bottom Studio Contact Strip */}
            <div className="pt-5 border-t border-white/10 flex flex-col gap-3 text-xs font-mono text-white/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <a href="mailto:contact@fleevo.net" className="hover:text-white transition-colors">
                  contact@fleevo.net
                </a>
                <a href="tel:+213655934124" dir="ltr" className="hover:text-white transition-colors">
                  +213 655 934 124
                </a>
              </div>
              <div className="text-white/40 text-[11px]">
                {t.nav.hqNotice}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
