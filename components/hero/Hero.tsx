"use client";

import BookingForm from "@/components/forms/BookingForm";
import HeroBackground from "@/components/hero/HeroBackground";
import { siteConfig } from "@/config/site";
import { Phone, Star } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-28 lg:pt-36 pb-12 flex items-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative SVG backdrop (dots, blobs, animated route, wave divider) */}
      <HeroBackground />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Copy content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Trust Stars Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 bg-white border border-slate-150 px-3.5 py-1.5 rounded-full shadow-soft mb-6"
          >
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <div className="w-px h-3.5 bg-slate-200" />
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-primary-950 font-bold text-xs">
              {siteConfig.rating} Rated on Google in Bhopal
            </span>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-950 tracking-tight leading-[1.1] mb-6"
          >
            Self Drive Car Rental in Bhopal
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl"
          >
            Choose from verified self-drive cars, taxis, airport transfers and outstation vehicles with quick booking, transparent pricing and dedicated customer support.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-btn shadow-glow transition-all active:scale-[0.99] text-center w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              Book Ertiga on WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 border border-accent-500 hover:bg-accent-50 text-accent-600 font-bold px-7 py-3.5 rounded-btn transition-colors text-center w-full sm:w-auto text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 text-accent-500 shrink-0" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Booking Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}
