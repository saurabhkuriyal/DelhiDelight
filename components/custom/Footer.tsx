"use client";

import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    UtensilsCrossed
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[0%] w-[30%] h-[40%] bg-red-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-orange-600 p-2 rounded-xl text-white shadow-lg shadow-orange-900/20 group-hover:rotate-12 transition-transform duration-300">
                                <UtensilsCrossed size={24} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                DELHI <span className="text-orange-500">DELIGHT</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Crafting culinary masterpieces since 1998. We bring the authentic taste of tradition to your most cherished celebrations.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Facebook} href="#" />
                            <SocialIcon icon={Twitter} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/services" label="Services" />
                            <FooterLink href="/gallery" label="Gallery" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/services" label="Wedding Catering" />
                            <FooterLink href="/services" label="Corporate Events" />
                            <FooterLink href="/services" label="Birthday Parties" />
                            <FooterLink href="/services" label="Live Stations" />
                            <FooterLink href="/services" label="Food Delivery" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-zinc-400 group">
                                <div className="mt-1 p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm">123, Flavor Avenue, Connaught Place, New Delhi - 110001</span>
                            </li>
                            <li className="flex items-center gap-4 text-zinc-400 group">
                                <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-zinc-400 group">
                                <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm">hello@delhidelight.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter / Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-500 text-sm">
                        &copy; {currentYear} Delhi Delight Caterers. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-zinc-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helper Components

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all duration-300"
        >
            <Icon size={18} />
        </a>
    );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-zinc-500 hover:text-orange-500 transition-colors flex items-center gap-2 group text-sm font-medium"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
                {label}
            </Link>
        </li>
    );
}
