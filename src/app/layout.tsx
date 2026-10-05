/**
 * FILE: app/layout.tsx
 *
 * PURPOSE:
 * The root layout for the entire Next.js application. This file wraps every
 * page on the website with shared structure, global styles, and site-wide
 * components (navigation, footer, scroll behavior, preloader, and page transitions).
 *
 * RESPONSIBILITIES:
 * - Defines the site-wide HTML document structure (<html> and <body> tags)
 * - Applies global fonts (Inter and Manrope) as CSS variables on the <html> element
 * - Sets the site-wide SEO metadata (title and meta description)
 * - Mounts shared components that appear on every page:
 *     • RefreshRedirect  — ensures the page always starts at the top on load
 *     • Preloader        — animated splash screen shown on first site visit
 *     • Navbar           — the site navigation bar
 *     • PageTransition   — animated fade/slide when navigating between pages
 *     • Footer           — the site footer
 * - Enables smooth scrolling site-wide via the SmoothScroll wrapper
 *
 * HOW IT WORKS:
 * In Next.js App Router, layout.tsx files wrap their child routes.
 * The root layout wraps ALL pages. The `children` prop represents
 * whichever page the user is currently viewing.
 *
 * USED BY:
 * Every page in the application. Next.js renders this file automatically
 * for every route under /src/app/.
 *
 * IMPORTANT:
 * Changes to this file affect every single page on the site.
 * Adding components here means they will appear on ALL pages.
 * Be careful when modifying the layout structure, font classes,
 * or metadata — each has global impact.
 */

import type { Metadata } from "next";
import { inter, manrope } from "./fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import RefreshRedirect from "@/components/RefreshRedirect";

/**
 * Site-wide SEO metadata.
 *
 * Next.js uses this object to set the <title> tag and <meta name="description">
 * tag on every page that does not override these values with its own metadata export.
 *
 * - title: Appears in browser tabs and search engine results
 * - description: Appears in search engine result summaries (snippets)
 *
 * To give a specific page a different title or description, export a `metadata`
 * object from that page's page.tsx file.
 */
export const metadata: Metadata = {
  title: "Lilies of the Field Academy | Transforming Lives Through Education",
  description:
    "Lilies of the Field Academy is empowering children from underserved communities with knowledge, opportunity, and hope for a brighter future.",
};

/**
 * RootLayout
 *
 * The top-level layout component that wraps every page in the application.
 * Rendered automatically by Next.js for all routes.
 *
 * Structure:
 *   <html>         — Sets the document language and font CSS variables
 *     <body>       — Sets base typography and background styles
 *       SmoothScroll  — Enables Lenis smooth scrolling globally
 *         RefreshRedirect — Resets scroll position to top on every page load
 *         Preloader       — Shows an animated logo/progress bar on first load
 *         Navbar          — Fixed navigation bar shown at the top of all pages
 *         PageTransition  — Animates the page content when navigating routes
 *           <main>        — The actual page content from each page.tsx file
 *         Footer          — The blue footer shown at the bottom of all pages
 *
 * @param children - The page component rendered by Next.js based on the current URL
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply both font CSS variables to the root HTML element so they are
    // available everywhere via Tailwind's font-sans and font-heading classes.
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      {/*
        font-sans:       Uses Inter for body text (set in globals.css @theme)
        text-foreground: Default dark text color from globals.css
        bg-background:   White background from globals.css
        antialiased:     Smooths font rendering on screen
        flex flex-col:   Makes the body a vertical flex container
        min-h-screen:    Ensures the footer is always at the bottom of the page
      */}
      <body className="font-sans text-foreground bg-background antialiased flex flex-col min-h-screen">
        <SmoothScroll>
          {/* Resets scroll to the top of the page on every navigation */}
          <RefreshRedirect />

          {/* Animated logo splash screen shown on first load (hides automatically after 2 seconds) */}
          <Preloader />

          {/* Fixed navigation bar at the top of every page */}
          <Navbar />

          {/* Wraps page content in a fade/slide animation triggered on route changes */}
          <PageTransition>
            {/*
              flex-1 allows the main content area to grow and fill available vertical space.
              This keeps the footer at the bottom even on short pages.
            */}
            <main className="flex-1">{children}</main>
          </PageTransition>

          {/* Site footer shown at the bottom of every page */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
