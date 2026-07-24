"use client";

import { siteConfig } from "@/config/site";
import { Phone, Calendar } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function StickyMobileCTA() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-medium py-3.5 px-4 lg:hidden grid grid-cols-3 gap-2.5">
      {/* Call button */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex flex-col items-center justify-center gap-1 border border-slate-200 py-2.5 rounded-btn text-primary-900 font-semibold text-xs active:bg-slate-100 transition-colors"
      >
        <Phone className="w-5 h-5 text-accent-500" />
        <span>Call</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 border border-emerald-200 py-2.5 rounded-btn text-emerald-600 font-semibold text-xs active:bg-emerald-50 transition-colors"
      >
        <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
        <span>WhatsApp</span>
      </a>

      {/* Book Now button */}
      <a
        href="#booking-form"
        onClick={handleScrollToForm}
        className="flex flex-col items-center justify-center gap-1 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xs py-2.5 rounded-btn shadow-glow transition-all active:scale-[0.98]"
      >
        <Calendar className="w-5 h-5 text-white" />
        <span>Book Now</span>
      </a>
    </div>
  );
}
