"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useLanguage } from "@/lib/i18n";

interface TransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
  ...props
}: TransitionLinkProps) {
  let locale = "en";
  try {
    const langContext = useLanguage();
    if (langContext?.locale) {
      locale = langContext.locale;
    }
  } catch {
    // Graceful fallback if rendered outside LanguageProvider
  }

  let finalHref = href;
  if (locale !== "en" && href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/admin")) {
    const [path, search] = href.split("?");
    const params = new URLSearchParams(search || "");
    if (!params.has("lang")) {
      params.set("lang", locale);
    }
    finalHref = `${path}?${params.toString()}`;
  }

  return (
    <Link {...props} href={finalHref} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
