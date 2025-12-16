import Link from "next/link";
import Image from "next/image";
import {
  BookIcon,
  LightningIcon,
  SkullIcon,
  CrossedSwordsIcon,
  StaffIcon,
  BowIcon,
  ShieldIcon,
  PersonIcon,
  GhostIcon,
  SwordIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  TargetIcon,
  GemIcon,
  LanternIcon,
} from "@/components/icons/GameIcons";
import { CLASSES, SOUL_COMPANIONS, GAME_MODES, CHAPTERS } from "@/data/gameData";

const classIcons: Record<string, React.ReactNode> = {
  berserker: <CrossedSwordsIcon size={28} className="text-red-400" />,
  mage: <StaffIcon size={28} className="text-blue-400" />,
  hunter: <BowIcon size={28} className="text-green-400" />,
  "shield-guard": <ShieldIcon size={28} className="text-amber-400" />,
  "useless-person": <PersonIcon size={28} className="text-purple-400" />,
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-900/30 text-green-400",
  Medium: "bg-amber-900/30 text-amber-400",
  Hard: "bg-red-900/30 text-red-400",
  "Very Hard": "bg-purple-900/30 text-purple-400",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.akamai.steamstatic.com/steam/apps/2735580/header.jpg"
            alt="Netherworld Covenant"
            fill
            className="object-cover opacity-20"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/80 to-[#0a0a12]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-400 text-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Updated for Version 1.0 - December 2025
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100 mb-6 leading-tight">
              Netherworld
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400">
                Covenant Guide
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Master the dark fantasy roguelike with comprehensive guides, optimized builds,
              combat strategies, and boss walkthroughs. From beginner tips to endgame content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides/beginners"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-purple-900/50"
              >
                Get Started
                <ArrowRightIcon size={18} />
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#12121f] hover:bg-[#1a1a2e] text-gray-300 font-semibold rounded-lg border border-purple-900/50 transition-colors"
              >
                Browse Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-y border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <BookIcon size={24} />, title: "Beginner's Guide", desc: "Start here", href: "/guides/beginners", color: "text-blue-400" },
              { icon: <LightningIcon size={24} />, title: "Combat Guide", desc: "Master mechanics", href: "/guides/combat", color: "text-yellow-400" },
              { icon: <CrossedSwordsIcon size={24} />, title: "Class Builds", desc: "Optimized setups", href: "/classes", color: "text-red-400" },
              { icon: <SkullIcon size={24} />, title: "Boss Strategies", desc: "Defeat every boss", href: "/bosses", color: "text-purple-400" },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group p-4 sm:p-6 bg-[#12121f] hover:bg-[#1a1a2e] border border-purple-900/30 rounded-xl transition-all hover:border-purple-700/50"
              >
                <div className={`${link.color} mb-3`}>{link.icon}</div>
                <h3 className="font-bold text-gray-200 group-hover:text-white transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-400">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-4">
              Choose Your <span className="text-purple-400">Class</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Master one of five unique classes, each with distinct playstyles, strengths, and strategies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.map((cls) => (
              <Link
                key={cls.id}
                href={`/classes/${cls.id}`}
                className="group relative p-6 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl transition-all hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-900/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    {classIcons[cls.id]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded ${difficultyColors[cls.difficulty]}`}>
                        {cls.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-gray-400">{cls.title}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {cls.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Object.entries(cls.stats).slice(0, 4).map(([stat, value]) => (
                    <div key={stat} className="text-center">
                      <div className="text-xs text-gray-400 capitalize truncate">{stat}</div>
                      <div className="flex justify-center gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i <= value ? "bg-purple-500" : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                  View Build Guide
                  <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Combat Features */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a12] via-[#12121f] to-[#0a0a12]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-6">
                Master the <span className="text-purple-400">Combat</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Precision-based combat where timing and positioning matter more than button mashing.
                Master these core mechanics to survive the Netherworld.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <LightningIcon size={16} />, title: "Dodge & Ethereal Dash", desc: "Invincibility frames for passing through attacks. Ethereal Dash for longer repositioning." },
                  { icon: <ShieldIcon size={16} />, title: "Perfect Parry", desc: "Time your block perfectly to negate damage and stagger enemies for counter-attacks." },
                  { icon: <GhostIcon size={16} />, title: "Ghost Step", desc: "Teleport to your Soul Companion. Essential for bullet-hell boss phases." },
                  { icon: <LanternIcon size={16} />, title: "Nether Lantern", desc: "Your secondary weapon ability. Strike during vulnerability for massive stagger." },
                ].map((mechanic, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#0a0a12] border border-purple-900/30 rounded-lg">
                    <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 text-purple-400">
                      {mechanic.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-200 mb-1">{mechanic.title}</h3>
                      <p className="text-sm text-gray-400">{mechanic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/guides/combat"
                className="inline-flex items-center gap-2 mt-6 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Full Combat Guide
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-900/30">
              <Image
                src="https://cdn.akamai.steamstatic.com/steam/apps/2735580/ss_1.jpg"
                alt="Netherworld Covenant Combat"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Soul Companions */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-4">
              <span className="text-purple-400">Soul</span> Companions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Forge pacts with fallen allies. Each companion offers unique abilities for combat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOUL_COMPANIONS.map((companion) => (
              <div
                key={companion.id}
                className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl hover:border-purple-700/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-900/50 to-violet-900/50 rounded-lg flex items-center justify-center">
                    <GhostIcon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200">{companion.name}</h3>
                    <p className="text-xs text-gray-400">{companion.type}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{companion.description}</p>
                <div className="text-xs text-gray-400">
                  Best for: <span className="text-purple-400">{companion.bestFor.slice(0, 2).join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a12] via-[#12121f] to-[#0a0a12]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-4">
              Six <span className="text-purple-400">Chapters</span> of Challenge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Journey through dark dungeons, corrupted villages, and dimensional voids.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHAPTERS.map((chapter) => (
              <div
                key={chapter.id}
                className="p-5 bg-[#12121f] border border-purple-900/30 rounded-xl hover:border-purple-700/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-1 rounded">
                    Chapter {chapter.id}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i <= chapter.difficulty ? "bg-red-500" : "bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-gray-200 mb-2">{chapter.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{chapter.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <SkullIcon size={14} className="text-red-400" />
                  <span className="text-gray-400">Boss:</span>
                  <span className="text-gray-300 truncate">{chapter.finalBoss}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/bosses"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Boss Strategies
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-4">
              Game <span className="text-purple-400">Modes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From standard runs to hardcore challenges, test your skills across multiple modes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GAME_MODES.map((mode) => (
              <div
                key={mode.id}
                className="p-5 bg-[#12121f] border border-purple-900/30 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TargetIcon size={20} className="text-purple-400" />
                  <h3 className="font-bold text-gray-200">{mode.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{mode.description}</p>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <GemIcon size={12} />
                  {mode.unlockCondition}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#12121f] to-[#0a0a12]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-100 mb-4">
            Ready to Conquer the <span className="text-purple-400">Netherworld</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start with our beginner&apos;s guide and work your way up to mastering the most challenging content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides/beginners"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
            >
              Start Learning
              <ArrowRightIcon size={18} />
            </Link>
            <a
              href="https://store.steampowered.com/app/2735580/Netherworld_Covenant/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1b2838] hover:bg-[#2a475e] text-white font-semibold rounded-lg transition-colors"
            >
              Get on Steam
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
