import type { Metadata } from "next";
import { Manrope, Cairo } from "next/font/google";
import "./globals.css";
import MobileQuickAction from "@/components/MobileQuickAction";
import { LanguageProvider } from "@/lib/i18n";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const DIRECTION_CONTRACT = `<!--
THESIS: Fleevy unites high-velocity platforms (funnels, 58-wilaya stores, CRMs, domain AI agents) with Meta ads and audits; it refuses generic dark-terminal SaaS badges and glowing slop.
OWN-WORLD: Pure monochrome Cuberto x Clay system (#FFFFFF ground, #0B0B0C obsidian bands and CTAs, #F4F4F6 framing plates, Manrope Latin + Cairo RTL Arabic); only real client project media carries color.
STORY: Visitors immediately see live client builds on mobile and desktop, verify their niche and margin leak in DZD or USD, review three clear packages, and request a free 48h video audit or WhatsApp review.
FIRST VIEWPORT: Clean single-row header with Fleevy logo, bold display headline and dual pill CTAs paired with an interactive Funnel/Store/CRM showcase plate, leading into staggered Selected Work.
FORM: Approved mobile-first Cuberto x Clay pure-monochrome canon (position: user-pinned category canon; seed key: a209cc01).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fleevy",
  url: "https://fleevy.net",
  email: "contact@fleevy.net",
  telephone: "+213655934124",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Algiers",
    addressCountry: "DZ",
  },
  description:
    "Customer acquisition systems and digital infrastructure: high-speed websites, 58-wilaya e-commerce engines, custom CRMs, domain AI agents, and Meta ad growth.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fleevy.net"),
  title: {
    default: "Fleevy | Customer Acquisition Systems & Digital Infrastructure",
    template: "%s | Fleevy",
  },
  description:
    "We build fast websites, e-commerce stores, custom CRMs, and domain AI agents — paired with Meta ads and funnel audits that turn visitors into qualified buyers.",
  openGraph: {
    title: "Fleevy | Customer Acquisition Systems & Digital Infrastructure",
    description:
      "Custom web platforms, e-commerce engines, internal CRMs, domain AI agents, and Meta ads built by senior engineers.",
    url: "https://fleevy.net",
    siteName: "Fleevy",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fleevy | Customer Acquisition Systems & Digital Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleevy | Customer Acquisition Systems & Digital Infrastructure",
    description:
      "Custom web platforms, e-commerce engines, internal CRMs, domain AI agents, and Meta ads built by senior engineers.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var p = new URLSearchParams(window.location.search).get('lang');
                var nav = (navigator.language || '').toLowerCase().slice(0, 2);
                var s = p || localStorage.getItem('fleevy_lang') || localStorage.getItem('fleevo_lang') || (document.cookie.match(/(?:^|; )(?:fleevy_locale|fleevo_locale)=([^;]*)/) || [])[1] || (nav === 'ar' || nav === 'fr' ? nav : 'en');
                if (s === 'ar') {
                  document.documentElement.lang = 'ar';
                  document.documentElement.dir = 'rtl';
                  document.documentElement.classList.add('locale-ar');
                } else if (s === 'fr') {
                  document.documentElement.lang = 'fr';
                  document.documentElement.dir = 'ltr';
                }
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${cairo.variable} font-sans antialiased bg-white text-[#0b0b0c] selection:bg-[#0b0b0c] selection:text-white`}
        suppressHydrationWarning
      >
        <div
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }}
        />
        <LanguageProvider>
          {children}
          <MobileQuickAction />
        </LanguageProvider>
      </body>
    </html>
  );
}
