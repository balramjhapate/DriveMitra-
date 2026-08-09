import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import HeroBackground from "@/components/hero/HeroBackground";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Phone, CheckCircle, Info, Star } from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Ertiga on Rent in Bhopal | 7 Seater Self Drive Car | Drive Mitra",
  description: "Book Maruti Ertiga on rent in Bhopal without driver. Best 7 seater self drive car for family trips. ₹2500/day. Zero hidden charges, 24/7 support.",
  alternates: {
    canonical: "/ertiga-on-rent-bhopal",
  },
};

const ertigaFaqs = [
  {
    question: "How much does an Ertiga on rent in Bhopal cost?",
    answer: "The price for a Maruti Ertiga on rent in Bhopal starts at ₹2500 per day without fuel. We also offer hourly and weekly packages with transparent pricing.",
  },
  {
    question: "Is it a self drive Ertiga Bhopal service?",
    answer: "Yes, Drive Mitra specializes in self drive cars. You will get the Maruti Ertiga to drive yourself. No driver will be provided.",
  },
  {
    question: "What documents are required to rent an Ertiga in Bhopal?",
    answer: "You need a valid original Driving License, Aadhar Card, and a refundable security deposit to book an Ertiga on rent in Bhopal.",
  },
  {
    question: "Can I get the Ertiga delivered to Bhopal Airport or RKMP?",
    answer: "Yes, we offer convenient pickup and drop-off services for our 7 seater self drive cars at both Raja Bhoj Airport (Bhopal Airport) and Rani Kamlapati (RKMP) Station.",
  }
];

export default function ErtigaPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft overflow-hidden border border-slate-100">
            {/* Header / Hero area for Ertiga */}
            <div className="p-8 md:p-12 border-b border-slate-100">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-4">
                Ertiga on Rent in Bhopal
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Looking for a spacious and comfortable family car? Book our premium Maruti Ertiga on rent in Bhopal. Perfect for family outings, weekend getaways, and group travel across Madhya Pradesh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-btn shadow-glow transition-all active:scale-[0.99] text-center w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                  Book Ertiga on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 border border-accent-500 hover:bg-accent-50 text-accent-600 font-bold px-7 py-3.5 rounded-btn transition-colors text-center w-full sm:w-auto text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>Call to Check Availability</span>
                </a>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="p-8 md:p-12 space-y-12">
              
              {/* Features Grid */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">Why Choose Maruti Ertiga Self Drive Bhopal?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                    <p className="text-sm text-slate-500">Seating</p>
                    <p className="font-bold text-primary-900 text-lg">7 Seater</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                    <p className="text-sm text-slate-500">Fuel</p>
                    <p className="font-bold text-primary-900 text-lg">Diesel/CNG</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                    <p className="text-sm text-slate-500">Mileage</p>
                    <p className="font-bold text-primary-900 text-lg">18+ kmpl</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                    <p className="text-sm text-slate-500">Luggage</p>
                    <p className="font-bold text-primary-900 text-lg">2-3 Bags</p>
                  </div>
                </div>
              </section>

              {/* Comprehensive SEO Text */}
              <section className="prose prose-slate max-w-none">
                <h3>The Best 7 Seater Self Drive Car in Bhopal</h3>
                <p>
                  When traveling with family or a group of friends, space and comfort are your top priorities. A <strong>7 seater self drive car in Bhopal</strong> like the Maruti Ertiga solves all your travel woes. Whether you're heading to the serene hills of Pachmarhi, exploring the historical wonders of Sanchi, or just need a comfortable ride for local city errands, the <strong>Ertiga self drive Bhopal</strong> service from Drive Mitra is unmatched in quality and affordability.
                </p>
                <p>
                  We maintain our vehicles meticulously, ensuring you get a sanitized, well-serviced, and fully insured <strong>Maruti Ertiga on rent in Bhopal</strong>. Say goodbye to the restrictions of traveling with a driver. Enjoy complete privacy and freedom on your journey.
                </p>

                <h3>Pricing & Deposit Details</h3>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-3 border border-slate-200 font-bold">Rental Duration</th>
                        <th className="p-3 border border-slate-200 font-bold">Estimated Cost</th>
                        <th className="p-3 border border-slate-200 font-bold">Kilometers Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-slate-200">Daily (24 Hours)</td>
                        <td className="p-3 border border-slate-200">₹2,500 - ₹3,000</td>
                        <td className="p-3 border border-slate-200">250 km</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-slate-200">Weekly (7 Days)</td>
                        <td className="p-3 border border-slate-200">Custom Package</td>
                        <td className="p-3 border border-slate-200">Unlimited Options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 flex items-start gap-2">
                  <Info className="w-5 h-5 shrink-0 mt-0.5 text-accent-500" />
                  <em>Note: A fully refundable security deposit of ₹3,000 to ₹5,000 is required at the time of pickup. Valid ID and Driving License are mandatory.</em>
                </p>

                <h3>Convenient Pickup Locations</h3>
                <ul>
                  <li><strong>MP Nagar & Arera Colony:</strong> Central pickup locations for city residents.</li>
                  <li><strong>Bhopal Airport (Raja Bhoj Airport):</strong> Step off your flight and right into your <strong>Ertiga on rent</strong>.</li>
                  <li><strong>RKMP Station:</strong> Get down at the station and start driving immediately.</li>
                </ul>

                <h3>Customer Reviews</h3>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-6">
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="italic text-slate-700">"I booked an Ertiga on rent in Bhopal for a family trip to Ujjain. The car was in pristine condition, and the AC cooling was perfect. Drive Mitra's service is top-notch. Highly recommended!"</p>
                  <p className="text-sm font-bold mt-2">- Rakesh Sharma</p>
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h3 className="text-2xl font-heading font-bold text-primary-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {ertigaFaqs.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-5 bg-white">
                      <h4 className="font-bold text-primary-900 text-lg mb-2">{faq.question}</h4>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
      <FAQSchema faqs={ertigaFaqs} />
    </>
  );
}
