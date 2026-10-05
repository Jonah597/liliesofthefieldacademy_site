/**
 * FILE: components/Preloader.tsx
 *
 * PURPOSE:
 * Displays a full-screen animated splash screen when the website first loads.
 * The preloader covers the entire viewport and smoothly fades out after 2 seconds,
 * giving the page time to render and creating a premium first impression.
 *
 * RESPONSIBILITIES:
 * - Shows the academy logo centered on a white background
 * - Animates a horizontal progress bar from left to right over 2 seconds
 * - Displays the tagline "Transforming Futures" with a fade-in delay
 * - Fades the entire splash screen out after 2 seconds using Framer Motion
 *
 * HOW IT WORKS:
 * 1. Component mounts with `loading = true` → the splash screen is visible
 * 2. A 2-second timer fires → `loading` is set to `false`
 * 3. Framer Motion's `AnimatePresence` detects the removal and plays the exit animation
 * 4. The splash screen fades out, revealing the underlying page content
 *
 * IMPORTANT:
 * The 2-second delay is intentional and creates a deliberate branded moment.
 * The actual page content is rendered underneath the preloader during this time.
 *
 * THIRD-PARTY DEPENDENCIES:
 * - framer-motion: Provides the `AnimatePresence` and `motion.*` components
 *   used for entrance and exit animations.
 *
 * USED BY:
 * src/app/layout.tsx — mounted in the root layout so it appears on the initial page load.
 */

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    // Controls whether the splash screen is visible.
    // Starts as true (visible) and switches to false after the timer fires.
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // After 2 seconds, hide the preloader by setting loading to false.
        // This triggers Framer Motion's exit animation via AnimatePresence.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clean up the timer if the component unmounts before the 2 seconds pass.
        // This prevents state updates on an unmounted component.
        return () => clearTimeout(timer);
    }, []); // Empty array: this timer is set only once when the component mounts.

    return (
        /*
         * AnimatePresence enables exit animations for components that are
         * conditionally rendered. Without it, React would immediately remove
         * the div from the DOM when `loading` becomes false, and the exit
         * animation (fade out) would never play.
         */
        <AnimatePresence>
            {loading && (
                <motion.div
                    // Start fully visible
                    initial={{ opacity: 1 }}
                    // When `loading` becomes false, AnimatePresence triggers this exit
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    // Covers the entire viewport and sits above all other content (z-[1000])
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Animated academy logo — scales in and un-blurs from a blurred small state */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-36 h-36 md:w-40 md:h-40"
                        >
                            <Image
                                src="/images/latest_logo1.png"
                                // Meaningful alt text for screen readers;
                                // the logo communicates the brand identity visually.
                                alt="Academy Logo"
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Progress bar track — light gray background strip */}
                        <div className="w-56 h-1 bg-slate-100 rounded-full overflow-hidden relative">
                            {/*
                             * Animated fill bar — slides from left (-100%) to right (0%)
                             * over 2 seconds to visually represent the loading progress.
                             * Duration matches the setTimeout delay above.
                             */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#2563eb]"
                            />
                        </div>

                        {/*
                         * Tagline — fades in after a 0.5s delay, giving the logo time
                         * to animate into place before the text appears.
                         */}
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
