"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    ChefHat,
    HeartPulse,
    Lightbulb,
    Smile,
    Sparkles,
    Users
} from "lucide-react";
import Image from "next/image";

const servicesList = [
    {
        title: "Employee Satisfaction",
        desc: "Boosting workplace morale with delicious, fulfilling dining experiences.",
        bg: "bg-[#E91E63]",
        icon: Smile
    },
    {
        title: "Nutritious Meals",
        desc: "Cooking nutritious meals for a better, healthy life and focused minds.",
        bg: "bg-[#4ACF50]",
        icon: HeartPulse
    },
    {
        title: "Innovative Menus",
        desc: "Customized & innovative food menus according to clients' preferences.",
        bg: "bg-[#FF9800]",
        icon: Lightbulb
    },
    {
        title: "Professional Chefs",
        desc: "Highly professional Multi-Cuisine chefs crafting every dish with care.",
        bg: "bg-[#1e1b4b]",
        icon: ChefHat
    },
];

export default function CorporateServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-20 left-[-150px] w-[600px] h-[600px] bg-[#FF9800]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] bg-[#E91E63]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#1e1b4b] transform -rotate-1"
                    >
                        <Briefcase size={16} className="text-[#1e1b4b]" /> Enterprise Dining
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none drop-shadow-sm"
                    >
                        Corporate <br />
                        <span className="text-[#4ACF50] text-shadow-sm">
                            Catering
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-4xl mx-auto font-bold"
                    >
                        Fueling your workforce with <span className="text-[#E91E63]">innovative</span> menus and <span className="text-[#FF9800]">nutritious</span> daily meals.
                    </motion.p>
                </div>

                {/* HIGHLIGHT BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1e1b4b] w-full rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#E91E63] p-8 md:p-12 mb-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />

                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="text-[#FF9800]" size={28} />
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                                Our <span className="text-[#FF9800]">Service</span>
                            </h2>
                        </div>
                        <p className="text-white/80 font-bold text-lg md:text-xl leading-relaxed">
                            We believe that a well-fed team is a happy and productive team. Our corporate catering solutions are designed entirely around delivering maximum employee workplace satisfaction through deeply customized culinary excellence.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <div className="w-32 h-32 bg-[#4ACF50] rounded-full border-[4px] border-white shadow-[6px_6px_0px_0px_#ffffff] flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                            <Users size={56} className="text-white" />
                        </div>
                    </div>
                </motion.div>

                {/* MAIN GRID - IMAGE & SERVICES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">

                    {/* Left: Indian Corporate Chef Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute inset-0 bg-[#FF9800] rounded-[3rem] transform -rotate-3 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />

                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/Corporate-1.png"
                                alt="Professional Indian Corporate Catering Chef"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Floating Fun Element */}
                        <div className="absolute -bottom-8 -right-8 bg-[#E91E63] text-white border-[4px] border-[#1e1b4b] shadow-[6px_6px_0px_0px_#1e1b4b] w-40 h-40 rounded-full flex flex-col items-center justify-center font-black rotate-[15deg] z-20 hover:rotate-0 transition-transform cursor-default">
                            <span className="text-4xl leading-none block">100%</span>
                            <span className="text-sm uppercase text-center leading-tight mt-1">Satisfaction<br />Guaranteed</span>
                        </div>
                    </motion.div>

                    {/* Right: The 4 Core Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 order-1 lg:order-2"
                    >
                        {servicesList.map((service, idx) => {
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

            </div>
        </div>
    );
}
