import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleevy.com"),
  title: "Fleevy | Websites & Mobile Sales Engines",
  description: "Fast, custom websites and direct WhatsApp ordering platforms for restaurants, storefronts, and service businesses. Delivered in weeks.",
  openGraph: {
    title: "Fleevy | Websites & Mobile Sales Engines",
    description: "Fast, custom websites and direct WhatsApp ordering platforms for restaurants, storefronts, and service businesses.",
    url: "https://fleevy.com",
    siteName: "Fleevy",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fleevy Platforms & Sales Engines",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleevy | Websites & Mobile Sales Engines",
    description: "Fast, custom websites and direct WhatsApp ordering platforms for restaurants, storefronts, and service businesses.",
    images: ["/opengraph-image.jpg"],
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
