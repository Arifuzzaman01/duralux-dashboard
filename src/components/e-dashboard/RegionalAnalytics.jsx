"use client";
import React, { useState } from "react";
import { Tooltip } from "antd";
import { bdRegionalData } from "../../../data/data";

const RegionalAnalytics = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">Regional Performance Map</h3>
        <p className="text-xs text-gray-400">Hover over divisions to see insights</p>
      </div>

      <div className="relative w-[400px] h-[500px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
        <svg
          viewBox="0 0 400 1500" // ভিউবক্স ৫০০ এর বেশি না রাখাই ভালো যদি কন্টেইনার ৫০০ হয়
          className="w-full h-full p-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          {bdRegionalData.map((region) => {
            // হাইলাইট লজিক: ধরুন ৫ লাখের বেশি সেলস হলে বিশেষ হাইলাইট
            const isHighSales = region.sales > 500000;

            return (
              <Tooltip
                key={region.id}
                color="#001529"
                title={
                  <div className="p-1">
                    <p className="font-bold mb-1">{region.name}</p>
                    <p className="text-[11px]">Users: {region.users.toLocaleString()}</p>
                    <p className="text-[11px]">Sales: ${region.sales.toLocaleString()}</p>
                    <p className="text-[11px] text-red-400">Reject Rate: {region.rejectRate}</p>
                  </div>
                }
              >
                <g
                  className="cursor-pointer transition-all duration-300"
                  // গ্রুপকে তার নির্দিষ্ট পজিশনে সরানো (posX, posY আপনার ডাটায় থাকতে হবে)
                  transform={`translate(${region.posX || 0}, ${region.posY || 0})`}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* বিভাগীয় শেপ */}
                  <path
                    d={region?.pathData}
                    fill={region.color}
                    // হাইলাইট কোড: গোল্ডেন বর্ডার যদি সেলস বেশি হয়
                    stroke={isHighSales ? "#fbbf24" : "#ffffff"}
                    strokeWidth={hoveredId === region.id || isHighSales ? 2 : 1}
                    className={`transition-all duration-300 ${
                      hoveredId === region.id ? "brightness-110" : ""
                    } ${isHighSales ? "drop-shadow-md" : ""}`}
                    style={{
                      transform: hoveredId === region.id ? "scale(1.01)" : "scale(1)",
                      transformOrigin: "center",
                    }}
                  />

                  {/* বিভাগের নাম - পাথের সাপেক্ষে পজিশন (labelX, labelY) */}
                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor="middle"
                    className="select-none pointer-events-none fill-white font-bold"
                    style={{
                      fontSize: "10px",
                      textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    {region.name}
                  </text>
                </g>
              </Tooltip>
            );
          })}
        </svg>

        {/* লেজেন্ড */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 bg-blue-900 border border-yellow-400 rounded-sm"></div>
            <span className="text-[10px] text-gray-600 font-bold">High Sales Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
            <span className="text-[10px] text-gray-600">Emerging Area</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalAnalytics;