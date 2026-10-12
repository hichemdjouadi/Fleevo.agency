"use client";

import Link, { LinkProps } from "next/link";
import React from "react";

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
  return (
    <Link {...props} href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
