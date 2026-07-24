"use client";

import { siteConfig } from "@/config/site";
import { Plane, Check, PlaneLanding, ShieldCheck, Clock, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Clock,
    title: "On-Time Pickup",
    desc: "We track your flight and are waiting at arrivals — no missed pickups, no waiting around.",
  },
  {
    icon: PlaneLanding,
    title: "Flight-Friendly",
    desc: "Delayed or early landing? Free wait time and live coordination keep your ride ready.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed, Fair Fares",
    desc: "Agreed price before you board — no surge, no meter surprises to Raja Bhoj Airport.",
  },
];

export default function AirportService() {
  const waHref = `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Hi, I'd like to book an airport pickup/drop."
  )}`;

  return (
    <section id="airport" className="py-24 bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                <Plane className="w-3.5 h-3.5" />
                Airport Pickup &amp; Drop
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4">
                Stress-Free Airport Transfers
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-8">
                Reliable pickups and drops for Raja Bhoj Airport, Bhopal. We watch your flight,
                arrive early, and get you to the terminal or your doorstep on time — every single
                trip, day or night.
              </p>
            </motion.div>

            <div className="space-y-5 mb-9">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="p-3 bg-sky-50 rounded-xl shrink-0">
                      <Icon className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary-950 text-base mb-1 flex items-center gap-2">
                        {feature.title}
                        <Check className="w-4 h-4 text-emerald-500" />
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-btn shadow-soft transition-all active:scale-[0.98] text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Book Airport Transfer
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 flex items-center justify-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-3.5 rounded-btn transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-card overflow-hidden shadow-medium bg-gradient-to-br from-sky-900 to-slate-900 min-h-[360px] flex items-end order-1 lg:order-2"
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-sky-400/15 rounded-full blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/innova-rental.jpg"
              alt="Airport transfer car in Bhopal"
              className="w-full h-full object-cover absolute inset-0 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Top badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <span className="text-[11px] font-bold bg-black/50 backdrop-blur-md text-sky-300 border border-white/10 px-3 py-1.5 rounded-full">
                Raja Bhoj Airport
              </span>
            </div>

            {/* Floating stat chip */}
            <div className="relative z-10 m-5 bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md w-full flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-300 font-semibold mb-0.5">Availability</p>
                <div className="flex items-center gap-1.5 text-white">
                  <Clock className="w-4 h-4 text-sky-300" />
                  <span className="font-bold text-sm">24/7 Pickups</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-slate-300 font-semibold mb-0.5">Fares</p>
                <p className="font-bold text-sm text-sky-300">Fixed &amp; Upfront</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
