import { siteConfig } from "@/config/site";
import { Star, Mail, MapPin, Clock, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Self Drive Cars", href: "#services" },
    { name: "Taxi Service", href: "#services" },
    { name: "Airport Transfer", href: "#services" },
    { name: "Outstation Cab", href: "#services" },
    { name: "Corporate Rental", href: "#services" },
    { name: "Monthly Rental", href: "#services" },
  ];

  const locations = [
    { name: "MP Nagar", href: "#locations" },
    { name: "Habibganj", href: "#locations" },
    { name: "Bhopal Airport", href: "#locations" },
    { name: "Arera Colony", href: "#locations" },
    { name: "Kolar Road", href: "#locations" },
    { name: "Shahpura", href: "#locations" },
    { name: "New Market", href: "#locations" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-28 md:pb-12 border-t border-slate-900">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <a href="#home" className="text-2xl font-bold font-heading text-white tracking-tight">
            <span className="text-accent-500">Drive</span>Mitra
          </a>
          <p className="text-sm leading-relaxed text-slate-400">
            India&apos;s premium car rental platform in Bhopal. Offering self-drive cars, verified chauffeurs, outstation cabs, and reliable airport pick-and-drop transfers with absolute transparent pricing.
          </p>
          {/* Trust Rating */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-btn w-fit">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white text-xs font-semibold">{siteConfig.rating} ({siteConfig.ratingCount} reviews)</span>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Our Services</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {services.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Serving Across Bhopal</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {locations.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Get In Touch</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent-500 shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="w-5 h-5 text-emerald-500 shrink-0" />
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent-500 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white">Office Hours:</p>
                <p className="text-xs">{siteConfig.workingHours}</p>
                <p className="text-xs text-emerald-400 mt-1">{siteConfig.supportHours}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom mt-16 pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {currentYear} {siteConfig.name} Bhopal. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
