import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { DiagnosticPanel } from "@/components/visuals";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance, Handyman & Property Services | Macon, GA",
  description:
    "Explore Appliance King repair, installation, dryer-vent, handyman, landscaping, residential, and commercial services in Macon.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="content-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">The complete service board</p>
              <h1>Appliance, handyman, and property services in Macon.</h1>
              <p className="direct-answer">
                Appliance King’s primary work is appliance repair, supported by appliance installation, dryer-vent
                cleaning and repair, limited handyman tasks, landscaping and property maintenance, and residential or
                commercial service. Each request is confirmed for scope and location before work moves forward.
              </p>
            </div>
            <DiagnosticPanel />
          </div>
        </div>
      </section>
      <section className="section content-shell">
        <div className="service-catalog">
          {services.map((service, index) => (
            <article key={service.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}`}>Explore service <ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <div className="content-shell"><CtaBand /></div>
    </main>
  );
}
