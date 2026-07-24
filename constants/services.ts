import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "self-drive",
    title: "Self Drive Cars",
    description: "Enjoy complete flexibility with reliable self-drive vehicles for local travel, weekends and road trips.",
    features: ["Freedom to Drive", "Flexible Duration", "Multiple Vehicle Options"],
    ctaText: "Explore Cars",
    imageName: "self-drive.webp",
  },
  {
    id: "taxi",
    title: "Taxi With Driver",
    description: "Sit back and relax while experienced drivers take care of your journey.",
    features: ["Experienced Drivers", "Comfortable Ride", "Local & Outstation"],
    ctaText: "Book Taxi",
    imageName: "taxi-driver.webp",
  },
  {
    id: "airport",
    title: "Airport Pickup & Drop",
    description: "Professional airport pickup and drop services with timely arrivals.",
    features: ["On-Time Pickup", "Flight Friendly", "Reliable Service"],
    ctaText: "Book Airport Transfer",
    imageName: "airport-taxi.webp",
  },
  {
    id: "outstation",
    title: "Outstation Trips",
    description: "Comfortable cars for family vacations, business trips and long-distance travel.",
    features: ["Long Distance", "Family Friendly", "Comfortable Vehicles"],
    ctaText: "Plan Your Trip",
    imageName: "outstation.webp",
  },
  {
    id: "corporate",
    title: "Corporate Rental",
    description: "Business travel with professional service and monthly billing options.",
    features: ["Business Travel", "Monthly Billing", "Professional Service"],
    ctaText: "Contact Sales",
    imageName: "corporate.webp",
  },
  {
    id: "monthly",
    title: "Monthly Rental",
    description: "Long term plans with flexible pricing, zero maintenance hassle, and multiple cars.",
    features: ["Long Term Plans", "Flexible Pricing", "Multiple Cars"],
    ctaText: "View Plans",
    imageName: "monthly-rental.webp",
  },
];
