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
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignmentClass,
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "reveal-text uppercase font-semibold tracking-[0.14em] text-xs mb-4 block py-1.5 px-4 rounded-full w-fit shadow-xs",
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
          "reveal-text text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold mb-5 leading-[1.08] tracking-tight text-balance",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "reveal-text text-base sm:text-lg md:text-[18px] font-normal leading-relaxed max-w-2xl text-balance",
            dark ? "text-blue-100/90" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
