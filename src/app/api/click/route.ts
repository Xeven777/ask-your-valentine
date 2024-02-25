// import { generateEmailBody } from "@/actions";

import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  const { browser, os, device } = userAgent(req);
  const geo = req.geo;
  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    headersList.get("x-client-ip") ||
    headersList.get("x-remote-ip") ||
    headersList.get("x-remote-addr") ||
    "unknown ip address";

  const data = {
    ok: true,
    ip_address: ip,
    browser: browser?.name || "unknown browser",
    os: os?.name || "unknown os",
    device: device?.model || "unknown device",
    geo: geo,
  };
  // const emailbody = await generateEmailBody(userData);
  return NextResponse.json({ success: true, data });
}
