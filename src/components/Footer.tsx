"use client";

import TransitionLink from "./TransitionLink";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#0b0b0c] text-white border-t border-white/12">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pt-12 pb-28 md:py-16 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Brand & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <TransitionLink href="/" aria-label={t.nav.homeAria} className="inline-flex w-fit">
              <Logo className="h-6 w-auto text-white" />
            </TransitionLink>
            <span className="text-sm text-white/75">{t.footer.hq}</span>
          </div>

          {/* Route Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/85"
          >
            <TransitionLink href="/work" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors">
              {t.nav.work}
            </TransitionLink>
            <TransitionLink href="/services" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors">
              {t.nav.services}
            </TransitionLink>
            <TransitionLink href="/about" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors">
              {t.nav.about}
            </TransitionLink>
            <TransitionLink href="/contact" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors">
              {t.nav.contact}
            </TransitionLink>
            <TransitionLink href="/privacy" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors">
              {t.footer.privacy}
            </TransitionLink>
          </nav>

          {/* Direct Channels + Language */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:contact@fleevy.net"
              aria-label={t.footer.emailAria}
              className="inline-flex items-center gap-2 min-h-[40px] px-4 rounded-full border border-white/15 text-xs sm:text-sm text-white/85 hover:text-white hover:border-white/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>contact@fleevy.net</span>
            </a>
            <a
              href="https://wa.me/213655934124"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.whatsappAria}
              dir="ltr"
              className="inline-flex items-center gap-2 min-h-[40px] px-4 rounded-full border border-white/15 text-xs sm:text-sm text-white/85 hover:text-white hover:border-white/40 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>+213 655 934 124</span>
            </a>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/75">
          <span>{t.footer.tagline}</span>
          <span>&copy; {new Date().getFullYear()} {t.common.brand}</span>
        </div>
      </div>
    </footer>
  );
}
