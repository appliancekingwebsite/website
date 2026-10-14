import { AlertTriangle, ArrowRight, Check, Clock3, House, Store } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { AirflowVisual, DiagnosticPanel } from "@/components/visuals";
import type { ServicePageData } from "@/lib/content";
import { serviceGraph } from "@/lib/seo";

export function ServicePage({ service }: { service: ServicePageData }) {
  const isVent = service.slug.includes("vent");
  return (
    <>
      <JsonLd data={serviceGraph(service)} />
      <main id="main-content">
        <section className="page-hero page-hero--service">
          <div className="content-shell">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.name },
              ]}
            />
            <div className="page-hero__grid">
              <div>
                <p className="eyebrow">Macon service desk / {service.navLabel}</p>
                <h1>{service.h1}</h1>
                <p className="direct-answer">{service.directAnswer}</p>
                <div className="hero-actions">
                  <Link className="button button--primary" href="/book">
                    Free Estimate <ArrowRight aria-hidden="true" size={18} />
                  </Link>
                  <Link className="text-link" href="/service-areas">
                    Check the service area
                  </Link>
                </div>
              </div>
              {isVent ? <AirflowVisual /> : <DiagnosticPanel />}
            </div>
          </div>
        </section>

        <section className="section content-shell">
          <div className="split-heading">
            <div>
              <p className="section-number">01 / SCOPE</p>
              <h2>What does {service.name.toLowerCase()} include?</h2>
            </div>
            <p>{service.summary}</p>
          </div>
          <div className="scope-list">
            {service.includes.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <Check aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="section section--dark">
          <div className="content-shell">
            <div className="split-heading">
              <div>
                <p className="section-number">02 / SIGNALS</p>
                <h2>What are the signs you may need this service?</h2>
              </div>
              <p>Patterns matter. Note when the issue started, whether it is constant, and what changed before booking.</p>
            </div>
            <ul className="signal-grid">
              {service.signs.map((item) => (
                <li key={item}><span aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section content-shell">
          <div className="factor-layout">
            <div>
              <p className="section-number">03 / ESTIMATE</p>
              <h2>How much can {service.name.toLowerCase()} cost in Macon?</h2>
              <p className="direct-answer">
                Cost depends on the confirmed scope rather than the symptom alone. Appliance King uses an estimate visit to inspect the relevant conditions and explain the next practical step.
              </p>
            </div>
            <ol className="factor-list">
              {service.estimateFactors.map((item, index) => (
                <li key={item}><span>{index + 1}</span>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--enamel">
          <div className="content-shell process-grid">
            <div>
              <Clock3 aria-hidden="true" />
              <h2>How long can the work take?</h2>
              <p>{service.timeline}</p>
            </div>
            <div>
              <House aria-hidden="true" />
              <h2>Do you serve homes?</h2>
              <p>{service.residential}</p>
            </div>
            <div>
              <Store aria-hidden="true" />
              <h2>Do you serve commercial properties?</h2>
              <p>{service.commercial}</p>
            </div>
          </div>
        </section>

        <section className="section content-shell safety-callout">
          <AlertTriangle aria-hidden="true" />
          <div>
            <p className="section-number">SAFETY NOTE</p>
            <h2>When should you stop and address safety first?</h2>
            <p>
              {service.safetyNote ??
                "Stop using the appliance for smoke, sparking, burning odor, active leaking near electricity, gas odor, or severe overheating. Disconnect power only when it is safe, leave the area for a suspected gas leak, and contact emergency or appropriately qualified help when immediate danger is present."}
            </p>
          </div>
        </section>

        <section className="section content-shell faq-section">
          <div className="split-heading">
            <div>
              <p className="section-number">04 / ANSWERS</p>
              <h2>Questions about {service.name.toLowerCase()}</h2>
            </div>
            <p>Short answers to the questions people ask before booking.</p>
          </div>
          <FaqList items={service.faq} />
        </section>
        <div className="content-shell"><CtaBand /></div>
      </main>
    </>
  );
}
