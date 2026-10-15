import { tracking } from "@/lib/business";

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  uetq?: unknown[] & { push: (...args: unknown[]) => number };
  clarity?: (...args: unknown[]) => void;
};

export type ConversionKind = "booking" | "call" | "booking_click" | "intake_start" | "intake_items" | "shop_lead" | "estimate_lead" | "map_click" | "sms_click";

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
function setCookie(name: string, value: string) {
  const parts = window.location.hostname.split(".");
  const domain = parts.length >= 2 ? `; domain=.${parts.slice(-2).join(".")}` : "";
  document.cookie = `${name}=${value}; max-age=${90 * 86400}; path=/; SameSite=Lax${domain}`;
}

/**
 * First-party equivalent of Meta's Parameter Builder: stores the ad click id as a correctly formatted
 * _fbc cookie (fb.1.<ms>.<fbclid>, case preserved) and makes sure _fbp exists, so every Conversions API
 * event carries fbc/fbp even when the pixel script is slow or blocked.
 */
export function collectMetaParams() {
  if (typeof window === "undefined") return;
  try {
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (fbclid && !cookie("_fbc")?.endsWith(`.${fbclid}`)) setCookie("_fbc", `fb.1.${Date.now()}.${fbclid}`);
    if (!cookie("_fbp")) setCookie("_fbp", `fb.1.${Date.now()}.${Math.floor(Math.random() * 2147483647)}`);
  } catch {
    /* tracking must never break the page */
  }
}

export type MetaUser = { fn?: string; ct?: string; zp?: string };

export function metaEvent(name: string, data: Record<string, string | number | boolean> = {}, seed?: string, user?: MetaUser) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  const eventId = seed ? `${name}-${seed}` : newId();
  collectMetaParams();
  if (typeof w.fbq === "function") w.fbq("track", name, data, { eventID: eventId });
  const body = JSON.stringify({
    event_name: name,
    event_id: eventId,
    event_source_url: window.location.href,
    external_id: externalId(),
    fbp: cookie("_fbp"),
    fbc: cookie("_fbc"),
    custom_data: data,
    user,
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
export function trackConversion(kind: ConversionKind, dedupeKey?: string, user?: MetaUser) {
  if (typeof window === "undefined") return;
  const key = `${kind}:${dedupeKey ?? ""}`;
  if (dedupeKey && fired.has(key)) return;
  if (dedupeKey) fired.add(key);

  const w = window as Win;
  const page = window.location.pathname;

  if (typeof w.gtag === "function") {
    const eventName = {
      booking: "schedule_appointment",
      call: "click_to_call",
      booking_click: "begin_booking",
      intake_start: "begin_intake",
      intake_items: "intake_items_selected",
      shop_lead: "shop_text_lead",
      estimate_lead: "estimate_text_lead",
      map_click: "find_location",
      sms_click: "click_to_text",
    }[kind];
    w.gtag("event", eventName, { event_category: "conversion", page_path: page, value: 1, currency: "USD", transport_type: "beacon" });
    if (kind === "booking") w.gtag("event", "generate_lead", { page_path: page, lead_type: "booked_call" });
    if (kind === "shop_lead" || kind === "estimate_lead") w.gtag("event", "generate_lead", { page_path: page, lead_type: kind, value: 1, currency: "USD" });

    const labels: Partial<Record<ConversionKind, string>> = {
      booking: tracking.googleAdsBookingLabel,
      call: tracking.googleAdsCallLabel,
      shop_lead: tracking.googleAdsShopLabel,
      estimate_lead: tracking.googleAdsEstimateLabel,
    };
    const label = labels[kind] ?? "";
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
  } else if (kind === "shop_lead" || kind === "estimate_lead") {
    const shop = kind === "shop_lead";
    metaEvent("Lead", { content_name: shop ? "Shop intake text" : "Estimate intake text", lead_type: kind, lead_intent: shop ? "buy_or_sell_appliance" : "appliance_repair", value: 1, currency: "USD" }, dedupeKey, user);
    metaEvent("Contact", { content_name: shop ? "Shop intake text" : "Estimate intake text" }, dedupeKey, user);
  } else if (kind === "map_click") {
    metaEvent("FindLocation", { content_name: "Showroom directions", lead_intent: intent });
  } else if (kind === "sms_click") {
    metaEvent("Contact", { content_name: "Text message", lead_intent: intent, value: 1, currency: "USD" });
  } else if (kind === "intake_items") {
    metaEvent("AddToCart", { content_name: "Appliance selection", lead_intent: intent });
  } else if (kind === "intake_start") {
    metaEvent("InitiateCheckout", { content_name: "Intake opened", lead_intent: intent });
  } else {
    metaEvent("InitiateCheckout", { content_name: "Booking opened", lead_intent: intent });
  }

  if (w.uetq) {
    const action = { booking: "schedule", call: "call", booking_click: "begin_booking", intake_start: "begin_intake", intake_items: "intake_items", shop_lead: "shop_lead", estimate_lead: "estimate_lead", map_click: "map", sms_click: "sms" }[kind];
    w.uetq.push("event", action, { event_category: "conversion", event_label: page, event_value: 1 });
  }

  if (typeof w.clarity === "function") w.clarity("event", kind);
}
