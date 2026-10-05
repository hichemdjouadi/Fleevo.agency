"use client";

import ShinyButton from "@/components/ui/shiny-button";

export default function ShinyButtonDemo() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black">
      {/* The user requested a white button with black text for "Audit Your Infrastructure" */}
      <ShinyButton 
        label="Audit Your Infrastructure" 
        fillColor="#ffffff"
        labelColor="#000000"
        accentColor="#cccccc"
        accentSoftColor="#e6e6e6"
      />
    </main>
  );
}
