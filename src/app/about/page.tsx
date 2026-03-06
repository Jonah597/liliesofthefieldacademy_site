"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen">
            {/* 1. HERO - ELEGANT AND MINIMALIST */}
            <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Our Story
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        The journey to <br /> freedom begins here.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Lilies of the Field Academy was born to rewrite the narrative for children
                        facing the weight of poverty and limited opportunity.
                    </p>
                </div>
            </section>

            {/* 2. VISION & MISSION - REFINED CARDS */}
            <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <div className="flex flex-col items-start gap-10">
                        <div className="bg-slate-100 p-8 rounded-4xl border border-slate-200 shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 group">
                            <CheckCircle2 className="w-10 h-10 text-[#2563eb]" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight">
                            Our Vision: <br /> <span className="text-[#2563eb]">Self-Reliant Leaders.</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            We envision a world where every child, regardless of birthright, has the educational foundation and mental resilience to lead themselves and their communities.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-10">
                        <div className="bg-slate-100 p-8 rounded-4xl border border-slate-200 shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 group">
                            <CheckCircle2 className="w-10 h-10 text-[#22c55e]" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight">
                            Our Mission: <br /> <span className="text-[#22c55e]">Holistic Catalysts.</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            Our mission is to dismantle barriers to education by providing high-quality tuition, nutritional stability, and mentorship to students in Greater Accra and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. STORY SECTION - DISCOVERY */}
            <section className="py-24 md:py-48 bg-slate-900 text-white rounded-[5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="flex flex-col items-start">
                            <span className="uppercase text-[#4ade80] font-bold tracking-[0.2em] text-[13px] mb-10 block">
                                Decades of Dedication
                            </span>
                            <h2 className="text-5xl md:text-8xl font-heading font-bold mb-12 text-white leading-[1] tracking-tight">
                                How Excellence <br /> Transformed Lives.
                            </h2>
                            <div className="space-y-10 text-slate-300 text-2xl leading-relaxed font-light">
                                <p>
                                    What started as a shared commitment between a small group of educators has grown into a beacon of hope for thousands of students in Ghana.
                                </p>
                                <p>
                                    We saw brilliant minds being dimmed by the sheer cost of basic education—uniforms, books, and meals. We decided to bridge that gap with absolute integrity and clinical excellence.
                                </p>
                            </div>
                            <Link href="/get-involved" className="mt-16 inline-flex items-center gap-4 bg-[#2563eb] text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-[#2563eb] transition-all shadow-2xl active:scale-95">
                                Join the Movement <ArrowRight className="w-7 h-7" strokeWidth={3} />
                            </Link>
                        </div>
                        <div className="relative aspect-[4/5] w-full rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/5 order-first lg:order-last translate-y-10">
                            <Image src="/images/pic10.jpeg" alt="Our impact" fill className="object-cover transition-transform duration-1000 hover:scale-[1.03]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. VALUES - BOLD & CLEAN */}
            <section className="py-24 md:py-48 bg-white px-6 w-full max-w-7xl mx-auto">
                <div className="text-center mb-24 md:mb-40">
                    <h2 className="text-6xl md:text-8xl font-heading font-bold text-slate-900 leading-[1] tracking-tight mb-8">Values we embody.</h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">Foundational principles that guide every decision at the academy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        { title: "Empowerment", desc: "We give tools and knowledge, not just temporary relief, to create lasting autonomy for generations.", color: "bg-[#2563eb]" },
                        { title: "Compassion", desc: "Leading with deep empathy, acknowledging the unique story and baggage of every child we serve.", color: "bg-[#22c55e]" },
                        { title: "Integrity", desc: "Upholding the highest standards of transparency and trust in all our financial and academic operations.", color: "bg-[#d72638]" },
                    ].map((value, i) => (
                        <div key={i} className="flex flex-col items-start gap-8 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 hover:bg-white transition-all duration-500 hover:shadow-2xl">
                            <div className={`w-14 h-14 rounded-2xl ${value.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110`}>
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-slate-900">{value.title}</h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-light">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
