"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, Users, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal-text elements: reveal with blur and scale
      const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text");
      revealElements.forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.95, filter: "blur(20px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Special hero reveal: more dramatic entry
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 100, scale: 0.9, filter: "blur(30px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          stagger: 0.3,
          ease: "expo.out",
          delay: 0.6,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex-col flex overflow-hidden bg-white" ref={containerRef}>
      {/* Hero Section - Light Blue Background */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#2563eb] pt-32 md:pt-40">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2563eb]/80 via-[#2563eb]/50 to-[#2563eb]/90 z-10" />
          <Image
            src="/images/edited1.png"
            alt="Children studying"
            fill
            className="object-cover opacity-60 md:opacity-75 grayscale-[10%] scale-105"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-7xl text-center text-white pb-20">
          <h1 className="hero-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 leading-[0.9] tracking-tight text-white text-balance">
            Championing Education, <br /> Arts & Leadership.
          </h1>
          <p className="hero-reveal text-lg md:text-2xl text-blue-50 mb-16 text-balance max-w-2xl mx-auto leading-relaxed font-light opacity-90">
            Lilies of The Field Academy is committed to transforming the lives of young girls, boys and at-risk families through education, performing arts, and leadership initiatives.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/give"
              className="bg-[#22c55e] hover:bg-white hover:text-[#22c55e] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 active:scale-95 whitespace-nowrap animate-pulse-glow"
            >
              Support Our Mission ❤️
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center gap-2 group"
            >
              Read Our Story <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 md:py-48 bg-white px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col items-start text-left">
            <span className="reveal-text uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[12px] mb-6 block transform hover:-translate-y-1 transition-transform">
              Established in Osu, Accra
            </span>
            <h2 className="reveal-text text-5xl md:text-7xl font-heading font-bold mb-10 text-slate-900 leading-[1.05] tracking-tight">
              A haven for marginalized youth since 2016.
            </h2>
            <p className="reveal-text text-xl text-slate-500 leading-relaxed font-light max-w-xl mb-12">
              As a vital after-school haven, the academy tackles critical educational and healthcare needs, while uplifting vulnerable populations and championing sustainable youth development.
            </p>
            <div className="grid grid-cols-2 gap-8 w-full reveal-text">
              {[
                { label: "Students Supported", val: "111" },
                { label: "Girls & Young Women", val: "58%" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-2">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">{item.label}</span>
                  <span className="text-4xl font-heading font-bold text-[#2563eb]">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-text relative aspect-[1/1] w-full rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
            <Image
              src="/images/pic9.jpeg"
              alt="Academy students"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats - Light Blue Background */}
      <section className="py-24 bg-[#2563eb] text-white px-6 rounded-[5rem] mx-4 md:mx-10 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-stretch">
            {[
              { value: "100%", label: "Exam Pass Rate", icon: BookOpen, sub: "Proficiency in Year end Exams" },
              { value: "92", label: "Arts Participants", icon: Users, sub: "Music education program participation" },
              { value: "2016", label: "Year Founded", icon: Heart, sub: "Supporting the children of Osu" },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal-text flex flex-col items-center p-12 rounded-[3.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-[#2563eb] flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight text-white">{stat.value}</h3>
                <p className="text-white font-bold text-base uppercase tracking-widest mb-3 opacity-80">{stat.label}</p>
                <p className="text-blue-100 text-sm font-light leading-relaxed max-w-[200px]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal-text text-6xl md:text-8xl font-heading font-bold mb-12 leading-[1.05] tracking-tight text-slate-900">
            Transformation <br /> starts with you.
          </h2>
          <p className="reveal-text text-xl md:text-2xl text-slate-500 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
            Your single act of generosity can alter the trajectory of a child&apos;s entire life. Join us in building a
            future of hope today.
          </p>
          <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/donate"
              className="bg-[#2563eb] text-white px-20 py-7 rounded-full text-2xl font-bold hover:bg-[#1d4ed8] transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-3 animate-pulse-glow"
            >
              Donate Now ❤️
            </Link>
            <Link
              href="/get-involved"
              className="bg-slate-50 text-slate-900 px-16 py-7 rounded-full text-xl font-bold hover:bg-white hover:text-[#2563eb] transition-all shadow-xl active:scale-95"
            >
              Explore Volunteerism
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
