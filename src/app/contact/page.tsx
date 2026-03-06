"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".contact-fade").forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full flex-col flex overflow-hidden bg-white pt-32 pb-24" ref={containerRef}>

            {/* Header */}
            <section className="px-6 mb-24 text-center">
                <div className="max-w-4xl mx-auto contact-fade">
                    <span className="uppercase text-primary font-bold tracking-widest text-sm mb-4 block">We&apos;d Love To Hear From You</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-foreground text-balance">
                        Let&apos;s Start a <span className="text-primary italic font-light">Conversation</span>.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about our programs, want to partner, or just want to say hello, our door is always open. Reach out today.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info & Map */}
                    <div className="flex flex-col gap-12 contact-fade relative">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Email Us</h3>
                                <a href="mailto:hello@liliesacademy.org" className="text-gray-600 hover:text-primary transition-colors hover:underline">hello@liliesacademy.org</a>
                                <p className="text-sm mt-2 text-gray-500">We aim to reply within 24 hours.</p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Call Us</h3>
                                <a href="tel:+233240000000" className="text-gray-600 hover:text-green-600 transition-colors hover:underline">+233 24 000 0000</a>
                                <p className="text-sm mt-2 text-gray-500">Mon-Fri from 8am to 5pm GMT.</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex gap-6 mt-4 z-10 hover:shadow-3xl transition-shadow">
                            <MapPin className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-2">Visit Our Center</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    123 Faith Avenue, Community 2<br />
                                    Greater Accra, Ghana
                                </p>
                                <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors inline-block border-b border-primary pb-1">Get Directions</a>
                            </div>
                        </div>

                        {/* Decorative Map Image Background under address block */}
                        <div className="absolute bottom-0 -left-10 w-[120%] h-[300px] bg-gray-100 rounded-[3rem] -z-10 overflow-hidden opacity-50">
                            <Image src="/images/edited4.jpeg" alt="Location" fill className="object-cover grayscale mix-blend-multiply opacity-20" />
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="contact-fade relative z-10 w-full lg:w-3/4 lg:ml-auto">
                        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-bl-[100px] pointer-events-none -mr-4 -mt-4 mix-blend-multiply" />

                            <h2 className="text-3xl font-heading font-bold mb-8">Send a Message</h2>

                            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg mb-2" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                                    <input type="email" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg mb-2" placeholder="john@example.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Message</label>
                                    <textarea rows={4} className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg resize-none" placeholder="How can we help you today?"></textarea>
                                </div>
                                <button className="mt-8 bg-foreground text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all active:scale-95 shadow-xl flex items-center justify-center gap-3 group">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
