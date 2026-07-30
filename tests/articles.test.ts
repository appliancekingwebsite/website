import { describe, expect, it } from "vitest";
import { articles, pillarArticle } from "@/lib/articles";

describe("editorial launch package", () => {
  it("publishes one pillar and six supporting articles", () => {
    expect(articles).toHaveLength(7);
    expect(new Set(articles.map((article) => article.slug)).size).toBe(7);
    expect(new Set(articles.map((article) => article.h1)).size).toBe(7);
  });

  it("gives the pillar complete answer and authority assets", () => {
    expect(pillarArticle.faqs).toHaveLength(20);
    expect(pillarArticle.internalLinks.length).toBeGreaterThanOrEqual(10);
    expect(pillarArticle.sources.length).toBeGreaterThanOrEqual(5);
  });
});
