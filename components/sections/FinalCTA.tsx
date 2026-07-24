"use client";

import { siteConfig } from "@/config/site";
import { Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-slate-900 to-indigo-950 rounded-card p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-medium"
        >
          {/* Background overlay design details */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15),transparent)] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Tag badge */}
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-400 bg-accent-500/10 px-3 py-1 rounded-full border border-accent-500/20 mb-6">
              Instant Confirmations
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4 leading-tight">
              Ready To Book Your Next Ride?
            </h2>

            {/* Sub */}
            <p className="text-slate-350 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              Tell us your travel requirements and we&apos;ll help you find the right vehicle at the best available price.
            </p>

            {/* Actions grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#booking-form"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-btn shadow-glow transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-emerald-500/35 hover:bg-emerald-500/10 text-emerald-400 font-bold px-7 py-4 rounded-btn transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Talk on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-300 hover:text-white font-bold py-3.5 px-4 transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
