/**
 * FILE: components/Navbar.tsx
 *
 * PURPOSE:
 * The site-wide navigation bar, fixed to the top of the viewport on all pages.
 * Provides desktop pill-style navigation and a mobile drawer menu. Adapts its
 * visual appearance based on scroll position (transparent → frosted glass).
 *
 * RESPONSIBILITIES:
 * - Renders the academy logo, linking back to the home page
 * - Renders the full navigation menu for desktop screens (lg: and above)
 * - Renders a hamburger-toggle mobile drawer menu for smaller screens
 * - Highlights the currently active page link using the current URL path
 * - Switches from a transparent background to a frosted-glass white background
 *   when the user scrolls more than 20px down the page
 * - Locks page body scrolling when the mobile menu is open (via useLockBodyScroll)
 * - Renders a translucent backdrop overlay behind the mobile menu that, when
 *   clicked, closes the menu
 *
 * STATE:
 * - `scrolled` (boolean): true when the user has scrolled more than 20px
 * - `mobileMenuOpen` (boolean): true when the mobile navigation panel is visible
 *
 * USED BY:
 * src/app/layout.tsx — mounted at the root so it appears on every page.
 *
 * DEPENDENCIES:
 * - @/lib/utils: `cn` utility for conditional class name merging
 * - @/app/contact/useLockBodyScroll: custom hook that prevents background scroll
 * - next/image: optimized academy logo image
 * - next/link: client-side routing for navigation links
 * - next/navigation: `usePathname` to detect the active route
 *
 * ACCESSIBILITY:
 * - The mobile hamburger button has an aria-label ("Toggle navigation menu")
 * - The backdrop overlay has aria-hidden="true" (it is decorative)
 * - Each board member card button has aria-label="View bio for [Name]"
 * - Active links receive a visually distinct style to indicate the current page
 */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLockBodyScroll } from "../app/contact/useLockBodyScroll";

