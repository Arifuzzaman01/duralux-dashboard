import { usePathname } from "next/navigation";
import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";

const DashboardSubHeader = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-end gap-2.5">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 w-[1px] h-7 bg-gray-500"></p>
        <h2 className="text-gray-700 text-xl font-semibold">Home</h2>
        <h3 className="text-gray-600 font-semibold">{'> '}{path === "/" ? "Dashboard": path}</h3>
      </div>
      <div className="flex gap-2 items-center">
        <p className="uppercase p-2 border border-gray-400 rounded-sm text-gray-500 font-semibold">feb 01, 2026 - feb 28, 2026</p>
        <button className="p-[7px] border border-gray-400 rounded-sm text-gray-500 font-semibold flex items-center gap-2"><CiFilter size={22} /> Filter</button>
      </div>
    </div>
  );
};

export default DashboardSubHeader;
