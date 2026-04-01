"use client";

import { motion } from "framer-motion";
import {
    Camera,
    ChefHat,
    Diamond,
    Flame,
    Gem,
    HeartHandshake,
    Music,
    Palette,
    PartyPopper,
    Star,
    Store,
    Users,
    Utensils,
    UtensilsCrossed,
    Wine
} from "lucide-react";
import Image from "next/image";
import React from "react";

const weddingServices = [
    {
        title: "Customized Menus",
        desc: "Tailored to your traditions, completely personalized for your family and guests.",
        bg: "bg-[#E91E63]",
        icon: Highlight
    },
    {
        title: "Live Food Counters",
        desc: "Interactive cooking stations serving fresh, piping-hot delicacies instantly.",
        bg: "bg-[#FF9800]",
        icon: Flame
    },
    {
        title: "Elegant Presentation",
        desc: "Exquisite culinary setups featuring traditional brassware and modern plating.",
        bg: "bg-[#4ACF50]",
        icon: Palette
    },
    {
        title: "Multi-Cuisine Mastery",
        desc: "From authentic regional Indian dishes to exotic global cuisines.",
        bg: "bg-[#1e1b4b]",
        icon: ChefHat
    },
];

const setupStyles = [
    {
        title: "Traditional Sit-Down",
        desc: "Authentic regional flavors served directly to the guests with pure royal hospitality.",
        color: "bg-[#FF9800]",
        icon: Users
    },
    {
        title: "Lavish Buffet Spread",
        desc: "A grand presentation filled with diverse multi-cuisine options and stunning table decor.",
        color: "bg-[#4ACF50]",
        icon: UtensilsCrossed
    },
    {
        title: "Live Action Stations",
        desc: "Freshly cooked street food, chaat, and interactive counters for an engaging guest experience.",
        color: "bg-[#E91E63]",
        icon: Store
    }
];

// Reusing a custom icon trick since Highlight wasn't imported directly
function Highlight(props: any) {
    return <Gem {...props} />;
}

