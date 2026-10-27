import { ArrowRight, CalendarDays, Check, MapPin, MessageCircle, Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
import Link from "next/link";
import { ActionRow, CityChips, Photo, SectionHead } from "@/components/ak";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/visuals";
import { business } from "@/lib/business";
import { homeGraph, pageMetadata } from "@/lib/seo";
import { homeFaqs, photos, shopCategories } from "@/lib/shop";

export const metadata = pageMetadata({
  title: "Used Appliances & Repair in Macon, GA | Appliance King",
  description:
    "Buy used washers, dryers, ovens and refrigerators, get appliances repaired, and book delivery or pickup in Macon, GA and cities within 40 miles.",
  path: "/",
});

const repairs = [
  { name: "Washer repair", href: "/services/washer-repair" },
  { name: "Dryer repair", href: "/services/dryer-repair" },
  { name: "Refrigerator repair", href: "/services/refrigerator-freezer-repair" },
  { name: "Oven & range repair", href: "/services/range-oven-stove-repair" },
  { name: "Dishwasher repair", href: "/services/dishwasher-repair" },
  { name: "Dryer vent cleaning", href: "/services/dryer-vent-cleaning-repair" },
];

const marquee = ["Washers", "Dryers", "Ovens & Ranges", "Refrigerators", "Repairs", "Delivery", "Pickup", "Macon, GA"];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph(homeFaqs)} />
      <main id="main-content" className="ak-page">
        <section className="ak-hero">
          <div className="ak-wrap ak-hero__grid">
            <div className="ak-hero__copy">
              <p className="ak-chip">
                <span className="ak-dot" aria-hidden="true" /> Macon, GA · Delivery &amp; pickup within {business.serviceRadiusMiles} miles
              </p>
              <h1>
                Buy, sell &amp; <span className="ak-grad-blue">repair appliances</span> in{" "}
                <span className="ak-grad-blue">Macon, GA.</span>
              </h1>
              <p className="ak-lede">
                Used washers, dryers, ovens and refrigerators on the floor, repairs for what you already own, and
                delivery or pickup to Macon and cities within about {business.serviceRadiusMiles} miles. Tap Shop, tell us
                what you need, and text us in under a minute.
              </p>
              <ActionRow bookHref="#booking" />
              <ul className="ak-trust">
                <li><ShieldCheck aria-hidden="true" size={17} /> Insured</li>
                <li><Truck aria-hidden="true" size={17} /> Delivery &amp; pickup</li>
                <li><Wrench aria-hidden="true" size={17} /> Repairs &amp; installs</li>
              </ul>
            </div>
            <div className="ak-hero__visual">
              <Photo image={photos.ranges} priority sizes="(max-width: 900px) 92vw, 600px" className="ak-hero__main" />
              <Photo image={photos.frontLoad} sizes="(max-width: 900px) 46vw, 280px" className="ak-hero__float" />
            </div>
          </div>
        </section>

        <div className="ak-marquee" aria-hidden="true">
          <div>
            {[...marquee, ...marquee].map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>

        <section className="ak-section ak-wrap">
          <SectionHead
            eyebrow="Used appliances"
            title="What can you buy at Appliance King?"
            text="Real units from the Macon floor. Stock changes, so call to confirm what is available today."
          />
          <div className="ak-cats">
            {shopCategories.map((category) => (
              <Link key={category.slug} href={`/used-appliances/${category.slug}`} className="ak-cat">
                <Photo image={category.hero} sizes="(max-width: 760px) 92vw, 300px" />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.short}</p>
                  <span>Browse <ArrowRight aria-hidden="true" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="ak-section ak-section--panel">
          <div className="ak-wrap ak-two ak-two--center">
            <div>
              <SectionHead
                eyebrow="Repairs"
                title="Is your appliance worth fixing?"
                text="If a washer, dryer, refrigerator, oven, or dishwasher stops working, book a time and describe the problem. We look at the appliance and explain the practical next step."
              />
              <ul className="ak-pills">
                {repairs.map((item) => (
                  <li key={item.href}><Link href={item.href}>{item.name}<ArrowRight aria-hidden="true" size={15} /></Link></li>
                ))}
              </ul>
              <ActionRow bookHref="#booking" />
            </div>
            <div className="ak-stack">
              <Photo image={photos.cabrio} sizes="(max-width: 900px) 92vw, 520px" />
            </div>
          </div>
        </section>

        <section className="ak-section ak-wrap ak-two ak-two--center">
          <ServiceAreaMap />
          <div>
            <SectionHead
              eyebrow="Delivery & pickup"
              title="Which cities do you serve around Macon?"
              text={`Appliance King delivers and picks up in Macon and cities within about ${business.serviceRadiusMiles} miles. Confirm your address when you call or book.`}
            />
            <p className="ak-note ak-note--strong">
              <strong>Delivery and pickup are only available in Macon and cities within {business.serviceRadiusMiles} miles of our showroom.</strong>
            </p>
            <CityChips limit={14} />
            <div className="visit">
              <a href={business.address.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" size={17} /> {business.address.full}</a>
              <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer me"><MessageCircle aria-hidden="true" size={17} /> Follow &amp; message us on Facebook</a>
            </div>
            <Link className="ak-link" href="/delivery-pickup">
              See all cities and how it works <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </section>

        <section className="ak-section ak-section--panel">
          <div className="ak-wrap">
            <SectionHead eyebrow="How it works" title="How do you get started?" />
            <ol className="ak-steps">
              <li><span>1</span><div><strong>Shop or get an estimate</strong><p>Tap a button, pick your appliances, and text us. Or call {business.phoneDisplay}.</p></div></li>
              <li><span>2</span><div><strong>Tell us what you need</strong><p>An appliance to buy, a repair, delivery, or pickup.</p></div></li>
              <li><span>3</span><div><strong>We confirm the details</strong><p>Address, access, and timing are confirmed before we show up.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Inside the showroom" title="A look at what is on the floor" />
          <div className="ak-gallery">
            <Photo image={photos.fridgeLine} />
            <Photo image={photos.geRange} />
            <Photo image={photos.pairSet} />
            <Photo image={photos.maytag} />
          </div>
          <Link className="ak-link" href="/used-appliances">
            Browse all used appliances <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Questions" title="What do customers ask first?" />
          <FaqList items={homeFaqs} />
        </section>

        <section className="ak-section ak-section--panel" id="booking">
          <div className="ak-wrap ak-book">
            <div>
              <p className="ak-eyebrow"><CalendarDays aria-hidden="true" size={15} /> Free estimate</p>
              <h2>Prefer to pick a time?</h2>
              <p className="ak-lede">
                Choose an open slot on the calendar, or call {business.phoneDisplay}. Tell us the appliance, your city,
                and whether you want to buy, repair, or arrange delivery.
              </p>
              <ul className="ak-checks">
                <li><Check aria-hidden="true" size={18} />Used appliances, repairs, delivery, and pickup</li>
                <li><Check aria-hidden="true" size={18} />Macon and cities within about {business.serviceRadiusMiles} miles</li>
              </ul>
              <a className="ak-btn ak-btn--ghost" href={business.phoneHref}>
                <Phone aria-hidden="true" size={19} /> Call {business.phoneDisplay}
              </a>
            </div>
            <CalendlyEmbed />
          </div>
        </section>
      </main>
    </>
  );
}
