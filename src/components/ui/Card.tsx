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
      "bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-500",
    bordered: "bg-white border-2 border-slate-200",
    glass:
      "bg-white/80 backdrop-blur-md border border-white/40 shadow-2xl text-slate-900",
  };

  return (
    <div
      className={cn("rounded-[3.5rem] p-8 md:p-12", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
