"use client";

import { siteConfig } from "@/config/site";
import { UserCheck, Check, Star, MapPin, Clock, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    desc: "Verified, courteous chauffeurs who know Bhopal's roads inside out.",
  },
  {
    icon: MapPin,
    title: "Local & Outstation",
    desc: "City rides, temple trips or a full-day outstation tour — one booking covers it.",
  },
  {
    icon: Clock,
    title: "Hourly & Full-Day",
    desc: "Flexible packages billed by the hour or day, with transparent per-km rates.",
  },
];

export default function TaxiService() {
  const waHref = `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Hi, I'd like to book a taxi with driver."
  )}`;

  return (
    <section id="taxi" className="py-24 bg-slate-50/50 scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-card overflow-hidden shadow-medium bg-gradient-to-br from-slate-900 to-indigo-950 min-h-[360px] flex items-end order-1 lg:order-none"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dzire-rental.jpg"
              alt="Taxi with professional driver in Bhopal"
              className="w-full h-full object-cover absolute inset-0 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Top badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="text-[11px] font-bold bg-black/50 backdrop-blur-md text-accent-300 border border-white/10 px-3 py-1.5 rounded-full">
                With Driver
              </span>
            </div>

            {/* Floating stat chip */}
            <div className="relative z-10 m-5 bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md w-full flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-300 font-semibold mb-0.5">Rated by riders</p>
                <div className="flex items-center gap-1.5 text-white">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-bold text-sm">{siteConfig.rating} / 5</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-slate-300 font-semibold mb-0.5">Coverage</p>
                <p className="font-bold text-sm text-accent-400">Local + Outstation</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                <UserCheck className="w-3.5 h-3.5" />
                Taxi With Driver
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4">
                Sit Back &amp; Relax — We&apos;ll Drive
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-8">
                Skip the traffic stress. Our experienced drivers handle the wheel while you enjoy a
                comfortable, on-time ride across Bhopal and beyond — perfect for family outings,
                business meetings and outstation trips.
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
                    <div className="p-3 bg-accent-50 rounded-xl shrink-0">
                      <Icon className="w-5 h-5 text-accent-500" />
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
                Book Taxi on WhatsApp
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
        </div>
      </div>
    </section>
  );
}
