/**
 * FILE: components/Footer.tsx
 *
 * PURPOSE:
 * Renders the site-wide footer that appears at the bottom of every page.
 * Displays the academy logo, a brief description, navigation links, contact
 * information, social media placeholders, and legal/copyright information.
 *
 * RESPONSIBILITIES:
 * - Shows the Lilies Foundation logo (linking to home)
 * - Provides a three-column grid with: brand info, navigation links, contact info
 * - Displays social media icon buttons (currently link to "#" — not yet connected)
 * - Shows a copyright notice with the current year (generated dynamically)
 * - Links to the Privacy Policy and Terms of Service legal pages
 *
 * USED BY:
 * src/app/layout.tsx — mounted in the root layout so it appears on every page.
 *
 * NOTE ON SOCIAL LINKS:
 * The Instagram, Facebook, and Twitter icon buttons currently link to "#"
 * (a placeholder). Real social media URLs need to be added when accounts are set up.
 *
 * DESIGN:
 * Uses the brand blue (#2563eb) as the footer background with white text,
 * creating strong visual contrast from the white page content above.
 */

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

/**
 * Navigation links shown in the footer's "Navigation" column.
 *
 * These mirror the Navbar links (excluding Home) so users can navigate
 * to any major section of the site from the footer.
 * Update this array when adding or removing pages from the site.
 */
const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Gallery", href: "/gallery" },
    { label: "Stories", href: "/stories" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#2563eb] text-white pt-16 pb-12 w-full mt-auto relative overflow-hidden font-sans border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/*
                 * Three-column layout:
                 * Column 1: Brand (logo + tagline + social icons)
                 * Column 2: Navigation links
                 * Column 3: Contact information
                 *
                 * On mobile, the columns stack vertically (grid-cols-1).
                 * On medium screens and above, they arrange side by side (md:grid-cols-3).
                 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-14 items-start">
                    {/* ─── Column 1: Brand Section ─── */}
                    <div className="flex flex-col gap-4">
                        {/* Logo links back to home page */}
                        <Link href="/" className="flex items-center group w-fit">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl shadow-xs flex items-center justify-center p-2">
                                <Image
                                    src="/images/latest_logo1.png"
                                    alt="Lilies Foundation Logo"
                                    fill
                                    sizes="96px"
                                    className="object-contain p-[5%]"
                                />
                            </div>
                        </Link>

                        {/* Brief mission summary shown below the logo */}
                        <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-xs font-normal">
                            Empowering vulnerable children through quality education, arts, and leadership initiatives in Osu, Accra, Ghana.
                        </p>

                        {/*
                         * Social media icon buttons.
                         *
                         * IMPORTANT: All three currently link to "#" (no destination).
                         * When social media accounts are created, replace href="#"
                         * with the actual profile URLs for each platform.
                         * aria-label ensures screen readers announce which platform each button opens.
                         */}
                        <div className="flex items-center gap-2.5 mt-1">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    // aria-label: tells screen readers which social platform this button opens
                                    aria-label={item.label}
                                    className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 text-white transition-colors duration-200"
                                >
                                    <item.icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ─── Column 2: Navigation Links ─── */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-base text-white tracking-tight">Navigation</h4>
                        {/*
                         * Two-column sub-grid so the list of links doesn't become
                         * too long vertically on desktop — more compact and readable.
                         */}
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-normal"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ─── Column 3: Contact Information ─── */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-base text-white tracking-tight">Contact</h4>
                        <div className="flex flex-col gap-3 text-white/80 text-sm">
                            {/* Physical location */}
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 shrink-0 opacity-70 mt-0.5" />
                                <p className="font-normal">Osu, Accra, Ghana</p>
                            </div>

                            {/* Phone number — clicking it initiates a phone call on mobile devices */}
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 shrink-0 opacity-70" />
                                <a href="tel:8608367468" className="hover:text-white transition-colors font-normal">860-836-7468</a>
                            </div>

                            {/* Email address — clicking it opens the user's default email app */}
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 shrink-0 opacity-70" />
                                <a href="mailto:info@theliliesfoundation.org" className="hover:text-white transition-colors font-normal">info@theliliesfoundation.org</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Bottom Bar: Copyright and Legal Links ─── */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    {/*
                     * Copyright year is generated dynamically using new Date().getFullYear().
                     * This means the year updates automatically each January 1st
                     * without any manual code change.
                     */}
                    <p className="text-white/60 text-xs font-normal">
                        &copy; {new Date().getFullYear()} Lilies of the Field Academy. Registered NGO in Ghana.
                    </p>
                    <div className="flex items-center gap-5 text-white/60 text-xs font-normal">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        {/* Location badge — purely decorative/informational */}
                        <span className="text-white/70 bg-white/10 px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/15">
                            Osu, Accra
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
