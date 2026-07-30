import { BasicPage } from "@/components/basic-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy | Appliance King", description: "Privacy information for the Appliance King website and third-party booking calendar.", path: "/privacy" });

export default function PrivacyPage() {
  return <BasicPage eyebrow="Website policy / updated July 30, 2026" h1="Appliance King privacy policy." cta={false}
    answer="This website provides business information, telephone links, and a third-party Calendly booking experience. Appliance King does not use a custom website contact form in this version."
    sections={[
      { heading: "What information can be collected?", answer: "If you call, book through Calendly, or interact with future analytics, information may be processed to respond to the request, operate the website, understand usage, prevent abuse, and meet legal obligations. Calendly applies its own privacy terms to booking data." },
      { heading: "How are external services involved?", answer: "The booking calendar loads from Calendly. Hosting, security, and future analytics providers may process technical data such as IP address, device, page, and event information according to their services and policies." },
      { heading: "How can you ask a privacy question?", answer: "Call Appliance King at 478-273-7539. This policy should be updated when a production domain, analytics provider, email address, or additional data collection is added." },
    ]} />;
}
