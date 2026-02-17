"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, UtensilsCrossed, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const direction = latest > lastScrollY ? "down" : "up";

        // Threshold to start the "floating" effect
        const threshold = 80;

        if (latest > threshold) {
            setIsScrolled(true);
            if (direction === "down") {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }
        } else {
            setIsScrolled(false);
            setIsScrollingDown(false);
        }

        setLastScrollY(latest);
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300 pointer-events-none">
            <motion.nav
                layout
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    width: isScrollingDown ? "auto" : "100%",
                    maxWidth: isScrollingDown ? "fit-content" : "1280px", // Changed from fixed px to fit-content/max match
                    height: isScrollingDown ? "52px" : "72px",
                    borderRadius: isScrollingDown ? "9999px" : "24px",
                    backgroundColor: isScrolled
                        ? "rgba(255, 255, 255, 0.85)"
                        : "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(12px)",
                    border: "2px solid #1e1b4b",
                    boxShadow: isScrolled
                        ? "4px 4px 0px 0px #1e1b4b"
                        : "none",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1,
                }}
                className="pointer-events-auto flex items-center justify-between px-1 md:px-2 overflow-hidden text-[#1e1b4b] border"
            >
                {/* LOGO SECTION */}
                <AnimatePresence mode="popLayout">
                    {!isScrollingDown && (
                        <motion.div
                            layout
                            key="logo"
                            initial={{ opacity: 0, x: -20, width: 0 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                width: "auto",
                                transition: {
                                    type: "spring", stiffness: 300, damping: 25,
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            exit={{
                                opacity: 0,
                                x: -20,
                                width: 0,
                                transition: { duration: 0.2, ease: "easeInOut" }
                            }}
                            className="flex items-center gap-3 shrink-0 ml-4 md:ml-6 overflow-hidden whitespace-nowrap"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-[#4ACF50] p-2 rounded-xl text-[#1e1b4b] shadow-[2px_2px_0px_0px_#1e1b4b] border-2 border-[#1e1b4b] cursor-pointer shrink-0"
                            >
                                <UtensilsCrossed size={22} className="stroke-[2.5px]" />
                            </motion.div>
                            <span className="text-xl font-black tracking-tighter text-[#1e1b4b] hidden sm:block">
                                DELHI <span className="text-[#4ACF50] text-shadow-sm">DELIGHT</span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* NAV LINKS (Always visible, but layout shifts) */}
                <motion.div
                    layout
                    className={`flex items-center h-full px-4 ${isScrollingDown ? 'justify-center mx-auto' : 'gap-2'}`}
                >
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.div
                                layout
                                key={link.name}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-sm font-semibold transition-colors py-2 px-4 rounded-full hover:bg-emerald-50 hover:text-amber-600 ${isScrollingDown ? 'text-zinc-950' : 'text-zinc-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* MOBILE MENU TOGGLE (Visible when not scrolling down or in mobile) */}
                    <AnimatePresence>
                        {!isScrollingDown && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                className="md:hidden p-2 hover:bg-emerald-50 text-emerald-800 rounded-full transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* GET STARTED BUTTON */}
                <AnimatePresence mode="popLayout">
                    {!isScrollingDown && (
                        <motion.div
                            layout
                            key="cta"
                            initial={{ opacity: 0, x: 20, width: 0 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                width: "auto",
                                transition: {
                                    type: "spring", stiffness: 300, damping: 25,
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            exit={{
                                opacity: 0,
                                x: 20,
                                width: 0,
                                transition: { duration: 0.2, ease: "easeInOut" }
                            }}
                            className="hidden md:block shrink-0 mr-4 md:mr-6 overflow-hidden whitespace-nowrap"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "4px 4px 0px 0px #1e1b4b" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#E91E63] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#D81B60] transition-all font-mono border-2 border-[#1e1b4b] shadow-[2px_2px_0px_0px_#1e1b4b]"
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-emerald-100 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 md:hidden pointer-events-auto"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-bold text-[#1e1b4b] hover:text-[#4ACF50] transition-colors py-2 block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="h-px bg-emerald-100 w-full" />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#4ACF50] text-[#1e1b4b] py-5 rounded-2xl font-black text-lg shadow-[4px_4px_0px_0px_#1e1b4b] border-2 border-[#1e1b4b] transition-all"
                        >
                            GET STARTED
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
