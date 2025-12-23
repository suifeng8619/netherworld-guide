import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Comparison",
  description:
    "Compare multiple Netherworld Covenant builds side by side. Analyze stats, strengths, and weaknesses to find the best build for your playstyle.",
  alternates: {
    canonical: "/tools/compare",
  },
  openGraph: {
    title: "Build Comparison | Netherworld Covenant Guide",
    description:
      "Compare builds side by side to find the best option for you.",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
