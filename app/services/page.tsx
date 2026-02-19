"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    Building2,
    ChefHat,
    GraduationCap,
    Truck,
    Utensils
} from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

// Service Data
const services = [
    {
        id: 1,
        title: "Hostel Mess Management",
        description: "Nutritious, hygienic, and homely meals designed for growing students. We ensure a balanced diet that keeps energy high and tastes like home.",
        icon: GraduationCap,
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=2070&auto=format&fit=crop", // Student cafeteria
        features: ["Balanced Macronutrients", "Monthly Menu Rotation", "Late Night Snacks"]
    },
    {
        id: 2,
        title: "Hospital Catering Services",
        description: "Reliable daily meals services for Hospital  . Affordable, tasty, and timely delivery to ensure residents never skip a meal.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop", // Warm meal
        features: ["Homely Taste", "Breakfast & Dinner Plans", "Sunday Specials"]
    },
    {
        id: 3,
        title: "Corporate Cafeterias",
        description: "Fueling the workforce with professional cafeteria management. From power breakfasts to executive lunches, we handle it all.",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop", // Healthy lunch
        features: ["Live Counters", "Health-Conscious Options", "Tea/Coffee Vending"]
    },
    {
        id: 4,
        title: "Wedding & Events",
        description: "Our signature luxury catering for your special day. Exquisite menus, royal presentation, and service that treats guests like royalty.",
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", // Banquet
        features: ["Multi-Cuisine Menu", "Silver Service", "Themed Stalls"]
    },
    {
        id: 5,
        title: "University/College Cafeteria ",
        description: "With maintaining every standards of hygiene and quality we provide the best food to the students.",
        icon: ChefHat,
        image: "https://images.unsplash.com/photo-1577103239843-f617a2dc63fb?q=80&w=2050&auto=format&fit=crop", // Large pot cooking
        features: ["24/7 Shift Operations", "Cost-Effective", "ISO Certified Process"]
    },
    {
        id: 6,
        title: "School Canteen Services",
        description: "With a wide reach in school in NCT Delhi we can assure our canteen servide to your children",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1974&auto=format&fit=crop", // Tiffin/Bento
        features: ["Leak-Proof Packaging", "Customizable Box", "On-Time Delivery"]
    },
];

// 3D Tilt Card Component
const ServiceCard = ({ service }: { service: any }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-[28rem] w-full rounded-3xl bg-white border-[3px] border-[#1e1b4b] shadow-[8px_8px_0px_0px_#FF9800] group cursor-pointer hover:shadow-[4px_4px_0px_0px_#FF9800] transition-all"
        >
            {/* Background Image with Overlay */}
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 rounded-2xl overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* Content Content */}
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 flex flex-col justify-end p-8"
            >
                {/* Icon Badge */}
                <div className="mb-auto transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#4ACF50] border-2 border-[#1e1b4b] flex items-center justify-center text-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b]">
                        <service.icon size={28} />
                    </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-emerald-200 transition-colors uppercase tracking-tighter loading-none">
                    {service.title}
                </h3>

                <p className="text-zinc-100 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                </p>

                {/* Features List (Visible on Hover) */}
                <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-xs font-semibold text-emerald-100">
                    {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link href="/contact" className="w-full">
                    <button className="w-full py-3 rounded-xl bg-[#1e1b4b] text-white font-black text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-[#4ACF50] hover:text-[#1e1b4b] border-2 border-white hover:border-[#1e1b4b] transition-all shadow-lg">
                        Get Quote <ArrowUpRight size={18} />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-20 left-[-100px] w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-[-100px] w-[500px] h-[500px] bg-[#4ACF50]/15 rounded-full blur-[120px]" />
            {/* HEADER */}
            <div className="container mx-auto px-6 text-center mb-20 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block py-2 px-6 rounded-full bg-[#E91E63] text-white border-[3px] border-[#1e1b4b] text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-[4px_4px_0px_0px_#1e1b4b] transform -rotate-1"
                >
                    What We Do By Heart
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-7xl font-black text-[#1e1b4b] tracking-tighter mb-6"
                >
                    Catering Solutions <br /> For <span className="text-[#4ACF50] text-shadow-sm">Every Need</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#1e1b4b]/70 text-lg max-w-2xl mx-auto font-bold"
                >
                    From student hostels to corporate boardrooms, we bring the same level of passion, hygiene, and taste to every plate we serve.
                </motion.p>
            </div>

            {/* SERVICES GRID */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA SECTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6 mt-32"
            >
                <div className="bg-[#4ACF50] border-[4px] border-[#1e1b4b] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-[12px_12px_0px_0px_#1e1b4b]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white blur-[100px] opacity-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white blur-[100px] opacity-20" />

                    <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-6 relative z-10 drop-shadow-sm">Can't find what you're looking for?</h2>
                    <p className="text-[#1e1b4b] text-xl font-bold max-w-xl mx-auto mb-8 relative z-10">
                        We specialize in custom catering solutions. Reach out to us with your specific requirements, and we'll tailor a plan just for you.
                    </p>
                    <Link href="/contact" className="relative z-10">
                        <button className="bg-[#1e1b4b] text-white px-10 py-4 rounded-full font-black shadow-[6px_6px_0px_0px_#ffffff] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all border-2 border-white text-lg">
                            Talk to an Expert
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
