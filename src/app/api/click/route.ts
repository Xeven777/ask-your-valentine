// import { generateEmailBody } from "@/actions";

import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  const { ua } = userAgent(req);

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");

  const data = {
    ok: true,
    ip_address: ip,
    user_agent: ua,
  };
  // const emailbody = await generateEmailBody(userData);
  return NextResponse.json({ success: true, data });
}
