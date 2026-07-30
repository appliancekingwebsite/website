import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort());
});

const routes = [
  "/",
  "/services",
  "/residential-services",
  "/commercial-services",
  "/about",
  "/faq",
  "/book",
  "/contact",
  "/privacy",
  "/terms",
  "/used-appliances",
  "/sell-your-appliance",
  "/service-areas",
  "/articles",
  ...[
    "appliance-repair",
    "washer-repair",
    "dryer-repair",
    "refrigerator-freezer-repair",
    "dishwasher-repair",
    "range-oven-stove-repair",
    "appliance-installation",
    "washer-dryer-installation",
    "dryer-vent-cleaning-repair",
    "handyman-services",
    "minor-electrical-repairs",
    "landscaping-property-maintenance",
    "commercial-property-maintenance",
  ].map((slug) => `/services/${slug}`),
  ...["macon-ga", "warner-robins-ga", "gray-ga", "byron-ga", "forsyth-ga"].map(
    (slug) => `/service-areas/${slug}`,
  ),
  ...[
    "repair-or-replace-appliance-macon-ga",
    "refrigerator-warning-signs-macon-ga",
    "washer-not-draining-macon-ga",
    "dryer-not-heating-or-vent-blocked",
    "how-often-clean-dryer-vent",
    "prepare-for-appliance-installation",
    "buying-used-appliance-checklist",
  ].map((slug) => `/articles/${slug}`),
];

test("every planned route renders one visible h1", async ({ page }) => {
  test.skip(test.info().project.name === "mobile", "the route inventory is viewport-independent");
  test.setTimeout(120_000);
  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1"), route).toHaveCount(1);
    await expect(page.locator("h1"), route).toBeVisible();
    expect((await page.title()).length, `${route} title length`).toBeLessThanOrEqual(65);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description?.length, `${route} description length`).toBeLessThanOrEqual(160);
    await expect(page.locator('link[rel="canonical"]'), `${route} canonical`).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]'), `${route} OG image`).toHaveCount(1);
  }
});

test("call and booking paths use the verified destinations", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const callLinks = page.locator('a[href^="tel:"]');
  await expect(callLinks.first()).toHaveAttribute("href", "tel:+14782737539");
  const links = await callLinks.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")));
  expect(new Set(links)).toEqual(new Set(["tel:+14782737539"]));
  const quickActions = page.getByRole("navigation", { name: "Quick actions" });
  await expect(quickActions).toBeVisible();
  await expect(quickActions.getByRole("link", { name: "Schedule" })).toHaveAttribute("href", "#booking");
  await expect(quickActions.getByRole("link", { name: "Call" })).toHaveAttribute("href", "tel:+14782737539");

  await page.goto("/book", { waitUntil: "domcontentloaded" });
  await expect(page.locator('iframe[data-calendar-loaded="true"]')).toBeVisible();
  await expect(page.locator('iframe[data-calendar-loaded="true"]')).toHaveAttribute(
    "src",
    /https:\/\/calendly\.com\/applianceking-estimate\/estimate/,
  );
  await expect(page.locator('a[href="https://calendly.com/applianceking-estimate/estimate"]')).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Quick actions", includeHidden: true })).toHaveAttribute(
    "aria-hidden",
    "true",
  );
});

test("homepage uses service visuals and hides quick actions near booking", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".hero-model")).toHaveCount(0);
  await expect(page.locator(".hero-repair")).toBeVisible();
  await expect(page.locator(".service-index--home .service-icon")).toHaveCount(9);
  await expect(page.getByRole("navigation", { name: "Quick actions" })).toBeVisible();
  await page.locator("#booking").scrollIntoViewIfNeeded();
  await expect(page.getByRole("navigation", { name: "Quick actions", includeHidden: true })).toHaveAttribute(
    "aria-hidden",
    "true",
  );
});

test("mobile navigation opens and service links are reachable", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile", "mobile-only behavior");
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("dialog").getByRole("link", { name: "Washer Repair", exact: true }).click();
  await expect(page).toHaveURL(/\/services\/washer-repair$/);
});

test("reduced motion disables nonessential animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const animation = await page.locator(".repair-drum--inner").first().evaluate((node) => {
    const value = getComputedStyle(node).animationDuration;
    return value.endsWith("ms") ? Number.parseFloat(value) : Number.parseFloat(value) * 1000;
  });
  expect(animation).toBeLessThanOrEqual(0.01);
});

test("pages do not overflow horizontally", async ({ page }) => {
  test.setTimeout(60_000);
  for (const route of ["/", "/services/appliance-repair", "/book", "/articles/repair-or-replace-appliance-macon-ga"]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, route).toBeLessThanOrEqual(1);
  }
});
