/**
 * FILE: app/contact/useLockBodyScroll.ts
 *
 * PURPOSE:
 * A custom React hook that prevents the page body from scrolling while a
 * modal, drawer, or overlay is open. When `isLocked` is true, the background
 * content cannot be scrolled by the user.
 *
 * RESPONSIBILITIES:
 * - Captures and preserves the current scroll position before locking
 * - Applies CSS styles to the body element that prevent scrolling
 * - Adds padding to compensate for the scrollbar disappearing, preventing
 *   a layout shift (content jumping) when the scrollbar is hidden
 * - Fixes body position on iOS Safari, where `overflow: hidden` alone
 *   does not prevent scroll on some device/browser combinations
 * - Restores all original styles and scroll position when the lock is released
 *
 * HOW IT WORKS:
 * When `isLocked` becomes true:
 * 1. The current scroll position is saved
 * 2. `overflow: hidden` is applied to the body to block scrolling
 * 3. Padding-right is added equal to the scrollbar width (prevents layout shift)
 * 4. `position: fixed` and `top: -scrollY` are applied to prevent iOS scroll
 * When `isLocked` becomes false (effect cleanup runs):
 * 1. All original CSS values are restored to the body
 * 2. The window scrolls back to the saved position
 *
 * USED BY:
 * - src/components/Navbar.tsx: locks scroll when the mobile menu is open
 *
 * @param isLocked - When true, body scrolling is disabled. When false, it is enabled.
 */

import { useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints.
 * This is important for scroll locking because it prevents a brief flash where the
 * scrollbar disappears without the padding compensation already being in place.
 *
 * However, `useLayoutEffect` produces a React warning when used during server-side
 * rendering (SSR), because the DOM does not exist on the server. This line chooses
 * `useLayoutEffect` on the client and falls back to `useEffect` on the server.
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Locks or unlocks page body scrolling based on the `isLocked` boolean.
 *
 * Call this hook in any component that opens a full-screen overlay or modal.
 * Pass the open/closed state of the modal as `isLocked`.
 *
 * @param isLocked - true to disable body scrolling, false to allow it
 *
 * @returns void — this hook has no return value. It operates via side effects.
 */
export function useLockBodyScroll(isLocked: boolean): void {
    useIsomorphicLayoutEffect(() => {
        // If not locked, do nothing. The cleanup from the previous lock will
        // have already restored the original scroll behavior.
        if (!isLocked) return;

        // Measure the scrollbar width before hiding it.
        // When overflow:hidden is applied, the scrollbar disappears, which
        // causes the layout to shift right by the scrollbar's width.
        // Adding this width as padding-right compensates for that shift.
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Save the current vertical scroll position so we can restore it later.
        const scrollY = window.scrollY;

        // Save all original body styles so we can restore them exactly.
        const originalStyle = window.getComputedStyle(document.body);
        const originalOverflow = originalStyle.overflow;
        const originalPaddingRight = originalStyle.paddingRight;
        const originalPosition = originalStyle.position;
        const originalTop = originalStyle.top;
        const originalWidth = originalStyle.width;

        // Lock the body:
        // overflow: hidden — prevents scrolling via the scrollbar and keyboard
        document.body.style.overflow = 'hidden';

        // Compensate for the scrollbar disappearing so the layout doesn't shift
        document.body.style.paddingRight = `${parseInt(originalPaddingRight || '0') + scrollbarWidth}px`;

        // iOS Safari fix: position: fixed with a negative top offset prevents
        // the page from being scrolled by touch gestures on some Apple devices
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
            // Restore all original body styles.
            // The conditional checks prevent accidentally resetting values that
            // may have been "static" or "auto" (CSS defaults) and were not
            // originally set inline — clearing them prevents side effects.
            document.body.style.overflow = originalOverflow !== 'visible' ? originalOverflow : '';
            document.body.style.paddingRight = originalPaddingRight;

            document.body.style.position = originalPosition !== 'static' ? originalPosition : '';
            document.body.style.top = originalTop !== 'auto' ? originalTop : '';
            document.body.style.width = originalWidth !== 'auto' ? originalWidth : '';

            // Restore the scroll position that was saved before locking.
            // Without this, the page would appear at position 0 after the modal closes.
            window.scrollTo(0, scrollY);
        };
    }, [isLocked]); // Re-run this effect whenever isLocked changes
}