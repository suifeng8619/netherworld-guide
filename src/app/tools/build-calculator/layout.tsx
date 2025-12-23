import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Calculator",
  description:
    "Create and optimize your Netherworld Covenant builds. Choose class, weapon, companion, and relics to see combined stats and synergies.",
  alternates: {
    canonical: "/tools/build-calculator",
  },
  openGraph: {
    title: "Build Calculator | Netherworld Covenant Guide",
    description:
      "Create and optimize your builds with our interactive calculator.",
  },
};

export default function BuildCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
