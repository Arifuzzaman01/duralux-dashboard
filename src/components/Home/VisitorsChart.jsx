"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", visitors: 4000, views: 2400, impression: 2400 },
  { name: "Feb", visitors: 3000, views: 1398, impression: 2210 },
  { name: "Mar", visitors: 8000, views: 9800, impression: 2290 },
  { name: "Apr", visitors: 2780, views: 3908, impression: 2000 },
  { name: "May", visitors: 5890, views: 4800, impression: 2181 },
  { name: "Jun", visitors: 2390, views: 3800, impression: 2500 },
  { name: "Jul", visitors: 3490, views: 4300, impression: 2100 },
];

export default function VisitorsChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Visitors Overview</h3>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
          <Tooltip contentStyle={{borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
          <Area type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVis)" />
          <Area type="monotone" dataKey="views" stroke="#10b981" strokeWidth={3} fill="transparent" strokeDasharray="5 5" />
          <Area type="monotone" dataKey="impression" stroke="#ef4444" strokeWidth={3} fill="transparent" strokeDasharray="5 5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}