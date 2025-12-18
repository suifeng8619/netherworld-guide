"use client";

import { RELICS } from "@/data/gameData";
import { TierBadge, type Tier } from "@/components/ui/TierBadge";

interface RelicPickerProps {
  value: string[];
  onChange: (value: string[]) => void;
  maxSelections?: number;
  label?: string;
  filterByClass?: string;
}

export function RelicPicker({
  value,
  onChange,
  maxSelections = 5,
  label = "Relics",
  filterByClass,
}: RelicPickerProps) {
  const filteredRelics = filterByClass
    ? RELICS.filter((r) => r.bestFor.includes(filterByClass) || r.bestFor.includes("All"))
    : RELICS;

  const toggleRelic = (relicId: string) => {
    if (value.includes(relicId)) {
      onChange(value.filter((id) => id !== relicId));
    } else if (value.length < maxSelections) {
      onChange([...value, relicId]);
    }
  };

  const selectedRelics = RELICS.filter((r) => value.includes(r.id));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        {label && (
          <label className="block text-sm font-medium text-gray-400">{label}</label>
        )}
        <span className="text-xs text-gray-500">
          {value.length}/{maxSelections} selected
        </span>
      </div>

      {/* Selected Relics */}
      {selectedRelics.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-[#0a0a12] rounded-lg border border-purple-900/20">
          {selectedRelics.map((relic) => (
            <button
              key={relic.id}
              onClick={() => toggleRelic(relic.id)}
              className="flex items-center gap-2 px-3 py-1.5 bg-yellow-900/30 text-yellow-300 rounded-lg text-sm hover:bg-yellow-900/50 transition-colors"
            >
              <span>{relic.name}</span>
              <span className="text-yellow-500">×</span>
            </button>
          ))}
        </div>
      )}

      {/* Relic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto p-1">
        {filteredRelics.map((relic) => {
          const isSelected = value.includes(relic.id);
          const isDisabled = !isSelected && value.length >= maxSelections;

          return (
            <button
              key={relic.id}
              onClick={() => !isDisabled && toggleRelic(relic.id)}
              disabled={isDisabled}
              className={`
                p-3 rounded-lg border text-left transition-all
                ${
                  isSelected
                    ? "bg-yellow-900/20 border-yellow-500 ring-1 ring-yellow-500/50"
                    : isDisabled
                    ? "bg-gray-900/30 border-gray-800 opacity-50 cursor-not-allowed"
                    : "bg-[#12121f] border-purple-900/30 hover:border-yellow-700"
                }
              `}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="font-medium text-gray-200 text-sm">{relic.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{relic.effect}</p>
                </div>
                <TierBadge tier={relic.tier as Tier} size="sm" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs px-1.5 py-0.5 rounded ${
                    relic.rarity === "legendary"
                      ? "bg-yellow-900/30 text-yellow-400"
                      : relic.rarity === "rare"
                      ? "bg-purple-900/30 text-purple-400"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {relic.rarity}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface RelicDropdownProps {
  value: string[];
  onChange: (value: string[]) => void;
  maxSelections?: number;
  label?: string;
}

export function RelicDropdown({
  value,
  onChange,
  maxSelections = 5,
  label = "Add Relic",
}: RelicDropdownProps) {
  const availableRelics = RELICS.filter((r) => !value.includes(r.id));

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const relicId = e.target.value;
    if (relicId && value.length < maxSelections) {
      onChange([...value, relicId]);
    }
    e.target.value = "";
  };

  const removeRelic = (relicId: string) => {
    onChange(value.filter((id) => id !== relicId));
  };

  const selectedRelics = RELICS.filter((r) => value.includes(r.id));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {label && (
          <label className="block text-sm font-medium text-gray-400">{label}</label>
        )}
        <span className="text-xs text-gray-500">
          {value.length}/{maxSelections}
        </span>
      </div>

      <select
        onChange={handleSelect}
        disabled={value.length >= maxSelections}
        className="
          w-full px-4 py-2.5 rounded-lg
          bg-[#12121f] border border-purple-900/30
          text-gray-200 text-sm
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        <option value="">
          {value.length >= maxSelections ? "Max relics selected" : "Select a relic..."}
        </option>
        {availableRelics.map((relic) => (
          <option key={relic.id} value={relic.id}>
            [{relic.tier}] {relic.name} ({relic.rarity})
          </option>
        ))}
      </select>

      {selectedRelics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedRelics.map((relic) => (
            <span
              key={relic.id}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-900/20 text-yellow-300 rounded-lg text-sm"
            >
              {relic.name}
              <button
                onClick={() => removeRelic(relic.id)}
                className="hover:text-yellow-100 transition-colors"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
