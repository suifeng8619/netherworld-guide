import { Metadata } from "next";
import Link from "next/link";
import {
  CalculatorIcon,
  ChartIcon,
  CompareIcon,
  ShareIcon,
  QuestionIcon,
  DiceIcon,
  ChevronRightIcon,
  LightningIcon,
} from "@/components/icons/GameIcons";

export const metadata: Metadata = {
  title: "Build Tools - Calculators & Planners",
  description:
    "Interactive tools for Netherworld Covenant. Build calculator, damage simulator, build sharing, class finder, and more.",
  alternates: {
    canonical: "/tools",
  },
};

const tools = [
  {
    title: "Build Calculator",
    description: "Create Netherworld Covenant builds and see real-time stats with interactive radar charts.",
    href: "/tools/build-calculator",
    icon: <CalculatorIcon size={28} />,
    color: "from-blue-600 to-cyan-600",
    iconColor: "text-blue-400",
  },
  {
    title: "Damage Calculator",
    description: "Simulate DPS, critical hits, and see detailed damage breakdowns against different enemy types.",
    href: "/tools/damage-calculator",
    icon: <ChartIcon size={28} />,
    color: "from-red-600 to-orange-600",
    iconColor: "text-red-400",
  },
  {
    title: "Compare Builds",
    description: "Side-by-side comparison of two different builds. See which one has better stats for your playstyle.",
    href: "/tools/compare",
    icon: <CompareIcon size={28} />,
    color: "from-orange-600 to-amber-600",
    iconColor: "text-orange-400",
  },
  {
    title: "Class Finder",
    description: "Answer a few questions about your playstyle and get personalized class recommendations.",
    href: "/tools/class-finder",
    icon: <QuestionIcon size={28} />,
    color: "from-purple-600 to-pink-600",
    iconColor: "text-purple-400",
  },
  {
    title: "Random Build",
    description: "Generate random builds for fun challenges. Lock specific options or go fully random.",
    href: "/tools/random-build",
    icon: <DiceIcon size={28} />,
    color: "from-green-600 to-emerald-600",
    iconColor: "text-green-400",
  },
  {
    title: "Build Share",
    description: "Share your builds via link, QR code, or export as image. Save build history locally.",
    href: "/tools/build-share",
    icon: <ShareIcon size={28} />,
    color: "from-violet-600 to-purple-600",
    iconColor: "text-violet-400",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-purple-400">Tools</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
              <CalculatorIcon size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Build Tools</h1>
              <p className="text-gray-500">Plan, optimize, and share your builds</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Interactive Netherworld Covenant tools to help you create the perfect build. Calculate stats, compare options,
            find your ideal class, and share your creations with the community.
          </p>
        </header>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group p-6 bg-[#12121f] border border-purple-900/30 rounded-xl transition-all hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-900/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
              <div className="flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                Open Tool
                <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-xl">
          <div className="flex items-start gap-4">
            <LightningIcon size={32} className="text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Pro Tips</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Use the <strong className="text-blue-400">Build Calculator</strong> to plan before starting a run</li>
                <li>• <strong className="text-orange-400">Compare Builds</strong> to find which setup has better synergy</li>
                <li>• Share your best builds with <strong className="text-violet-400">Build Share</strong> using QR codes</li>
                <li>• Try <strong className="text-green-400">Random Build</strong> for fun challenge runs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
