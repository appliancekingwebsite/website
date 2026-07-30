import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";
import { business } from "@/lib/business";

export function CtaBand({
  title = "Tell us what stopped working.",
  text = "Describe the appliance, the symptoms, and your location. We’ll use the estimate visit to inspect the scope and explain the next practical step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <a className="button button--light" href={business.phoneHref}>
          <Phone aria-hidden="true" size={18} />
          Call {business.phoneDisplay}
        </a>
        <Link className="button button--outline-light" href="/book">
          Book an estimate <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
