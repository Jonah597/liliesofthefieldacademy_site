/**
 * FILE: app/page.tsx
 *
 * PURPOSE:
 * The Home page of the Lilies of the Field Academy website.
 * This is the first page visitors see when they arrive at the root URL ("/").
 *
 * RESPONSIBILITIES:
 * - Displays a full-screen hero section with the mission statement and CTAs
 * - Shows a two-column "Progress" section introducing the academy's history
 * - Renders an impact statistics strip with four key metrics
 * - Features a sponsor testimonial quote
 * - Ends with a final call-to-action encouraging donations and volunteering
 * - Animates all "reveal-text" elements into view as the user scrolls (via GSAP)
 *
 * SECTIONS:
 * 1. Hero         — Full-height gradient background with headline, subtitle, and CTA buttons
 * 2. Progress     — Two-column layout with text intro + two impact stat cards + photo
 * 3. Impact Stats — Blue full-width band with four metric cards (icons + numbers)
 * 4. Testimonial  — Centered quote from a sponsor
 * 5. Final CTA    — White section with Donate + Volunteerism links
 *
 * ANIMATION:
 * Uses GSAP (GreenSock Animation Platform) with the ScrollTrigger plugin.
 * - "reveal-text" elements animate from hidden/blurred/below → visible when scrolled into view
 * - "hero-reveal" elements animate in on initial load (no scroll trigger required)
 * GSAP context is scoped to `containerRef` so animations don't leak outside this component.
 * The context is reverted (cleaned up) when the component unmounts.
 *
 * DATA:
 * Impact statistics are imported from @/lib/impact-data so they stay in sync
 * with the About, Impact, Programs, and Donate pages.
 *
 * USED BY:
 * Rendered automatically by Next.js when the user visits the "/" route.
 */

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, Users, Heart, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactData } from "@/lib/impact-data";

