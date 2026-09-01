"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
    {
        title: "From Reading Challenges to Classroom Leadership: Abena's Journey",
        excerpt: "When Abena first came to the academy, reading English was an overwhelming hurdle. Today, she leads the school's literacy circle and aspires to study education in university.",
        category: "Academic Progress",
        date: "October 2024",
        readTime: "4 min read",
        image: "/images/pic9.jpeg"
    },
    {
        title: "Finding Discipline Through Rhythm: Emmanuel's Leadership Story",
        excerpt: "Through traditional drumming and cultural dance rehearsals, Emmanuel developed unwavering focus, self-assurance, and collaborative leadership skills.",
        category: "Arts & Culture",
        date: "September 2024",
        readTime: "5 min read",
        image: "/images/pic7.jpeg"
    },
    {
        title: "Community Mobilization: How Parents in Osu Support Daily Learning",
        excerpt: "Community ownership is the bedrock of Lilies of the Field Academy. Meet the mothers and neighborhood leaders actively volunteering to coordinate meal programs.",
        category: "Community Impact",
        date: "August 2024",
        readTime: "6 min read",
        image: "/images/pic8.jpeg"
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
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-28 md:pt-36 pb-16 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-50/80 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Field Notes
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-slate-900 leading-[1.1] tracking-tight text-balance">
                        Journeys of progress, <br /> resilience &amp; purpose.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        Documented accounts of students, educators, and families whose trajectories are transformed through dedicated learning.
                    </p>
                </div>
            </section>

            {/* 2. STORIES GRID */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <article
                            key={i}
                            className="reveal-text bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300 group"
                        >
                            <div>
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb] mb-3">
                                        <span>{story.category}</span>
                                        <span className="text-slate-400 font-normal">{story.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-heading font-bold mb-3 text-slate-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                                        {story.title}
                                    </h2>
                                    <p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                        {story.excerpt}
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 flex items-center justify-between border-t border-slate-100/80 mt-2">
                                <span className="text-xs font-medium text-slate-400">{story.date}</span>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb] group-hover:translate-x-1 transition-transform">
                                    Read Report <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-16 md:py-24 bg-[#2563eb] text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <Sparkles className="w-8 h-8 text-white/80 mx-auto mb-4" />
                    <h2 className="reveal-text text-3xl sm:text-4xl font-heading font-bold mb-4 text-white leading-tight tracking-tight">
                        Support the Next Student Milestone
                    </h2>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
                        Your sponsorship directly funds school tuition, daily nutrition, and learning supplies for children in Accra.
                    </p>
                    <a
                        href="/donate"
                        className="reveal-text inline-block bg-[#22c55e] text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-[#16a34a] transition-colors shadow-xs active:translate-y-0.5"
                    >
                        Support Our Students
                    </a>
                </div>
            </section>
        </div>
    );
}
