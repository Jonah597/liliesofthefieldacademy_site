"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { impactData } from "@/lib/impact-data";

gsap.registerPlugin(ScrollTrigger);

type Profile = {
    name: string;
    role: string;
    desc: string;
    img: string;
    preview?: string;
};

const boardMembers = [
    {
        name: "Zach McCormic",
        role: "Board Member",
        desc: `Zach McCormick has served as a Board Member since 2022. He earned his undergraduate degree from Stonehill College in 2018, where he majored in Finance and was a member of the Men's Soccer program. He later earned his MBA from Indiana University's Kelley School of Business in 2022.

Zach began his professional career in the Aerospace & Defense industry, where he spent seven years before transitioning into financial consulting at a boutique firm.

Zach first met Kim Wiggin while attending Suffield Academy in 2012 and was one of ten students who went on the inaugural trip to Ghana in 2013. During the trip, he volunteered at an orphanage and visited local schools, where he spoke with students about the importance of education. The experience gave him an immediate and lasting connection to the people and culture of Ghana. He returned the following summer in 2014, further strengthening his desire to remain involved and contribute to the community.

Zach initially supported the organization by sponsoring students at the Lilies of the Field Academy. Eager to become more involved, he welcomed the opportunity to join the Board in 2022 and continue supporting the organization's mission.

An avid traveler, Zach has visited more than 30 countries and has lived and worked abroad in Barcelona, Spain, and Singapore. He currently lives in Alexandria, Virginia, with his fiancée, Rebecca, and their dog, Penny.`,
        img: "/images/zach.png"
    },
    {
        name: "Mariana",
        role: "Board Member",
        desc: `Mariana is a valued member of the board whose support reflects a deep commitment to mentoring, community care, and educational opportunity. Her involvement continues to strengthen the academy's mission by bringing thoughtful leadership and a generous spirit to the work of serving students and families.`,
        img: "/images/pic2.jpeg"
    },
    {
        name: "Marian Murphy Powell",
        role: "Board Member",
        desc: `Marian Murphy Powell is an accomplished singer, theatrical artist, educator, and arts advocate whose career has been dedicated to the performing arts, arts education, and the development of young artists.

With decades of experience as a professional performer and educator, Marian brings to nonprofit board service a unique combination of artistic leadership, teaching expertise, institutional knowledge, and a deep commitment to nurturing the next generation. Alongside her performing career, Marian has devoted significant time and energy to arts education and mentorship as a private voice teacher and as an adjunct voice faculty member in high schools, colleges, and universities.

She is also an alumna of the New England Music Camp, where she has served on the faculty for over three decades and has been the Recruitment Coordinator for the last seven years. Marian is especially proud to serve as a board member of Lilies School, an organization whose mission and development are deeply meaningful to her. She was privileged to be present when the idea for the school first took hold and has had the opportunity to witness its vision grow from an idea into a living educational community.

Her commitment to Lilies reflects her belief in the transformative power of education, mentorship, creativity, and a strong community. She holds a Bachelor's degree and a Performer's Certificate of Merit from the School of Music at the State University of New York at Fredonia. She earned her Actor's Equity Association membership through the Tennessee Repertory Theatre's Young Artist Program.

Through her board service, teaching, performing, and mentorship, Marian is committed to supporting organizations that expand access to meaningful educational and artistic experiences and invest in the growth, confidence, and potential of young people.`,
        img: "/images/murphy.jpeg"
    },
    {
        name: "Oyikwan Asante",
        role: "Board Member",
        desc: `Oyikwan Asante is a Ghanaian-American entrepreneur and investor and the Co-Founder and Group CEO of AP Group, a diversified business platform with interests across hospitality, commodities, real estate, and consumer ventures.

Prior to founding AP Group, Oyikwan served as Country Manager for Ghana at Gemcorp Capital, a global investment firm with over $7 billion in assets under management. He attended Suffield Academy, where his connection to Lilies began through its founder, who was a faculty member during his time there, and later graduated from Skidmore College in New York.

Oyikwan is passionate about family, building the next generation of African companies, and helping shape Ghana's future. He is committed to supporting initiatives that create opportunity, empower young people, and strengthen communities.`,
        img: "/images/Asante.jpeg"
    },
    {
        name: "Fiona Bryan",
        role: "Board Member",
        desc: `Fiona Bryan is dedicated to advancing child wellness, nutrition, and community health initiatives. Her leadership helps ensure that students are supported not only academically, but also physically, emotionally, and holistically as they grow and thrive within the academy community.`,
        img: "/images/fiona.jpeg"
    },
    {
        name: "Donna Phillips",
        role: "Board Member",
        desc: `Donna Phillips earned her B.S. from the State University of New York at Buffalo and later completed her M.S. and certification of advanced studies at the State University of New York at Brockport. She taught Nutrition and Health Sciences at Brockport College and spent a 34-year career as a teacher and administrator for Rochester City Schools.

She participated in developing national and state legislation for education and directed adult and family literacy programs serving 8,000 students in Rochester, New York. Donna was also a national presenter on topics of literacy and school-to-work transitions.

Today, she is retired from teaching and is an organic vegetable farmer, continuing to contribute to her community through both service and stewardship.`,
        img: "/images/donna.jpeg"
    },
];

