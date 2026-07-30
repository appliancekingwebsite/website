import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sell Your Appliance in Macon, GA | Appliance King",
  description: "Offer an appliance to Appliance King with the type, model, condition, photos, location, and access details. Purchases are reviewed.",
  path: "/sell-your-appliance",
});

export default function SellAppliancePage() {
  return <BasicPage eyebrow="Condition reviewed / no automatic purchase" h1="Want to sell an appliance in Macon?"
    answer="Appliance King reviews appliance purchase inquiries based on type, model, age if known, honest condition, visible damage, location, access, and current business needs. Share clear photos and the complete model label before moving the appliance. Not every appliance will be purchased."
    sections={[
      { heading: "What information should you share?", answer: "Send or be ready to describe the appliance type, complete model label, whether it operates, known problems, visible condition, location, stairs, and removal access.", bullets: ["Front and interior photos", "Model label", "Known symptoms", "Rust or damage", "Stairs and doorways", "Location"] },
      { heading: "Should you disconnect or move it first?", answer: "No. Wait until the request is reviewed and a plan is confirmed. Moving heavy appliances can damage floors, connections, the appliance, or people." },
      { heading: "Is every appliance accepted?", answer: "No. Interest changes with condition, model, access, and current needs. This page invites an evaluation; it does not promise a purchase, price, pickup, or acceptance." },
    ]} />;
}
