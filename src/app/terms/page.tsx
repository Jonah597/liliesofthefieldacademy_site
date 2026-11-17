/**
 * FILE: app/terms/page.tsx
 *
 * PURPOSE:
 * Provides the official Terms of Service governing the use of the Lilies of the
 * Field Academy website, online donations, volunteer inquiries, and intellectual
 * property protections.
 *
 * RESPONSIBILITIES:
 * - Details terms for website access, visitor conduct, and permissible usage
 * - Clearly outlines charitable donation policies, processing via Little Green Light,
 *   recurring gifts, and tax considerations
 * - Protects student imagery, stories, and organizational intellectual property
 * - Explains volunteer and partnership inquiry terms
 * - Sets out disclaimers, limitations of liability, and dispute resolution procedures
 * - Provides verified contact routes for legal questions
 *
 * USED BY:
 * Next.js route: /terms
 *
 * IMPORTANT:
 * This document provides comprehensive informational terms aligned with the academy's
 * activities. Formal legal counsel should review before treating as binding coverage
 * in specific jurisdictions.
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
const CONTACT_PHONE = "+1 (860) 836-7468";

const sections = [
    {
        id: "acceptance-of-terms",
        heading: "Acceptance of Terms",
        content: (
            <>
                <p>
                    These Terms of Service (also referred to as &quot;Terms and Conditions&quot; or &quot;Terms&quot;)
                    constitute a legally binding agreement between you (&quot;user&quot;, &quot;visitor&quot;, or
                    &quot;you&quot;) and Lilies of the Field Academy (&quot;the Academy&quot;, &quot;we&quot;,
                    &quot;us&quot;, or &quot;our&quot;), a registered non-governmental organization operating in Osu,
                    Accra, Ghana, with institutional and board support across Ghana and the United States.
                </p>
                <p className="mt-4">
                    By accessing, browsing, submitting forms on, or making a donation through this website
                    (the &quot;Site&quot;), you acknowledge that you have read, understood, and agree to be bound by
                    these Terms and our{" "}
                    <a
                        href="/privacy"
                        className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                    >
                        Privacy Policy
                    </a>
                    . If you do not agree with any part of these Terms, you must discontinue your use of the Site.
                </p>
                <p className="mt-4">
                    <strong className="text-slate-800">Effective Date:</strong> {EFFECTIVE_DATE}.
                </p>
            </>
        ),
    },
    {
        id: "eligibility-and-use",
        heading: "Eligibility & Permissible Use",
        content: (
            <>
                <p>
                    This Site is provided for informational, educational, and charitable purposes to connect supporters,
                    donors, volunteers, and partners with the mission of Lilies of the Field Academy.
                </p>
                <h3 className="mt-5 mb-2 text-lg font-heading font-semibold text-slate-800">
                    Age and Legal Capacity
                </h3>
                <p>
                    You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to make
                    charitable contributions, execute volunteer applications, or enter into any binding agreements
                    through this Site. Individuals under 18 may only use the Site with the involvement and consent of
                    a parent or legal guardian.
                </p>
                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    Prohibited Conduct
                </h3>
                <p>When accessing or using the Site, you agree not to:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>Use the Site for any unlawful, fraudulent, or unauthorized purpose.</li>
                    <li>
                        Interfere with, compromise, or disrupt the security, operation, or performance of the Site,
                        its hosting infrastructure, or connected networks.</li>
                    <li>
                        Use automated scrapers, crawlers, data mining tools, or bot services to harvest content,
                        donor data, or media from the Site without explicit prior written authorization.</li>
                    <li>
                        Submit false, misleading, or defamatory information through inquiry forms, donation channels,
                        or volunteer applications.</li>
                    <li>
                        Impersonate Lilies of the Field Academy, its founders, board members, teachers, students,
                        or representatives.</li>
                    <li>
                        Reproduce, distribute, or publicly display student photographs, videos, or narratives for
                        commercial gain or unapproved third-party campaigns.</li>
                </ul>
            </>
        ),
    },
    {
        id: "donations-and-refunds",
        heading: "Donations, Refund & Cancellation Policy",
        content: (
            <>
                {/* Target anchor for direct refund policy links */}
                <div id="refund-policy" className="-mt-28 pt-28" />
                <div id="donations-and-financial-terms" />
                <p>
                    Lilies of the Field Academy relies on the generosity of individual supporters, foundations, and
                    corporate partners to fund student sponsorships, educator salaries, daily nutrition, learning
                    materials, and campus facilities in Osu, Accra, Ghana.
                </p>

                <h3 className="mt-5 mb-2 text-lg font-heading font-semibold text-slate-800">
                    1. Voluntary Charitable Contributions
                </h3>
                <p>
                    All financial contributions made through our Site are voluntary charitable gifts intended to support
                    our educational and community mission. Because donations are deployed quickly toward student
                    programs, operational costs, and child nutrition, contributions are generally deemed final and
                    non-refundable once processed, subject to the limited exception procedures outlined below.
                </p>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    2. Refund Policy &amp; Eligible Exceptions
                </h3>
                <p>
                    We recognize that honest errors can occur during online transactions. Lilies of the Field Academy
                    will review and honor refund requests under the following specific circumstances:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong className="text-slate-800">Duplicate Transactions:</strong> An unintentional duplicate
                        charge resulting from technical latency, browser refresh, or submitting the donation form more
                        than once.
                    </li>
                    <li>
                        <strong className="text-slate-800">Typographical / Amount Errors:</strong> An accidental entry
                        of an incorrect donation amount (for example, accidentally entering $500 instead of $50). In
                        such cases, the incorrect payment may be refunded, and the donor is welcome to submit the
                        intended amount.
                    </li>
                    <li>
                        <strong className="text-slate-800">Unauthorized or Fraudulent Transactions:</strong> An
                        unauthorized charge resulting from lost, stolen, or compromised payment card details, reported
                        promptly upon discovery.
                    </li>
                </ul>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    3. Timeframe &amp; How to Request a Refund
                </h3>
                <p>
                    To be eligible for review, all refund requests must be submitted within{" "}
                    <strong className="text-slate-800">thirty (30) calendar days</strong> of the original transaction date.
                </p>
                <p className="mt-3">
                    To request a refund, please contact our administrative office with the following details:
                </p>
                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm space-y-1">
                    <p>• Full name of the donor</p>
                    <p>• Email address used on the donation form</p>
                    <p>• Date of the transaction and transaction amount</p>
                    <p>• Confirmation or receipt number (if received)</p>
                    <p>• Brief explanation of the error or circumstance</p>
                </div>
                <p className="mt-3">
                    Please send requests to{" "}
                    <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Donation%20Refund%20Request`}
                        className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                    >
                        {CONTACT_EMAIL}
                    </a>{" "}
                    or call our support line at {CONTACT_PHONE}. Verified refunds are issued back to the original
                    payment method via Little Green Light within 5–10 business days of approval, depending on the
                    donor&apos;s financial institution.
                </p>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    4. Cancellation of Recurring Monthly Pledges
                </h3>
                <p>
                    Supporters enrolled in recurring giving circles (such as monthly student sponsorships or sustaining
                    gifts) retain full control over their pledges. You may pause, modify, or cancel a recurring gift at
                    any time prior to the next billing cycle by logging into your Little Green Light donor portal or by
                    contacting us at{" "}
                    <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Cancel%20Recurring%20Donation`}
                        className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                    >
                        {CONTACT_EMAIL}
                    </a>
                    . Cancellations take effect immediately for all subsequent billing cycles.
                </p>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    5. Tax Receipts &amp; Adjustments
                </h3>
                <p>
                    Whenever a donation refund is approved and processed, any tax receipt, donation acknowledgement, or
                    formal giving record issued for that transaction is deemed null and void. The donor is responsible
                    for ensuring their personal or institutional tax records accurately reflect the refunded transaction.
                </p>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    6. Payment Processing via Little Green Light
                </h3>
                <p>
                    Online donations are processed through our third-party donor management and payment provider,{" "}
                    <a
                        href="https://www.littlegreenlight.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                    >
                        Little Green Light (LGL)
                    </a>
                    . Payment transactions are subject to Little Green Light&apos;s processing terms and their{" "}
                    <a
                        href="https://www.littlegreenlight.com/privacypolicy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                    >
                        Privacy Policy
                    </a>
                    . Lilies of the Field Academy does not collect, process, or store payment card numbers on our web
                    servers.
                </p>

                <h3 className="mt-6 mb-2 text-lg font-heading font-semibold text-slate-800">
                    7. Designated Gifts &amp; Stewardship
                </h3>
                <p>
                    When donors designate gifts toward specific initiatives (e.g., Teacher Fund, Building Fund,
                    or Special Programs), we make every reasonable effort to apply those funds as directed.
                    Consistent with nonprofit accounting standards and charitable governance, in the unexpected
                    event that a designated initiative is fully funded, discontinued, or rendered unfeasible,
                    the Academy reserves the right to reallocate excess funds toward the areas of greatest student
                    need within our educational mission.
                </p>
            </>
        ),
    },
    {
        id: "volunteer-and-inquiries",
        heading: "Volunteer Applications & Inquiries",
        content: (
            <>
                <p>
                    Our Site enables supporters to submit volunteer applications, inquiry forms, and partnership
                    proposals. When submitting information through these forms:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>You agree to provide true, current, and complete personal and professional details.</li>
                    <li>
                        Submitting an application or inquiry does not establish an employment, independent contractor,
                        or legal partnership relationship with the Academy.
                    </li>
                    <li>
                        All volunteer placements, international visiting opportunities, and formal partnerships are
                        contingent upon separate vetting, background review, direct interview, and formal written
                        agreements with our leadership team.
                    </li>
                    <li>
                        We reserve the right to decline any volunteer application, visiting proposal, or partnership
                        inquiry at our sole discretion.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "intellectual-property",
        heading: "Intellectual Property Rights",
        content: (
            <>
                <p>
                    All materials displayed or available on this Site — including, but not limited to, the Lilies of
                    the Field Academy logo, website design, text copy, graphic assets, icons, audio, video,
                    curriculum overviews, and software code — are the exclusive property of Lilies of the Field Academy
                    or our content contributors, protected under Ghanaian and international copyright, trademark, and
                    intellectual property laws.
                </p>
                <p className="mt-4">
                    You are granted a limited, non-exclusive, non-transferable, revocable license to access and display
                    Site materials solely for personal, non-commercial, and informational purposes. You may share links
                    to our Site and social content to promote our charitable mission, provided you do not alter the
                    content, remove copyright notices, or imply endorsement without prior written consent.
                </p>
            </>
        ),
    },
    {
        id: "student-and-media-protection",
        heading: "Protection of Student Imagery & Privacy",
        content: (
            <>
                <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-5 mb-5 text-slate-800">
                    <p className="font-heading font-semibold text-blue-900 mb-1">
                        Special Safeguards for Youth & Community Members
                    </p>
                    <p className="text-sm leading-relaxed">
                        The children and families we serve in Osu, Accra, are at the heart of our mission.
                        We hold their safety, dignity, and privacy to the highest standard.
                    </p>
                </div>
                <p>
                    All photographs, video clips, names, and personal stories of students and community members featured
                    on this Site, in our Gallery, and across our Stories section are published with proper institutional
                    and parental/guardian consent and are intended exclusively to report on educational milestones and
                    charitable impact.
                </p>
                <p className="mt-4 font-medium text-slate-800">
                    You are strictly prohibited from:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        Downloading, scraping, copying, modifying, or redistributing images or videos of students
                        featured on this Site.
                    </li>
                    <li>
                        Using student likenesses or narratives in marketing materials, external fundraising,
                        merchandise, or artificial intelligence model training datasets.
                    </li>
                    <li>
                        Attempting to contact, locate, or solicit private information directly from students or their
                        families outside authorized academy channels.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "third-party-links",
        heading: "Third-Party Links & External Services",
        content: (
            <>
                <p>
                    The Site may contain hyperlinks to third-party websites, platforms, or services (such as Little
                    Green Light, social media networks including Instagram, Facebook, and X/Twitter, or community
                    partners).
                </p>
                <p className="mt-4">
                    These links are provided for your convenience only. Lilies of the Field Academy has no control over
                    the content, security, data practices, or availability of third-party platforms. The inclusion of
                    any link does not imply endorsement or affiliation. You access external services entirely at your
                    own risk, and we encourage you to review their respective terms and privacy policies.
                </p>
            </>
        ),
    },
    {
        id: "disclaimer-of-warranties",
        heading: "Disclaimer of Warranties",
        content: (
            <>
                <p>
                    This Site and all content, materials, and services available through it are provided on an
                    &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express,
                    implied, or statutory.
                </p>
                <p className="mt-4">
                    To the maximum extent permitted by applicable law, Lilies of the Field Academy expressly disclaims
                    all warranties, including implied warranties of merchantability, fitness for a particular purpose,
                    quiet enjoyment, non-infringement, and accuracy of informational metrics. We do not warrant that:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>The Site will meet your requirements or will be available on an uninterrupted, secure, or error-free basis.</li>
                    <li>Any defects, coding anomalies, or server interruptions will be immediately corrected.</li>
                    <li>The Site or the servers hosting it are completely free of viruses or harmful components.</li>
                </ul>
            </>
        ),
    },
    {
        id: "limitation-of-liability",
        heading: "Limitation of Liability",
        content: (
            <>
                <p>
                    To the fullest extent permitted by applicable law, Lilies of the Field Academy, its board members,
                    officers, directors, educators, staff, volunteers, and agents shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages (including loss of data, loss of goodwill,
                    or interruption of service) arising out of or related to:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>Your access to, use of, or inability to access or use the Site.</li>
                    <li>Any conduct or content of any third party on or through the Site.</li>
                    <li>Any delays, failures, or security breaches experienced by third-party payment processors or service providers.</li>
                    <li>Unauthorized access, alteration, or use of your communications or transmissions.</li>
                </ul>
                <p className="mt-4">
                    In no event shall our total aggregate liability arising out of or relating to these Terms or your use
                    of the Site exceed the amount paid by you, if any, to the Academy through the Site in the six (6)
                    months preceding the event giving rise to liability, or $100 USD (whichever is less).
                </p>
            </>
        ),
    },
    {
        id: "indemnification",
        heading: "Indemnification",
        content: (
            <p>
                You agree to defend, indemnify, and hold harmless Lilies of the Field Academy, its trustees, board of
                directors, officers, employees, volunteers, and legal representatives from and against any claims,
                liabilities, damages, judgments, losses, costs, or expenses (including reasonable legal fees) arising
                out of or resulting from your violation of these Terms, your misuse of the Site, or your infringement
                of any intellectual property, privacy, or other rights of any third party.
            </p>
        ),
    },
    {
        id: "modifications-to-terms",
        heading: "Modifications to Terms & Website",
        content: (
            <>
                <p>
                    We reserve the right to modify, amend, or replace these Terms at any time. When updates occur, we
                    will post the revised terms on this page and update the &quot;Effective Date&quot; at the top of this
                    document.
                </p>
                <p className="mt-4">
                    Your continued use of the Site after any such revisions constitutes your acceptance of the new Terms.
                    We encourage you to review this page periodically. Furthermore, we reserve the right to modify,
                    suspend, or discontinue any aspect of the Site or our online services at any time without prior
                    notice or liability.
                </p>
            </>
        ),
    },
    {
        id: "governing-law-and-disputes",
        heading: "Governing Law & Dispute Resolution",
        content: (
            <>
                <p>
                    Lilies of the Field Academy is organized and operated as an NGO in the Republic of Ghana, with
                    supporting board leadership and philanthropic partners in the United States.
                </p>
                <p className="mt-4">
                    These Terms and any disputes arising out of or related to your use of the Site shall be governed by
                    and construed in accordance with the laws of the Republic of Ghana, without giving effect to any
                    choice of law or conflict of law principles.
                </p>
                <p className="mt-4">
                    In the event of any controversy, claim, or dispute arising out of or relating to these Terms, the
                    parties agree to first seek an informal, good-faith resolution by contacting our administrative
                    office before initiating any formal legal or administrative proceeding.
                </p>
            </>
        ),
    },
    {
        id: "contact-information",
        heading: "Contact Information",
        content: (
            <>
                <p>
                    If you have questions, feedback, or concerns regarding these Terms of Service, please reach out to
                    our administration:
                </p>
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-1.5 text-sm">
                    <p className="font-heading font-semibold text-slate-800 text-base">Lilies of the Field Academy</p>
                    <p className="text-slate-600">Registered Non-Governmental Organization (NGO)</p>
                    <p className="text-slate-600">Osu, Accra, Ghana</p>
                    <p className="pt-1 text-slate-700">
                        <strong>Email:</strong>{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-[#2563eb] underline underline-offset-2 hover:text-[#1d4ed8]"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                    <p className="text-slate-700">
                        <strong>Phone:</strong> {CONTACT_PHONE}
                    </p>
                </div>
            </>
        ),
    },
];

export default function Terms() {
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
                        Terms & Conditions
                    </h1>
                    <p className="reveal-text text-base sm:text-lg text-blue-50/90 max-w-2xl mx-auto mt-5 leading-relaxed">
                        The terms, conditions, and guidelines that govern the use of the Lilies of the Field Academy website.
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

            {/* ── TERMS SECTIONS ── */}
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
                    <p className="font-semibold mb-1">A note on legal review</p>
                    <p>
                        These Terms of Service are provided as a comprehensive informational policy reflecting the
                        academy&apos;s operations and charitable activities. They should be reviewed periodically with
                        qualified legal counsel to ensure compliance across relevant regional and international
                        jurisdictions.
                    </p>
                </div>
            </div>
        </div>
    );
}
