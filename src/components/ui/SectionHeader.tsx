/**
 * FILE: components/ui/SectionHeader.tsx
 *
 * PURPOSE:
 * A reusable section heading component used to introduce major content sections
 * on various pages. Renders an optional eyebrow badge, a main heading (h2),
 * and an optional subtitle paragraph.
 *
 * RESPONSIBILITIES:
 * - Renders a consistent section header layout used across multiple pages
 * - Supports text alignment (left, center, right) and dark/light color modes
 * - Applies the "reveal-text" class to both h2 and subtitle so GSAP's scroll
 *   animation system can animate them into view on scroll
 *
 * NOTE ON REVEAL-TEXT:
 * Elements with the "reveal-text" CSS class are targeted by the GSAP scroll
 * animation setup found in each page's useEffect. When the element scrolls into
 * the viewport, GSAP animates it from hidden/blurred to visible.
 *
 * USED BY:
 * Any page that needs a consistent, styled section introduction block.
 *
 * PROPS:
 * @param badge     - Short uppercase eyebrow text shown above the heading (optional)
 * @param title     - The main heading text (required)
 * @param subtitle  - Supporting paragraph shown below the heading (optional)
 * @param align     - Text alignment: "left" | "center" | "right" (defaults to "center")
 * @param dark      - When true, uses white text for dark backgrounds (defaults to false)
 * @param className - Additional Tailwind classes merged with the container
 */

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the SectionHeader component.
 */
interface SectionHeaderProps {
  /** Short descriptive label shown above the heading in a pill badge (optional). */
  badge?: string;

  /** The main section heading text. Rendered as an <h2>. */
  title: string;

  /** Supporting description shown below the heading (optional). */
  subtitle?: string;

  /**
   * Controls the text and flex alignment of the entire header block.
   * - "left": aligns to the left (good for two-column layouts)
   * - "center": centered (default, good for full-width sections)
   * - "right": aligns to the right (rarely used)
   */
  align?: "left" | "center" | "right";

  /**
   * When true, text switches to white tones for use on dark/blue backgrounds.
   * When false (default), text uses dark slate colors for light backgrounds.
   */
  dark?: boolean;

  /** Additional Tailwind classes applied to the outer container div. */
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
  /**
   * Maps the `align` prop to Tailwind flexbox and text alignment classes.
   * The container uses flexbox, so aligning items requires both the text-* and items-* classes.
   */
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      className={cn(
        // max-w-3xl limits the width so very long headings remain readable.
        // mb-12 md:mb-16 creates space between the header and the content below it.
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignmentClass,
        className
      )}
    >
      {/*
       * Eyebrow badge — optional small label shown above the heading.
       * Uses the "reveal-text" class so GSAP animates it into view on scroll.
       *
       * Color adapts to the `dark` mode:
       * - dark: white text on a semi-transparent white background
       * - light: blue text on a light blue background
       */}
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

      {/*
       * Main section heading.
       * Uses clamp-based responsive font sizes (defined in globals.css as .section-heading)
       * for smooth scaling across screen sizes without media query breakpoints.
       * The `text-balance` utility helps the heading break onto lines more evenly.
       */}
      <h2
        className={cn(
          "reveal-text text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold mb-5 leading-[1.08] tracking-tight text-balance",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {/*
       * Optional subtitle paragraph shown below the heading.
       * Only rendered when a subtitle value is passed as a prop.
       */}
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
