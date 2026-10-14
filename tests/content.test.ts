import { describe, expect, it } from "vitest";
import { locations, services } from "@/lib/content";

const unsupportedClaims = [
  /same[- ]day/i,
  /free estimate/i,
  /guaranteed/i,
  /\b\d+\+? years\b/i,
  /\bwe are (?:a )?licensed/i,
];

describe("public content inventory", () => {
  it("ships the planned service and location pages with unique search fields", () => {
    expect(services).toHaveLength(13);
    expect(locations).toHaveLength(12);
    expect(new Set(services.map((item) => item.slug)).size).toBe(services.length);
    expect(new Set(services.map((item) => item.h1)).size).toBe(services.length);
    expect(new Set(locations.map((item) => item.h1)).size).toBe(locations.length);
  });

  it("keeps descriptions snippet-sized and excludes unsupported claims", () => {
    for (const item of [...services, ...locations]) {
      expect(item.description.length).toBeLessThanOrEqual(160);
      const copy = JSON.stringify(item);
      unsupportedClaims.forEach((claim) => expect(copy).not.toMatch(claim));
    }
  });
});
