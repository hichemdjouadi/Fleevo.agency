import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Two-discipline acquisition architecture: custom websites, 58-wilaya e-commerce engines, internal CRMs, domain AI agents, Meta ads, and 48h audits.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
