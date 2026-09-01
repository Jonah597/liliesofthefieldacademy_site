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
                        Our Story
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-slate-900 leading-[1.1] tracking-tight text-balance">
                        The journey to <br /> opportunity begins here.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        Lilies of the Field Academy was established to provide children in Osu with the academic foundation, artistic discipline, and mentorship needed to thrive.
                    </p>
                </div>
            </section>

            {/* 2. VISION & MISSION - FOUNDERS SECTION */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
                    <div className="reveal-text">
                        <span className="uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
                            Our Founders
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-bold mb-5 text-slate-900 leading-[1.12] tracking-tight">
                            A bridge between <br /> Osu and the World.
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-5">
                            Founded in January 2016 by <strong className="text-slate-900 font-semibold">Joseph Oko Adokwei</strong>, an Osu native and dance instructor, and <strong className="text-slate-900 font-semibold">Kim Wiggin</strong>, a teacher and administrator from Connecticut, USA.
                        </p>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Together, they recognized that talented children in Osu were missing foundational schooling due to family financial hardship. Lilies of the Field Academy was established to eliminate barriers to learning and nourish full human potential.
                        </p>
                    </div>
                    <div className="reveal-text relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                        <Image src="/images/pic10.jpeg" alt="Joseph Oko Adokwei and Kim Wiggin" fill className="object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="reveal-text flex flex-col items-start gap-5 bg-slate-50 p-8 rounded-2xl md:rounded-3xl border border-slate-100">
                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#2563eb]" strokeWidth={2.2} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Our Core Pledge</h2>
                        <ul className="space-y-3.5 text-base text-slate-600 font-normal leading-relaxed">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Academic literacy and daily homework assistance</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Traditional Ghanaian dance, rhythm, and performing arts</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Safe after-school environment with nutritious meals</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Targeted mentorship for girls and at-risk boys</li>
                        </ul>
                    </div>
                    <div className="reveal-text flex flex-col items-start gap-5 bg-slate-50 p-8 rounded-2xl md:rounded-3xl border border-slate-100">
                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#22c55e]" strokeWidth={2.2} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Our Progress</h2>
                        <p className="text-base text-slate-600 leading-relaxed font-normal">
                            From an initial cohort of 24 students in 2016, our academy has expanded to support 111 active students who attend public school during the day and come to Lilies for academic tutoring, arts education, and life skills every afternoon.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. FUTURE VISION */}
            <section className="py-16 md:py-24 bg-[#2563eb] text-white rounded-2xl md:rounded-3xl mx-4 md:mx-8 mb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <span className="reveal-text uppercase text-white/90 font-semibold tracking-[0.14em] text-xs mb-4 block">
                        Capital Initiative
                    </span>
                    <h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight">
                        A Dedicated School Facility for Osu.
                    </h2>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
                        We are actively fundraising to construct our permanent headquarters in Accra, complete with modern classrooms for grades 1–6, dedicated arts rehearsal studios, and teacher accommodations.
                    </p>
                    <Link href="/get-involved" className="reveal-text inline-flex items-center gap-2 bg-white text-[#2563eb] px-7 py-3.5 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors shadow-sm active:translate-y-0.5">
                        Support the Building Fund <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* 4. OUR LEADERSHIP */}
            <section className="py-16 md:py-24 bg-white px-6 w-full max-w-7xl mx-auto">
                <div className="reveal-text text-center mb-14 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">Institutional Leadership</h2>
                    <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">The educators, community leaders, and directors guiding our daily operations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            name: "Kim Wiggin",
                            role: "Co-Founder & Director",
                            desc: "A veteran educator with over 35 years in teaching and school administration across the United States and Ghana.",
                            img: "/images/pic10.jpeg"
                        },
                        {
                            name: "Joe Oko Adokwei",
                            role: "Co-Founder & Executive Director",
                            desc: "An Osu native, educator, and choreographer dedicated to youth empowerment through cultural arts and community programs.",
                            img: "/images/lilies_img2.jpg"
                        },
                        {
                            name: "Luigia Adjei",
                            role: "Head Teacher",
                            desc: "Oversees daily curriculum delivery, literacy assessments, and teacher coordination across all primary grade levels.",
                            img: "/images/lilies_img1.jpg"
                        }
                    ].map((member, i) => (
                        <div key={i} className="reveal-text flex flex-col items-center text-center p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                            <div className="relative w-32 h-32 mb-5 rounded-full overflow-hidden border-2 border-white shadow-xs">
                                <Image src={member.img} alt={member.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{member.name}</h3>
                            <p className="text-[#2563eb] font-semibold uppercase tracking-[0.14em] text-xs mb-3">{member.role}</p>
                            <p className="text-sm text-slate-600 leading-relaxed font-normal">{member.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Board Section */}
                <div className="reveal-text text-center">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-8">Board of Directors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Rachel Johnson",
                                role: "Board Member",
                                desc: "Dedicated to expanding international education and community partnerships.",
                                img: "/images/pic1.jpeg"
                            },

                            {
                                name: "Matthew Wiggin",
                                role: "Board Member",
                                desc: "Passionate about leveraging digital tools to empower underserved students.",
                                img: "/images/pic2.jpeg"
                            },

                            {
                                name: "Marian Murphy Powell",
                                role: "Board Member",
                                desc: "Advocate for performing arts curriculum and creative development.",
                                img: "/images/pic3.jpeg"
                            },

                            {
                                name: "Elaina Watley",
                                role: "Board Member",
                                desc: "Specializes in strategic governance and nonprofit operational growth.",
                                img: "/images/pic4.jpeg"
                            },

                            {

                                name: "Fiona Bryan",
                                role: "Board Member",
                                desc: "Focuses on child wellness, nutrition, and community health initiatives.",
                                img: "/images/pic5.jpeg"
                            },

                            {
                                name: "Donna Phillips",
                                role: "Board Member",
                                desc: "Leads institutional fundraising and sustainable donor relations.",
                                img: "/images/pic6.jpeg"
                            },

                        ].map((boardMember, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xs transition-all duration-300">
                                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden border border-white shadow-2xs">
                                    <Image src={boardMember.img} alt={boardMember.name} fill className="object-cover" />
                                </div>
                                <h4 className="text-base font-heading font-bold text-slate-900 mb-0.5">{boardMember.name}</h4>
                                <p className="text-[#2563eb] font-semibold uppercase tracking-[0.14em] text-[11px] mb-2">{boardMember.role}</p>
                                <p className="text-xs text-slate-600 leading-relaxed font-normal">{boardMember.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
