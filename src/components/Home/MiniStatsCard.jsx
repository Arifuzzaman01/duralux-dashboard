"use client";
import React from "react";
import { Card } from "antd";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// ডেমো ডাটা ট্রেন্ডের জন্য
const data = [
  { uv: 400 }, { uv: 800 }, { uv: 500 }, { uv: 900 }, { uv: 600 }, { uv: 1000 }, { uv: 400 },
];

export default function MiniStatsCard({ title, value, percentage, isUp, color }) {
  return (
    <Card className="shadow-sm border-gray-100 rounded-xl overflow-hidden p-0">
      <div className="p-5 pb-0 flex justify-between items-start">
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase">{title}</h4>
          <p className="text-[10px] text-gray-400 mt-1">VS 20.49% (Prev)</p>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
          <span className={`text-[10px] font-bold ${isUp ? 'text-green-500' : 'text-red-500'}`}>
            {isUp ? `+${percentage}%` : `-${percentage}%`}
          </span>
        </div>
      </div>
      
      {/* Sparkline Chart Area */}
      <div className="h-[100px] w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="uv" 
              stroke={color} 
              strokeWidth={2} 
              fillOpacity={1} 
              fill={`url(#color${color})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}