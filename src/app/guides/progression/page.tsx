import { Metadata } from "next";
import Link from "next/link";
import { ChevronRightIcon, GemIcon, StarIcon, LightningIcon } from "@/components/icons/GameIcons";
import { PROGRESSION_SYSTEM } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Progression Guide - Currencies, Upgrades & Tips",
  description:
    "Complete progression guide for Netherworld Covenant. Learn about all currencies, upgrade systems, talent priorities, and tips for efficient resource spending.",
  alternates: {
    canonical: "/guides/progression",
  },
};

export default function ProgressionPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-purple-400 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-purple-400">Progression</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <GemIcon size={48} className="text-green-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Progression Guide</h1>
              <p className="text-gray-500">Master the path to power</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Understanding Netherworld Covenant&apos;s progression systems is key to efficient
            advancement. This guide covers all currencies, upgrade paths, and the optimal
            order to spend your resources.
          </p>
        </header>

        {/* Currencies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <GemIcon size={24} className="text-yellow-500" />
            Currency Types
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROGRESSION_SYSTEM.currencies.map((currency) => (
              <div
                key={currency.name}
                className="p-4 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-200">{currency.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded">
                    Priority {currency.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{currency.description}</p>
                <div className="pt-3 border-t border-purple-900/30">
                  <p className="text-xs text-gray-500 mb-1">Tip</p>
                  <p className="text-sm text-purple-400">{currency.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Room Priority */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <StarIcon size={24} className="text-purple-500" />
            Room Selection Priority
          </h2>
          <p className="text-gray-400 mb-4">
            When given a choice of rooms, prioritize them in this order for optimal progression.
          </p>
          <div className="space-y-3">
            {PROGRESSION_SYSTEM.roomPriority.map((room) => (
              <div
                key={room.type}
                className="flex items-center gap-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center font-bold text-purple-400">
                  {room.priority}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-200">{room.type} Room</h3>
                  <p className="text-sm text-gray-400">{room.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talent System */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <LightningIcon size={24} className="text-blue-500" />
            Talent System
          </h2>
          <div className="p-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-900/30 rounded-xl mb-6">
            <p className="text-gray-400 mb-4">
              Talents provide permanent bonuses that persist across all runs. They&apos;re
              purchased with Soul Essence and unlock progressively as you defeat bosses.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Total Talents</p>
                <p className="text-xl font-bold text-blue-400">30+</p>
              </div>
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Currency</p>
                <p className="text-xl font-bold text-purple-400">Soul Essence</p>
              </div>
              <div className="p-3 bg-[#0a0a12] rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Unlock Requirement</p>
                <p className="text-xl font-bold text-green-400">Boss Defeats</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-gray-200 mb-4">Recommended Talent Priority</h3>
          <div className="space-y-3">
            {[
              {
                priority: 1,
                name: "Soul Harvest",
                description: "Increases Soul Essence gain by 20%. Essential for faster progression.",
                tier: "S",
              },
              {
                priority: 2,
                name: "Resilient Spirit",
                description: "Start each run with one free revive. Huge safety net for learning.",
                tier: "S",
              },
              {
                priority: 3,
                name: "Weapon Mastery",
                description: "+15% weapon damage. Direct DPS increase for all builds.",
                tier: "A",
              },
              {
                priority: 4,
                name: "Swift Recovery",
                description: "Reduces healing cooldown by 25%. More sustain during long fights.",
                tier: "A",
              },
              {
                priority: 5,
                name: "Critical Edge",
                description: "+10% critical strike chance. Great for crit-focused builds.",
                tier: "B",
              },
            ].map((talent) => (
              <div
                key={talent.name}
                className="flex items-center gap-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center font-bold text-purple-400">
                  {talent.priority}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-200">{talent.name}</h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-bold ${
                        talent.tier === "S"
                          ? "bg-yellow-600 text-yellow-100"
                          : talent.tier === "A"
                          ? "bg-purple-600 text-purple-100"
                          : "bg-blue-600 text-blue-100"
                      }`}
                    >
                      {talent.tier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{talent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progression Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Progression Tips</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Focus One Weapon",
                description:
                  "Upgrade your main weapon to max before spreading resources. A +10 weapon is worth more than three +5 weapons.",
              },
              {
                title: "Farm Chapter 3",
                description:
                  "Chapter 3 offers the best Soul Essence per minute ratio. Farm here until you unlock Chapter 4.",
              },
              {
                title: "Daily Challenges",
                description:
                  "Always complete daily challenges for bonus currencies. They reset every 24 hours.",
              },
              {
                title: "Boss Rush Unlocks",
                description:
                  "Defeating Chapter 4 unlocks Boss Rush mode, which provides excellent endgame rewards.",
              },
              {
                title: "Talent vs Upgrades",
                description:
                  "Early game: prioritize talents. Mid game: balance both. Late game: max out upgrades.",
              },
              {
                title: "Don't Waste Gold",
                description:
                  "Gold is scarce early on. Only buy consumables when truly stuck on a boss.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
              >
                <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-purple-500" />
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Efficiency Chart */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Optimal Progression Path</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-900/50" />
            <div className="space-y-6">
              {[
                {
                  stage: "Early Game",
                  chapters: "1-2",
                  focus: "Learn mechanics, unlock talents, try all classes",
                  currency: "Soul Essence → Basic Talents",
                },
                {
                  stage: "Mid Game",
                  chapters: "3-4",
                  focus: "Settle on main class, upgrade weapon to +5",
                  currency: "Ether Shards → Weapon Upgrades",
                },
                {
                  stage: "Late Game",
                  chapters: "5-6",
                  focus: "Max weapon, unlock all talents, farm relics",
                  currency: "All currencies → Completion",
                },
                {
                  stage: "Endgame",
                  chapters: "Boss Rush",
                  focus: "Perfect builds, speed clears, alternate classes",
                  currency: "Challenge Rewards → Cosmetics",
                },
              ].map((stage, i) => (
                <div key={i} className="flex gap-4 pl-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm relative z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-200">{stage.stage}</h3>
                      <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded">
                        Chapters {stage.chapters}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{stage.focus}</p>
                    <p className="text-xs text-purple-400">{stage.currency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
