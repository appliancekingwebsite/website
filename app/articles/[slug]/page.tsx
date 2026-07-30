import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { articleBySlug, articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.description, path: `/articles/${slug}` });
}

export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
