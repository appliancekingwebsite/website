import { ArrowUpRight, Phone } from "lucide-react";
import { IntakeButton } from "@/components/intake-button";
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
        <IntakeButton mode="estimate" className="button button--outline-light">
          Free Estimate <ArrowUpRight aria-hidden="true" size={18} />
        </IntakeButton>
      </div>
    </section>
  );
}
