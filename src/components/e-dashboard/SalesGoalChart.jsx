import React from "react";

const CircularProgress = () => {
  const bars = Array.from({ length: 10 });
  const performance = 80;

  return (
    <div className="p-3">
      <div className="relative w-80 h-52  flex items-end justify-center overflow-hidden bg-gray-50  rounded-md shadow-sm ">
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
  );
};

export default CircularProgress;
