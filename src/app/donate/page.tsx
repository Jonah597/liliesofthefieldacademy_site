"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Lock, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Donate() {
    const [amount, setAmount] = useState<number>(50);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDonate = async () => {
        setIsLoading(true);
        // Simulate secure payment processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

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

    const impacts = [
        { value: 10, target: "essential school supplies", desc: "Provides workbooks, notebooks, and pencils for one student for a full academic term." },
        { value: 25, target: "curriculum & learning materials", desc: "Purchases essential textbooks and early reader books for our primary classroom library." },
        { value: 50, target: "daily nutrition & student meals", desc: "Covers a hot, balanced daily meal for a student for two full months." },
        { value: 100, target: "semester scholarship support", desc: "Directly funds tuition support, uniforms, and examination fees for an entire semester." }
    ];

    const currentImpact = impacts.find(i => amount === i.value) || {
        target: "core educational programs",
        desc: "Your contribution will be directed to where resources are most urgently needed across our academy."
    };

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen" ref={containerRef}>
            {/* 1. HERO */}
            <section className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-100 pt-28 md:pt-36 pb-16 mb-16">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
                    <span className="reveal-text uppercase text-[#2563eb] font-semibold tracking-[0.14em] text-xs mb-3.5 block bg-blue-50/80 py-1.5 px-4 rounded-full w-fit mx-auto shadow-2xs">
                        Direct Giving
                    </span>
                    <h1 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-bold mb-5 text-slate-900 leading-[1.1] tracking-tight text-balance">
                        Invest in childhood <br /> education &amp; potential.
                    </h1>
                    <p className="reveal-text text-base sm:text-lg md:text-[19px] text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                        100% of public donations directly fund academic instruction, arts curriculum, and student nutrition at Lilies of the Field Academy in Osu, Ghana.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-28 items-start">
                {/* Left Side: Storytelling & Accountability */}
                <div className="flex flex-col gap-8">
                    <div className="reveal-text relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                        <Image src="/images/edited1.png" alt="Children at academy" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/90 via-[#2563eb]/25 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-20">
                            <p className="font-heading font-bold text-xl md:text-2xl mb-1 leading-snug">&ldquo;Because of your support, I am in school every day.&rdquo;</p>
                            <p className="text-blue-100 font-normal text-sm">— Primary 4 Student, Osu</p>
                        </div>
                    </div>

                    <div className="reveal-text bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 flex flex-col gap-4">
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 tracking-tight">Active Academic Drive</h3>
                        <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
                            We are currently securing annual textbook, uniform, and nutrition funding for the upcoming school year. Your gift ensures no child is turned away.
                        </p>
                        <div className="space-y-2.5 pt-2">
                            <div className="flex justify-between text-xs font-semibold text-slate-900 uppercase tracking-[0.14em]">
                                <span>75% of Target Reached</span>
                                <span>$50,000 Annual Budget</span>
                            </div>
                            <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#22c55e] w-[75%] rounded-full transition-all duration-1000" />
                            </div>
                        </div>
                    </div>

                    <div className="reveal-text flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                        <ShieldCheck className="w-6 h-6 text-[#2563eb] shrink-0 mt-0.5" />
                        <div className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            <strong className="text-slate-900 font-semibold block mb-0.5">Fiscal Transparency Guarantee</strong>
                            All donations are processed securely via encrypted channels and allocated in accordance with international non-profit financial standards.
                        </div>
                    </div>
                </div>

                {/* Right Side: Donation Form */}
                <div className="relative">
                    <div className="reveal-text sticky top-24 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-heading font-bold mb-6 text-slate-900 tracking-tight text-center">Select Gift Amount</h2>

                                    {/* Impact Visualizer */}
                                    <div className="bg-[#2563eb] rounded-2xl p-6 mb-6 text-center flex flex-col items-center justify-center text-white relative overflow-hidden">
                                        <HeartHandshake className="w-8 h-8 text-white mb-2.5" />
                                        <p className="font-heading font-bold text-lg text-white mb-1 leading-snug relative z-10">
                                            ${amount || customAmount || 0} funds {currentImpact.target}
                                        </p>
                                        <p className="text-blue-100 text-xs md:text-sm font-normal px-2 relative z-10 leading-relaxed">
                                            {currentImpact.desc}
                                        </p>
                                    </div>

                                    {/* Pre-set amounts */}
                                    <div className="grid grid-cols-4 gap-2.5 mb-5">
                                        {[10, 25, 50, 100].map((val) => (
                                            <button
                                                key={val}
                                                onClick={() => { setAmount(val); setCustomAmount(""); }}
                                                className={`py-3 rounded-xl font-semibold text-base border transition-colors duration-200 cursor-pointer ${
                                                    amount === val
                                                        ? 'border-[#2563eb] bg-[#2563eb] text-white shadow-xs'
                                                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                                                }`}
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Custom Amount */}
                                    <div className="relative mb-6">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-400 text-base">$</span>
                                        <input
                                            type="number"
                                            placeholder="Other Amount"
                                            value={customAmount}
                                            onChange={(e) => {
                                                setCustomAmount(e.target.value);
                                                setAmount(0);
                                            }}
                                            className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2563eb] transition-colors font-semibold text-base text-slate-900"
                                        />
                                    </div>

                                    {/* Secure Donate Button */}
                                    <button
                                        onClick={handleDonate}
                                        disabled={isLoading}
                                        className="w-full bg-[#2563eb] text-white py-3.5 rounded-full font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-xs hover:shadow-sm flex items-center justify-center gap-2 active:translate-y-0.5 disabled:opacity-50 cursor-pointer"
                                    >
                                        {isLoading ? "Processing Contribution..." : `Donate $${amount || customAmount || 0}`}
                                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                                    </button>

                                    <div className="text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-2 mt-6">
                                        <Lock className="w-3.5 h-3.5 text-slate-400" /> 256-bit Encrypted Secure Payment
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center flex flex-col items-center py-6"
                                >
                                    <div className="w-14 h-14 bg-[#22c55e]/10 text-[#22c55e] rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-8 h-8" strokeWidth={2.2} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold mb-2 text-slate-900 leading-tight">Thank You for Your Support</h2>
                                    <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-sm">
                                        Your contribution of <strong>${amount || customAmount}</strong> has been received. Your investment directly supports educational excellence in Osu.
                                    </p>
                                    <Link
                                        href="/impact"
                                        className="bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1d4ed8] transition-colors"
                                    >
                                        Review Program Impact
                                    </Link>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-5 text-slate-500 font-medium text-xs uppercase tracking-[0.14em] hover:text-slate-800 transition-colors cursor-pointer"
                                    >
                                        Make another contribution
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
