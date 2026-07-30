import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { ServiceAreaMap } from "@/components/visuals";
import { business } from "@/lib/business";
import { locations } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance King Service Areas Near Macon, GA",
  description:
    "See normal Appliance King service communities near Macon, including Warner Robins, Gray, Byron, Forsyth, and nearby areas.",
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
              <h1>Appliance and handyman service areas near Macon, GA.</h1>
              <p className="direct-answer">
                Appliance King normally serves Macon and nearby communities including Warner Robins, Gray, Byron,
                Forsyth, Centerville, Lizella, Bolingbroke, Juliette, and Dry Branch. Location and scheduling are
                confirmed per request. Atlanta is considered only for larger or special projects by request.
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
          <h2>Additional nearby communities</h2>
          <p>{business.normalAreas.slice(5).join(" · ")}</p>
          <p>These communities appear on the coverage hub rather than duplicated location pages. Call to confirm the address and schedule.</p>
        </div>
      </section>
      <div className="content-shell"><CtaBand /></div>
    </main>
  );
}
