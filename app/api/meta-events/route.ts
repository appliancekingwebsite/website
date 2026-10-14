import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { tracking } from "@/lib/business";

export const runtime = "nodejs";

const ALLOWED = new Set(["PageView", "Lead", "Schedule", "Contact", "ViewContent", "InitiateCheckout", "AddToCart"]);

type Body = {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  external_id?: string;
  fbp?: string;
  fbc?: string;
  custom_data?: Record<string, string | number | boolean>;
  user?: { fn?: string; ct?: string; zp?: string };
};

const hash = (v?: string) => {
  const n = v?.trim().toLowerCase();
  return n ? [createHash("sha256").update(n).digest("hex")] : undefined;
};

/**
 * Meta Conversions API relay. Browser pixel events are mirrored here with the same
 * event_id so Meta de-duplicates them and keeps counting when ad blockers or iOS
 * privacy settings drop the browser pixel. Needs META_CAPI_ACCESS_TOKEN (server env).
 */
export async function POST(request: Request) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!token) return new NextResponse(null, { status: 204 });

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  if (!body.event_name || !ALLOWED.has(body.event_name) || !body.event_id) {
    return NextResponse.json({ error: "bad event" }, { status: 400 });
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;
  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id,
        event_source_url: body.event_source_url,
        action_source: "website",
        user_data: {
          client_ip_address: forwarded,
          client_user_agent: request.headers.get("user-agent") ?? undefined,
          external_id: body.external_id ? [createHash("sha256").update(body.external_id).digest("hex")] : undefined,
          fbp: body.fbp,
          fbc: body.fbc,
          fn: hash(body.user?.fn?.split(" ")[0]),
          ct: hash(body.user?.ct?.replace(/[^a-z]/gi, "")),
          zp: hash(body.user?.zp?.slice(0, 5)),
          country: hash("us"),
          st: hash("ga"),
        },
        custom_data: body.custom_data,
      },
    ],
    ...(process.env.META_TEST_EVENT_CODE ? { test_event_code: process.env.META_TEST_EVENT_CODE } : {}),
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${tracking.metaPixelId}/events?access_token=${encodeURIComponent(token)}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
  );
  return new NextResponse(null, { status: res.ok ? 204 : 502 });
}
