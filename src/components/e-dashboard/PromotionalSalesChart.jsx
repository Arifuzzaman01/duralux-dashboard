"use client";
import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import ChartHeader from "./ChartHeader";
import ChartLegend from "./ChartLegend";

const promotionalData = [
  { name: "Social Media", value: 3432, percentage: "5.6%", color: "#FF8042" },
  { name: "Website", value: 2100, percentage: "2.1%", color: "#1cb811" },
  { name: "Store", value: 2270, percentage: "1.4%", color: "#519A66" },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        className="font-bold fill-gray-800 text-lg"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 25}
        dy={8}
        textAnchor="middle"
        className="font-bold fill-gray-900 text-2xl"
      >
        {value.toLocaleString()}
      </text>
      <text
        x={cx}
        y={cy + 48}
        dy={8}
        textAnchor="middle"
        className="fill-orange-500 text-sm font-medium"
      >
        ↗ {payload.percentage}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        className="drop-shadow-md"
      />
    </g>
  );
};

export default function PromotionalSalesChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-md bg-white p-3  rounded-lg shadow-sm border border-gray-50 pb-12">
      <ChartHeader />

      <div className="h-[250px] w-full relative ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={promotionalData}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={115}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              stroke="none"
              paddingAngle={1}
            >
              {promotionalData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="outline-none focus:outline-none "
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ChartLegend data={promotionalData} />
    </div>
  );
}
