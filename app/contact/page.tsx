import { CalendarDays, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Appliance King | Macon, GA",
  description: "Call Appliance King at 478-273-7539 or book an online estimate for appliance, vent, handyman, and property service near Macon.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--compact">
        <div className="content-shell content-shell--narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Two direct ways to start</p>
          <h1>Contact Appliance King in Macon.</h1>
          <p className="direct-answer">Call Appliance King or choose an available estimate time online. There is no unverified email form on this site, so every contact path goes to the confirmed phone number or Calendly event.</p>
        </div>
      </section>
      <section className="section content-shell contact-options">
        <a href={business.phoneHref}><Phone aria-hidden="true" /><span>Call Appliance King</span><strong>{business.phoneDisplay}</strong></a>
        <Link href="/book"><CalendarDays aria-hidden="true" /><span>Book online</span><strong>Choose an available time</strong></Link>
        <Link href="/service-areas"><MapPin aria-hidden="true" /><span>Check coverage</span><strong>Macon + nearby communities</strong></Link>
      </section>
    </main>
  );
}
