import type { Metadata } from "next";
import Script from "next/script";
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
  authors: [{ name: "Netherworld Guide Team" }],
  alternates: {
    canonical: "/",
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Netherworld Covenant Guide",
  url: "https://netherworldcovenant.com",
  description:
    "The ultimate guide for Netherworld Covenant. Find the best builds, class guides, boss strategies, and tips for this action roguelike game.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://netherworldcovenant.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//stats.toolifybox.com" />
        <link rel="preconnect" href="https://stats.toolifybox.com" crossOrigin="anonymous" />
        <Script
          defer
          data-domain="netherworldcovenant.com"
          src="https://stats.toolifybox.com/js/script.file-downloads.outbound-links.js"
          strategy="lazyOnload"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
