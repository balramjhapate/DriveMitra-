"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/site";
import { VEHICLES } from "@/constants/vehicles";
import { SERVICES } from "@/constants/services";
import { Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit mobile number.",
  }),
  service: z.string().min(1, { message: "Please select a service." }),
  vehicle: z.string().min(1, { message: "Please select a vehicle." }),
  date: z.string().min(1, { message: "Please select a travel date." }),
  time: z.string().min(1, { message: "Please select a pickup time." }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Get vehicle seats for WhatsApp template
    const selectedVehicle = VEHICLES.find((v) => v.name === data.vehicle);
    const seats = selectedVehicle ? `${selectedVehicle.seats} Seater` : "5 Seater";

    // Format WhatsApp message
    const waText = `Hello,

I would like to book a vehicle.

Travel Date: ${data.date} at ${data.time}
Pickup Location: Bhopal
Selected Service: ${data.service}
Preferred Vehicle: ${data.vehicle} (${seats})

Please share availability.`;

    const encodedMsg = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodedMsg}`;

    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSuccess(false);
      reset();
    }, 2000);
  };

  return (
    <div id="booking-form" className="bg-white rounded-card shadow-medium border border-slate-100 p-6 md:p-8 relative overflow-hidden">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-6"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"
            >
              <Check className="w-8 h-8" />
            </motion.div>
            <h3 className="text-xl font-bold font-heading text-primary-900 mb-2">Thank you!</h3>
            <p className="text-slate-600 text-sm max-w-xs mb-4">
              Your booking request has been received. Redirecting to WhatsApp to finalize your booking...
            </p>
            <Loader2 className="w-5 h-5 text-accent-500 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-2xl font-bold font-heading text-primary-900 mb-2">Get Instant Quote</h2>
      <p className="text-slate-500 text-sm mb-6">
        Fill in your travel details and our team will help you find the best available vehicle within minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
            Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="10-digit mobile number"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
            Select Service
          </label>
          <select
            id="service"
            defaultValue=""
            {...register("service")}
            className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.service
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
            }`}
          >
            <option value="" disabled>Select travel requirement</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
        </div>

        {/* Vehicle Selection */}
        <div>
          <label htmlFor="vehicle" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
            Select Vehicle
          </label>
          <select
            id="vehicle"
            defaultValue=""
            {...register("vehicle")}
            className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.vehicle
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
            }`}
          >
            <option value="" disabled>Select preferred vehicle</option>
            {VEHICLES.map((v) => (
              <option key={v.name} value={v.name}>{v.name} ({v.transmission})</option>
            ))}
          </select>
          {errors.vehicle && <p className="text-xs text-red-500 mt-1">{errors.vehicle.message}</p>}
        </div>

        {/* Date & Time Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
              Pickup Date
            </label>
            <input
              type="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("date")}
              className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.date
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
              }`}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="time" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1.5">
              Pickup Time
            </label>
            <select
              id="time"
              defaultValue=""
              {...register("time")}
              className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.time
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
              }`}
            >
              <option value="" disabled>Select time</option>
              {Array.from({ length: 24 }).map((_, index) => {
                const hour = index.toString().padStart(2, "0");
                return (
                  <option key={index} value={`${hour}:00`}>{`${hour}:00`}</option>
                );
              })}
            </select>
            {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time.message}</p>}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 px-6 rounded-form shadow-glow hover:shadow-medium transition-all active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Checking Availability...</span>
            </>
          ) : (
            <span>Get Best Price</span>
          )}
        </button>
      </form>
    </div>
  );
}
