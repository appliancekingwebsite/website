import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { ServiceAreaMap } from "@/components/visuals";
import { business } from "@/lib/business";
import { locations } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Areas Within 40 Miles of Macon, GA | Appliance King",
  description:
    "Appliance King delivers, picks up and repairs appliances in Macon and cities within about 40 miles, including Warner Robins, Perry and Milledgeville.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="content-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Local coverage / Central Georgia</p>
              <h1>Appliance delivery, pickup and repair within 40 miles of Macon, GA.</h1>
              <p className="direct-answer">
                Appliance King delivers, picks up, and repairs appliances in Macon and cities within about 40 miles,
                including Warner Robins, Perry, Fort Valley, Milledgeville, Barnesville, Byron, Forsyth, Gray, and
                Centerville. Address and scheduling are confirmed per request. Atlanta is considered only for larger or
                special projects by request.
              </p>
            </div>
            <ServiceAreaMap />
          </div>
        </div>
      </section>
      <section className="section content-shell">
        <div className="location-list">
          {locations.map((location, index) => (
            <Link href={`/service-areas/${location.slug}`} key={location.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{location.city}, GA</h2><p>{location.description}</p></div>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="coverage-note">
          <h2>All cities in the delivery and pickup radius</h2>
          <p>{business.normalAreas.join(" · ")}</p>
          <p>Cities without their own page are covered from this hub. Call {business.phoneDisplay} to confirm your address and schedule.</p>
        </div>
      </section>
      <div className="content-shell"><CtaBand /></div>
    </main>
  );
}
