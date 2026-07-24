"use client";

import { TESTIMONIALS } from "@/constants/faq";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const colors = [
    "from-orange-500 to-amber-500",
    "from-blue-600 to-indigo-600",
    "from-emerald-500 to-teal-500",
  ];

  return (
    <section className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4"
          >
            Loved By Travelers Across Bhopal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Thousands of happy journeys start with a trusted booking experience.
          </motion.p>
        </div>

        {/* Testimonials Grid / Mobile horizontal scroll */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 no-scrollbar snap-x scroll-smooth pb-6 lg:pb-0">
          {TESTIMONIALS.map((t, index) => {
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-card shadow-soft hover:shadow-medium border border-slate-100 p-8 flex flex-col justify-between min-w-[280px] sm:min-w-[340px] lg:min-w-0 snap-center shrink-0 transition-all duration-300"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-100" />
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                {/* Customer Info Strip */}
                <div className="flex items-center gap-3.5 pt-6 border-t border-slate-50 mt-auto">
                  {/* Avatar Initials Gradient */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-sm tracking-wider shrink-0 shadow-soft`}>
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary-950 text-sm leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                      {t.purpose} • {t.vehicle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
