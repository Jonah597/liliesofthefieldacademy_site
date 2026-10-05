/**
 * FILE: components/ui/Card.tsx
 *
 * PURPOSE:
 * A reusable container component that applies consistent rounded corners,
 * padding, and visual styling to content sections (cards).
 *
 * RESPONSIBILITIES:
 * - Wraps any child content in a styled card container
 * - Supports four visual variants to suit different design contexts
 * - Passes through all standard HTML div attributes so consumers can
 *   attach onClick handlers, IDs, aria attributes, etc.
 *
 * USED BY:
 * Any page or component that needs a card-style content container.
 * Note: Like Button.tsx, many pages in this project use inline Tailwind
 * classes instead of this component, so its actual usage may be limited.
 *
 * PROPS:
 * @param variant   - Visual style variant (defaults to "elevated")
 * @param className - Additional Tailwind classes merged with the base styles
 * @param children  - Any content to display inside the card
 * @param ...props  - Standard HTML div attributes (id, onClick, aria-*, etc.)
 */

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Card component.
 *
 * Extends React.HTMLAttributes<HTMLDivElement> so all standard HTML div
 * attributes (onClick, id, aria-label, style, etc.) are automatically supported.
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the card's visual appearance:
   * - "flat":     Light gray background, subtle border. Good for nested content.
   * - "elevated": White background with a shadow that deepens on hover.
   *               The default — most versatile for general content cards.
   * - "bordered": White background with a more defined border. No shadow.
   * - "glass":    Semi-transparent white with a frosted blur effect.
   *               Good for overlaying on images or dark backgrounds.
   */
  variant?: "flat" | "elevated" | "bordered" | "glass";

  /** Additional Tailwind CSS classes merged via the `cn` utility. */
  className?: string;

  /** Content displayed inside the card. */
  children: React.ReactNode;
}

export default function Card({
  variant = "elevated",
  className,
  children,
  ...props
}: CardProps) {
  /**
   * Maps each variant to its Tailwind CSS class string.
   * These define the background, border, and shadow appearance of each style.
   */
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
      className={cn(
        // Base layout: rounded corners and generous padding.
        // On mobile: 16px corners and 24px padding.
        // On desktop: 24px corners and 40px padding.
        "rounded-2xl md:rounded-3xl p-6 md:p-10",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
