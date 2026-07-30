import { describe, expect, it } from "vitest";
import { business } from "@/lib/business";

describe("public business configuration", () => {
  it("keeps every conversion path on the confirmed phone and booking event", () => {
    expect(business.phoneDisplay).toBe("478-273-7539");
    expect(business.phoneHref).toBe("tel:+14782737539");
    expect(business.bookingUrl).toBe(
      "https://calendly.com/applianceking-estimate/estimate",
    );
  });
});
