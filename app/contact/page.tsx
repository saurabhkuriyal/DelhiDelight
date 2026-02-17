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
        <div className="bg-white min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* BACKGROUND ACCENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4ACF50]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E91E63]/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF9800]/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24 relative z-10"
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-[#FF9800] text-[#1e1b4b] border-[3px] border-white text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-[4px_4px_0px_0px_#1e1b4b] transform -rotate-2">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-[#1e1b4b] tracking-tighter mb-6 drop-shadow-sm">
                        Let's Plan Your <br />
                        <span className="text-[#4ACF50] text-shadow-sm">
                            Royal Feast
                        </span>
                    </h1>
                    <p className="text-[#1e1b4b]/70 text-lg max-w-2xl mx-auto font-bold">
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
                        <div className="pt-8 border-t border-[#1e1b4b]/10">
                            <h3 className="text-[#1e1b4b] font-black mb-4">Follow Our Journey</h3>
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
                        <form onSubmit={handleSubmit} className="bg-white border-[3px] border-[#1e1b4b] p-8 md:p-10 rounded-[3rem] shadow-[12px_12px_0px_0px_#4ACF50] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9800]/20 rounded-full blur-[40px] pointer-events-none" />
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
                                    <label className="text-sm font-black text-[#1e1b4b] ml-1 uppercase tracking-wide">Event Type</label>
                                    <div className="relative">
                                        <select
                                            name="eventType"
                                            value={formState.eventType}
                                            onChange={handleChange}
                                            className="w-full bg-white border-2 border-[#1e1b4b] rounded-xl px-4 py-3 text-[#1e1b4b] font-bold focus:outline-none focus:border-[#4ACF50] focus:ring-4 focus:ring-[#4ACF50]/20 transition-all appearance-none shadow-[4px_4px_0px_0px_#1e1b4b] focus:shadow-[2px_2px_0px_0px_#1e1b4b] focus:translate-x-[2px] focus:translate-y-[2px]"
                                        >
                                            <option value="" disabled>Select Event Type</option>
                                            <option value="wedding">Wedding / Reception</option>
                                            <option value="corporate">Corporate Event</option>
                                            <option value="birthday">Birthday Party</option>
                                            <option value="social">Social Gathering</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1e1b4b]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
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
                                <label className="text-sm font-black text-[#1e1b4b] ml-1 mb-2 block uppercase tracking-wide">Tell us about your event</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-white border-2 border-[#1e1b4b] rounded-xl px-4 py-3 text-[#1e1b4b] font-bold focus:outline-none focus:border-[#4ACF50] focus:ring-4 focus:ring-[#4ACF50]/20 transition-all resize-none placeholder:text-[#1e1b4b]/30 shadow-[4px_4px_0px_0px_#1e1b4b] focus:shadow-[2px_2px_0px_0px_#1e1b4b] focus:translate-x-[2px] focus:translate-y-[2px]"
                                    placeholder="Any specific cuisines, dietary requirements, or special requests?"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#4ACF50] text-[#1e1b4b] font-black text-xl py-4 rounded-xl shadow-[6px_6px_0px_0px_#1e1b4b] border-2 border-[#1e1b4b] flex items-center justify-center gap-2 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1e1b4b] transition-all"
                            >
                                <Send size={24} strokeWidth={3} /> Send Inquiry
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
                    className="mt-24 md:mt-32 rounded-[2.5rem] overflow-hidden border-[4px] border-[#1e1b4b] bg-white shadow-[12px_12px_0px_0px_#1e1b4b] h-[400px] relative transition-all duration-700"
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
                    <div className="absolute bottom-4 right-4 bg-white text-emerald-950 px-4 py-2 rounded-lg text-xs font-bold shadow-lg pointer-events-none">
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
        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#1e1b4b] flex items-center justify-center text-[#1e1b4b] group-hover:bg-[#4ACF50] group-hover:text-[#1e1b4b] transition-all duration-300 shadow-[4px_4px_0px_0px_#1e1b4b] shrink-0 group-hover:-translate-y-1">
            <Icon size={24} strokeWidth={2.5} />
        </div>
        <div>
            <h4 className="text-[#E91E63] text-sm font-black uppercase tracking-wider mb-1 transition-colors">{title}</h4>
            <p className="text-[#1e1b4b] font-bold text-xl leading-tight">{content}</p>
            {subContent && <p className="text-[#1e1b4b]/70 mt-1 font-medium">{subContent}</p>}
        </div>
    </div>
);

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        className="w-12 h-12 rounded-full bg-white border-2 border-[#1e1b4b] flex items-center justify-center text-[#1e1b4b] hover:bg-[#E91E63] hover:text-white transition-all shadow-[4px_4px_0px_0px_#1e1b4b] hover:shadow-[2px_2px_0px_0px_#1e1b4b] hover:translate-x-[2px] hover:translate-y-[2px]"
    >
        <Icon size={20} strokeWidth={2.5} />
    </a>
);

const InputGroup = ({ label, name, type = "text", placeholder, value, onChange }: any) => (
    <div className="space-y-2">
        <label className="text-sm font-black text-[#1e1b4b] ml-1 uppercase tracking-wide">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-white border-2 border-[#1e1b4b] rounded-xl px-4 py-3 text-[#1e1b4b] font-bold focus:outline-none focus:border-[#4ACF50] focus:ring-4 focus:ring-[#4ACF50]/20 transition-all placeholder:text-[#1e1b4b]/30 shadow-[4px_4px_0px_0px_#1e1b4b] focus:shadow-[2px_2px_0px_0px_#1e1b4b] focus:translate-x-[2px] focus:translate-y-[2px]"
            placeholder={placeholder}
        />
    </div>
);
