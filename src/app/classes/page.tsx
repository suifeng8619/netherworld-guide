import { Metadata } from "next";
import Link from "next/link";
import {
  CrossedSwordsIcon,
  StaffIcon,
  BowIcon,
  ShieldIcon,
  PersonIcon,
  ChevronRightIcon,
  StarIcon,
} from "@/components/icons/GameIcons";
import { CLASSES } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Class Guides - All Playable Classes",
  description:
    "Complete guides for all 5 playable classes in Netherworld Covenant: Berserker, Mage, Hunter, Shield Guard, and Useless Person. Find the best builds and strategies.",
  keywords: [
    "Netherworld Covenant classes",
    "Netherworld Covenant builds",
    "Netherworld Covenant berserker",
    "Netherworld Covenant mage",
    "Netherworld Covenant hunter",
    "Netherworld Covenant shield guard",
    "Netherworld Covenant useless person",
  ],
};

const classIcons: Record<string, React.ReactNode> = {
  berserker: <CrossedSwordsIcon size={40} className="text-red-400" />,
  mage: <StaffIcon size={40} className="text-blue-400" />,
  hunter: <BowIcon size={40} className="text-green-400" />,
  "shield-guard": <ShieldIcon size={40} className="text-amber-400" />,
  "useless-person": <PersonIcon size={40} className="text-purple-400" />,
};

const classColors: Record<string, string> = {
  berserker: "from-red-600 to-orange-700",
  mage: "from-blue-600 to-cyan-700",
  hunter: "from-green-600 to-emerald-700",
  "shield-guard": "from-amber-600 to-yellow-700",
  "useless-person": "from-purple-600 to-pink-700",
};

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-purple-400">Classes</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-100 mb-4">
            Class <span className="text-purple-400">Guides</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master one of five unique classes, each with distinct playstyles,
            strengths, and build possibilities.
          </p>
        </header>

        {/* Class Grid */}
        <div className="grid gap-6">
          {CLASSES.map((cls) => (
            <Link
              key={cls.id}
              href={`/classes/${cls.id}`}
              className="group relative p-6 bg-[#12121f] border border-purple-900/30 rounded-xl overflow-hidden hover:border-purple-600/50 transition-all"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${classColors[cls.id]} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div className="relative flex flex-col lg:flex-row gap-6">
                {/* Icon and Basic Info */}
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className="p-2 bg-[#0a0a12] rounded-lg">
                    {classIcons[cls.id]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                      {cls.name}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                        {cls.playstyle}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          cls.difficulty === "Easy"
                            ? "bg-green-900/30 text-green-400"
                            : cls.difficulty === "Medium"
                            ? "bg-amber-900/30 text-amber-400"
                            : cls.difficulty === "Hard"
                            ? "bg-red-900/30 text-red-400"
                            : "bg-purple-900/30 text-purple-400"
                        }`}
                      >
                        {cls.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Damage", value: cls.stats.damage },
                      { label: "Defense", value: cls.stats.defense },
                      { label: "Mobility", value: (cls.stats as Record<string, number | undefined>).mobility ?? (cls.stats as Record<string, number | undefined>).range ?? 3 },
                      { label: "Sustain", value: (cls.stats as Record<string, number | undefined>).sustain ?? (cls.stats as Record<string, number | undefined>).potential ?? 3 },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-16">{stat.label}</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <StarIcon
                              key={i}
                              size={12}
                              className={i <= (stat.value ?? 0) ? "text-purple-400" : "text-gray-700"}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths & Weaknesses */}
                <div className="lg:w-1/3 flex gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-green-400 uppercase tracking-wider mb-2">
                      Strengths
                    </div>
                    <ul className="space-y-1">
                      {cls.strengths.slice(0, 3).map((s) => (
                        <li key={s} className="flex items-start gap-1 text-xs text-gray-500">
                          <ChevronRightIcon size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-red-400 uppercase tracking-wider mb-2">
                      Weaknesses
                    </div>
                    <ul className="space-y-1">
                      {cls.weaknesses.slice(0, 3).map((w) => (
                        <li key={w} className="flex items-start gap-1 text-xs text-gray-500">
                          <ChevronRightIcon size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <ChevronRightIcon size={24} />
              </div>
            </Link>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-12 p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
          <h3 className="text-lg font-bold text-gray-200 mb-4">
            Choosing Your Class
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <strong className="text-gray-200">New Players:</strong> Start with
              Shield Guard for a forgiving experience, or Berserker if you prefer
              aggressive combat.
            </div>
            <div>
              <strong className="text-gray-200">Veterans:</strong> Challenge
              yourself with Useless Person for the ultimate test of skill.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
