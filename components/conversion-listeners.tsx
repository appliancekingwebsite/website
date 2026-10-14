"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { metaEvent, trackConversion } from "@/lib/track";

/**
 * Site-wide conversion listeners (no per-button wiring needed):
 * - Calendly booking completed (postMessage from the embedded widget) -> "booking"
 * - Tap on any tel: link -> "call"
 * - Tap on any Calendly / booking link -> "booking_click" (micro conversion)
 */
export function ConversionListeners() {
  const pathname = usePathname();

  useEffect(() => {
    if (/^\/(used-appliances\/|services\/|delivery-pickup)/.test(pathname)) {
      metaEvent("ViewContent", { content_name: pathname, content_category: pathname.startsWith("/services") ? "appliance_repair" : "used_appliances" }, `view-${pathname}`);
    }
  }, [pathname]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const data = event.data as { event?: string; payload?: { event?: { uri?: string } } } | undefined;
      if (!data || typeof data.event !== "string" || !data.event.startsWith("calendly.")) return;
      if (data.event === "calendly.event_scheduled") {
        trackConversion("booking", data.payload?.event?.uri ?? String(Date.now()));
      } else if (data.event === "calendly.date_and_time_selected") {
        trackConversion("booking_click", "slot-selected");
      }
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackConversion("call");
      } else if (href.includes("calendly.com") || href === "/book" || href === "#booking" || link.hasAttribute("data-book")) {
        trackConversion("booking_click");
      }
    };

    window.addEventListener("message", onMessage);
    document.addEventListener("click", onClick, { capture: true });
    return () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);

  return null;
}
