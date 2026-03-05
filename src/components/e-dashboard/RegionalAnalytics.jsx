"use client";
import React, { useState } from "react";
import { Tooltip } from "antd";
import { bdRegionalData } from "../../../data/data";

const RegionalAnalytics = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full max-h-[420px] max-w-[500px] mx-auto bg-white p-4 pr-0 rounded-lg shadow-sm border border-gray-100 ">
      {/* Header Section */}
      <div className="mb-4 text-center px-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Regional Performance Map
        </h3>
        <p className="text-[10px] md:text-xs text-gray-400">
          Tap or hover on divisions for details
        </p>
      </div>

      {/* ম্যাপ কন্টেইনার - ফিক্সড ৬০০ পিক্সেল */}
      <div className="relative w-full h-[310px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 touch-none">
        <svg
          viewBox="-100 50 1000 1100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {bdRegionalData.map((region) => {
            const isHighSales = region.sales > 500000;

            return (
              <Tooltip
                key={region.id}
                trigger={["hover", "click"]}
                color="#001529"
                title={
                  <div className="p-1 text-[10px] md:text-[11px]">
                    <p className="font-bold border-b border-gray-600 mb-1">
                      {region.name}
                    </p>
                    <p>Users: {region?.users?.toLocaleString()}</p>
                    <p>Sales: ${region?.sales?.toLocaleString()}</p>
                    <p>Active Order: ${region?.activeOrders?.toLocaleString()}</p>
                    <p>Reject Rate: ${region?.rejectRate?.toLocaleString()}</p>
                  </div>
                }
              >
                <g
                  className="cursor-pointer"
                  transform={`translate(${region.posX || 0}, ${region.posY || 0})`}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <path
                    d={region?.pathData}
                    fill={region.color}
                    stroke={isHighSales ? "#fbbf24" : "#ffffff"}
                    strokeWidth={hoveredId === region.id ? 2 : 1}
                    className="transition-all duration-300"
                    style={{
                      transform:
                        hoveredId === region.id ? "scale(1.005)" : "scale(1)",
                      transformOrigin: "center",
                    }}
                  />

                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor="middle"
                    className="pointer-events-none fill-white font-bold select-none"
                    style={{
                      fontSize: "35px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
                    }}
                  >
                    {region.name}
                  </text>
                </g>
              </Tooltip>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default RegionalAnalytics;
