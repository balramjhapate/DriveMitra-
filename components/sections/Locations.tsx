"use client";

import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Locations() {
  const primaryLocations = [
    "M.P. Nagar",
    "New Market",
    "Habibganj",
    "Rani Kamlapati Station",
    "Bhopal Airport (BHO)",
    "Arera Colony",
    "Kolar Road",
    "Hoshangabad Road",
    "Bawadia Kalan",
    "Bagsewaniya",
    "Ashima Mall",
    "BHEL",
    "Ayodhya Bypass",
    "Indrapuri",
    "Lalghati",
    "Shahpura",
    "Gulmohar",
    "Kohefiza",
    "Govindpura",
    "Chuna Bhatti",
    "Bhopal Railway Station",
    "Karond",
    "Old Bhopal",
    "Bairagarh",
    "Katara Hills",
  ];

  const futureCities = ["Indore", "Ujjain", "Sehore", "Jabalpur"];



  return (
    <section id="locations" className="py-16 sm:py-24 bg-white scroll-mt-20">
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
            Serving Across Bhopal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Quick vehicle availability across major residential, commercial and travel locations.
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {primaryLocations.map((location, index) => (
            <motion.div
              key={location}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="flex items-center gap-2.5 p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all group"
            >
              <MapPin className="w-4 h-4 text-accent-500 group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-xs font-semibold text-primary-900 truncate">{location}</span>
            </motion.div>
          ))}
        </div>

        {/* Future Expansion Segment */}
        <div className="bg-slate-50 border border-slate-100 rounded-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
              <Globe className="w-6 h-6 text-primary-800" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-950 text-base mb-1">
                Future Expansion Cities
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-md">
                We are actively setting up verified partner networks to bring premium self-drive and taxi rentals to other key cities in Madhya Pradesh soon.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {futureCities.map((city) => (
              <span
                key={city}
                className="text-[11px] font-bold bg-white text-slate-500 border border-slate-200/80 px-3.5 py-1.5 rounded-full"
              >
                {city} (Soon)
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
