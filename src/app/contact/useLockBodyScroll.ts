import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect only runs on the client. To prevent SSR warnings, we use useEffect on the server.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useLockBodyScroll(isLocked: boolean): void {
    useIsomorphicLayoutEffect(() => {
        if (!isLocked) return;

        // Get scrollbar width to prevent layout shift when overflow hidden is applied
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        // Save current scroll position
        const scrollY = window.scrollY;
        
        // Save original styles to restore them later
        const originalStyle = window.getComputedStyle(document.body);
        const originalOverflow = originalStyle.overflow;
        const originalPaddingRight = originalStyle.paddingRight;
        const originalPosition = originalStyle.position;
        const originalTop = originalStyle.top;
        const originalWidth = originalStyle.width;
        
        // Apply locked styles
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${parseInt(originalPaddingRight || '0') + scrollbarWidth}px`;
        
        // Prevent body scroll on iOS by setting position fixed
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
             // Restore original styles
             document.body.style.overflow = originalOverflow !== 'visible' ? originalOverflow : '';
             document.body.style.paddingRight = originalPaddingRight;
             
             document.body.style.position = originalPosition !== 'static' ? originalPosition : '';
             document.body.style.top = originalTop !== 'auto' ? originalTop : '';
             document.body.style.width = originalWidth !== 'auto' ? originalWidth : '';
             
             // Restore scroll position
             window.scrollTo(0, scrollY);
        };
    }, [isLocked]);
}