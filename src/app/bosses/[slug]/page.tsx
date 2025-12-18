import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SkullIcon, ShieldIcon, SwordIcon, ChevronRightIcon, WarningIcon, LightningIcon } from "@/components/icons/GameIcons";
import { BOSS_GUIDES, CHAPTERS, CLASSES, SOUL_COMPANIONS } from "@/data/gameData";

type BossSlug = keyof typeof BOSS_GUIDES;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BOSS_GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const boss = BOSS_GUIDES[slug as BossSlug];

  if (!boss) {
    return { title: "Boss Not Found" };
  }

  return {
    title: `${boss.name} Boss Guide - Strategies & Tips`,
    description: `Complete guide for defeating ${boss.name} in Netherworld Covenant. Learn all attack patterns, phase strategies, and recommended builds.`,
    alternates: {
      canonical: `/bosses/${slug}`,
    },
  };
}

export default async function BossDetailPage({ params }: Props) {
  const { slug } = await params;
  const boss = BOSS_GUIDES[slug as BossSlug];

  if (!boss) {
    notFound();
  }

  const chapter = CHAPTERS.find((c) => c.id === boss.chapter);
  const difficultyStars = boss.difficulty;

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/bosses" className="hover:text-purple-400 transition-colors">Bosses</Link>
          <span>/</span>
          <span className="text-purple-400">{boss.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
              <SkullIcon size={32} className="text-red-200" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-1 rounded">
                  Chapter {boss.chapter}
                </span>
                <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">
                  Final Boss
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-100">{boss.name}</h1>
              {chapter && (
                <p className="text-gray-500">{chapter.name}</p>
              )}
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-4 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
            <div>
              <p className="text-xs text-gray-500 mb-1">Difficulty</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <SkullIcon
                    key={i}
                    size={16}
                    className={i <= difficultyStars ? "text-red-500" : "text-gray-700"}
                  />
                ))}
              </div>
            </div>
            <div className="h-8 w-px bg-gray-800" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Health Pool</p>
              <p className="text-sm font-semibold text-gray-300">
                {difficultyStars <= 2 ? "Medium" : difficultyStars <= 4 ? "High" : "Very High"}
              </p>
            </div>
            <div className="h-8 w-px bg-gray-800" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Phases</p>
              <p className="text-sm font-semibold text-gray-300">{boss.phases.length}</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-400">{boss.description}</p>
        </header>

        {/* Quick Tips */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <LightningIcon size={20} className="text-yellow-500" />
            Quick Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {boss.tips.map((tip, i) => (
              <div
                key={i}
                className="p-3 bg-[#12121f] border border-purple-900/30 rounded-lg flex items-start gap-2"
              >
                <ChevronRightIcon size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Phase Breakdown */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <ShieldIcon size={20} className="text-purple-500" />
            Phase Breakdown
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-900/50" />
            <div className="space-y-6">
              {boss.phases.map((phase, i) => (
                <div key={i} className="flex gap-4 pl-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm relative z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
                    <h3 className="font-bold text-gray-200 mb-2">{phase.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{phase.description}</p>

                    {/* Phase Attacks */}
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Attacks</p>
                      {phase.attacks.map((attack, j) => (
                        <div key={j} className="p-3 bg-[#0a0a12] rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-gray-200 text-sm">{attack.name}</h4>
                          </div>
                          <p className="text-xs text-gray-400 mb-2">{attack.description}</p>
                          <p className="text-xs text-blue-400">
                            <span className="text-gray-500">Telegraph:</span> {attack.telegraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Builds */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <SwordIcon size={20} className="text-red-500" />
            Recommended Setup
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Classes */}
            <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
              <h3 className="text-sm font-bold text-gray-400 mb-3">Recommended Classes</h3>
              <div className="space-y-2">
                {boss.recommendedClasses.map((classId) => {
                  const cls = CLASSES.find((c) => c.id === classId.toLowerCase().replace(" ", "-"));
                  return (
                    <Link
                      key={classId}
                      href={`/classes/${classId.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center gap-3 p-2 bg-[#0a0a12] rounded-lg hover:bg-purple-900/20 transition-colors"
                    >
                      <span className="text-lg">
                        {classId.toLowerCase().includes("berserker") && "⚔️"}
                        {classId.toLowerCase().includes("mage") && "🔮"}
                        {classId.toLowerCase().includes("hunter") && "🏹"}
                        {classId.toLowerCase().includes("shield") && "🛡️"}
                        {classId.toLowerCase().includes("useless") && "👤"}
                      </span>
                      <span className="font-medium text-gray-200">{cls?.name || classId}</span>
                      <ChevronRightIcon size={14} className="ml-auto text-gray-500" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Companions */}
            <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-lg">
              <h3 className="text-sm font-bold text-gray-400 mb-3">Recommended Companions</h3>
              <div className="space-y-2">
                {boss.recommendedCompanions.map((companionId) => {
                  const companion = SOUL_COMPANIONS.find(
                    (c) => c.name.toLowerCase() === companionId.toLowerCase()
                  );
                  return (
                    <div
                      key={companionId}
                      className="flex items-center gap-3 p-2 bg-[#0a0a12] rounded-lg"
                    >
                      <span className="text-lg">👻</span>
                      <div>
                        <span className="font-medium text-gray-200">{companion?.name || companionId}</span>
                        {companion && (
                          <p className="text-xs text-gray-500">{companion.type}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes Warning */}
        <section className="mb-12">
          <div className="p-4 bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-red-900/30 rounded-lg">
            <div className="flex items-start gap-3">
              <WarningIcon size={24} className="text-red-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-400 mb-1">Common Mistakes</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Getting greedy during damage windows</li>
                  <li>• Forgetting to position Ghost Step before the fight</li>
                  <li>• Running out of stamina during combo attacks</li>
                  <li>• Not learning the visual tells before attacks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t border-purple-900/30">
          <Link
            href="/bosses"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ChevronRightIcon size={16} className="rotate-180" />
            Back to All Bosses
          </Link>
        </nav>
      </div>
    </div>
  );
}
