/**
 * FILE: app/terms/page.tsx
 *
 * PURPOSE:
 * Provides the website's Terms of Service and clarifies the rules for using the
 * organization's public-facing site.
 *
 * RESPONSIBILITIES:
 * - Explains basic visitor expectations for using the website
 * - Covers donation-related terms and use of third-party payment processing
 * - States the ownership of content and the organization's right to revise rules
 * - Gives a contact route for questions about the legal terms
 *
 * USED BY:
 * Next.js route: /terms
 *
 * IMPORTANT:
 * This page is an informational legal summary and should be reviewed with legal
 * counsel before being treated as a full binding policy document.
 */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Terms() {
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
            <section className="relative min-h-[42svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-16">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">Legal Information</span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">Terms of Service</h1>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 max-w-2xl mx-auto mt-5 leading-relaxed">The terms that govern use of the Lilies of the Field Academy website.</p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto w-full py-20 md:py-28 px-6">

                <div className="space-y-10 text-base text-slate-600 font-normal leading-relaxed">
                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Introduction</h2>
                        <p>
                            Welcome to the Lilies of the Field Academy website. By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Donations</h2>
                        <p>
                            When you make a donation through our website, you agree that your payment is voluntary and non-refundable. We use secure third-party payment processors to handle all financial transactions.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Intellectual Property</h2>
                        <p>
                            All content on this website, including text, images, logos, and designs, is the property of Lilies of the Field Academy or its content suppliers and is protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">User Conduct</h2>
                        <p>
                            You agree to use our website only for lawful purposes. You are prohibited from using the site to transmit any material that is threatening, defamatory, or otherwise harmful to our organization or its members.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Modifications</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the website after such changes are posted will constitute your agreement to the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-3">Contact</h2>
                        <p>
                            If you have any questions regarding these Terms of Service, please reach out to us at info@theliliesfoundation.org.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
