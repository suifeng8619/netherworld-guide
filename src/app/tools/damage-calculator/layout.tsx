import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damage Calculator",
  description:
    "Calculate your DPS, critical damage, and effective damage output in Netherworld Covenant. Optimize your build with precise damage calculations.",
  alternates: {
    canonical: "/tools/damage-calculator",
  },
  openGraph: {
    title: "Damage Calculator | Netherworld Covenant Guide",
    description:
      "Calculate your DPS and optimize damage output in Netherworld Covenant.",
  },
};

export default function DamageCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
