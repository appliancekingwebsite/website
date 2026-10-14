import { notFound } from "next/navigation";
import { ShopPage } from "@/components/shop-page";
import { pageMetadata } from "@/lib/seo";
import { shopBySlug, shopCategories } from "@/lib/shop";

export function generateStaticParams() {
  return shopCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = shopBySlug[slug];
  if (!category) return {};
  return pageMetadata({
    title: category.title,
    description: category.description,
    path: `/used-appliances/${slug}`,
    image: category.hero.src,
  });
}

export default async function ShopRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = shopBySlug[slug];
  if (!category) notFound();
  return <ShopPage category={category} />;
}
