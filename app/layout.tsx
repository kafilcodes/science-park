import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Science Park Dhamtari | Explore, Learn, Innovate",
  description: "A premier destination for scientific exploration and nature in Dhamtari. Experience interactive exhibits, lush gardens, and educational programs.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