/**
 * The list of navigation links displayed in both the desktop and mobile menus.
 *
 * To add a new page to the navigation, add an entry here with a `name` (display
 * text) and `href` (route path). The Navbar component reads from this array and
 * renders the links automatically.
 */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Gallery", href: "/gallery" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  // True when the user has scrolled more than 20px — triggers the frosted-glass style.
  const [scrolled, setScrolled] = useState(false);

  // True when the mobile navigation drawer is open.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The current URL path (e.g., "/about"). Used to highlight the active nav link.
  const pathname = usePathname();

  // Lock the page body scroll while the mobile menu is open.
  // This prevents the background content from scrolling when the drawer is visible.
  useLockBodyScroll(mobileMenuOpen);

  useEffect(() => {
    /**
     * Updates `scrolled` state based on whether the user has scrolled past 20px.
     * This is called on every scroll event and changes the navbar's visual style.
     */
    const handleScroll = () => setScrolled(window.scrollY > 20);

    // Attach the scroll listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll listener when the component unmounts to prevent memory leaks.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array: the listener is attached only once on mount.

  return (
    <header
      className={cn(
        // Base styles: always fixed at top, high z-index to stay above page content
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out px-4 md:px-8",
        // Scrolled: show a frosted-glass white background with a subtle border
        // Not scrolled: fully transparent so the hero image shows through
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-3 md:py-3.5 shadow-xs"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Academy logo — clicking it navigates to the home page */}
        <Link href="/" className="order-2 flex items-center group relative z-[110] shrink-0 lg:order-1">
          <div
            className={cn(
              // Logo container: white background with rounded corners
              // Shrinks slightly when the navbar enters its scrolled compact state
              "relative transition-all duration-300 rounded-xl p-1 bg-white shadow-xs border border-slate-100/90 flex items-center justify-center",
              scrolled
                ? "h-14 w-14 sm:h-16 sm:w-16 lg:h-24 lg:w-24"
                : "h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32"
            )}
          >
            <Image
              src="/images/latest_logo1.png"
              alt="Lilies Foundation Logo"
              fill
              // Responsive size hints so the browser loads the right image size
              sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 128px"
              className="object-contain p-[4%]"
              // priority: this image is above the fold and should load immediately
              priority
            />
          </div>
        </Link>

        {/* ─── Desktop Navigation (hidden on screens smaller than lg) ─── */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {/* Pill-shaped navigation container */}
          <nav
            className={cn(
              "flex items-center gap-1 bg-slate-50/90 backdrop-blur-xs px-2 py-1 rounded-full border border-slate-200/70 shadow-2xs transition-all duration-300",
              scrolled ? "bg-slate-50/90" : "bg-white/90"
            )}
          >
            {navLinks.map((link) => {
              // Highlight this link if it matches the current page URL
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 xl:px-4 py-1.5 rounded-full text-[13px] xl:text-[14px] transition-colors duration-200",
                    // Active page: white background, blue text, subtle border
                    // Inactive pages: muted text with hover highlight
                    isActive
                      ? "bg-white text-[#2563eb] font-semibold shadow-xs border border-slate-200/60"
                      : "text-slate-600 font-medium hover:text-slate-900 hover:bg-white/60"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Donate Now button — prominently green, separated from the nav pill */}
          <Link
            href="/donate"
            className="bg-[#22c55e] text-white px-5 xl:px-6 py-2 rounded-full text-[14px] font-semibold hover:bg-[#16a34a] transition-colors duration-200 active:translate-y-0.5 whitespace-nowrap shadow-xs hover:shadow-sm"
          >
            Donate Now
          </Link>
        </div>

        {/* ─── Mobile Hamburger Button (visible only on screens smaller than lg) ─── */}
        <button
          className="order-1 lg:order-none lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[110] gap-[4.5px] bg-white rounded-xl shadow-xs border border-slate-200/70 transition-colors active:translate-y-0.5"
          onClick={() => setMobileMenuOpen((open) => !open)}
          // Accessible label for screen readers and keyboard users
          aria-label="Toggle navigation menu"
        >
          {/*
           * Three-line hamburger that animates into an X when the menu opens:
           * - Top bar rotates +45deg and shifts down
           * - Middle bar fades out
           * - Bottom bar rotates -45deg and shifts up
           * Together they form a cross (×) icon when mobileMenuOpen is true.
           */}
          <span
            className={cn(
              "h-[2px] w-5 transition-all duration-300 bg-slate-800 rounded-full",
              mobileMenuOpen && "rotate-45 translate-y-[6.5px]"
            )}
          />
          <span
            className={cn(
              "h-[2px] w-5 transition-all duration-300 bg-slate-800 rounded-full",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[2px] w-5 transition-all duration-300 bg-slate-800 rounded-full",
              mobileMenuOpen && "-rotate-45 -translate-y-[6.5px]"
            )}
          />
        </button>

        {/*
         * Backdrop overlay — a semi-transparent dark layer covering the page
         * behind the mobile menu. Clicking it closes the menu.
         * aria-hidden: screen readers should ignore this decorative overlay.
         */}
        <div
          className={cn(
            "fixed inset-0 z-[104] bg-slate-900/25 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
            // When menu is closed: invisible and non-interactive (pointer-events-none)
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/*
         * Mobile Navigation Panel — a floating card that appears from the top-right
         * corner when the hamburger is clicked. Slides and scales into view.
         */}
        <div
          className={cn(
            // Position: anchored to top-right corner of the screen, below the navbar
            "fixed top-18 right-4 z-[105] w-[calc(100vw-32px)] sm:w-80",
            // Appearance: white card with rounded corners and shadow
            "rounded-2xl border border-slate-200/80 bg-white/98 shadow-xl backdrop-blur-md",
            // Height: limited so it doesn't extend off-screen on short viewports
            "max-h-[calc(100dvh-5.5rem)] flex flex-col",
            // Hidden on desktop (lg and above)
            "lg:hidden",
            // Entrance/exit animation: scales and fades in from top-right origin
            "transition-all duration-250 ease-out transform-gpu origin-top-right",
            mobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
        >
          {/*
           * Scrollable inner container — allows the menu to scroll vertically
           * if the nav links overflow the available height on very small screens.
           */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 touch-pan-y custom-scrollbar">
            <div className="flex flex-col items-start gap-1 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "w-full rounded-xl px-4 py-2.5 text-[15px] transition-colors duration-200",
                      isActive
                        ? "bg-blue-50 text-[#2563eb] font-semibold"
                        : "text-slate-700 font-medium hover:bg-slate-50 hover:text-[#2563eb]"
                    )}
                    // Close the mobile menu when a link is tapped
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Visual separator between nav links and the Donate button */}
              <div className="w-full h-px bg-slate-100 my-2" />

              {/* Donate Now button inside the mobile menu — full width, green */}
              <Link
                href="/donate"
                className="w-full text-center bg-[#22c55e] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:bg-[#16a34a] transition-colors active:translate-y-0.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
