/**
 * FILE: app/privacy/page.tsx
 *
 * PURPOSE:
 * Provides the website's privacy policy and explains how supporter information is
 * handled when someone uses the site, fills out forms, or donates.
 *
 * RESPONSIBILITIES:
 * - Describes what information is collected from site visitors
 * - Explains why the information is used and how it is protected
 * - Gives contact information for privacy questions
 * - Keeps the legal language accessible to non-legal readers
 *
 * USED BY:
 * Next.js route: /privacy
 *
 * IMPORTANT:
 * This is informational content. It should be reviewed with a legal or compliance
 * professional before publication if the organization expects formal legal coverage.
 */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((element) => {
                gsap.fromTo(element, { opacity: 0, y: 35, filter: "blur(8px)" }, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: element, start: "top 92%", toggleActions: "play none none none" },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-20">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">Legal Information</span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">Privacy Policy</h1>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 max-w-2xl mx-auto mt-5 leading-relaxed">How Lilies of the Field Academy collects, uses, and protects your information.</p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto w-full py-20 md:py-28 px-6">
                <div className="space-y-10 text-base text-slate-600 font-normal leading-relaxed">

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Introduction</h2>
                        <p>
                            Lilies of the Field Academy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Information Collection</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you fill out a contact form, sign up for our newsletter, or make a donation. This may include your name, email address, phone number, and payment information.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">How We Use Your Information</h2>
                        <p>
                            We use the information we collect to communicate with you, process your donations, send you updates about our programs, and improve our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Data Security</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at info@theliliesfoundation.org.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
