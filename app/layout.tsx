import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Public_Sans } from "next/font/google";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { business, hasProductionDomain, siteUrl } from "@/lib/business";
import { websiteGraph } from "@/lib/seo";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Appliance King | Appliance Repair in Macon, GA",
    template: "%s",
  },
  description:
    "Appliance repair, installation, dryer-vent, handyman, buy-and-sell, residential, and commercial service in Macon, Georgia.",
  applicationName: business.name,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  robots: hasProductionDomain ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={websiteGraph()} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActions />
      </body>
    </html>
  );
}
