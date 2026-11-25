"use client";

import Image from "next/image";

interface ProjectMediaProps {
  imageSrc: string;
  videoSrc?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

export default function ProjectMedia({
  imageSrc,
  videoSrc,
  alt,
  sizes,
  priority = false,
  className = "object-cover object-top",
}: ProjectMediaProps) {
  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={`w-full h-full ${className}`}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
