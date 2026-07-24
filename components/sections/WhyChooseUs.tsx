"use client";

import { ShieldCheck, Coins, HelpCircle, Zap, Car, Compass, Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Verified Rental Partners",
      desc: "Every booking is fulfilled through trusted rental partners and verified vehicles.",
    },
    {
      icon: Coins,
      title: "Transparent Pricing",
      desc: "No hidden surprises. Know what you're paying before confirming your booking.",
    },
    {
      icon: Car,
      title: "Multiple Vehicle Choices",
      desc: "Choose from hatchbacks, sedans, SUVs, MPVs and taxis depending on your travel needs.",
    },
    {
      icon: Zap,
      title: "Quick Booking",
      desc: "Our booking process is simple, fast and optimized for mobile users.",
    },
    {
      icon: HelpCircle,
      title: "Dedicated Support",
      desc: "Need help before or after booking? Our support team is always ready to assist.",
    },
    {
      icon: Compass,
      title: "Reliable Service",
      desc: "Every trip matters. We focus on timely communication and dependable service.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white scroll-mt-20">
      <div className="container-custom">
        {/* Section Title */}
        <div className="max-w-2xl mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4"
          >
            Why Thousands of Customers Trust Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Designed to provide a smooth booking experience with trusted rental partners and reliable customer support.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-accent-50 rounded-xl shrink-0">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-950 text-base mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Premium High-Tech Dashboard Mockup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-card p-8 text-white shadow-medium relative overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            {/* abstract visual shapes */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/40 to-transparent" />

            <div>
              {/* Trust Signal 1 */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] font-bold bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full border border-accent-500/20">
                  Premium Travel Brand
                </span>
                <span className="text-[10px] font-bold bg-white/10 text-slate-300 px-3 py-1 rounded-full border border-white/10">
                  Bhopal Target
                </span>
              </div>

              {/* Trust Quote */}
              <h3 className="text-2xl font-bold font-heading mb-4 leading-snug">
                Verified Partnerships for Insured & Safe Journeys.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We work exclusively with handpicked vendors who meet our quality guidelines. That means well-serviced vehicles, functional safety systems, and transparent support on every drive.
              </p>
            </div>

            {/* Microstats mockup panel inside card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative z-10 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400 font-semibold mb-0.5">Rating Score</p>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-bold text-base">{siteConfig.rating} / 5</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold mb-0.5">Partners</p>
                <p className="font-bold text-base text-accent-400">100% Verified</p>
              </div>
              <div className="col-span-2 border-t border-white/10 pt-3 flex justify-between text-[11px] font-bold text-slate-300">
                <span>📍 Serving M.P. Nagar, Kolar, Arera</span>
                <span className="text-emerald-400">● 24/7 active support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
