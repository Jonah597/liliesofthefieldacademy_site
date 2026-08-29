"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
    {
        title: "From the Market to the Classroom: Fatima's Journey",
        category: "Student Journey",
        excerpt: "At ten years old, Fatima spent her days weaving through crowded markets selling water. Today, she is representing our academy in national science fairs.",
        quote: "I didn't know I was good at math until I had the chance to sit at a desk instead of a market stall.",
        author: "Fatima, 14",
        img: "/images/pic11.jpeg",
        color: "text-[#2563eb]"
    },
    {
        title: "Why I Gave Up My Weekends to Teach",
        category: "Volunteer Experience",
        excerpt: "Mr. Addo is a corporate lawyer from Monday to Friday. But on Saturdays, he teaches history and leadership to our high school cohort.",
        quote: "These kids have more resilience than any CEO I've met. They just need someone to believe in them.",
        author: "Kwesi Addo, Volunteer",
        img: "/images/pic8.jpeg",
        color: "text-[#22c55e]"
    },
    {
        title: "A Community Transformed: The Impact of Clean Water",
        category: "Transformation",
        excerpt: "When the academy built a borehole for the school, it didn't just help the students. It changed the daily routine of the entire surrounding village.",
        quote: "We used to walk two hours before school to fetch water. Now, we walk two minutes.",
        author: "Community Member",
        img: "/images/edited9.png",
        color: "text-[#d72638]"
    }
];

export default function Stories() {
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
            {/* 1. HERO - EMOTIVE & CRISP */}
            <section className="relative min-h-[60svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Voices of Change
                    </span>
                    <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Stories that <br /> inspire hope.
                    </h1>
                    <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Beyond statistics are real human lives. These are the personal journeys
                        of the students and volunteers who make up our academy.
                    </p>
                </div>
            </section>

            {/* 2. FEATURED STORY - BLUE OVERLAY */}
            <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto w-full">
                <div className="reveal-text relative rounded-[5rem] overflow-hidden group shadow-2xl aspect-[16/9] min-h-[600px] border-[12px] border-slate-50 p-6">
                    <Image src="/images/pic17.jpeg" alt="Featured Story" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-[4rem]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/90 via-[#2563eb]/40 to-transparent rounded-[4rem]" />

                    <div className="absolute bottom-0 left-0 p-12 md:p-24 w-full max-w-6xl z-20">
                        <span className="bg-[#22c55e] text-white text-[12px] font-bold uppercase tracking-[0.2em] py-3 px-6 rounded-full mb-10 inline-block shadow-2xl">
                            Featured Narrative
                        </span>
                        <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-10 leading-[1] tracking-tight text-balance">
                            &quot;They told me girls in my village don&apos;t become doctors. Lilies Academy told me I could.&quot;
                        </h2>
                        <div className="flex items-center gap-6 text-white/80">
                            <span className="font-bold text-2xl">Grace, Future Pediatrician</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STORIES GRID - EDITORIAL & HIGH CONTRAST */}
            <section className="py-24 md:py-48 px-6 bg-white w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
                    {stories.map((story, i) => (
                        <article key={i} className="reveal-text group flex flex-col items-start cursor-pointer transition-all duration-700 hover:-translate-y-4">
                            <div className="relative aspect-[4/3] w-full rounded-[4.5rem] overflow-hidden mb-16 shadow-xl group-hover:shadow-2xl transition-all duration-700 border-[8px] border-slate-50 p-6 bg-slate-50">
                                <Image src={story.img} alt={story.title} fill className="object-cover rounded-[3.5rem]" />
                            </div>

                            <div className="flex flex-col flex-1 px-4">
                                <span className={`font-bold tracking-[0.2em] uppercase text-[12px] mb-8 block ${story.color}`}>
                                    {story.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-10 leading-[1.1] transition-colors tracking-tight">
                                    {story.title}
                                </h3>
                                <p className="text-xl text-slate-500 leading-relaxed font-light mb-16">
                                    {story.excerpt}
                                </p>

                                <div className="mt-auto bg-slate-50 rounded-[4rem] p-12 border border-slate-100 relative overflow-hidden flex flex-col group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                                    <Quote className="absolute -top-6 -right-6 w-32 h-32 text-slate-200 -z-0 opacity-40 transform rotate-12" />
                                    <p className="font-heading font-bold text-slate-800 text-2xl italic mb-8 relative z-10 leading-relaxed">&quot;{story.quote}&quot;</p>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-px bg-[#2563eb]" />
                                        <p className="text-sm font-bold text-[#2563eb] uppercase tracking-[0.2em]">{story.author}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 4. NEWSLETTER - BRAND BLUE */}
            <section className="py-24 md:py-48 bg-[#2563eb] text-white text-center rounded-[5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at:2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
                <div className="max-w-4xl mx-auto relative z-10 px-6">
                    <h2 className="reveal-text text-6xl md:text-9xl font-heading font-bold mb-12 leading-tight tracking-tight">Inspire your <br /> inbox.</h2>
                    <p className="reveal-text text-xl md:text-2xl text-blue-100 mb-20 max-w-2xl mx-auto font-light leading-relaxed opacity-90">Join our list of supporters to receive monthly stories direct from the field.</p>
                    <form className="reveal-text flex flex-col md:flex-row gap-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-10 py-6 text-white placeholder-blue-200 font-bold text-lg focus:outline-none focus:ring-4 ring-[#22c55e]/30 transition-all backdrop-blur-md"
                        />
                        <button className="bg-[#22c55e] text-white font-bold rounded-full px-16 py-6 hover:bg-white hover:text-[#22c55e] transition-all shadow-2xl text-xl active:scale-95">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
