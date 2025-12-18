"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { CLASSES, WEAPONS, SOUL_COMPANIONS, RELICS, BUILD_CALCULATOR_DATA } from "@/data/gameData";
import { ClassSelector } from "@/components/selectors/ClassSelector";
import { WeaponSelector } from "@/components/selectors/WeaponSelector";
import { CompanionSelector } from "@/components/selectors/CompanionSelector";
import { RelicDropdown } from "@/components/selectors/RelicPicker";
import { StatsRadar, buildStatsToRadarData } from "@/components/charts/StatsRadar";
import { CalculatorIcon, ChevronRightIcon, SaveIcon, ShareIcon } from "@/components/icons/GameIcons";

interface BuildHistory {
  id: string;
  name: string;
  classId: string;
  weaponId: string;
  companionId: string;
  relicIds: string[];
  timestamp: number;
}

const STORAGE_KEY = "nc-build-history";

function calculateBuildStats(
  classId: string,
  weaponId: string,
  companionId: string,
  relicIds: string[]
) {
  const rawBaseStats = BUILD_CALCULATOR_DATA.baseStats[classId as keyof typeof BUILD_CALCULATOR_DATA.baseStats];
  const baseStats = {
    health: (rawBaseStats as { hp?: number })?.hp ?? 100,
    damage: (rawBaseStats as { damage?: number })?.damage ?? 50,
    defense: (rawBaseStats as { defense?: number })?.defense ?? 50,
    speed: (rawBaseStats as { moveSpeed?: number })?.moveSpeed ?? 50,
    crit: (rawBaseStats as { critChance?: number })?.critChance ?? 10,
    critDamage: (rawBaseStats as { critDamage?: number })?.critDamage ?? 150,
  };

  const rawWeaponBonus = BUILD_CALCULATOR_DATA.weaponBonuses[weaponId as keyof typeof BUILD_CALCULATOR_DATA.weaponBonuses];
  const weaponBonus = {
    damage: (rawWeaponBonus as { damage?: number })?.damage ?? 0,
    speed: (rawWeaponBonus as { attackSpeed?: number })?.attackSpeed ?? 0,
    range: (rawWeaponBonus as { range?: number })?.range ?? 0,
    crit: (rawWeaponBonus as { critChance?: number })?.critChance ?? 0,
  };

  const rawCompanionBonus = BUILD_CALCULATOR_DATA.companionBonuses[companionId as keyof typeof BUILD_CALCULATOR_DATA.companionBonuses];
  const companionBonus = {
    health: (rawCompanionBonus as { hp?: number })?.hp ?? (rawCompanionBonus as { health?: number })?.health ?? 0,
    defense: (rawCompanionBonus as { defense?: number })?.defense ?? 0,
    damage: (rawCompanionBonus as { damage?: number })?.damage ?? 0,
    utility: (rawCompanionBonus as { utility?: number })?.utility ?? 0,
  };

  // Calculate relic bonuses
  let relicBonus = { damage: 0, defense: 0, speed: 0, utility: 0, crit: 0, health: 0 };
  relicIds.forEach((id) => {
    const relic = RELICS.find((r) => r.id === id);
    if (relic) {
      if (relic.category === "offensive") {
        relicBonus.damage += 10;
        relicBonus.crit += 5;
      } else if (relic.category === "defensive") {
        relicBonus.defense += 15;
        relicBonus.health += 10;
      } else {
        relicBonus.utility += 15;
        relicBonus.speed += 5;
      }
    }
  });

  const finalStats = {
    damage: Math.min(100, baseStats.damage + weaponBonus.damage + companionBonus.damage + relicBonus.damage),
    defense: Math.min(100, baseStats.defense + companionBonus.defense + relicBonus.defense),
    mobility: Math.min(100, baseStats.speed + weaponBonus.speed + relicBonus.speed),
    utility: Math.min(100, 40 + companionBonus.utility + relicBonus.utility),
    range: Math.min(100, 40 + weaponBonus.range),
    aoe: Math.min(100, weaponId === "staff" ? 80 : weaponId === "greatsword" ? 60 : 40),
  };

  const totalScore = Math.round(
    (finalStats.damage + finalStats.defense + finalStats.mobility + finalStats.utility) / 4
  );

  return { finalStats, totalScore };
}

