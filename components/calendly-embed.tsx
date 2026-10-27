"use client";

import { useEffect, useRef, useState } from "react";
import { business, siteUrl } from "@/lib/business";

// Calendly only posts calendly.event_scheduled to the parent page when the iframe declares it is embedded.
const embedSrc = `${business.bookingEmbedUrl}&embed_type=Inline&embed_domain=${new URL(siteUrl).host}`;

export function CalendlyEmbed({ eager = false }: { eager?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager || !wrapperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={wrapperRef} className="calendar-shell">
      <div className="calendar-shell__top">
        <span className="status-dot" aria-hidden="true" />
        <p>Select an available estimate time</p>
      </div>
      {shouldLoad ? (
        <iframe
          className="calendly-inline-widget"
          data-calendar-loaded="true"
          src={embedSrc}
          title="Schedule an Appliance King estimate with Calendly"
          loading={eager ? "eager" : "lazy"}
        />
      ) : (
        <div className="calendar-placeholder" aria-label="Booking calendar will load as you approach it">
          <span />
          <span />
          <span />
          <p>Calendar ready below</p>
        </div>
      )}
      <p className="calendar-fallback">
        Calendar not displaying?{" "}
        <a href={business.bookingUrl} target="_blank" rel="noreferrer">
          Open the booking page directly.
        </a>
      </p>
    </div>
  );
}
