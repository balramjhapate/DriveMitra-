"use client";

import { useState } from "react";
import { VEHICLES } from "@/constants/vehicles";
import { siteConfig } from "@/config/site";
import { Users, Briefcase, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InquiryModal from "@/components/forms/InquiryModal";

export default function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<{ name: string; price: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInquiry = (name: string, price: string) => {
    setSelectedVehicle({ name, price });
    setIsModalOpen(true);
  };

  const closeInquiry = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
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
                  <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 relative overflow-hidden flex flex-col items-center justify-center text-white/90">
                    {/* Black Price Badge (top-left) */}
                    <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-20">
                      {vehicle.price}
                    </div>

                    <div className="absolute top-3 right-3 flex gap-1.5 z-20">
                      {vehicle.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="text-[10px] font-bold bg-black/40 backdrop-blur-md text-accent-300 border border-white/10 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {vehicle.imageName ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/${vehicle.imageName}`}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6">
                        {/* Decorative abstract mesh overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent)] pointer-events-none" />
                        {/* stylized outline/icon vector text representation */}
                        <div className="text-center">
                          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Premium Rental</div>
                          <div className="text-xl font-bold font-heading text-white">
                            {vehicle.name.split(" ").slice(1).join(" ") || vehicle.name}
                          </div>
                          <div className="text-xs text-accent-400 font-medium mt-1">{vehicle.transmission} • {vehicle.fuel}</div>
                        </div>
                        {/* visual vector overlay graphic */}
                        <div className="absolute bottom-4 flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold bg-black/20 px-3 py-1 rounded-full border border-white/5">
                          <Zap className="w-3.5 h-3.5 text-accent-500" />
                          <span>Verified Partner Vehicle</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Vehicle Details */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold font-heading text-primary-950 mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider">
                      {vehicle.transmission} {vehicle.fuel} {vehicle.seats} Seater...
                    </p>
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

                {/* Card Action Buttons (Inquiry & Call Now) */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
                  <button
                    onClick={() => openInquiry(vehicle.name, vehicle.price || "")}
                    className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 rounded-btn text-sm shadow-soft transition-all active:scale-[0.98] text-center cursor-pointer"
                  >
                    Inquiry
                  </button>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-2.5 rounded-btn text-sm text-center transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVehicle && (
          <InquiryModal
            isOpen={isModalOpen}
            onClose={closeInquiry}
            carName={selectedVehicle.name}
            carPrice={selectedVehicle.price}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