export default function WeddingServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-10 left-[-150px] w-[500px] h-[500px] bg-[#E91E63]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-[-150px] w-[700px] h-[700px] bg-[#FF9800]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[200px] w-[400px] h-[400px] bg-[#4ACF50]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#E91E63] transform rotate-1"
                    >
                        <HeartHandshake size={16} className="text-[#E91E63]" /> Making Memories Together
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none drop-shadow-sm"
                    >
                        Grand Wedding <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#E91E63] text-shadow-sm">
                            Catering
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-4xl mx-auto font-bold"
                    >
                        We create unforgettable culinary experiences for your big day, treating every guest to a <span className="text-[#4ACF50]">Royal Feast</span>.
                    </motion.p>
                </div>

                {/* HIGHLIGHT BANNER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#FF9800] w-full rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] p-8 md:p-12 mb-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transform hover:-rotate-1 transition-transform"
                >
                    {/* Decorative pattern */}
                     <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#000000 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
                    
                    <div className="relative z-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Wine className="text-[#1e1b4b]" size={32} />
                            <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] uppercase tracking-tight">
                                A Feast For The Senses
                            </h2>
                        </div>
                        <p className="text-[#1e1b4b]/90 font-bold text-lg md:text-xl leading-relaxed">
                            A wedding is a celebration of love, culture, and family. We ensure the food matches the grandeur of the occasion, offering a jaw-dropping spread that your guests will talk about for years.
                        </p>
                    </div>
                </motion.div>

                {/* MAIN GRID - IMAGE & EXPERTISE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">

                    {/* Left: Indian Wedding Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute inset-0 bg-[#E91E63] rounded-[3rem] transform -rotate-2 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />
                        
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/indian_wedding_catering.png"
                                alt="Luxurious Indian Wedding Catering Spread"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            <div className="absolute top-6 left-6 bg-[#4ACF50] text-[#1e1b4b] border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] rounded-full p-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                <Camera size={28} />
                            </div>
                        </div>
                        
                        {/* Floating Event Fun Element */}
                        <div className="absolute -bottom-6 -right-6 bg-white text-[#1e1b4b] border-[4px] border-[#1e1b4b] shadow-[8px_8px_0px_0px_#E91E63] p-6 rounded-3xl flex items-center gap-4 rotate-[5deg] z-20 hover:rotate-0 transition-transform cursor-default">
                            <div className="bg-[#FF9800] p-3 rounded-xl border-[2px] border-[#1e1b4b]">
                                <Music size={24} className="text-[#1e1b4b]" />
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-xl leading-none block">Flawless</h4>
                                <span className="text-sm font-bold opacity-80 uppercase tracking-tight">Execution</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The 4 Core Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4 uppercase tracking-tight border-b-4 border-[#4ACF50] pb-4 inline-block self-start">
                            Our <span className="text-[#E91E63]">Expertise</span>
                        </h2>

                        {weddingServices.map((service, idx) => {
                            const Icon = service.icon;
                            const isDark = service.bg === "bg-[#1e1b4b]";
                            
                            return (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className={`${service.bg} rounded-3xl border-[4px] border-[#1e1b4b] p-6 shadow-[8px_8px_0px_0px_#1e1b4b] flex items-center gap-6 cursor-pointer transition-all`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-[3px] border-[#1e1b4b] ${isDark ? "bg-white" : "bg-white/90"}`}>
                                        <Icon size={32} className="text-[#1e1b4b]" />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 leading-none ${isDark ? "text-white" : "text-[#1e1b4b]"}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`font-bold text-base leading-snug ${isDark ? "text-white/80" : "text-[#1e1b4b]/80"}`}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>

                {/* SETUP STYLES SECTION (NEW) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e1b4b] uppercase tracking-tight inline-block relative">
                            Our Setup <span className="text-[#4ACF50]">Styles</span>
                            {/* Funky Underline */}
                            <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#FF9800]" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {setupStyles.map((style, idx) => {
                            const Icon = style.icon;
                            // Giving the middle card a slight offset to break the grid monotony
                            const offsetClass = idx === 1 ? "md:-translate-y-8" : "";
                            
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`${style.color} rounded-[2rem] border-[4px] border-[#1e1b4b] p-8 shadow-[8px_8px_0px_0px_#1e1b4b] text-[#1e1b4b] flex flex-col items-center text-center transform hover:scale-105 transition-transform ${offsetClass}`}
                                >
                                    <div className="w-20 h-20 bg-white border-[3px] border-[#1e1b4b] rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#1e1b4b]">
                                        <Icon size={36} className="text-[#1e1b4b]" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-3">{style.title}</h3>
                                    <p className="font-bold text-[#1e1b4b]/80 text-lg leading-snug">
                                        {style.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* TRUST BANNER (NEW) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1e1b4b] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[16px_16px_0px_0px_#E91E63] p-10 md:p-16 relative overflow-hidden"
                >
                    {/* Decorative subtle pattern inside */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
                    
                    <div className="relative z-10 flex flex-col items-center mb-12 text-center">
                        <span className="text-[#FF9800] font-black uppercase tracking-[0.2em] mb-4 text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">The Megha Difference</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            Why Couples <span className="text-[#4ACF50]">Trust Us</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
                        <div className="bg-white/5 border-2 border-[#E91E63]/30 rounded-2xl p-6 flex gap-6 items-start hover:bg-white/10 hover:border-[#E91E63] transition-colors">
                            <div className="bg-[#E91E63] p-3 rounded-xl shrink-0 border-[2px] border-white/20">
                                <Star size={28} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-xl mb-1">Premium Ingredients</h4>
                                <p className="text-white/70 font-bold leading-snug">Authentic spices and superior quality produce sourced fresh.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border-2 border-[#FF9800]/30 rounded-2xl p-6 flex gap-6 items-start hover:bg-white/10 hover:border-[#FF9800] transition-colors">
                            <div className="bg-[#FF9800] p-3 rounded-xl shrink-0 border-[2px] border-white/20">
                                <PartyPopper size={28} className="text-[#1e1b4b]" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-xl mb-1">Seamless Execution</h4>
                                <p className="text-white/70 font-bold leading-snug">Zero hassle on your big day with our heavily trained event staff.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border-2 border-[#4ACF50]/30 rounded-2xl p-6 flex gap-6 items-start hover:bg-white/10 hover:border-[#4ACF50] transition-colors">
                            <div className="bg-[#4ACF50] p-3 rounded-xl shrink-0 border-[2px] border-white/20">
                                <Diamond size={28} className="text-[#1e1b4b]" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-xl mb-1">Dedicated Manager</h4>
                                <p className="text-white/70 font-bold leading-snug">A single point of contact to plan, taste, and execute your vision.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border-2 border-white/30 rounded-2xl p-6 flex gap-6 items-start hover:bg-white/10 hover:border-white transition-colors">
                            <div className="bg-white p-3 rounded-xl shrink-0 border-[2px] border-white/20">
                                <Utensils size={28} className="text-[#1e1b4b]" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-xl mb-1">Exquisite Desserts</h4>
                                <p className="text-white/70 font-bold leading-snug">Specialized Mithai craftsmen blending modern and traditional sweets.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
