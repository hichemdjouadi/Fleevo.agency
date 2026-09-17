"use client";

import Link from "next/link";
import { Globe, Mail, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-32">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          {/* Left Side: Contacts & Offices */}
          <div className="flex flex-col gap-12">
            
            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:contact@fleevo.com" className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:border-white transition-colors text-sm font-medium">
                contact@fleevo.com
              </a>
              <a href="https://wa.me/213655934124" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:border-white transition-colors text-sm font-medium">
                +213 655 934 124
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[10px] text-white/50 tracking-widest uppercase mb-1">Main Office</span>
                <span className="font-medium">Algiers HQ</span>
                <span className="text-white/80">Algiers, Algeria</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[10px] text-white/50 tracking-widest uppercase mb-1">Second Office</span>
                <span className="font-medium">Global</span>
                <span className="text-white/80">Remote Distribution</span>
              </div>
            </div>

          </div>

          {/* Right Side: Links */}
          <div className="flex">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium">
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <Link href="/work" className="hover:text-white/70 transition-colors">Projects</Link>
              <Link href="/workflow" className="hover:text-white/70 transition-colors">Workflow</Link>
              <Link href="/about" className="hover:text-white/70 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white/70 transition-colors">Contacts</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="flex items-center gap-4 text-[10px] text-white/60">
            <Link href="#" className="hover:text-white font-medium transition-colors">Privacy Policy</Link>
            <span>&copy; {new Date().getFullYear()} Fleevo</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <MessageSquare className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Share2 className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Globe className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

