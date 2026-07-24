"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/site";
import { supabase } from "@/config/supabase";
import { X, Loader2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const inquirySchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name." }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit mobile number.",
  }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
  fromDate: z.string().min(1, { message: "Please select a start date." }),
  toDate: z.string().min(1, { message: "Please select an end date." }),
  message: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  carPrice: string;
}

export default function InquiryModal({ isOpen, onClose, carName, carPrice }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      serviceType: undefined,
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          full_name: data.fullName,
          mobile: data.mobile,
          service_type: data.serviceType,
          from_date: data.fromDate,
          to_date: data.toDate,
          message: data.message || null,
          car_name: carName,
          car_price: carPrice,
        },
      ]);

      if (error) {
        console.error("Error inserting inquiry:", error);
        alert("Failed to save inquiry. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);

      // Format WhatsApp message
      const waText = `Hello,

I want to inquire about a car booking.

Car: ${carName}
Rate: ${carPrice}
Customer Name: ${data.fullName}
Mobile: ${data.mobile}
Service Type: ${data.serviceType}
From Date: ${data.fromDate}
To Date: ${data.toDate}
Message: ${data.message || "No additional message"}

Please confirm availability.`;

      const encodedMsg = encodeURIComponent(waText);
      const waUrl = `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodedMsg}`;

      window.open(waUrl, "_blank");
      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-card shadow-medium border border-slate-100 w-full max-w-lg overflow-hidden relative z-10 flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2 text-primary-950 font-bold font-heading text-base">
            <Calendar className="w-5 h-5 text-accent-500" />
            <span>Book Your Ride!</span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
          {/* Read-only Car & Price Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Selected Car
              </label>
              <input
                type="text"
                readOnly
                value={carName}
                className="w-full px-4 py-3 rounded-form border border-slate-200 bg-slate-100 text-sm font-semibold text-primary-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Rate /day
              </label>
              <input
                type="text"
                readOnly
                value={carPrice.replace("/day", "")}
                className="w-full px-4 py-3 rounded-form border border-slate-200 bg-slate-100 text-sm font-semibold text-primary-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              {...register("fullName")}
              className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile"
              {...register("mobile")}
              className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.mobile
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
              }`}
            />
            {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>}
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
              Service Type
            </label>
            <select
              id="serviceType"
              defaultValue=""
              {...register("serviceType")}
              className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.serviceType
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
              }`}
            >
              <option value="" disabled>Select</option>
              <option value="Self Drive">Self Drive</option>
              <option value="With Driver">With Driver</option>
            </select>
            {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType.message}</p>}
          </div>

          {/* Dates grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="fromDate" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                min={new Date().toISOString().split("T")[0]}
                {...register("fromDate")}
                className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.fromDate
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
                }`}
              />
              {errors.fromDate && <p className="text-xs text-red-500 mt-1">{errors.fromDate.message}</p>}
            </div>

            <div>
              <label htmlFor="toDate" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                min={new Date().toISOString().split("T")[0]}
                {...register("toDate")}
                className={`w-full px-4 py-3 rounded-form border text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.toDate
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-accent-500 focus:ring-accent-100"
                }`}
              />
              {errors.toDate && <p className="text-xs text-red-500 mt-1">{errors.toDate.message}</p>}
            </div>
          </div>

          {/* Any Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-primary-900 uppercase tracking-wider mb-1">
              Any Message (Optional)
            </label>
            <textarea
              id="message"
              placeholder="Any Message"
              rows={3}
              {...register("message")}
              className="w-full px-4 py-3 rounded-form border border-slate-200 text-sm text-primary-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-accent-500 focus:ring-accent-100 transition-all resize-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-btn border border-slate-350 text-slate-500 hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#17a2b8] hover:bg-[#138496] text-white font-bold px-6 py-2.5 rounded-btn text-sm shadow-soft transition-all active:scale-[0.99] flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
