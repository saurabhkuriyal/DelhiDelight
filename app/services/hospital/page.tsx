"use client";

import { motion } from "framer-motion";
import {
    ActivitySquare,
    Bed,
    Cross,
    HeartPulse,
    Stethoscope,
    Users,
    Users2,
    UtensilsCrossed
} from "lucide-react";
import Image from "next/image";

const servicesList = [
    { name: "Patient Food", desc: "Dietitian prescribed & meticulously prepared", bg: "bg-[#FF9800]", icon: Bed },
    { name: "Attendant Food", desc: "Nourishing meals for patient companions", bg: "bg-[#4ACF50]", icon: Users },
    { name: "Hospital Staff Food", desc: "Energizing daily catering for hospital teams", bg: "bg-[#E91E63]", icon: ActivitySquare },
    { name: "Doctors Food", desc: "Premium quality focused nutrition", bg: "bg-[#1e1b4b]", icon: Stethoscope },
];

export default function HospitalServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-[#E91E63]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-[-150px] w-[700px] h-[700px] bg-[#4ACF50]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#E91E63] transform rotate-2"
                    >
                        <HeartPulse size={16} className="text-[#E91E63]" /> Compassionate Catering
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none drop-shadow-sm"
                    >
                        Hospital Catering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#E91E63] text-shadow-sm">
                            Services
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-4xl mx-auto font-bold"
                    >
                        Providing hygienic, specialized, and nutritious culinary solutions for the <span className="text-[#4ACF50]">Healthcare Sector</span>.
                    </motion.p>
                </div>

                {/* IMAGE & SERVICES HIGHLIGHT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

                    {/* Left: Indian Hospital Setup Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute inset-0 bg-[#E91E63] rounded-[3rem] transform -rotate-3 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />
                        <div className="relative w-full aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/Hospital-1.png"
                                alt="Modern Indian Hospital Catering Chef"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating "Health Checked" Snippet */}
                            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] flex items-center gap-3 transform group-hover:-translate-y-2 transition-transform">
                                <div className="bg-[#4ACF50] rounded-full p-2">
                                    <Cross size={20} className="text-white" />
                                </div>
                                <h4 className="text-[#1e1b4b] font-black uppercase tracking-tight leading-none text-sm">Hygienic <br /> <span className="text-[#FF9800]">Verified</span></h4>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Our Services Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e1b4b] uppercase tracking-tight flex items-center gap-4 border-b-4 border-[#1e1b4b] pb-4 inline-block self-start">
                            Our <span className="text-[#FF9800]">Services</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {servicesList.map((service, idx) => {
                                const Icon = service.icon;
                                const isDark = service.bg === "bg-[#1e1b4b]";

                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className={`${service.bg} rounded-3xl border-[4px] border-[#1e1b4b] p-6 shadow-[8px_8px_0px_0px_#1e1b4b] flex flex-col gap-4 transition-all`}
                                    >
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-[#1e1b4b] ${isDark ? "bg-white" : "bg-white/90"}`}>
                                            <Icon size={28} className="text-[#1e1b4b]" />
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 leading-none ${isDark ? "text-white" : "text-[#1e1b4b]"}`}>
                                                {service.name}
                                            </h3>
                                            <p className={`font-bold text-sm ${isDark ? "text-white/80" : "text-[#1e1b4b]/80"}`}>
                                                {service.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>

                {/* EXTRA FEATURES BANNERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20">

                    {/* Quality Team Building */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1e1b4b] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-12 shadow-[12px_12px_0px_0px_#4ACF50] relative overflow-hidden flex flex-col items-center text-center justify-center transform hover:rotate-1 transition-transform"
                    >
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "20px 20px" }} />

                        <div className="w-20 h-20 bg-[#4ACF50] rounded-2xl flex items-center justify-center border-[3px] border-white shadow-[4px_4px_0px_0px_#ffffff] mb-6 relative z-10 rotate-3">
                            <Users2 size={40} className="text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight relative z-10">
                            Quality Team <br />
                            <span className="text-[#4ACF50]">Building Activities</span>
                        </h2>
                    </motion.div>

                    {/* Medical Facilities Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#FF9800] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-12 shadow-[12px_12px_0px_0px_#E91E63] relative overflow-hidden flex flex-col items-center text-center justify-center transform hover:-rotate-1 transition-transform"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[60px] opacity-40 pointer-events-none" />

                        <div className="w-20 h-20 bg-[#E91E63] rounded-full flex items-center justify-center border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] mb-6 relative z-10">
                            <UtensilsCrossed size={40} className="text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-[#1e1b4b] uppercase tracking-tight relative z-10 drop-shadow-sm">
                            Support For <br />
                            <span className="text-white">Medical Facilities</span>
                        </h2>
                    </motion.div>

                </div>

            </div>
        </div>
    );
}
