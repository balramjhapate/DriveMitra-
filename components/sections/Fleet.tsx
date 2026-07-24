"use client";

import { VEHICLES } from "@/constants/vehicles";
import { Users, Briefcase, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Fleet() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>, vehicleName: string) => {
    e.preventDefault();
    const element = document.querySelector("#booking-form");
    if (element) {
      // Set the select element value dynamically
      const selectElement = document.querySelector("#vehicle") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = vehicleName;
        // Trigger onChange event for react-hook-form
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fleet" className="py-24 bg-slate-50/50 scroll-mt-20">
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
            Popular Vehicles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-600 text-[15px] sm:text-base leading-relaxed"
          >
            Choose from our most booked vehicles for family trips, airport transfers, business travel and weekend getaways.
          </motion.p>
        </div>

        {/* Fleet Grid / Horizontal Swipe on Mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 no-scrollbar snap-x scroll-smooth pb-6 lg:pb-0">
          {VEHICLES.map((vehicle, index) => {
            return (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-card shadow-soft hover:shadow-medium border border-slate-100 p-6 flex flex-col justify-between min-w-[290px] sm:min-w-[340px] lg:min-w-0 snap-center shrink-0 transition-all duration-300"
              >
                <div>
                  {/* Stylized premium schematic vector box in place of physical image to look premium like Stripe/Linear */}
                  <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl mb-6 relative overflow-hidden flex flex-col items-center justify-center p-6 text-white/90">
                    {/* Decorative abstract mesh overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent)] pointer-events-none" />
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      {vehicle.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold bg-white/10 backdrop-blur-md text-accent-300 border border-white/10 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* stylized outline/icon vector text representation */}
                    <div className="text-center">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Premium Rental</div>
                      <div className="text-xl font-bold font-heading text-white">{vehicle.name.split(" ").slice(2).join(" ") || vehicle.name}</div>
                      <div className="text-xs text-accent-400 font-medium mt-1">{vehicle.transmission} • {vehicle.fuel}</div>
                    </div>
                    {/* visual vector overlay graphic */}
                    <div className="absolute bottom-4 flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold bg-black/20 px-3 py-1 rounded-full border border-white/5">
                      <Zap className="w-3.5 h-3.5 text-accent-500" />
                      <span>Verified Partner Vehicle</span>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold font-heading text-primary-950">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Specs Strip */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-primary-900 border-y border-slate-50 py-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{vehicle.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <span className="text-[11px] bg-slate-100 text-primary-800 px-2 py-0.5 rounded-md uppercase tracking-wider font-bold">
                        {vehicle.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Suitability text */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {vehicle.suitableFor}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-50 mt-auto">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rental Rate</p>
                    <p className="text-sm font-bold text-primary-950 font-heading">{vehicle.price}</p>
                  </div>
                  <a
                    href="#booking-form"
                    onClick={(e) => handleScrollToForm(e, vehicle.name)}
                    className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-3 rounded-btn text-xs shadow-glow transition-all active:scale-[0.98]"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
