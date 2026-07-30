import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { business } from "@/lib/business";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Repair & Service FAQ | Appliance King",
  description: "Answers about Appliance King appliance repair, estimates, service areas, commercial work, dryer vents, handyman scope, and used appliances.",
  path: "/faq",
});

const faqs = [
  { question: "How do I book Appliance King?", answer: `Use the online estimate calendar or call ${business.phoneDisplay}. Share the appliance or task, symptoms, property type, location, and access details so the request can be reviewed accurately.` },
  { question: "Do you offer appliance repair in Macon?", answer: "Yes. Appliance repair is Appliance King’s primary service in Macon, with pages for washers, dryers, refrigerators and freezers, dishwashers, ranges, ovens, and stoves." },
  { question: "Do you repair all major household appliances?", answer: "Appliance King accepts repair requests for major household appliance categories. The exact model, condition, symptom, parts outlook, and site determine the practical scope." },
  { question: "Do you provide appliance installation?", answer: "Yes. Installation requests include appliance fit, access, connections, utilities, venting, mounting, stacking, and removal considerations. The scope is confirmed for the specific appliance and property." },
  { question: "Can you clean or repair a dryer vent?", answer: "Yes. Appliance King reviews dryer-vent cleaning and repair needs including long dry times, weak airflow, excess heat, lint at joints, damaged connectors, and route concerns." },
  { question: "Do you offer handyman services?", answer: "Yes. General handyman requests are reviewed by scope. Jobs involving licensed trades, permits, structural engineering, or work outside lawful handyman scope are not represented as simple handyman work." },
  { question: "Do you offer electrical repair?", answer: "Only limited minor electrical handyman tasks are considered. Appliance King does not claim licensed electrical-contractor services and does not market panels, new circuits, rewiring, permitted electrical contracting, or similar work." },
  { question: "Do you work on commercial properties?", answer: "Yes. Commercial requests are reviewed around equipment, building access, operating impact, approval requirements, and whether the service fits the offered and lawful scope." },
  { question: "What is your normal service area?", answer: `Normal service centers on ${business.normalAreas.join(", ")}. Address and schedule are confirmed for each request.` },
  { question: "Do you service Atlanta?", answer: "Atlanta is not presented as a routine local service area. Larger or special Atlanta-area projects may be considered individually by request." },
  { question: "Do you sell used appliances?", answer: "Yes, but inventory changes. Call before traveling to ask what is currently available and confirm the exact unit, condition, dimensions, and transaction details." },
  { question: "Will Appliance King buy my appliance?", answer: "Purchase interest depends on type, model, honest condition, visible damage, location, access, and current needs. No purchase, price, or pickup is automatically promised." },
  { question: "Is Appliance King insured?", answer: "Yes. Appliance King is represented on this site as insured." },
  { question: "Does the website promise a fixed price?", answer: "No. Symptoms can have several causes, and property conditions change the scope. The estimate visit is used to inspect and explain the next practical step." },
  { question: "What should I prepare before the appointment?", answer: "Clear safe access, secure pets, record the model label and symptoms, and share stairs, gates, parking, tenant, building, or utility details that may affect the visit." },
  { question: "What should I do for smoke, sparking, or gas odor?", answer: "Stop using the equipment. Leave the area for a suspected gas leak and contact the gas utility or emergency services from a safe location. For smoke, fire, or immediate danger, call emergency services." },
  { question: "Can I keep using an appliance with a burning smell?", answer: "No. Stop use and disconnect power only when it is safe to do so. Burning odor, smoke, sparking, severe overheating, or damaged wiring requires safety attention before another cycle." },
  { question: "Does a long dryer cycle always mean the dryer is broken?", answer: "No. The dryer, power or fuel supply, controls, load, and exhaust path can all affect drying. Restricted venting can overlap with appliance symptoms." },
  { question: "Can you guarantee a repair before inspection?", answer: "No. The cause, condition, access, parts, and broader scope must be understood before a responsible next step can be discussed." },
  { question: "How do online bookings work?", answer: "The Calendly page shows available estimate times. Select a time and provide accurate contact and job information. A direct booking link is available if the embedded calendar does not display." },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...faqSchema(faqs) }} />
      <main id="main-content">
        <section className="page-hero page-hero--compact">
          <div className="content-shell content-shell--narrow">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
            <p className="eyebrow">Clear answers / no inflated promises</p>
            <h1>Appliance King service questions, answered.</h1>
            <p className="direct-answer">Find direct answers about appliance repair, estimates, dryer vents, handyman scope, used appliances, commercial properties, safety, scheduling, and the communities Appliance King normally serves around Macon.</p>
          </div>
        </section>
        <section className="section content-shell content-shell--narrow faq-section"><FaqList items={faqs} /></section>
        <div className="content-shell"><CtaBand /></div>
      </main>
    </>
  );
}
