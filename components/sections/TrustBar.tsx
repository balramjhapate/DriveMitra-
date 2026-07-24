"use client";

import { ShieldCheck, Car, Zap, Layers } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { motion } from "framer-motion";

// Static class strings so Tailwind keeps them in the build.
const CHIP: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
  orange: "bg-orange-50 text-orange-600 ring-orange-100",
  green: "bg-green-50 text-green-600 ring-green-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  violet: "bg-violet-50 text-violet-600 ring-violet-100",
};

export default function TrustBar() {
  const badges = [
    { icon: ShieldCheck, title: "Verified Partners", desc: "Trusted rental network", color: "emerald" },
    { icon: GoogleIcon, title: "4.8 Google Rated", desc: "Loved by customers", color: "slate" },
    { icon: Car, title: "Well Maintained", desc: "Clean & sanitised cars", color: "orange" },
    { icon: WhatsAppIcon, title: "WhatsApp Support", desc: "Instant 24×7 help", color: "green" },
    { icon: Zap, title: "Fast Booking", desc: "Ready in minutes", color: "amber" },
    { icon: Layers, title: "Multiple Options", desc: "Hatchback to SUV", color: "violet" },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-8 overflow-hidden">
      <div className="container-custom">
        {/* Desktop grid / Mobile horizontal scroll — cards stretch to equal height */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-4 items-stretch no-scrollbar snap-x scroll-smooth pb-4 lg:pb-0">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex items-center gap-3 h-full min-w-[210px] lg:min-w-0 snap-center shrink-0 bg-white border border-slate-200/70 rounded-2xl px-4 py-3.5 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`grid place-items-center w-11 h-11 rounded-xl shrink-0 ring-1 transition-transform duration-300 group-hover:scale-105 ${CHIP[badge.color]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[13px] font-bold text-primary-950 leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-snug mt-0.5">{badge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
