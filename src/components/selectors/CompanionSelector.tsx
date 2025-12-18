"use client";

import { SOUL_COMPANIONS } from "@/data/gameData";

interface CompanionSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  showStats?: boolean;
}

export function CompanionSelector({
  value,
  onChange,
  label = "Soul Companion",
  placeholder = "Select a companion",
  showStats = false,
}: CompanionSelectorProps) {
  const selectedCompanion = SOUL_COMPANIONS.find((c) => c.id === value);

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-400">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-4 py-2.5 rounded-lg
          bg-[#12121f] border border-purple-900/30
          text-gray-200 text-sm
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          cursor-pointer
        "
      >
        <option value="">{placeholder}</option>
        {SOUL_COMPANIONS.map((companion) => (
          <option key={companion.id} value={companion.id}>
            {companion.name} - {companion.type}
          </option>
        ))}
      </select>

      {showStats && selectedCompanion && (
        <div className="p-3 bg-[#0a0a12] rounded-lg border border-purple-900/20">
          <p className="text-xs text-gray-400 mb-2">{selectedCompanion.description}</p>
          <div className="text-xs">
            <span className="text-gray-500">Playstyle:</span>
            <span className="ml-1 text-blue-400">{selectedCompanion.playstyle}</span>
          </div>
        </div>
      )}
    </div>
  );
}

interface CompanionCardSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function CompanionCardSelector({
  value,
  onChange,
  label,
}: CompanionCardSelectorProps) {
  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-400">{label}</label>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SOUL_COMPANIONS.map((companion) => (
          <button
            key={companion.id}
            onClick={() => onChange(companion.id)}
            className={`
              p-3 rounded-lg border text-left transition-all
              ${
                value === companion.id
                  ? "bg-blue-900/30 border-blue-500 ring-2 ring-blue-500/50"
                  : "bg-[#12121f] border-purple-900/30 hover:border-blue-700"
              }
            `}
          >
            <p className="font-semibold text-gray-200 text-sm">{companion.name}</p>
            <p className="text-xs text-gray-500">{companion.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
