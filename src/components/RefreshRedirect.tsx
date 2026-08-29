"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RefreshRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Tell the browser not to restore previous scroll position on reload
        if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Force to top immediately
        window.scrollTo(0, 0);

        // Handle any edge cases with Lenis smooth scroll trying to lock positions shortly after mount
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);

        // If the path is not home, redirect to home on initial load/refresh
        if (window.location.pathname !== "/") {
            router.push("/");
        }

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
