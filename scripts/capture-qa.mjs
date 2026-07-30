import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });

for (const shot of [
  { path: "/tmp/appliance-king-home-desktop.png", viewport: { width: 1440, height: 1200 }, url: "/" },
  { path: "/tmp/appliance-king-home-mobile.png", viewport: { width: 390, height: 844 }, url: "/" },
  { path: "/tmp/appliance-king-services-tablet.png", viewport: { width: 768, height: 1024 }, url: "/services" },
  { path: "/tmp/appliance-king-service-desktop.png", viewport: { width: 1440, height: 1200 }, url: "/services/appliance-repair" },
  { path: "/tmp/appliance-king-book-mobile.png", viewport: { width: 390, height: 844 }, url: "/book" },
]) {
  const page = await browser.newPage({ viewport: shot.viewport, reducedMotion: "reduce" });
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort());
  await page.goto(`http://127.0.0.1:3000${shot.url}`, { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: shot.path, fullPage: true });
  await page.close();
}

await browser.close();
