"use client";

import { ShieldCheck, Star, Car, Zap, Layers } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

export default function TrustBar() {
  const badges = [
    { icon: ShieldCheck, title: "Verified Partners", desc: "100% trusted rental network" },
    { icon: Star, title: "4.8 Google Rated", desc: "Highly loved by customers" },
    { icon: Car, title: "Well Maintained", desc: "Clean & sanitised vehicles" },
    { icon: WhatsAppIcon, title: "WhatsApp Support", desc: "Instant help when you need" },
    { icon: Zap, title: "Fast Booking", desc: "Confirm your ride in minutes" },
    { icon: Layers, title: "Multiple Options", desc: "Hatchbacks, Sedans, SUVs" },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-10 overflow-hidden">
      <div className="container-custom">
        {/* Desktop grid layout / Mobile horizontal scroll */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-6 no-scrollbar snap-x scroll-smooth pb-4 lg:pb-0">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 min-w-[200px] lg:min-w-0 snap-center shrink-0"
              >
                <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-soft shrink-0">
                  <Icon className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-950">{badge.title}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{badge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
