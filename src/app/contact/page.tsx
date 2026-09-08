"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
    {
        icon: MapPin,
        title: "Academy Location",
        detail: "Osu, Accra, Ghana",
        sub: "Community education and youth arts center in the heart of Osu."
    },
    {
        icon: Mail,
        title: "Email Inquiries",
        detail: "info@theliliesfoundation.org",
        sub: "Direct general inquiries, partnership proposals, and press."
    },
    {
        icon: Phone,
        title: "Phone Support",
        detail: "860-836-7468",
        sub: "Available Monday – Friday, 9:00 AM – 5:00 PM GMT."
    }
];

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text");
            revealElements.forEach((el: HTMLElement) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 35, filter: "blur(8px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 92%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>
            {/* 1. HERO */}
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-16">
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50" />
                    <Image src="/images/contact2.jpeg" alt="Lilies of the Field Academy community" fill className="object-cover opacity-75 md:opacity-85" priority />
                </div>
                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Contact Us
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight text-balance">
                        Connect with our team.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        Reach out with inquiries regarding donations, volunteer engagement, partnerships, or visiting our campus in Accra.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT DETAILS & FORM */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Contact Info */}
                    <div className="reveal-text flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3 tracking-tight">Institutional Contacts</h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed">
                                Our leadership team operates across Ghana and the United States. We welcome inquiries from individual supporters, foundations, and corporate partners.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {contactDetails.map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-white text-[#2563eb] flex items-center justify-center shrink-0 shadow-2xs border border-slate-100">
                                        <item.icon className="w-4 h-4" strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 block mb-0.5">{item.title}</span>
                                        <p className="text-base font-heading font-bold text-slate-900 mb-0.5">{item.detail}</p>
                                        <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="reveal-text bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <h3 className="text-2xl font-heading font-bold text-slate-900">Send an Inquiry</h3>
                                <p className="text-sm text-slate-600 font-normal -mt-2 mb-1">Our administrative office typically responds within 24–48 business hours.</p>

                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Inquiry subject"
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        placeholder="Please provide details regarding your inquiry..."
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#2563eb] text-white py-3.5 rounded-full text-base font-semibold hover:bg-[#1d4ed8] transition-colors shadow-xs active:translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" /> Send Inquiry
                                </button>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center text-center py-14">
                                <CheckCircle2 className="w-14 h-14 text-[#22c55e] mb-3" />
                                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1.5">Message Delivered</h3>
                                <p className="text-sm md:text-base text-slate-600 max-w-sm font-normal">
                                    Thank you for contacting Lilies of the Field Academy. Our administrative team will respond to your message promptly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
