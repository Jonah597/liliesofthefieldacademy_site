"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen, GraduationCap, Utensils, MapPin, Heart } from "lucide-react";

const StatCard = ({ icon: Icon, title, value, desc, color }: { icon: any, title: string, value: string, desc: string, color: string }) => {
    return (
        <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className={`w-20 h-20 rounded-2xl ${color} bg-opacity-5 flex items-center justify-center ${color.replace('bg-', 'text-')} mb-8 group-hover:scale-110 transition-transform`}>
                <Icon className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-heading font-medium text-[#1e293b] mb-4">
                {value}
            </h3>
            <p className="text-xl font-bold text-[#1e293b] mb-3">{title}</p>
            <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
        </div>
    );
};

export default function Impact() {
    return (
        <div className="w-full flex-col flex overflow-hidden bg-[#f8fafc]">
            {/* 1. HERO - CLEAN & FOCUSED */}
            <section className="relative h-[60svh] w-full flex items-center justify-center overflow-hidden bg-white border-b border-gray-100">
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center pt-24">
                    <span className="uppercase text-[#2563eb] font-bold tracking-widest text-sm mb-6 block">Our Results</span>
                    <h1 className="text-5xl md:text-8xl font-heading font-medium mb-8 text-[#1e293b] text-balance">
                        Measuring Our Impact.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-balance">
                        Every number represents a child whose life has been changed forever through education and care.
                    </p>
                </div>
            </section>

            {/* 2. STATS GRID - BREATHABLE */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <StatCard icon={Users} title="Children Educated" value="5,420+" color="bg-[#2563eb]" desc="Students attending school daily through our support." />
                        <StatCard icon={Utensils} title="Meals Provided" value="1.2M+" color="bg-[#22c55e]" desc="Nutritious daily meals served to our students." />
                        <StatCard icon={BookOpen} title="Books Distributed" value="15,800" color="bg-[#d72638]" desc="High-quality learning materials given to local schools." />
                        <StatCard icon={GraduationCap} title="Scholarships" value="350+" color="bg-[#2563eb]" desc="Full tuition coverage for high-performing students." />
                        <StatCard icon={MapPin} title="Communities" value="42" color="bg-[#22c55e]" desc="Villages and towns within our support network." />

                        <div className="bg-[#2563eb] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
                            <h3 className="text-3xl font-heading font-medium mb-6 relative z-10">Join the Movement</h3>
                            <p className="text-lg opacity-90 mb-10 font-light relative z-10">Help us reach the next 10,000 children.</p>
                            <a href="/donate" className="bg-white text-[#2563eb] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all relative z-10 shadow-lg">
                                Donate Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GROWTH CHART - MINIMALIST */}
            <section className="py-40 px-6 bg-white border-y border-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-heading font-medium text-[#1e293b]">Expansion of Hope.</h2>
                        <p className="max-w-2xl mx-auto text-gray-400 mt-8 text-xl font-light">Documenting our consistent growth in enrollment and community outreach over the past decade.</p>
                    </div>

                    <div className="flex items-end justify-between h-[450px] gap-4 md:gap-12 relative">
                        {[
                            { year: '2020', value: '1.5k', height: '30%' },
                            { year: '2021', value: '2.4k', height: '50%' },
                            { year: '2022', value: '3.6k', height: '70%' },
                            { year: '2023', value: '4.5k', height: '85%' },
                            { year: '2024', value: '5.4k', height: '100%' },
                        ].map((data, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group">
                                <div className="relative w-full flex justify-center h-full items-end pb-4">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: data.height }}
                                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="w-full max-w-[60px] bg-[#2563eb]/10 group-hover:bg-[#2563eb] rounded-2xl transition-all duration-500 relative flex flex-col items-center"
                                    >
                                        <span className="absolute -top-12 font-bold text-[#2563eb] opacity-0 group-hover:opacity-100 transition-all text-xl">
                                            {data.value}
                                        </span>
                                    </motion.div>
                                </div>
                                <span className="text-lg font-medium text-gray-400 mt-6">{data.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL QUOTE */}
            <section className="py-40 bg-[#f8fafc] text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <Heart className="w-16 h-16 text-[#d72638] mx-auto mb-10 opacity-20" />
                    <h2 className="text-4xl md:text-6xl font-heading font-medium text-[#1e293b] leading-tight mb-10">
                        "Education is the most powerful weapon which you can use to change the world."
                    </h2>
                    <p className="text-2xl text-gray-400 font-light">— Nelson Mandela</p>
                </div>
            </section>
        </div>
    );
}
