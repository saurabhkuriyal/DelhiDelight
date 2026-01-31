"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        guests: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thank you! We will get back to you shortly.");
    };

    return (
        <div className="bg-zinc-950 min-h-screen pt-24 pb-12">
            {/* BACKGROUND ACCENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        Let's Plan Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                            Royal Feast
                        </span>
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Whether it's a wedding, corporate gala, or an intimate gathering, we are here to turn your vision into a delicious reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-10"
                    >
                        {/* Info Cards */}
                        <div className="space-y-6">
                            <InfoCard
                                icon={Phone}
                                title="Call Us"
                                content="+91 9811228649"
                                subContent="+91 9811228623"
                            />
                            <InfoCard
                                icon={Mail}
                                title="Email Us"
                                content="hello@delhidelight.com"
                                subContent="bookings@delhidelight.com"
                            />
                            <InfoCard
                                icon={MapPin}
                                title="Visit Us"
                                content="811, 8th floor Vikas Deep Building Nirman Vihar,"
                                subContent="Delhi, India - 110092"
                            />
                            <InfoCard
                                icon={Clock}
                                title="Office Hours"
                                content="Mon - Sat: 9:30 AM - 6:30 PM"
                                subContent="Sunday: By Appointment"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-zinc-800">
                            <h3 className="text-white font-bold mb-4">Follow Our Journey</h3>
                            <div className="flex gap-4">
                                <SocialLink icon={Instagram} href="#" />
                                <SocialLink icon={Facebook} href="#" />
                                <SocialLink icon={Twitter} href="#" />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <InputGroup
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <InputGroup
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <InputGroup
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 00000"
                                    value={formState.phone}
                                    onChange={handleChange}
                                />
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-zinc-400 ml-1">Event Type</label>
                                    <div className="relative">
                                        <select
                                            name="eventType"
                                            value={formState.eventType}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select Event Type</option>
                                            <option value="wedding">Wedding / Reception</option>
                                            <option value="corporate">Corporate Event</option>
                                            <option value="birthday">Birthday Party</option>
                                            <option value="social">Social Gathering</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <InputGroup
                                    label="Approx. Guest Count"
                                    name="guests"
                                    type="number"
                                    placeholder="e.g. 500"
                                    value={formState.guests}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-8">
                                <label className="text-sm font-semibold text-zinc-400 ml-1 mb-2 block">Tell us about your event</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                                    placeholder="Any specific cuisines, dietary requirements, or special requests?"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/40 flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                            >
                                <Send size={20} /> Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* MAP SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 md:mt-32 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl h-[400px] relative grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52766649197906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1706692800000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white text-zinc-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg pointer-events-none">
                        📍 Serving All of Delhi NCR
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// SUB-COMPONENTS

const InfoCard = ({ icon: Icon, title, content, subContent }: { icon: any, title: string, content: string, subContent?: string }) => (
    <div className="flex items-start gap-4 group">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-orange-500/20 shrink-0">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-orange-400 transition-colors">{title}</h4>
            <p className="text-white font-medium text-lg leading-tight">{content}</p>
            {subContent && <p className="text-zinc-400 mt-1">{subContent}</p>}
        </div>
    </div>
);

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all"
    >
        <Icon size={18} />
    </a>
);

const InputGroup = ({ label, name, type = "text", placeholder, value, onChange }: any) => (
    <div className="space-y-2">
        <label className="text-sm font-semibold text-zinc-400 ml-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-zinc-700"
            placeholder={placeholder}
        />
    </div>
);
