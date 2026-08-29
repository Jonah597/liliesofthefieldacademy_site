"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Placeholder data - replace with your actual board members and images
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
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6"
                    >
                        Our Supporting Board
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        The dedicated visionaries guiding our mission and ensuring our impact lasts for generations.
                    </motion.p>
                </div>

                {/* Desktop Circular Orbit Layout */}
                <div
                    className="hidden md:flex relative w-full max-w-[700px] aspect-square mx-auto items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Central Hub */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="absolute z-10 w-48 h-48 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-blue-50 text-center p-4"
                    >
                        <span className="text-blue-600 font-bold text-5xl mb-1">{members.length}</span>
                        <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Members</span>
                    </motion.div>

                    {/* Orbiting Container */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-dashed border-blue-200"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                    >
                        {members.map((member, index) => {
                            const angle = (index / members.length) * 360;
                            // We position items around the circle using rotation, then counter-rotate the content

                            return (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(300px)`,
                                    }}
                                >
                                    {/* Counter-rotating Content */}
                                    <motion.div
                                        className="w-full h-full relative group cursor-pointer"
                                        initial={{ rotate: -angle }}
                                        animate={{ rotate: -angle - 360 }}
                                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 bg-slate-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none border border-slate-100">
                                            <p className="font-bold text-slate-900 text-sm">{member.name}</p>
                                            <p className="text-blue-600 text-xs font-bold uppercase">{member.role}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Mobile Grid Layout (Circular layout is too wide for mobile) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:hidden">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative bg-slate-200">
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base leading-tight">{member.name}</h3>
                            <p className="text-blue-600 text-xs font-bold uppercase mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}