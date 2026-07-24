"use client";

import { SERVICES } from "@/constants/services";
import {
  Car,
  UserCheck,
  Plane,
  Compass,
  Building2,
  Calendar,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const ICONS: Record<string, typeof Car> = {
  "self-drive": Car,
  taxi: UserCheck,
  airport: Plane,
  outstation: Compass,
  corporate: Building2,
  monthly: Calendar,
};

// Route each service to its most relevant section.
const HREFS: Record<string, string> = {
  "self-drive": "#fleet",
  taxi: "#taxi",
  airport: "#airport",
};

export default function Services() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 sm:py-24 scroll-mt-20">
      {/* Soft ambient glow for depth */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-100/40 blur-3xl" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-200/70 bg-accent-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent-600"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-4 font-heading text-3xl font-bold tracking-tight text-primary-950 sm:text-[2.6rem] sm:leading-[1.1]"
          >
            The Perfect Ride for Every Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[15px] leading-relaxed text-slate-600 sm:text-base"
          >
            Self-drive cars, chauffeured taxis, airport transfers or outstation trips — pick the
            service that fits your plans and we&apos;ll handle the rest.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.id] ?? Car;
            const href = HREFS[service.id] ?? "#booking-form";
            const featured = service.id === "self-drive";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`group relative flex flex-col overflow-hidden rounded-[26px] p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? "border border-accent-300/70 bg-gradient-to-b from-accent-50/70 to-white shadow-medium"
                    : "border border-slate-200/80 bg-white shadow-soft hover:border-accent-200 hover:shadow-medium"
                }`}
              >
                {/* Top-right marker: badge on the featured card, index number elsewhere */}
                {featured ? (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                ) : (
                  <span className="absolute right-7 top-6 font-heading text-4xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-accent-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}

                {/* Gradient icon tile */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 shadow-[0_10px_22px_-8px_rgba(249,115,22,0.6)] ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold text-primary-950">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.description}</p>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm font-semibold text-primary-900"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA: ghost → fill on hover (solid by default on the featured card) */}
                <a
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`mt-auto flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    featured
                      ? "bg-accent-500 text-white shadow-soft hover:bg-accent-600"
                      : "border border-slate-200 text-primary-900 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white"
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