// Register the ScrollTrigger plugin with GSAP once, at module level.
// This must be called before any ScrollTrigger animations are created.
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Reference to the outermost container div. Passed to GSAP's context()
  // so all GSAP animations are scoped to this component and don't accidentally
  // select elements from other parts of the page.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP context scoped to the container element.
    // All selectors (e.g., ".reveal-text") will only match elements
    // inside containerRef, not elsewhere in the DOM.
    const ctx = gsap.context(() => {
      // ─── Scroll-triggered reveal animation ───
      // Find all elements with the "reveal-text" class inside the container.
      const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text");

      revealElements.forEach((el: HTMLElement) => {
        // Animate each element from invisible + blurred + slightly below
        // to fully visible + sharp + in its natural position.
        gsap.fromTo(
          el,
          // Starting state: invisible, 35px below, blurred
          { opacity: 0, y: 35, filter: "blur(8px)" },
          {
            // Ending state: fully visible, in position, sharp
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,   // Watch this specific element
              start: "top 92%", // Start the animation when the top of the element
              // is 92% down the viewport (just before it fully enters)
              toggleActions: "play none none none", // Only play forward; don't reverse on scroll up
            },
          }
        );
      });

      // ─── Hero entrance animation ───
      // "hero-reveal" elements in the hero section animate in on page load
      // (not scroll-triggered) with a staggered effect so each element
      // appears slightly after the previous one.
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,    // Each "hero-reveal" element starts 0.15s after the previous
          ease: "power3.out",
          delay: 0.2,       // Brief pause before the first element begins animating
        }
      );
    }, containerRef);

    // Cleanup: when the component unmounts, revert all GSAP animations and
    // remove all ScrollTrigger instances created within this context.
    // This prevents memory leaks and stale animations when navigating between pages.
    return () => ctx.revert();
  }, []); // Empty array: animations are set up only once when the component mounts.

  return (
    <div className="w-full flex-col flex overflow-hidden bg-white" ref={containerRef}>

      {/* ════════════════════════════════════════════════
          SECTION 1: HERO
          Full-viewport hero with gradient background, hero image, headline, and CTAs.
          ════════════════════════════════════════════════ */}
      <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-20">
        {/* Background image + gradient overlay stack */}
        <div className="absolute inset-0 z-0 select-none">
          {/* Semi-transparent blue gradient overlay layered on top of the photo.
              Creates a colored tint that ensures the white text above it is readable. */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50 z-10" />
          {/* Hero background photo of students at the academy.
              `fill` makes the image cover the entire section.
              `priority` ensures it loads before other images (above the fold). */}
          <Image
            src="/images/edited1.png"
            alt="Children studying at Lilies of the Field Academy"
            fill
            className="object-cover opacity-75 md:opacity-85"
            unoptimized
            priority
          />
        </div>

        {/* Hero text content — positioned in front of the background (z-20) */}
        <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
          {/* Main headline — "hero-reveal" triggers the entrance animation on load */}
          <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-bold mb-6 leading-[1.08] tracking-tight text-white text-balance">
            Championing Education, <br /> Arts &amp; Leadership.
          </h1>

          {/* Mission statement subtitle */}
          <p className="hero-reveal text-base sm:text-lg md:text-[19px] text-blue-50/90 mb-10 text-balance max-w-2xl mx-auto leading-relaxed font-normal">
            Lilies of the Field Academy transforms the lives of vulnerable children and at-risk families in Osu, Ghana through structured academic tutoring, performing arts, and mentorship.
          </p>

          {/* Primary CTA buttons — side by side on desktop, stacked on mobile */}
          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Primary CTA: green "Support Our Mission" → /donate */}
            <Link
              href="/donate"
              className="bg-[#22c55e] text-white px-7 py-3 rounded-full text-[15px] font-semibold shadow-sm hover:bg-[#16a34a] hover:shadow transition-all duration-200 active:translate-y-0.5 whitespace-nowrap"
            >
              Support Our Mission
            </Link>
            {/* Secondary CTA: outlined "Read Our Story" → /about */}
            <Link
              href="/about"
              className="px-7 py-3 rounded-full text-[15px] font-semibold text-white border border-white/35 hover:bg-white/10 transition-colors duration-200 active:translate-y-0.5 flex items-center gap-2"
            >
              Read Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2: PROGRESS
          Two-column section: text intro + impact stat cards on the left,
          a square photo on the right.
          ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column: text + two stat cards */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow label */}
            <span className="reveal-text uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
              Established in Osu, Accra
            </span>

            <h2 className="reveal-text text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-bold mb-5 text-slate-900 leading-[1.12] tracking-tight">
              A haven for marginalized youth since 2016.
            </h2>
            <p className="reveal-text text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mb-8">
              As a vital after-school haven, the academy tackles critical educational and healthcare needs, while uplifting vulnerable populations and championing sustainable youth development.
            </p>

            {/*
             * Two impact stat cards displayed side by side.
             * Uses two specific entries from impactData (sponsored students
             * and additional program children) for the most impactful summary numbers.
             */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full reveal-text">
              {[impactData.sponsoredStudents, impactData.additionalProgramChildren].map((item) => (
                <div key={item.label} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-1">
                  <span className="text-slate-500 font-semibold uppercase tracking-[0.14em] text-xs">{item.label}</span>
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-[#2563eb]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: square image of students */}
          <div className="reveal-text relative aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <Image
              src="/images/pic9.jpeg"
              alt="Students in classroom"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3: IMPACT STATS
          Blue full-width band with four metric cards, each showing
          a key program outcome number with an icon and description.
          Uses all four entries from impactData with corresponding icons.
          ════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#2563eb] text-white px-6 rounded-2xl md:rounded-3xl mx-4 md:mx-8 mb-16 relative overflow-hidden">
        <div className="container relative z-10 mx-auto">
          {/* Responsive grid: 1 col → 2 cols → 4 cols as screen gets wider */}
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
                {/* White icon container with blue icon — stands out against the blue background */}
                <div className="w-12 h-12 rounded-xl bg-white text-[#2563eb] flex items-center justify-center mb-5 shadow-xs">
                  <stat.icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                {/* Large numeric value */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 tracking-tight text-white">{stat.value}</h3>
                {/* Short label */}
                <p className="text-white font-semibold text-xs uppercase tracking-[0.14em] mb-1.5 opacity-90">{stat.label}</p>
                {/* Context sentence */}
                <p className="text-blue-100/80 text-sm font-normal leading-relaxed max-w-[220px]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4: TESTIMONIAL
          A centered blockquote from a real sponsor.
          ════════════════════════════════════════════════ */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow label */}
          <span className="reveal-text mb-3.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">A Sponsor&apos;s Perspective</span>
          {/* Quote text — uses HTML entity &ldquo; and &rdquo; for proper curly quotes */}
          <blockquote className="reveal-text text-2xl font-heading font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
            &ldquo;I was inspired by the work Lilies does in assuring that students have access to an education, and resources they otherwise would not have.&rdquo;
          </blockquote>
          {/* Attribution */}
          <p className="reveal-text mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Ali, Sponsor</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5: FINAL CTA
          White section encouraging donations and volunteering.
          ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 leading-[1.1] tracking-tight text-slate-900">
            Transformation <br /> starts with community.
          </h2>
          <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
            Your support provides tuition assistance, daily meals, textbooks, and leadership opportunities for children in Accra.
          </p>
          {/* Two CTAs: Donate (blue) and Volunteerism (light gray) */}
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
