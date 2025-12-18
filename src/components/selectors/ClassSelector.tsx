"use client";

import { CLASSES } from "@/data/gameData";

interface ClassSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  showStats?: boolean;
}

export function ClassSelector({
  value,
  onChange,
  label = "Class",
  placeholder = "Select a class",
  showStats = false,
}: ClassSelectorProps) {
  const selectedClass = CLASSES.find((c) => c.id === value);

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
        {CLASSES.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name} - {cls.title}
          </option>
        ))}
      </select>

      {showStats && selectedClass && (
        <div className="p-3 bg-[#0a0a12] rounded-lg border border-purple-900/20">
          <p className="text-xs text-gray-500 mb-2">{selectedClass.description}</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-500">Difficulty:</span>
              <span className="ml-1 text-gray-300">{selectedClass.difficulty}</span>
            </div>
            <div>
              <span className="text-gray-500">Role:</span>
              <span className="ml-1 text-gray-300">{selectedClass.title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ClassCardSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function ClassCardSelector({ value, onChange, label }: ClassCardSelectorProps) {
  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-400">{label}</label>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CLASSES.map((cls) => (
          <button
            key={cls.id}
            onClick={() => onChange(cls.id)}
            className={`
              p-3 rounded-lg border text-left transition-all
              ${
                value === cls.id
                  ? "bg-purple-900/30 border-purple-500 ring-2 ring-purple-500/50"
                  : "bg-[#12121f] border-purple-900/30 hover:border-purple-700"
              }
            `}
          >
            <p className="font-semibold text-gray-200 text-sm">{cls.name}</p>
            <p className="text-xs text-gray-500">{cls.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
