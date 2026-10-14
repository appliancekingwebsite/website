import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Appliance King",
    short_name: "Appliance King",
    description: "Used appliances, repair, delivery and pickup in Macon, Georgia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0e11",
    theme_color: "#0c0e11",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
