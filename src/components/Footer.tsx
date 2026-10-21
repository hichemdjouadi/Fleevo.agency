"use client";

import TransitionLink from "./TransitionLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { Globe, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20 sm:gap-28">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 sm:gap-16">
          
          {/* Left Side: Contacts & Offices */}
          <div className="flex flex-col gap-10">
            
            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:contact@fleevo.net" 
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:border-white transition-colors text-sm font-medium tracking-tight"
              >
                contact@fleevo.net
              </a>
              <a 
                href="https://wa.me/213655934124" 
                target="_blank" 
                rel="noreferrer" 
                dir="ltr"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:border-white transition-colors text-sm font-medium tracking-tight"
              >
                +213 655 934 124
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase mb-1">
                  {t.footer.mainStudio}
                </span>
                <span className="font-medium text-white">{t.footer.algiersHq}</span>
                <span className="text-white/70">{t.footer.algiersLocation}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase mb-1">
                  {t.footer.globalDelivery}
                </span>
                <span className="font-medium text-white">{t.footer.worldwide}</span>
                <span className="text-white/70">{t.footer.remoteInfra}</span>
              </div>
            </div>

          </div>

          {/* Right Side: Links & Language Switcher */}
          <div className="flex flex-col gap-8 items-start lg:items-end">
            <div className="grid grid-cols-2 gap-x-12 sm:gap-x-14 gap-y-4 text-sm font-medium">
              <TransitionLink href="/services" className="text-white/80 hover:text-white transition-colors">
                {t.nav.services}
              </TransitionLink>
              <TransitionLink href="/work" className="text-white/80 hover:text-white transition-colors">
                {t.nav.projects}
              </TransitionLink>
              <TransitionLink href="/about" className="text-white/80 hover:text-white transition-colors">
                {t.nav.about}
              </TransitionLink>
              <TransitionLink href="/contact" className="text-white/80 hover:text-white transition-colors">
                {t.nav.contact}
              </TransitionLink>
            </div>

            <div className="pt-2">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-white/60">
            <span>{t.footer.tagline}</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()} Fleevo</span>
          </div>

          {/* Direct channels */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/213655934124" 
              target="_blank" 
              rel="noreferrer" 
              aria-label={t.footer.whatsappAria} 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-white" />
            </a>
            <a 
              href="mailto:contact@fleevo.net" 
              aria-label={t.footer.emailAria} 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
            <TransitionLink 
              href="/contact" 
              aria-label={t.footer.contactAria} 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Globe className="w-4 h-4 text-white" />
            </TransitionLink>
          </div>
        </div>

      </div>
    </footer>
  );
}
