"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartHandshake, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function Donate() {
    const [amount, setAmount] = useState<number>(50);
    const [customAmount, setCustomAmount] = useState<string>("");

    const impacts = [
        { value: 10, target: "school supplies", desc: "Provides pens, notebooks, and pencils for one student for a full term." },
        { value: 25, target: "learning materials", desc: "Purchases essential textbooks and early reader books for our library." },
        { value: 50, target: "meals for students", desc: "Feeds a child one hot, nutritious meal a day for two full months." },
        { value: 100, target: "scholarship support", desc: "Covers tuition, uniform, and exam fees for an entire semester." }
    ];

    const currentImpact = impacts.find(i => amount === i.value) || {
        target: "greatest need",
        desc: "Your custom generous donation will be directed to where it is needed most at this moment."
    };

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen">
            {/* 1. HERO - MINIMAL & EMOTIVE */}
            <section className="relative min-h-[60svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-100 pt-32 md:pt-40 mb-20">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Make An Impact
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Investment in <br /> childhood potential.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed text-balance opacity-80">
                        100% of your gift directly funds the education and nutrition
                        of children at the Lilies of the Field Academy.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 mb-40">
                {/* Left Side: Storytelling */}
                <div className="flex flex-col">
                    <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl mb-20 border-[12px] border-slate-50 p-6">
                        <Image src="/images/edited1.png" alt="Children smiling" fill className="object-cover transition-transform duration-1000 hover:scale-110 rounded-[4rem]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent rounded-[4rem]" />
                        <div className="absolute bottom-0 left-0 p-12 text-white z-20">
                            <p className="font-heading font-bold text-3xl mb-4 leading-tight">&quot;Because you cared, I am learning.&quot;</p>
                            <p className="opacity-80 font-light text-xl">— Grade 4 Student</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 flex flex-col gap-10">
                        <h3 className="font-heading font-bold text-3xl text-slate-900 tracking-tight">Support Our Current Drive</h3>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            We are currently raising funds for our annual uniform and textbook drive. Your contribution ensures no child is turned away for lack of materials.
                        </p>
                        <div className="space-y-6">
                            <div className="flex justify-between text-sm font-bold text-slate-900 uppercase tracking-[0.2em]">
                                <span>75% Funded</span>
                                <span>$50,000 Goal</span>
                            </div>
                            <div className="h-4 w-full bg-white rounded-full overflow-hidden shadow-inner flex items-center px-1">
                                <div className="h-2 bg-[#22c55e] w-[75%] rounded-full shadow-lg transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Donation Form */}
                <div className="relative">
                    <div className="sticky top-40 bg-white rounded-[4.5rem] shadow-2xl border border-slate-100 p-12 md:p-16">
                        <h2 className="text-3xl font-heading font-bold mb-12 text-slate-900 tracking-tight text-center">Set Your Gift</h2>

                        {/* Impact Visualizer */}
                        <div className="bg-[#2563eb] rounded-[3.5rem] p-12 mb-12 text-center flex flex-col items-center justify-center text-white relative overflow-hidden group border-4 border-[#2563eb]/20">
                            <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px:24px]" />
                            <HeartHandshake className="w-14 h-14 text-white mb-6 transition-transform group-hover:scale-110" />
                            <p className="font-heading font-bold text-2xl text-white mb-4 leading-tight relative z-10">
                                ${amount || customAmount || 0} provides {currentImpact.target}
                            </p>
                            <p className="text-blue-50 text-base font-light px-4 relative z-10 leading-relaxed opacity-90">
                                {currentImpact.desc}
                            </p>
                        </div>

                        {/* Pre-set amounts */}
                        <div className="grid grid-cols-4 gap-4 mb-10">
                            {[10, 25, 50, 100].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => { setAmount(val); setCustomAmount(""); }}
                                    className={`py-6 rounded-3xl font-bold text-xl border-2 transition-all ${amount === val ? 'border-[#2563eb] bg-[#2563eb] text-white shadow-2xl scale-105' : 'border-slate-100 bg-white text-slate-500 hover:border-[#2563eb]/30 hover:bg-slate-50 hover:text-[#2563eb]'}`}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="relative mb-12">
                            <span className="absolute left-10 top-1/2 -translate-y-1/2 font-bold text-slate-300 text-2xl">$</span>
                            <input
                                type="number"
                                placeholder="Other Amount"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setAmount(0);
                                }}
                                className="w-full pl-20 pr-10 py-7 rounded-[2.5rem] border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#2563eb] focus:ring-8 ring-[#2563eb]/5 transition-all font-bold text-2xl text-slate-900"
                            />
                        </div>

                        {/* Secure Donate Button */}
                        <button className="w-full bg-slate-900 text-white py-7 rounded-full font-bold text-2xl hover:bg-[#2563eb] transition-all shadow-2xl flex items-center justify-center gap-4 group active:scale-95">
                            Confirm ${amount || customAmount || 0} Gift <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                        </button>

                        <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-3 mt-12 opacity-60">
                            <Lock className="w-4 h-4" /> Secure SSL Connection
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
