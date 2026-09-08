"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wrapper: window,
            content: document.documentElement,
            prevent: (node) => node.closest('[role="dialog"]') !== null,
        });

        function raf(time: number) {
            const modalIsOpen = document.documentElement.dataset.modalOpen === "true";

            if (modalIsOpen) {
                lenis.stop();
            } else {
                lenis.start();
                lenis.raf(time);
            }
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
