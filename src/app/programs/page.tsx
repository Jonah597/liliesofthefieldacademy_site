/**
 * FILE: app/programs/page.tsx
 *
 * PURPOSE:
 * Describes the academy's core educational programs and demonstrates how the
 * organization combines academics, arts, leadership, and care into a coherent model.
 *
 * RESPONSIBILITIES:
 * - Introduces each primary program pillar through a two-column story layout
 * - Lists the outcomes or activities associated with every major initiative
 * - Highlights the weekly rhythm of the academy's operations
 * - Includes a final donation call-to-action for supporters
 * - Uses GSAP reveal effects on content sections for a polished UX
 *
 * USED BY:
 * Next.js route: /programs
 *
 * DATA:
 * The program highlights are defined in a local array on this page and reference
 * the shared impact stats dataset for consistency with the project's broader metrics.
 */

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BookOpen, Music, Users, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactData } from "@/lib/impact-data";

gsap.registerPlugin(ScrollTrigger);

const programs = [
    {
        icon: BookOpen,
        title: "Academic Foundation",
        desc: "Core literacy, numeracy, and STEM education designed to bridge learning gaps for primary-age children. Our tailored curriculum ensures every child reads with confidence.",
        features: ["After-school homework assistance", "One-on-one literacy tutoring", "Foundational math and science", "English language proficiency"],
        image: "/images/pic9.jpeg",
        stats: `${impactData.sponsoredStudents.value} Students Currently Sponsored`
    },
    {
        icon: Music,
        title: "Cultural Dance & Music",
        desc: "Traditional Ghanaian dance, drumming, and performing arts. Arts education builds profound self-esteem, discipline, and cultural identity in young minds.",
        features: ["Traditional drumming workshops", "Choreography & performance", "Vocal training & rhythm", "International cultural exchange"],
        image: "/images/pic7.jpeg",
        stats: "Weekly Rehearsals"
    },
    {
        icon: Users,
        title: "Leadership & Mentorship",
        desc: "Empowering young girls and boys with life skills, public speaking, health awareness, and community responsibility to nurture the next generation of African leaders.",
        features: ["Girls' empowerment circles", "Community service projects", "Public speaking practice", "Health & hygiene education"],
        image: "/images/pic8.jpeg",
        stats: `${impactData.additionalProgramChildren.value} Additional Children Reached Through After-School & Dance Programs`
    },
];

export default function Programs() {
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
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-16">
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50" />
                    <Image src="/images/program2.jpeg" alt="Students participating in cultural arts" fill className="object-cover opacity-75 md:opacity-85" priority />
                </div>
                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Holistic Education
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight text-balance">
                        Igniting potential <br /> across disciplines.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        We blend rigorous academic support with traditional arts and essential life skills to cultivate well-rounded, confident learners.
                    </p>
                </div>
            </section>

            {/* 2. PROGRAM PILLARS */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-20 md:gap-28">
                    {programs.map((p, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={i}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                            >
                                <div className={`reveal-text ${isEven ? "" : "lg:col-start-2"}`}>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center border border-blue-100 shadow-2xs">
                                            <p.icon className="w-5 h-5" strokeWidth={2.2} />
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
                                            Core Pillar 0{i + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-heading font-bold mb-4 text-slate-900 leading-[1.15] tracking-tight">
                                        {p.title}
                                    </h2>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal mb-6">
                                        {p.desc}
                                    </p>
                                    <div className="space-y-3 mb-8">
                                        {p.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-sm md:text-base text-slate-700 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" strokeWidth={2.2} />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="inline-block bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                                        {p.stats}
                                    </div>
                                </div>
                                <div className={`reveal-text relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100 ${isEven ? "" : "lg:col-start-1"}`}>
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. SCHEDULE */}
            <section className="py-16 md:py-24 bg-slate-50 px-6 w-full border-t border-slate-100">
                <div className="max-w-5xl mx-auto">
                    <div className="reveal-text text-center mb-14">
                        <span className="uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
                            Daily Flow
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">A Week at the Academy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                 day: "Monday – Thursday", 
                                 time: "3:30 PM – 5:30 PM", 
                                 desc: "Academic literacy, mathematics support, reading circles, and structured homework completion." 
                                },

                            {
                              day: "Weekday Evenings",
                              time:"6:00 PM – 8:00 PM",
                              desc: "Traditional dance rehearsals, drum circles, storytelling, and cultural performance development."
                            },

                            {
                                 day: "Saturday Workshops", 
                                 time: "9:00 AM – 1:00 PM", 
                                 desc: "Leadership seminars, health & hygiene education, sports, and guest mentorship series." 
                                },

                        ].map((sched, i) => (
                            <div key={i} className="reveal-text bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-2xs flex flex-col gap-2.5">
                                <span className="text-[#2563eb] font-semibold text-xs uppercase tracking-[0.14em]">{sched.time}</span>
                                <h3 className="text-lg font-heading font-bold text-slate-900">{sched.day}</h3>
                                <p className="text-sm text-slate-600 font-normal leading-relaxed">{sched.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-16 md:py-24 bg-[#2563eb] text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <Sparkles className="w-8 h-8 text-white/80 mx-auto mb-4" />
                    <h2 className="reveal-text text-3xl sm:text-4xl font-heading font-bold mb-4 text-white leading-tight tracking-tight">
                        Support Our Curriculum
                    </h2>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
                        Classroom books, learning materials, traditional instruments, and dedicated teachers all rely on donor partnerships.
                    </p>
                    <a
                        href="/donate"
                        className="reveal-text inline-block bg-[#22c55e] text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-[#16a34a] transition-colors shadow-xs active:translate-y-0.5"
                    >
                        Sponsor A Program
                    </a>
                </div>
            </section>
        </div>
    );
}
