import React from "react";

const ChartLegend = ({ data }) => {
  return (
    <div className="flex justify-center gap-8 mt-6">
      {data.map((entry, index) => (
        <div
          key={index}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div
            className="w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-125"
            style={{ border: `3.5px solid ${entry.color}` }}
          />
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
            {entry.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;
