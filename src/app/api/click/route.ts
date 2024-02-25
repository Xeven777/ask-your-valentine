// import { generateEmailBody } from "@/actions";

import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  const useragent = userAgent(req);

  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    headersList.get("x-client-ip") ||
    headersList.get("x-remote-ip") ||
    headersList.get("x-remote-addr") ||
    "couldnt find ip address";

  const data = {
    ok: true,
    ip_address: ip,
    user_agent: useragent,
  };
  // const emailbody = await generateEmailBody(userData);
  return NextResponse.json({ success: true, data });
}
