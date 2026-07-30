export const business = {
  name: "Appliance King",
  legalName: "Appliance King",
  description:
    "Appliance repair, installation, used appliance sales, dryer vent service, and practical handyman support for Macon and nearby Middle Georgia communities.",
  phoneDisplay: "478-273-7539",
  phoneHref: "tel:+14782737539",
  bookingUrl: "https://calendly.com/applianceking-estimate/estimate",
  bookingEmbedUrl:
    "https://calendly.com/applianceking-estimate/estimate?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff",
  baseCity: "Macon",
  state: "Georgia",
  stateCode: "GA",
  country: "US",
  normalAreas: [
    "Macon",
    "Warner Robins",
    "Gray",
    "Byron",
    "Forsyth",
    "Centerville",
    "Lizella",
    "Bolingbroke",
    "Juliette",
    "Dry Branch",
  ],
  extendedAreaNote:
    "Larger or special projects in Atlanta may be considered by request and availability.",
  logoPath: "/appliance-king-logo.png",
  modelPath: "/appliance-king-logo.glb",
  ogImagePath: "/og-image.jpg",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const hasProductionDomain =
  Boolean(process.env.NEXT_PUBLIC_SITE_URL) &&
  !siteUrl.includes("example.com") &&
  !siteUrl.includes("localhost");
