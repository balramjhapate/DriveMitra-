"use client";

import { useState } from "react";
import { FAQS } from "@/constants/faq";
import { ChevronDown, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Have questions about booking self-drive cars, document verifications, or pricing policies? Find quick answers below.
          </motion.p>
        </div>

        {/* FAQ layout: Left - accordion, Right - helpline box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-100 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-primary-950 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent-500" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Helpline Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-card p-6 sm:p-8 text-white relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold font-heading mb-3 relative z-10">Still Have Questions?</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
              Can&apos;t find the answer you are looking for? Our friendly reservation team is here to assist you with booking details, vendor policy, or custom outstation bookings.
            </p>

            <div className="space-y-3 relative z-10">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-3 rounded-btn text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 px-4 py-3 rounded-btn text-emerald-400 text-sm font-semibold transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Assistant</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
