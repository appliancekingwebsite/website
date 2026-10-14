import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import type { ArticleData } from "@/lib/articles";
import { articleGraph } from "@/lib/seo";

export function ArticlePage({ article }: { article: ArticleData }) {
  return (
    <>
      <JsonLd data={articleGraph(article)} />
      <main id="main-content">
        <article>
          <header className="article-hero">
            <div className="content-shell content-shell--narrow">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/articles" }, { label: article.h1 }]} />
              <p className="eyebrow">Appliance King field guide</p>
              <h1>{article.h1}</h1>
              <div className="article-meta">
                <span><Clock3 aria-hidden="true" size={16} /> {article.readTime}</span>
                <span>Updated July 30, 2026</span>
              </div>
              <div className="answer-block">
                <span>DIRECT ANSWER</span>
                <p>{article.directAnswer}</p>
              </div>
            </div>
          </header>
          <div className="article-layout content-shell">
            <div className="article-body">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p className="article-answer">{section.answer}</p>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              ))}
              <section>
                <h2>Frequently asked questions</h2>
                <FaqList items={article.faqs} />
              </section>
              <section>
                <h2>Helpful next steps</h2>
                <div className="article-links">
                  {article.internalLinks.map((link) => (
                    <Link href={link.href} key={link.href}>{link.label}<ArrowRight aria-hidden="true" /></Link>
                  ))}
                </div>
              </section>
              <section className="sources">
                <h2>Authoritative references</h2>
                <p>These sources support safety, energy, food-storage, recall, and vent guidance. They do not endorse Appliance King.</p>
                <ol>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ol>
              </section>
            </div>
            <aside className="article-aside">
              <p className="section-number">BOOKMARK THIS</p>
              <strong>Diagnose before you decide.</strong>
              <p>One symptom can have several causes. Compare the confirmed scope with the complete replacement cost.</p>
              <Link className="button button--primary" href="/book">Free Estimate</Link>
            </aside>
          </div>
        </article>
        <div className="content-shell"><CtaBand /></div>
      </main>
    </>
  );
}
