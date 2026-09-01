"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Artificial delay for premium feel
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
                >
                    <div className="flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-28 h-28"
                        >
                            <Image
                                src="/images/LOGO4.png"
                                alt="Academy Logo"
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <div className="w-56 h-1 bg-slate-100 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#2563eb]"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-xs"
                        >
                            Transforming Futures
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
