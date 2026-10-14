import { business } from "@/lib/business";

export type IntakeMode = "shop" | "estimate";

export const appliances = [
  { id: "washer", label: "Washer" },
  { id: "dryer", label: "Dryer" },
  { id: "refrigerator", label: "Refrigerator" },
  { id: "stove", label: "Stove / Range" },
  { id: "dishwasher", label: "Dishwasher" },
  { id: "other", label: "Something else" },
] as const;

export const budgets = ["Under $300", "$300 - $600", "$600+", "Not sure yet"] as const;
export const timelines = ["Today", "This week", "Just browsing"] as const;
export const estimateTimes = ["ASAP", "This week", "Next week"] as const;

export type IntakeData = {
  mode: IntakeMode;
  items: string[];
  fulfillment: "Delivery" | "Pickup";
  budget: string;
  timeline: string;
  problem: string;
  name: string;
  city: string;
  address: string;
  zip: string;
};

export function buildMessage(d: IntakeData) {
  const list = d.items.map((id) => appliances.find((a) => a.id === id)?.label ?? id).join(", ") || "not sure yet";
  const lines =
    d.mode === "shop"
      ? [
          "Hi Appliance King! I'd like to shop used appliances.",
          `Looking for: ${list}`,
          `Delivery or pickup: ${d.fulfillment}`,
          `Budget: ${d.budget}`,
          `Timing: ${d.timeline}`,
        ]
      : [
          "Hi Appliance King! I'd like a free repair estimate.",
          `Appliance: ${list}`,
          d.problem ? `What's wrong: ${d.problem}` : "",
          `Timing: ${d.timeline}`,
        ];
  lines.push(
    `Name: ${d.name || "-"}`,
    `Address: ${d.address || "-"}`,
    `City: ${d.city || "-"}, GA ${d.zip || ""}`.trim(),
  );
  return lines.filter(Boolean).join("\n");
}

export function smsHref(message: string) {
  // "?&body=" is understood by both iOS and Android.
  return `${business.phoneSms}?&body=${encodeURIComponent(message)}`;
}

export const isValidZip = (zip: string) => /^\d{5}$/.test(zip.trim());
export const inServiceArea = (city: string) =>
  !city.trim() || business.normalAreas.some((c) => c.toLowerCase() === city.trim().toLowerCase());
