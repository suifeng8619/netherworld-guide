"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { TargetIcon, SwordIcon, LightningIcon } from "@/components/icons/GameIcons";

interface DamageStats {
  attack: number;
  critRate: number;
  critDamage: number;
  attackSpeed: number;
  bonusDamage: number;
  enemyDefense: number;
}

function calculateDamage(stats: DamageStats) {
  const baseDamage = stats.attack * (1 + stats.bonusDamage / 100);
  const mitigatedDamage = baseDamage * (100 / (100 + stats.enemyDefense));
  const criticalDamage = mitigatedDamage * (stats.critDamage / 100);
  const averageDamage = mitigatedDamage * (1 - stats.critRate / 100) + criticalDamage * (stats.critRate / 100);
  const dps = averageDamage * stats.attackSpeed;

  return {
    baseDamage: Math.round(baseDamage),
    mitigatedDamage: Math.round(mitigatedDamage),
    criticalDamage: Math.round(criticalDamage),
    averageDamage: Math.round(averageDamage),
    dps: Math.round(dps),
  };
}

export default function DamageCalculatorPage() {
  const [stats, setStats] = useState<DamageStats>({
    attack: 100,
    critRate: 25,
    critDamage: 200,
    attackSpeed: 1.5,
    bonusDamage: 0,
    enemyDefense: 50,
  });

  const damage = useMemo(() => calculateDamage(stats), [stats]);

  const updateStat = (key: keyof DamageStats, value: number) => {
    setStats((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Damage Calculator</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <TargetIcon size={48} className="text-red-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Damage Calculator</h1>
              <p className="text-gray-500">Calculate your true DPS potential</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Stats */}
          <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
            <h2 className="text-lg font-bold text-gray-100 mb-6">Input Stats</h2>

            <div className="space-y-6">
              {/* Attack */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Base Attack</label>
                  <span className="text-sm text-purple-400">{stats.attack}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={stats.attack}
                  onChange={(e) => updateStat("attack", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>50</span>
                  <span>500</span>
                </div>
              </div>

              {/* Crit Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Critical Rate</label>
                  <span className="text-sm text-yellow-400">{stats.critRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={stats.critRate}
                  onChange={(e) => updateStat("critRate", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Crit Damage */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Critical Damage</label>
                  <span className="text-sm text-orange-400">{stats.critDamage}%</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="400"
                  value={stats.critDamage}
                  onChange={(e) => updateStat("critDamage", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>100%</span>
                  <span>400%</span>
                </div>
              </div>

              {/* Attack Speed */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Attack Speed</label>
                  <span className="text-sm text-blue-400">{stats.attackSpeed.toFixed(1)}/s</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={stats.attackSpeed}
                  onChange={(e) => updateStat("attackSpeed", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0.5/s</span>
                  <span>3.0/s</span>
                </div>
              </div>

              {/* Bonus Damage */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Bonus Damage</label>
                  <span className="text-sm text-green-400">+{stats.bonusDamage}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={stats.bonusDamage}
                  onChange={(e) => updateStat("bonusDamage", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0%</span>
                  <span>200%</span>
                </div>
              </div>

              {/* Enemy Defense */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Enemy Defense</label>
                  <span className="text-sm text-gray-400">{stats.enemyDefense}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={stats.enemyDefense}
                  onChange={(e) => updateStat("enemyDefense", Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gray-500"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0 (Trash)</span>
                  <span>200 (Boss)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Damage Results */}
          <div className="space-y-6">
            {/* Main DPS */}
            <div className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-900/30 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-100">Damage Output</h2>
                <LightningIcon size={24} className="text-yellow-500" />
              </div>

              <div className="text-center mb-6">
                <p className="text-xs text-gray-500 mb-1">Estimated DPS</p>
                <p className="text-5xl font-black text-red-500">{damage.dps.toLocaleString()}</p>
                <p className="text-sm text-gray-500">damage per second</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#0a0a12] rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Normal Hit</p>
                  <p className="text-xl font-bold text-gray-200">{damage.mitigatedDamage.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-[#0a0a12] rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Critical Hit</p>
                  <p className="text-xl font-bold text-yellow-400">{damage.criticalDamage.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Damage Breakdown */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center gap-2">
                <SwordIcon size={20} className="text-red-500" />
                Damage Breakdown
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-[#0a0a12] rounded">
                  <span className="text-sm text-gray-400">Base Damage (with bonuses)</span>
                  <span className="text-sm text-gray-200">{damage.baseDamage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#0a0a12] rounded">
                  <span className="text-sm text-gray-400">After Defense Mitigation</span>
                  <span className="text-sm text-gray-200">{damage.mitigatedDamage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#0a0a12] rounded">
                  <span className="text-sm text-gray-400">Average Damage per Hit</span>
                  <span className="text-sm text-purple-400">{damage.averageDamage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-900/20 rounded border border-red-900/30">
                  <span className="text-sm text-gray-400">DPS (Avg × Attack Speed)</span>
                  <span className="text-sm font-bold text-red-400">{damage.dps.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Formula Info */}
            <div className="p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h3 className="font-semibold text-gray-200 mb-2">Damage Formula</h3>
              <div className="space-y-2 text-xs text-gray-500 font-mono">
                <p>Base = Attack × (1 + BonusDmg%)</p>
                <p>Mitigated = Base × (100 / (100 + EnemyDef))</p>
                <p>Crit = Mitigated × CritDmg%</p>
                <p>Avg = Mitigated × (1 - CritRate) + Crit × CritRate</p>
                <p>DPS = Avg × AttackSpeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
