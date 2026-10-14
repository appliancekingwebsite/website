import { ArrowRight, Check, Ruler, Truck } from "lucide-react";
import Link from "next/link";
import { ActionRow, CityChips, Photo, SectionHead } from "@/components/ak";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { shopGraph } from "@/lib/seo";
import { shopBySlug, type ShopCategory } from "@/lib/shop";

export function ShopPage({ category }: { category: ShopCategory }) {
  return (
    <>
      <JsonLd data={shopGraph(category)} />
      <main id="main-content" className="ak-page">
        <section className="ak-pagehero">
          <div className="ak-wrap">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Used Appliances", href: "/used-appliances" },
                { label: category.name },
              ]}
            />
            <div className="ak-pagehero__grid">
              <div>
                <p className="ak-eyebrow">Macon, GA · Delivery &amp; pickup</p>
                <h1>{category.h1}</h1>
                <p className="ak-lede">{category.directAnswer}</p>
                <ActionRow />
              </div>
              <Photo image={category.hero} priority sizes="(max-width: 900px) 92vw, 560px" />
            </div>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead
            eyebrow="Recent stock"
            title={`What do ${category.name.toLowerCase()} at Appliance King look like?`}
            text="Photos show real appliances on the Macon floor. Stock changes, so call to confirm availability."
          />
          <div className="ak-gallery">
            {category.gallery.map((image) => (
              <Photo key={image.src} image={image} />
            ))}
          </div>
        </section>

        <section className="ak-section ak-section--panel">
          <div className="ak-wrap ak-two">
            <div>
              <SectionHead eyebrow="Before you choose" title="What should you look for?" />
              <ul className="ak-checks">
                {category.lookFor.map((item) => (
                  <li key={item}><Check aria-hidden="true" size={18} />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead eyebrow="Before delivery" title="What should you measure?" />
              <ul className="ak-checks">
                {category.measure.map((item) => (
                  <li key={item}><Ruler aria-hidden="true" size={18} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead
            eyebrow="Delivery & pickup"
            title={`Do you deliver ${category.name.toLowerCase()} near Macon?`}
            text="Yes. Delivery and pickup are available in Macon and cities within about 40 miles."
          />
          <CityChips />
          <Link className="ak-link" href="/delivery-pickup">
            <Truck aria-hidden="true" size={18} /> How delivery and pickup work <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Questions" title={`${category.name} FAQ`} />
          <FaqList items={category.faq} />
        </section>

        <section className="ak-section ak-wrap">
          <SectionHead eyebrow="Keep browsing" title="Related appliances" />
          <div className="ak-related">
            {category.related.map((slug) => {
              const item = shopBySlug[slug];
              return (
                <Link key={slug} href={`/used-appliances/${slug}`}>
                  <strong>{item.name}</strong>
                  <span>{item.short}</span>
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              );
            })}
            <Link href="/services/appliance-repair">
              <strong>Appliance repair</strong>
              <span>Fix what you already own</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>

        <section className="ak-section ak-wrap">
          <div className="ak-cta">
            <h2>Ready to pick one out?</h2>
            <p>Book a call or phone Appliance King to confirm stock and set up delivery or pickup.</p>
            <ActionRow align="center" />
          </div>
        </section>
      </main>
    </>
  );
}
