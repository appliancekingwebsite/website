import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ActionRow, CityChips, Photo, SectionHead } from "@/components/ak";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { business, siteUrl } from "@/lib/business";
import { breadcrumbSchema, faqSchema, localBusinessSchema, organizationSchema, pageMetadata } from "@/lib/seo";
import { homeFaqs, photos, shopCategories, showroomVideo } from "@/lib/shop";

export const metadata = pageMetadata({
  title: "Used Appliances for Sale in Macon, GA | Appliance King",
  description:
    "Buy used washers, dryers, ovens and refrigerators in Macon, GA. Delivery and pickup within about 40 miles. Call or book with Appliance King.",
  path: "/used-appliances",
});

const faqs = homeFaqs.slice(0, 5);

export default function UsedAppliancesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema,
            localBusinessSchema,
            {
              "@type": "CollectionPage",
              "@id": `${siteUrl}/used-appliances#webpage`,
              url: `${siteUrl}/used-appliances`,
              name: "Used appliances for sale in Macon, GA",
              dateModified: "2026-10-14",
              about: { "@id": `${siteUrl}#localbusiness` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: shopCategories.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.name,
                  url: `${siteUrl}/used-appliances/${c.slug}`,
                })),
              },
            },
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Used Appliances", path: "/used-appliances" },
            ]),
            faqSchema(faqs),
          ],
        }}
      />
      <main id="main-content" className="ak-page">
        <section className="ak-pagehero">
          <div className="ak-wrap">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Used Appliances" }]} />
            <div className="ak-pagehero__grid">
              <div>
                <p className="ak-eyebrow">Buy · Sell · Fix · Delivered</p>
                <h1>Used appliances for sale in Macon, GA.</h1>
                <p className="ak-lede">
                  Appliance King sells used washers, dryers, ovens and ranges, and refrigerators in Macon, Georgia.
                  Delivery and pickup are available within about {business.serviceRadiusMiles} miles. Inventory changes
                  as units sell, so call or book a call to confirm what is on the floor.
                </p>
                <ActionRow />
              </div>
              <Photo image={photos.ranges} priority sizes="(max-width: 900px) 92vw, 560px" />
            </div>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Shop by type" title="What used appliances can you buy?" />
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
          <div className="ak-wrap">
            <SectionHead eyebrow="Showroom" title="See the Macon showroom floor" text="A quick look at appliances currently lined up at Appliance King." />
            <video
              className="ak-video"
              controls
              preload="metadata"
              playsInline
              aria-label="Walkthrough of the Appliance King used appliance showroom in Macon, GA"
            >
              <source src={showroomVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Delivery & pickup" title="Which cities do you deliver to?" text="Macon and cities within about 40 miles." />
          <CityChips />
          <Link className="ak-link" href="/delivery-pickup">How delivery and pickup work <ArrowRight aria-hidden="true" size={16} /></Link>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Questions" title="Buying used appliances FAQ" />
          <FaqList items={faqs} />
          <p className="ak-note">
            Have an appliance to sell? <Link href="/sell-your-appliance">See how to offer it</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
