import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Free 48h Audit",
  description:
    "Request a free 48-hour video funnel audit, configure a custom scope in 4 quick questions, or send a project brief directly to the lead engineer.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactClient />
    </Suspense>
  );
}
