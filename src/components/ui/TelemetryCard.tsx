"use client";

import { ReactNode } from "react";

interface TelemetryRow {
  label: string;
  value: string;
  isMono?: boolean;
}

interface TelemetryCardProps {
  badge?: string;
  title: string;
  metric?: string;
  description?: string;
  rows?: TelemetryRow[];
  footerLeft?: string;
  footerRight?: string;
  theme?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}

export default function TelemetryCard({
  badge,
  title,
  metric,
  description,
  rows = [],
  footerLeft,
  footerRight,
  theme = "dark",
  className = "",
  children
}: TelemetryCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-3xl p-5 md:p-6 transition-all duration-300 ${
        isDark
          ? "bg-[#080808] text-white border border-white/10"
          : "bg-white text-black border border-black/10"
      } ${className}`}
    >
      {/* Card Header */}
      {(badge || footerRight) && (
        <div
          className={`flex items-center justify-between pb-3.5 mb-3.5 border-b ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          {badge && (
            <span
              className={`font-mono text-xs uppercase tracking-[0.16em] font-medium px-2.5 py-1 rounded-full border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white/70"
                  : "bg-black/5 border-black/10 text-black/70"
              }`}
            >
              {badge}
            </span>
          )}
          {footerRight && (
            <span
              className={`font-mono text-xs ${
                isDark ? "text-white/50" : "text-black/50"
              }`}
            >
              {footerRight}
            </span>
          )}
        </div>
      )}

      {/* Main Metric / Title */}
      <div className="space-y-1.5">
        {metric && (
          <div
            className={`font-mono text-2xl md:text-3xl font-medium tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {metric}
          </div>
        )}
        <div
          className={`text-base md:text-lg font-medium tracking-tight ${
            isDark ? "text-white/90" : "text-black"
          }`}
        >
          {title}
        </div>
        {description && (
          <p
            className={`text-xs md:text-sm font-light leading-relaxed ${
              isDark ? "text-white/70" : "text-black/70"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Data Rows */}
      {rows.length > 0 && (
        <div
          className={`mt-4 pt-3.5 space-y-2 border-t ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between text-xs ${
                row.isMono ? "font-mono" : ""
              }`}
            >
              <span className={isDark ? "text-white/50" : "text-black/50"}>
                {row.label}
              </span>
              <span
                className={`font-medium ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {children}

      {/* Footer Info */}
      {footerLeft && (
        <div
          className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-mono ${
            isDark
              ? "border-white/10 text-white/50"
              : "border-black/10 text-black/50"
          }`}
        >
          <span>{footerLeft}</span>
        </div>
      )}
    </div>
  );
}
