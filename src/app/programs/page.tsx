"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Education & Literacy",
    shortStory:
      "Our after-school haven provides critical coaching in English, Math, and History. We ensure students are not just attending class, but truly mastering the curriculum to break the cycle of poverty.",
    impact: "100% proficiency rate in year-end exams for three consecutive years.",
    img: "/images/edited3.png",
    accent: "text-[#2563eb]",
    bg: "bg-[#2563eb]",
  },
  {
    title: "Performing Arts & Music",
    shortStory:
      "From traditional African drumming to modern dance, our arts program is a beacon of joy and self-expression. It builds confidence and discipline that translates directly into academic success.",
    impact: "92 students participating in our music and dance education programs.",
    img: "/images/pic15.jpeg",
    accent: "text-[#22c55e]",
    bg: "bg-[#22c55e]",
  },
  {
    title: "Leadership & Mentorship",
    shortStory:
      "We cultivate the next generation of Ghanaian leaders. Through structured leadership initiatives and mentorship, our students grow into resilient, self-reliant community champions.",
    impact: "58% of our focus is on empowering young girls and women to lead.",
    img: "/images/edited8.png",
    accent: "text-[#d72638]",
    bg: "bg-[#d72638]",
  }
];

export default function Programs() {
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
      <section className="relative min-h-[70svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100">
        <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
          <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
            Our Initiatives
          </span>
          <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
            Holistic support <br /> for every child.
          </h1>
          <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
            Addressing the physical, academic, and emotional needs of our students to ensure a complete path to
            success.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-48 px-6 bg-white w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 md:gap-64">
          {programs.map((prog, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 md:gap-32 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2 reveal-text">
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
                <span className={`reveal-text font-bold tracking-[0.2em] uppercase text-[12px] mb-8 block ${prog.accent}`}>
                  Initiative 0{index + 1}
                </span>
                <h2 className="reveal-text text-4xl md:text-7xl font-heading font-bold mb-12 text-slate-900 leading-[1] tracking-tight">
                  {prog.title}
                </h2>
                <p className="reveal-text text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-16 italic border-l-4 border-slate-100 pl-10 opacity-90">
                  &ldquo;{prog.shortStory}&rdquo;
                </p>
                <Link
                  href="/donate"
                  className={`reveal-text inline-flex items-center gap-4 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-all duration-300 active:scale-95 group ${prog.bg}`}
                >
                  Sponsor Initiative <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section shifted to brand blue */}
      <section className="py-24 md:py-48 bg-[#2563eb] text-white text-center rounded-[5rem] mx-4 md:mx-10 mb-24 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at:2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 px-6">
          <h2 className="reveal-text text-5xl md:text-8xl font-heading font-bold mb-12 leading-[1.1] tracking-tight text-white">
            Be the reason a <br /> student thrives.
          </h2>
          <Link
            href="/donate"
            className="reveal-text inline-block bg-[#22c55e] border-2 border-[#22c55e] text-white px-20 py-7 rounded-full text-2xl font-bold hover:bg-white hover:text-[#22c55e] transition-all duration-500 shadow-2xl active:scale-95"
          >
            Start Your Support {"\u2764\uFE0F"}
          </Link>
        </div>
      </section>
    </div>
  );
}
