"use client";

import Image from "next/image";
import TransitionLink from "./TransitionLink";

export default function FeaturedWork() {
  const projects = [
    {
      title: "MO PIZZA Web App",
      client: "Morad Oudia's Restaurant",
      image: "/project-mopizza2.png",
      bg: "bg-orange-600",
      link: "https://mopizzarestaurants.netlify.app/",
    },
    {
      title: "Al-Madina Bookstore",
      client: "E-Commerce Platform",
      image: "/project-almadina.png",
      bg: "bg-[#1E3A3F]",
      link: "https://almadinabookstore.com/",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      <div className="flex flex-col gap-16 md:mt-0">
        {projects.filter((_, i) => i % 2 === 0).map((project, i) => (
          <a href={project.link} target="_blank" rel="noreferrer" key={i} className="group block">
            <div className={"relative w-full aspect-video rounded-[32px] overflow-hidden mb-6 " + project.bg}>
              <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" unoptimized />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-white/60">{project.client}</p>
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-16 md:mt-32">
        {projects.filter((_, i) => i % 2 !== 0).map((project, i) => (
          <a href={project.link} target="_blank" rel="noreferrer" key={i} className="group block">
            <div className={"relative w-full aspect-video rounded-[32px] overflow-hidden mb-6 " + project.bg}>
              <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" unoptimized />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-white/60">{project.client}</p>
          </a>
        ))}
      </div>
      
      <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
        <TransitionLink href="/work" className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
          See more
        </TransitionLink>
      </div>
    </div>
  );
}

