"use client";
import React from "react";
import { Card } from "antd";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const radarData = [
  { subject: 'Facebook', A: 120, fullMark: 150 },
  { subject: 'Twitter', A: 98, fullMark: 150 },
  { subject: 'Instagram', A: 86, fullMark: 150 },
  { subject: 'YouTube', A: 99, fullMark: 150 },
  { subject: 'LinkedIn', A: 85, fullMark: 150 },
];

export default function SocialStatistics() {
  return (
    <Card 
      title={<span className="font-bold text-white">Social Statistics</span>}
      className="shadow-sm rounded-xl bg-[#1e293b] text-white border-none"
      header={{ borderBottom: '1px solid #334155' }}
    >
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid stroke="#475569" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <Radar
              name="Stats"
              dataKey="A"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-around text-xs text-gray-400 font-bold uppercase">
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Facebook</div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> YouTube</div>
      </div>
    </Card>
  );
}