export default function BuildCalculatorPage() {
  const [classId, setClassId] = useState("");
  const [weaponId, setWeaponId] = useState("");
  const [companionId, setCompanionId] = useState("");
  const [relicIds, setRelicIds] = useState<string[]>([]);
  const [buildName, setBuildName] = useState("");
  const [history, setHistory] = useState<BuildHistory[]>([]);
  const buildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const { finalStats, totalScore } = useMemo(() => {
    if (!classId) {
      return {
        finalStats: { damage: 50, defense: 50, mobility: 50, utility: 50, range: 50, aoe: 50 },
        totalScore: 50,
      };
    }
    return calculateBuildStats(classId, weaponId, companionId, relicIds);
  }, [classId, weaponId, companionId, relicIds]);

  const radarData = useMemo(() => buildStatsToRadarData(finalStats), [finalStats]);

  const selectedClass = CLASSES.find((c) => c.id === classId);
  const selectedWeapon = WEAPONS.find((w) => w.id === weaponId);
  const selectedCompanion = SOUL_COMPANIONS.find((c) => c.id === companionId);
  const selectedRelics = RELICS.filter((r) => relicIds.includes(r.id));

  const saveBuild = () => {
    if (!classId) return;

    const newBuild: BuildHistory = {
      id: Date.now().toString(),
      name: buildName || `${selectedClass?.name || "Unknown"} Build`,
      classId,
      weaponId,
      companionId,
      relicIds,
      timestamp: Date.now(),
    };

    const updated = [newBuild, ...history.slice(0, 9)];
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setBuildName("");
  };

  const loadBuild = (build: BuildHistory) => {
    setClassId(build.classId);
    setWeaponId(build.weaponId);
    setCompanionId(build.companionId);
    setRelicIds(build.relicIds);
  };

  const generateShareUrl = () => {
    const params = new URLSearchParams({
      c: classId,
      w: weaponId,
      p: companionId,
      r: relicIds.join(","),
    });
    return `${window.location.origin}/tools/build-share?${params.toString()}`;
  };

  const copyShareUrl = async () => {
    const url = generateShareUrl();
    await navigator.clipboard.writeText(url);
    alert("Share URL copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Build Calculator</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <CalculatorIcon size={48} className="text-purple-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Build Calculator</h1>
              <p className="text-gray-500">Create and optimize your perfect build</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Build Configuration */}
          <div className="space-y-6">
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h2 className="text-lg font-bold text-gray-100 mb-4">Configure Build</h2>

              <div className="space-y-4">
                <ClassSelector
                  value={classId}
                  onChange={setClassId}
                  showStats
                />

                <WeaponSelector
                  value={weaponId}
                  onChange={setWeaponId}
                  filterByClass={classId}
                  showStats
                />

                <CompanionSelector
                  value={companionId}
                  onChange={setCompanionId}
                  showStats
                />

                <RelicDropdown
                  value={relicIds}
                  onChange={setRelicIds}
                  maxSelections={5}
                />
              </div>
            </div>

            {/* Save & Share */}
            <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={buildName}
                  onChange={(e) => setBuildName(e.target.value)}
                  placeholder="Build name (optional)"
                  className="flex-1 px-3 py-2 bg-[#0a0a12] border border-purple-900/30 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={saveBuild}
                  disabled={!classId}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <SaveIcon size={16} />
                  Save
                </button>
              </div>
              <button
                onClick={copyShareUrl}
                disabled={!classId}
                className="w-full px-4 py-2 bg-[#0a0a12] hover:bg-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed border border-purple-900/30 text-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <ShareIcon size={16} />
                Copy Share Link
              </button>
            </div>

            {/* Build History */}
            {history.length > 0 && (
              <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
                <h3 className="text-sm font-bold text-gray-400 mb-3">Recent Builds</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {history.map((build) => (
                    <button
                      key={build.id}
                      onClick={() => loadBuild(build)}
                      className="w-full p-2 bg-[#0a0a12] hover:bg-purple-900/20 rounded-lg text-left transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm text-gray-200">{build.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(build.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                      <ChevronRightIcon size={14} className="text-gray-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Build Preview */}
          <div ref={buildRef} className="space-y-6">
            {/* Stats Radar */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-100">Build Stats</h2>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Total Score</p>
                  <p className="text-2xl font-black text-purple-400">{totalScore}</p>
                </div>
              </div>
              <StatsRadar data={radarData} size={280} />
            </div>

            {/* Build Summary */}
            <div className="p-6 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl">
              <h2 className="text-lg font-bold text-gray-100 mb-4">Build Summary</h2>

              {!classId ? (
                <p className="text-gray-500 text-center py-8">
                  Select a class to see your build summary
                </p>
              ) : (
                <div className="space-y-4">
                  {/* Class */}
                  <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center">
                      <span className="text-lg">⚔️</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Class</p>
                      <p className="font-medium text-gray-200">
                        {selectedClass?.name || "None selected"}
                      </p>
                    </div>
                  </div>

                  {/* Weapon */}
                  <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-red-900/30 flex items-center justify-center">
                      <span className="text-lg">🗡️</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Weapon</p>
                      <p className="font-medium text-gray-200">
                        {selectedWeapon?.name || "None selected"}
                      </p>
                    </div>
                  </div>

                  {/* Companion */}
                  <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                      <span className="text-lg">👻</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Companion</p>
                      <p className="font-medium text-gray-200">
                        {selectedCompanion?.name || "None selected"}
                      </p>
                    </div>
                  </div>

                  {/* Relics */}
                  <div className="p-3 bg-[#0a0a12] rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Relics ({selectedRelics.length}/5)</p>
                    {selectedRelics.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {selectedRelics.map((relic) => (
                          <span
                            key={relic.id}
                            className="px-2 py-1 bg-yellow-900/20 text-yellow-300 text-xs rounded"
                          >
                            {relic.name}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600">No relics selected</p>
                    )}
                  </div>

                  {/* Stat Bars */}
                  <div className="space-y-2 pt-4 border-t border-purple-900/30">
                    {Object.entries(finalStats).map(([stat, value]) => (
                      <div key={stat} className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-16 capitalize">{stat}</span>
                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full transition-all duration-300"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-8 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
