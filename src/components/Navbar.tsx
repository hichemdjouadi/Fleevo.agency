"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import Magnetic from "./Magnetic";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between text-white mix-blend-difference"
      >
        <div className="w-32 md:w-40 h-8 md:h-10 relative z-[60]">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="w-full h-full" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          <Link href="/services" className="hover:opacity-50 transition-opacity">Services</Link>
          <Link href="/work" className="hover:opacity-50 transition-opacity">Projects</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          
        </div>

        <div className="flex items-center gap-4 z-[60]">
          <div className="hidden md:block">
            <Magnetic intensity={0.5}>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-full text-[15px] font-medium bg-white text-black hover:bg-white/90 transition-colors">
                Contacts
              </Link>
            </Magnetic>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] bg-black text-white flex flex-col items-center justify-center gap-12"
          >
            <div className="flex flex-col items-center gap-8 text-[12vw] font-medium tracking-tighter">
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Services</Link>
              <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">Projects</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-50 transition-opacity">About</Link>
              
            </div>
            
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-12 py-5 rounded-full text-lg font-medium bg-white text-black transition-transform active:scale-95"
            >
              Contacts
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

