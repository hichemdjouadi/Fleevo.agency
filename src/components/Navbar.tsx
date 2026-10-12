"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import TransitionLink from "./TransitionLink";
import Logo from "./Logo";
import Magnetic from "./Magnetic";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsScrolled(scrollY.get() > 20);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
            ? "bg-white/90 backdrop-blur-2xl border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-6 md:px-8 py-3" 
            : "bg-white/75 backdrop-blur-xl border border-neutral-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-6 md:px-8 py-3.5"
        }`}>
          {/* Logo */}
          <div className="w-28 md:w-36 h-7 md:h-9 relative z-[60] flex items-center">
            <TransitionLink 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fleevy Home"
              className="block w-full h-full"
            >
              <Logo className={`w-full h-full transition-colors duration-300 ${isMobileMenuOpen ? "text-white" : "text-black"}`} />
            </TransitionLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 text-[14px] font-medium text-neutral-600">
            <TransitionLink 
              href="/services" 
              className={`px-4 py-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                pathname === "/services"
                  ? "text-black bg-black/[0.07] font-semibold"
                  : "hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              Services
            </TransitionLink>
            <TransitionLink 
              href="/work" 
              className={`px-4 py-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                pathname === "/work"
                  ? "text-black bg-black/[0.07] font-semibold"
                  : "hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              Projects
            </TransitionLink>
            <TransitionLink 
              href="/about" 
              className={`px-4 py-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                pathname === "/about"
                  ? "text-black bg-black/[0.07] font-semibold"
                  : "hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              About
            </TransitionLink>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 z-[60]">
            <div className="hidden md:block">
              <Magnetic intensity={0.3}>
                <TransitionLink 
                  href="/contact" 
                  className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-semibold tracking-tight transition-all shadow-sm hover:shadow active:scale-95 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    pathname === "/contact"
                      ? "bg-neutral-800 text-white ring-2 ring-black"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  Contact
                </TransitionLink>
              </Magnetic>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 -mr-1 transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                isMobileMenuOpen ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-black text-white flex flex-col items-center justify-center gap-10 px-6"
          >
            <div className="flex flex-col items-center gap-6 text-[11vw] sm:text-[48px] font-medium tracking-tighter">
              <TransitionLink 
                href="/services" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`transition-all ${pathname === '/services' ? 'text-white font-semibold underline underline-offset-8' : 'text-white/60 hover:text-white'}`}
              >
                Services
              </TransitionLink>
              <TransitionLink 
                href="/work" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`transition-all ${pathname === '/work' ? 'text-white font-semibold underline underline-offset-8' : 'text-white/60 hover:text-white'}`}
              >
                Projects
              </TransitionLink>
              <TransitionLink 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`transition-all ${pathname === '/about' ? 'text-white font-semibold underline underline-offset-8' : 'text-white/60 hover:text-white'}`}
              >
                About
              </TransitionLink>
            </div>
            
            <TransitionLink 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`mt-6 px-10 py-4 rounded-full text-base font-semibold transition-transform active:scale-95 shadow-2xl ${
                pathname === '/contact'
                  ? 'bg-neutral-200 text-black font-bold ring-2 ring-white'
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
            >
              Contact
            </TransitionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
