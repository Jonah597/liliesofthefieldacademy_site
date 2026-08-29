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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out px-4 py-4 md:px-8 md:py-6",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 md:py-4 shadow-xl"
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center group relative z-[110] shrink-0">
          <div
            className={cn(
              "relative transition-all duration-500 rounded-3xl p-1 bg-white shadow-xl flex items-center justify-center",
              scrolled ? "h-14 w-14 md:h-16 md:w-16" : "h-20 w-20 md:h-24 md:w-24"
            )}
          >
            <Image
              src="/images/LOGO4.png"
              alt="Lilies Foundation Logo"
              fill
              sizes="(max-width: 768px) 64px, 96px"
              className="object-contain p-[7.5%]"
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <nav
            className={cn(
              "flex items-center gap-1 bg-white p-1 rounded-full shadow-lg border border-slate-100 transition-all duration-500 opacity-0 md:opacity-100 translate-y-10 md:translate-y-0",
              scrolled ? "scale-95" : "scale-100"
            )}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 xl:px-6 py-2 rounded-full text-[13px] xl:text-[14px] font-bold transition-all duration-300",
                    isActive
                      ? "bg-[#2563eb] text-white shadow-md active:scale-95 translate-y-0"
                      : "text-slate-600 hover:text-[#2563eb] hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/donate"
            className="bg-[#22c55e] text-white px-10 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#16a34a] transition-all duration-300 active:scale-95 whitespace-nowrap shadow-xl hover:shadow-2xl animate-pulse-glow"
          >
            Donate Now ❤️
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-14 h-14 z-[110] gap-[6.5px] bg-white rounded-3xl shadow-xl transition-all active:scale-90"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full",
              mobileMenuOpen && "rotate-45 translate-y-[9.5px]"
            )}
          />
          <span
            className={cn(
              "h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full",
              mobileMenuOpen && "-rotate-45 -translate-y-[9.5px]"
            )}
          />
        </button>

        {/* Overlay backdrop to freeze background interactions */}
        <div 
          className={cn(
            "fixed inset-0 z-[104] bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed top-24 right-4 z-[105] w-[calc(100vw-32px)] sm:w-80",
            "rounded-2xl border border-slate-100 bg-white/95 shadow-2xl backdrop-blur-md",
            // Set max-height and make contained flex structure
            "max-h-[calc(100dvh-7rem)] flex flex-col",
            "lg:hidden",
            "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu origin-top-right",
            mobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Scrollable Inner Container */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-5 touch-pan-y custom-scrollbar">
            <div className="flex flex-col items-start gap-2 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "w-full rounded-lg p-3 text-lg font-bold transition-all duration-200",
                    pathname === link.href
                      ? "bg-[#2563eb] text-white"
                      : "text-slate-800 hover:bg-slate-100 hover:text-[#2563eb]"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-slate-200 my-3" />
              <Link href="/donate" className="w-full text-center bg-[#22c55e] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:bg-[#16a34a] transition-all active:scale-95" onClick={() => setMobileMenuOpen(false)}>Donate Now ❤️</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
