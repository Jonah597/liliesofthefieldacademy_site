"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heart, Users, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pathways = [
    {
        title: "Monthly Giving Circles",
        desc: "Join a dedicated cohort of recurring donors providing reliable monthly support for student nutrition, books, and daily operations.",
        icon: Heart,
        cta: "Join The Circle",
        href: "/donate"
    },
    {
        title: "International Volunteers",
        desc: "Lend your expertise in teaching, arts, curriculum design, or administrative operations either on-site in Osu or remotely.",
        icon: Users,
        cta: "Apply to Volunteer",
        href: "#volunteer-form"
    },
    {
        title: "Corporate & Foundation Partnerships",
        desc: "Co-invest with Lilies Academy to construct infrastructure, sponsor academic classes, and expand community arts programs.",
        icon: Briefcase,
        cta: "Partner With Us",
        href: "/contact"
    },
    {
        title: "Sponsor A Scholar",
        desc: "Directly cover an individual child's full academic year fees, books, daily meals, and uniform.",
        icon: GraduationCap,
        cta: "Sponsor Now",
        href: "/donate"
    }
];

export default function GetInvolved() {
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
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-28 md:pt-36 pb-16 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-50/80 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Take Action
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-slate-900 leading-[1.1] tracking-tight text-balance">
                        Be the catalyst for <br /> sustainable change.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        Whether through monthly sponsorship, professional volunteering, or organizational partnerships, you can help shape a child&apos;s future.
                    </p>
                </div>
            </section>

            {/* 2. INVOLVEMENT PATHWAYS */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24">
                    {pathways.map((item, i) => (
                        <div
                            key={i}
                            className="reveal-text bg-slate-50 p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300 group"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white text-[#2563eb] flex items-center justify-center mb-6 shadow-2xs border border-slate-100">
                                    <item.icon className="w-6 h-6" strokeWidth={2.2} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold mb-3 text-slate-900 tracking-tight">{item.title}</h2>
                                <p className="text-base text-slate-600 font-normal leading-relaxed mb-6">{item.desc}</p>
                            </div>
                            <a
                                href={item.href}
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                            >
                                {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* 3. VOLUNTEER FORM SECTION */}
                <div id="volunteer-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="reveal-text">
                        <span className="uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
                            Direct Engagement
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 text-slate-900 leading-[1.12] tracking-tight">
                            Share your skills. <br /> Inspire young learners.
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed mb-6">
                            We welcome passionate educators, artists, mentors, and administrators. From teaching foundational literacy to leading arts workshops, your time makes a lasting impact.
                        </p>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xs border border-slate-100">
                            <Image src="/images/pic8.jpeg" alt="Volunteers and students" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="reveal-text bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <h3 className="text-2xl font-heading font-bold text-slate-900">Volunteer Application</h3>
                                <p className="text-sm text-slate-600 font-normal -mt-2 mb-1">Tell us about your background, skills, and availability.</p>

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
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Area of Focus</label>
                                    <select
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    >
                                        <option>Academic Tutoring (Literacy / Math)</option>
                                        <option>Performing Arts &amp; Cultural Music</option>
                                        <option>Youth Mentorship &amp; Life Skills</option>
                                        <option>Operations &amp; Digital Infrastructure</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 block mb-1.5">Statement of Interest</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Briefly describe your background and motivation..."
                                        className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-[#2563eb] transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#2563eb] text-white py-3.5 rounded-full text-base font-semibold hover:bg-[#1d4ed8] transition-colors shadow-xs active:translate-y-0.5"
                                >
                                    Submit Application
                                </button>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center text-center py-12">
                                <CheckCircle2 className="w-14 h-14 text-[#22c55e] mb-3" />
                                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1.5">Application Received</h3>
                                <p className="text-sm md:text-base text-slate-600 max-w-sm font-normal">
                                    Thank you for your willingness to serve. A representative from Lilies of the Field Academy will review your application and respond promptly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
