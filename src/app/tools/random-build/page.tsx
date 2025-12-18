"use client";

import { useState } from "react";
import Link from "next/link";
import { DiceIcon, LockIcon, UnlockIcon, RefreshIcon, ChevronRightIcon, ShareIcon } from "@/components/icons/GameIcons";
import { CLASSES, WEAPONS, SOUL_COMPANIONS, RELICS } from "@/data/gameData";

interface Build {
  classId: string;
  weaponId: string;
  companionId: string;
  relicIds: string[];
}

interface Locks {
  class: boolean;
  weapon: boolean;
  companion: boolean;
  relics: boolean;
}

function randomPick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomPickMultiple<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function RandomBuildPage() {
  const [build, setBuild] = useState<Build | null>(null);
  const [locks, setLocks] = useState<Locks>({
    class: false,
    weapon: false,
    companion: false,
    relics: false,
  });
  const [challengeMode, setChallengeMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBuild = () => {
    setIsGenerating(true);

    // Animate generation
    setTimeout(() => {
      const newBuild: Build = {
        classId: locks.class && build?.classId ? build.classId : randomPick(CLASSES).id,
        weaponId: locks.weapon && build?.weaponId ? build.weaponId : randomPick(WEAPONS).id,
        companionId: locks.companion && build?.companionId ? build.companionId : randomPick(SOUL_COMPANIONS).id,
        relicIds:
          locks.relics && build?.relicIds
            ? build.relicIds
            : randomPickMultiple(RELICS, challengeMode ? 1 : 3).map((r) => r.id),
      };

      setBuild(newBuild);
      setIsGenerating(false);
    }, 500);
  };

  const toggleLock = (key: keyof Locks) => {
    setLocks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedClass = build ? CLASSES.find((c) => c.id === build.classId) : null;
  const selectedWeapon = build ? WEAPONS.find((w) => w.id === build.weaponId) : null;
  const selectedCompanion = build ? SOUL_COMPANIONS.find((c) => c.id === build.companionId) : null;
  const selectedRelics = build ? RELICS.filter((r) => build.relicIds.includes(r.id)) : [];

  const generateShareUrl = () => {
    if (!build) return "";
    const params = new URLSearchParams({
      c: build.classId,
      w: build.weaponId,
      p: build.companionId,
      r: build.relicIds.join(","),
    });
    return `${window.location.origin}/tools/build-share?${params.toString()}`;
  };

  const copyShareUrl = async () => {
    const url = generateShareUrl();
    await navigator.clipboard.writeText(url);
    alert("Share URL copied!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Random Build</span>
        </nav>

        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <DiceIcon size={48} className="text-green-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Random Build</h1>
          <p className="text-gray-500 mt-2">Let fate decide your next adventure</p>
        </header>

        {/* Generate Button */}
        <button
          onClick={generateBuild}
          disabled={isGenerating}
          className={`
            w-full py-6 rounded-xl font-bold text-xl transition-all
            ${
              isGenerating
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-900/30"
            }
          `}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-3">
              <RefreshIcon size={24} className="animate-spin" />
              Generating...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <DiceIcon size={24} />
              {build ? "Roll Again!" : "Generate Build"}
            </span>
          )}
        </button>

        {/* Challenge Mode */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setChallengeMode(!challengeMode)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2
              ${
                challengeMode
                  ? "bg-red-900/30 text-red-400 border border-red-700"
                  : "bg-[#12121f] text-gray-400 border border-purple-900/30 hover:border-purple-700"
              }
            `}
          >
            🔥 Challenge Mode
          </button>
          {challengeMode && (
            <span className="text-xs text-red-400">Only 1 relic allowed!</span>
          )}
        </div>

        {/* Build Result */}
        {build && (
          <div className="mt-8 space-y-4">
            {/* Class */}
            <div
              className={`p-4 bg-[#12121f] border rounded-xl flex items-center gap-4 transition-all ${
                isGenerating ? "opacity-50" : "opacity-100"
              } ${locks.class ? "border-yellow-700" : "border-purple-900/30"}`}
            >
              <div className="w-14 h-14 rounded-xl bg-purple-900/30 flex items-center justify-center text-2xl">
                {selectedClass?.id === "berserker" && "⚔️"}
                {selectedClass?.id === "mage" && "🔮"}
                {selectedClass?.id === "hunter" && "🏹"}
                {selectedClass?.id === "shield-guard" && "🛡️"}
                {selectedClass?.id === "useless-person" && "👤"}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Class</p>
                <p className="text-lg font-bold text-gray-200">{selectedClass?.name}</p>
                <p className="text-xs text-gray-500">{selectedClass?.title}</p>
              </div>
              <button
                onClick={() => toggleLock("class")}
                className={`p-2 rounded-lg transition-colors ${
                  locks.class
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-gray-800 text-gray-500 hover:text-gray-300"
                }`}
              >
                {locks.class ? <LockIcon size={20} /> : <UnlockIcon size={20} />}
              </button>
            </div>

            {/* Weapon */}
            <div
              className={`p-4 bg-[#12121f] border rounded-xl flex items-center gap-4 transition-all ${
                isGenerating ? "opacity-50" : "opacity-100"
              } ${locks.weapon ? "border-yellow-700" : "border-purple-900/30"}`}
            >
              <div className="w-14 h-14 rounded-xl bg-red-900/30 flex items-center justify-center text-2xl">
                🗡️
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Weapon</p>
                <p className="text-lg font-bold text-gray-200">{selectedWeapon?.name}</p>
                <p className="text-xs text-gray-500">{selectedWeapon?.type}</p>
              </div>
              <button
                onClick={() => toggleLock("weapon")}
                className={`p-2 rounded-lg transition-colors ${
                  locks.weapon
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-gray-800 text-gray-500 hover:text-gray-300"
                }`}
              >
                {locks.weapon ? <LockIcon size={20} /> : <UnlockIcon size={20} />}
              </button>
            </div>

            {/* Companion */}
            <div
              className={`p-4 bg-[#12121f] border rounded-xl flex items-center gap-4 transition-all ${
                isGenerating ? "opacity-50" : "opacity-100"
              } ${locks.companion ? "border-yellow-700" : "border-purple-900/30"}`}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-900/30 flex items-center justify-center text-2xl">
                👻
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Soul Companion</p>
                <p className="text-lg font-bold text-gray-200">{selectedCompanion?.name}</p>
                <p className="text-xs text-gray-500">{selectedCompanion?.type}</p>
              </div>
              <button
                onClick={() => toggleLock("companion")}
                className={`p-2 rounded-lg transition-colors ${
                  locks.companion
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-gray-800 text-gray-500 hover:text-gray-300"
                }`}
              >
                {locks.companion ? <LockIcon size={20} /> : <UnlockIcon size={20} />}
              </button>
            </div>

            {/* Relics */}
            <div
              className={`p-4 bg-[#12121f] border rounded-xl transition-all ${
                isGenerating ? "opacity-50" : "opacity-100"
              } ${locks.relics ? "border-yellow-700" : "border-purple-900/30"}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💎</span>
                  <p className="text-xs text-gray-500">Relics</p>
                </div>
                <button
                  onClick={() => toggleLock("relics")}
                  className={`p-2 rounded-lg transition-colors ${
                    locks.relics
                      ? "bg-yellow-900/30 text-yellow-400"
                      : "bg-gray-800 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {locks.relics ? <LockIcon size={20} /> : <UnlockIcon size={20} />}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedRelics.map((relic) => (
                  <span
                    key={relic.id}
                    className="px-3 py-1.5 bg-yellow-900/20 text-yellow-300 text-sm rounded"
                  >
                    {relic.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Link
                href={`/classes/${build.classId}`}
                className="px-4 py-3 bg-[#12121f] hover:bg-purple-900/20 border border-purple-900/30 text-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                View Class Guide
                <ChevronRightIcon size={16} />
              </Link>
              <button
                onClick={copyShareUrl}
                className="px-4 py-3 bg-[#12121f] hover:bg-purple-900/20 border border-purple-900/30 text-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <ShareIcon size={16} />
                Share Build
              </button>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
          <h3 className="font-semibold text-gray-200 mb-3">Tips</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <LockIcon size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
              Lock items you want to keep when re-rolling
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">🔥</span>
              Challenge Mode gives you only 1 relic for extra difficulty
            </li>
            <li className="flex items-start gap-2">
              <ShareIcon size={14} className="text-blue-400 mt-1 flex-shrink-0" />
              Share your random builds with friends for group challenges
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
