"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Heart, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const volunteerRoles = [
    {
        title: "Education Support",
        desc: "Assist our teachers in classrooms, provide tutoring sessions, or help develop learning materials for our students.",
        icon: GraduationCap,
        color: "bg-blue-50 text-[#2563eb]"
    },
    {
        title: "Community Outreach",
        desc: "Help us organize community events, health screenings, and family support programs in the regions we serve.",
        icon: Users,
        color: "bg-green-50 text-[#22c55e]"
    },
    {
        title: "Administrative Help",
        desc: "Lend your professional skills in marketing, fundraising, or operations to help our academy run more efficiently.",
        icon: Heart,
        color: "bg-red-50 text-red-500"
    }
];

const sponsorshipLevels = [
    {
        title: "Term Scholar",
        price: "120",
        period: "term",
        features: ["School uniforms & shoes", "Term textbook set", "Daily nutritious dinner", "Local healthcare support"],
        cta: "Sponsor Term",
        highlight: false
    },
    {
        title: "Annual Impact",
        price: "350",
        period: "year",
        features: ["Full tuition & fees", "All uniforms & supplies", "Daily after-school dinner", "Music & Arts program", "KPI tracking & reports"],
        cta: "Most Impactful",
        highlight: true
    },
    {
        title: "Legacy Partner",
        price: "1,000",
        period: "year",
        features: ["Full Annual support", "Future building fund contrib", "Tertiary education savings", "Direct community impact", "Bi-annual video updates"],
        cta: "Build a Legacy",
        highlight: false
    }
];

export default function GetInvolved() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text");
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
            {/* 1. HERO */}
            <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Be the Change
                    </span>
                    <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Your hands, <br /> their future.
                    </h1>
                    <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Whether you give your time as a volunteer or your resources as a sponsor,
                        you are making an eternal investment in a child&apos;s life.
                    </p>
                </div>
            </section>

            {/* 2. VOLUNTEER SECTION */}
            <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div className="reveal-text">
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 text-slate-900 leading-tight">Volunteer your expertise.</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light mb-12">
                            Our academy thrives on the dedication of volunteers from across the globe.
                            Join our local or international teams to help us deliver excellence.
                        </p>
                        <button className="bg-[#2563eb] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 hover:bg-[#1d4ed8] active:scale-95 flex items-center gap-3">
                            Apply to Volunteer <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="reveal-text relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                        <Image src="/images/pic8.jpeg" alt="Volunteer teaching" fill className="object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {volunteerRoles.map((role, i) => (
                        <div key={i} className="reveal-text p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className={`w-20 h-20 rounded-3xl ${role.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                <role.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900">{role.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-light">{role.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SPONSORSHIP SECTION */}
            <section className="py-24 md:py-48 px-6 bg-[#2563eb] text-white rounded-[5.5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
                <div className="container relative z-10 mx-auto max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-24 reveal-text">
                        <h2 className="text-6xl md:text-8xl font-heading font-bold mb-12 leading-tight tracking-tight">Sponsor a bright mind.</h2>
                        <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed opacity-90">
                            Directly impact a child&apos;s life by covering their essential needs.
                            Your sponsorship provides more than supplies—it providing hope.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {sponsorshipLevels.map((plan, i) => (
                            <div key={i} className={`reveal-text p-16 rounded-[4.5rem] border flex flex-col ${plan.highlight ? 'bg-white text-slate-900 border-white shadow-3xl scale-105' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'}`}>
                                <h3 className={`text-2xl font-bold font-heading mb-4 ${plan.highlight ? 'text-[#2563eb]' : 'text-white'}`}>{plan.title}</h3>
                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-5xl font-bold">${plan.price}</span>
                                    <span className="text-lg opacity-60">/{plan.period}</span>
                                </div>
                                <ul className="flex flex-col gap-6 mb-16 flex-1">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-4 text-lg font-light leading-tight">
                                            <CheckCircle2 className={`w-6 h-6 shrink-0 ${plan.highlight ? 'text-[#22c55e]' : 'text-white/40'}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-6 rounded-full font-bold text-xl transition-all active:scale-95 shadow-xl ${plan.highlight ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]' : 'bg-white text-[#2563eb] hover:bg-blue-50'}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 reveal-text text-center text-blue-100 font-light max-w-2xl mx-auto italic">
                        &quot;I didn&apos;t just get a scholarship; I got a family that believes in me.&quot; — Kofi, Grade 6 Student
                    </div>
                </div>
            </section>

            {/* 4. FAQ / CTA SHORT */}
            <section className="py-24 md:py-48 px-6 text-center max-w-4xl mx-auto">
                <div className="reveal-text">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 text-slate-900">Have questions?</h2>
                    <p className="text-xl text-slate-500 font-light mb-16">
                        Our team is available to discuss group volunteer opportunities or custom corporate sponsorship packages.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
                            Corporate Inquiry
                        </button>
                        <button className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-12 py-6 rounded-full font-bold text-lg hover:bg-blue-50 transition-all">
                            Vounteer Handbook
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
