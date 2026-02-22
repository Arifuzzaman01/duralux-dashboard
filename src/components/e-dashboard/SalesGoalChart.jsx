import React from "react";
import RevenueChart from "./RevenueChart";

const CircularProgress = () => {
  const bars = Array.from({ length: 10 });
  const performance = 80;

  return (
    <div className="p-3 md:flex items-end gap-5 ">
      <div className="w-full md:w-80 h-80  bg-gray-50  rounded-md shadow-sm mb-5 md:mb-0">
        <h1 className="px-2  py-5 text-2xl text-gray-700 font-semibold text-center">Overall Performance</h1>
        <div className="relative w-full  h-52 flex items-center justify-center overflow-hidden">
          {bars.map((_, i) => {
            const isHighlighted = i < performance / 10;

            return (
              <div
                key={i}
                className="absolute transition-all duration-500 rounded-md mb-10"
                style={{
                  width: "20px",
                  height: "50px",
                  bottom: "0",

                  backgroundColor: isHighlighted ? "#1CB811" : "#e5e7eb",
                  clipPath: "polygon(0% 0%, 100% 0%, 87.5% 100%, 12.5% 100%)",
                  transformOrigin: "bottom center",
                  transform: `rotate(${-90 + i * 20}deg) translateY(-80px)`,
                }}
              />
            );
          })}

          <div className="absolute bottom-5 text-center">
            <h1 className="text-3xl font-bold">{performance}%</h1>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
              Sales Goal
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <RevenueChart />
      </div>
    </div>
  );
};

export default CircularProgress;
