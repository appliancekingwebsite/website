import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/visuals";
import { services, type LocationPageData } from "@/lib/content";
import { locationGraph } from "@/lib/seo";

export function LocationPage({ location }: { location: LocationPageData }) {
  return (
    <>
      <JsonLd data={locationGraph(location)} />
      <main id="main-content">
        <section className="page-hero">
          <div className="content-shell">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: location.city }]} />
            <div className="page-hero__grid">
              <div>
                <p className="eyebrow"><MapPin aria-hidden="true" size={15} /> Service-area page</p>
                <h1>{location.h1}</h1>
                <p className="direct-answer">{location.directAnswer}</p>
                <Link className="button button--primary" href="/book">
                  Book an estimate <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
              <ServiceAreaMap />
            </div>
          </div>
        </section>
        <section className="section content-shell">
          <div className="split-heading">
            <div>
              <p className="section-number">01 / LOCAL SERVICE</p>
              <h2>What can Appliance King help with in {location.city}?</h2>
            </div>
            <p>{location.localNote}</p>
          </div>
          <div className="service-index">
            {services.slice(0, 9).map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.name}</strong>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
        <section className="section section--dark">
          <div className="content-shell">
            <div className="split-heading">
              <div>
                <p className="section-number">02 / COVERAGE</p>
                <h2>Which nearby communities are part of the coverage picture?</h2>
              </div>
              <p>{location.nearby.join(", ")} appear in the local service network, with scheduling confirmed for each request.</p>
            </div>
          </div>
        </section>
        <section className="section content-shell faq-section">
          <h2>Questions about service in {location.city}</h2>
          <FaqList items={location.faq} />
        </section>
        <div className="content-shell"><CtaBand title={`Need service in ${location.city}?`} /></div>
      </main>
    </>
  );
}
