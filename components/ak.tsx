import { ArrowRight, CalendarCheck, ClipboardCheck, MapPin, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IntakeButton } from "@/components/intake-button";
import { business } from "@/lib/business";
import { locations } from "@/lib/content";
import type { ShopImage } from "@/lib/shop";

const cityPages = new Set(locations.map((l) => l.city));
const citySlug = Object.fromEntries(locations.map((l) => [l.city, l.slug]));

export function Photo({
  image,
  sizes = "(max-width: 760px) 92vw, 520px",
  priority = false,
  className = "",
}: {
  image: ShopImage;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`ak-photo ${className}`} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </figure>
  );
}

export function CityChips({ limit }: { limit?: number }) {
  const cities = limit ? business.normalAreas.slice(0, limit) : business.normalAreas;
  return (
    <ul className="ak-chips" aria-label="Cities within about 40 miles of Macon, GA">
      {cities.map((city) => (
        <li key={city}>
          {cityPages.has(city) ? (
            <Link href={`/service-areas/${citySlug[city]}`}>
              <MapPin aria-hidden="true" size={14} />
              {city}
            </Link>
          ) : (
            <span>
              <MapPin aria-hidden="true" size={14} />
              {city}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ActionRow({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`ak-actions ak-actions--${align}`}>
      <a className="ak-btn ak-btn--primary ak-desktop-only" href="#booking">
        <CalendarCheck aria-hidden="true" size={19} />
        Book Appointment
        <ArrowRight aria-hidden="true" size={18} />
      </a>
      <a className="ak-btn ak-btn--outline ak-desktop-only" href="#booking">
        <ClipboardCheck aria-hidden="true" size={19} />
        Book Appointment
      </a>
      <IntakeButton mode="shop" className="ak-btn ak-btn--primary ak-mobile-only">
        <ShoppingBag aria-hidden="true" size={19} />
        Shop Appliances
        <ArrowRight aria-hidden="true" size={18} />
      </IntakeButton>
      <IntakeButton mode="estimate" className="ak-btn ak-btn--outline ak-mobile-only">
        <ClipboardCheck aria-hidden="true" size={19} />
        Free Estimate
      </IntakeButton>
      <a className="ak-btn ak-btn--ghost" href={business.phoneHref}>
        <Phone aria-hidden="true" size={19} />
        {business.phoneDisplay}
      </a>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="ak-head">
      <p className="ak-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="ak-head__text">{text}</p>}
    </div>
  );
}
