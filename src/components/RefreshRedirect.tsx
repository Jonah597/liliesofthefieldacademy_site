"use client";

import { useEffect } from "react";

export default function RefreshRedirect() {
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);

        const timer = window.setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);

        return () => window.clearTimeout(timer);
    }, []);

    return null;
}