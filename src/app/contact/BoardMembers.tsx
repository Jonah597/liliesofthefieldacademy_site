"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const members = [
    { name: "Dr. Sarah Johnson", role: "Chairperson", image: "/images/edited4.jpeg" },
    { name: "Michael Chen", role: "Vice Chair", image: "/images/edited4.jpeg" },
    { name: "Amara Osei", role: "Secretary", image: "/images/edited4.jpeg" },
    { name: "David Wilson", role: "Treasurer", image: "/images/edited4.jpeg" },
    { name: "Elena Rodriguez", role: "Member", image: "/images/edited4.jpeg" },
    { name: "James Kweku", role: "Member", image: "/images/edited4.jpeg" },
];

export default function BoardMembers() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3 tracking-tight"
                    >
                        Advisory Board &amp; Governance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed"
                    >
                        Experienced professionals guiding organizational compliance, fiscal governance, and long-term sustainability.
                    </motion.p>
                </div>

                {/* Desktop Orbit Layout */}
                <div
                    className="hidden md:flex relative w-full max-w-[580px] aspect-square mx-auto items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Central Hub */}
                    <div className="absolute z-10 w-36 h-36 bg-white rounded-full shadow-sm flex flex-col items-center justify-center border-2 border-slate-100 text-center p-3">
                        <span className="text-[#2563eb] font-heading font-bold text-3xl mb-0.5">{members.length}</span>
                        <span className="text-slate-500 text-[11px] uppercase tracking-[0.14em] font-semibold">Directors</span>
                    </div>

                    {/* Orbiting Container */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-dashed border-slate-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                    >
                        {members.map((member, index) => {
                            const angle = (index / members.length) * 360;

                            return (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(240px)`,
                                    }}
                                >
                                    {/* Counter-rotating Content */}
                                    <motion.div
                                        className="w-full h-full relative group cursor-pointer"
                                        initial={{ rotate: -angle }}
                                        animate={{ rotate: -angle - 360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm relative z-10 bg-slate-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none border border-slate-100">
                                            <p className="font-heading font-bold text-slate-900 text-xs">{member.name}</p>
                                            <p className="text-[#2563eb] text-[10px] font-semibold uppercase tracking-[0.12em]">{member.role}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Mobile Grid Layout */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:hidden">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-2xs"
                        >
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shadow-2xs mb-2.5 relative bg-slate-200">
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            </div>
                            <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug">{member.name}</h3>
                            <p className="text-[#2563eb] text-[11px] font-semibold uppercase tracking-[0.12em] mt-0.5">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}