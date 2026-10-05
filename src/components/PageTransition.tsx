/**
 * FILE: components/PageTransition.tsx
 *
 * PURPOSE:
 * Wraps page content in a smooth fade-and-slide animation that plays every time
 * the user navigates between pages (routes) in the application.
 *
 * RESPONSIBILITIES:
 * - Detects route changes using Next.js's `usePathname` hook
 * - Uses Framer Motion's `AnimatePresence` and `motion.div` to animate the
 *   entry and exit of page content when navigating
 *
 * HOW IT WORKS:
 * - When the URL path changes, `pathname` changes.
 * - `AnimatePresence mode="wait"` waits for the current page's exit animation
 *   to fully complete before mounting the new page's enter animation.
 * - The `key={pathname}` on the motion.div tells Framer Motion to treat each
 *   route as a distinct element, triggering fresh enter and exit animations.
 *
 * ANIMATION:
 * - Enter: Page fades in and slides up 15px from a slightly lower position
 * - Exit:  Page fades out and slides up 15px (moves slightly upward as it leaves)
 * - Duration: 0.8 seconds with a custom cubic-bezier curve for a premium feel
 *
 * THIRD-PARTY DEPENDENCIES:
 * - framer-motion: AnimatePresence and motion.div components
 * - next/navigation: usePathname hook to detect current route
 *
 * USED BY:
 * src/app/layout.tsx — wraps the <main> element so all page content transitions.
 *
 * @param children - The current page component rendered by Next.js
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    // `pathname` is the current URL path (e.g., "/about", "/donate").
    // When the user navigates to a new page, `pathname` changes, which
    // changes the `key` on the motion.div, triggering a new animation.
    const pathname = usePathname();

    return (
        /*
         * AnimatePresence with mode="wait" ensures:
         * 1. The current page plays its exit animation completely
         * 2. Only then does the new page mount and play its enter animation
         * Without mode="wait", both animations might overlap awkwardly.
         */
        <AnimatePresence mode="wait">
            <motion.div
                // Using pathname as the key is critical: it tells Framer Motion
                // that when the URL changes, this is a new element that needs
                // fresh enter/exit animations (not an update to the same element).
                key={pathname}

                // Enter animation: the page starts invisible and slightly below,
                // then fades in and slides into its final position.
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}

                // Exit animation: the page fades out and slides upward as it leaves.
                exit={{ opacity: 0, y: -15 }}

                transition={{
                    duration: 0.8,
                    // Custom cubic-bezier easing for a cinematic, premium feel.
                    // Values: [x1, y1, x2, y2] — this creates a fast start that
                    // eases into a smooth, gradual deceleration.
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
