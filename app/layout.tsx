import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Yoga Retreat Turkey | Luxury Yoga Retreats in Turkey",
    template: "%s | Yoga Retreat Turkey"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Yoga Retreat Turkey",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: IMAGES.hero,
        width: 1200,
        height: 630,
        alt: "Luxury yoga retreat in Turkey with ocean view and private villa experience"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Retreat Turkey",
    description: siteConfig.description,
    images: [IMAGES.hero]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
