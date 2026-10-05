/**
 * FILE: components/ui/Button.tsx
 *
 * PURPOSE:
 * A reusable button component that supports multiple visual variants and sizes.
 * Can render either as a standard HTML <button> element or as a Next.js <Link>
 * (anchor) element, depending on whether an `href` prop is provided.
 *
 * RESPONSIBILITIES:
 * - Provides a consistent button appearance across the site via predefined variants
 * - Handles both navigation (when href is provided) and interactive actions
 *   (when onClick or form submit is needed)
 * - Applies disabled styling automatically when the disabled HTML attribute is set
 *
 * USED BY:
 * Any component or page that needs a styled button or call-to-action link.
 * Note: Many pages in this project use inline Tailwind classes for buttons instead
 * of this component, so its usage may be limited.
 *
 * PROPS:
 * @param variant   - Visual style of the button (see variantStyles below)
 * @param size      - Size of the button (see sizeStyles below)
 * @param href      - When provided, renders a Next.js Link instead of a button
 * @param className - Additional Tailwind classes to merge with the base styles
 * @param children  - Content displayed inside the button (text, icons, etc.)
 * @param ...props  - All other standard HTML button attributes (onClick, type, disabled, etc.)
 */

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Props for the Button component.
 *
 * Extends React.ButtonHTMLAttributes so all standard button HTML attributes
 * (onClick, type, disabled, aria-label, etc.) are supported automatically.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Defaults to "primary" (blue). */
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";

  /** Size determines padding and font size. Defaults to "md". */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * When provided, the component renders as a Next.js Link (anchor tag)
   * instead of a <button>, enabling client-side navigation.
   */
  href?: string;

  /** Additional Tailwind CSS classes to apply, merged via the `cn` utility. */
  className?: string;

  /** The visible content of the button (text, icons, or both). */
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
  /**
   * Maps each variant name to its Tailwind CSS classes.
   *
   * - primary:   Brand blue background — main call-to-action
   * - secondary: Brand green background — secondary emphasis (e.g., "Donate")
   * - outline:   Transparent with a blue border — softer visual weight
   * - danger:    Red background — for destructive or warning actions
   * - ghost:     No background — minimal, low-emphasis actions
   */
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

  /**
   * Maps each size name to its Tailwind padding, text, and border-radius classes.
   * All sizes use rounded-full (pill shape) to match the site's design language.
   */
  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs font-semibold rounded-full",
    md: "px-5 py-2 text-sm font-semibold rounded-full",
    lg: "px-7 py-3 text-[15px] font-semibold rounded-full",
    xl: "px-8 py-3.5 text-base font-semibold rounded-full",
  };

  /**
   * Combines the base styles, variant styles, size styles, and any additional
   * className passed by the caller into a single class string.
   *
   * Base styles applied to every button:
   * - inline-flex items-center justify-center gap-2: positions icon + text side by side
   * - transition-all duration-200: smooth hover state transitions
   * - active:translate-y-0.5: a subtle press-down effect on click
   * - disabled:opacity-50 disabled:pointer-events-none: visual + interactive disabled state
   */
  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-2 font-sans transition-all duration-200 active:translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // When href is provided, render a Next.js Link for client-side navigation.
  // This avoids a full page reload, which is important for the page transition animations.
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Default: render a standard HTML button for interactive actions (click handlers, form submits, etc.)
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
