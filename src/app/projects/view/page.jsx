"use client";
import { AutoComplete, Button, Tooltip } from "antd";
import React, { useState } from "react";
import {
  MoreOutlined,
  PlusOutlined,
  ShareAltOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { PiUserCircleDuotone } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdStats, IoMdTime } from "react-icons/io";
import ProjectProgress from "@/components/projects/ProjectProgress";

const View = () => {
  const [activeBtn, setActiveBtn] = useState("overview");
  return (
    <div>
      <div className="flex justify-between items-center  bg-white p-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-400 text-sm mt-1">Home &gt; List</p>
        </div>
        <div className="space-x-3">
          <Button
            // type="outline"
            icon={<MoreOutlined />}
            className="h-20 !p-5 !bg-white"
          ></Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="h-20 !p-5 !bg-blue-700"
          >
            CREATE PROJECT
          </Button>
          <Button
            type="primary"
            icon={<ShareAltOutlined />}
            className="h-20 !p-5 !bg-blue-700"
          >
            Share
          </Button>
        </div>
      </div>
      <div className="bg-white pt-2 mb-5">
        <button
          onClick={() => setActiveBtn("overview")}
          className={`${activeBtn === "overview" ? "border-b-4 border-blue-700 bg-blue-100" : "bg-white"} px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveBtn("activity")}
          className={`${activeBtn === "activity" ? "border-b-4 border-blue-700 bg-blue-100" : "bg-white"} px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          Activity
        </button>
        <button
          onClick={() => setActiveBtn("timeSheets")}
          className={`${activeBtn === "timeSheets" ? "border-b-4 border-blue-700 bg-blue-100" : "bg-white"} px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          TimeSheets
        </button>
        <button
          onClick={() => setActiveBtn("mileStone")}
          className={`${activeBtn === "mileStone" ? "border-b-4 border-blue-700 bg-blue-100" : "bg-white"} px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          MileStone
        </button>
        <button
          onClick={() => setActiveBtn("discussions")}
          className={`${activeBtn === "discussions" ? "border-b-4 border-blue-700 bg-blue-100" : "bg-white"} px-5 py-4  transition-all duration-300 ease-in-out`}
        >
          Discussions
        </button>
      </div>
      {activeBtn === "overview" && (
        <div className="mx-5 bg-white p-6 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="  space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Duralux || CRM Applications & Admin Dashboar{" "}
                <span className="text-xs p-1 bg-blue-100  rounded-sm text-blue-500 mx-3">
                  In Prograss
                </span>
              </h2>
              <div className="flex items-center gap-3">
                <button className="py-2 px-3 border border-gray-300 rounded-sm text-gray-400 text-xs">
                  CRM Dashboard
                </button>
                <p className="text-gray-500 w-[1.5px] h-7 bg-gray-300"></p>
                <div className="flex items-center pl-4">
                  {[...Array(15)].slice(0, 5).map((_, i) => (
                    <Tooltip key={i} placement="top" title={`User ${i + 1}`}>
                      <PiUserCircleDuotone
                        size={38}
                        className="text-gray-700 -ml-4 bg-white rounded-full border-2 border-white"
                      />
                    </Tooltip>
                  ))}
                  {15 > 5 && (
                    <Tooltip title={`${15 - 5} more users`}>
                      <div className="h-[30px] w-[30px] -ml-4 rounded-full bg-blue-100  border-2 border-white flex items-center justify-center text-xl text-blue-600 font-bold cursor-pointer hover:bg-blue-100 transition-colors">
                        <MoreOutlined />
                      </div>
                    </Tooltip>
                  )}
                  <p className="text-sm text-gray-400 mx-3">
                    {" "}
                    {15 - 5} + Members
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip
                title={
                  <span className="text-[10px] text-gray-200">
                    MAKE AS COMPLETE
                  </span>
                }
              >
                <button className="p-2.5 border border-gray-300 rounded-sm">
                  {" "}
                  <LuCircleCheckBig size={20} />{" "}
                </button>
              </Tooltip>
              <Tooltip
                title={
                  <span className="text-[10px] text-gray-200">TIMESHEETS</span>
                }
              >
                <button className="p-2.5 border border-gray-300 rounded-sm">
                  {" "}
                  <CiViewTimeline size={20} />{" "}
                </button>
              </Tooltip>
              <Tooltip
                title={
                  <span className="text-[10px] text-gray-200">STATISTICS</span>
                }
              >
                <button className="p-2.5 border border-gray-300 rounded-sm">
                  {" "}
                  <IoMdStats size={20} />{" "}
                </button>
              </Tooltip>

              <Tooltip
                title={
                  <span className="text-xs text-gray-200">TIMESHEETS</span>
                }
              >
                <button className="p-2.5 border border-gray-200 rounded-sm flex items-center gap-2 bg-green-500 text-white">
                  <IoMdTime size={18} /> Start Timer
                </button>
              </Tooltip>
            </div>
          </div>
              <div>
                <ProjectProgress />
              </div>

        </div>
      )}
    </div>
  );
};

export default View;
