"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Stories", href: "/stories" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

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
                {/* Logo Area */}
                <Link href="/" className="flex items-center group relative z-[110] shrink-0">
                    <div className={cn(
                        "relative transition-all duration-500 rounded-3xl p-1 bg-white shadow-xl flex items-center justify-center",
                        scrolled ? "h-14 w-14 md:h-16 md:w-16" : "h-20 w-20 md:h-24 md:w-24"
                    )}>
                        <img
                            src="/images/LOGO4.png"
                            alt="Lilies Foundation Logo"
                            className="h-[85%] w-[85%] object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    <nav className={cn(
                        "flex items-center gap-1 bg-white p-1 rounded-full shadow-lg border border-slate-100 transition-all duration-500 opacity-0 md:opacity-100 translate-y-10 md:translate-y-0",
                        scrolled ? "scale-95" : "scale-100"
                    )}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-[14px] font-bold transition-all duration-300",
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
                        className="bg-[#22c55e] text-fwhite px-10 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#16a34a] transition-all duration-300 active:scale-95 whitespace-nowrap shadow-xl hover:shadow-2xl translate-y-0 md:translate-y-0"
                    >
                        Donate Now ❤️
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-14 h-14 z-[110] gap-[6.5px] bg-white rounded-3xl shadow-xl transition-all active:scale-90"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={cn("h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full", mobileMenuOpen && "rotate-45 translate-y-[9.5px]")} />
                    <span className={cn("h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full", mobileMenuOpen && "opacity-0")} />
                    <span className={cn("h-[3px] w-7 transition-all duration-300 bg-slate-900 rounded-full", mobileMenuOpen && "-rotate-45 -translate-y-[9.5px]")} />
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-10 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden",
                        mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    )}
                >
                    <div className="flex flex-col items-center gap-12 text-4xl font-heading font-bold text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "transition-all duration-300 hover:scale-110 active:scale-90",
                                    pathname === link.href ? "text-[#2563eb]" : "text-slate-900 hover:text-[#2563eb]"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
