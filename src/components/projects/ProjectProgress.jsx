import React from "react";
import { Progress, Tooltip, Avatar } from "antd";
import { LuCircleCheckBig } from "react-icons/lu";
import { PiUserCircleDuotone } from "react-icons/pi";
import { MoreOutlined } from "@ant-design/icons";

export default function ProjectProgress ({ project }) {
  // ডামি ডেটা যদি প্রপস না থাকে
  const { 
    name = "Spark: Business App", 
    desc = "Lorem ipsum dolor sit amet...", 
    progress = 75,
    teamCount = 12 
  } = project || {};

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Header: Title and Actions */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
            {name[0]}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-base leading-tight">{name}</h3>
            <p className="text-gray-400 text-xs mt-1 line-clamp-1">{desc}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:bg-gray-50 p-1 rounded">
          <MoreOutlined className="text-xl" />
        </button>
      </div>

      {/* Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</span>
          <span className="text-xs font-bold text-blue-600">{progress}%</span>
        </div>
        <Progress 
          percent={progress} 
          // আপনার গাইডলাইন অনুযায়ী size ব্যবহার করা হয়েছে
          size={[null, 8]} 
          strokeColor="#2563eb"
          trailColor="#f1f5f9"
          showInfo={false}
        />
      </div>

      {/* Footer: Team and Status Button */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        {/* Team Avatars with Overlap */}
        <div className="flex items-center pl-3">
          {[...Array(Math.min(teamCount, 4))].map((_, i) => (
            <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 -ml-3 flex items-center justify-center overflow-hidden">
               <PiUserCircleDuotone size={32} className="text-gray-400" />
            </div>
          ))}
          {teamCount > 4 && (
            <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-50 -ml-3 flex items-center justify-center text-[10px] font-bold text-blue-600">
              +{teamCount - 4}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Tooltip title="MARK AS COMPLETE" overlayInnerStyle={{ fontSize: '10px' }}>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all">
            <LuCircleCheckBig size={18} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}