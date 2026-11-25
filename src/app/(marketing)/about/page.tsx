import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Fleevy",
  description:
    "Direct engineering studio building owned web platforms, e-commerce engines, custom CRMs, domain AI agents, and performance ad systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
