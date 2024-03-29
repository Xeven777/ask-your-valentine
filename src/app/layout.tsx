import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Clarity from "@/components/Clarity";
import { Spotlight } from "@/components/ui/Spotlight";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask Your Love!",
  description:
    "A cute website to ask your crush something you always wanted to!",
  metadataBase: new URL("https://askyourlove.vercel.app/"),
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/KuXyyull.png",
        width: 1200,
        height: 600,
      },
    ],
  },
  manifest: "/manifest.json",

  icons: {
    icon: "./favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" ? <Clarity /> : null}
      <body className={montserrat.className}>
        <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] overflow-x-hidden min-h-svh max-h-[120vh]">
          <Spotlight
            fill="#ff7a8c"
            className="-top-32 left-0 md:left-64 md:-top-24 z-0"
          />
          {children}
        </div>
        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  );
}
