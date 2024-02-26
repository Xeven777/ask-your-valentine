import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";
import { generateEmailBody, sendEmail } from "@/actions";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  try {
    const { browser, os, device } = userAgent(req);
    const headersList = headers();

    const ip =
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      headersList.get("x-client-ip") ||
      headersList.get("x-remote-ip") ||
      headersList.get("x-remote-addr") ||
      "unknown ip address";
    let geoLocation = {};
    if (ip) {
      const ipdata = await fetch(`http://ip-api.com/json/${ip}`);
      geoLocation = await ipdata.json();
    }
    const userData = {
      ok: true,
      ip_address: ip,
      browser: browser?.name || "unknown browser",
      os: os?.name || "unknown os",
      device: device?.model || "unknown device",
      geo: geoLocation ? geoLocation : "unknown location",
    };
    const emailbody = await generateEmailBody(userData);
    await sendEmail(emailbody, email);
    return NextResponse.json({ success: true, status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Server Error",
      status: 500,
    });
  }
}