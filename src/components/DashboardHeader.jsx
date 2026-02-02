import React from "react";
import { IoAdd, IoMoonOutline, IoSearchOutline } from "react-icons/io5";
import { GoBell, GoScreenFull } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-1 md:gap-4 items-center">
        <button className="p-2 bg-blue-700 text-white rounded-full">
          <IoAdd />
        </button>
        <button className="text-xs uppercase border border-gray-300 rounded-xs px-4  py-2.5">
          <span className="hidden md:inline">Mega</span> Menu
        </button>
      </div>
      <div className="flex sm:gap-1 md:gap-4 items-center mx-2 md:mx-8">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all">
          <IoSearchOutline size={22} className="w-5 md:w-fit"/>
        </button>
        {/* flag */}
        <button className="bg-green-700 w-6 h-5 rounded-sm flex justify-center items-center ">
          <div className="w-3 h-3 bg-red-500 rounded-full "></div>
        </button>
        <button className="hidden md:block p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all">
          <GoScreenFull size={22} className="w-5 md:w-fit"/>
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all">
          <IoMoonOutline size={22} className="w-5 md:w-fit"/>
        </button>

        <button className="relative inline-flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all">
          <IoMdTime size={24} className="w-5 md:w-fit"/>
          <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white border-2 border-white">
            3
          </span>
        </button>
        <button className="relative inline-flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all">
          <GoBell size={24} className="w-5 md:w-fit"/>
          <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
            3
          </span>
        </button>

        <button className="p-2 md:p-3 rounded-full bg-gray-400 text-white">
          <FaRegUser  className="w-5 h-5 md:h-fit md:w-fit"/>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
