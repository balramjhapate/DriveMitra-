import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Fleet from "@/components/sections/Fleet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AirportService from "@/components/sections/AirportService";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import BookingSteps from "@/components/sections/BookingSteps";
import Services from "@/components/sections/Services";
import TaxiService from "@/components/sections/TaxiService";
import Locations from "@/components/sections/Locations";
import FAQSchema from "@/components/seo/FAQSchema";
import { FAQS } from "@/constants/faq";

export default function Home() {
  return (
    <>
      {/* 01 Hero Section */}
      <Hero />

      {/* 02 TrustBar Badge strip */}
      <TrustBar />

      {/* 03 SEO Intro Text */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="prose prose-slate max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Experience Premium Self Drive Car Rental in Bhopal</h2>
            <p>
              Looking for a reliable and affordable <strong>self drive car in Bhopal</strong>? Drive Mitra is your ultimate destination for hassle-free car rentals without a driver. Whether you are planning a weekend getaway to Pachmarhi, a business trip across Madhya Pradesh, or simply need a spacious <strong>Ertiga on rent in Bhopal</strong> for a family outing, we have got you covered with our sanitized and well-maintained fleet.
            </p>
            <p>
              We understand that privacy, comfort, and freedom are paramount when you travel. That is why our <strong>self drive car rental Bhopal</strong> service offers transparent pricing with absolutely zero hidden charges. From compact hatchbacks to luxurious SUVs and 7-seater cars, you can choose the perfect vehicle that fits your budget and requirements. 
            </p>
            <p>
              Enjoy the convenience of instant booking, 24/7 dedicated roadside assistance, and flexible pickup options including <strong>Bhopal Airport car rental</strong> and <strong>RKMP station car rental</strong> drop-offs. Skip the hassle of negotiating with taxi drivers and take control of your journey today with Drive Mitra.
            </p>
          </div>
        </div>
      </section>

      {/* 04 Fleet Grid (Popular cars) */}
      <Fleet />

      {/* 05 Why Choose Us */}
      <WhyChooseUs />

      {/* 06 Airport & RKMP pickup */}
      <AirportService />
      <TaxiService />
      <Services />

      {/* 07 Booking Steps */}
      <BookingSteps />
      
      {/* 08 Locations */}
      <Locations />

      {/* 09 Customer reviews */}
      <Testimonials />

      {/* 10 FAQ */}
      <FAQ />

      {/* 11 Final CTA */}
      <FinalCTA />

      {/* SEO Schema */}
      <FAQSchema faqs={FAQS} />
    </>
  );
}
