"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send, Heart, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text, .contact-fade");
            revealElements.forEach((el: HTMLElement) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 70, scale: 0.98, filter: "blur(15px)" },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.5,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>

            {/* Header - Brand Blue Gradient */}
            <section className="relative min-h-[60svh] w-full flex items-center justify-center overflow-hidden bg-[#2563eb] pt-32 md:pt-40 border-b border-slate-100">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2563eb]/90 via-[#2563eb]/70 to-[#2563eb] z-10" />
                    <Image src="/images/edited4.jpeg" alt="Center" fill className="object-cover opacity-20 grayscale" />
                </div>

                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center contact-fade">
                    <span className="uppercase text-white/80 font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Get In Touch
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-white leading-[0.95] tracking-tight text-balance">
                        Let&apos;s start a <br /> conversation.
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-90">
                        Whether you want to volunteer, partner, or simply learn more,
                        we are here to welcome you.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-12 contact-fade self-start">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-[#2563eb] shadow-xl rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Email Hub</h3>
                                <a href="mailto:info@theliliesfoundation.org" className="text-slate-600 hover:text-[#2563eb] transition-colors text-lg font-medium">info@theliliesfoundation.org</a>
                                <p className="text-sm mt-4 text-slate-400 font-bold uppercase tracking-widest">Global Support Team</p>
                            </div>

                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-[#22c55e] shadow-xl rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Direct Line</h3>
                                <a href="tel:8608367468" className="text-slate-600 hover:text-[#22c55e] transition-colors text-lg font-medium">860-836-7468</a>
                                <p className="text-sm mt-4 text-slate-400 font-bold uppercase tracking-widest">Foundation Office</p>
                            </div>
                        </div>

                        <div className="bg-[#2563eb]/5 p-12 rounded-[4rem] border border-[#2563eb]/10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left group hover:shadow-xl transition-all duration-500">
                            <div className="w-20 h-20 bg-white shadow-2xl rounded-[2rem] flex items-center justify-center text-red-500 shrink-0 group-hover:rotate-6 transition-transform">
                                <MapPin className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-heading mb-4 text-slate-900">Academy Location</h3>
                                <p className="text-slate-500 text-xl font-light leading-relaxed mb-8">
                                    Osu Neighborhood School Center<br />
                                    Accra, Ghana
                                </p>
                                <a href="https://www.google.com/maps/search/Osu,+Accra,+Ghana" target="_blank" className="font-bold text-[#2563eb] hover:text-[#1d4ed8] transition-all inline-flex items-center gap-2 group/link">
                                    View in Osu, Ghana <span className="w-8 h-px bg-[#2563eb] origin-left group-hover/link:scale-x-150 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-fade w-full lg:max-w-xl lg:ml-auto">
                        <div className="bg-white p-12 md:p-16 rounded-[4.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/5 rounded-bl-[4rem]" />

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h2 className="text-4xl font-heading font-bold mb-10 text-slate-900">Send a Message</h2>

                                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                                            <div className="flex flex-col gap-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Full Name</label>
                                                <input required type="text" className="w-full bg-slate-50 rounded-3xl border-2 border-slate-50 px-8 py-5 focus:bg-white focus:border-[#2563eb] transition-all text-lg font-medium outline-none" placeholder="Johnathan Doe" />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                                                <input required type="email" className="w-full bg-slate-50 rounded-3xl border-2 border-slate-50 px-8 py-5 focus:bg-white focus:border-[#2563eb] transition-all text-lg font-medium outline-none" placeholder="john@example.com" />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Inquiry Type</label>
                                                <select className="w-full bg-slate-50 rounded-3xl border-2 border-slate-50 px-8 py-5 focus:bg-white focus:border-[#2563eb] transition-all text-lg font-medium outline-none appearance-none">
                                                    <option>General Inquiry</option>
                                                    <option>Volunteering</option>
                                                    <option>Partnership</option>
                                                    <option>Sponsorship</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Your Message</label>
                                                <textarea required rows={4} className="w-full bg-slate-50 rounded-3xl border-2 border-slate-100 px-8 py-5 focus:bg-white focus:border-[#2563eb] transition-all text-lg font-medium outline-none resize-none" placeholder="How can we help?"></textarea>
                                            </div>
                                            <button
                                                disabled={isLoading}
                                                className="mt-6 bg-[#2563eb] text-white px-10 py-6 rounded-full font-bold text-xl hover:bg-[#1d4ed8] transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
                                            >
                                                {isLoading ? "Sending..." : "Send Message"}
                                                {!isLoading && <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-center flex flex-col items-center"
                                    >
                                        <div className="w-32 h-32 bg-[#22c55e]/10 text-[#22c55e] rounded-full flex items-center justify-center mb-10">
                                            <CheckCircle2 className="w-16 h-16" strokeWidth={2.5} />
                                        </div>
                                        <h2 className="text-4xl font-heading font-bold mb-6 text-slate-900 leading-tight">Message Sent!</h2>
                                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-sm">
                                            Thank you for reaching out. A member of our foundation will be in touch shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-[#2563eb] font-bold text-lg hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>

            {/* Quote section */}
            <section className="py-24 md:py-48 bg-[#2563eb] text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <Heart className="w-16 h-16 text-white mx-auto mb-10 opacity-30" />
                    <h2 className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight mb-10">
                        &quot;Every handshake is a building block for a child&apos;s tomorrow.&quot;
                    </h2>
                    <p className="text-2xl text-white/60 font-medium">Academy Motto</p>
                </div>
            </section>
        </div>
    );
}
