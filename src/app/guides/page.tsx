import { Metadata } from "next";
import Link from "next/link";
import {
  BookIcon,
  SwordIcon,
  GhostIcon,
  StarIcon,
  GemIcon,
  ChevronRightIcon,
  LightningIcon,
} from "@/components/icons/GameIcons";

export const metadata: Metadata = {
  title: "All Guides - Complete Game Guide Collection",
  description:
    "Browse all guides for Netherworld Covenant. Combat mechanics, weapons, companions, tier lists, relics, and progression tips.",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "Beginner's Guide",
    description: "Everything you need to know to start your journey through the netherworld.",
    href: "/guides/beginners",
    icon: <BookIcon size={28} />,
    color: "text-blue-400",
    borderColor: "border-blue-900/30",
  },
  {
    title: "Combat Guide",
    description: "Master dodging, parrying, Ethereal Dash, Ghost Step, and advanced combat techniques.",
    href: "/guides/combat",
    icon: <SwordIcon size={28} />,
    color: "text-red-400",
    borderColor: "border-red-900/30",
  },
  {
    title: "Weapon Guide",
    description: "Learn about all 8 weapon types, their stats, and best class pairings.",
    href: "/guides/weapons",
    icon: <SwordIcon size={28} />,
    color: "text-orange-400",
    borderColor: "border-orange-900/30",
  },
  {
    title: "Companion Guide",
    description: "Understand Soul Companions, Ghost Step abilities, and which companion fits your playstyle.",
    href: "/guides/companions",
    icon: <GhostIcon size={28} />,
    color: "text-purple-400",
    borderColor: "border-purple-900/30",
  },
  {
    title: "Tier List",
    description: "Find the best S-tier classes, weapons, and companions for optimal builds.",
    href: "/guides/tier-list",
    icon: <StarIcon size={28} />,
    color: "text-yellow-400",
    borderColor: "border-yellow-900/30",
  },
  {
    title: "Relic Guide",
    description: "Discover all relics, their effects, and the best combinations for your build.",
    href: "/guides/relics",
    icon: <GemIcon size={28} />,
    color: "text-green-400",
    borderColor: "border-green-900/30",
  },
  {
    title: "Progression Guide",
    description: "Learn about currencies, upgrade priorities, and the optimal path to power.",
    href: "/guides/progression",
    icon: <LightningIcon size={28} />,
    color: "text-cyan-400",
    borderColor: "border-cyan-900/30",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-purple-400">Guides</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <BookIcon size={48} className="text-purple-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">All Guides</h1>
              <p className="text-gray-500">Everything you need to master the Netherworld</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            From basic mechanics to advanced strategies, our comprehensive guides cover every aspect
            of Netherworld Covenant. Choose a guide below to get started.
          </p>
        </header>

        {/* Guide Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className={`group p-6 bg-[#12121f] border ${guide.borderColor} rounded-xl hover:border-purple-700/50 transition-all hover:shadow-lg hover:shadow-purple-900/20`}
            >
              <div className={`${guide.color} mb-4`}>{guide.icon}</div>
              <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{guide.description}</p>
              <div className="flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                Read Guide
                <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Start */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-700/30 rounded-xl">
          <h3 className="text-xl font-bold text-gray-100 mb-4">New to Netherworld Covenant?</h3>
          <p className="text-gray-400 mb-6">
            Start with our Beginner&apos;s Guide to learn the basics, then explore combat mechanics and find your perfect class.
          </p>
          <Link
            href="/guides/beginners"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
          >
            Start with Beginner&apos;s Guide
            <ChevronRightIcon size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
