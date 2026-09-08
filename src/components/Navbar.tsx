"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLockBodyScroll } from "../app/contact/useLockBodyScroll";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useLockBodyScroll(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out px-4 md:px-8",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-3 md:py-3.5 shadow-xs"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        {/* Restrained Brand Logo Container */}
        <Link href="/" className="flex items-center group relative z-[110] shrink-0">
          <div
            className={cn(
              "relative transition-all duration-300 rounded-xl p-1 bg-white shadow-xs border border-slate-100/90 flex items-center justify-center",
              scrolled ? "h-16 w-16 md:h-22 md:w-22" : "h-24 w-24 md:h-24 md:w-24"
            )}
          >
            <Image
              src="/images/LOGO4.png"
              alt="Lilies Foundation Logo"
              fill
              sizes="(max-width: 768px) 48px, 56px"
              className="object-contain p-[6%]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <nav
            className={cn(
              "flex items-center gap-1 bg-slate-50/90 backdrop-blur-xs px-2 py-1 rounded-full border border-slate-200/70 shadow-2xs transition-all duration-300",
              scrolled ? "bg-slate-50/90" : "bg-white/90"
            )}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 xl:px-4 py-1.5 rounded-full text-[13px] xl:text-[14px] transition-colors duration-200",
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

          {/* Restrained Institutional Donate Button */}
          <Link
            href="/donate"
            className="bg-[#22c55e] text-white px-5 xl:px-6 py-2 rounded-full text-[14px] font-semibold hover:bg-[#16a34a] transition-colors duration-200 active:translate-y-0.5 whitespace-nowrap shadow-xs hover:shadow-sm"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[110] gap-[4.5px] bg-white rounded-xl shadow-xs border border-slate-200/70 transition-colors active:translate-y-0.5"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
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

        {/* Backdrop Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-[104] bg-slate-900/25 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Navigation Panel */}
        <div
          className={cn(
            "fixed top-18 right-4 z-[105] w-[calc(100vw-32px)] sm:w-80",
            "rounded-2xl border border-slate-200/80 bg-white/98 shadow-xl backdrop-blur-md",
            "max-h-[calc(100dvh-5.5rem)] flex flex-col",
            "lg:hidden",
            "transition-all duration-250 ease-out transform-gpu origin-top-right",
            mobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
        >
          {/* Scrollable Inner Container */}
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-full h-px bg-slate-100 my-2" />
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
