import { tracking } from "@/lib/business";

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  uetq?: unknown[] & { push: (...args: unknown[]) => number };
  clarity?: (...args: unknown[]) => void;
};

export type ConversionKind = "booking" | "call" | "booking_click";

const fired = new Set<string>();

function cookie(name: string) {
  return document.cookie.split("; ").find((c) => c.startsWith(`${name}=`))?.split("=")[1];
}

/** Stable anonymous visitor id (hashed server-side) so Meta can tie repeat visits and the lead together. */
function externalId() {
  try {
    let id = localStorage.getItem("ak_ext_id");
    if (!id) {
      id = newId();
      localStorage.setItem("ak_ext_id", id);
    }
    return id;
  } catch {
    return undefined;
  }
}

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
}

/** Sends one Meta event through the browser pixel and the server (Conversions API) with a shared event_id. */
export function metaEvent(name: string, data: Record<string, string | number | boolean> = {}, seed?: string) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  const eventId = seed ? `${name}-${seed}` : newId();
  if (typeof w.fbq === "function") w.fbq("track", name, data, { eventID: eventId });
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  const body = JSON.stringify({
    event_name: name,
    event_id: eventId,
    event_source_url: window.location.href,
    external_id: externalId(),
    fbp: cookie("_fbp"),
    fbc: cookie("_fbc") ?? (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined),
    custom_data: data,
  });
  try {
    if (!navigator.sendBeacon?.("/api/meta-events", new Blob([body], { type: "application/json" }))) {
      void fetch("/api/meta-events", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
    }
  } catch {
    /* tracking must never break the page */
  }
}

/**
 * Fires one conversion to Google (Ads + GA4), Meta and Microsoft in a single
 * call. `dedupeKey` keeps one booking from being counted twice per platform.
 */
export function trackConversion(kind: ConversionKind, dedupeKey?: string) {
  if (typeof window === "undefined") return;
  const key = `${kind}:${dedupeKey ?? ""}`;
  if (dedupeKey && fired.has(key)) return;
  if (dedupeKey) fired.add(key);

  const w = window as Win;
  const page = window.location.pathname;

  if (typeof w.gtag === "function") {
    const eventName =
      kind === "booking" ? "schedule_appointment" : kind === "call" ? "click_to_call" : "begin_booking";
    w.gtag("event", eventName, { event_category: "conversion", page_path: page, value: 1, currency: "USD", transport_type: "beacon" });
    if (kind === "booking") w.gtag("event", "generate_lead", { page_path: page, lead_type: "booked_call" });

    const label = kind === "booking" ? tracking.googleAdsBookingLabel : kind === "call" ? tracking.googleAdsCallLabel : "";
    if (label) {
      w.gtag("event", "conversion", {
        send_to: label.includes("/") ? label : `${tracking.googleTagId}/${label}`,
        transport_type: "beacon",
        value: 1,
        currency: "USD",
        ...(dedupeKey ? { transaction_id: dedupeKey } : {}),
      });
    }
  }

  const intent = /^\/(used-appliances|delivery-pickup|sell-your-appliance)/.test(page) ? "buy_or_sell_appliance" : "appliance_repair";
  if (kind === "booking") {
    metaEvent("Schedule", { content_name: "Calendly booking", lead_intent: intent }, dedupeKey);
    metaEvent("Lead", { content_name: "Booked call", lead_type: "booking", lead_intent: intent }, dedupeKey);
  } else if (kind === "call") {
    metaEvent("Contact", { content_name: "Phone call", lead_intent: intent });
    metaEvent("Lead", { content_name: "Phone call", lead_type: "call", lead_intent: intent });
  } else {
    metaEvent("InitiateCheckout", { content_name: "Booking opened", lead_intent: intent });
  }

  if (w.uetq) {
    const action = kind === "booking" ? "schedule" : kind === "call" ? "call" : "begin_booking";
    w.uetq.push("event", action, { event_category: "conversion", event_label: page, event_value: 1 });
  }

  if (typeof w.clarity === "function") w.clarity("event", kind);
}
