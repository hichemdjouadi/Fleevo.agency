"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If default was prevented or modifier key was pressed, let browser handle normally
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      props.target === "_blank" ||
      !finalHref.startsWith("/") ||
      finalHref.startsWith("//")
    ) {
      return;
    }

    if (typeof window !== "undefined") {
      const currentUrl = `${window.location.pathname}${window.location.search}`;
      if (finalHref === currentUrl || finalHref === window.location.pathname) {
        return;
      }

      e.preventDefault();
      // Trigger cinematic curtain sweep
      window.dispatchEvent(new CustomEvent("trigger-page-exit"));

      setTimeout(() => {
        router.push(finalHref);
      }, 300);
    }
  };

  return (
    <Link {...props} href={finalHref} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
