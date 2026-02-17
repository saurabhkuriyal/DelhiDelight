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
        <footer className="bg-emerald-50 border-t border-emerald-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#4ACF50]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[0%] w-[30%] h-[40%] bg-[#E91E63]/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-[#4ACF50] p-2 rounded-xl text-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b] border-2 border-[#1e1b4b] group-hover:rotate-12 transition-transform duration-300">
                                <UtensilsCrossed size={24} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-[#1e1b4b]">
                                DELHI <span className="text-[#4ACF50] text-[#1e1b4b]">DELIGHT</span>
                            </span>
                        </Link>
                        <p className="text-[#1e1b4b] text-sm leading-relaxed max-w-xs font-medium">
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
                        <h4 className="text-zinc-950 font-bold text-lg mb-6">Quick Links</h4>
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
                        <h4 className="text-zinc-950 font-bold text-lg mb-6">Services</h4>
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
                        <h4 className="text-zinc-950 font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-zinc-600 group">
                                <div className="mt-1 p-2 rounded-full bg-white border border-emerald-100 group-hover:border-amber-500/50 group-hover:text-amber-600 transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm">123, Flavor Avenue, Connaught Place, New Delhi - 110001</span>
                            </li>
                            <li className="flex items-center gap-4 text-zinc-600 group">
                                <div className="p-2 rounded-full bg-white border border-emerald-100 group-hover:border-amber-500/50 group-hover:text-amber-600 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-zinc-600 group">
                                <div className="p-2 rounded-full bg-white border border-emerald-100 group-hover:border-amber-500/50 group-hover:text-amber-600 transition-colors">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm">hello@delhidelight.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter / Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-[#4ACF50]/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#1e1b4b]/60 text-sm font-bold">
                        &copy; {currentYear} Delhi Delight Caterers. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-[#1e1b4b]/60 font-bold">
                        <Link href="#" className="hover:text-[#E91E63] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#E91E63] transition-colors">Terms of Service</Link>
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
            className="w-10 h-10 rounded-full bg-white border-2 border-[#1e1b4b] flex items-center justify-center text-[#1e1b4b] hover:bg-[#4ACF50] hover:text-[#1e1b4b] transition-all duration-300 shadow-[3px_3px_0px_0px_#1e1b4b] hover:shadow-[1px_1px_0px_0px_#1e1b4b] hover:translate-x-[2px] hover:translate-y-[2px]"
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
                className="text-[#1e1b4b] hover:text-[#E91E63] transition-colors flex items-center gap-2 group text-sm font-bold"
            >
                <div className="w-2 h-2 rounded-full bg-[#4ACF50] group-hover:bg-[#E91E63] transition-colors border border-[#1e1b4b]" />
                {label}
            </Link>
        </li>
    );
}
