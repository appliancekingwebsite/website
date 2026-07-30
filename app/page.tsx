import { ArrowRight, CalendarDays, Check, Phone, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import {
  AirflowVisual,
  DiagnosticPanel,
  HeroRepairVisual,
  LifecycleVisual,
  ServiceAreaMap,
  ServiceIcon,
} from "@/components/visuals";
import { articles } from "@/lib/articles";
import { business } from "@/lib/business";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Repair in Macon, GA | Appliance King",
  description:
    "Book appliance repair, installation, dryer-vent, handyman, residential, or commercial service with Appliance King in Macon, Georgia.",
  path: "/",
});

const homeFaqs = [
  {
    question: "What appliances does Appliance King repair?",
    answer:
      "Appliance King handles repair requests for major household appliances including washers, dryers, refrigerators, freezers, dishwashers, ranges, ovens, and stoves. The exact model, symptom, condition, and access are reviewed when you book.",
  },
  {
    question: "Does Appliance King serve businesses as well as homes?",
    answer:
      "Yes. Appliance King accepts residential and commercial requests. Commercial work is scoped around the property, equipment, access, operating needs, and whether the requested work fits the services offered.",
  },
  {
    question: "Which areas around Macon do you serve?",
    answer:
      "Normal service centers on Macon and nearby communities including Warner Robins, Gray, Byron, Forsyth, Centerville, Lizella, Bolingbroke, Juliette, and Dry Branch. Scheduling is confirmed per request. Larger Atlanta-area projects may be considered by request.",
  },
  {
    question: "Can I buy or sell an appliance through Appliance King?",
    answer:
      "Yes. Used-appliance inventory changes, so call to ask what is currently available. Sell inquiries are reviewed based on the appliance type, model, condition, access, and current business needs; no purchase is automatically promised.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="content-shell home-hero__grid">
          <div className="home-hero__copy">
            <div className="availability"><span className="status-dot" /> Serving Macon and nearby communities</div>
            <h1>Macon appliance repair that gets the day moving again.</h1>
            <p>
              Appliance King repairs and installs major household appliances, handles dryer-vent and handyman work,
              supports commercial properties, and buys and sells changing used inventory.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={business.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                Call {business.phoneDisplay}
              </a>
              <Link className="button button--outline" href="/book">
                <CalendarDays aria-hidden="true" size={18} />
                Book an estimate
              </Link>
            </div>
            <div className="trust-line">
              <span><ShieldCheck aria-hidden="true" /> Insured</span>
              <span><Wrench aria-hidden="true" /> Home + commercial</span>
              <span><Check aria-hidden="true" /> Scope explained first</span>
            </div>
          </div>
          <div className="home-hero__visual">
            <HeroRepairVisual />
            <div className="hero-tag">
              <span>FIX</span><span>INSTALL</span><span>MAINTAIN</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section content-shell">
        <div className="split-heading">
          <div>
            <p className="section-number">01 / SERVICE BOARD</p>
            <h2>What can Appliance King help you fix?</h2>
          </div>
          <p>
            Start with the symptom. Appliance King reviews the appliance, condition, access, and job scope before
            discussing the next step.
          </p>
        </div>
        <div className="service-index service-index--home">
          {services.slice(0, 9).map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <ServiceIcon slug={service.slug} />
              <strong>{service.name}</strong>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link className="text-link text-link--large" href="/services">
          View all 13 services <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="section section--dark diagnostic-section">
        <div className="content-shell diagnostic-section__grid">
          <div>
            <p className="section-number">02 / PROCESS</p>
            <h2>How does an appliance estimate work?</h2>
            <p className="direct-answer">
              Book a time, describe the symptom, and make the appliance accessible. Appliance King inspects the
              relevant conditions, explains what is observed, and discusses the practical next step before the scope
              moves forward.
            </p>
            <ol className="steps">
              <li><span>01</span><div><strong>Share the symptom</strong><p>Appliance type, model if known, and what changed.</p></div></li>
              <li><span>02</span><div><strong>Inspect the scope</strong><p>Visible conditions, access, connections, and likely cause.</p></div></li>
              <li><span>03</span><div><strong>Choose the next step</strong><p>Repair, installation, maintenance, or a different direction.</p></div></li>
            </ol>
          </div>
          <DiagnosticPanel />
        </div>
      </section>

      <section className="section content-shell vent-feature">
        <div>
          <p className="section-number">03 / AIRFLOW</p>
          <h2>Could the dryer be fine while the vent is the problem?</h2>
          <p className="direct-answer">
            Yes. Long cycles, excess heat, weak exterior airflow, and lint around connections can involve the exhaust
            route rather than only the dryer. Appliance King can assess dryer performance and dryer-vent cleaning or
            repair needs without treating every symptom as the same problem.
          </p>
          <Link className="text-link text-link--large" href="/services/dryer-vent-cleaning-repair">
            Explore dryer-vent service <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <AirflowVisual />
      </section>

      <section className="section section--enamel">
        <div className="content-shell">
          <div className="split-heading">
            <div>
              <p className="section-number">04 / APPLIANCE LIFECYCLE</p>
              <h2>Need to buy, sell, or fix?</h2>
            </div>
            <p>
              Inventory and purchase interest change. Call before traveling or moving an appliance, and be ready to
              share model, condition, dimensions, and access.
            </p>
          </div>
          <LifecycleVisual />
          <div className="dual-links">
            <Link href="/used-appliances">Browse the used-appliance process <ArrowRight /></Link>
            <Link href="/sell-your-appliance">How to offer an appliance <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section content-shell location-feature">
        <ServiceAreaMap />
        <div>
          <p className="section-number">05 / LOCAL COVERAGE</p>
          <h2>Which communities around Macon do you serve?</h2>
          <p className="direct-answer">
            Normal service centers on Macon and nearby communities within the practical local market. Coverage includes
            Warner Robins, Gray, Byron, Forsyth, Centerville, Lizella, Bolingbroke, Juliette, and Dry Branch, with each
            appointment confirmed by location and scheduling.
          </p>
          <Link className="button button--outline" href="/service-areas">See the service-area guide</Link>
        </div>
      </section>

      <section className="section section--dark">
        <div className="content-shell">
          <div className="split-heading">
            <div>
              <p className="section-number">06 / FIELD GUIDES</p>
              <h2>Questions worth answering before the appointment.</h2>
            </div>
            <p>Practical, safety-aware guides written around real decisions—not keyword filler.</p>
          </div>
          <div className="article-grid">
            {articles.slice(0, 3).map((article, index) => (
              <Link href={`/articles/${article.slug}`} key={article.slug}>
                <span>GUIDE {String(index + 1).padStart(2, "0")}</span>
                <h3>{article.h1}</h3>
                <p>{article.description}</p>
                <strong>Read guide <ArrowRight aria-hidden="true" /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-shell faq-section">
        <div className="split-heading">
          <div>
            <p className="section-number">07 / QUICK ANSWERS</p>
            <h2>What do customers ask before booking?</h2>
          </div>
          <p>Clear answers about the work, coverage, and next step.</p>
        </div>
        <FaqList items={homeFaqs} />
      </section>

      <section className="section booking-section" id="booking">
        <div className="content-shell booking-section__grid">
          <div>
            <p className="section-number">08 / SCHEDULE</p>
            <h2>Book an estimate without phone tag.</h2>
            <p>
              Choose an available time through the secure Calendly calendar. Prefer to talk first? Call{" "}
              <a href={business.phoneHref}>{business.phoneDisplay}</a>.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>
      <div className="content-shell"><CtaBand /></div>
    </main>
  );
}
