import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleevo.net"),
  title: "Fleevo | Customer Acquisition Systems & Digital Infrastructure",
  description: "We build customer-acquiring web platforms, e-commerce stores, and custom applications wired with automated bot intake—fueled by targeted Meta ads, video scripting guidance, and acquisition audits to predictably grow your client base.",
  openGraph: {
    title: "Fleevo | Customer Acquisition Systems & Digital Infrastructure",
    description: "We build customer-acquiring web platforms, e-commerce stores, and custom applications wired with automated bot intake—fueled by targeted Meta ads and direct-response video direction.",
    url: "https://fleevo.net",
    siteName: "Fleevo",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fleevo | Customer Acquisition Systems & Digital Infrastructure",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleevo | Customer Acquisition Systems & Digital Infrastructure",
    description: "We build customer-acquiring web platforms, e-commerce stores, and custom applications wired with automated bot intake—fueled by targeted Meta ads and direct-response video direction.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
