import { Metadata } from "next";
import Link from "next/link";
import { SkullIcon, WarningIcon, ChevronRightIcon, ShieldIcon, LightningIcon } from "@/components/icons/GameIcons";
import { CHAPTERS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Boss Guide - All Bosses & Strategies",
  description:
    "Complete boss guide for Netherworld Covenant. Learn strategies, attack patterns, and tips for defeating every boss across all six chapters.",
  alternates: {
    canonical: "/bosses",
  },
};

export default function BossesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-purple-400">Bosses</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <SkullIcon size={48} className="text-red-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Boss Guide</h1>
              <p className="text-gray-500">Conquer every challenge the Netherworld throws at you</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Face bosses twisted by malevolent soul energy—fallen lords, once-noble knights,
            primordial demons, and entities lurking in the dimensional void. Each boss
            requires different strategies and mastery of game mechanics.
          </p>
        </header>

        {/* General Boss Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <LightningIcon size={24} className="text-yellow-500" />
            Universal Boss Strategies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Master Ghost Step",
                description: "Place your Soul Companion in a safe spot before engaging. Ghost Step is your emergency escape for bullet-hell phases.",
              },
              {
                title: "Learn Attack Patterns",
                description: "Every boss has tells before attacks. Study their animations and dodge accordingly. Patience beats aggression.",
              },
              {
                title: "Don't Get Greedy",
                description: "Land a few hits, then be ready to dodge. Overcommitting to damage will get you killed.",
              },
              {
                title: "Use Nether Lantern",
                description: "Strike during enemy vulnerability windows to maximize stagger. A staggered boss is a safe boss.",
              },
              {
                title: "Pre-stack Buffs",
                description: "Build Warm Flow stacks (Mage) or buffs on regular enemies before boss fights. Enter at maximum power.",
              },
              {
                title: "Manage Stamina",
                description: "Always keep enough stamina for at least one dodge. Running out mid-fight is death.",
              },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                <h3 className="font-bold text-gray-200 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapters */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Bosses by Chapter</h2>

          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.id}
              className="p-6 bg-gradient-to-r from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-1 rounded">
                      Chapter {chapter.id}
                    </span>
                    <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">
                      Difficulty {chapter.difficulty}/6
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{chapter.name}</h3>
                  <p className="text-gray-400 text-sm">{chapter.description}</p>
                </div>
              </div>

              {/* Enemies */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Common Enemies</h4>
                <div className="flex flex-wrap gap-2">
                  {chapter.enemies.map((enemy) => (
                    <span
                      key={enemy}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded"
                    >
                      {enemy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bosses */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* Elite Bosses */}
                <div className="p-4 bg-[#0a0a12] border border-orange-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldIcon size={18} className="text-orange-400" />
                    <h4 className="font-bold text-orange-400">Elite Bosses</h4>
                  </div>
                  <ul className="space-y-2">
                    {chapter.eliteBosses.map((boss) => (
                      <li key={boss} className="flex items-center gap-2 text-gray-300">
                        <ChevronRightIcon size={14} className="text-orange-500" />
                        {boss}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Final Boss */}
                <div className="p-4 bg-[#0a0a12] border border-red-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <SkullIcon size={18} className="text-red-400" />
                    <h4 className="font-bold text-red-400">Chapter Boss</h4>
                  </div>
                  <div className="text-lg font-semibold text-gray-200">{chapter.finalBoss}</div>
                </div>
              </div>

              {/* Tips */}
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Chapter Tips</h4>
                <ul className="space-y-1">
                  {chapter.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Boss Rush Mode */}
        <section className="mt-16">
          <div className="p-6 bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-red-900/30 rounded-xl">
            <div className="flex items-start gap-4">
              <WarningIcon size={32} className="text-red-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Boss Rush Mode</h2>
                <p className="text-gray-400 mb-4">
                  Unlocked after completing Chapter 4, Boss Rush mode lets you fight all bosses
                  back-to-back with limited healing between fights. This is the ultimate test
                  of your boss-fighting skills.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Preparation</h3>
                    <p className="text-sm text-gray-400">
                      Build for sustained damage and survivability. Burst damage matters less
                      when you need to fight 12+ bosses in a row.
                    </p>
                  </div>
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <h3 className="font-semibold text-gray-200 mb-1">Strategy</h3>
                    <p className="text-sm text-gray-400">
                      Play safe in early fights to preserve resources. Save your most aggressive
                      plays for the final bosses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
