import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

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
        url: "",
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
      <body className={montserrat.className}>
        <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
          {children}
          <Footer />
        </div>
        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  );
}
