import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
