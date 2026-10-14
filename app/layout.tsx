import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ConversionListeners } from "@/components/conversion-listeners";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { TrackingHead } from "@/components/tracking-head";
import { business, hasProductionDomain, siteUrl, tracking } from "@/lib/business";
import { websiteGraph } from "@/lib/seo";
import "./globals.css";
import "./theme.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Appliance King | Used Appliances & Repair in Macon, GA",
    template: "%s",
  },
  description:
    "Buy used washers, dryers, ovens and refrigerators, book appliance repair, and arrange delivery or pickup in Macon, GA and cities within about 40 miles.",
  applicationName: business.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: hasProductionDomain ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <head>
        <TrackingHead />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
      </head>
      <body>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${tracking.metaPixelId}&ev=PageView&noscript=1`} />
        </noscript>
        <JsonLd data={websiteGraph()} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActions />
        <ConversionListeners />
      </body>
    </html>
  );
}
