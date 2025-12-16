import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://netherworldcovenant.com"),
  title: {
    default: "Netherworld Covenant Guide - Builds, Classes & Boss Strategies",
    template: "%s | Netherworld Covenant Guide",
  },
  description:
    "The ultimate guide for Netherworld Covenant. Find the best builds, class guides, boss strategies, and tips for this action roguelike game.",
  keywords: [
    "Netherworld Covenant",
    "Netherworld Covenant guide",
    "Netherworld Covenant builds",
    "Netherworld Covenant wiki",
    "Netherworld Covenant classes",
    "Netherworld Covenant boss",
    "Netherworld Covenant tier list",
    "action roguelike",
    "soulslike roguelike",
  ],
  authors: [{ name: "Netherworld Guide Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Netherworld Covenant Guide",
    title: "Netherworld Covenant Guide - Builds, Classes & Boss Strategies",
    description:
      "The ultimate guide for Netherworld Covenant. Find the best builds, class guides, boss strategies, and tips.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherworld Covenant Guide",
    description:
      "The ultimate guide for Netherworld Covenant - builds, classes, bosses & more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
