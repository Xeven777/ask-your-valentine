import { generateEmailBody } from "@/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  // let ip = req.headers["x-real-ip"] as string;
  // const forwardedFor = req.headers["x-forwarded-for"] as string;
  // if (!ip && forwardedFor) {
  //   ip = forwardedFor?.split(",").at(0) ?? "Unknown";
  // }
  try {
    let ip = req.headers.get("x-real-ip");
    // const userData = {
    //   ip: req.ip,
    //   region: req.geo?.region,
    //   city: req.geo?.city,
    //   country: req.geo?.country,
    //   latitude: req.geo?.latitude,
    //   longitude: req.geo?.longitude,
    // };
    // const emailbody = await generateEmailBody(userData);
    return NextResponse.json({ success: true, ip });
  } catch (error) {
    throw new Error("Failed");
  }
}
