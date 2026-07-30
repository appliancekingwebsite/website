import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: `/services/${slug}` });
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();
  return <ServicePage service={service} />;
}
