import { Metadata } from "next";
import Link from "next/link";
import { GemIcon, StarIcon, ChevronRightIcon } from "@/components/icons/GameIcons";
import { RELICS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Relic Guide - All Relics & Best Choices",
  description:
    "Complete relic guide for Netherworld Covenant. Find all relics, their effects, tier rankings, and best relic combinations for each class.",
  alternates: {
    canonical: "/guides/relics",
  },
};

const tierColors: Record<string, string> = {
  S: "bg-gradient-to-r from-yellow-600 to-amber-500 text-yellow-100",
  A: "bg-gradient-to-r from-purple-600 to-violet-500 text-purple-100",
  B: "bg-gradient-to-r from-blue-600 to-cyan-500 text-blue-100",
  C: "bg-gradient-to-r from-green-600 to-emerald-500 text-green-100",
};

const rarityColors: Record<string, string> = {
  legendary: "bg-yellow-900/30 text-yellow-400 border-yellow-700",
  rare: "bg-purple-900/30 text-purple-400 border-purple-700",
  common: "bg-gray-800 text-gray-400 border-gray-700",
};

const categoryLabels: Record<string, string> = {
  offensive: "Offensive",
  defensive: "Defensive",
  utility: "Utility",
};

export default function RelicsPage() {
  const relicsByCategory = {
    offensive: RELICS.filter((r) => r.category === "offensive"),
    defensive: RELICS.filter((r) => r.category === "defensive"),
    utility: RELICS.filter((r) => r.category === "utility"),
  };

  const tiers = ["S", "A", "B", "C"] as const;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Relics</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <GemIcon size={48} className="text-yellow-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Relic Guide</h1>
              <p className="text-gray-500">Powerful artifacts to enhance your build</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Relics are powerful artifacts found throughout the Netherworld. You can equip up to
            5 relics per run, each providing unique bonuses. Choose wisely to complement your
            class and playstyle.
          </p>
        </header>

        {/* Relic Basics */}
        <section className="mb-16 p-6 bg-gradient-to-r from-yellow-900/10 to-amber-900/10 border border-yellow-900/30 rounded-xl">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <GemIcon size={24} />
            Relic Basics
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">Rarity Tiers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-yellow-500" />
                  <span className="text-yellow-400">Legendary</span> - Strongest effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-purple-500" />
                  <span className="text-purple-400">Rare</span> - Good middle ground
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-gray-500" />
                  <span className="text-gray-400">Common</span> - Basic but useful
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">Offensive</span> - Damage boosts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">Defensive</span> - Survivability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">Utility</span> - Quality of life
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">Equip Limit</h3>
              <p className="text-sm text-gray-400">
                You can equip up to <span className="text-yellow-400 font-bold">5 relics</span> at
                a time. Relics found during a run are temporary; permanent relics are unlocked
                through achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Relic Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <StarIcon size={24} className="text-yellow-500" />
            Relic Tier List
          </h2>
          <div className="space-y-3">
            {tiers.map((tier) => {
              const relicsInTier = RELICS.filter((r) => r.tier === tier);
              if (relicsInTier.length === 0) return null;

              return (
                <div
                  key={tier}
                  className="flex border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div
                    className={`w-16 flex-shrink-0 flex items-center justify-center font-black text-2xl ${tierColors[tier]}`}
                  >
                    {tier}
                  </div>
                  <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
                    {relicsInTier.map((relic) => (
                      <span
                        key={relic.id}
                        className={`px-3 py-1.5 rounded text-sm border ${rarityColors[relic.rarity]}`}
                      >
                        {relic.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Relics by Category */}
        {(["offensive", "defensive", "utility"] as const).map((category) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded ${
                  category === "offensive"
                    ? "bg-red-500"
                    : category === "defensive"
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              />
              {categoryLabels[category]} Relics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relicsByCategory[category].map((relic) => (
                <div
                  key={relic.id}
                  className="p-4 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-200">{relic.name}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded border ${rarityColors[relic.rarity]}`}
                      >
                        {relic.rarity}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${tierColors[relic.tier]}`}>
                      {relic.tier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{relic.effect}</p>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Best For</p>
                    <div className="flex flex-wrap gap-1">
                      {relic.bestFor.map((classId) => (
                        <span
                          key={classId}
                          className="px-2 py-0.5 bg-purple-900/30 text-purple-300 text-xs rounded"
                        >
                          {classId === "All" ? "All Classes" : classId.charAt(0).toUpperCase() + classId.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Relic Synergies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Relic Synergies</h2>
          <div className="space-y-4">
            {[
              {
                name: "Crit Build",
                relics: ["Crimson Edge", "Serpent Fang", "Blood Pact"],
                description: "Stack critical chance and critical damage for massive burst.",
                bestFor: "Berserker, Hunter",
              },
              {
                name: "Tank Build",
                relics: ["Iron Will", "Soul Anchor", "Healing Sigil"],
                description: "Maximize survivability for difficult boss fights.",
                bestFor: "Shield Guard",
              },
              {
                name: "Speed Clear",
                relics: ["Swift Step", "Fortune's Favor", "Crimson Edge"],
                description: "Faster movement and increased drop rates for farming.",
                bestFor: "Mage, Hunter",
              },
            ].map((synergy) => (
              <div
                key={synergy.name}
                className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-200">{synergy.name}</h3>
                  <span className="text-xs text-gray-500">Best for: {synergy.bestFor}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {synergy.relics.map((relic) => (
                    <span
                      key={relic}
                      className="px-3 py-1 bg-yellow-900/20 text-yellow-300 text-sm rounded"
                    >
                      {relic}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  {synergy.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
