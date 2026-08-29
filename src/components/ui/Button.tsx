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
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg hover:shadow-xl",
    secondary:
      "bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-lg hover:shadow-xl animate-pulse-glow",
    outline:
      "bg-transparent border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white",
    danger: "bg-[#d72638] text-white hover:bg-[#b81d2c] shadow-lg",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-full",
    md: "px-6 py-3 text-sm font-bold rounded-full",
    lg: "px-10 py-4 text-base font-bold rounded-full",
    xl: "px-12 py-5 text-lg font-bold rounded-full",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
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
