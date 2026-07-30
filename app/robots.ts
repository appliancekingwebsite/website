import type { MetadataRoute } from "next";
import { hasProductionDomain, siteUrl } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return hasProductionDomain
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
