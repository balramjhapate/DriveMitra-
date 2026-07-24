"use client";

import { FileText, Car, CheckCircle2, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingSteps() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Share Requirements",
      desc: "Tell us your travel plan. Specify the date, preferred vehicle, and target service type.",
    },
    {
      number: "02",
      icon: Car,
      title: "Get Best Match",
      desc: "Our booking team instantly checks availability from verified rental partners.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Confirm Booking",
      desc: "Receive clear transparent pricing structure, deposit policy and confirm your booking.",
    },
    {
      number: "04",
      icon: Navigation,
      title: "Pickup & Drive",
      desc: "Collect your clean, insured vehicle from partner location or get chauffeur pickup.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 scroll-mt-20">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary-950 tracking-tight mb-4"
          >
            Book Your Ride In Four Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Our booking workflow is designed to be frictionless, fast, and optimized for mobile devices.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-start relative group"
              >
                {/* Step Connector Line for Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-slate-200 group-hover:bg-accent-300 transition-colors -z-10" />
                )}

                {/* Step number badge & icon */}
                <div className="flex items-center justify-between w-full mb-6 relative">
                  <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-soft group-hover:shadow-medium group-hover:border-accent-100 transition-all">
                    <Icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <span className="text-4xl font-extrabold font-heading text-slate-200 group-hover:text-accent-100 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold font-heading text-primary-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
