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
                        ? "rgba(255, 255, 255, 0.75)"
                        : "rgba(255, 255, 255, 1)",
                    backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
                    border: isScrolled
                        ? "1px solid rgba(255, 255, 255, 0.3)"
                        : "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: isScrolled
                        ? "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1,
                }}
                className="pointer-events-auto flex items-center justify-between px-1 md:px-2 overflow-hidden text-zinc-900 border"
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
                                className="bg-orange-600 p-2 rounded-xl text-white shadow-lg shadow-orange-200 cursor-pointer shrink-0"
                            >
                                <UtensilsCrossed size={22} className="stroke-[2.5px]" />
                            </motion.div>
                            <span className="text-xl font-black tracking-tighter text-zinc-900 hidden sm:block">
                                DELHI <span className="text-orange-600">DELLIGHT</span>
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
                                    className={`text-sm font-semibold transition-colors py-2 px-4 rounded-full hover:bg-zinc-100 ${isScrollingDown ? 'text-zinc-700' : 'text-zinc-600'
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
                                className="md:hidden p-2 hover:bg-zinc-100 rounded-full transition-colors"
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
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all font-mono"
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
                        className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-zinc-200/50 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 md:hidden pointer-events-auto"
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
                                        className="text-2xl font-bold text-zinc-800 hover:text-orange-600 transition-colors py-2 block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="h-px bg-zinc-100 w-full" />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 transition-all"
                        >
                            GET STARTED
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
