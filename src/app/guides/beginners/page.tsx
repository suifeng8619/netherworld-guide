import { Metadata } from "next";
import Link from "next/link";
import {
  SwordIcon,
  CrossedSwordsIcon,
  BowIcon,
  ShieldIcon,
  DaggerIcon,
  GhostIcon,
  LanternIcon,
  LightningIcon,
  ChevronRightIcon,
  InfoIcon,
  StarIcon,
  GemIcon,
  CoinIcon,
  BookIcon,
} from "@/components/icons/GameIcons";
import { WEAPONS, SOUL_COMPANIONS, PROGRESSION_SYSTEM } from "@/data/gameData";
import { ResourceLinks } from "@/components/ui/ResourceLinks";

export const metadata: Metadata = {
  title: "Beginner's Guide - Getting Started",
  description:
    "Complete beginner's guide for Netherworld Covenant. Learn combat basics, weapon choices, progression strategies, and essential tips to survive the netherworld.",
  alternates: {
    canonical: "/guides/beginners",
  },
};

export default function BeginnersGuide() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-purple-400">Beginner&apos;s Guide</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-full text-xs text-purple-300 uppercase tracking-wider">
              Guide
            </span>
            <span className="text-gray-500 text-sm">Updated Dec 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-100 mb-4">
            Beginner&apos;s Guide
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Everything you need to know to start your journey through the netherworld.
            Master combat basics, choose your weapons, and learn essential survival strategies.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl mb-12">
          <h2 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
            <BookIcon size={20} className="text-purple-400" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {[
              { id: "combat", title: "Combat Basics", icon: <SwordIcon size={14} /> },
              { id: "weapons", title: "Weapon Guide", icon: <CrossedSwordsIcon size={14} /> },
              { id: "companions", title: "Soul Companions", icon: <GhostIcon size={14} /> },
              { id: "progression", title: "Progression Tips", icon: <StarIcon size={14} /> },
              { id: "tips", title: "Essential Tips", icon: <LightningIcon size={14} /> },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-500">{item.icon}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <article className="space-y-16">
          {/* Combat Basics */}
          <section id="combat">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <SwordIcon size={28} className="text-red-400" />
              Combat Basics
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-200">Netherworld Covenant</strong> emphasizes
                <strong className="text-purple-400"> precise timing and pattern recognition</strong> rather
                than button-mashing. Success comes from reading enemy movements and responding with
                well-timed actions.
              </p>

              <div className="p-4 bg-[#12121f] border-l-4 border-purple-600 rounded-r-lg">
                <p className="text-gray-300 font-medium mb-3">Key Combat Mechanics:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Dodge Roll", desc: "Primary defensive tool, consumes stamina", icon: <LightningIcon size={16} className="text-blue-400" /> },
                    { name: "Ethereal Dash", desc: "Repositioning for offense and defense", icon: <GhostIcon size={16} className="text-cyan-400" /> },
                    { name: "Parry", desc: "High-risk, high-reward timing defense", icon: <ShieldIcon size={16} className="text-amber-400" /> },
                    { name: "Ghost Step", desc: "Teleport to soul companion position", icon: <GhostIcon size={16} className="text-purple-400" /> },
                  ].map((mechanic) => (
                    <div key={mechanic.name} className="flex items-start gap-2">
                      {mechanic.icon}
                      <div>
                        <strong className="text-gray-200 text-sm">{mechanic.name}</strong>
                        <p className="text-xs text-gray-500">{mechanic.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                <strong className="text-amber-400">Stamina Management</strong> is crucial. While regular
                attacks don&apos;t consume stamina, your dodge does. Always reserve enough stamina for
                a quick escape. Learning enemy attack patterns is non-negotiable for survival.
              </p>
            </div>
          </section>

          {/* Weapons */}
          <section id="weapons">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <CrossedSwordsIcon size={28} className="text-purple-400" />
              Weapon Guide
            </h2>

            <div className="grid gap-4">
              {WEAPONS.slice(0, 6).map((weapon) => {
                const isRecommended = weapon.name === "Short Sword";
                return (
                  <div
                    key={weapon.id}
                    className={`p-4 bg-[#12121f] border rounded-lg ${
                      isRecommended
                        ? "border-green-600/50"
                        : "border-purple-900/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <SwordIcon size={18} className="text-gray-400" />
                        <h3 className="font-bold text-gray-200">{weapon.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          {weapon.type}
                        </span>
                        {isRecommended && (
                          <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">
                            Recommended
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{weapon.description}</p>
                    <div className="flex gap-4 text-xs">
                      <span className="text-red-400">DMG: {weapon.damage}/5</span>
                      <span className="text-green-400">SPD: {weapon.speed}/5</span>
                      <span className="text-blue-400">RNG: {weapon.range}/5</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/guides/combat"
              className="mt-4 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View full combat guide <ChevronRightIcon size={16} />
            </Link>
          </section>

          {/* Soul Companions */}
          <section id="companions">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <GhostIcon size={28} className="text-purple-400" />
              Soul Companions
            </h2>
            <p className="text-gray-400 mb-6">
              Soul Companions are fallen allies whose spirits fight alongside you. Each offers
              unique abilities and combat strategies. Think of them as both allies and tools.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {SOUL_COMPANIONS.map((companion) => {
                const iconMap: Record<string, React.ReactNode> = {
                  swordsman: <CrossedSwordsIcon size={24} className="text-red-400" />,
                  ranger: <BowIcon size={24} className="text-green-400" />,
                  guardian: <ShieldIcon size={24} className="text-amber-400" />,
                  rogue: <DaggerIcon size={24} className="text-purple-400" />,
                };
                return (
                  <div
                    key={companion.id}
                    className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {iconMap[companion.id]}
                      <h3 className="font-bold text-gray-200">{companion.name}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{companion.description}</p>
                    <p className="text-xs text-purple-400">
                      Best with: {companion.bestFor.join(", ")}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-purple-900/20 border border-purple-700/30 rounded-lg flex items-start gap-3">
              <InfoIcon size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
              <p className="text-purple-300 text-sm">
                <strong>Pro Tip:</strong> Use the Ghost Step ability to instantly teleport to
                your companion&apos;s position. This is essential for dodging boss attacks
                and repositioning during combat.
              </p>
            </div>
          </section>

          {/* Progression */}
          <section id="progression">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <StarIcon size={28} className="text-yellow-400" />
              Progression Tips
            </h2>

            <p className="text-gray-400 mb-6">
              Prioritize room types in this order for optimal progression:
            </p>

            <ol className="space-y-3">
              {[
                { name: "Blackstone Rooms", desc: PROGRESSION_SYSTEM.currencies.find(c => c.name === "Blackstone")?.description ?? "Permanent upgrades", icon: <GemIcon size={18} className="text-purple-400" />, priority: 1 },
                { name: "Gold Rooms", desc: PROGRESSION_SYSTEM.currencies.find(c => c.name === "Gold")?.description ?? "In-run purchases", icon: <CoinIcon size={18} className="text-amber-400" />, priority: 2 },
                { name: "Skill Rooms", desc: "New abilities and power-ups", icon: <LightningIcon size={18} className="text-blue-400" />, priority: 3 },
                { name: "Treasure Rooms", desc: "Relic acquisition for builds", icon: <GemIcon size={18} className="text-green-400" />, priority: 4 },
                { name: "Stat Upgrades", desc: "Minor bonuses, lowest priority", icon: <StarIcon size={18} className="text-gray-400" />, priority: 5 },
              ].map((room) => (
                <li
                  key={room.name}
                  className="flex items-center gap-4 p-3 bg-[#12121f] border border-purple-900/30 rounded-lg"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-600/30 text-purple-400 font-bold rounded-full text-sm">
                    {room.priority}
                  </span>
                  <div className="flex items-center gap-2">
                    {room.icon}
                    <span className="font-medium text-gray-200">{room.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-auto hidden sm:block">{room.desc}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Essential Tips */}
          <section id="tips">
            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <LightningIcon size={28} className="text-yellow-400" />
              Essential Tips
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Build Synergy is Key",
                  desc: "Don't pick skills and relics randomly. Build around a specific theme. If you have a relic that increases critical damage, focus on skills with high crit rates.",
                  icon: <GemIcon size={18} className="text-purple-400" />,
                },
                {
                  title: "Master the Nether Lantern",
                  desc: "Your secondary weapon manifests through the Lantern and is crucial for breaking enemy defenses and increasing stagger damage.",
                  icon: <LanternIcon size={18} className="text-orange-400" />,
                },
                {
                  title: "Patient Combat",
                  desc: "A strategic, patient approach will carry you further than reckless aggression. Land brief attack combos before repositioning.",
                  icon: <ShieldIcon size={18} className="text-amber-400" />,
                },
                {
                  title: "Learn Boss Patterns",
                  desc: "Bosses have multi-phase fights. Take time to learn their attack patterns rather than rushing in blindly.",
                  icon: <SwordIcon size={18} className="text-red-400" />,
                },
                {
                  title: "Use Boss Rush Mode",
                  desc: "Practice against bosses in Boss Rush Mode to master their patterns without risking your main run.",
                  icon: <LightningIcon size={18} className="text-blue-400" />,
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg flex items-start gap-3"
                >
                  <div className="p-2 bg-[#0a0a12] rounded-lg flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-400">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Next Steps */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-700/30 rounded-xl">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Next Steps</h3>
          <p className="text-gray-400 mb-6">
            Now that you understand the basics, dive deeper into specific class guides:
          </p>
          <div className="flex flex-wrap gap-3">
            {["Berserker", "Mage", "Hunter", "Shield Guard", "Useless Person"].map(
              (cls) => (
                <Link
                  key={cls}
                  href={`/classes/${cls.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 bg-purple-600/20 border border-purple-600/50 rounded-lg text-purple-300 hover:bg-purple-600/30 transition-colors flex items-center gap-2"
                >
                  {cls} <ChevronRightIcon size={14} />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Community Resources */}
        <ResourceLinks className="mt-8" />
      </div>
    </div>
  );
}
