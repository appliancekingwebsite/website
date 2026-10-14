"use client";

import { CalendarDays, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";

export function MobileActions() {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const scheduleHref = pathname === "/" ? "#booking" : "/book";
  const hidden = pathname === "/book" || (pathname === "/" && calendarVisible);

  useEffect(() => {
    const bookingTargets = [...document.querySelectorAll("#booking, .calendar-shell")];
    const applyVisibility = (isVisible: boolean) => {
      const shouldHide = pathname === "/book" || (pathname === "/" && isVisible);
      setCalendarVisible(isVisible);
      navRef.current?.setAttribute("aria-hidden", String(shouldHide));
      navRef.current?.classList.toggle("is-calendar-visible", shouldHide);
    };
    const updateFromLayout = () => {
      const booking = document.querySelector("#booking");
      if (!booking) return;
      const rect = booking.getBoundingClientRect();
      applyVisibility(rect.top < window.innerHeight && rect.bottom > 0);
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                applyVisibility(true);
                return;
              }
              updateFromLayout();
            },
            { threshold: 0.01 },
          )
        : null;
    bookingTargets.forEach((target) => observer?.observe(target));
    const frame = window.requestAnimationFrame(updateFromLayout);
    window.addEventListener("scroll", updateFromLayout, { passive: true });
    window.addEventListener("resize", updateFromLayout);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFromLayout);
      window.removeEventListener("resize", updateFromLayout);
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={hidden ? "mobile-actions is-calendar-visible" : "mobile-actions"}
      aria-label="Quick actions"
      aria-hidden={hidden}
    >
      <Link href={scheduleHref} aria-label="Schedule" data-book>
        <CalendarDays aria-hidden="true" size={20} />
        <span>Book a call</span>
      </Link>
      <a href={business.phoneHref} aria-label="Call">
        <Phone aria-hidden="true" size={22} />
      </a>
    </nav>
  );
}
