interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: "purple" | "red" | "blue" | "green" | "orange" | "yellow";
  showValue?: boolean;
}

const colorMap = {
  purple: "bg-purple-500",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
};

export function StatBar({
  label,
  value,
  maxValue = 5,
  color = "purple",
  showValue = true,
}: StatBarProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 w-24 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorMap[color]} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="text-sm text-gray-300 w-12 text-right">
          {value}/{maxValue}
        </span>
      )}
    </div>
  );
}

interface StarRatingProps {
  value: number;
  maxValue?: number;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function StarRating({ value, maxValue = 5, size = "md" }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxValue }, (_, i) => (
        <svg
          key={i}
          className={`${sizeMap[size]} ${
            i < value ? "text-yellow-500" : "text-gray-700"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
