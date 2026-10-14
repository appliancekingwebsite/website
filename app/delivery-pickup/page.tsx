import { Check, Truck } from "lucide-react";
import { ActionRow, CityChips, SectionHead } from "@/components/ak";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/visuals";
import { business } from "@/lib/business";
import { deliveryGraph, pageMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Delivery & Pickup in Macon, GA | Appliance King",
  description:
    "Appliance delivery and pickup in Macon, GA and cities within about 40 miles, including Warner Robins, Perry, Fort Valley and Milledgeville.",
  path: "/delivery-pickup",
});

const faqs: FaqItem[] = [
  {
    question: "How far does Appliance King deliver from Macon?",
    answer:
      "Appliance King delivers and offers pickup in Macon and cities within about 40 miles, including Warner Robins, Perry, Fort Valley, Milledgeville, Barnesville, Forsyth, Gray, and Byron. Confirm your address by phone or when you book.",
  },
  {
    question: "What do I need to tell you before delivery?",
    answer:
      "Share the appliance, your address, any stairs or tight doorways, and whether you need the old appliance picked up. For a dryer, mention the outlet type and vent route.",
  },
  {
    question: "Can you pick up an old appliance?",
    answer:
      "Pickup is available within the service radius. Call with the appliance type, model, and access details and Appliance King will confirm the next step.",
  },
  {
    question: "Can I schedule delivery with a repair visit?",
    answer:
      "Yes. When you book, mention both so the visit can be planned in one trip.",
  },
  {
    question: "Do you deliver to Atlanta?",
    answer:
      "Normal delivery stays within about 40 miles of Macon. Larger or special projects in Atlanta may be considered by request and availability.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      <JsonLd data={deliveryGraph(faqs)} />
      <main id="main-content" className="ak-page">
        <section className="ak-pagehero">
          <div className="ak-wrap">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Delivery & Pickup" }]} />
            <div className="ak-pagehero__grid">
              <div>
                <p className="ak-eyebrow"><Truck aria-hidden="true" size={15} /> Macon + about {business.serviceRadiusMiles} miles</p>
                <h1>Appliance delivery and pickup in Macon, GA.</h1>
                <p className="ak-lede">
                  Appliance King delivers and picks up washers, dryers, ovens and ranges, and refrigerators in Macon and
                  cities within about {business.serviceRadiusMiles} miles. Call or book a call, tell us the appliance and
                  your address, and we will confirm the details.
                </p>
                <ActionRow />
              </div>
              <ServiceAreaMap />
            </div>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Coverage" title="Which cities are included?" text="These cities are inside the normal delivery and pickup radius from Macon." />
          <CityChips />
        </section>

        <section className="ak-section ak-section--panel">
          <div className="ak-wrap">
            <SectionHead eyebrow="How it works" title="How do delivery and pickup work?" />
            <ol className="ak-steps">
              <li><span>1</span><div><strong>Choose or describe the appliance</strong><p>Pick a used washer, dryer, oven, or refrigerator, or tell us what needs to be picked up.</p></div></li>
              <li><span>2</span><div><strong>Confirm address and access</strong><p>Share your city, stairs, doorways, and hookups so the trip is planned correctly.</p></div></li>
              <li><span>3</span><div><strong>Get a time</strong><p>Call or book on the calendar and we will confirm delivery or pickup.</p></div></li>
            </ol>
            <ul className="ak-checks ak-checks--row">
              <li><Check aria-hidden="true" size={18} />Delivery of used appliances</li>
              <li><Check aria-hidden="true" size={18} />Pickup of appliances</li>
              <li><Check aria-hidden="true" size={18} />Repair visits in the same area</li>
            </ul>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Questions" title="Delivery and pickup FAQ" />
          <FaqList items={faqs} />
        </section>
      </main>
    </>
  );
}
