/**
 * FILE: fonts.ts
 *
 * PURPOSE:
 * Configures and exports the two Google Fonts used throughout the application.
 *
 * RESPONSIBILITIES:
 * - Loads "Manrope" for all headings (h1–h6), providing a modern, geometric sans-serif look
 * - Loads "Inter" for all body text and UI elements, ensuring clean readability
 * - Exposes each font as a CSS variable so Tailwind can reference them by name
 *
 * HOW FONTS ARE APPLIED:
 * The exported `inter` and `manrope` objects each expose a `.variable` property
 * (e.g., `--font-inter`, `--font-manrope`). These variable names are applied to
 * the <html> element in `src/app/layout.tsx` and then referenced in
 * `src/app/globals.css` via the Tailwind @theme block.
 *
 * USED BY:
 * - src/app/layout.tsx (applies font CSS variables to the root HTML element)
 * - src/app/globals.css (references --font-inter and --font-manrope in @theme)
 *
 * IMPORTANT:
 * Next.js downloads and self-hosts these fonts at build time, so no Google
 * network request is made by users' browsers. The `display: 'swap'` setting
 * ensures text remains visible during font loading by showing a fallback system
 * font first.
 */

import { Manrope, Inter } from 'next/font/google';

/**
 * Manrope — the heading font.
 *
 * Applied to all h1–h6 elements via the `.font-heading` utility class defined
 * in globals.css. Loaded in weights 400–800 to support all heading hierarchy levels.
 *
 * CSS variable: --font-manrope
 */
export const manrope = Manrope({
  subsets: ['latin'],

  // Show a fallback system font immediately, then swap in Manrope when it loads.
  // This prevents a blank/invisible text period during initial page load.
  display: 'swap',

  // The CSS custom property name this font will be accessible under.
  // Referenced in globals.css as var(--font-manrope).
  variable: '--font-manrope',

  // Load only the weights actually used. More weights = larger download.
  weight: ['400', '500', '600', '700', '800'],
});

/**
 * Inter — the body and UI font.
 *
 * Applied to all body text, navigation items, buttons, and form elements
 * via the `.font-sans` Tailwind class. Loaded in weights 400–700.
 *
 * CSS variable: --font-inter
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});
