import Image from "next/image";
import Link from "next/link";
import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
        <footer className="bg-[#2563eb] text-white pt-24 pb-12 w-full mt-auto relative overflow-hidden font-sans rounded-t-[4rem] mx-2 md:mx-6 border-x-8 border-t-8 border-slate-50">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center group w-fit">
                            <div className="relative w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                                <Image
                                    src="/images/LOGO4.png"
                                    alt="Lilies Foundation Logo"
                                    fill
                                    sizes="80px"
                                    className="object-contain p-[5%]"
                                />
                            </div>
                        </Link>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xs font-light">
                            Empowering vulnerable children with absolute excellence in education and hope. One life at a time.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2563eb] transition-all text-white"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-heading font-bold text-xl text-white tracking-tight">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-white transition-all text-base font-medium flex items-center gap-2"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-heading font-bold text-xl text-white tracking-tight">Connect</h4>
                        <div className="flex flex-col gap-4 text-white/70 text-base">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 shrink-0 opacity-60" />
                                <p className="font-light">Osu, Accra, Ghana (Grassroots Neighborhood School)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 shrink-0 opacity-60" />
                                <a href="tel:8608367468" className="hover:text-white transition-colors font-light">860-836-7468</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 shrink-0 opacity-60" />
                                <a href="mailto:info@theliliesfoundation.org" className="hover:text-white transition-colors font-light">info@theliliesfoundation.org</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-white/50 text-base font-medium">
                        &copy; {new Date().getFullYear()} Lilies Academy. Ghana NGO CG12345
                    </p>
                    <div className="flex items-center gap-6 text-white/50 text-base font-medium">
                        <Link href="/privacy" className="hover:text-white">Privacy</Link>
                        <Link href="/terms" className="hover:text-white">Terms</Link>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 group">
                            <Heart className="w-4 h-4 text-white transition-transform group-hover:scale-125" fill="currentColor" />
                            <span className="text-white/80">Ghana</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
