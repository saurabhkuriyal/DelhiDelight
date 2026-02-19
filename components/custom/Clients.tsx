"use client";

import { motion } from "framer-motion";

const clients = [
    {
        name: "City University",
        logo: "/ITS_Muradnagar.jpg",
        color: "bg-emerald-100"
    },
    {
        name: "Tech Institute of Delhi",
        logo: "https://placehold.co/200x200/ffffff/E91E63?text=Tech+Inst",
        color: "bg-pink-100"
    },
    {
        name: "National Medical College",
        logo: "https://placehold.co/200x200/ffffff/4ACF50?text=Med+Col",
        color: "bg-green-100"
    },
    {
        name: "Arts & Design Academy",
        logo: "https://placehold.co/200x200/ffffff/FF9800?text=Arts+Acad",
        color: "bg-orange-100"
    },
    {
        name: "Global Business School",
        logo: "https://placehold.co/200x200/ffffff/6366f1?text=Bus+Sch",
        color: "bg-indigo-100"
    },
    {
        name: "Institute of Law",
        logo: "https://placehold.co/200x200/ffffff/8b5cf6?text=Law+Inst",
        color: "bg-violet-100"
    },
    {
        name: "Science Research Center",
        logo: "https://placehold.co/200x200/ffffff/06b6d4?text=Sci+Res",
        color: "bg-cyan-100"
    },
    {
        name: "Engineering Campus",
        logo: "https://placehold.co/200x200/ffffff/f43f5e?text=Eng+Camp",
        color: "bg-rose-100"
    },
];

export default function Clients() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-[#4ACF50] rounded-full blur-[100px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#E91E63] rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] tracking-tighter mb-4">
                            Trusted by Leading Institutions
                        </h2>
                        <div className="w-24 h-3 bg-[#E91E63] mx-auto rounded-full border-2 border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b]" />
                        <p className="mt-6 text-xl text-[#1e1b4b]/70 font-bold max-w-2xl mx-auto">
                            Proud catering partners for top universities and colleges across the region.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                y: -10,
                                rotate: index % 2 === 0 ? 5 : -5,
                                transition: { type: "spring", stiffness: 800, damping: 15 }
                            }}
                            whileTap={{
                                scale: 0.9,
                                rotate: 0,
                                transition: { type: "spring", stiffness: 800, damping: 15 }
                            }}
                            className="group relative h-48 rounded-[32px] border-2 border-[#1e1b4b] bg-white shadow-[4px_4px_0px_0px_#1e1b4b] hover:shadow-[8px_8px_0px_0px_#4ACF50] transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            {/* Card Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 bg-white">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
