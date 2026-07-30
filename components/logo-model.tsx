"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

export function LogoModel() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    if (connection?.saveData || connection?.effectiveType === "2g") return;

    const request = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(callback, 500));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    let idleId: number | undefined;
    const delayId = window.setTimeout(() => {
      idleId = request(() => {
        import("@google/model-viewer").then(() => setReady(true));
      });
    }, 1800);
    return () => {
      window.clearTimeout(delayId);
      if (idleId !== undefined) cancel(idleId);
    };
  }, []);

  return (
    <div className="hero-model" aria-label="Appliance King logo">
      <div className="hero-model__scan" aria-hidden="true" />
      {ready ? (
        <model-viewer
          src={business.modelPath}
          poster="/appliance-king-logo.webp"
          alt="Appliance King crown logo"
          loading="eager"
          reveal="auto"
          camera-controls
          disable-zoom
          interaction-prompt="none"
          auto-rotate
          rotation-per-second="5deg"
          camera-orbit="0deg 82deg auto"
          shadow-intensity="1"
          exposure="1.1"
        />
      ) : (
        // The crawlable poster is present immediately; the 3D model is only progressive enhancement.
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/appliance-king-logo.webp" alt="Appliance King crown logo" />
      )}
      <div className="hero-model__readout" aria-hidden="true">
        <span>AK-478</span>
        <span>MACON / ONLINE</span>
      </div>
    </div>
  );
}
