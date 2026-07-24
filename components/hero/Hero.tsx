"use client";

import BookingForm from "@/components/forms/BookingForm";
import { siteConfig } from "@/config/site";
import { Phone, Star } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
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
      {/* Background soft circular gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-100/40 blur-3xl -z-10" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Copy content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Trust Stars Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 bg-white border border-slate-150 px-3.5 py-1.5 rounded-full shadow-soft mb-6"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-primary-950 font-bold text-xs">
              {siteConfig.rating} Google Rated Car Rental Agency in Bhopal
            </span>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-950 tracking-tight leading-[1.1] mb-6"
          >
            Self Drive Car Rental in <span className="text-accent-500">Bhopal</span> – Book Reliable Cars in Minutes
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Choose from verified self-drive cars, taxis, airport transfers and outstation vehicles with quick booking, transparent pricing and dedicated customer support.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#booking-form"
              onClick={handleScrollToForm}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-btn shadow-glow transition-all active:scale-[0.99] text-center w-full sm:w-auto"
            >
              Book Your Ride
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-bold px-7 py-4 rounded-btn transition-colors text-center w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 text-primary-900 hover:text-accent-500 font-bold py-3 px-4 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-accent-500" />
              <span>Call {siteConfig.phoneDisplay}</span>
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
