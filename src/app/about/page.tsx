"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
            {/* 1. HERO - ELEGANT AND MINIMALIST */}
            <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Our Story
                    </span>
                    <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        The journey to <br /> freedom begins here.
                    </h1>
                    <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        Lilies of the Field Academy was born to rewrite the narrative for children
                        facing the weight of poverty and limited opportunity.
                    </p>
                </div>
            </section>

            {/* 2. VISION & MISSION - FOUNDERS SECTION */}
            <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div className="reveal-text">
                        <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block">
                            Our Founders
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 text-slate-900 leading-[1.1] tracking-tight">
                            A bridge between <br /> Osu and the World.
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light mb-8">
                            Founded in January 2016 by <strong>Joseph Oko Adokwei</strong>, a native of Osu and dance instructor, and <strong>Kim Wiggin</strong>, a teacher and administrator from Connecticut, USA.
                        </p>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            Together, they discovered a critical gap: brilliant children in Osu were not attending school simply because their families could not afford basic fees, uniforms, and supplies. Lilies of the Field, operated by The Lilies Foundation, was born to fill that gap.
                        </p>
                    </div>
                    <div className="reveal-text relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                        <Image src="/images/pic10.jpeg" alt="Joseph and Kim" fill className="object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <div className="reveal-text flex flex-col items-start gap-10">
                        <div className="bg-slate-100 p-8 rounded-4xl border border-slate-200 shadow-xl flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-[#2563eb]" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 tracking-tight">Our Pledge</h2>
                        <ul className="space-y-6 text-xl text-slate-500 font-light">
                            <li>• Championing Education & Leadership</li>
                            <li>• Harnessing the power of Music and Dance</li>
                            <li>• Serving as a vital after-school haven</li>
                            <li>• Uplifting at-risk girls and boys</li>
                        </ul>
                    </div>
                    <div className="reveal-text flex flex-col items-start gap-10">
                        <div className="bg-slate-100 p-8 rounded-4xl border border-slate-200 shadow-xl flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-[#22c55e]" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 tracking-tight">Our Progress</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            Starting with 24 students in 2016, we now support 111 students who attend primary school during the day and come to Lilies for academic enrichment and arts in the afternoon.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. FUTURE VISION - BRAND BLUE */}
            <section className="py-24 md:py-48 bg-[#2563eb] text-white rounded-[5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <span className="reveal-text uppercase text-white font-bold tracking-[0.2em] text-[13px] mb-10 block opacity-80">
                        Coming in 2025
                    </span>
                    <h2 className="reveal-text text-6xl md:text-8xl font-heading font-bold mb-12 text-white leading-[1] tracking-tight">
                        A New Beacon for Osu.
                    </h2>
                    <p className="reveal-text text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        We are currently constructing a new, state-of-the-art school headquarters. This facility will offer full-time classes for grades 1-6, professional rehearsal spaces, and staff residences.
                    </p>
                    <Link href="/get-involved" className="reveal-text inline-flex items-center gap-4 bg-white text-[#2563eb] px-12 py-5 rounded-full text-xl font-bold hover:bg-white/90 transition-all shadow-2xl active:scale-95">
                        Support the Build <ArrowRight className="w-7 h-7" />
                    </Link>
                </div>
            </section>

            {/* 4. OUR LEADERSHIP - REFINED TEAM SECTION */}
            <section className="py-24 md:py-48 bg-white px-6 w-full max-w-7xl mx-auto">
                <div className="reveal-text text-center mb-24 md:mb-40">
                    <h2 className="text-6xl md:text-8xl font-heading font-bold text-slate-900 leading-[1] tracking-tight mb-8">Meet the Leadership.</h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto">The dedicated educators and visionaries driving our mission forward daily.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {[
                        {
                            name: "Kim Wiggin",
                            role: "Co-Founder",
                            desc: "A veteran educator with 35+ years in teaching and administration. Kim has pioneered arts education in Maine and Ghana.",
                            img: "/images/pic10.jpeg"
                        },
                        {
                            name: "Joe Oko Adokwei",
                            role: "Co-Founder & CEO",
                            desc: "An Osu native and professional dancer-choreographer. Joe leads the academy's vision for cultural and academic empowerment.",
                            img: "/images/lilies_img2.jpg"
                        },
                        {
                            name: "Luigia Adjei",
                            role: "Head Teacher",
                            desc: "Responsible for all academic and enrichment programs, Luigia has grown the student body from 10 to over 111 children.",
                            img: "/images/lilies_img1.jpg"
                        }
                    ].map((member, i) => (
                        <div key={i} className="reveal-text flex flex-col items-center text-center p-12 rounded-[4rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all duration-500 hover:shadow-2xl group">
                            <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-8 border-white shadow-xl group-hover:scale-105 transition-transform">
                                <Image src={member.img} alt={member.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">{member.name}</h3>
                            <p className="text-[#2563eb] font-bold uppercase tracking-widest text-sm mb-6">{member.role}</p>
                            <p className="text-lg text-slate-500 leading-relaxed font-light">{member.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Board Section - With Images */}
                <div className="reveal-text text-center mt-24">
                    <h3 className="text-4xl font-heading font-bold text-slate-900 mb-12">Supported by our Board</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Rachel Johnson", role: "Board Member", desc: "Dedicated to fostering educational opportunities and community growth.", img: "/images/pic1.jpeg" },
                            { name: "Matthew Wiggin", role: "Board Member", desc: "Passionate about leveraging technology to empower underserved communities.", img: "/images/pic2.jpeg" },
                            { name: "Marian Murphy Powell", role: "Board Member", desc: "A strong advocate for arts education and cultural enrichment programs.", img: "/images/pic3.jpeg" },
                            { name: "Elaina Watley", role: "Board Member", desc: "Expert in strategic planning and nonprofit management.", img: "/images/pic4.jpeg" },
                            { name: "Fiona Bryan", role: "Board Member", desc: "Committed to promoting health and wellness in developing communities.", img: "/images/pic5.jpeg" },
                            { name: "Donna Phillips", role: "Board Member", desc: "Experienced in fundraising and building sustainable community partnerships.", img: "/images/pic6.jpeg" },
                        ].map((boardMember, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all duration-500 hover:shadow-xl group">
                                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-6 border-white shadow-lg group-hover:scale-105 transition-transform">
                                    <Image src={boardMember.img} alt={boardMember.name} fill className="object-cover" />
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-slate-800 mb-1">{boardMember.name}</h4>
                                <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-4">{boardMember.role}</p>
                                <p className="text-base text-slate-500 leading-relaxed font-light">{boardMember.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
