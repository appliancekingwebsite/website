import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commercial Appliance & Property Services | Macon",
  description: "Scope commercial appliance, dryer-vent, handyman, landscaping, and property maintenance requests in Macon, Georgia.",
  path: "/commercial-services",
});

export default function CommercialPage() {
  return <BasicPage eyebrow="Property teams / operators / facilities" h1="Commercial appliance and property services in Macon."
    answer="Appliance King reviews commercial appliance, installation, dryer-vent, handyman, landscaping, and property-maintenance requests for Macon-area businesses and managed properties. Equipment type, access, operating needs, safety requirements, and the lawful trade scope determine whether a project is a fit."
    sections={[
      { heading: "Which commercial properties can request service?", answer: "Restaurants, offices, rentals, small facilities, retail properties, and other local operations can describe their needs for review. A request is not accepted blindly; equipment and site requirements are confirmed first." },
      { heading: "What should a property manager include?", answer: "Share the site contact, equipment type and model, symptoms, access hours, loading or parking limits, tenant coordination, photos, and whether business operations depend on the equipment.", bullets: ["Site contact", "Model and symptom", "Access windows", "Operational impact", "Approval process"] },
      { heading: "What work is outside handyman scope?", answer: "Projects requiring licensed electrical contracting, regulated gas work, permits, specialized commercial refrigeration credentials, or another regulated trade are not represented as general handyman work." },
    ]} />;
}
