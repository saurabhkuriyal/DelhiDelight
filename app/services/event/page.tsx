"use client";

import { motion } from "framer-motion";
import {
    ChefHat,
    Flame,
    Gift,
    GlassWater,
    Home,
    IceCream,
    Music,
    PartyPopper,
    Sparkles,
    Star
} from "lucide-react";
import Image from "next/image";

const partyOccasions = [
    {
        title: "Birthday Bashes",
        desc: "Lively, themed food counters with both adult-favorites and kid-approved bites.",
        bg: "bg-[#E91E63]",
        icon: Gift
    },
    {
        title: "Pre-Wedding Functions",
        desc: "Haldi, Mehndi, and Sangeet specials featuring vibrant live food stalls.",
        bg: "bg-[#FF9800]",
        icon: Music
    },
    {
        title: "Anniversary Galas",
        desc: "Elegant plated dinners and premium buffets to celebrate your milestones.",
        bg: "bg-[#1e1b4b]",
        icon: GlassWater
    },
    {
        title: "Intimate House Parties",
        desc: "Compact setups and hassle-free gourmet catering right in your living room.",
        bg: "bg-[#4ACF50]",
        icon: Home
    },
];

export default function PrivateEventsPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Blobs (Theme Consistency) */}
            <div className="absolute top-0 right-[-100px] w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] bg-[#FF9800]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-50px] right-[200px] w-[400px] h-[400px] bg-[#4ACF50]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="flex flex-col items-center text-center mt-8 mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-2 px-6 rounded-full bg-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[6px_6px_0px_0px_#4ACF50] transform rotate-2"
                    >
                        <PartyPopper size={16} className="text-[#E91E63]" /> Celebrate With Flavour
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-[#1e1b4b] tracking-tighter mb-6 uppercase leading-none drop-shadow-sm"
                    >
                        Private Parties <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#FF9800] text-shadow-sm">
                            & Events
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1e1b4b]/80 text-xl md:text-2xl max-w-4xl mx-auto font-bold"
                    >
                        Turning your intimate gatherings and grand celebrations into <span className="text-[#FF9800]">spectacular culinary memories</span>.
                    </motion.p>
                </div>

                {/* HIGHLIGHT BANNER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#4ACF50] w-full rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] p-8 md:p-12 mb-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform"
                >
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />

                    <div className="relative z-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Star className="text-[#1e1b4b]" size={36} fill="#FF9800" />
                            <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] uppercase tracking-tight">
                                Hassle-Free Hosting
                            </h2>
                        </div>
                        <p className="text-[#1e1b4b]/95 font-bold text-lg md:text-xl leading-relaxed">
                            Whether it's a cozy dinner for 20 or a lively bash for 200, we handle the menu, preparation, and presentation so you can put down the spatula and actually enjoy your own party.
                        </p>
                    </div>
                </motion.div>

                {/* MAIN GRID - IMAGE & OCCASIONS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">

                    {/* Left: Indian Private Event Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative lg:order-2"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute inset-0 bg-[#FF9800] rounded-[3rem] transform rotate-3 scale-105 border-[4px] border-[#1e1b4b] pointer-events-none" />

                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#1e1b4b] overflow-hidden group bg-white">
                            <Image
                                src="/Private-1.png"
                                alt="Lively Indian Private Party Catering with Live Chef"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute bottom-6 right-6 bg-[#E91E63] text-white border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] rounded-full p-4 flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                                <Sparkles size={28} />
                            </div>
                        </div>

                        {/* Floating Event Fun Element */}
                        <div className="absolute -top-6 -left-6 bg-white text-[#1e1b4b] border-[4px] border-[#1e1b4b] shadow-[8px_8px_0px_0px_#4ACF50] p-6 rounded-3xl flex items-center gap-4 -rotate-[5deg] z-20 hover:rotate-0 transition-transform cursor-default">
                            <div className="bg-[#1e1b4b] p-3 rounded-xl border-[2px] border-white/20">
                                <ChefHat size={24} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-xl leading-none block text-[#E91E63]">Bespoke</h4>
                                <span className="text-sm font-bold opacity-80 uppercase tracking-tight text-[#1e1b4b]">Menus</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The 4 Core Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4 uppercase tracking-tight border-b-4 border-[#1e1b4b] pb-4 inline-block self-start">
                            Occasions We <span className="text-[#FF9800]">Cater To</span>
                        </h2>

                        {partyOccasions.map((occasion, idx) => {
                            const Icon = occasion.icon;
                            const isDark = occasion.bg === "bg-[#1e1b4b]";

                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className={`${occasion.bg} rounded-3xl border-[4px] border-[#1e1b4b] p-6 shadow-[8px_8px_0px_0px_#1e1b4b] flex items-center gap-6 cursor-pointer transition-all`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-[3px] border-[#1e1b4b] ${isDark ? "bg-white" : "bg-white/90"}`}>
                                        <Icon size={32} className="text-[#1e1b4b]" />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 leading-none ${isDark ? "text-white" : "text-[#1e1b4b]"}`}>
                                            {occasion.title}
                                        </h3>
                                        <p className={`font-bold text-base leading-snug ${isDark ? "text-white/80" : "text-[#1e1b4b]/80"}`}>
                                            {occasion.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>

                {/* EXTRA HIGHLIGHTS (EXPERIENCES) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20 mb-10">

                    {/* Live Tandoor & Chaat Counters */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1e1b4b] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-12 shadow-[12px_12px_0px_0px_#E91E63] relative overflow-hidden flex flex-col items-start justify-center transform hover:rotate-1 transition-transform"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#E91E63] rounded-full blur-[80px] opacity-40 pointer-events-none" />

                        <div className="w-16 h-16 bg-[#FF9800] rounded-2xl flex items-center justify-center border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] mb-6 relative z-10">
                            <Flame size={32} className="text-[#1e1b4b]" />
                        </div>

                        <h2 className="text-3xl font-black text-white uppercase tracking-tight relative z-10 mb-4">
                            Live Tandoor & <br /><span className="text-[#FF9800]">Chaat Counters</span>
                        </h2>
                        <p className="text-white/80 font-bold text-lg relative z-10">
                            Bring the vibrant streets of India to your backyard with freshly grilled kebabs and interactive chaat stations right at the party.
                        </p>
                    </motion.div>

                    {/* Signature Dessert Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#E91E63] rounded-[3rem] border-[4px] border-[#1e1b4b] p-8 md:p-12 shadow-[12px_12px_0px_0px_#FF9800] relative overflow-hidden flex flex-col items-start justify-center transform hover:-rotate-1 transition-transform"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-[80px] opacity-20 pointer-events-none" />

                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[3px] border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] mb-6 relative z-10">
                            <IceCream size={32} className="text-[#1e1b4b]" />
                        </div>

                        <h2 className="text-3xl font-black text-[#1e1b4b] uppercase tracking-tight relative z-10 drop-shadow-sm mb-4">
                            Signature <br /><span className="text-white">Dessert Bar</span>
                        </h2>
                        <p className="text-white font-bold text-lg relative z-10">
                            End the night on a sweet note! Custom cakes, traditional mithai, mouth-watering puddings, and a stunning dessert presentation.
                        </p>
                    </motion.div>

                </div>

            </div>
        </div>
    );
}
