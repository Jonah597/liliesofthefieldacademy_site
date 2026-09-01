import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "flat" | "elevated" | "bordered" | "glass";
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  variant = "elevated",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    flat: "bg-slate-50 border border-slate-100",
    elevated:
      "bg-white shadow-sm hover:shadow-md border border-slate-100 transition-shadow duration-300",
    bordered: "bg-white border border-slate-200",
    glass:
      "bg-white/80 backdrop-blur-md border border-white/40 shadow-sm text-slate-900",
  };

  return (
    <div
      className={cn("rounded-2xl md:rounded-3xl p-6 md:p-10", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
