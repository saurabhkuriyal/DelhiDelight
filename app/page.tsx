"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Coffee,
  GraduationCap,
  Quote,
  Star,
  Utensils
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    title: "Crafting Culinary Experiences",
    subtitle: "Premium catering services for every occasion.",
  },
  {
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0827?q=80&w=2040&auto=format&fit=crop",
    title: "Taste the Excellence",
    subtitle: "Gourmet dishes prepared with passion and precision.",
  },
  {
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    title: "Seamless Service",
    subtitle: "Professional staff dedicated to your event's success.",
  }
];

const services = [
  {
    title: "School Canteen Services",
    description: "Nutritious and delicious meals that kids love. We focus on hygiene, balance, and great taste.",
    icon: <GraduationCap size={32} />,
    color: "bg-cyan-500",
  },
  {
    title: "College & University Mess",
    description: "Quality mess services for students, providing a 'home away from home' food experience.",
    icon: <Utensils size={32} />,
    color: "bg-emerald-500",
  },
  {
    title: "Hospital Catering",
    description: "Also provide Healthy meals to hospital maintaining proper hygiene and nutritional standards ",
    icon: <Coffee size={32} />,
    color: "bg-lime-500",
  }
];

const stories = [
  {
    id: 1,
    title: "The Art of Authentic Indian Cooking",
    excerpt: "Discover how we blend traditional spices with modern techniques to create unique flavors.",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0827?q=80&w=2040&auto=format&fit=crop",
    date: "Jan 25, 2026",
  },
  {
    id: 2,
    title: "Excellence in Corporate Events",
    excerpt: "A look behind the scenes of one of our biggest catering events for a Global Summit.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    date: "Jan 18, 2026",
  }
];

