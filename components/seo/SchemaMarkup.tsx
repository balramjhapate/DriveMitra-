import { siteConfig } from "@/config/site";
import { SERVICES } from "@/constants/services";

export default function SchemaMarkup() {
  // 1. Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"],
    },
  };

  // 2. LocalBusiness (CarRentalAgency) Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "CarRentalAgency",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/hero-self-drive-bhopal.jpg`,
    "@id": `${siteConfig.url}/#local-business`,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "priceRange": "₹1500 - ₹3800",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 12, dig bunglow chouraha",
      "addressLocality": "Bhopal",
      "addressRegion": "MP",
      "postalCode": "462038",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2324,
      "longitude": 77.4299,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Bhopal",
    },
  };

  // 3. Service Schemas
  const serviceSchemas = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": "Car Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
    },
    "areaServed": {
      "@type": "City",
      "name": "Bhopal",
    },
    "description": service.description,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
