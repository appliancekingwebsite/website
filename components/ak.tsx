import { ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      <Link className="ak-btn ak-btn--primary" href="/book" data-book>
        <CalendarDays aria-hidden="true" size={19} />
        Book a call
        <ArrowRight aria-hidden="true" size={18} />
      </Link>
      <a className="ak-btn ak-btn--ghost" href={business.phoneHref}>
        <Phone aria-hidden="true" size={19} />
        Call {business.phoneDisplay}
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
