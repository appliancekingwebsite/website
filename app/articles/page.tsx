import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Repair & Care Guides | Appliance King",
  description:
    "Read practical appliance repair, dryer-vent, installation, repair-versus-replace, and used-appliance guides for Macon.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--compact">
        <div className="content-shell content-shell--narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          <p className="eyebrow">Question-first field notes</p>
          <h1>Appliance repair and care guides for Macon.</h1>
          <p className="direct-answer">
            These Appliance King guides help homeowners and property teams recognize symptoms, protect safety, prepare
            for service, and compare repair, installation, vent, and used-appliance decisions without pretending one
            rule fits every appliance.
          </p>
        </div>
      </section>
      <section className="section content-shell article-list">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={article.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{article.h1}</h2><p>{article.description}</p><small>{article.readTime}</small></div>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </section>
    </main>
  );
}
