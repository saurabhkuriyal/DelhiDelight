"use client";

import { motion } from "framer-motion";
import {
    Activity,
    Award,
    CheckCircle2,
    ChefHat,
    Coffee,
    CookingPot,
    CupSoda,
    Globe2,
    Pizza,
    Settings,
    Star,
    Store,
    Utensils
} from "lucide-react";
import Image from "next/image";

const brands = [
    { name: "Indian Accent", desc: "Mughlai & North Indian", bg: "bg-[#FF9800]", icon: CookingPot },
    { name: "Ching Chang Town", desc: "Chinese Delicacies", bg: "bg-[#E91E63]", icon: Utensils },
    { name: "Italiano", desc: "Authentic Italian", bg: "bg-[#4ACF50]", icon: Pizza },
    { name: "Mediterranean", desc: "Lebanese & Arabic", bg: "bg-[#1e1b4b]", icon: Globe2 },
    { name: "Continental", desc: "American & Global Dishes", bg: "bg-white", icon: Star },
];

const beverages = ["Shakes", "Smoothies", "Hot Beverages", "Fresh Juices"];

const features = [
    { text: "Multicuisine Food Options", icon: ChefHat },
    { text: "24x7 Kitchen Assistance", icon: Activity },
    { text: "Customized Menu Solutions", icon: Settings },
    { text: "A-Z Solutions for F&B Dept", icon: Store },
    { text: "Highly Skilled & Trained Employees", icon: Award },
    { text: "Best Vendor Management", icon: CheckCircle2 },
];

export default function CafeteriaServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-10 left-[-150px] w-[500px] h-[500px] bg-[#4ACF50]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-[-150px] w-[700px] h-[700px] bg-[#E91E63]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[200px] w-[400px] h-[400px] bg-[#FF9800]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#FF9800] transform rotate-1"
                    >
                        <Store size={16} className="text-[#FF9800]" /> Food & Beverage Court
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none drop-shadow-sm"
                    >
                        University & School <br />
                        <span className="text-[#E91E63] text-shadow-sm">
                            Cafeteria
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-4xl mx-auto font-bold"
                    >
                        We offer a variety of <span className="text-[#4ACF50]">Multi Cuisine</span> food delicacies tailored exactly to your institutional needs.
                    </motion.p>
                </div>

                {/* IMAGE & BRANDS HIGHLIGHT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">

                    {/* Left: Indian Style Cafeteria Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute inset-0 bg-[#FF9800] rounded-[3rem] transform -rotate-2 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />
                        <div className="relative w-full aspect-video md:aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/canteen-1.png"
                                alt="Modern Indian Cafeteria Food Court"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Floating "A Unit Of" Snippet */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b]">
                                <h4 className="text-[#1e1b4b] font-black uppercase text-sm">A Unit of</h4>
                                <p className="text-[#E91E63] font-black text-xl">Megha Caterers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Food Brands Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-2 uppercase tracking-tight">
                            Our <span className="text-[#4ACF50]">Food Court</span>
                        </h2>

                        <div className="flex flex-col gap-4">
                            {brands.map((brand, idx) => {
                                const Icon = brand.icon;
                                const isWhite = brand.bg === "bg-white";
                                const isDark = brand.bg === "bg-[#1e1b4b]";

                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className={`${brand.bg} rounded-2xl border-[4px] border-[#1e1b4b] p-5 flex items-center gap-4 shadow-[6px_6px_0px_0px_#1e1b4b] cursor-pointer group transition-all`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-[2px] border-[#1e1b4b] ${isDark ? "bg-white" : isWhite ? "bg-[#E91E63]" : "bg-white/30"}`}>
                                            <Icon size={24} className={`${isDark ? "text-[#1e1b4b]" : isWhite ? "text-white" : "text-[#1e1b4b]"}`} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-black uppercase tracking-tight ${isWhite ? "text-[#1e1b4b]" : isDark ? "text-white" : "text-[#1e1b4b]"}`}>
                                                {brand.name}
                                            </h3>
                                            <p className={`font-bold text-sm ${isWhite ? "text-[#1e1b4b]/70" : isDark ? "text-white/70" : "text-black/70"}`}>
                                                {brand.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>

                {/* BEVERAGE PARLOUR & WHY CHOOSE US ROW */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 mb-24 items-stretch">

                    {/* Beverages Component */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 bg-[#4ACF50] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-10 shadow-[12px_12px_0px_0px_#1e1b4b] flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] mb-6">
                                <CupSoda size={32} className="text-[#1e1b4b]" />
                            </div>
                            <h2 className="text-4xl font-black text-[#1e1b4b] uppercase tracking-tight mb-8">
                                Beverage <br />
                                <span className="text-white">Parlour</span>
                            </h2>
                            <ul className="space-y-4">
                                {beverages.map((bev, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Coffee className="text-[#1e1b4b] shrink-0" size={24} />
                                        <span className="text-xl font-bold text-white uppercase">{bev}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Why Choose Us Component */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-7 bg-[#1e1b4b] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-12 shadow-[12px_12px_0px_0px_#E91E63] relative overflow-hidden"
                    >
                        {/* Decorative subtle pattern inside */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-10">
                                Why <span className="text-[#FF9800]">Choose Us</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                                {features.map((feature, idx) => {
                                    const FIcon = feature.icon;
                                    return (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:bg-white/10 transition-colors">
                                            <FIcon className="text-[#E91E63] shrink-0 mt-1" size={24} />
                                            <span className="text-white font-bold leading-tight md:text-lg">{feature.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CONTACT DETAILS (SMALL FOOTER CALLOUT) */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-[2rem] border-[4px] border-[#1e1b4b] p-8 shadow-[8px_8px_0px_0px_#1e1b4b] flex flex-col md:flex-row items-center justify-between gap-8 mt-16"
                >
                    <div className="flex-1">
                        <h3 className="text-2xl font-black text-[#1e1b4b] uppercase mb-4">Get In Touch</h3>
                        <div className="flex items-start gap-3 mb-2">
                            <MapPin className="text-[#E91E63] shrink-0" size={20} />
                            <p className="text-[#1e1b4b] font-bold text-sm">
                                B1/619, Janak Puri, New Delhi - 110058 <br/> New Delhi, India
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe2 className="text-[#4ACF50] shrink-0" size={20} />
                            <a href="http://www.delhidelight.in" target="_blank" rel="noopener noreferrer" className="text-[#1e1b4b] font-bold text-sm hover:underline hover:text-[#E91E63] transition-colors">
                                www.delhidelight.in
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#FF9800] p-6 rounded-2xl border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] flex-shrink-0">
                        <h4 className="font-black text-[#1e1b4b] uppercase text-sm mb-3">Direct Contact</h4>
                        <div className="flex items-center gap-2 mb-2">
                            <Phone className="text-[#1e1b4b]" size={18} />
                            <a href="tel:+919873912211" className="font-bold text-white text-lg drop-shadow-sm">+91-9873912211</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="text-[#1e1b4b]" size={18} />
                            <a href="tel:+919871441111" className="font-bold text-white text-lg drop-shadow-sm">+91-9871441111</a>
                        </div>
                    </div>
                </motion.div> */}

            </div>
        </div>
    );
}
