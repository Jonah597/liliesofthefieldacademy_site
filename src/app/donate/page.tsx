/**
 * FILE: app/donate/page.tsx
 *
 * PURPOSE:
 * Explains the giving opportunities available to supporters and embeds the
 * secure Little Green Light donation form used to collect online donations.
 *
 * RESPONSIBILITIES:
 * - Describes the core reasons supporters give to the academy
 * - Lists funding opportunities such as scholarships, teacher support, and capital projects
 * - Displays the live impact numbers already defined in the shared impact data file
 * - Injects the external LGL donation widget into a host element on the page
 * - Shows a fallback link when the widget fails to load
 *
 * USED BY:
 * Next.js route: /donate
 *
 * EXTERNAL INTEGRATION:
 * Donations are processed through Little Green Light (LGL). This page scopes the
 * LGL script to a local DOM host so the provider's legacy document.write workflow
 * can render the secure form without breaking the rest of the app.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, GraduationCap, HeartHandshake, Landmark, ShieldCheck, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LGL_FORM_URL = "https://secure.lglforms.com/form_engine/s/P9uVZaapPsmMms7O6A5ZtA";
const LGL_SCRIPT_URL = `${LGL_FORM_URL}.js`;

const impactStats = [
    { value: "68", label: "Students sponsored" },
    { value: "42", label: "Graduates since 2021" },
    { value: "4", label: "University students" },
    { value: "20–30", label: "Additional children reached" },
];

const givingOpportunities = [
    {
        title: "Sponsor a Student",
        description: "Support a student's access to education and the resources needed to participate fully in academy life.",
        icon: GraduationCap,
    },
    {
        title: "Teacher Fund",
        description: "Support the educators who guide students through daily instruction, care, and encouragement.",
        icon: Users,
    },
    {
        title: "Building Fund",
        description: "Help strengthen learning spaces and facilities.",
        icon: Building2,
    },
    {
        title: "Sponsor a Special Program",
        description: "Support additional programs, field trips, athletic experiences, cultural experiences, or other special opportunities when they are available.",
        icon: HeartHandshake,
    },
    {
        title: "Unrestricted Gift",
        description: "Give the academy flexibility to direct resources toward the needs that matter most.",
        icon: Landmark,
    },
];

export default function Donate() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lglHostRef = useRef<HTMLDivElement>(null);
    const [lglError, setLglError] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const revealElements = gsap.utils.toArray<HTMLElement>(".reveal-text");
            revealElements.forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 28, filter: "blur(6px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: { trigger: element, start: "top 92%", toggleActions: "play none none none" },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const host = lglHostRef.current;
        if (!host || host.dataset.lglInitialized === "true") return;

        host.dataset.lglInitialized = "true";
        const originalDocumentWrite = document.write.bind(document);
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = LGL_SCRIPT_URL;
        script.async = false;

        // The official LGL widget uses document.write to create its iframe. Scope that
        // legacy write to this host while the provider script initializes, then restore it.
        document.write = (markup: string) => {
            host.insertAdjacentHTML("beforeend", markup);
        };
        script.onload = () => {
            document.write = originalDocumentWrite;
        };
        script.onerror = () => {
            document.write = originalDocumentWrite;
            setLglError(true);
        };
        host.appendChild(script);

        return () => {
            document.write = originalDocumentWrite;
            host.dataset.lglInitialized = "false";
            script.remove();
        };
    }, []);

    return (
        <div ref={containerRef} className="flex min-h-screen w-full flex-col overflow-hidden bg-white">
            <section className="relative flex min-h-[48svh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 px-6 pb-16 pt-28 md:pt-36">
                <div className="absolute inset-0 select-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-600/35 via-sky-500/20 to-indigo-900/55" />
                    <Image src="/images/edited1.png" alt="Children supported by Lilies of the Field Academy" fill className="object-cover opacity-75 md:opacity-85" priority />
                </div>
                <div className="container relative z-20 mx-auto max-w-4xl text-center text-white">
                    <span className="reveal-text eyebrow mb-4 block text-white">Donate</span>
                    <h1 className="reveal-text text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]">Support Opportunity Through Education</h1>
                    <p className="reveal-text mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-blue-50/90 sm:text-lg md:text-[19px]">Your donation helps provide educational opportunities and essential support for children connected to Lilies of the Field Academy in Osu, Ghana.</p>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div className="reveal-text">
                    <span className="eyebrow mb-3 block text-[#2563eb]">Why your gift matters</span>
                    <h2 className="section-heading mb-5 text-slate-900">Education creates opportunity.</h2>
                    <p className="lead-text text-slate-600">When students have consistent access to learning, resources, programs, and essential support, they gain more room to grow and imagine a future of possibility.</p>
                    <p className="mt-5 text-base leading-relaxed text-slate-600">Your support helps Lilies of the Field Academy continue showing up for children and families through the everyday work of education, care, and community.</p>
                </div>
                <div className="reveal-text relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                    <Image src="/images/edited1.png" alt="Students learning together at Lilies of the Field Academy" fill className="object-cover" />
                </div>
            </section>

            <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="reveal-text mb-10 max-w-2xl">
                        <span className="eyebrow mb-3 block text-[#2563eb]">Current impact</span>
                        <h2 className="section-heading text-slate-900">A growing circle of opportunity.</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-8">
                        {impactStats.map((stat) => (
                            <div key={stat.label} className="reveal-text border-l-2 border-[#22c55e] pl-4 md:pl-5">
                                <p className="font-heading text-4xl font-bold tracking-tight text-[#2563eb] md:text-5xl">{stat.value}</p>
                                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 md:text-base">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
                <div className="reveal-text mb-10 max-w-3xl">
                    <span className="eyebrow mb-3 block text-[#2563eb]">Ways to give</span>
                    <h2 className="section-heading mb-4 text-slate-900">Choose what matters to you.</h2>
                    <p className="text-base leading-relaxed text-slate-600">These opportunities help explain where support can go. Little Green Light remains the source of truth for donation designations, amounts, and payment details.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {givingOpportunities.map((opportunity) => {
                        const Icon = opportunity.icon;
                        return (
                            <article key={opportunity.title} className="reveal-text rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs md:p-7">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#2563eb]"><Icon className="h-5 w-5" strokeWidth={2.1} /></div>
                                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900">{opportunity.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">{opportunity.description}</p>
                                <Link href="#lgl-donation-form" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8]">Give through Little Green Light <ArrowRight className="h-4 w-4" /></Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section id="lgl-donation-form" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                    <div className="reveal-text self-start lg:sticky lg:top-28">
                        <span className="eyebrow mb-3 block text-[#2563eb]">Make your gift</span>
                        <h2 className="section-heading mb-5 text-slate-900">Your gift, handled securely.</h2>
                        <p className="text-base leading-relaxed text-slate-600">Complete the secure donation form powered by Little Green Light. The form handles your donation amount, designation, donor information, payment, and confirmation.</p>
                        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]" />
                            <p className="text-sm leading-relaxed text-slate-600"><strong className="font-semibold text-slate-900">Secure donation processing is provided through Little Green Light.</strong> Payment-card information is handled by Little Green Light rather than stored by the Lilies website.</p>
                        </div>
                    </div>

                    <div className="reveal-text min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-3xl md:p-8">
                        <div ref={lglHostRef} className="min-w-0 overflow-hidden" aria-label="Little Green Light donation form" />
                        {lglError && (
                            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-relaxed text-slate-700">
                                Complete your secure donation through <a href={LGL_FORM_URL} className="font-semibold text-[#2563eb] underline underline-offset-2">Little Green Light</a>.
                            </div>
                        )}
                        <noscript>
                            <p className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-relaxed text-slate-700">Complete your secure donation through <a href={LGL_FORM_URL} className="font-semibold text-[#2563eb] underline underline-offset-2">Little Green Light</a>.</p>
                        </noscript>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
                <div className="reveal-text">
                    <div className="mb-5 flex items-center gap-3"><HeartHandshake className="h-7 w-7 text-[#22c55e]" /><span className="eyebrow text-[#2563eb]">A special opportunity</span></div>
                    <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Sponsor a Special Program</h2>
                    <p className="text-base leading-relaxed text-slate-600">There are often opportunities for Lilies students to participate in additional programs or field trips that support their studies or provide athletic or cultural experiences. Costs vary depending on the program and may typically fall in the $100–$300 range. These opportunities are announced when available.</p>
                    <Link href="#lgl-donation-form" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-[#1d4ed8]">Support a special program <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="reveal-text rounded-2xl border border-slate-100 bg-slate-50 p-7 md:rounded-3xl md:p-10"><BookOpen className="mb-5 h-8 w-8 text-[#2563eb]" /><h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">A note from a sponsor</h2><blockquote className="text-lg leading-relaxed text-slate-700">&ldquo;I was inspired by the work Lilies does in assuring that students have access to an education, and resources they otherwise would not have.&rdquo;</blockquote><p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Ali, sponsor</p></div>
            </section>

            <section className="bg-[#2563eb] py-20 text-white md:py-24">
                <div className="reveal-text mx-auto max-w-4xl px-6 text-center">
                    <span className="eyebrow mb-3 block text-blue-100">Volunteers and mentors</span>
                    <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">Volunteer or Share Your Expertise</h2>
                    <p className="text-base leading-relaxed text-blue-50 md:text-lg">As we transition into our new classroom space, we will have the opportunity to offer additional programs and classes to the community. Areas of need include general health and hygiene, gender-specific health and wellness, child development, career counseling, and specialized academic tutoring. Please contact us if you are interested in visiting Lilies and sharing expertise in any of these areas, or if you have additional suggestions for special programming.</p>
                    <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-blue-50">Contact the team <ArrowRight className="h-4 w-4" /></Link>
                </div>
            </section>
        </div>
    );
}
