"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CompareIcon, ChevronRightIcon } from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS, SOUL_COMPANIONS, RELICS, BUILD_CALCULATOR_DATA } from "@/data/gameData";
import { ClassSelector } from "@/components/selectors/ClassSelector";
import { WeaponSelector } from "@/components/selectors/WeaponSelector";
import { CompanionSelector } from "@/components/selectors/CompanionSelector";
import { RelicDropdown } from "@/components/selectors/RelicPicker";
import { CompareRadar, buildStatsToRadarData } from "@/components/charts/StatsRadar";

interface Build {
  classId: string;
  weaponId: string;
  companionId: string;
  relicIds: string[];
}

function calculateBuildStats(build: Build) {
  if (!build.classId) {
    return { damage: 50, defense: 50, mobility: 50, utility: 50, range: 50, aoe: 50 };
  }

  const rawBaseStats = BUILD_CALCULATOR_DATA.baseStats[build.classId as keyof typeof BUILD_CALCULATOR_DATA.baseStats];
  const baseStats = {
    damage: (rawBaseStats as { damage?: number })?.damage ?? 50,
    defense: (rawBaseStats as { defense?: number })?.defense ?? 50,
    speed: (rawBaseStats as { moveSpeed?: number })?.moveSpeed ?? 50,
  };

  const rawWeaponBonus = BUILD_CALCULATOR_DATA.weaponBonuses[build.weaponId as keyof typeof BUILD_CALCULATOR_DATA.weaponBonuses];
  const weaponBonus = {
    damage: (rawWeaponBonus as { damage?: number })?.damage ?? 0,
    speed: (rawWeaponBonus as { attackSpeed?: number })?.attackSpeed ?? 0,
    range: (rawWeaponBonus as { range?: number })?.range ?? 0,
  };

  const rawCompanionBonus = BUILD_CALCULATOR_DATA.companionBonuses[build.companionId as keyof typeof BUILD_CALCULATOR_DATA.companionBonuses];
  const companionBonus = {
    defense: (rawCompanionBonus as { defense?: number })?.defense ?? 0,
    damage: (rawCompanionBonus as { damage?: number })?.damage ?? 0,
    utility: (rawCompanionBonus as { utility?: number })?.utility ?? 0,
  };

  let relicBonus = { damage: 0, defense: 0, speed: 0, utility: 0 };
  build.relicIds.forEach((id) => {
    const relic = RELICS.find((r) => r.id === id);
    if (relic) {
      if (relic.category === "offensive") {
        relicBonus.damage += 10;
      } else if (relic.category === "defensive") {
        relicBonus.defense += 15;
      } else {
        relicBonus.utility += 15;
        relicBonus.speed += 5;
      }
    }
  });

  return {
    damage: Math.min(100, baseStats.damage + weaponBonus.damage + companionBonus.damage + relicBonus.damage),
    defense: Math.min(100, baseStats.defense + companionBonus.defense + relicBonus.defense),
    mobility: Math.min(100, baseStats.speed + weaponBonus.speed + relicBonus.speed),
    utility: Math.min(100, 40 + companionBonus.utility + relicBonus.utility),
    range: Math.min(100, 40 + weaponBonus.range),
    aoe: Math.min(100, build.weaponId === "staff" ? 80 : build.weaponId === "greatsword" ? 60 : 40),
  };
}

