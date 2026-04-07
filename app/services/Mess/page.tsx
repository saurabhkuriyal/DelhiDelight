"use client";

import { motion } from "framer-motion";
import {
    Apple,
    Award,
    CalendarCheck,
    CheckCircle2,
    ChefHat,
    Coffee,
    HeartPulse,
    Leaf,
    ShieldCheck,
    Star,
    Sun,
    Sunrise,
    Users,
    Utensils
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const meals = [
    { name: "Buffet Breakfast", icon: Sunrise, bg: "bg-[#FF9800]" },
    { name: "Buffet Lunch", icon: Sun, bg: "bg-[#4ACF50]" },
    { name: "Evening snacks with Beverage", icon: Coffee, bg: "bg-[#E91E63]" },
    { name: "Buffet Dinner", icon: Utensils, bg: "bg-[#1e1b4b]" },
];

const staffFeatures = [
    { text: "Staff trained in safe hygiene practices & catering skills", icon: ShieldCheck },
    { text: "Kitchen staff will be in Proper uniform with safety measures", icon: ChefHat },
    { text: "Supervision in food distribution to students", icon: Users },
    { text: "Highly Professional skilled Team", icon: Award },
];

const highlights = [
    { title: "Nutrition First", desc: "Dietitian-approved balanced meal plans", icon: HeartPulse, color: "bg-[#E91E63]" },
    { title: "FSSAI Certified", desc: "Strict adherence to food safety norms", icon: Star, color: "bg-[#FF9800]" },
    { title: "Fresh Sourced", desc: "Farm-fresh organic ingredients daily", icon: Leaf, color: "bg-[#4ACF50]" },
];

export default function MessServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-[#FF9800]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 left-[-100px] w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10px] right-[100px] w-[500px] h-[500px] bg-[#4ACF50]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#4ACF50] transform -rotate-2"
                    >
                        <Apple size={16} className="text-[#E91E63]" /> Premium Campus Dining
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none"
                    >
                        Hostel Mess <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#E91E63] text-shadow-sm">
                            Services
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-3xl mx-auto font-bold mb-10"
                    >
                        We offer a variety of multi-cuisine food services ensuring students get the <span className="text-[#E91E63]">nutrition they need</span> and the <span className="text-[#4ACF50]">taste they crave</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Link href="/contact">
                            <button className="bg-[#1e1b4b] text-white px-8 py-4 rounded-full font-black uppercase tracking-wide border-[3px] border-[#1e1b4b] shadow-[6px_6px_0px_0px_#FF9800] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#FF9800] transition-all text-lg flex items-center gap-2">
                                Partner With Us <CalendarCheck size={20} />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* HIGHLIGHTS STRIP (NEW CREATIVE CONTENT) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${highlight.color} rounded-3xl border-[4px] border-[#1e1b4b] p-8 shadow-[8px_8px_0px_0px_#1e1b4b] text-white flex flex-col items-start transform hover:-rotate-1 transition-transform`}
                        >
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <highlight.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-2">{highlight.title}</h3>
                            <p className="font-bold text-white/90 text-lg leading-snug">{highlight.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* THE MEALS SECTION (FROM IMAGE, ELEVATED) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* CHEF IMAGE CARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative lg:order-2"
                    >
                        <div className="absolute inset-0 bg-[#E91E63] rounded-[3rem] transform rotate-3 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />
                        <div className="relative w-full aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/Hostel_mess.png"
                                alt="Professional Chef Preparing Gourmet Salad"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1b4b] via-[#1e1b4b]/80 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <p className="text-white font-black text-2xl drop-shadow-md flex items-center gap-2">
                                    <Star fill="#FF9800" className="text-[#FF9800]" /> 5-Star Quality Standard
                                </p>
                            </div>
                        </div>

                        {/* Funky floating badge */}
                        <div className="absolute -top-8 -left-8 bg-[#4ACF50] text-[#1e1b4b] border-[4px] border-[#1e1b4b] shadow-[6px_6px_0px_0px_#1e1b4b] w-32 h-32 rounded-full flex flex-col items-center justify-center font-black rotate-[-15deg] z-20 hover:rotate-0 transition-transform cursor-default">
                            <span className="text-3xl leading-none block">10k+</span>
                            <span className="text-sm uppercase text-center leading-tight mt-1">Meals<br />Daily</span>
                        </div>
                    </motion.div>

                    {/* MEALS LIST */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 lg:order-1"
                    >
                        <div className="mb-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] mb-4 uppercase tracking-tight">
                                Daily <span className="text-[#FF9800]">Services</span>
                            </h2>
                            <p className="text-[#1e1b4b]/70 font-bold text-xl">
                                We provide round-the-clock culinary support with specialized buffets.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {meals.map((meal, index) => {
                                const Icon = meal.icon;
                                const isDark = meal.bg === "bg-[#1e1b4b]";
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className={`${meal.bg} rounded-2xl border-[4px] border-[#1e1b4b] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[6px_6px_0px_0px_#1e1b4b] cursor-pointer group`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 ${isDark ? "bg-white text-[#1e1b4b]" : "bg-[#1e1b4b] text-white"} rounded-full flex items-center justify-center shrink-0 border-2 border-transparent group-hover:border-current transition-colors`}>
                                                <Icon size={28} />
                                            </div>
                                            <h3 className={`text-2xl font-black uppercase ${isDark ? "text-white" : "text-[#1e1b4b]"}`}>
                                                {meal.name}
                                            </h3>
                                        </div>
                                        <CheckCircle2 className={`${isDark ? "text-[#4ACF50]" : "text-white"} shrink-0 hidden sm:block`} size={32} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* STAFF MANAGEMENT (FROM IMAGE, ELEVATED) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1e1b4b] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[16px_16px_0px_0px_#E91E63] p-10 md:p-16 relative overflow-hidden"
                >
                    {/* Decorative subtle pattern inside */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />

                    <div className="relative z-10 flex flex-col items-center mb-12 text-center">
                        <span className="text-[#4ACF50] font-black uppercase tracking-[0.2em] mb-4 text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">Operational Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            Staff <span className="text-[#FF9800]">Management</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
                        {staffFeatures.map((feature, index) => {
                            const FIcon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 border-2 border-[#E91E63]/30 rounded-2xl p-6 flex gap-6 items-start hover:bg-white/10 hover:border-[#E91E63] transition-colors"
                                >
                                    <div className="bg-[#E91E63] p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] shrink-0">
                                        <FIcon size={28} className="text-white" />
                                    </div>
                                    <p className="text-white font-bold text-lg md:text-xl leading-snug pt-1">
                                        {feature.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* BOTTOM CTA */}
                {/* <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-32 text-center"
        >
            <div className="bg-[#FF9800] border-[4px] border-[#1e1b4b] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[12px_12px_0px_0px_#1e1b4b] max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-6 drop-shadow-sm uppercase leading-tight">
                  Ready to upgrade <br /> your campus food?
                </h2>
                <p className="text-[#1e1b4b] text-xl font-bold max-w-xl mx-auto mb-10">
                  Join dozens of leading universities trusting us with their daily catering needs. We'll handle the kitchen, you handle the campus.
                </p>
                <Link href="/contact" className="relative z-10 inline-block">
                    <button className="bg-white text-[#1e1b4b] px-10 py-5 rounded-full font-black shadow-[6px_6px_0px_0px_#1e1b4b] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1e1b4b] transition-all border-[3px] border-[#1e1b4b] text-xl uppercase tracking-wider flex items-center justify-center gap-3">
                        Request a Proposal <Utensils size={24} />
                    </button>
                </Link>
            </div>
        </motion.div> */}

            </div>
        </div>
    );
}
