import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Build Generator",
  description:
    "Generate random Netherworld Covenant builds for fun challenges. Lock specific options and randomize the rest for unique gameplay experiences.",
  alternates: {
    canonical: "/tools/random-build",
  },
  openGraph: {
    title: "Random Build Generator | Netherworld Covenant Guide",
    description:
      "Generate random builds for fun challenges and unique gameplay.",
  },
};

export default function RandomBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
