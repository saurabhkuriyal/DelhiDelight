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
    color: "bg-blue-500",
  },
  {
    title: "College & University Mess",
    description: "Quality mess services for students, providing a 'home away from home' food experience.",
    icon: <Utensils size={32} />,
    color: "bg-orange-500",
  },
  {
    title: "PG Catering",
    description: "Monthly meal plans for PGs with a focus on variety, health, and doorstep delivery.",
    icon: <Coffee size={32} />,
    color: "bg-green-500",
  }
];

const stories = [
  {
    id: 1,
    title: "The Art of Fusion Cooking",
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
    <main className="min-h-screen bg-zinc-50 overflow-x-hidden">

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/20 text-orange-400 border border-orange-600/30 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              Welcome to Delhi Delight Caterers
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={word.toLowerCase() === "culinary" || word.toLowerCase() === "excellence" ? "text-orange-500 italic" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto mb-10 font-medium">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-5 bg-orange-600 text-white rounded-full font-black text-lg shadow-2xl shadow-orange-600/40 hover:bg-orange-500 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                Plan Your Event <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
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
              className={`h-2 transition-all duration-300 rounded-full ${currentSlide === i ? "w-12 bg-orange-500" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 container mx-auto" id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-4">We Serve Excellence</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
            From educational institutions to private residents, we provide catering solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[40px] border border-zinc-100 shadow-xl shadow-zinc-200/50 flex flex-col items-start text-left relative overflow-hidden group"
            >
              <div className={`${service.color} p-5 rounded-3xl text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href="#" className="mt-auto text-orange-600 font-bold flex items-center gap-2 group/link">
                Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TASTE STORIES SECTION */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Taste Stories</h2>
              <p className="text-zinc-400 text-lg max-w-xl">
                Behind every great meal is a story of passion, tradition, and innovation. Read our latest journeys.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 rounded-full font-bold hover:bg-orange-500 transition-colors">
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
                    <span className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold">
                      {story.date}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
                  {story.excerpt}
                </p>
                <button className="text-orange-500 font-black text-lg flex items-center gap-2">
                  Read More <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-4">What Our Clients Say</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="relative flex overflow-hidden">
          {/* Infinite Marquee Effect */}
          <div className="flex animate-marquee gap-8 py-10">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[400px] flex-shrink-0 bg-zinc-50 p-10 rounded-[48px] border border-zinc-100 relative group hover:bg-zinc-900 transition-all duration-500"
              >
                <div className="text-orange-600 mb-8 group-hover:text-orange-500 transition-colors">
                  <Quote size={48} />
                </div>
                <p className="text-xl font-medium text-zinc-700 leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center font-black text-orange-600 text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-zinc-900 group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, starI) => (
                    <Star
                      key={starI}
                      size={18}
                      className={starI < t.rating ? "fill-orange-500 text-orange-500" : "text-zinc-300"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - EXTRA SECTION */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                Experience The <br /> Delhi Delight Difference
              </h2>
              <div className="space-y-6">
                {[
                  "Punctual & Reliable Service Each Time",
                  "Strict Adherence to Food Safety & Hygiene",
                  "Customized Menus for Every Culture & Budget",
                  "Passionate Team of Culinary Experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90">
                    <CheckCircle2 className="text-white shrink-0" size={28} />
                    <span className="text-2xl font-bold tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-white text-orange-600 px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                Book a Tasting Session
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-[64px] overflow-hidden shadow-2xl border-8 border-white/20">
                <img src="https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=1974&auto=format&fit=crop" alt="Canteen" className="w-full h-[600px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-zinc-900 p-8 rounded-[40px] text-white shadow-2xl max-w-[280px]">
                <div className="text-5xl font-black text-orange-500 mb-2">15+</div>
                <div className="text-xl font-bold">Years of Serving Joy & Quality Meals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-zinc-100 rounded-[64px] p-20 relative overflow-hidden">
            <div className="relative z-10">
              <ChefHat size={80} className="mx-auto text-orange-600 mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-6">Ready to delight your guests?</h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                Contact us today for a personalized quote and let's make your next event or mess service unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-zinc-900 text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-orange-600 transition-colors w-full sm:w-auto">
                  Get a Quote
                </button>
                <button className="bg-white border-2 border-zinc-200 text-zinc-900 px-10 py-5 rounded-full font-black text-xl hover:bg-zinc-50 transition-colors w-full sm:w-auto">
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
