import { simpleDecrypt } from "@/actions";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";

  console.log(fullUrl);
  const urlParams = new URLSearchParams(new URL(fullUrl).search);
  const n = await simpleDecrypt(urlParams.get("n") || "");
  console.log(n);

  return {
    title: "Hey " + n || "Cutie",
    description: "I want to ask you something",
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
