import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Residential Appliance & Handyman Services | Macon",
  description: "Book residential appliance repair, installation, dryer-vent, handyman, and property services in Macon, Georgia.",
  path: "/residential-services",
});

export default function ResidentialPage() {
  return <BasicPage eyebrow="Homes / rentals / everyday systems" h1="Residential appliance and handyman services in Macon."
    answer="Appliance King serves homeowners, landlords, and residents with appliance repair and installation, washer and dryer work, dryer-vent service, defined handyman tasks, minor electrical handyman work, and outdoor property maintenance. The exact scope and address are confirmed before scheduling."
    sections={[
      { heading: "What residential appliance work is available?", answer: "Repair requests cover major household washers, dryers, refrigerators, freezers, dishwashers, ranges, ovens, and stoves. Installation work is scoped around fit, access, utilities, connections, venting, and removal needs.", bullets: ["Major household appliance repair", "Washer and dryer installation", "Appliance installation", "Dryer-vent cleaning and repair"] },
      { heading: "What property work can be combined with the visit?", answer: "Handyman and property requests are reviewed individually. Clear task descriptions and photos help separate practical small work from jobs requiring a licensed specialty contractor.", bullets: ["General handyman tasks", "Minor electrical handyman scope", "Landscaping and property maintenance", "Rental turnover support"] },
      { heading: "How do you prepare for an estimate?", answer: "Make the appliance or work area accessible, secure pets, record model information and symptoms, and share stairs, parking, gate, tenant, or building-access details when booking." },
    ]} />;
}
