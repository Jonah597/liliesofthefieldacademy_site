/**
 * FILE: components/SmoothScroll.tsx
 *
 * PURPOSE:
 * Wraps the entire application in a smooth-scrolling experience powered by
 * the Lenis library. Lenis replaces the browser's default "instant jump"
 * scrolling with a physics-based easing motion that feels more polished.
 *
 * RESPONSIBILITIES:
 * - Initializes a Lenis instance when the component mounts
 * - Runs Lenis on every animation frame via requestAnimationFrame so the
 *   smooth scroll motion updates continuously as the user scrolls
 * - Pauses smooth scrolling automatically when a modal is open (detected via
 *   a `data-modalOpen` attribute on the document's root element)
 * - Cleans up the Lenis instance when the component unmounts to avoid memory leaks
 *
 * THIRD-PARTY INTEGRATION:
 * Uses "lenis" (version ^1.3.18 as listed in package.json).
 * Lenis is an open-source smooth scroll library. If Lenis is removed or updated,
 * this component must be updated accordingly.
 *
 * MODAL INTERACTION:
 * The `data-modalOpen="true"` attribute is set on `document.documentElement`
 * by the About page when a board member bio modal is open. This component
 * checks for that attribute in every animation frame and pauses Lenis when
 * the modal is open, preventing background scroll while the modal is visible.
 *
 * USED BY:
 * src/app/layout.tsx — wraps all page content at the root level.
 *
 * @param children - The child components to render inside the scroll container
 */

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Create a new Lenis smooth scroll instance.
        // Lenis intercepts the browser's native scroll events and applies
        // a custom easing function to create smooth, physics-based motion.
        const lenis = new Lenis({
            // How long (in seconds) a scroll gesture takes to settle.
            // 1.2 creates a gentle, premium-feeling deceleration.
            duration: 1.2,

            // Custom easing function that maps input progress (t: 0→1) to output.
            // This specific formula creates an exponential ease-out:
            // the scroll starts fast and slows down smoothly near its destination.
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

            // The element that listens for scroll events (the browser window).
            wrapper: window,

            // The element that is actually scrolled/translated.
            content: document.documentElement,

            // Prevent Lenis from intercepting scroll inside modal dialogs.
            // If the scrolled element is inside a [role="dialog"], Lenis ignores it
            // so the modal can scroll independently of the page.
            prevent: (node) => node.closest('[role="dialog"]') !== null,
        });

        /**
         * The animation loop function called on every browser animation frame.
         *
         * Lenis requires its `raf(time)` method to be called every frame to
         * calculate and apply the smooth scroll position. Without this loop,
         * Lenis would not animate.
         *
         * @param time - The timestamp provided by requestAnimationFrame (in milliseconds)
         */
        function raf(time: number) {
            // Check whether a modal is currently open by reading a data attribute
            // set by the About page's board member bio modal.
            const modalIsOpen = document.documentElement.dataset.modalOpen === "true";

            if (modalIsOpen) {
                // Stop smooth scrolling while a modal is open.
                // This prevents the background page from scrolling when the user
                // scrolls inside the modal.
                lenis.stop();
            } else {
                // Resume smooth scrolling and advance Lenis's animation state.
                lenis.start();
                lenis.raf(time);
            }

            // Schedule the next animation frame, creating a continuous loop.
            requestAnimationFrame(raf);
        }

        // Start the animation loop.
        requestAnimationFrame(raf);

        // Cleanup: when this component unmounts, destroy the Lenis instance.
        // This removes all event listeners and stops the animation loop,
        // preventing memory leaks or leftover scroll behavior.
        return () => {
            lenis.destroy();
        };
    }, []); // Empty dependency array: Lenis is initialized only once on mount.

    // Render children directly. This component provides no DOM wrapper of its own.
    return <>{children}</>;
}
