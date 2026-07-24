"use client";

import { SERVICES } from "@/constants/services";
import { Car, UserCheck, Plane, Compass, Building2, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "self-drive":
        return Car;
      case "taxi":
        return UserCheck;
      case "airport":
        return Plane;
      case "outstation":
        return Compass;
      case "corporate":
        return Building2;
      case "monthly":
        return Calendar;
      default:
        return Car;
    }
  };

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container-custom">
        {/* Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4"
          >
            Choose The Perfect Service For Every Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Whether you need a self-drive car, airport transfer or an outstation taxi, we&apos;ve got the right vehicle for your travel needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-card shadow-soft hover:shadow-medium border border-slate-100 p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Service Icon Box */}
                  <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-500" />
                  </div>
                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold font-heading text-primary-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-primary-900">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA Link */}
                <a
                  href="#booking-form"
                  onClick={handleScrollToForm}
                  className="w-full text-center bg-slate-900 hover:bg-accent-500 text-white font-bold py-3.5 rounded-btn transition-colors text-sm shadow-soft"
                >
                  {service.ctaText}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
