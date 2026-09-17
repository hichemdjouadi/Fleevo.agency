"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Fintech App Design",
      client: "PayFlow",
      image: "/dental-ui.jpg",
      bg: "bg-[#111111]",
    },
    {
      title: "Real Estate Platform",
      client: "Aura Properties",
      image: "/tourism-ui.jpg",
      bg: "bg-[#111111]",
    },
    {
      title: "E-commerce Redesign",
      client: "Lumina",
      image: "/dental-ui.jpg",
      bg: "bg-[#111111]",
    },
    {
      title: "AI Booking Agent",
      client: "Nexus Dental",
      image: "/tourism-ui.jpg",
      bg: "bg-[#111111]",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      <div className="flex flex-col gap-16 md:mt-0">
        {projects.filter((_, i) => i % 2 === 0).map((project, i) => (
          <Link href="/work" key={i} className="group block">
            <div className={"relative w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-6 " + project.bg}>
              <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" unoptimized />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-white/60">{project.client}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-16 md:mt-32">
        {projects.filter((_, i) => i % 2 !== 0).map((project, i) => (
          <Link href="/work" key={i} className="group block">
            <div className={"relative w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-6 " + project.bg}>
              <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" unoptimized />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-white/60">{project.client}</p>
          </Link>
        ))}
      </div>
      
      
    </div>
  );
}


