import { business } from "@/lib/business";

export type IntakeMode = "shop" | "estimate";

export const appliances = [
  { id: "washer", label: "Washer", emoji: "🧺" },
  { id: "dryer", label: "Dryer", emoji: "🌀" },
  { id: "refrigerator", label: "Refrigerator", emoji: "🧊" },
  { id: "stove", label: "Stove / Range", emoji: "🔥" },
  { id: "dishwasher", label: "Dishwasher", emoji: "🍽️" },
  { id: "other", label: "Something else", emoji: "🛠️" },
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
  lines.push(`City: ${d.city || "-"}`, `Name: ${d.name || "-"}`);
  return lines.filter(Boolean).join("\n");
}

export function smsHref(message: string) {
  // "?&body=" is understood by both iOS and Android.
  return `${business.phoneSms}?&body=${encodeURIComponent(message)}`;
}
