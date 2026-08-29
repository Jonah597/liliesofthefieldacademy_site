"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, Users, GraduationCap, Trophy, Globe, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const impactStats = [
    {
        value: "111",
        label: "Students Supported",
        sub: "Enrolled in our after-school programs for critical coaching.",
        icon: Users,
        color: "text-[#2563eb]",
        bg: "bg-[#2563eb]/10"
    },
    {
        value: "58%",
        label: "Girls & Young Women",
        sub: "A primary focus on female empowerment and safe learning spaces.",
        icon: Heart,
        color: "text-[#d72638]",
        bg: "bg-[#d72638]/10"
    },
    {
        value: "100%",
        label: "Exam Pass Rate",
        sub: "Three consecutive years of absolute proficiency in year-end exams.",
        icon: Trophy,
        color: "text-[#f59e0b]",
        bg: "bg-[#f59e0b]/10"
    },
    {
        value: "92",
        label: "Arts Participants",
        sub: "Students actively engaged in our music and traditional dance tracks.",
        icon: BookOpen,
        color: "text-[#22c55e]",
        bg: "bg-[#22c55e]/10"
    }
];

const achievements = [
    {
        title: "2016 Foundation",
        desc: "Started with 24 students in a leased and renovated building in Osu.",
        icon: Globe
    },
    {
        title: "National Finals",
        desc: "Our students reached the finals of Ghana's 'Talented Kids' national contest.",
        icon: Trophy
    },
    {
        title: "Future School",
        desc: "Launched the construction of a permanent, state-of-the-art Academy home.",
        icon: GraduationCap
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
            <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100 mb-20">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Our Impact
                    </span>
                    <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Measuring change, <br /> one life at a time.
                    </h1>
                    <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Our results aren&apos;t just measured in numbers—they are seen in the confidence
                        of our students and the transformation of the Osu community.
                    </p>
                </div>
            </section>

            {/* 2. STATS GRID */}
            <section className="py-24 px-6 max-w-7xl mx-auto w-full mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactStats.map((stat, i) => (
                        <div key={i} className="reveal-text group p-12 rounded-[4rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                            <div className={`w-20 h-20 rounded-3xl ${stat.bg} ${stat.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-10 h-10" />
                            </div>
                            <h3 className={`text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tighter ${stat.color}`}>{stat.value}</h3>
                            <p className="text-slate-900 font-bold uppercase tracking-widest text-[11px] mb-4">{stat.label}</p>
                            <p className="text-slate-500 font-light leading-relaxed text-sm">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. DETAILED BREAKDOWN */}
            <section className="py-24 md:py-48 px-6 bg-[#2563eb] text-white rounded-[5.5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
                <div className="container relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="reveal-text">
                            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 text-white leading-tight">Key Milestones</h2>
                            <div className="space-y-12">
                                {achievements.map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#2563eb] transition-all">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold font-heading mb-2">{item.title}</h4>
                                            <p className="text-blue-100 text-lg font-light leading-relaxed max-w-lg">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-text relative aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white/10 shadow-3xl">
                            <Image src="/images/pic15.jpeg" alt="Academy success" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-40 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="reveal-text text-5xl md:text-8xl font-heading font-bold mb-12 leading-tight tracking-tight text-slate-900">Be part of the progress.</h2>
                    <p className="reveal-text text-xl md:text-2xl text-slate-500 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                        Every child we support is a testament to the generosity of people like you.
                        Let&apos;s keep growing this impact together.
                    </p>
                    <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/donate" className="bg-[#2563eb] text-white px-16 py-6 rounded-full font-bold text-xl hover:bg-[#1d4ed8] transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                            Support a Child <Heart className="w-6 h-6" />
                        </Link>
                        <Link href="/about" className="text-slate-900 font-bold hover:text-[#2563eb] transition-all">
                            Read More Our Story <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
