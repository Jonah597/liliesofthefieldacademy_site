"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, Users, Heart, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactData } from "@/lib/impact-data";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal-text elements: quiet, cinematic reveal
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

      // Hero reveal
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex-col flex overflow-hidden bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-20">
        <div className="absolute inset-0 z-0 select-none">
          {/* Subtle blue gradient overlay allowing the image to show through */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50 z-10" />
          <Image
            src="/images/edited1.png"
            alt="Children studying at Lilies of the Field Academy"
            fill
            className="object-cover opacity-75 md:opacity-85"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
          <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-bold mb-6 leading-[1.08] tracking-tight text-white text-balance">
            Championing Education, <br /> Arts &amp; Leadership.
          </h1>
          <p className="hero-reveal text-base sm:text-lg md:text-[19px] text-blue-50/90 mb-10 text-balance max-w-2xl mx-auto leading-relaxed font-normal">
            Lilies of the Field Academy transforms the lives of vulnerable children and at-risk families in Osu, Ghana through structured academic tutoring, performing arts, and mentorship.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/donate"
              className="bg-[#22c55e] text-white px-7 py-3 rounded-full text-[15px] font-semibold shadow-sm hover:bg-[#16a34a] hover:shadow transition-all duration-200 active:translate-y-0.5 whitespace-nowrap"
            >
              Support Our Mission
            </Link>
            <Link
              href="/about"
              className="px-7 py-3 rounded-full text-[15px] font-semibold text-white border border-white/35 hover:bg-white/10 transition-colors duration-200 active:translate-y-0.5 flex items-center gap-2"
            >
              Read Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 md:py-28 bg-white px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start text-left">
            <span className="reveal-text uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
              Established in Osu, Accra
            </span>
            <h2 className="reveal-text text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-bold mb-5 text-slate-900 leading-[1.12] tracking-tight">
              A haven for marginalized youth since 2016.
            </h2>
            <p className="reveal-text text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mb-8">
              As a vital after-school haven, the academy tackles critical educational and healthcare needs, while uplifting vulnerable populations and championing sustainable youth development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full reveal-text">
              {[impactData.sponsoredStudents, impactData.additionalProgramChildren].map((item) => (
                <div key={item.label} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-1">
                  <span className="text-slate-500 font-semibold uppercase tracking-[0.14em] text-xs">{item.label}</span>
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-[#2563eb]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-text relative aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <Image
              src="/images/pic9.jpeg"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-[#2563eb] text-white px-6 rounded-2xl md:rounded-3xl mx-4 md:mx-8 mb-16 relative overflow-hidden">
        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-stretch">
            {[
              { ...impactData.sponsoredStudents, icon: BookOpen },
              { ...impactData.highSchoolGraduatesSince2021, icon: GraduationCap },
              { ...impactData.universityStudents, icon: Heart },
              { ...impactData.additionalProgramChildren, icon: Users },
            ].map((stat) => (
              <div
                key={stat.label}
                className="reveal-text flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#2563eb] flex items-center justify-center mb-5 shadow-xs">
                  <stat.icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 tracking-tight text-white">{stat.value}</h3>
                <p className="text-white font-semibold text-xs uppercase tracking-[0.14em] mb-1.5 opacity-90">{stat.label}</p>
                <p className="text-blue-100/80 text-sm font-normal leading-relaxed max-w-[220px]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal-text mb-3.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">A Sponsor&apos;s Perspective</span>
          <blockquote className="reveal-text text-2xl font-heading font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
            &ldquo;I was inspired by the work Lilies does in assuring that students have access to an education, and resources they otherwise would not have.&rdquo;
          </blockquote>
          <p className="reveal-text mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Ali, Sponsor</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 leading-[1.1] tracking-tight text-slate-900">
            Transformation <br /> starts with community.
          </h2>
          <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
            Your support provides tuition assistance, daily meals, textbooks, and leadership opportunities for children in Accra.
          </p>
          <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/donate"
              className="bg-[#2563eb] text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-[#1d4ed8] transition-colors duration-200 shadow-xs hover:shadow-sm active:translate-y-0.5"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="bg-slate-50 text-slate-800 border border-slate-200/90 px-7 py-3.5 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors duration-200 shadow-2xs active:translate-y-0.5"
            >
              Explore Volunteerism
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
