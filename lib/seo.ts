import type { Metadata } from "next";
import { business, hasProductionDomain, siteUrl } from "@/lib/business";
import type { ArticleData } from "@/lib/articles";
import type { FaqItem, LocationPageData, ServicePageData } from "@/lib/content";

export function pageMetadata({
  title,
  description,
  path,
  image = business.ogImagePath,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteUrl);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: hasProductionDomain ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${business.name} — Macon, Georgia` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: business.name,
  url: siteUrl,
  logo: `${siteUrl}${business.logoPath}`,
  telephone: business.phoneDisplay,
};

export const localBusinessSchema = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}#localbusiness`,
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}${business.ogImagePath}`,
  telephone: business.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.baseCity,
    addressRegion: business.state,
    addressCountry: "US",
  },
  areaServed: business.normalAreas.map((name) => ({
    "@type": "City",
    name: `${name}, Georgia`,
  })),
  priceRange: "$$",
};

export function websiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: business.name,
        publisher: { "@id": `${siteUrl}#organization` },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceGraph(service: ServicePageData) {
  const path = `/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "WebPage",
        "@id": `${siteUrl}${path}#webpage`,
        url: `${siteUrl}${path}`,
        name: service.h1,
        description: service.description,
        isPartOf: { "@id": `${siteUrl}#website` },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}${path}#service`,
        name: service.name,
        description: service.directAnswer,
        provider: { "@id": `${siteUrl}#localbusiness` },
        areaServed: { "@type": "City", name: "Macon, Georgia" },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.name, path },
      ]),
      faqSchema(service.faq),
    ],
  };
}

export function locationGraph(location: LocationPageData) {
  const path = `/service-areas/${location.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "WebPage",
        "@id": `${siteUrl}${path}#webpage`,
        url: `${siteUrl}${path}`,
        name: location.h1,
        description: location.description,
        about: { "@id": `${siteUrl}#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
        { name: location.city, path },
      ]),
      faqSchema(location.faq),
    ],
  };
}

export function articleGraph(article: ArticleData) {
  const path = `/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "Article",
        "@id": `${siteUrl}${path}#article`,
        headline: article.h1,
        description: article.description,
        datePublished: article.published,
        dateModified: article.updated,
        author: { "@id": `${siteUrl}#organization` },
        publisher: { "@id": `${siteUrl}#organization` },
        mainEntityOfPage: `${siteUrl}${path}`,
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/articles" },
        { name: article.h1, path },
      ]),
      faqSchema(article.faqs),
    ],
  };
}
