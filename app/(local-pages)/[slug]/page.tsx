import { notFound } from "next/navigation";
import { Metadata } from "next";
import HeroBackground from "@/components/hero/HeroBackground";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const validLocalPages = [
  "mp-nagar-self-drive-car-rental",
  "arera-colony-self-drive-car-rental",
  "bhopal-airport-car-rental",
  "rkmp-station-car-rental",
  "kolar-road-self-drive-car-rental",
  "7-seater-car-rental-bhopal",
  "automatic-car-rental-bhopal",
  "ertiga-self-drive-bhopal"
];

function getPageDetails(slug: string) {
  const formattedLocation = slug
    .replace("-self-drive-car-rental", "")
    .replace("-car-rental", "")
    .replace("-self-drive-bhopal", "")
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const isCategory = slug.includes("7-seater") || slug.includes("automatic") || slug.includes("ertiga-self");
  
  const title = isCategory 
    ? `${formattedLocation} on Rent in Bhopal | Best Self Drive Cars | Drive Mitra`
    : `Self Drive Car Rental in ${formattedLocation} Bhopal | Drive Mitra`;
    
  const description = isCategory
    ? `Looking for ${formattedLocation.toLowerCase()} on rent in Bhopal? Book well-maintained self drive cars at affordable rates with Drive Mitra. Instant booking, 24/7 support.`
    : `Rent a self drive car near ${formattedLocation}, Bhopal. Choose from Hatchbacks, Sedans, and SUVs. Best prices, zero hidden charges. Book now via WhatsApp!`;

  const h1 = isCategory 
    ? `${formattedLocation} on Rent in Bhopal`
    : `Self Drive Car Rental in ${formattedLocation}`;

  return { title, description, h1, formattedLocation };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!validLocalPages.includes(resolvedParams.slug)) {
    return {};
  }
  const details = getPageDetails(resolvedParams.slug);
  return {
    title: details.title,
    description: details.description,
    alternates: {
      canonical: `/${resolvedParams.slug}`,
    }
  };
}

export async function generateStaticParams() {
  return validLocalPages.map((slug) => ({
    slug,
  }));
}

export default async function LocalSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  if (!validLocalPages.includes(resolvedParams.slug)) {
    notFound();
  }

  const { h1, formattedLocation } = getPageDetails(resolvedParams.slug);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: formattedLocation, url: `${siteConfig.url}/${resolvedParams.slug}` }
  ];

  return (
    <>
      <div className="pt-24 pb-12 bg-white min-h-screen">
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-950 mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Experience the freedom of driving yourself. Drive Mitra provides top-quality, sanitized self-drive cars with absolute transparent pricing. Skip the driver and take control of your journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-btn shadow-glow transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                Book Now on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 border border-accent-500 hover:bg-accent-50 text-accent-600 font-bold px-7 py-3.5 rounded-btn transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="prose prose-slate max-w-4xl mx-auto mt-12">
            <h2>Why Rent from Drive Mitra?</h2>
            <ul>
              <li><strong>Zero Hidden Charges:</strong> What you see is what you pay.</li>
              <li><strong>Doorstep Delivery:</strong> Available across major areas including {formattedLocation}.</li>
              <li><strong>24/7 Roadside Assistance:</strong> Drive with peace of mind.</li>
              <li><strong>Wide Range of Cars:</strong> From compact hatchbacks like Swift to spacious 7-seaters like Ertiga.</li>
            </ul>
            <p>
              Whether you are an outstation traveler arriving in Bhopal or a local resident planning a weekend getaway, our seamless booking process ensures you get the keys in minutes. Just choose your car, submit your documents on WhatsApp, and drive away!
            </p>
          </div>
        </div>
      </div>
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
