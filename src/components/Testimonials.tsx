"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The quality of the team's work exceeded my expectations, and since completion we have won a number of awards, including the Site of Day awwward.",
      author: "Zelt",
      role: "Digital Platform"
    },
    {
      quote: "Fleevo re-engineered our entire client acquisition flow. We went from losing leads in our DMs to a fully automated pipeline.",
      author: "Vertex Med",
      role: "Private Clinic"
    },
    {
      quote: "Before Fleevo, we were losing half of our checkouts to a clunky process. They built a frictionless infrastructure that plugged the holes in our sales funnel.",
      author: "Aura Commerce",
      role: "E-Commerce"
    }
  ];

  return (
    <section className="py-24 px-6 w-full max-w-[1200px] mx-auto border-t border-black/10 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[0.95]">
          Proven by <br /> ambitious brands.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#f7f7f7] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[300px] md:min-h-[350px] hover:bg-[#f0f0f0] transition-colors border border-black/5">
            <p className="text-lg md:text-xl font-medium leading-[1.4] text-black">
              "{t.quote}"
            </p>
            <div className="mt-12 flex flex-col gap-1 border-t border-black/10 pt-6">
              <span className="font-bold text-black uppercase tracking-widest text-sm">{t.author}</span>
              <span className="text-black/50 text-sm font-medium">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
