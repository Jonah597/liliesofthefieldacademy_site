/**
 * FILE: components/RefreshRedirect.tsx
 *
 * PURPOSE:
 * Ensures the page always begins at the top of the viewport when first loaded
 * or when navigating between pages. Prevents browsers from restoring a
 * previous scroll position unexpectedly.
 *
 * PROBLEM IT SOLVES:
 * By default, some browsers remember where the user was scrolled on a page
 * and restore that position when the user navigates back or refreshes.
 * With a smooth-scroll library (Lenis), this browser behavior can cause the
 * page to appear at a partially scrolled position on load, creating a jarring
 * first impression. This component overrides that behavior.
 *
 * RESPONSIBILITIES:
 * - Disables the browser's built-in scroll restoration on mount
 * - Immediately scrolls to position (0, 0) — the very top of the page
 * - Schedules a second scroll-to-top after 50ms as a safety measure in case
 *   the browser or a third-party script moves the scroll position during initialization
 *
 * USED BY:
 * src/app/layout.tsx — mounted inside the root layout so it runs on every page.
 *
 * RETURNS:
 * null — this component renders nothing in the DOM. It only runs side effects.
 */

"use client";

import { useEffect } from "react";

export default function RefreshRedirect() {
    useEffect(() => {
        // Disable the browser's native scroll restoration.
        // "manual" means the browser will not attempt to restore the previous
        // scroll position when the page loads. We take control of scrolling ourselves.
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Immediately scroll to the top of the page.
        window.scrollTo(0, 0);

        // Schedule a second scroll-to-top 50ms later.
        // Some browsers or third-party scripts (e.g., analytics, fonts) may
        // shift the scroll position slightly during initialization. The delayed
        // second call catches these cases and ensures we truly start at the top.
        const timer = window.setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);

        // Clean up the timer if this component unmounts before the timer fires.
        // This prevents memory leaks in long-running sessions.
        return () => window.clearTimeout(timer);
    }, []); // Empty dependency array: this effect runs only once when the component mounts.

    // This component does not render any visible HTML elements.
    return null;
}