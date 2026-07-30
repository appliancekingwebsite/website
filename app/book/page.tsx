import { CalendarDays, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book an Appliance Service Estimate | Appliance King",
  description: "Choose an available estimate time for Appliance King appliance, installation, vent, handyman, or property service in Macon.",
  path: "/book",
});

export default function BookPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--compact">
        <div className="content-shell content-shell--narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Book an Estimate" }]} />
          <p className="eyebrow"><CalendarDays aria-hidden="true" size={15} /> Secure online scheduling</p>
          <h1>Book an Appliance King estimate.</h1>
          <p className="direct-answer">Choose an available time for an estimate and provide the appliance or task, symptoms, location, and access details. Prefer to talk first? Call <a href={business.phoneHref}>{business.phoneDisplay}</a>. The booking is for an estimate, not a promise of a specific repair, price, or completion time.</p>
          <a className="text-link text-link--large" href={business.phoneHref}><Phone aria-hidden="true" /> Call instead</a>
        </div>
      </section>
      <section className="section content-shell content-shell--calendar"><CalendlyEmbed eager /></section>
    </main>
  );
}
