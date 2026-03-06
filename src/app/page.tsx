"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, Users, ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex-col flex overflow-hidden bg-white">
      {/* 1. HERO SECTION - REFINED LAYOUT & TYPOGRAPHY */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-32 md:pt-40">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90 z-10" />
          <Image
            src="/images/edited1.png"
            alt="Children studying"
            fill
            className="object-cover opacity-60 md:opacity-75 grayscale-[10%] scale-105"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-7xl text-center text-white pb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20 select-none">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-bold tracking-wide uppercase text-white">Open for 2026 Enrollments</span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 leading-[1] tracking-tight text-white text-balance transition-all hover:scale-[1.01] duration-700">
            Empower Lives, <br /> Build Futures.
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-16 text-balance max-w-2xl mx-auto leading-relaxed font-light opacity-90">
            Removing economic and social barriers to ensure every child has
            excellence in education, nutrition, and development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/get-involved"
              className="bg-[#22c55e] hover:bg-white hover:text-[#22c55e] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center gap-2 group"
            >
              Our Mission <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & STATS - HIGHER CONTRAST */}
      <section className="py-24 md:py-48 bg-white px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col items-start text-left">
            <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[12px] mb-6 block transform hover:-translate-y-1 transition-transform">
              The Foundation of Progress
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 text-slate-900 leading-[1.05] tracking-tight">
              Education is the catalyst for absolute freedom.
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light max-w-xl mb-12">
              We are dedicated to providing the educational foundation and mental resilience required for students to lead themselves and their communities out of systemic poverty.
            </p>
            <div className="grid grid-cols-2 gap-8 w-full">
              {[
                { label: "Founded", val: "2015" },
                { label: "Graduates", val: "850+" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-2">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">{item.label}</span>
                  <span className="text-4xl font-heading font-bold text-[#2563eb]">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
            <Image src="/images/pic9.jpeg" alt="Academy students" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 3. CORE IMPACT - CRISP STATS */}
      <section className="py-24 bg-slate-900 text-white px-6 rounded-[5rem] mx-4 md:mx-10 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-stretch">
            {[
              { value: "5,420+", label: "Students Empowered", icon: BookOpen, sub: "Attending school daily" },
              { value: "1.2M+", label: "Nutritious Meals", icon: Heart, sub: "Combating childhood malnutrition" },
              { value: "42", label: "Communities", icon: Users, sub: "Across Accra & rural regions" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-12 rounded-[3.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 group">
                <div className="w-16 h-16 rounded-2xl bg-white text-[#2563eb] flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-white font-bold text-base uppercase tracking-widest mb-3 opacity-80">{stat.label}</p>
                <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[200px]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REFINED CTA - NO GHOST BUTTONS */}
      <section className="py-40 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-12 leading-[1.05] tracking-tight text-slate-900">
            Transformation <br /> starts with you.
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
            Your single act of generosity can alter the trajectory of a child's entire life.
            Join us in building a future of hope today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/donate"
              className="bg-[#2563eb] text-white px-20 py-7 rounded-full text-2xl font-bold hover:bg-[#1e293b] transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-3"
            >
              Donate Now ❤️
            </Link>
            <Link
              href="/get-involved"
              className="bg-slate-50 text-slate-900 px-16 py-7 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-xl active:scale-95"
            >
              Explore Volunteerism
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
