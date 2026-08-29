import type { Metadata } from "next";
import { montserrat, roboto_mono } from "./fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import RefreshRedirect from "@/components/RefreshRedirect";

export const metadata: Metadata = {
  title: "Lilies of the Field Academy | Transforming Lives Through Education",
  description:
    "Lilies of the Field Academy is empowering children from underserved communities with knowledge, opportunity, and hope for a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto_mono.variable} ${montserrat.className}`}>
      <body className="font-sans text-foreground bg-background antialiased flex flex-col min-h-screen">
        <SmoothScroll>
          <RefreshRedirect />
          <Preloader />
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
