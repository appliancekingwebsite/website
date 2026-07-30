import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";

export type BasicSection = {
  heading: string;
  answer: string;
  bullets?: string[];
};

export function BasicPage({
  eyebrow,
  h1,
  answer,
  sections,
  cta = true,
}: {
  eyebrow: string;
  h1: string;
  answer: string;
  sections: BasicSection[];
  cta?: boolean;
}) {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--compact">
        <div className="content-shell content-shell--narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: h1 }]} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{h1}</h1>
          <p className="direct-answer">{answer}</p>
          {cta && <Link className="button button--primary" href="/book">Book an estimate <ArrowRight aria-hidden="true" /></Link>}
        </div>
      </section>
      <div className="basic-sections content-shell content-shell--narrow">
        {sections.map((section, index) => (
          <section className="section" key={section.heading}>
            <p className="section-number">{String(index + 1).padStart(2, "0")} / ANSWER</p>
            <h2>{section.heading}</h2>
            <p className="direct-answer">{section.answer}</p>
            {section.bullets && <ul className="check-list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>
        ))}
      </div>
      {cta && <div className="content-shell"><CtaBand /></div>}
    </main>
  );
}
