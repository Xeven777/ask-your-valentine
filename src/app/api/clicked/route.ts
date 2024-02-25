import { generateEmailBody } from "@/actions";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  // let ip = req.headers["x-real-ip"] as string;
  // const forwardedFor = req.headers["x-forwarded-for"] as string;
  // if (!ip && forwardedFor) {
  //   ip = forwardedFor?.split(",").at(0) ?? "Unknown";
  // }
  try {
    const userData = {
      ip: req.ip,
      region: req.geo?.region,
      city: req.geo?.city,
      country: req.geo?.country,
      latitude: req.geo?.latitude,
      longitude: req.geo?.longitude,
    };
    const emailbody = await generateEmailBody(userData);
    return NextResponse.json({ success: true, userData });
  } catch (error) {
    throw new Error("Failed");
  }
}
