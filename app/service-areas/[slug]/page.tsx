import { notFound } from "next/navigation";
import { LocationPage } from "@/components/location-page";
import { locationBySlug, locations } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationBySlug[slug];
  if (!location) return {};
  return pageMetadata({ title: location.title, description: location.description, path: `/service-areas/${slug}` });
}

export default async function LocationRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationBySlug[slug];
  if (!location) notFound();
  return <LocationPage location={location} />;
}
