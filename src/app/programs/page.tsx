"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const programs = [
    {
        title: "Academic Excellence",
        shortStory: "Kwame used to help his mother sell fruit during school hours. Now, he's top of his class in mathematics. By fully covering tuition, exams, and providing a safe learning environment, we make sure potential isn't wasted.",
        impact: "Over 5,000 children kept in school, actively learning.",
        img: "/images/edited3.png",
        accent: "text-[#2563eb]",
        bg: "bg-[#2563eb]"
    },
    {
        title: "Balanced Nutrition",
        shortStory: "It's hard to learn when your stomach is empty. For many children, our hot lunch is their only guaranteed meal of the day. A simple bowl of rice and stew changes a child's ability to focus entirely.",
        impact: "1.2 Million nutritious meals served, combating malnutrition.",
        img: "/images/pic15.jpeg",
        accent: "text-[#22c55e]",
        bg: "bg-[#22c55e]"
    },
    {
        title: "Mentorship & Arts",
        shortStory: "Education isn't just academic. Our volunteer mentors spend weekends teaching life skills, emotional intelligence, and arts. They provide the supportive figures that many children lack at home.",
        impact: "300 active volunteer mentors changing lives weekly.",
        img: "/images/edited7.png",
        accent: "text-[#d72638]",
        bg: "bg-[#d72638]"
    },
    {
        title: "Leadership Lab",
        shortStory: "We don't just want to create graduates; we want to create leaders. High school students in our program learn public speaking, community organizing, and basic entrepreneurship.",
        impact: "200+ trained young leaders currently giving back to their communities.",
        img: "/images/edited8.png",
        accent: "text-[#2563eb]",
        bg: "bg-[#2563eb]"
    }
];

export default function Programs() {
    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen">
            {/* 1. HERO - CLEAN & FOCUSED */}
            <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Our Initiatives
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Holistic support <br /> for every child.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Addressing the physical, academic, and emotional needs of our students to ensure a complete path to success.
                    </p>
                </div>
            </section>

            {/* 2. PROGRAMS LIST - SPACIOUS ALTERNATING LAYOUT */}
            <section className="py-24 md:py-48 px-6 bg-white w-full max-w-7xl mx-auto">
                <div className="flex flex-col gap-32 md:gap-64">
                    {programs.map((prog, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 md:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] border-[12px] border-slate-50 p-6">
                                    <Image src={prog.img} alt={prog.title} fill className="object-cover rounded-[3.5rem]" />
                                    <div className="absolute inset-x-8 bottom-8 z-10">
                                        <div className="bg-white/80 backdrop-blur-md rounded-4xl p-8 shadow-2xl border border-white/40">
                                            <h4 className="font-heading font-bold text-slate-900 text-xl mb-2">Impact Highlight</h4>
                                            <p className={`text-2xl font-bold tracking-tight ${prog.accent}`}>{prog.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                                <span className={`font-bold tracking-[0.2em] uppercase text-[12px] mb-8 block ${prog.accent}`}>Initiative 0{index + 1}</span>
                                <h2 className="text-4xl md:text-7xl font-heading font-bold mb-12 text-slate-900 leading-[1] tracking-tight">{prog.title}</h2>
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-16 italic border-l-4 border-slate-100 pl-10 opacity-90">
                                    "{prog.shortStory}"
                                </p>
                                <Link
                                    href="/donate"
                                    className={`inline-flex items-center gap-4 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-all duration-300 active:scale-95 group ${prog.bg}`}
                                >
                                    Sponsor Initiative <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CTA - REFINED BUTTONS */}
            <section className="py-24 md:py-48 bg-slate-900 text-white text-center rounded-[5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
                <div className="max-w-4xl mx-auto relative z-10 px-6">
                    <h2 className="text-5xl md:text-8xl font-heading font-bold mb-12 leading-[1.1] tracking-tight">
                        Be the reason a <br /> student thrives.
                    </h2>
                    <Link href="/donate" className="inline-block bg-[#22c55e] border-2 border-[#22c55e] text-white px-20 py-7 rounded-full text-2xl font-bold hover:bg-white hover:text-[#22c55e] transition-all duration-500 shadow-2xl active:scale-95">
                        Start Your Support ❤️
                    </Link>
                </div>
            </section>
        </div>
    );
}
