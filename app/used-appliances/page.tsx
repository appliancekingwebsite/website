import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Used Appliances in Macon, GA | Appliance King",
  description: "Ask Appliance King about changing used-appliance inventory in Macon and prepare the dimensions, access, and connection details.",
  path: "/used-appliances",
});

export default function UsedAppliancesPage() {
  return <BasicPage eyebrow="Changing inventory / call first" h1="Used appliances in Macon, GA."
    answer="Appliance King buys and sells used appliances, but inventory changes frequently. Call before traveling to ask what is currently available, then confirm the exact model, condition, dimensions, connection needs, pickup or delivery expectations, and installation scope for the specific appliance."
    sections={[
      { heading: "What should you ask before choosing a used appliance?", answer: "Ask for the model, dimensions, known operating condition, included accessories, connection type, and pickup or delivery details. Verify the actual unit rather than relying on a general category.", bullets: ["Exact dimensions", "Model label", "Known condition", "Connections", "Transport", "Installation"] },
      { heading: "How do you know whether it will fit?", answer: "Measure the opening, door swing, surrounding clearance, delivery path, stairs, and connection positions. Nominal widths do not guarantee the appliance fits the space or route." },
      { heading: "Can Appliance King install the appliance?", answer: "Installation requests are reviewed around the appliance, site, access, utilities, venting, required parts, and lawful scope. Share these details while discussing availability." },
    ]} />;
}
