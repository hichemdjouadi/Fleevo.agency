import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Fleevy | Websites, Stores, CRMs & Ads Built to Scale",
  },
  description:
    "High-velocity acquisition websites, 58-wilaya e-commerce engines, custom CRMs, domain AI agents, and performance Meta ads shipped in 2-4 weeks.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