function BuildColumn({
  build,
  onChange,
  label,
  color,
}: {
  build: Build;
  onChange: (build: Build) => void;
  label: string;
  color: "purple" | "red";
}) {
  const selectedClass = CLASSES.find((c) => c.id === build.classId);
  const selectedWeapon = WEAPONS.find((w) => w.id === build.weaponId);
  const selectedCompanion = SOUL_COMPANIONS.find((c) => c.id === build.companionId);
  const selectedRelics = RELICS.filter((r) => build.relicIds.includes(r.id));

  const borderColor = color === "purple" ? "border-purple-500" : "border-red-500";
  const bgColor = color === "purple" ? "bg-purple-900/20" : "bg-red-900/20";

  return (
    <div className={`p-4 bg-[#12121f] border-2 ${borderColor} rounded-xl`}>
      <h3 className={`font-bold text-lg mb-4 ${color === "purple" ? "text-purple-400" : "text-red-400"}`}>
        {label}
      </h3>

      <div className="space-y-3">
        <ClassSelector
          value={build.classId}
          onChange={(v) => onChange({ ...build, classId: v })}
          label="Class"
        />
        <WeaponSelector
          value={build.weaponId}
          onChange={(v) => onChange({ ...build, weaponId: v })}
          label="Weapon"
          filterByClass={build.classId}
        />
        <CompanionSelector
          value={build.companionId}
          onChange={(v) => onChange({ ...build, companionId: v })}
          label="Companion"
        />
        <RelicDropdown
          value={build.relicIds}
          onChange={(v) => onChange({ ...build, relicIds: v })}
          maxSelections={5}
          label="Relics"
        />
      </div>

      {/* Build Summary */}
      {build.classId && (
        <div className={`mt-4 p-3 ${bgColor} rounded-lg`}>
          <p className="text-xs text-gray-500 mb-2">Build Summary</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-300">{selectedClass?.name || "-"}</p>
            <p className="text-gray-400">{selectedWeapon?.name || "No weapon"}</p>
            <p className="text-gray-400">{selectedCompanion?.name || "No companion"}</p>
            <p className="text-gray-500">{selectedRelics.length} relics</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ComparePage() {
  const [buildA, setBuildA] = useState<Build>({
    classId: "",
    weaponId: "",
    companionId: "",
    relicIds: [],
  });

  const [buildB, setBuildB] = useState<Build>({
    classId: "",
    weaponId: "",
    companionId: "",
    relicIds: [],
  });

  const statsA = useMemo(() => calculateBuildStats(buildA), [buildA]);
  const statsB = useMemo(() => calculateBuildStats(buildB), [buildB]);

  const radarDataA = useMemo(() => buildStatsToRadarData(statsA), [statsA]);
  const radarDataB = useMemo(() => buildStatsToRadarData(statsB), [statsB]);

  const totalA = Object.values(statsA).reduce((a, b) => a + b, 0);
  const totalB = Object.values(statsB).reduce((a, b) => a + b, 0);

  const comparisons = [
    { label: "Damage", a: statsA.damage, b: statsB.damage },
    { label: "Defense", a: statsA.defense, b: statsB.defense },
    { label: "Mobility", a: statsA.mobility, b: statsB.mobility },
    { label: "Utility", a: statsA.utility, b: statsB.utility },
    { label: "Range", a: statsA.range, b: statsB.range },
    { label: "AoE", a: statsA.aoe, b: statsB.aoe },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Compare</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <CompareIcon size={48} className="text-orange-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Compare Builds</h1>
              <p className="text-gray-500">Side-by-side build comparison</p>
            </div>
          </div>
        </header>

        {/* Build Columns */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <BuildColumn
            build={buildA}
            onChange={setBuildA}
            label="Build A"
            color="purple"
          />
          <BuildColumn
            build={buildB}
            onChange={setBuildB}
            label="Build B"
            color="red"
          />
        </div>

        {/* Comparison Results */}
        {(buildA.classId || buildB.classId) && (
          <div className="space-y-6">
            {/* Radar Chart */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h3 className="font-bold text-gray-100 mb-4 text-center">Stats Comparison</h3>
              <CompareRadar
                dataA={radarDataA}
                dataB={radarDataB}
                nameA="Build A"
                nameB="Build B"
                colorA="#8b5cf6"
                colorB="#ef4444"
                size={350}
              />
            </div>

            {/* Stat Bars */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h3 className="font-bold text-gray-100 mb-4">Detailed Comparison</h3>
              <div className="space-y-4">
                {comparisons.map((comp) => (
                  <div key={comp.label}>
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>{comp.label}</span>
                      <div className="flex gap-4">
                        <span className="text-purple-400">{comp.a}</span>
                        <span className="text-gray-600">vs</span>
                        <span className="text-red-400">{comp.b}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 h-3">
                      <div className="flex-1 bg-gray-800 rounded-l overflow-hidden">
                        <div
                          className="h-full bg-purple-500 float-right rounded-l"
                          style={{ width: `${comp.a}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-800 rounded-r overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-r"
                          style={{ width: `${comp.b}%` }}
                        />
                      </div>
                    </div>
                    {comp.a !== comp.b && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        {comp.a > comp.b ? (
                          <span className="text-purple-400">Build A +{comp.a - comp.b}</span>
                        ) : (
                          <span className="text-red-400">Build B +{comp.b - comp.a}</span>
                        )}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-6 bg-gradient-to-r from-purple-900/10 to-red-900/10 border border-purple-900/30 rounded-xl">
              <h3 className="font-bold text-gray-100 mb-4 text-center">Overall Score</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Build A</p>
                  <p className="text-3xl font-black text-purple-400">{Math.round(totalA / 6)}</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-xs text-gray-500 mb-1">Winner</p>
                  <p className="text-2xl font-black">
                    {totalA > totalB ? (
                      <span className="text-purple-400">Build A</span>
                    ) : totalB > totalA ? (
                      <span className="text-red-400">Build B</span>
                    ) : (
                      <span className="text-gray-400">Tie</span>
                    )}
                  </p>
                </div>
                <div className="text-center p-4 bg-red-900/20 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Build B</p>
                  <p className="text-3xl font-black text-red-400">{Math.round(totalB / 6)}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
          <h3 className="font-semibold text-gray-200 mb-3">Comparison Tips</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
              Compare different classes to see their strengths and weaknesses
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
              Test how different weapon choices affect the same class
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
              Higher overall score doesn&apos;t always mean better—consider your playstyle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
