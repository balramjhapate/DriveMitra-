"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Self Drive", href: "#services" },
    { name: "Taxi", href: "#services" },
    { name: "Airport", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 text-2xl font-bold font-heading text-primary-900 tracking-tight"
          >
            <span className="text-accent-500">Drive</span>Mitra
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-primary-800 hover:text-accent-500 font-medium transition-colors text-[15px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-primary-900 hover:text-accent-500 font-semibold transition-colors text-sm"
              aria-label="Call support"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-btn font-medium transition-all text-sm"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#booking-form"
              onClick={(e) => handleScrollTo(e, "#booking-form")}
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-btn shadow-glow transition-all text-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Call support"
            >
              <Phone className="w-5 h-5 text-accent-500" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white shadow-medium border-t border-slate-100 py-6 px-5 lg:hidden flex flex-col gap-5"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-primary-900 font-medium py-2 border-b border-slate-50 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-btn text-primary-900 font-semibold"
              >
                <Phone className="w-5 h-5 text-accent-500" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-emerald-500 py-3 rounded-btn text-emerald-600 font-semibold"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#booking-form"
                onClick={(e) => handleScrollTo(e, "#booking-form")}
                className="bg-accent-500 text-white text-center py-3.5 rounded-btn font-semibold shadow-glow"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
