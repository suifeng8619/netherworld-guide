"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export interface StatsData {
  subject: string;
  value: number;
  fullMark: number;
}

interface StatsRadarProps {
  data: StatsData[];
  color?: string;
  fillOpacity?: number;
  size?: number;
}

export function StatsRadar({
  data,
  color = "#8b5cf6",
  fillOpacity = 0.3,
  size = 300,
}: StatsRadarProps) {
  return (
    <ResponsiveContainer width="100%" height={size}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#374151" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "#9ca3af", fontSize: 12 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: "#6b7280", fontSize: 10 }}
          tickCount={5}
        />
        <Radar
          name="Stats"
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={fillOpacity}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1a1a2e",
            border: "1px solid #4c1d95",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#e5e7eb" }}
          itemStyle={{ color: "#a78bfa" }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

interface CompareRadarProps {
  dataA: StatsData[];
  dataB: StatsData[];
  nameA?: string;
  nameB?: string;
  colorA?: string;
  colorB?: string;
  size?: number;
}

export function CompareRadar({
  dataA,
  dataB,
  nameA = "Build A",
  nameB = "Build B",
  colorA = "#8b5cf6",
  colorB = "#ef4444",
  size = 350,
}: CompareRadarProps) {
  // Merge data for comparison
  const mergedData = dataA.map((item, index) => ({
    subject: item.subject,
    [nameA]: item.value,
    [nameB]: dataB[index]?.value || 0,
    fullMark: item.fullMark,
  }));

  return (
    <ResponsiveContainer width="100%" height={size}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mergedData}>
        <PolarGrid stroke="#374151" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "#9ca3af", fontSize: 12 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: "#6b7280", fontSize: 10 }}
          tickCount={5}
        />
        <Radar
          name={nameA}
          dataKey={nameA}
          stroke={colorA}
          fill={colorA}
          fillOpacity={0.3}
          strokeWidth={2}
        />
        <Radar
          name={nameB}
          dataKey={nameB}
          stroke={colorB}
          fill={colorB}
          fillOpacity={0.3}
          strokeWidth={2}
        />
        <Legend
          wrapperStyle={{
            paddingTop: "10px",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1a1a2e",
            border: "1px solid #4c1d95",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#e5e7eb" }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// Helper function to convert build stats to radar data
export function buildStatsToRadarData(stats: {
  damage: number;
  defense: number;
  mobility: number;
  utility: number;
  range?: number;
  aoe?: number;
}): StatsData[] {
  return [
    { subject: "Damage", value: stats.damage, fullMark: 100 },
    { subject: "Defense", value: stats.defense, fullMark: 100 },
    { subject: "Mobility", value: stats.mobility, fullMark: 100 },
    { subject: "Utility", value: stats.utility, fullMark: 100 },
    { subject: "Range", value: stats.range || 50, fullMark: 100 },
    { subject: "AoE", value: stats.aoe || 50, fullMark: 100 },
  ];
}
