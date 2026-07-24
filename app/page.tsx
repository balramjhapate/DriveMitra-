import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TaxiService from "@/components/sections/TaxiService";
import AirportService from "@/components/sections/AirportService";
import Fleet from "@/components/sections/Fleet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BookingSteps from "@/components/sections/BookingSteps";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 01 Hero Section */}
      <Hero />

      {/* 02 TrustBar Badge strip */}
      <TrustBar />

      {/* 03 Service Categories Grid */}
      <Services />

      {/* 03a Taxi With Driver */}
      <TaxiService />

      {/* 03b Airport Pickup & Drop */}
      <AirportService />

      {/* 04 Fleet Grid / Horizontal Swipe */}
      <Fleet />

      {/* 05 Why Choose Us Benefits */}
      <WhyChooseUs />

      {/* 06 Booking Steps Flow */}
      <BookingSteps />

      {/* 07 Popular Locations grid */}
      <Locations />

      {/* 08 Testimonials Review cards */}
      <Testimonials />

      {/* 09 FAQ Accordion group */}
      <FAQ />

      {/* 10 Final CTA segment */}
      <FinalCTA />
    </>
  );
}
