import { Metadata } from "next";
import Link from "next/link";
import {
  SwordIcon,
  ShieldIcon,
  LightningIcon,
  GhostIcon,
  LanternIcon,
  WarningIcon,
  ChevronRightIcon,
  TargetIcon,
} from "@/components/icons/GameIcons";
import { COMBAT_MECHANICS, WEAPONS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Combat Guide - Master Every Mechanic",
  description:
    "Complete combat guide for Netherworld Covenant. Learn dodging, parrying, Ethereal Dash, Ghost Step, Nether Lantern, and advanced techniques.",
  keywords: [
    "Netherworld Covenant combat",
    "Netherworld Covenant dodge",
    "Netherworld Covenant parry",
    "Netherworld Covenant Ghost Step",
    "Netherworld Covenant Ethereal Dash",
    "how to fight Netherworld Covenant",
    "Netherworld Covenant controls",
  ],
};

export default function CombatGuidePage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/beginners" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Combat</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <SwordIcon size={48} className="text-purple-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Combat Guide</h1>
              <p className="text-gray-500">Master every mechanic to conquer the Netherworld</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Combat in Netherworld Covenant emphasizes timing and positioning. Master dodging,
            parrying, and the unique movement abilities to survive against overwhelming odds.
          </p>
        </header>

        {/* Basic Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <SwordIcon size={24} className="text-purple-400" />
            Basic Combat Actions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {COMBAT_MECHANICS.basicActions.map((action) => (
              <div
                key={action.name}
                className="p-5 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-200 text-lg">{action.name}</h3>
                  <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-1 rounded font-mono">
                    {action.input}
                  </span>
                </div>
                <p className="text-gray-400">{action.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Mechanics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <LightningIcon size={24} className="text-yellow-400" />
            Advanced Mechanics
          </h2>
          <div className="space-y-6">
            {COMBAT_MECHANICS.advancedMechanics.map((mechanic) => (
              <div
                key={mechanic.name}
                className="p-6 bg-gradient-to-r from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    {mechanic.name === "Ethereal Dash" && <LightningIcon size={24} className="text-blue-400" />}
                    {mechanic.name === "Ghost Step" && <GhostIcon size={24} className="text-purple-400" />}
                    {mechanic.name === "Perfect Parry" && <ShieldIcon size={24} className="text-amber-400" />}
                    {mechanic.name === "Nether Lantern" && <LanternIcon size={24} className="text-orange-400" />}
                    <h3 className="text-xl font-bold text-gray-100">{mechanic.name}</h3>
                  </div>
                  {"cooldown" in mechanic && (
                    <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded">
                      Cooldown: {mechanic.cooldown}
                    </span>
                  )}
                  {"window" in mechanic && (
                    <span className="text-xs bg-amber-900/50 text-amber-400 px-2 py-1 rounded">
                      Window: {mechanic.window}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{mechanic.description}</p>
                {"types" in mechanic && mechanic.types && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Types: </span>
                    <span className="text-gray-300">{mechanic.types.join(", ")}</span>
                  </div>
                )}
                <div className="bg-[#0a0a12] p-4 rounded-lg">
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Tips</h4>
                  <ul className="space-y-1">
                    {mechanic.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Status Effects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <TargetIcon size={24} className="text-green-400" />
            Status Effects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMBAT_MECHANICS.statusEffects.map((effect) => (
              <div
                key={effect.name}
                className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <h3 className="font-bold text-gray-200 mb-2">{effect.name}</h3>
                <p className="text-sm text-gray-400">{effect.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Weapons Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <SwordIcon size={24} className="text-red-400" />
            Weapon Types
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-purple-900/30">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Weapon</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Damage</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Speed</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Range</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Stagger</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                {WEAPONS.map((weapon) => (
                  <tr key={weapon.id} className="border-b border-purple-900/20 hover:bg-purple-900/10">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-200">{weapon.name}</div>
                      <div className="text-xs text-gray-500">{weapon.type}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatBar value={weapon.damage} color="red" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatBar value={weapon.speed} color="green" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatBar value={weapon.range} color="blue" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatBar value={weapon.stagger} color="amber" />
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">
                      {weapon.bestFor.slice(0, 2).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Combat Philosophy */}
        <section className="mb-16">
          <div className="p-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-900/30 rounded-xl">
            <div className="flex items-start gap-4">
              <WarningIcon size={32} className="text-purple-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-purple-400 mb-2">Combat Philosophy</h2>
                <p className="text-gray-400 mb-4">
                  Netherworld Covenant rewards patience and precision over button mashing.
                  The game&apos;s combat is designed around these core principles:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Timing Over Speed</h3>
                    <p className="text-sm text-gray-400">
                      A well-timed dodge or parry beats rapid attacks. Learn enemy patterns
                      and respond appropriately.
                    </p>
                  </div>
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Positioning is Key</h3>
                    <p className="text-sm text-gray-400">
                      Where you stand matters. Use the arena to your advantage and always
                      have an escape route planned.
                    </p>
                  </div>
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Resource Management</h3>
                    <p className="text-sm text-gray-400">
                      Stamina, mana, and cooldowns must be managed. Never overcommit without
                      reserves for defense.
                    </p>
                  </div>
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Adaptability</h3>
                    <p className="text-sm text-gray-400">
                      Different enemies require different approaches. Be ready to change
                      tactics on the fly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/guides/beginners"
            className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            ← Beginner&apos;s Guide
          </Link>
          <Link
            href="/classes"
            className="px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Class Guides →
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatBar({ value, color }: { value: number; color: string }) {
  const colorMap: Record<string, string> = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
  };

  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i <= value ? colorMap[color] : "bg-gray-700"}`}
        />
      ))}
    </div>
  );
}
