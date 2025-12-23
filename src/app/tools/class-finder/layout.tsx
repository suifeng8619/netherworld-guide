import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Finder Quiz",
  description:
    "Find your perfect Netherworld Covenant class with our interactive quiz. Answer questions about your playstyle to discover your ideal character.",
  alternates: {
    canonical: "/tools/class-finder",
  },
  openGraph: {
    title: "Class Finder Quiz | Netherworld Covenant Guide",
    description:
      "Discover your ideal class with our interactive playstyle quiz.",
  },
};

export default function ClassFinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
