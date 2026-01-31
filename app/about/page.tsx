"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    ChefHat,
    Heart,
    Leaf,
    Star,
    Users,
    UtensilsCrossed
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Stats Component
const AnimatedStat = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += value / steps;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2 font-mono">
                {count}{suffix}
            </div>
            <div className="text-zinc-400 font-medium uppercase tracking-widest text-sm">
                {label}
            </div>
        </div>
    );
};

// Value Card Component
const ValueCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-orange-500/30 transition-all group"
        >
            <div className="bg-zinc-800 p-4 rounded-2xl w-fit mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <div ref={containerRef} className="bg-zinc-950 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/70 to-zinc-950" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
                </div>

                {/* Hero Content */}
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="relative z-10 container mx-auto px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            Since 1998
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight"
                    >
                        CRAFTING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                            CULINARY ART
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-zinc-300 max-w-2xl mx-auto font-light"
                    >
                        More than just food, we deliver an exquisite experience of flavors, tradition, and royal hospitality giving you Delhi Delight.
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-zinc-500 mx-auto mb-2" />
                    <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                </motion.div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="py-24 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">Our Story</h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-none">
                                From Humble Beginnings to <span className="text-zinc-600 font-serif italic">Masters of Taste</span>
                            </h3>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    It started with a simple passion: to bring the authentic, rich flavors of Delhi's streets to gala events. What began in a small kitchen has grown into <strong className="text-white">Delhi Delight Caterers</strong>, a name synonymous with luxury banquet execution.
                                </p>
                                <p>
                                    We believe that food is the heart of every celebration. Our chefs don't just cook; they curate. Every spice is hand-picked, every menu is personalized, and every plate is a work of art designed to leave a lasting impression on your guests.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 overflow-hidden">
                                            {/* Placeholder for team avatars */}
                                            <Users size={16} />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-white font-bold">50+ Expert Chefs</span>
                                    <span className="text-xs text-zinc-500">Dedicated to perfection</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/20 border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                {/* Placeholder for chef/kitchen image */}
                                <div className="absolute inset-0 bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />

                                <div className="absolute bottom-0 left-0 p-8 z-20">
                                    <p className="text-white font-serif text-2xl italic">"We cook with soul, serve with love."</p>
                                    <p className="text-orange-400 mt-2 font-bold uppercase text-sm tracking-widest">— Head Chef</p>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-white text-zinc-950 p-6 rounded-full shadow-xl hidden md:block"
                            >
                                <UtensilsCrossed size={32} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-24 bg-zinc-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            Our Core <span className="text-orange-500">Values</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400 max-w-2xl mx-auto"
                        >
                            The pillars that support our promise of excellence.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard
                            icon={Leaf}
                            title="Fresh & Organic"
                            description="We source only the freshest, locally grown ingredients to ensure health and taste."
                            delay={0.1}
                        />
                        <ValueCard
                            icon={Star}
                            title="Premium Quality"
                            description="No compromises. From saffron strands to basmati rice, we use the finest grades."
                            delay={0.2}
                        />
                        <ValueCard
                            icon={ChefHat}
                            title="Master Chefs"
                            description="Our culinary team executes traditional recipes with modern precision and flair."
                            delay={0.3}
                        />
                        <ValueCard
                            icon={Heart}
                            title="Served with Love"
                            description="Hospitality is in our DNA. We treat your guests like our own family."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-24 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <AnimatedStat value={25} suffix="+" label="Years of Legacy" />
                        <AnimatedStat value={1500} suffix="+" label="Weddings Direct" />
                        <AnimatedStat value={500} suffix="k+" label="Happy Guests" />
                        <AnimatedStat value={45} suffix="" label="Awards Won" />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-10" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity" />

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Ready to Taste the <br />
                            <span className="text-orange-500">Difference?</span>
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                            From intimate gatherings to royal weddings, let us create a menu that your guests will talk about for years.
                        </p>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-600/30 flex items-center gap-3 mx-auto"
                            >
                                Get a Quote <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
