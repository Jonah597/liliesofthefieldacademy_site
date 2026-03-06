import Link from "next/link";
import { Mail, Phone, MapPin, Heart, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-40 pb-20 w-full mt-auto relative overflow-hidden font-sans rounded-t-[5rem] mx-2 md:mx-6 border-x-[12px] border-t-[12px] border-slate-50">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:32px_32px]" />

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    <div className="flex flex-col gap-10">
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-28 h-28 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <img src="/images/LOGO4.png" alt="Lilies Foundation Logo" className="h-[90%] w-[90%] object-contain" />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-xl leading-relaxed max-w-xs font-light opacity-90">
                            Empowering vulnerable children with absolute excellence in education and hope.
                        </p>
                        <div className="flex items-center gap-6">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition-all text-slate-300 hover:text-white">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="font-heading font-bold text-2xl text-white tracking-tight">Quick Navigation</h4>
                        <ul className="flex flex-col gap-5">
                            {['About', 'Programs', 'Gallery', 'Stories'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-[#2563eb] transition-all text-lg font-medium flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] scale-0 group-hover:scale-100 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="font-heading font-bold text-2xl text-white tracking-tight">Direct Support</h4>
                        <ul className="flex flex-col gap-5">
                            {['Donate Now', 'Volunteer', 'Partner With Us', 'Sponsor a Child'].map((item) => (
                                <li key={item}>
                                    <Link href={`/get-involved`} className="text-slate-400 hover:text-[#22c55e] transition-all text-lg font-medium flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] scale-0 group-hover:scale-100 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="font-heading font-bold text-2xl text-white tracking-tight">Contact Hub</h4>
                        <address className="not-italic flex flex-col gap-8 text-slate-400 text-lg">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#2563eb] transition-colors">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <p className="font-light">123 Faith Avenue, Community 2<br />Greater Accra, Ghana</p>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#22c55e] transition-colors">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <a href="tel:+233240000000" className="hover:text-white transition-colors font-light">+233 24 000 0000</a>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#d72638] transition-colors">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <a href="mailto:hello@liliesacademy.org" className="hover:text-white transition-colors font-light">hello@liliesacademy.org</a>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <p className="text-slate-500 text-lg font-medium opacity-80">
                        © {new Date().getFullYear()} Lilies of the Field Academy. Ghana NGO Registration No: CG12345
                    </p>
                    <p className="text-slate-500 text-lg flex items-center gap-3 font-medium opacity-80">
                        Made with <Heart className="w-6 h-6 text-[#ef4444]" fill="currentColor" /> for Ghana's Future
                    </p>
                </div>
            </div>
        </footer>
    );
}
