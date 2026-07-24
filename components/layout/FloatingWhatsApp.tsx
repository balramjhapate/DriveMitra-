"use client";

import { siteConfig } from "@/config/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 bottom-20 right-5 lg:bottom-6 lg:right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-glow flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Outer Rings Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
      
      {/* Icon */}
      <WhatsAppIcon className="w-6.5 h-6.5" />
      
      {/* Tooltip on Desktop hover */}
      <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden lg:inline-block">
        Chat with Us
      </span>
    </a>
  );
}
