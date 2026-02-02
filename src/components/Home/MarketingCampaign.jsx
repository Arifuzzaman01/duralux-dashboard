"use client";
import React from "react";
import { Card, Progress } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", val: 52000, bg: 44000 },
  { name: "Feb", val: 32000, bg: 55000 },
  { name: "Mar", val: 33000, bg: 41000 },
  { name: "Apr", val: 52000, bg: 64000 },
  { name: "May", val: 13000, bg: 22000 },
  { name: "Jun", val: 44000, bg: 44000 },
  { name: "Jul", val: 32000, bg: 21000 },
  { name: "Aug", val: 33000, bg: 41000 },
  { name: "Sep", val: 52000, bg: 64000 },
  { name: "Oct", val: 13000, bg: 22000 },
  { name: "Nov", val: 44000, bg: 44000 },
  { name: "Dec", val: 32000, bg: 21000 },
];

export default function MarketingCampaign() {
  const footerStats = [
    { label: "Reach", val: "5,486", color: "#3b82f6", percent: 45 },
    { label: "Opened", val: "42.75%", color: "#10b981", percent: 60 },
    { label: "Clicked", val: "38.68%", color: "#ef4444", percent: 50 },
    { label: "Conversion", val: "16.68%", color: "#1e293b", percent: 70 },
  ];

  return (
    <Card className="shadow-sm border-gray-100 rounded-xl h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Marketing Campaign</h3>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="bg"
              fill="#f1f5f9"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="val"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {footerStats.map((stat, i) => (
          <div
            key={i}
            className="p-4 border border-dashed border-gray-100 rounded-lg"
          >
            <span className="text-xs text-gray-400 font-medium">
              {stat.label}
            </span>
            <h4 className="text-lg font-bold text-gray-800 my-1">{stat.val}</h4>
            <Progress
              percent={stat.percent}
              showInfo={false}
              strokeColor={stat.color}
              size={3}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
