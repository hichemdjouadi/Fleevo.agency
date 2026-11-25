import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Live client builds, sector system demos, and internal CRM infrastructure engineered for 58-wilaya direct commerce and conversion speed.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
