import { Metadata } from "next";
import Link from "next/link";
import {
  StaffIcon,
  SwordIcon,
  ShieldIcon,
  BowIcon,
  StarIcon,
  ChevronRightIcon,
  FlameIcon,
  HeartIcon,
  LightningIcon,
  InfoIcon,
  GhostIcon,
} from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Mage Build Guide - Best Builds & Strategies",
  description:
    "Complete Mage guide for Netherworld Covenant. Learn the best builds, spells, relics, and strategies for mastering the arcane arts.",
  alternates: {
    canonical: "/classes/mage",
  },
};

export default function MageGuide() {
  const classData = CLASSES.find((c) => c.id === "mage")!;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/classes" className="hover:text-purple-400 transition-colors">Classes</Link>
          <span>/</span>
          <span className="text-purple-400">Mage</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-900/30 rounded-xl">
              <StaffIcon size={48} className="text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">{classData.playstyle}</span>
                <span className="px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded">{classData.difficulty} Difficulty</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Mage</h1>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed">
            A powerful spellcaster who controls the battlefield from range.
            Master spell rotations and positioning to unleash devastating arcane power.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Damage", value: classData.stats.damage, color: "text-red-400" },
            { label: "Defense", value: classData.stats.defense, color: "text-amber-400" },
            { label: "Mobility", value: classData.stats.mobility, color: "text-green-400" },
            { label: "Sustain", value: classData.stats.sustain, color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className={`flex justify-center gap-0.5`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={16} className={i <= (stat.value ?? 0) ? stat.color : "text-gray-700"} />
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
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed">
                The Mage is Netherworld Covenant&apos;s glass cannon. With the highest burst
                damage potential in the game, Mages can delete enemies before they become a threat.
                However, this power comes at the cost of durability—one mistake can be fatal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Success as a Mage requires mastering the &quot;Warm Flow&quot; mechanic, which governs
                mana regeneration and spell potency. Maintaining optimal Warm Flow stacks while
                managing positioning separates good Mages from great ones.
              </p>
            </div>
          </section>

          {/* Warm Flow System */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <FlameIcon size={24} className="text-cyan-400" />
              Warm Flow Mechanic
            </h2>
            <div className="p-6 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 border border-blue-900/30 rounded-xl">
              <p className="text-gray-400 mb-4">
                Warm Flow is the Mage&apos;s unique resource system. Landing spells builds stacks,
                which increase both damage and mana regeneration. The key is maintaining stacks
                without overextending.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">1-3 Stacks</div>
                  <div className="text-xs text-gray-500">Normal regeneration</div>
                </div>
                <div className="text-center p-3 bg-blue-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">4-6 Stacks</div>
                  <div className="text-xs text-gray-500">Enhanced regen + damage</div>
                </div>
                <div className="text-center p-3 bg-blue-900/40 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">7+ Stacks</div>
                  <div className="text-xs text-gray-500">Maximum power</div>
                </div>
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

          {/* Recommended Weapons */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <SwordIcon size={24} className="text-purple-400" />
              Recommended Weapons
            </h2>
            <div className="space-y-4">
              {classData.recommendedWeapons.map((weaponName, idx) => {
                const weapon = WEAPONS.find((w) => w.name === weaponName);
                const tiers = ["S", "A", "B"];
                return (
                  <div key={weaponName} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <StaffIcon size={20} className="text-blue-400" />
                        <h3 className="font-bold text-gray-200">{weaponName}</h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        idx === 0 ? "bg-amber-900/50 text-amber-400" :
                        "bg-gray-800 text-gray-400"
                      }`}>
                        Tier {tiers[idx] || "B"}
                      </span>
                    </div>
                    {weapon && (
                      <p className="text-sm text-gray-400">{weapon.description}</p>
                    )}
                    {!weapon && weaponName === "Staff" && (
                      <p className="text-sm text-gray-400">
                        The definitive Mage weapon. Enhances spell damage and provides the best mana efficiency. No other weapon comes close.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Build Guide */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <LightningIcon size={24} className="text-blue-400" />
              Recommended Builds
            </h2>
            {classData.buildStrategies.map((build) => (
              <div key={build.name} className="p-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-900/30 rounded-xl mb-4">
                <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <LightningIcon size={20} />
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
                        <span key={stat} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Key Relics</div>
                    <div className="flex flex-wrap gap-2">
                      {build.keyRelics.map(relic => (
                        <span key={relic} className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded">
                          {relic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Combat Tips */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <GhostIcon size={24} className="text-purple-400" />
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
                  Essential for survival. The Guardian draws aggro and buys you time to cast.
                  Position it between you and enemies for maximum safety.
                </p>
              </div>
              <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BowIcon size={20} className="text-green-400" />
                  <h3 className="font-bold text-gray-200">Ranger</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Double ranged damage. Riskier than Guardian but maximizes kill speed.
                  Only for confident players who trust their positioning.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/classes/berserker" className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
            <ChevronRightIcon size={16} className="rotate-180" /> Berserker
          </Link>
          <Link href="/classes/hunter" className="px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
            Hunter Guide <ChevronRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
