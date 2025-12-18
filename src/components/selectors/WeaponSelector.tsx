"use client";

import { WEAPONS } from "@/data/gameData";

interface WeaponSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  showStats?: boolean;
  filterByClass?: string;
}

export function WeaponSelector({
  value,
  onChange,
  label = "Weapon",
  placeholder = "Select a weapon",
  showStats = false,
  filterByClass,
}: WeaponSelectorProps) {
  const filteredWeapons = filterByClass
    ? WEAPONS.filter((w) => w.bestFor.includes(filterByClass))
    : WEAPONS;

  const selectedWeapon = WEAPONS.find((w) => w.id === value);

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
        {filteredWeapons.map((weapon) => (
          <option key={weapon.id} value={weapon.id}>
            {weapon.name} - {weapon.type}
          </option>
        ))}
      </select>

      {showStats && selectedWeapon && (
        <div className="p-3 bg-[#0a0a12] rounded-lg border border-purple-900/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded">
              {selectedWeapon.type}
            </span>
            <span className="text-xs text-gray-500">
              Best for: {selectedWeapon.bestFor.join(", ")}
            </span>
          </div>
          <p className="text-xs text-gray-400">{selectedWeapon.description}</p>
        </div>
      )}
    </div>
  );
}

interface WeaponCardSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  filterByClass?: string;
}

export function WeaponCardSelector({
  value,
  onChange,
  label,
  filterByClass,
}: WeaponCardSelectorProps) {
  const filteredWeapons = filterByClass
    ? WEAPONS.filter((w) => w.bestFor.includes(filterByClass))
    : WEAPONS;

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-400">{label}</label>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {filteredWeapons.map((weapon) => (
          <button
            key={weapon.id}
            onClick={() => onChange(weapon.id)}
            className={`
              p-3 rounded-lg border text-left transition-all
              ${
                value === weapon.id
                  ? "bg-red-900/30 border-red-500 ring-2 ring-red-500/50"
                  : "bg-[#12121f] border-purple-900/30 hover:border-red-700"
              }
            `}
          >
            <p className="font-semibold text-gray-200 text-sm">{weapon.name}</p>
            <p className="text-xs text-gray-500">{weapon.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
