import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-14 items-start">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center group w-fit">
                            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-xs flex items-center justify-center p-2">
                                <Image
                                    src="/images/LOGO4.png"
                                    alt="Lilies Foundation Logo"
                                    fill
                                    sizes="64px"
                                    className="object-contain p-[5%]"
                                />
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-xs font-normal">
                            Empowering vulnerable children through quality education, arts, and leadership initiatives in Osu, Accra, Ghana.
                        </p>
                        <div className="flex items-center gap-2.5 mt-1">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={item.label}
                                    className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 text-white transition-colors duration-200"
                                >
                                    <item.icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-base text-white tracking-tight">Navigation</h4>
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

                    {/* Contact Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-base text-white tracking-tight">Contact</h4>
                        <div className="flex flex-col gap-3 text-white/80 text-sm">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 shrink-0 opacity-70 mt-0.5" />
                                <p className="font-normal">Osu, Accra, Ghana</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 shrink-0 opacity-70" />
                                <a href="tel:8608367468" className="hover:text-white transition-colors font-normal">860-836-7468</a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 shrink-0 opacity-70" />
                                <a href="mailto:info@theliliesfoundation.org" className="hover:text-white transition-colors font-normal">info@theliliesfoundation.org</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-white/60 text-xs font-normal">
                        &copy; {new Date().getFullYear()} Lilies of the Field Academy. Registered NGO in Ghana.
                    </p>
                    <div className="flex items-center gap-5 text-white/60 text-xs font-normal">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-white/70 bg-white/10 px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/15">
                            Osu, Accra
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
