import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const localPages = [
  "mp-nagar-self-drive-car-rental",
  "arera-colony-self-drive-car-rental",
  "bhopal-airport-car-rental",
  "rkmp-station-car-rental",
  "kolar-road-self-drive-car-rental",
  "7-seater-car-rental-bhopal",
  "automatic-car-rental-bhopal",
  "ertiga-self-drive-bhopal"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/ertiga-on-rent-bhopal`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const localRoutes = localPages.map((page) => ({
    url: `${siteConfig.url}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...localRoutes];
}
