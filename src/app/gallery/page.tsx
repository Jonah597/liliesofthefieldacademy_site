"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { src: "/images/pic9.jpeg", title: "Daily Literacy & Reading", category: "Academics" },
    { src: "/images/pic7.jpeg", title: "Cultural Drumming Rehearsal", category: "Arts" },
    { src: "/images/pic8.jpeg", title: "Mentorship Circle in Osu", category: "Community" },
    { src: "/images/pic10.jpeg", title: "Founder Joseph with Students", category: "Community" },
    { src: "/images/edited1.png", title: "Classroom Milestones", category: "Milestones" },
    { src: "/images/edited4.jpeg", title: "Youth Leadership Development", category: "Leadership" },
];

const categories = ["All", "Academics", "Arts", "Community", "Leadership", "Milestones"];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState("All");

    const filteredImages = activeTab === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeTab);

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
                    <Image src="/images/gallery.jpeg" alt="Students learning and performing at the academy" fill className="object-cover opacity-75 md:opacity-85" priority />
                </div>
                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Visual Archive
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight text-balance">
                        Moments of learning, <br /> heritage &amp; community.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        A photographic record of daily academic routines, cultural performances, and transformative milestones at the academy.
                    </p>
                </div>
            </section>

            {/* 2. FILTER & GALLERY GRID */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
                {/* Filter Buttons */}
                <div className="reveal-text flex flex-wrap items-center justify-center gap-2 mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer ${
                                activeTab === cat
                                    ? "bg-[#2563eb] text-white shadow-2xs"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredImages.map((img, i) => (
                        <div
                            key={i}
                            className="reveal-text relative aspect-square rounded-2xl overflow-hidden shadow-2xs border border-slate-100 group bg-slate-100"
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col justify-end p-6">
                                <span className="text-blue-300 text-xs font-semibold uppercase tracking-[0.14em] mb-1">{img.category}</span>
                                <h3 className="text-lg font-heading font-bold text-white leading-snug">{img.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-16 md:py-24 bg-[#2563eb] text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <Heart className="w-8 h-8 text-white/80 mx-auto mb-4" />
                    <h2 className="reveal-text text-3xl sm:text-4xl font-heading font-bold mb-4 text-white leading-tight tracking-tight">
                        Support Our Daily Operations
                    </h2>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
                        Every gift provides school uniforms, daily nutritious meals, and essential books for students in Osu.
                    </p>
                    <a
                        href="/donate"
                        className="reveal-text inline-block bg-[#22c55e] text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-[#16a34a] transition-colors shadow-xs active:translate-y-0.5"
                    >
                        Make a Donation
                    </a>
                </div>
            </section>
        </div>
    );
}
