import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col max-w-4xl mb-16 md:mb-24",
        alignmentClass,
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "reveal-text uppercase font-bold tracking-[0.2em] text-[12px] mb-6 block py-2 px-5 rounded-full w-fit shadow-sm",
            dark
              ? "bg-white/10 text-white/90"
              : "bg-blue-50 text-[#2563eb]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "reveal-text text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[0.98] tracking-tight text-balance",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "reveal-text text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-balance",
            dark ? "text-blue-100/90" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
