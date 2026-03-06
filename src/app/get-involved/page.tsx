"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, HeartHandshake, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function GetInvolved() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<"volunteer" | "partner">("volunteer");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".inv-fade").forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "circ.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white" ref={containerRef}>

            {/* Hero */}
            <section className="relative h-[65svh] w-full flex items-center justify-center overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-[url('/images/pic3.jpeg')] bg-cover bg-center opacity-40 z-0" />

                <div className="container relative z-20 mx-auto px-6 max-w-4xl text-center text-white mt-16">
                    <span className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-6 block inv-fade">Join The Movement</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 inv-fade text-balance">
                        Your Time. Their Future.
                    </h1>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto inv-fade font-medium leading-relaxed">
                        There are many ways to make an impact. Whether you offer your skills as a volunteer, align your business as a partner, or sponsor a child&apos;s education, you are building a better world.
                    </p>
                </div>
            </section>

            {/* Sponsor a child Callout */}
            <section className="py-24 px-6 bg-[#FAFAFA] border-b border-gray-100 relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="inv-fade relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <Image src="/images/pic7.jpeg" alt="Sponsor a Child" fill className="object-cover" />
                    </div>
                    <div className="inv-fade">
                        <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-8">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">Sponsor a Child</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            For less than the cost of a daily cup of coffee, you can provide a child with a full year of education, comprehensive healthcare, and daily nutritious meals. Sponsorship goes beyond money—it creates a lifelong bond of support.
                        </p>
                        <Link href="/donate" className="bg-primary text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                            Sponsor Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Forms Section */}
            <section className="py-32 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16 inv-fade">
                        <h2 className="text-4xl font-heading font-bold mb-4">Other Ways to Get Involved</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tell us how you&apos;d like to help, and our team will get back to you with the next steps.</p>
                    </div>

                    {/* Tab switch */}
                    <div className="flex justify-center mb-12 inv-fade">
                        <div className="bg-gray-100 p-2 rounded-full inline-flex relative shadow-inner">
                            <button
                                onClick={() => setActiveTab("volunteer")}
                                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 relative z-10 ${activeTab === "volunteer" ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Become a Volunteer
                            </button>
                            <button
                                onClick={() => setActiveTab("partner")}
                                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 relative z-10 ${activeTab === "partner" ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Corporate Partnership
                            </button>

                            {/* Sliding Background */}
                            <div
                                className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeTab === "partner" ? 'translate-x-[calc(100%+8px)]' : 'translate-x-0'}`}
                            />
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-12 inv-fade shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">

                        {activeTab === "volunteer" && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                                <div className="flex items-center gap-4 mb-8">
                                    <Handshake className="w-10 h-10 text-primary" />
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold">Volunteer Application</h3>
                                        <p className="text-gray-500 text-sm">Join our team of dedicated tutors and mentors.</p>
                                    </div>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700">First Name</label>
                                        <input type="text" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Jane" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700">Last Name</label>
                                        <input type="text" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                                        <input type="email" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="jane@example.com" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Area of Interest</label>
                                        <select className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground bg-white">
                                            <option>Academic Tutoring</option>
                                            <option>Mentorship Programs</option>
                                            <option>Event Organization</option>
                                            <option>Administrative Support</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Why do you want to volunteer?</label>
                                        <textarea rows={4} className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tell us briefly about yourself..."></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <button className="w-full bg-foreground text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors hover:shadow-lg shadow-primary/20">
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {activeTab === "partner" && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                                <div className="flex items-center gap-4 mb-8">
                                    <FileText className="w-10 h-10 text-green-600" />
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold">Partnership Inquiry</h3>
                                        <p className="text-gray-500 text-sm">Align your brand with our mission to educate.</p>
                                    </div>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Company Name</label>
                                        <input type="text" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all" placeholder="Acme Corp" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700">Contact Person</label>
                                        <input type="text" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700">Position/Title</label>
                                        <input type="text" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all" placeholder="CSR Manager" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Work Email</label>
                                        <input type="email" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all" placeholder="john@acme.com" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Partnership Proposal Idea</label>
                                        <textarea rows={4} className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all resize-none" placeholder="How would you like to collaborate with us?"></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                                            Send Inquiry
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                    </div>
                </div>
            </section>

        </div>
    );
}
