"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Students", "Community", "Classroom", "Volunteers", "Graduations"];

const galleryImages = [
    { src: "/images/edited1.png", category: "Classroom" },
    { src: "/images/edited2.png", category: "Students" },
    { src: "/images/edited3.png", category: "Students" },
    { src: "/images/edited4.jpeg", category: "Community" },
    { src: "/images/edited5.png", category: "Community" },
    { src: "/images/edited6.png", category: "Graduations" },
    { src: "/images/edited7.png", category: "Volunteers" },
    { src: "/images/edited8.png", category: "Students" },
    { src: "/images/edited9.png", category: "Graduations" },
    { src: "/images/lilies_img1.jpg", category: "Classroom" },
    { src: "/images/lilies_img2.jpg", category: "Classroom" },
    { src: "/images/pic1.jpeg", category: "Students" },
    { src: "/images/pic2.jpeg", category: "Students" },
    { src: "/images/pic3.jpeg", category: "Volunteers" },
    { src: "/images/pic4.jpeg", category: "Community" },
    { src: "/images/pic5.jpeg", category: "Classroom" },
    { src: "/images/pic6.jpeg", category: "Community" },
    { src: "/images/pic7.jpeg", category: "Students" },
    { src: "/images/pic8.jpeg", category: "Volunteers" },
    { src: "/images/pic9.jpeg", category: "Classroom" },
    { src: "/images/pic10.jpeg", category: "Community" },
    { src: "/images/pic11.jpeg", category: "Students" },
    { src: "/images/pic12.jpeg", category: "Students" },
    { src: "/images/pic13.jpeg", category: "Community" },
    { src: "/images/pic14.jpeg", category: "Graduations" },
    { src: "/images/pic15.jpeg", category: "Classroom" },
    { src: "/images/pic16.jpeg", category: "Students" },
    { src: "/images/pic17.jpeg", category: "Volunteers" },
    { src: "/images/pic18.jpeg", category: "Community" },
    { src: "/images/pic19.jpeg", category: "Classroom" },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white min-h-screen">
            {/* 1. HERO - EMOTIVE & CRISP */}
            <section className="relative min-h-[60svh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-32 md:pt-40 border-b border-slate-100 mb-20">
                <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
                    <span className="uppercase text-[#2563eb] font-bold tracking-[0.2em] text-[13px] mb-8 block bg-white/10 p-2 rounded-full w-fit mx-auto shadow-sm">
                        Visual Impact
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 text-slate-900 leading-[0.95] tracking-tight text-balance">
                        Moments of <br /> transformation.
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-20 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-4 rounded-full text-base font-bold transition-all duration-300 border-2 ${activeCategory === cat ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-2xl scale-105' : 'bg-white border-slate-100 text-slate-500 hover:border-[#2563eb]/20 hover:text-[#2563eb]'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. MASONRY GRID - CLEAN IMAGE CARDS */}
            <section className="px-6 mb-40 w-full max-w-[1600px] mx-auto">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-10 space-y-10">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                key={image.src + i}
                                className="relative break-inside-avoid group cursor-pointer rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-8 border-slate-50"
                                onClick={() => setLightboxImage(image.src)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.category}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transition-all duration-700 rounded-[2.5rem]"
                                />

                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="bg-white p-5 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <ZoomIn className="text-[#2563eb] w-10 h-10" />
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[11px] py-2 px-5 rounded-full font-bold uppercase tracking-[0.15em] shadow-2xl">
                                        {image.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-slate-900/98 flex items-center justify-center p-8 md:p-16 backdrop-blur-2xl"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-10 right-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-6 transition-all shadow-2xl"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            className="relative max-w-7xl w-full max-h-[90vh] rounded-[5rem] overflow-hidden shadow-2xl bg-white p-8 md:p-16"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightboxImage}
                                alt="Lightbox Preview"
                                className="w-full h-full object-contain rounded-[3.5rem]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
