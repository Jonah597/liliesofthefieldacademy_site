/**
 * FILE: app/impact/page.tsx
 *
 * PURPOSE:
 * Shows the academy's measurable outcomes so supporters can see the practical effect
 * of donations, volunteer support, and educational programming.
 *
 * RESPONSIBILITIES:
 * - Summarizes key impact metrics using the shared impact data source
 * - Presents student testimony and qualitative evidence of educational progress
 * - Reassures donors through transparency language and a financial integrity section
 * - Uses GSAP reveal effects to animate storytelling sections into view
 *
 * USED BY:
 * Next.js route: /impact
 *
 * DATA:
 * This page reads from the shared impact data module so the numbers stay consistent
 * across the home, about, programs, donate, and impact pages.
 */

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BookOpen, GraduationCap, Heart, Users, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactData } from "@/lib/impact-data";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { ...impactData.sponsoredStudents, icon: BookOpen },
    { ...impactData.highSchoolGraduatesSince2021, icon: GraduationCap },
    { ...impactData.universityStudents, icon: Heart },
    { ...impactData.additionalProgramChildren, icon: Users },
];

const testimonials = [
    {
        name: "Comfort, 18",
        role: "Dancer, Fashion Designer",
        quote: "Before coming to Lilies, I couldn't read English well. Now I help my younger brother with his homework and I dream of becoming a teacher.",
        image: "/images/Konny.jpeg"
    },
    {
        name: "Bright Adeti, 20",
        role: "Student(University Of Ghana)",
        quote: "The dance and music program taught me focus. My grades went from average to the top of my class because of the discipline I learned here.",
        image: "/images/adeti.jpeg"
    }
];

export default function Impact() {
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>
            {/* 1. HERO */}
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-20">
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50" />
                    <Image src="/images/black-quare.jpeg" alt="Students celebrating together at an outdoor event" fill className="object-cover opacity-75 md:opacity-85" priority />
                </div>
                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Proven Results
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight text-balance">
                        Measured impact. <br /> Real lives transformed.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        We prioritize programmatic transparency. Every contribution directly creates tangible, sustainable educational outcomes for children in Accra.
                    </p>
                </div>
            </section>

            {/* 2. KEY METRICS */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className="reveal-text bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-xl bg-white text-[#2563eb] flex items-center justify-center mb-6 shadow-2xs border border-slate-100">
                                <m.icon className="w-5 h-5" strokeWidth={2.2} />
                            </div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-1.5 tracking-tight text-slate-900">{m.value}</h2>
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb] mb-2">{m.label}</p>
                                <p className="text-sm text-slate-600 font-normal leading-relaxed">{m.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CASE STUDIES / TESTIMONIALS */}
            <section className="py-20 md:py-28 bg-slate-50 px-6 w-full border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal-text text-center mb-14">
                        <span className="uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
                            Voices of Hope
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">Student Perspectives</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {testimonials.map((t, i) => (
                            <div key={i} className="reveal-text bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-2xs flex flex-col md:flex-row gap-6 items-center">
                                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-2xs border border-slate-100">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-heading font-bold text-base md:text-lg text-slate-900 mb-3 leading-snug">&ldquo;{t.quote}&rdquo;</p>
                                    <div>
                                        <p className="font-heading font-bold text-sm text-slate-900">{t.name}</p>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb] mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ANNUAL REPORT / TRANSPARENCY CTA */}
            <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center w-full">
                <div className="reveal-text bg-[#2563eb] rounded-2xl md:rounded-3xl p-8 md:p-14 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center">
                        <Sparkles className="w-8 h-8 text-white mb-4" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight leading-tight">
                            Our Commitment to Financial Integrity
                        </h2>
                        <p className="text-base md:text-lg text-blue-50/90 font-normal leading-relaxed max-w-xl mx-auto mb-8">
                            Contributions support student school fees, daily nutrition, teacher stipends, and academic materials.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3.5">
                            <a
                                href="/donate"
                                className="bg-[#22c55e] text-white px-7 py-3 rounded-full text-[15px] font-semibold hover:bg-[#16a34a] transition-colors shadow-xs active:translate-y-0.5"
                            >
                                Support Our Students
                            </a>
                            <a
                                href="/contact"
                                className="bg-white/10 text-white border border-white/30 px-7 py-3 rounded-full text-[15px] font-semibold hover:bg-white/20 transition-colors active:translate-y-0.5"
                            >
                                Request Financial Reports
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
