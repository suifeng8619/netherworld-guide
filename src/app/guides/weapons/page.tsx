import { Metadata } from "next";
import Link from "next/link";
import { SwordIcon, ChevronRightIcon, StarIcon } from "@/components/icons/GameIcons";
import { WEAPONS, TIER_RATINGS } from "@/data/gameData";
import { ResourceLinks } from "@/components/ui/ResourceLinks";

export const metadata: Metadata = {
  title: "Weapon Guide - All Weapons & Best Builds",
  description:
    "Complete weapon guide for Netherworld Covenant. Learn about all 8 weapon types, their special abilities, damage stats, and best class pairings.",
  alternates: {
    canonical: "/guides/weapons",
  },
};

const tierColors: Record<string, string> = {
  S: "bg-gradient-to-r from-yellow-600 to-amber-500 text-yellow-100",
  A: "bg-gradient-to-r from-purple-600 to-violet-500 text-purple-100",
  B: "bg-gradient-to-r from-blue-600 to-cyan-500 text-blue-100",
  C: "bg-gradient-to-r from-green-600 to-emerald-500 text-green-100",
};

export default function WeaponsPage() {
  const weaponTiers = TIER_RATINGS.weapons;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Weapons</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <SwordIcon size={48} className="text-red-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Weapon Guide</h1>
              <p className="text-gray-500">Master every weapon in the Netherworld</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Weapons in Netherworld Covenant define your playstyle. Each weapon has unique attack
            patterns, special abilities, and synergies with different classes. Choose wisely
            to match your build.
          </p>
        </header>

        {/* Weapon Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <StarIcon size={24} className="text-yellow-500" />
            Weapon Tier List
          </h2>
          <div className="space-y-3">
            {(["S", "A", "B", "C"] as const).map((tierLevel) => {
              const weaponsInTier = Object.entries(weaponTiers).filter(
                ([, tierData]) => tierData.tier === tierLevel
              );
              if (weaponsInTier.length === 0) return null;

              return (
                <div
                  key={tierLevel}
                  className="flex border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div
                    className={`w-16 flex-shrink-0 flex items-center justify-center font-black text-2xl ${tierColors[tierLevel]}`}
                  >
                    {tierLevel}
                  </div>
                  <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
                    {weaponsInTier.map(([weaponId]) => {
                      const weapon = WEAPONS.find((w) => w.id === weaponId);
                      return weapon ? (
                        <span
                          key={weaponId}
                          className="px-3 py-1.5 bg-gray-800/50 text-gray-200 rounded text-sm flex items-center gap-2"
                        >
                          {weapon.name}
                          <span className="text-xs text-gray-500">({weapon.type})</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* All Weapons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">All Weapons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {WEAPONS.map((weapon) => {
              const tierData = weaponTiers[weapon.id as keyof typeof weaponTiers];
              const tier = tierData?.tier || "C";
              return (
                <div
                  key={weapon.id}
                  className="p-6 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-100">{weapon.name}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold ${tierColors[tier]}`}
                        >
                          {tier}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{weapon.type}</span>
                    </div>
                    <SwordIcon size={24} className="text-red-500" />
                  </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-2 bg-[#0a0a12] rounded">
                    <p className="text-xs text-gray-500">Damage</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-1.5 rounded ${
                            i <= weapon.damage ? "bg-red-500" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-[#0a0a12] rounded">
                    <p className="text-xs text-gray-500">Speed</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-1.5 rounded ${
                            i <= weapon.speed ? "bg-blue-500" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-[#0a0a12] rounded">
                    <p className="text-xs text-gray-500">Range</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-1.5 rounded ${
                            i <= weapon.range ? "bg-green-500" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-[#0a0a12] rounded">
                    <p className="text-xs text-gray-500">Stagger</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-1.5 rounded ${
                            i <= weapon.stagger ? "bg-yellow-500" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-green-900/10 border border-green-900/30 rounded-lg">
                    <p className="text-xs text-green-400 mb-2">Pros</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {weapon.pros.slice(0, 2).map((pro, i) => (
                        <li key={i}>+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                    <p className="text-xs text-red-400 mb-2">Cons</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {weapon.cons.slice(0, 2).map((con, i) => (
                        <li key={i}>- {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Best Classes</p>
                  <div className="flex flex-wrap gap-2">
                    {weapon.bestFor.map((classId) => (
                      <Link
                        key={classId}
                        href={`/classes/${classId}`}
                        className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded hover:bg-purple-900/50 transition-colors flex items-center gap-1"
                      >
                        {classId.charAt(0).toUpperCase() + classId.slice(1).replace("-", " ")}
                        <ChevronRightIcon size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* Weapon Tips */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Weapon Selection Tips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Match Your Class",
                description:
                  "Each class has weapons that synergize with their abilities. Check the 'Best For' section above.",
              },
              {
                title: "Consider Range",
                description:
                  "Melee weapons need you to be close, putting you at risk. Ranged weapons are safer but often deal less burst damage.",
              },
              {
                title: "Learn the Timing",
                description:
                  "Faster weapons are easier to use, but slower weapons often have better damage windows during boss staggers.",
              },
              {
                title: "Special Abilities Matter",
                description:
                  "Weapon special abilities can make or break a build. Some are essential for certain boss strategies.",
              },
              {
                title: "Upgrade Priority",
                description:
                  "Focus on upgrading one weapon to max before spreading resources. A +10 weapon is far better than three +5 weapons.",
              },
              {
                title: "Experiment Early",
                description:
                  "Try all weapons in Chapter 1 to find your favorite before committing upgrade materials.",
              },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                <h3 className="font-bold text-gray-200 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Resources */}
        <ResourceLinks className="mt-12" />
      </div>
    </div>
  );
}
