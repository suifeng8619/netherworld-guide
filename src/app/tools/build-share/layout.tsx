import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Share",
  description:
    "Share your Netherworld Covenant builds with friends. Generate shareable links and QR codes for your favorite class, weapon, and relic combinations.",
  alternates: {
    canonical: "/tools/build-share",
  },
  openGraph: {
    title: "Build Share | Netherworld Covenant Guide",
    description:
      "Share your builds with shareable links and QR codes.",
  },
};

export default function BuildShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
