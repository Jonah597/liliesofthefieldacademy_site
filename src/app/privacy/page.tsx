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
 * - Discloses third-party services (Little Green Light donation processor)
 * - Addresses children's privacy given the academy's mission
 * - Gives contact information for privacy questions and data requests
 * - Keeps the legal language accessible to non-legal readers
 *
 * USED BY:
 * Next.js route: /privacy
 *
 * IMPORTANT:
 * This is informational content. It should be reviewed with a legal or compliance
 * professional before publication if the organization expects formal legal coverage.
 *
 * LAST UPDATED: November 2026
 */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EFFECTIVE_DATE = "November 15, 2026";
const CONTACT_EMAIL = "info@theliliesfoundation.org";

const sections = [
    {
        id: "introduction",
        heading: "Introduction",
        content: (
            <>
                <p>
                    Lilies of the Field Academy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a registered
                    non-governmental organization based in Osu, Accra, Ghana. We are committed to protecting the privacy
                    of every person who visits our website, contacts our team, or supports our mission.
                </p>
                <p className="mt-4">
                    This Privacy Policy explains what personal information we collect, how we use it, who we may share it
                    with, and what rights you have regarding your data. By using this website you agree to the practices
                    described below.
                </p>
                <p className="mt-4">
                    <strong className="text-slate-800">Effective date:</strong> {EFFECTIVE_DATE}. We may update this
                    policy from time to time. When we do, we will revise the effective date at the top of this page.
                    Continued use of the site after changes are posted constitutes your acceptance of the updated policy.
                </p>
            </>
        ),
    },
    {
        id: "information-we-collect",
        heading: "Information We Collect",
        content: (
            <>
                <p>We collect information in two ways:</p>

                <h3 className="mt-5 mb-2 text-lg font-heading font-semibold text-slate-800">
                    Information you give us directly
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong className="text-slate-800">Contact form</strong> — When you submit an inquiry through
                        our Contact page we collect your full name, email address, subject line, and message content.
                    </li>
                    <li>
                        <strong className="text-slate-800">Donations</strong> — When you donate through the Little Green
                        Light form embedded on our Donate page, that form collects your name, email address, mailing
                        address, and payment details. See the &ldquo;Third-Party Services&rdquo; section below for
                        important details about how donation data is handled.
                    </li>
                    <li>
                        <strong className="text-slate-800">Direct email or phone contact</strong> — If you reach out
                        to us by email or phone, we may retain a record of that communication.
                    </li>
                </ul>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    Information collected automatically
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong className="text-slate-800">Usage data</strong> — Our hosting platform (Vercel) may
                        automatically collect standard server log data such as your IP address, browser type, pages
                        visited, and the date and time of your visit. This information is used for security and site
                        performance purposes and is not linked to your personal identity.
                    </li>
                    <li>
                        <strong className="text-slate-800">Cookies</strong> — This website does not use advertising
                        or tracking cookies. Our hosting platform may set essential technical cookies (such as a session
                        identifier) that are necessary for the site to function. We do not use cookies to build
                        behavioral profiles or serve targeted advertising.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "how-we-use",
        heading: "How We Use Your Information",
        content: (
            <>
                <p>We use the information we collect only for the following purposes:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>To respond to inquiries submitted through our contact form or by email.</li>
                    <li>To process and acknowledge donations made through Little Green Light.</li>
                    <li>To send you updates, newsletters, or program news — only if you have opted in or requested
                        to receive them. You may unsubscribe at any time.</li>
                    <li>To maintain records required for nonprofit compliance, financial reporting, and donor
                        stewardship.</li>
                    <li>To improve and maintain the performance and security of this website.</li>
                </ul>
                <p className="mt-4">
                    We do not sell, rent, or trade your personal information to any third party for marketing purposes.
                </p>
            </>
        ),
    },
    {
        id: "third-party-services",
        heading: "Third-Party Services",
        content: (
            <>
                <p>
                    We use the following third-party services to operate this website and process donations. Each
                    service has its own privacy policy that governs how they handle your data.
                </p>

                <div className="mt-5 space-y-5">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="font-heading font-semibold text-slate-800 mb-1">
                            Little Green Light (Donation Processing)
                        </h3>
                        <p className="text-sm">
                            Online donations are processed through{" "}
                            <a
                                href="https://littlegreenlight.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                            >
                                Little Green Light
                            </a>
                            , a third-party donor management and payment platform. When you donate, your payment card
                            details are entered directly into Little Green Light&apos;s secure form and are handled
                            by their platform — your payment information is <strong>not</strong> stored on the Lilies
                            of the Field Academy website or servers. Please review{" "}
                            <a
                                href="https://www.littlegreenlight.com/privacypolicy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                            >
                                Little Green Light&apos;s Privacy Policy
                            </a>{" "}
                            to understand how they protect your donation data.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="font-heading font-semibold text-slate-800 mb-1">
                            Vercel (Website Hosting)
                        </h3>
                        <p className="text-sm">
                            This website is hosted on{" "}
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                            >
                                Vercel
                            </a>
                            . Vercel may collect standard server log data as part of normal hosting operations.
                            Please review{" "}
                            <a
                                href="https://vercel.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                            >
                                Vercel&apos;s Privacy Policy
                            </a>{" "}
                            for more information.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: "data-sharing",
        heading: "Data Sharing & Disclosure",
        content: (
            <>
                <p>
                    We do not sell or rent your personal information. We may share your information only in the
                    following limited circumstances:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>
                        <strong className="text-slate-800">Service providers</strong> — We may share information with
                        trusted service providers (such as Little Green Light) who help us operate our website or
                        fulfill our organizational activities. These parties are permitted to use your data only as
                        needed to provide those services.
                    </li>
                    <li>
                        <strong className="text-slate-800">Legal obligations</strong> — We may disclose your
                        information if required to do so by law or in response to a valid legal request (such as a
                        court order or government inquiry).
                    </li>
                    <li>
                        <strong className="text-slate-800">Protection of rights</strong> — We may share information
                        when we believe disclosure is necessary to protect the safety, rights, or property of Lilies
                        of the Field Academy, our students, or the public.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "data-retention",
        heading: "Data Retention",
        content: (
            <>
                <p>
                    We retain personal information only for as long as it is necessary to fulfill the purposes
                    described in this policy or as required by applicable law.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>
                        <strong className="text-slate-800">Contact form inquiries</strong> — Messages are retained
                        in our email or CRM system for as long as needed to manage your inquiry or relationship
                        with our organization, typically no longer than three years unless there is an ongoing
                        engagement.
                    </li>
                    <li>
                        <strong className="text-slate-800">Donation records</strong> — Donor records are retained
                        in accordance with nonprofit accounting and reporting requirements. Little Green Light
                        maintains its own retention practices for payment data.
                    </li>
                    <li>
                        <strong className="text-slate-800">Server logs</strong> — Automatically collected server
                        log data is typically retained for a short period (days to weeks) for security purposes
                        and is then deleted or anonymized.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "data-security",
        heading: "Data Security",
        content: (
            <>
                <p>
                    We take the security of your personal information seriously. We implement reasonable technical
                    and organizational measures to protect the data we hold — including encrypted communications
                    (HTTPS) and limiting access to personal data to authorized staff only.
                </p>
                <p className="mt-4">
                    Please note, however, that no method of data transmission over the internet or electronic
                    storage is 100% secure. While we strive to protect your personal information, we cannot
                    guarantee its absolute security.
                </p>
                <p className="mt-4">
                    Payment card data is never transmitted to or stored on our website — it is handled entirely
                    by Little Green Light&apos;s secure, PCI-compliant system.
                </p>
            </>
        ),
    },
    {
        id: "childrens-privacy",
        heading: "Children's Privacy",
        content: (
            <>
                <p>
                    Lilies of the Field Academy exists to serve and uplift children in Osu, Accra, Ghana. While our
                    mission centers on young people, this website is designed for use by adult supporters, donors,
                    volunteers, and partners — not by children directly.
                </p>
                <p className="mt-4">
                    We do not knowingly collect personal information from children under the age of 13 through
                    this website. If you believe that a child has submitted personal information to us without
                    parental consent, please contact us immediately at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]">
                        {CONTACT_EMAIL}
                    </a>{" "}
                    and we will promptly delete such information.
                </p>
            </>
        ),
    },
    {
        id: "your-rights",
        heading: "Your Rights",
        content: (
            <>
                <p>
                    Depending on where you are located, you may have certain rights regarding your personal data.
                    These may include the right to:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><strong className="text-slate-800">Access</strong> — Request a copy of the personal information we hold about you.</li>
                    <li><strong className="text-slate-800">Correction</strong> — Ask us to correct inaccurate or incomplete information.</li>
                    <li><strong className="text-slate-800">Deletion</strong> — Request that we delete your personal information, subject to any legal retention obligations.</li>
                    <li><strong className="text-slate-800">Opt-out of communications</strong> — Unsubscribe from any newsletters or updates at any time by contacting us or using the unsubscribe link in any email we send.</li>
                </ul>
                <p className="mt-4">
                    To exercise any of these rights, please contact us at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]">
                        {CONTACT_EMAIL}
                    </a>
                    . We will respond to your request within a reasonable timeframe.
                </p>
            </>
        ),
    },
    {
        id: "links",
        heading: "Links to Other Websites",
        content: (
            <p>
                Our website may contain links to external sites (such as Little Green Light, social media platforms,
                or partner organizations). This Privacy Policy applies only to the Lilies of the Field Academy
                website. We are not responsible for the privacy practices of any third-party websites and encourage
                you to review their policies before providing personal information.
            </p>
        ),
    },
    {
        id: "contact",
        heading: "Contact Us",
        content: (
            <>
                <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle
                    your personal data, please reach out to us:
                </p>
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-1 text-sm">
                    <p><strong className="text-slate-800">Lilies of the Field Academy</strong></p>
                    <p>Osu, Accra, Ghana</p>
                    <p>
                        Email:{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]">
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                    <p>Phone: +1 (860) 836-7468</p>
                </div>
            </>
        ),
    },
];

export default function Privacy() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 35, filter: "blur(8px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
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

            {/* ── HERO ── */}
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-20">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Legal Information
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 max-w-2xl mx-auto mt-5 leading-relaxed">
                        How Lilies of the Field Academy collects, uses, and protects your information.
                    </p>
                    <p className="reveal-text text-sm text-blue-200/70 mt-3">
                        Effective date: {EFFECTIVE_DATE}
                    </p>
                </div>
            </section>

            {/* ── TABLE OF CONTENTS ── */}
            <div className="max-w-3xl mx-auto w-full pt-14 pb-2 px-6">
                <nav className="reveal-text rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">
                        On this page
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-[#2563eb]">
                        {sections.map((s, i) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className="hover:text-[#1d4ed8] transition-colors font-medium"
                                >
                                    {i + 1}. {s.heading}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>

            {/* ── POLICY SECTIONS ── */}
            <div className="max-w-3xl mx-auto w-full py-14 md:py-20 px-6">
                <div className="space-y-12 text-base text-slate-600 font-normal leading-relaxed">
                    {sections.map((s) => (
                        <section key={s.id} id={s.id} className="scroll-mt-28">
                            <h2 className="reveal-text text-2xl font-heading font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                                {s.heading}
                            </h2>
                            <div className="reveal-text">{s.content}</div>
                        </section>
                    ))}
                </div>

                {/* ── LEGAL DISCLAIMER NOTE ── */}
                <div className="reveal-text mt-14 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900 leading-relaxed">
                    <p className="font-semibold mb-1">A note on legal coverage</p>
                    <p>
                        This Privacy Policy is an informational summary written in plain language. It has not been
                        drafted by legal counsel and should be reviewed by a qualified attorney or compliance
                        professional before being treated as a fully binding legal document, particularly if
                        the organization operates across multiple jurisdictions or expects regulatory scrutiny.
                    </p>
                </div>
            </div>
        </div>
    );
}
