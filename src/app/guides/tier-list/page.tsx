import { Metadata } from "next";
import Link from "next/link";
import { StarIcon, SwordIcon, ShieldIcon, UserIcon } from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS, SOUL_COMPANIONS, TIER_RATINGS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Tier List - Best Classes, Weapons & Companions",
  description:
    "Complete tier list for Netherworld Covenant. Find the best S-tier classes, weapons, and companions for optimal builds and easy progression.",
  alternates: {
    canonical: "/guides/tier-list",
  },
};

const tierColors: Record<string, { bg: string; border: string; label: string }> = {
  S: { bg: "bg-gradient-to-r from-yellow-600 to-amber-500 text-yellow-100", border: "border-yellow-500", label: "Meta" },
  A: { bg: "bg-gradient-to-r from-purple-600 to-violet-500 text-purple-100", border: "border-purple-500", label: "Strong" },
  B: { bg: "bg-gradient-to-r from-blue-600 to-cyan-500 text-blue-100", border: "border-blue-500", label: "Good" },
  C: { bg: "bg-gradient-to-r from-green-600 to-emerald-500 text-green-100", border: "border-green-500", label: "Average" },
};

const tiers = ["S", "A", "B", "C"] as const;

export default function TierListPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Tier List</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <StarIcon size={48} className="text-yellow-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Tier List</h1>
              <p className="text-gray-500">Find the best builds for your playstyle</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Our tier rankings are based on overall effectiveness, ease of use, and viability
            in both early game and endgame content. S-tier options are top performers, while
            lower tiers are still viable with proper execution.
          </p>
        </header>

        {/* Tier Explanation */}
        <section className="mb-12 grid sm:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier}
              className={`p-4 rounded-lg border ${tierColors[tier].border} bg-[#12121f]`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-black text-2xl px-3 py-1 rounded ${tierColors[tier].bg}`}>
                  {tier}
                </span>
                <span className="text-gray-400 font-medium">{tierColors[tier].label}</span>
              </div>
              <p className="text-xs text-gray-500">
                {tier === "S" && "Top-tier choices. Excellent in all content."}
                {tier === "A" && "Strong picks. Very effective with minor weaknesses."}
                {tier === "B" && "Good options. Solid performance in most situations."}
                {tier === "C" && "Average choices. Require more skill to perform well."}
              </p>
            </div>
          ))}
        </section>

        {/* Class Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <UserIcon size={24} className="text-purple-500" />
            Class Tier List
          </h2>
          <div className="space-y-3">
            {tiers.map((tierLevel) => {
              const classesInTier = Object.entries(TIER_RATINGS.classes).filter(
                ([, tierData]) => tierData.tier === tierLevel
              );
              if (classesInTier.length === 0) return null;

              return (
                <div
                  key={tierLevel}
                  className="flex border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div
                    className={`w-16 flex-shrink-0 flex items-center justify-center font-black text-2xl ${tierColors[tierLevel].bg}`}
                  >
                    {tierLevel}
                  </div>
                  <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
                    {classesInTier.map(([classId]) => {
                      const cls = CLASSES.find((c) => c.id === classId);
                      return cls ? (
                        <Link
                          key={classId}
                          href={`/classes/${classId}`}
                          className="px-3 py-2 bg-gray-800/50 text-gray-200 rounded hover:bg-purple-900/30 transition-colors flex items-center gap-2"
                        >
                          <span className="font-medium">{cls.name}</span>
                          <span className="text-xs text-gray-500">{cls.title}</span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-gray-200 mb-2">Class Tier Notes</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• <span className="text-yellow-400">Mage</span> dominates endgame due to Warm Flow scaling</li>
              <li>• <span className="text-purple-400">Berserker</span> is best for speedruns and aggressive play</li>
              <li>• <span className="text-blue-400">Hunter</span> excels at safe, consistent damage</li>
              <li>• <span className="text-green-400">Shield Guard</span> is recommended for beginners</li>
            </ul>
          </div>
        </section>

        {/* Weapon Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <SwordIcon size={24} className="text-red-500" />
            Weapon Tier List
          </h2>
          <div className="space-y-3">
            {tiers.map((tierLevel) => {
              const weaponsInTier = Object.entries(TIER_RATINGS.weapons).filter(
                ([, tierData]) => tierData.tier === tierLevel
              );
              if (weaponsInTier.length === 0) return null;

              return (
                <div
                  key={tierLevel}
                  className="flex border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div
                    className={`w-16 flex-shrink-0 flex items-center justify-center font-black text-2xl ${tierColors[tierLevel].bg}`}
                  >
                    {tierLevel}
                  </div>
                  <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
                    {weaponsInTier.map(([weaponId]) => {
                      const weapon = WEAPONS.find((w) => w.id === weaponId);
                      return weapon ? (
                        <span
                          key={weaponId}
                          className="px-3 py-2 bg-gray-800/50 text-gray-200 rounded flex items-center gap-2"
                        >
                          <span className="font-medium">{weapon.name}</span>
                          <span className="text-xs text-gray-500">{weapon.type}</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-gray-200 mb-2">Weapon Tier Notes</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• <span className="text-yellow-400">Staff</span> provides unmatched AoE and Warm Flow synergy</li>
              <li>• <span className="text-yellow-400">Greatsword</span> offers high single-target damage for boss fights</li>
              <li>• <span className="text-purple-400">Bow</span> and <span className="text-purple-400">Dual Blades</span> balance damage and safety</li>
            </ul>
          </div>
        </section>

        {/* Companion Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <ShieldIcon size={24} className="text-blue-500" />
            Companion Tier List
          </h2>
          <div className="space-y-3">
            {tiers.map((tierLevel) => {
              const companionsInTier = Object.entries(TIER_RATINGS.companions).filter(
                ([, tierData]) => tierData.tier === tierLevel
              );
              if (companionsInTier.length === 0) return null;

              return (
                <div
                  key={tierLevel}
                  className="flex border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div
                    className={`w-16 flex-shrink-0 flex items-center justify-center font-black text-2xl ${tierColors[tierLevel].bg}`}
                  >
                    {tierLevel}
                  </div>
                  <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
                    {companionsInTier.map(([companionId]) => {
                      const companion = SOUL_COMPANIONS.find((c) => c.id === companionId);
                      return companion ? (
                        <span
                          key={companionId}
                          className="px-3 py-2 bg-gray-800/50 text-gray-200 rounded flex items-center gap-2"
                        >
                          <span className="font-medium">{companion.name}</span>
                          <span className="text-xs text-gray-500">{companion.type}</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-gray-200 mb-2">Companion Tier Notes</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• <span className="text-yellow-400">Executioner</span> provides massive damage boost for skilled players</li>
              <li>• <span className="text-purple-400">Guardian</span> is the safest choice for survival-focused builds</li>
              <li>• All companions are viable; tier reflects optimal performance</li>
            </ul>
          </div>
        </section>

        {/* Meta Build */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Current Meta Build</h2>
          <div className="p-6 bg-gradient-to-r from-yellow-900/10 to-amber-900/10 border border-yellow-900/30 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-600 text-yellow-100 font-bold rounded">S-TIER</span>
              <span className="text-gray-300 font-semibold">Recommended Build</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Class</p>
                <p className="font-semibold text-gray-200">Mage</p>
              </div>
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Weapon</p>
                <p className="font-semibold text-gray-200">Staff</p>
              </div>
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Companion</p>
                <p className="font-semibold text-gray-200">Executioner</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              This build maximizes Warm Flow stacking with Staff&apos;s AoE to quickly build damage
              bonuses. Executioner provides massive burst damage when enemies are low. Recommended
              for players who want to clear content quickly and have good positioning skills.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
