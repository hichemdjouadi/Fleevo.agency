import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import BlueprintToggle from "@/components/BlueprintToggle";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleevo.com"),
  title: "Fleevo | Global Digital Product Agency",
  description: "We engineer autonomous profit engines for high-ticket service brands. Replacing slow, static brochures with Next.js & Supabase infrastructure.",
  openGraph: {
    title: "Fleevo | Global Digital Product Agency",
    description: "We engineer autonomous profit engines for high-ticket service brands.",
    url: "https://fleevo.com",
    siteName: "Fleevo",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fleevo Agency Architecture",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleevo | Global Digital Product Agency",
    description: "We engineer autonomous profit engines for high-ticket service brands.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black md:cursor-none" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased bg-white overflow-x-hidden md:cursor-none`} suppressHydrationWarning>
        <Preloader />
        <div className="fixed inset-0 z-[40] pointer-events-none opacity-[0.02] bg-noise mix-blend-multiply" />
        <CustomCursor />
        <ScrollProgress />
        <BlueprintToggle />
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
