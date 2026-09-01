import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-xs hover:shadow-sm",
    secondary:
      "bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-xs hover:shadow-sm",
    outline:
      "bg-transparent border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white shadow-2xs",
    danger: "bg-[#d72638] text-white hover:bg-[#b81d2c] shadow-xs",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs font-semibold rounded-full",
    md: "px-5 py-2 text-sm font-semibold rounded-full",
    lg: "px-7 py-3 text-[15px] font-semibold rounded-full",
    xl: "px-8 py-3.5 text-base font-semibold rounded-full",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-2 font-sans transition-all duration-200 active:translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
