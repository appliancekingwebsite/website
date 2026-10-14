export const business = {
  name: "Appliance King",
  legalName: "Appliance King",
  description:
    "Buy used washers, dryers, ovens and refrigerators, get appliances repaired, and book delivery or pickup in Macon, Georgia and cities within about 40 miles.",
  phoneDisplay: "478-273-7539",
  phoneHref: "tel:+14782737539",
  bookingUrl: "https://calendly.com/applianceking-estimate/estimate",
  bookingEmbedUrl:
    "https://calendly.com/applianceking-estimate/estimate?hide_event_type_details=1&hide_gdpr_banner=1&background_color=15181d&text_color=f6f4ef&primary_color=ff5a1f",
  baseCity: "Macon",
  state: "Georgia",
  stateCode: "GA",
  country: "US",
  serviceRadiusMiles: 40,
  /** Cities inside the ~40 mile Macon delivery, pickup and service radius. */
  normalAreas: [
    "Macon",
    "Warner Robins",
    "Perry",
    "Byron",
    "Fort Valley",
    "Centerville",
    "Gray",
    "Forsyth",
    "Milledgeville",
    "Barnesville",
    "Jeffersonville",
    "Cochran",
    "Gordon",
    "Irwinton",
    "Roberta",
    "Jackson",
    "Lizella",
    "Bolingbroke",
    "Juliette",
    "Dry Branch",
    "Kathleen",
    "Haddock",
    "Culloden",
    "Danville",
  ],
  extendedAreaNote:
    "Larger or special projects in Atlanta may be considered by request and availability.",
  logoPath: "/appliance-king-logo.png",
  modelPath: "/appliance-king-logo.glb",
  ogImagePath: "/og-image.jpg",
} as const;

/**
 * Conversion tracking. The Google tag and Meta pixel IDs belong to this
 * business account. The Microsoft UET tag ID and Google Ads conversion labels
 * are created inside the ad platforms, so they are read from env vars.
 */
export const tracking = {
  googleTagId: process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "AW-18128296932",
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "4472553883061795",
  microsoftUetId: process.env.NEXT_PUBLIC_UET_TAG_ID ?? "",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
  googleAdsBookingLabel: process.env.NEXT_PUBLIC_GADS_BOOKING_LABEL ?? "",
  googleAdsCallLabel: process.env.NEXT_PUBLIC_GADS_CALL_LABEL ?? "",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const hasProductionDomain =
  Boolean(process.env.NEXT_PUBLIC_SITE_URL) &&
  !siteUrl.includes("example.com") &&
  !siteUrl.includes("localhost");
