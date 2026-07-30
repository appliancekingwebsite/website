import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Appliance King | Macon, Georgia",
  description: "Learn how Appliance King approaches appliance repair, installation, handyman, buy-and-sell, and property work in Macon.",
  path: "/about",
});

export default function AboutPage() {
  return <BasicPage eyebrow="Buy · Sell · Fix" h1="A practical Macon service company built around the appliance."
    answer="Appliance King is an insured Macon business focused first on appliance repair and supported by installation, dryer-vent, handyman, landscaping, buy-and-sell, residential, and commercial services. The operating principle is straightforward: understand the request, inspect the scope, and explain the next step without inventing certainty."
    sections={[
      { heading: "What does Appliance King stand for?", answer: "Clear scope, useful communication, safety-aware decisions, and service built around the real property rather than a generic promise.", bullets: ["Describe the symptom", "Confirm the scope", "Protect safety", "Explain the next step"] },
      { heading: "Why offer more than appliance repair?", answer: "Appliance problems often connect to installation, venting, access, cabinetry, or property-maintenance needs. The wider service menu lets related practical work be reviewed without claiming every trade or project is automatically in scope." },
      { heading: "Where does Appliance King work?", answer: "Normal service centers on Macon and nearby Central Georgia communities. Larger Atlanta-area projects may be reviewed by request, but Atlanta is not presented as a routine local service market." },
    ]} />;
}
