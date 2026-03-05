import React from "react";

const ChartHeader = ({ data }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Promotional Sales
        </h2>
        <div className="flex justify-between items-end mb-6 px-3">
          <div className="flex flex-col items-start gap-1.5">
            <p className="text-gray-400 text-sm mt-3 font-medium uppercase tracking-tighter">
              Visitors -
            </p>
            <div className="flex items-center gap-2 ">
              <span className="text-xl font-bold text-gray-700">7,802</span>
              <span className="text-green-500 text-sm font-bold flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                0.56%
              </span>
            </div>
          </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
