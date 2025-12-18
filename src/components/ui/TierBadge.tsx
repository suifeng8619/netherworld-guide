export type Tier = "S" | "A" | "B" | "C" | "D";

interface TierBadgeProps {
  tier: Tier;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const tierConfig: Record<Tier, { bg: string; text: string; border: string; label: string }> = {
  S: {
    bg: "bg-gradient-to-r from-yellow-600 to-amber-500",
    text: "text-yellow-100",
    border: "border-yellow-400",
    label: "Meta",
  },
  A: {
    bg: "bg-gradient-to-r from-purple-600 to-violet-500",
    text: "text-purple-100",
    border: "border-purple-400",
    label: "Strong",
  },
  B: {
    bg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    text: "text-blue-100",
    border: "border-blue-400",
    label: "Good",
  },
  C: {
    bg: "bg-gradient-to-r from-green-600 to-emerald-500",
    text: "text-green-100",
    border: "border-green-400",
    label: "Average",
  },
  D: {
    bg: "bg-gradient-to-r from-gray-600 to-slate-500",
    text: "text-gray-100",
    border: "border-gray-400",
    label: "Weak",
  },
};

const sizeStyles = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

export function TierBadge({ tier, size = "md", showLabel = false }: TierBadgeProps) {
  const config = tierConfig[tier];

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-bold rounded
        ${config.bg} ${config.text} ${sizeStyles[size]}
        border ${config.border} shadow-sm
      `}
    >
      <span className="font-black">{tier}</span>
      {showLabel && <span className="font-medium opacity-90">· {config.label}</span>}
    </span>
  );
}

interface TierListSectionProps {
  tier: Tier;
  items: { id: string; name: string; image?: string }[];
  renderItem?: (item: { id: string; name: string; image?: string }) => React.ReactNode;
}

export function TierListSection({ tier, items, renderItem }: TierListSectionProps) {
  const config = tierConfig[tier];

  if (items.length === 0) return null;

  return (
    <div className="flex border border-gray-800 rounded-lg overflow-hidden">
      <div
        className={`
          w-16 flex-shrink-0 flex items-center justify-center
          ${config.bg} ${config.text} font-black text-2xl
        `}
      >
        {tier}
      </div>
      <div className="flex-1 p-3 bg-[#12121f] flex flex-wrap gap-2">
        {items.map((item) =>
          renderItem ? (
            renderItem(item)
          ) : (
            <span
              key={item.id}
              className="px-3 py-1.5 bg-gray-800/50 text-gray-200 rounded text-sm"
            >
              {item.name}
            </span>
          )
        )}
      </div>
    </div>
  );
}
