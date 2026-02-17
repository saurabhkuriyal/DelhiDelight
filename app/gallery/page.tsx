"use client";

import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";

// Gallery Items Data
const galleryItems = [
    {
        id: 1,
        title: "Royal Wedding Buffet",
        category: "Wedding",
        image: "https://images.unsplash.com/photo-1519225427186-1db89e9309cf?q=80&w=2070&auto=format&fit=crop",
        height: "h-[400px]"
    },
    {
        id: 2,
        title: "Gourmet Plating",
        category: "Fine Dining",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        height: "h-[300px]"
    },
    {
        id: 3,
        title: "Signature Desserts",
        category: "Sweets",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop",
        height: "h-[500px]"
    },
    {
        id: 4,
        title: "Live Pasta Station",
        category: "Live Stalls",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
        height: "h-[350px]"
    },
    {
        id: 5,
        title: "Traditional Thali",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
        height: "h-[450px]"
    },
    {
        id: 6,
        title: "Cocktail Arrangement",
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        height: "h-[300px]"
    },
    {
        id: 7,
        title: "Outdoor Catering Setup",
        category: "Events",
        image: "https://images.unsplash.com/photo-1464349153912-6b7b5a0e913a?q=80&w=2070&auto=format&fit=crop",
        height: "h-[500px]"
    },
    {
        id: 8,
        title: "Fresh Salads",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
        height: "h-[350px]"
    },
    {
        id: 9,
        title: "Chef's Special Curry",
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
        height: "h-[400px]"
    },
    {
        id: 10,
        title: "Corporate Luncheon",
        category: "Corporate",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        height: "h-[320px]"
    },
];

export default function GalleryPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4ACF50]/15 rounded-full blur-[120px]" />

            {/* Header Section */}
            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-[#FF9800] text-[#1e1b4b] border-[3px] border-white text-xs font-black tracking-[0.2em] uppercase shadow-[4px_4px_0px_0px_#1e1b4b] transform -rotate-1">
                        Our Portfolio
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-7xl font-black text-[#1e1b4b] tracking-tighter mb-6 drop-shadow-sm"
                >
                    A Visual <span className="text-[#4ACF50] text-shadow-sm">Feast</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#1e1b4b]/70 text-lg max-w-2xl mx-auto font-bold"
                >
                    Explore our finest culinary creations and event setups from recent celebrations.
                </motion.p>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-20 relative z-10">
                <p className="text-[#1e1b4b]/60 text-sm font-bold">Follow us on Instagram <span className="text-[#E91E63] font-black">@delhidelight</span> for daily updates</p>
            </div>
        </div>
    );
}

function GalleryItem({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative rounded-3xl overflow-hidden break-inside-avoid group cursor-pointer border-[3px] border-[#1e1b4b] bg-white mb-8 shadow-[8px_8px_0px_0px_#4ACF50] hover:shadow-[4px_4px_0px_0px_#4ACF50] hover:translate-x-[4px] hover:translate-y-[4px] transition-all`}
        >
            {/* Image */}
            <div className="relative w-full aspect-auto">
                {/* Using standard img tag for simplicity in masonry layout or Next Image with specific width/height styling */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    loading="lazy"
                />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">

                {/* Top Actions (Slide down on hover) */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 hover:text-white transition-colors">
                        <Heart size={18} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-emerald-950 transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>

                {/* Bottom Text (Slide up on hover) */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase mb-2 inline-block">
                        {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                        {item.title}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
}
