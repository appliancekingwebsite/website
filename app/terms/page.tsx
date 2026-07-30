import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Website Terms | Appliance King", description: "Terms for using the Appliance King website, service information, booking links, and external resources.", path: "/terms" });

export default function TermsPage() {
  return <BasicPage eyebrow="Website terms / updated July 30, 2026" h1="Appliance King website terms." cta={false}
    answer="Website content is general service information and does not replace an inspection, final scope, written agreement, manufacturer instruction, emergency response, or advice from a licensed specialty contractor when one is required."
    sections={[
      { heading: "What does an online booking mean?", answer: "A Calendly booking requests an estimate time. It does not guarantee acceptance, diagnosis, price, parts, repairability, arrival time, or completion. Details are confirmed for the specific request." },
      { heading: "How should safety information be used?", answer: "Stop use for smoke, sparking, burning odor, gas odor, severe overheating, or other immediate danger. Contact emergency services, the gas utility, or the appropriately licensed professional as the situation requires." },
      { heading: "What applies to external links?", answer: "External booking, government, safety, and reference sites control their own content, availability, and policies. Links are provided for convenience and do not imply endorsement unless explicitly stated." },
    ]} />;
}