const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    role: "Director, City University",
    text: "Delhi Delight has transformed our campus dining experience. The students are happy, and the quality is consistently high.",
    rating: 5,
  },
  {
    name: "Rajesh Malhotra",
    role: "Event Planner",
    text: "The professionalism of their staff and the presentation of food is unmatched. Highly recommended for weddings and corporate events.",
    rating: 5,
  },
  {
    name: "Sonia Verma",
    role: "Hostel Manager",
    text: "Reliable, hygienic, and extremely helpful. Their PG catering service is a lifesaver for our residents.",
    rating: 4,
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden selection:bg-[#4ACF50] selection:text-white">

      {/* HERO SECTION WITH CAROUSEL */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#4ACF50] text-[#1e1b4b] border-[3px] border-white text-sm font-black tracking-widest uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(30,27,75,1)] transform -rotate-2">
              Welcome to Delhi Delight
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={word.toLowerCase() === "culinary" || word.toLowerCase() === "excellence" ? "text-[#4ACF50] drop-shadow-md stroke-2" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto mb-10 font-medium">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-5 bg-[#4ACF50] text-[#1e1b4b] rounded-full font-black text-lg shadow-[6px_6px_0px_0px_rgba(30,27,75,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(30,27,75,1)] transition-all flex items-center justify-center gap-2 group border-2 border-[#1e1b4b]">
                Plan Your Event <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-5 bg-white text-[#1e1b4b] rounded-full font-black text-lg shadow-[6px_6px_0px_0px_#E91E63] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#E91E63] transition-all flex items-center justify-center gap-2 border-2 border-[#1e1b4b]">
                Our Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 transition-all duration-300 rounded-full border-2 border-white ${currentSlide === i ? "w-12 bg-[#4ACF50]" : "w-3 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 container mx-auto relative" id="services">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF9800] rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-[#E91E63] rounded-full blur-3xl opacity-20 -z-10" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] tracking-tighter mb-4 transform -rotate-1">We Serve Excellence</h2>
          <p className="text-lg text-[#1e1b4b]/70 max-w-2xl mx-auto font-bold">
            From educational institutions to private residents, we provide catering solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`bg-white p-8 rounded-[40px] border-[3px] border-[#1e1b4b] shadow-[8px_8px_0px_0px_#1e1b4b] flex flex-col items-start text-left relative overflow-hidden group transition-all`}
            >
              <div className={`${i === 0 ? 'bg-[#4ACF50]' : i === 1 ? 'bg-[#FF9800]' : 'bg-[#E91E63]'} p-5 rounded-2xl text-[#1e1b4b] mb-8 shadow-sm border-2 border-[#1e1b4b] group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-[#1e1b4b] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[#1e1b4b]/80 leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
              <Link href="#" className={`mt-auto font-black flex items-center gap-2 group/link ${i === 0 ? 'text-[#4ACF50]' : i === 1 ? 'text-[#FF9800]' : 'text-[#E91E63]'}`}>
                Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TASTE STORIES SECTION */}
      <section className="py-24 bg-[#1e1b4b] text-white overflow-hidden relative">
        {/* Background Blobs for Dark Section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4ACF50] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E91E63] rounded-full blur-[150px] opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">Taste Stories</h2>
              <p className="text-[#4ACF50] text-lg max-w-xl font-bold">
                Behind every great meal is a story of passion, tradition, and innovation. Read our latest journeys.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1e1b4b] border-4 border-[#4ACF50] rounded-full font-black hover:bg-[#4ACF50] hover:text-[#1e1b4b] transition-colors shadow-[4px_4px_0px_0px_#4ACF50]">
              View All Stories <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] w-full rounded-[48px] overflow-hidden mb-8">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-6 py-2 bg-[#4ACF50] text-[#1e1b4b] border-2 border-[#1e1b4b] rounded-full text-sm font-black shadow-[4px_4px_0px_0px_#1e1b4b]">
                      {story.date}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-[#4ACF50] transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl font-medium">
                  {story.excerpt}
                </p>
                <button className="text-[#4ACF50] font-black text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-[#fffbeb] overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] tracking-tighter mb-4">What Our Clients Say</h2>
          <div className="w-24 h-3 bg-[#4ACF50] mx-auto rounded-full border-2 border-[#1e1b4b]" />
        </div>

        <div className="relative flex overflow-hidden">
          {/* Infinite Marquee Effect */}
          <div className="flex animate-marquee gap-8 py-10">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[400px] flex-shrink-0 bg-white p-10 rounded-[48px] border-[3px] border-[#1e1b4b] shadow-[8px_8px_0px_0px_#4ACF50] relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-[#4ACF50] mb-8">
                  <Quote size={48} fill="#4ACF50" />
                </div>
                <p className="text-xl font-bold text-[#1e1b4b] leading-relaxed mb-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#FF9800] rounded-full flex items-center justify-center font-black text-[#1e1b4b] text-xl border-2 border-[#1e1b4b]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#1e1b4b]">{t.name}</h4>
                    <p className="text-[#1e1b4b]/60 font-bold">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, starI) => (
                    <Star
                      key={starI}
                      size={18}
                      className={starI < t.rating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - EXTRA SECTION */}
      <section className="py-24 bg-[#4ACF50] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e1b4b]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-[#1e1b4b] tracking-tighter mb-8 leading-none drop-shadow-sm">
                Experience The <br /> Delhi Delight Difference
              </h2>
              <div className="space-y-6">
                {[
                  "Punctual & Reliable Service Each Time",
                  "Strict Adherence to Food Safety & Hygiene",
                  "Customized Menus for Every Culture & Budget",
                  "Passionate Team of Culinary Experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#1e1b4b]">
                    <div className="bg-white p-1 rounded-full">
                      <CheckCircle2 className="text-[#4ACF50]" size={24} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-[#1e1b4b] text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_#ffffff] border-2 border-white">
                Book a Tasting Session
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-[64px] overflow-hidden shadow-[12px_12px_0px_0px_#1e1b4b] border-[4px] border-[#1e1b4b]">
                <img src="https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=1974&auto=format&fit=crop" alt="Canteen" className="w-full h-[600px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#FF9800] p-8 rounded-[40px] text-[#1e1b4b] shadow-[8px_8px_0px_0px_#1e1b4b] border-[3px] border-[#1e1b4b] max-w-[280px]">
                <div className="text-5xl font-black text-white mb-2 drop-shadow-md">15+</div>
                <div className="text-xl font-bold">Years of Serving Joy & Quality Meals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-[#E91E63] rounded-[64px] p-20 relative overflow-hidden border-[4px] border-[#1e1b4b] shadow-[12px_12px_0px_0px_#4ACF50]">
            <div className="relative z-10">
              <div className="bg-white w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 border-2 border-[#1e1b4b] shadow-[4px_4px_0px_0px_#1e1b4b]">
                <ChefHat size={48} className="text-[#E91E63]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 drop-shadow-sm">Ready to delight your guests?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-bold">
                Contact us today for a personalized quote and let's make your next event or mess service unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#4ACF50] text-[#1e1b4b] px-10 py-5 rounded-full font-black text-xl shadow-[6px_6px_0px_0px_#1e1b4b] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1e1b4b] transition-all w-full sm:w-auto border-2 border-[#1e1b4b]">
                  Get a Quote
                </button>
                <button className="bg-white text-[#1e1b4b] px-10 py-5 rounded-full font-black text-xl shadow-[6px_6px_0px_0px_#1e1b4b] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1e1b4b] transition-all w-full sm:w-auto border-2 border-[#1e1b4b]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
