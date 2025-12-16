import { Metadata } from "next";
import Link from "next/link";
import {
  CrossedSwordsIcon,
  AxeIcon,
  SwordIcon,
  ShieldIcon,
  StarIcon,
  ChevronRightIcon,
  FlameIcon,
  HeartIcon,
  LightningIcon,
  InfoIcon,
} from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Berserker Build Guide - Best Builds & Strategies",
  description:
    "Complete Berserker guide for Netherworld Covenant. Learn the best builds, weapons, relics, and strategies for dominating as a Berserker.",
  keywords: [
    "Netherworld Covenant Berserker",
    "Netherworld Covenant Berserker build",
    "Netherworld Covenant Berserker guide",
    "best Berserker build",
    "Berserker lifesteal build",
  ],
};

export default function BerserkerGuide() {
  const classData = CLASSES.find((c) => c.id === "berserker")!;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/classes" className="hover:text-purple-400 transition-colors">Classes</Link>
          <span>/</span>
          <span className="text-purple-400">Berserker</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-900/30 rounded-xl">
              <CrossedSwordsIcon size={48} className="text-red-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded">{classData.playstyle}</span>
                <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-xs rounded">{classData.difficulty} Difficulty</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-100">Berserker</h1>
            </div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed">
            A devastating melee fighter who trades defense for overwhelming offense.
            Master the art of controlled aggression and sustain through combat.
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
              <div className={`flex justify-center gap-0.5 ${stat.color}`}>
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
                The Berserker is Netherworld Covenant&apos;s premier damage dealer. Built around
                the philosophy of &quot;the best defense is a good offense,&quot; Berserkers thrive
                in extended combat where their lifesteal and damage bonuses stack up.
              </p>
              <p className="text-gray-400 leading-relaxed">
                While lacking the defensive options of Shield Guard or the range of Hunter,
                the Berserker compensates with raw power and the ability to heal through
                dealing damage. This creates a high-risk, high-reward playstyle that rewards
                aggressive but calculated play.
              </p>
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
                        <AxeIcon size={20} className="text-gray-400" />
                        <h3 className="font-bold text-gray-200">{weaponName}</h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        idx === 0 ? "bg-amber-900/50 text-amber-400" :
                        idx === 1 ? "bg-purple-900/50 text-purple-400" :
                        "bg-gray-800 text-gray-400"
                      }`}>
                        Tier {tiers[idx]}
                      </span>
                    </div>
                    {weapon && (
                      <>
                        <p className="text-sm text-gray-400 mb-2">{weapon.description}</p>
                        <div className="flex gap-4 text-xs">
                          <span className="text-red-400">DMG: {weapon.damage}/5</span>
                          <span className="text-green-400">SPD: {weapon.speed}/5</span>
                          <span className="text-amber-400">STG: {weapon.stagger}/5</span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Build Guide */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <FlameIcon size={24} className="text-orange-400" />
              Recommended Builds
            </h2>
            {classData.buildStrategies.map((build) => (
              <div key={build.name} className="p-6 bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-red-900/30 rounded-xl mb-4">
                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <FlameIcon size={20} />
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
                        <span key={stat} className="px-3 py-1 bg-red-900/30 text-red-300 text-sm rounded">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Key Relics</div>
                    <div className="flex flex-wrap gap-2">
                      {build.keyRelics.map(relic => (
                        <span key={relic} className="px-3 py-1 bg-orange-900/30 text-orange-300 text-sm rounded">
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
                  The Guardian compensates for your lack of defense. Use it to tank hits while you
                  deal damage, and Ghost Step to it when you need to reposition safely.
                </p>
              </div>
              <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CrossedSwordsIcon size={20} className="text-red-400" />
                  <h3 className="font-bold text-gray-200">Swordsman</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Double down on offense. The Swordsman adds extra damage and can help stagger
                  enemies faster. Best for players confident in their dodging.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/classes"
            className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <ChevronRightIcon size={16} className="rotate-180" /> All Classes
          </Link>
          <Link
            href="/classes/mage"
            className="px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            Mage Guide <ChevronRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
