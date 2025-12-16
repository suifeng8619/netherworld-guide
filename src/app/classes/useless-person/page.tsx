import { Metadata } from "next";
import Link from "next/link";
import {
  PersonIcon,
  SwordIcon,
  ShieldIcon,
  DaggerIcon,
  StarIcon,
  ChevronRightIcon,
  HeartIcon,
  LightningIcon,
  InfoIcon,
  WarningIcon,
  GemIcon,
} from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Useless Person Build Guide - Best Builds & Strategies",
  description:
    "Complete Useless Person guide for Netherworld Covenant. Master the ultimate challenge class with unlimited potential and adaptive playstyle.",
  keywords: [
    "Netherworld Covenant Useless Person",
    "Netherworld Covenant challenge class",
    "Netherworld Covenant hard mode",
    "best Useless Person build",
    "Useless Person guide",
  ],
};

export default function UselessPersonGuide() {
  const classData = CLASSES.find((c) => c.id === "useless-person")!;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/classes" className="hover:text-purple-400 transition-colors">Classes</Link>
          <span>/</span>
          <span className="text-purple-400">Useless Person</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-900/30 rounded-xl">
              <PersonIcon size={48} className="text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">{classData.playstyle}</span>
                <span className="px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded">{classData.difficulty}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Useless Person</h1>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed">
            The ultimate challenge class. Starts with nothing but has unlimited potential.
            For players who have mastered the game and seek the ultimate test.
          </p>
        </header>

        {/* Warning */}
        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg mb-12">
          <div className="flex items-start gap-3">
            <WarningIcon size={24} className="text-red-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-400 mb-1">Expert Players Only</h3>
              <p className="text-sm text-gray-400">
                This class is designed for players who have completed the game with other classes.
                Starting with Useless Person will result in frustration and repeated deaths.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Starting", value: 1, color: "text-red-400" },
            { label: "Potential", value: 5, color: "text-purple-400" },
            { label: "Flexibility", value: 5, color: "text-green-400" },
            { label: "Stamina", value: 5, color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="flex justify-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={16} className={i <= stat.value ? stat.color : "text-gray-700"} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <article className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <InfoIcon size={24} className="text-purple-400" />
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The &quot;Useless Person&quot; is Netherworld Covenant&apos;s equivalent of a Deprived or
              Wretch class from Souls games. You start with nothing—no class bonuses, no
              starting equipment advantages, just raw potential and enhanced stamina recovery.
            </p>
            <p className="text-gray-400 leading-relaxed">
              What makes this class unique is its <strong className="text-purple-400">universal weapon proficiency</strong>.
              Unlike other classes locked to certain weapon types, Useless Person can use
              ALL weapons effectively. Combined with superior stamina regeneration, this
              creates unlimited build possibilities for skilled players.
            </p>
          </section>

          {/* Unique Traits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <GemIcon size={24} className="text-purple-400" />
              Unique Traits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-900/30 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                  <GemIcon size={18} />
                  All Weapons Viable
                </h3>
                <p className="text-sm text-gray-400">
                  No weapon restrictions. Master any playstyle—switch from Bow to Greatsword
                  mid-run based on what relics you find.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-900/30 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                  <LightningIcon size={18} />
                  Enhanced Stamina
                </h3>
                <p className="text-sm text-gray-400">
                  Faster stamina regeneration than any other class. More dodges, more attacks,
                  more aggressive play potential.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-red-900/30 rounded-lg">
                <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                  <WarningIcon size={18} />
                  No Starting Bonuses
                </h3>
                <p className="text-sm text-gray-400">
                  Zero starting stats, no class abilities. The first few rooms are brutal—
                  survive on pure skill alone.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-900/30 rounded-lg">
                <h3 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                  <StarIcon size={18} />
                  Adaptive Growth
                </h3>
                <p className="text-sm text-gray-400">
                  Build identity forms during the run. Adapt your build to whatever relics
                  and auras the game offers.
                </p>
              </div>
            </div>
          </section>

          {/* Strengths & Weaknesses */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Strengths & Weaknesses</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#12121f] border border-green-900/30 rounded-lg">
                <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                  <ChevronRightIcon size={18} />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {classData.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-400">
                      <ChevronRightIcon size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-[#12121f] border border-red-900/30 rounded-lg">
                <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                  <ChevronRightIcon size={18} />
                  Weaknesses
                </h3>
                <ul className="space-y-2">
                  {classData.weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-gray-400">
                      <ChevronRightIcon size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Strategy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <GemIcon size={24} className="text-purple-400" />
              Survival Strategy
            </h2>
            {classData.buildStrategies.map((build) => (
              <div key={build.name} className="p-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-900/30 rounded-xl mb-4">
                <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <GemIcon size={20} />
                  {build.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Core Strategy</div>
                    <p className="text-gray-400">{build.playstyle}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Priority Stats</div>
                    <div className="flex flex-wrap gap-2">
                      {build.priorityStats.map(stat => (
                        <span key={stat} className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded">{stat}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Key Relics</div>
                    <div className="flex flex-wrap gap-2">
                      {build.keyRelics.map(relic => (
                        <span key={relic} className="px-3 py-1 bg-pink-900/30 text-pink-300 text-sm rounded">{relic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* All Weapons */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <SwordIcon size={24} className="text-purple-400" />
              Weapon Flexibility
            </h2>
            <p className="text-gray-400 mb-4">
              Since all weapons are viable, choose based on what relics you find:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { weapon: "Greatsword", synergy: "Stagger + Damage relics" },
                { weapon: "Daggers", synergy: "Crit + Attack speed relics" },
                { weapon: "Bow", synergy: "Range + Crit relics" },
                { weapon: "Staff", synergy: "Spell + Mana relics" },
                { weapon: "Shield", synergy: "Defense + Counter relics" },
                { weapon: "Spear", synergy: "Reach + Mobility relics" },
              ].map(({ weapon, synergy }) => (
                <div key={weapon} className="p-3 bg-[#12121f] border border-purple-900/30 rounded-lg">
                  <div className="font-bold text-gray-200 mb-1">{weapon}</div>
                  <div className="text-xs text-gray-500">Best with: {synergy}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Combat Tips */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <LightningIcon size={24} className="text-yellow-400" />
              Combat Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {classData.combatTips.map((tip, i) => (
                <div key={i} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                  <h4 className="font-bold text-purple-400 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-400">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Soul Companion */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <HeartIcon size={24} className="text-pink-400" />
              Best Soul Companions
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#12121f] border border-green-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldIcon size={20} className="text-amber-400" />
                  <h3 className="font-bold text-gray-200">Guardian</h3>
                  <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">Recommended</span>
                </div>
                <p className="text-sm text-gray-400">
                  For early game survival. Guardian keeps you alive through the brutal opening
                  where you have no defensive stats.
                </p>
              </div>
              <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DaggerIcon size={20} className="text-purple-400" />
                  <h3 className="font-bold text-gray-200">Rogue</h3>
                </div>
                <p className="text-sm text-gray-400">
                  For experienced players. Rogue&apos;s mobility complements your stamina advantage
                  and aggressive playstyle.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/classes/shield-guard" className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
            <ChevronRightIcon size={16} className="rotate-180" /> Shield Guard
          </Link>
          <Link href="/classes" className="px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
            All Classes <ChevronRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
