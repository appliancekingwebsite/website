import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { hasProductionDomain, siteUrl } from "@/lib/business";
import { locations, services } from "@/lib/content";
import { shopCategories } from "@/lib/shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/residential-services",
    "/commercial-services",
    "/about",
    "/faq",
    "/book",
    "/contact",
    "/privacy",
    "/terms",
    "/used-appliances",
    "/delivery-pickup",
    "/sell-your-appliance",
    "/service-areas",
    "/articles",
  ];
  const paths = [
    ...staticPaths,
    ...shopCategories.map((category) => `/used-appliances/${category.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...locations.map((location) => `/service-areas/${location.slug}`),
    ...articles.map((article) => `/articles/${article.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-10-14"),
    changeFrequency: path.startsWith("/articles") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path.includes("/services/") ? 0.8 : 0.7,
    ...(hasProductionDomain ? {} : {}),
  }));
}
