"use client";
import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import {
  MoreOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { PiUserCircleDuotone } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdStats, IoMdTime } from "react-icons/io";
import ProjectProgress from "@/components/projects/ProjectProgress";

const View = () => {
  const [activeBtn, setActiveBtn] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 gap-4 ">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-400 text-xs mt-1">Home &gt; Project Details</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button icon={<MoreOutlined />} className="flex-1 sm:flex-none h-10" />
          <Button type="primary" icon={<PlusOutlined />} className="flex-[2] sm:flex-none h-10 bg-blue-600">
            <span className="hidden md:inline ml-1">CREATE PROJECT</span>
          </Button>
          <Button type="primary" icon={<ShareAltOutlined />} className="flex-1 sm:flex-none h-10 bg-blue-600">
            <span className="hidden md:inline ml-1">Share</span>
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white flex overflow-x-auto  sticky top-0 z-10 no-scrollbar">
        {["overview", "activity", "timeSheets", "mileStone", "discussions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveBtn(tab)}
            className={`${
              activeBtn === tab 
              ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50/50" 
              : "text-gray-500 hover:text-blue-600"
            } px-6 py-4 text-sm font-medium transition-all whitespace-nowrap capitalize`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      {activeBtn === "overview" && (
        <div className=" md:p-6 ">
          <div className="bg-white py-5 px-2 md:p-8 rounded-xl shadow-sm border border-gray-100">
            
            {/* Project Title and Actions Row */}
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-6">
              
              <div className="space-y-4 w-full lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-800 leading-tight">
                    Duralux || CRM Applications & Admin Dashboard
                  </h2>
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-600 text-[11px] font-bold rounded-md uppercase">
                    In Progress
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="py-1.5 px-3 border border-gray-200 rounded text-gray-500 text-xs hover:bg-gray-50 transition-colors">
                    CRM Dashboard
                  </button>
                  <div className="hidden sm:block h-6 w-[1px] bg-gray-200"></div>
                  
                  {/* Avatar Group */}
                  <div className="flex items-center">
                    <div className="flex -space-x-3 overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <PiUserCircleDuotone
                          key={i}
                          size={36}
                          className="text-gray-400 bg-white rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 font-medium ml-3">
                      +10 Members
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Group */}
              <div className="flex flex-wrap  items-center gap-2 w-full lg:w-auto">
                <div className="flex gap-2 w-full sm:w-auto">
                  <ActionButton icon={<LuCircleCheckBig />} tooltip="MARK AS COMPLETE" />
                  <ActionButton icon={<CiViewTimeline />} tooltip="TIMESHEETS" />
                  <ActionButton icon={<IoMdStats />} tooltip="STATISTICS" />
                </div>
                <button className="w-full sm:w-auto px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded flex items-center justify-center gap-2 text-sm font-semibold transition-all">
                  <IoMdTime size={18} /> Start Timer
                </button>
              </div>
            </div>

            {/* Progress Component Section */}
            <div className="mt-10 pt-8 border-t border-gray-50">
              <ProjectProgress />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for icon buttons
const ActionButton = ({ icon, tooltip }) => (
  <Tooltip title={<span className="text-[10px] uppercase">{tooltip}</span>}>
    <button className="flex-1 sm:flex-none p-2.5 border border-gray-200 rounded text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all">
      {React.cloneElement(icon, { size: 20 })}
    </button>
  </Tooltip>
);

export default View;