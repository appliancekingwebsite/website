import type { Metadata } from "next";
import { business, hasProductionDomain, siteUrl } from "@/lib/business";
import type { ArticleData } from "@/lib/articles";
import type { FaqItem, LocationPageData, ServicePageData } from "@/lib/content";
import type { ShopCategory } from "@/lib/shop";

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
  sameAs: [business.facebookUrl],
};

export const localBusinessSchema = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Store"],
  "@id": `${siteUrl}#localbusiness`,
  name: business.name,
  description: business.description,
  url: siteUrl,
  image: `${siteUrl}${business.ogImagePath}`,
  logo: `${siteUrl}${business.logoPath}`,
  telephone: "+14782737539",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.baseCity,
    addressRegion: business.stateCode,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  hasMap: business.address.mapUrl,
  sameAs: [business.facebookUrl],
  geo: { "@type": "GeoCoordinates", latitude: 32.8407, longitude: -83.6324 },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 32.8407, longitude: -83.6324 },
      geoRadius: 64374,
    },
    ...business.normalAreas.map((name) => ({
      "@type": "City",
      name: `${name}, Georgia`,
    })),
  ],
  priceRange: "$$",
  knowsAbout: [
    "Used washers",
    "Used dryers",
    "Used ovens and ranges",
    "Used refrigerators",
    "Appliance repair",
    "Appliance delivery and pickup",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance King used appliances and services",
    itemListElement: [
      ["Used washers", "/used-appliances/washers"],
      ["Used dryers", "/used-appliances/dryers"],
      ["Used ovens and ranges", "/used-appliances/ovens-ranges"],
      ["Used refrigerators", "/used-appliances/refrigerators"],
      ["Appliance repair", "/services/appliance-repair"],
      ["Delivery and pickup", "/delivery-pickup"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      url: `${siteUrl}${path}`,
      itemOffered: { "@type": "Service", name },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+14782737539",
    contactType: "customer service",
    areaServed: "US-GA",
    availableLanguage: "English",
  },
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
        inLanguage: "en-US",
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book an Appliance King call",
          target: {
            "@type": "EntryPoint",
            urlTemplate: business.bookingUrl,
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
        },
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

export function homeGraph(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Used Appliances, Repair, Delivery & Pickup in Macon, GA",
        about: { "@id": `${siteUrl}#localbusiness` },
        isPartOf: { "@id": `${siteUrl}#website` },
        dateModified: "2026-10-14",
      },
      faqSchema(faqs),
    ],
  };
}

export function shopGraph(category: ShopCategory) {
  const path = `/used-appliances/${category.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}${path}#webpage`,
        url: `${siteUrl}${path}`,
        name: category.h1,
        description: category.description,
        dateModified: "2026-10-14",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#localbusiness` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}${category.hero.src}`,
          caption: category.hero.alt,
        },
      },
      {
        "@type": "ImageGallery",
        name: `${category.name} at Appliance King`,
        image: category.gallery.map((img) => ({
          "@type": "ImageObject",
          contentUrl: `${siteUrl}${img.src}`,
          caption: img.alt,
        })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Used Appliances", path: "/used-appliances" },
        { name: category.name, path },
      ]),
      faqSchema(category.faq),
    ],
  };
}

export function deliveryGraph(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      {
        "@type": "Service",
        "@id": `${siteUrl}/delivery-pickup#service`,
        name: "Appliance delivery and pickup",
        serviceType: "Appliance delivery and pickup",
        provider: { "@id": `${siteUrl}#localbusiness` },
        areaServed: business.normalAreas.map((name) => ({ "@type": "City", name: `${name}, Georgia` })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Delivery & Pickup", path: "/delivery-pickup" },
      ]),
      faqSchema(faqs),
    ],
  };
}
