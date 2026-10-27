"use client";

import { useState, useSyncExternalStore } from "react";

declare global {
  interface Window {
    uetq?: unknown[];
  }
}

export function CookieConsentBanner() {
  // Server snapshot hides the banner so hydration matches; the client then reads the stored choice.
  const hasStoredChoice = useSyncExternalStore(
    () => () => {},
    () => Boolean(localStorage.getItem("cookie_consent_choice")),
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const showBanner = !hasStoredChoice && !dismissed;

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_choice", "granted");
    // Update Microsoft UET consent to granted
    if (typeof window !== "undefined" && window.uetq) {
      window.uetq.push("consent", "update", { ad_storage: "granted" });
    }
    setDismissed(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent_choice", "denied");
    // Consent remains denied (already set in tracking-head.tsx)
    setDismissed(true);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-gray-900 text-white px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-center sm:text-left">
          We use cookies and tracking technologies to improve your experience and for advertising purposes.
          By clicking &quot;Accept&quot;, you consent to our use of cookies and ad storage.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 rounded transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
