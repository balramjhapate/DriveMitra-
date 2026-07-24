export interface Vehicle {
  name: string;
  transmission: "Manual" | "Automatic";
  fuel: "Petrol" | "Diesel" | "CNG";
  seats: number;
  luggage: string;
  price?: string; // e.g. "Starting @ ₹1,500/day"
  tags: string[]; // e.g. ["Most Booked", "Family Favourite"]
  suitableFor: string;
  imageName: string; // references file name in /images/fleet/
}

export interface Review {
  name: string;
  city: string;
  vehicle: string;
  rating: number;
  comment: string;
  purpose: string;
  imageName: string; // references file name in /images/customers/
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  imageName: string; // references file name in /images/services/
}
