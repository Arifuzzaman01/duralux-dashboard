"use client";
import React, { useEffect, useState } from "react";
import * as d3 from "d3-geo";
import { bdRegionalData } from "@/data/allDistricts";

const BangladeshD3Map = () => {
  const [geoData, setGeoData] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [selectedDivision, setSelectedDivision] = useState(null);

  useEffect(() => {
    // Fetch Bangladesh GeoJSON data for all 64 districts from local public folder
    fetch("/data/bangladesh_geojson.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("GeoData Fetch Error:", err));
  }, []);

  if (!geoData) {
    return (
      <div className="flex items-center justify-center h-[600px] w-[500px] bg-slate-50 rounded-2xl border border-dashed">
        <div className="text-sm text-slate-400 animate-pulse">
          Loading Bangladesh Map...
        </div>
      </div>
    );
  }

  // Container size
  const width = 500;
  const height = 600;

  // D3 Projection settings (auto-fit Bangladesh in container)
  const projection = d3.geoMercator().fitSize([width, height], geoData);
  const pathGenerator = d3.geoPath().projection(projection);

  // Helper function to get district data
  const getDistrictData = (districtName) => {
    const normalized = districtName?.toLowerCase().replace(/\s+/g, "");
    return bdRegionalData.find(
      (d) => d.name.toLowerCase().replace(/\s+/g, "") === normalized,
    );
  };

  // Get division color - each division has a unique DISTINCT base color (more saturated)
  const getDivisionColor = (divisionName) => {
    const divisionColors = {
      "Dhaka": "#3b82f6",        // Blue - vivid
      "Chattogram": "#10b981",   // Emerald Green - vivid
      "Rajshahi": "#ef4444",     // Red - vivid
      "Khulna": "#f59e0b",       // Amber - vivid
      "Barisal": "#8b5cf6",      // Violet - vivid
      "Sylhet": "#06b6d4",       // Cyan - vivid
      "Rangpur": "#f97316",      // Orange - vivid
      "Mymensingh": "#ec4899",   // Pink - vivid
    };
    return divisionColors[divisionName] || "#94a3b8";
  };

  // Get hover color (even darker version)
  const getHoverColor = (divisionName) => {
    const hoverColors = {
      "Dhaka": "#1d4ed8",        // Darker blue
      "Chattogram": "#059669",   // Darker green
      "Rajshahi": "#dc2626",     // Darker red
      "Khulna": "#d97706",       // Darker amber
      "Barisal": "#7c3aed",      // Darker violet
      "Sylhet": "#0891b2",       // Darker cyan
      "Rangpur": "#ea580c",      // Darker orange
      "Mymensingh": "#db2777",   // Darker pink
    };
    return hoverColors[divisionName] || "#475569";
  };

  // Calculate statistics
  const totalHighSales = bdRegionalData.filter(d => d.sales > 500000).length;
  const totalLowSales = bdRegionalData.filter(d => d.sales <= 500000).length;
  const avgRejectRate = (bdRegionalData.reduce((acc, d) => acc + parseFloat(d.rejectRate), 0) / bdRegionalData.length).toFixed(1);

  return (
    <div className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 flex flex-col items-center max-w-fit mx-auto">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">
          Bangladesh District Map
        </h3>
        <p className="text-xs text-gray-400">
          Interactive 64 Districts Visualization
        </p>
      </div>

      {/* Division Filter Buttons */}
      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedDivision(null)}
          className={`px-3 py-1 text-xs rounded-full transition-all ${
            !selectedDivision
              ? "bg-green-700 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All Divisions
        </button>
        {[
          "Dhaka",
          "Chattogram",
          "Rajshahi",
          "Khulna",
          "Barisal",
          "Sylhet",
          "Rangpur",
          "Mymensingh",
        ].map((div) => (
          <button
            key={div}
            onClick={() => setSelectedDivision(div)}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              selectedDivision === div
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {div}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
        <svg
          width={width}
          height={height}
          className="cursor-default"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltipPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <g>
            {/* Render all districts with unique keys */}
            {geoData?.features?.map((feature, index) => {
              const districtName = feature?.properties?.ADM2_EN;
              const stats = getDistrictData(districtName);
              
              // Determine color based on hover state
              const isHovered = hoveredDistrict?.name === districtName;
              const fillColor = isHovered 
                ? getHoverColor(stats?.region) 
                : getDivisionColor(stats?.region);

              // Filter by division if selected
              if (
                selectedDivision &&
                stats &&
                stats.region !== selectedDivision
              ) {
                return null;
              }

              return (
                <path
                  key={`${districtName}-${index}`}
                  d={pathGenerator(feature)}
                  fill={fillColor}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  className="transition-all duration-200 hover:opacity-80 cursor-pointer"
                  onMouseEnter={() =>
                    setHoveredDistrict({ name: districtName, stats })
                  }
                  onMouseLeave={() => setHoveredDistrict(null)}
                />
              );
            })}

            {/* Data-driven bubbles for high-performance districts */}
            {bdRegionalData.map((district) => {
              if (selectedDivision && district.region !== selectedDivision)
                return null;

              const coords = projection([
                district.longitude || 90,
                district.latitude || 24,
              ]);
              if (!coords) return null;
              const [x, y] = coords;

              const isHighSales = district.sales > 500000;

              return (
                <g key={district.id} className="pointer-events-none">
                  {/* Pulsing effect for high sales */}
                  {isHighSales && (
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill="#fbbf24"
                      className="animate-ping opacity-20"
                    />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={isHighSales ? 6 : 4}
                    fill={isHighSales ? "#1e3a8a" : "#ff6900"}
                    className="drop-shadow-sm"
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Custom Tooltip (follows mouse position) */}
        {hoveredDistrict && (
          <div
            className="absolute pointer-events-none bg-slate-900/95 text-white p-3 rounded-xl shadow-xl border border-slate-700 backdrop-blur-sm z-50 transition-transform duration-75 min-w-[180px] "
            style={{
              left: Math.min(tooltipPos.x + 15, width - 200),
              top: Math.min(tooltipPos.y - 10, height - 150),
            }}
          >
            <p className="font-bold text-sm border-b border-slate-600 pb-1 mb-2 uppercase tracking-wider">
              {hoveredDistrict.name}
            </p>
            {hoveredDistrict?.stats ? (
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Region:</span>
                  <span className="font-mono text-blue-300">
                    {hoveredDistrict.stats.region}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Users:</span>
                  <span className="font-mono text-green-300">
                    {hoveredDistrict?.stats?.users?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Sales:</span>
                  <span className="font-mono text-yellow-300">
                    ${hoveredDistrict.stats.sales.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Reject:</span>
                  <span className="font-mono text-red-300">
                    {hoveredDistrict.stats.rejectRate}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Orders:</span>
                  <span className="font-mono text-purple-300">
                    {hoveredDistrict?.stats?.activeOrders?.toLocaleString()}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-[10px] italic text-slate-500">
                No data available
              </p>
            )}
          </div>
        )}
      </div>

      {/* Map Legend - Sales & Reject Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <div>
            <p className="text-green-700 font-bold">High Sales</p>
            <p className="text-green-600 text-xs">{totalHighSales} Districts</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <div>
            <p className="text-orange-700 font-bold">Low Sales</p>
            <p className="text-orange-600 text-xs">{totalLowSales} Districts</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <div>
            <p className="text-red-700 font-bold">Avg Reject</p>
            <p className="text-red-600 text-xs">{avgRejectRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshD3Map;
