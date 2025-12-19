import { Metadata } from "next";
import Link from "next/link";
import { ShieldIcon, ChevronRightIcon, StarIcon, GhostIcon } from "@/components/icons/GameIcons";
import { SOUL_COMPANIONS, TIER_RATINGS } from "@/data/gameData";
import { ResourceLinks } from "@/components/ui/ResourceLinks";

export const metadata: Metadata = {
  title: "Soul Companion Guide - Ghost Step & Abilities",
  description:
    "Complete Soul Companion guide for Netherworld Covenant. Learn about all companions, their Ghost Step abilities, passive bonuses, and best class pairings.",
  alternates: {
    canonical: "/guides/companions",
  },
};

const tierColors: Record<string, string> = {
  S: "bg-gradient-to-r from-yellow-600 to-amber-500 text-yellow-100",
  A: "bg-gradient-to-r from-purple-600 to-violet-500 text-purple-100",
  B: "bg-gradient-to-r from-blue-600 to-cyan-500 text-blue-100",
  C: "bg-gradient-to-r from-green-600 to-emerald-500 text-green-100",
};

export default function CompanionsPage() {
  const companionTiers = TIER_RATINGS.companions;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Companions</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <GhostIcon size={48} className="text-blue-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Soul Companions</h1>
              <p className="text-gray-500">Your ethereal allies in the Netherworld</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Soul Companions are ethereal beings bound to your character. They provide passive
            bonuses and the crucial Ghost Step ability — your emergency teleport that can
            save you from certain death.
          </p>
        </header>

        {/* Ghost Step Explanation */}
        <section className="mb-16 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-900/30 rounded-xl">
          <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <GhostIcon size={24} />
            Understanding Ghost Step
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">How It Works</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                  Place your companion anywhere on the field before combat
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                  Activate Ghost Step to instantly teleport to your companion&apos;s location
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                  Each companion has a unique effect triggered upon teleport
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                  Cooldown starts after Ghost Step is used
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-2">Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Place companion in a safe corner before boss fights
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Use offensively to reposition for backstab damage
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Save for bullet-hell phases where dodging isn&apos;t enough
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Remember: Ghost Step has i-frames during teleport
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Companion Tier List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <StarIcon size={24} className="text-yellow-500" />
            Companion Tier List
          </h2>
          <div className="space-y-3">
            {(["S", "A", "B", "C"] as const).map((tierLevel) => {
              const companionsInTier = Object.entries(companionTiers).filter(
                ([, tierData]) => tierData.tier === tierLevel
              );
              if (companionsInTier.length === 0) return null;

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
                    {companionsInTier.map(([companionId]) => {
                      const companion = SOUL_COMPANIONS.find((c) => c.id === companionId);
                      return companion ? (
                        <span
                          key={companionId}
                          className="px-3 py-1.5 bg-gray-800/50 text-gray-200 rounded text-sm flex items-center gap-2"
                        >
                          {companion.name}
                          <span className="text-xs text-gray-500">({companion.type})</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* All Companions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">All Soul Companions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SOUL_COMPANIONS.map((companion) => {
              const tierData = companionTiers[companion.id as keyof typeof companionTiers];
              const tier = tierData?.tier || "C";
              return (
                <div
                  key={companion.id}
                  className="p-6 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-100">{companion.name}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold ${tierColors[tier]}`}
                        >
                          {tier}
                        </span>
                      </div>
                      <span className="text-sm text-blue-400">{companion.type}</span>
                    </div>
                    <ShieldIcon size={24} className="text-blue-500" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">{companion.description}</p>

                  {/* Abilities */}
                  <div className="p-3 bg-blue-900/10 border border-blue-900/30 rounded-lg mb-4">
                    <p className="text-xs text-blue-400 mb-1">Abilities</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {companion.abilities.map((ability, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ChevronRightIcon size={12} className="text-blue-400" />
                          {ability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Playstyle */}
                  <div className="p-3 bg-purple-900/10 border border-purple-900/30 rounded-lg mb-4">
                    <p className="text-xs text-purple-400 mb-1">Playstyle</p>
                    <p className="text-sm text-gray-300">{companion.playstyle}</p>
                  </div>

                  {/* Best For */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {companion.bestFor.map((target, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Companion Selection Tips */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Companion Selection Tips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Defensive vs Offensive",
                description:
                  "Guardian and Protector are safer choices. Executioner and Berserker reward aggressive play.",
              },
              {
                title: "Match Your Playstyle",
                description:
                  "If you struggle with dodging, pick a defensive companion. If you want faster clears, go offensive.",
              },
              {
                title: "Consider Boss Matchups",
                description:
                  "Some bosses are easier with specific companions. Guardian shines against multi-hit attacks.",
              },
              {
                title: "Ghost Step Timing",
                description:
                  "Practice using Ghost Step reactively. The i-frames can phase through attacks.",
              },
              {
                title: "Placement Matters",
                description:
                  "Put your companion where you'll need to escape to, not just any random corner.",
              },
              {
                title: "Cooldown Management",
                description:
                  "Don't waste Ghost Step. Track the cooldown and plan your aggression around it.",
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