const leadershipMembers: Profile[] = [
    {
        name: "Kim Wiggin",
        role: "Co-Founder & Director",
        preview: "Kim Wiggin is a graduate of the Hartt School of Music with a Bachelor of Arts in voice and music education. She received a Masters of Arts in Special Education from the University of St. Joseph in West Hartford, Connecticut. She taught special education in public and private schools in Connecticut for over 35 years.",
        desc: `Kim Wiggin is a graduate of the Hartt School of Music with a Bachelor of Arts in voice and music
education, and received a Masters of Arts in Special Education from the University of St. Joseph
in West Hartford, Connecticut. She taught special education in both public and private schools
in Connecticut for over 35 years. Her last position was the Director of Academic Support at
Suffield Academy in Suffield, Connecticut, where she holds the Kim Wiggin Chair in Academic
Support, and managed the individualized academic programs for over 60 students. At Suffield,
she also helped vocal coach the annual musical, and is responsible for the international travel
and service programs to Europe, South America, Asia, and Africa. She returned to New England
Music Camp in Sidney, Maine in 1995 as the head counselor, then Director until her retirement
in 2024.

Kim has been very involved in community service work at both the local level through the
Episcopal church and local schools, and internationally. She is the founder and president of The
Lilies Foundation, a non-profit charity that supports educational and cultural programs for
impoverished children in the Accra region of Ghana in western Africa. The foundation supports
Lilies of the Field Academy in Osu, and has helped over 130 Ghanaian children attend school
through sponsorships. They proudly now count 42 high school graduates and 6 current
university attendees among their students!

Kim and her husband John live on the campus of the music camp, part of Snow Pond Center for
the Arts in Maine. Kim also has a house in Pram Pram, Ghana, where she resides for about
five months each year. We have 3 adult sons: Paul, and his wife Trish who also reside in Malne,
Andrew and his wife Melanie, and their four sons Eddy, Mac, Jimmy and Mikey who live in
Colorado, and Matthew and his husband Stephen, who live across the road from us in Maine,
and are the current executive directors of Snow Pond Center for the Arts. It is a blessed and
joyous life!`,
        img: "/images/pic10.jpeg"
    },
    {
        name: "Joe Oko Adokwei",
        role: "Co-Founder & Executive Director",
        preview: "Joseph Oko Adokwei is an Osu native, educator, and choreographer. He co-founded Lilies of the Field Academy with Kim Wiggin in January 2016. Through cultural arts and community programs, he supports youth empowerment and the academy's work with local children.",
        desc: `Joseph Oko Adokwei is an Osu native, educator, and choreographer. He co-founded Lilies of the Field Academy with Kim Wiggin in January 2016. As Executive Director, he helps lead the academy's work in the community. His commitment to youth empowerment is reflected in the cultural arts and community programs he supports.`,
        img: "/images/lilies_img2.jpg"
    },
    {
        name: "Luigia Adjei",
        role: "Head Teacher",
        preview: "Luigia Adjei leads daily curriculum delivery across the academy's primary grade levels. She oversees literacy assessments to help track and support students' learning. She also coordinates teachers and classroom instruction across the school.",
        desc: `Luigia Adjei serves as Head Teacher at Lilies of the Field Academy. She oversees daily curriculum delivery and literacy assessments across all primary grade levels. She also coordinates teachers and classroom instruction across the school. Through this work, she supports students' learning and the academy's day-to-day educational program.`,
        img: "/images/lilies_img1.jpg"
    }
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [selectedMember, setSelectedMember] = useState<Profile | null>(null);

    const closeBio = () => {
        setSelectedMember(null);
        requestAnimationFrame(() => triggerRef.current?.focus());
    };

    useEffect(() => {
        if (!selectedMember) return;

        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.dataset.modalOpen = "true";

        const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                closeBio();
                return;
            }

            if (event.key !== "Tab" || !modalRef.current) return;

            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            cancelAnimationFrame(focusFrame);
            document.body.style.overflow = previousBodyOverflow;
            delete document.documentElement.dataset.modalOpen;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedMember]);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>
            {/* 1. HERO */}
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-950 pt-28 md:pt-36 pb-16">
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-600/40 via-sky-500/20 to-indigo-900/50" />
                    <Image
                        src="/images/about_hero.jpeg"
                        alt="Children studying at Lilies of the Field Academy"
                        fill
                        className="object-cover opacity-75 md:opacity-85"
                        priority
                    />
                </div>

                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white">
                    <span className="reveal-text uppercase text-white font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-950/35 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Our Story
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight text-balance">
                        The journey to <br /> opportunity begins here.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        Lilies of the Field Academy was established to provide children in Osu with the academic foundation, artistic discipline, and mentorship needed to thrive.
                    </p>
                </div>

            </section>

            {/* 2. VISION & MISSION - FOUNDERS SECTION */}
            <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
                    <div className="reveal-text">
                        <span className="uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block">
                            Our Founders
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-bold mb-5 text-slate-900 leading-[1.12] tracking-tight">
                            A bridge between <br /> Osu and the World.
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-5">
                            Founded in January 2016 by <strong className="text-slate-900 font-semibold">Joseph Oko Adokwei</strong>, an Osu native and dance instructor, and <strong className="text-slate-900 font-semibold">Kim Wiggin</strong>, a teacher and administrator from Connecticut, USA.
                        </p>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Together, they recognized that talented children in Osu were missing foundational schooling due to family financial hardship. Lilies of the Field Academy was established to eliminate barriers to learning and nourish full human potential.
                        </p>
                    </div>
                    <div className="reveal-text relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                        <Image src="/images/pic10.jpeg" alt="Joseph Oko Adokwei and Kim Wiggin" fill className="object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="reveal-text flex flex-col items-start gap-5 bg-slate-50 p-8 rounded-2xl md:rounded-3xl border border-slate-100">
                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#2563eb]" strokeWidth={2.2} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Our Core Pledge</h2>
                        <ul className="space-y-3.5 text-base text-slate-600 font-normal leading-relaxed">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Academic literacy and daily homework assistance</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Traditional Ghanaian dance, rhythm, and performing arts</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Safe after-school environment with nutritious meals</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" /> Targeted mentorship for girls and at-risk boys</li>
                        </ul>
                    </div>
                    <div className="reveal-text flex flex-col items-start gap-5 bg-slate-50 p-8 rounded-2xl md:rounded-3xl border border-slate-100">
                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#22c55e]" strokeWidth={2.2} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Our Progress</h2>
                        <p className="text-base text-slate-600 leading-relaxed font-normal">
                            Lilies currently sponsors {impactData.sponsoredStudents.value} students attending local schools. An additional {impactData.additionalProgramChildren.value} local children participate in after-school support and dance programs, extending the academy&apos;s reach beyond sponsored students.
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed font-normal">
                            Since 2021, {impactData.highSchoolGraduatesSince2021.value} Lilies students have graduated from high school, and {impactData.universityStudents.value} graduates are currently attending university.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. FUTURE VISION */}
            <section className="py-16 md:py-24 bg-[#2563eb] text-white rounded-2xl md:rounded-3xl mx-4 md:mx-8 mb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <span className="reveal-text uppercase text-white/90 font-semibold tracking-[0.14em] text-xs mb-4 block">
                        Capital Initiative
                    </span>
                    <h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 text-white leading-[1.1] tracking-tight">
                        A Dedicated School Facility for Osu.
                    </h2>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
                        We are actively fundraising to construct our permanent headquarters in Accra, complete with 3 state of the art classrooms, restrooms, and meeting spaces.
                    </p>
                    <Link href="/get-involved" className="reveal-text inline-flex items-center gap-2 bg-white text-[#2563eb] px-7 py-3.5 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors shadow-sm active:translate-y-0.5">
                        Support the Building Fund <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* 4. OUR LEADERSHIP */}
            <section className="py-16 md:py-24 bg-white px-6 w-full max-w-7xl mx-auto">
                <div className="reveal-text text-center mb-14 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">Institutional Leadership</h2>
                    <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">The educators, community leaders, and directors guiding our daily operations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {leadershipMembers.map((member) => (
                        <div
                            key={member.name}
                            className="reveal-text group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                        >
                            <button
                                type="button"
                                onClick={(event) => {
                                    triggerRef.current = event.currentTarget;
                                    setSelectedMember(member);
                                }}
                                className="flex w-full flex-col items-center focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                                aria-label={`View bio for ${member.name}`}
                            >
                                <div className="relative mb-3.5 h-20 w-20 overflow-hidden rounded-full border border-white shadow-2xs transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                        sizes="80px"
                                        className="h-20 w-20 object-cover"
                                    />
                                </div>
                                <h3 className="mb-0.5 text-base font-heading font-bold text-slate-900">{member.name}</h3>
                                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563eb]">{member.role}</p>
                                <p className="mb-3 text-sm leading-relaxed text-slate-600">{member.preview}....... </p>
                                <span className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:text-[#2563eb]">
                                    View full bio
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[#2563eb] transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-[#2563eb] group-hover:text-white" aria-hidden="true">
                                        <span className="text-lg font-medium leading-none">&gt;</span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Board Section */}
                <div className="reveal-text text-center">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-8">Board of Directors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {boardMembers.map((boardMember) => (
                            <div
                                key={boardMember.name}
                                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                            >
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        triggerRef.current = event.currentTarget;
                                        setSelectedMember(boardMember);
                                    }}
                                    className="flex w-full flex-col items-center focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                                    aria-label={`View bio for ${boardMember.name}`}
                                >
                                    <div className="relative mb-3.5 h-20 w-20 overflow-hidden rounded-full border border-white shadow-2xs transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={boardMember.img}
                                            alt={boardMember.name}
                                            width={80}
                                            height={80}
                                            sizes="80px"
                                            className="h-20 w-20 object-cover"
                                            style={boardMember.name === "Zach McCormic" ? { objectPosition: "center 14%" } : undefined}
                                        />
                                    </div>
                                    <h4 className="mb-0.5 text-base font-heading font-bold text-slate-900">{boardMember.name}</h4>
                                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563eb]">{boardMember.role}</p>
                                    <span className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:text-[#2563eb]">
                                        View bio
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[#2563eb] transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-[#2563eb] group-hover:text-white" aria-hidden="true">
                                            <span className="text-lg font-medium leading-none">&gt;</span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-[120] flex items-start justify-start overflow-hidden bg-slate-950/70 p-4 pt-2 backdrop-blur-md sm:p-8 sm:pt-4 md:p-12 md:pt-6"
                        role="presentation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        onClick={closeBio}
                    >
                        <motion.div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="member-name"
                            tabIndex={-1}
                            className="relative mx-auto mt-0 max-h-[calc(100vh-1rem)] min-h-[50vh] w-full max-w-4xl overscroll-contain overflow-y-auto overflow-x-hidden rounded-3xl bg-white shadow-2xl sm:mt-0 sm:max-h-[calc(100vh-2rem)] md:mt-0 md:max-h-[calc(100vh-3rem)]"
                            initial={{ opacity: 0, scale: 0.88, y: 40, rotateX: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 24 }}
                            transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
                            onClick={(event) => event.stopPropagation()}
                            onWheelCapture={(event) => event.stopPropagation()}
                            onTouchMoveCapture={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                ref={closeButtonRef}
                                onClick={closeBio}
                                className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2.5 text-slate-600 shadow-md transition-colors hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-[#2563eb]"
                                aria-label="Close biography"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <div className="flex min-h-[50vh] flex-col p-8 text-left sm:p-10 md:p-14">
                                <motion.div
                                    className="relative mb-8 h-[340px] w-full max-w-[240px] shrink-0 overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-4 ring-white sm:h-[400px] sm:max-w-[270px] md:h-[440px] md:max-w-[280px]"
                                    initial={{ opacity: 0, x: -35 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
                                >
                                    <Image src={selectedMember.img} alt={selectedMember.name} fill className="object-cover object-center" priority />
                                </motion.div>
                                <motion.div
                                    className="flex max-w-2xl flex-col"
                                    initial={{ opacity: 0, x: 28 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
                                >
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">{selectedMember.role}</p>
                                    <div className="mb-4 inline-flex w-fit flex-col items-start">
                                        <h2
                                            id="member-name"
                                            className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl"
                                        >
                                            {selectedMember.name}
                                        </h2>
                                        <span className="mt-2 h-1.5 w-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#bfdbfe] shadow-[0_0_18px_rgba(37,99,235,0.25)]" />
                                    </div>
                                    <p
                                        className="max-w-3xl whitespace-pre-line text-center text-base leading-8 text-slate-600 md:text-justify"
                                        style={{ textAlign: "justify" }}
                                    >
                                        {selectedMember.desc}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
