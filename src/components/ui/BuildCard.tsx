"use client";

import { forwardRef } from "react";
import { TierBadge } from "./TierBadge";
import { SwordIcon, StarIcon, ShieldIcon, GemIcon } from "@/components/icons/GameIcons";

export interface BuildData {
  id?: string;
  name?: string;
  classId: string;
  className: string;
  weaponId: string;
  weaponName: string;
  companionId: string;
  companionName: string;
  relics?: { id: string; name: string }[];
  tier?: "S" | "A" | "B" | "C" | "D";
  stats?: {
    damage: number;
    defense: number;
    mobility: number;
    utility: number;
  };
}

interface BuildCardProps {
  build: BuildData;
  showStats?: boolean;
  showTier?: boolean;
  compact?: boolean;
  className?: string;
}

export const BuildCard = forwardRef<HTMLDivElement, BuildCardProps>(
  function BuildCard({ build, showStats = true, showTier = true, compact = false, className = "" }, ref) {
    return (
      <div
        ref={ref}
        className={`
          bg-gradient-to-br from-[#12121f] to-[#1a1a2e]
          border border-purple-900/30 rounded-xl overflow-hidden
          ${className}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-purple-900/20">
          <div className="flex items-center justify-between">
            <div>
              {build.name && (
                <h3 className="text-lg font-bold text-gray-100">{build.name}</h3>
              )}
              <p className="text-sm text-purple-400">{build.className} Build</p>
            </div>
            {showTier && build.tier && <TierBadge tier={build.tier} />}
          </div>
        </div>

        {/* Build Components */}
        <div className={`p-4 ${compact ? "space-y-2" : "space-y-3"}`}>
          {/* Class */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center">
              <StarIcon size={16} className="text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Class</p>
              <p className="text-sm font-medium text-gray-200">{build.className}</p>
            </div>
          </div>

          {/* Weapon */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-900/30 flex items-center justify-center">
              <SwordIcon size={16} className="text-red-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Weapon</p>
              <p className="text-sm font-medium text-gray-200">{build.weaponName}</p>
            </div>
          </div>

          {/* Companion */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center">
              <ShieldIcon size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Companion</p>
              <p className="text-sm font-medium text-gray-200">{build.companionName}</p>
            </div>
          </div>

          {/* Relics */}
          {build.relics && build.relics.length > 0 && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-900/30 flex items-center justify-center">
                <GemIcon size={16} className="text-yellow-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Relics</p>
                <div className="flex flex-wrap gap-1">
                  {build.relics.map((relic) => (
                    <span
                      key={relic.id}
                      className="text-xs px-2 py-0.5 bg-yellow-900/20 text-yellow-300 rounded"
                    >
                      {relic.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {showStats && build.stats && (
          <div className="p-4 bg-[#0a0a12] border-t border-purple-900/20">
            <div className="grid grid-cols-4 gap-2">
              <StatMini label="DMG" value={build.stats.damage} color="red" />
              <StatMini label="DEF" value={build.stats.defense} color="blue" />
              <StatMini label="MOB" value={build.stats.mobility} color="green" />
              <StatMini label="UTL" value={build.stats.utility} color="yellow" />
            </div>
          </div>
        )}
      </div>
    );
  }
);

function StatMini({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "red" | "blue" | "green" | "yellow";
}) {
  const colorClasses = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
  };

  return (
    <div className="text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-lg font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
}
