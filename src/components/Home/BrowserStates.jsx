"use client";
import React from "react";
import { Progress } from "antd";
import { SiGooglechrome, SiApple, SiOpera, SiMozilla } from "react-icons/si";
import { PiGoogleChromeLogo } from "react-icons/pi";

const browsers = [
  { name: "Google Chrome", percent: 90, color: "#10b981", icon: <SiGooglechrome className="text-blue-500" /> },
  { name: "Mozilla Firefox", percent: 76, color: "#3b82f6", icon: <SiMozilla className="text-orange-500" /> },
  { name: "Apple Safari", percent: 76, color: "#f59e0b", icon: <SiApple className="text-gray-800" /> },
  { name: "Opera Mini", percent: 20, color: "#ef4444", icon: <SiOpera className="text-red-600" /> },
];

export default function BrowserStates() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px] flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Browser States</h3>
      <div className="flex-grow space-y-6">
        {browsers.map((browser, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-xl">{browser.icon}</div>
            <div className="flex-grow">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{browser.name}</span>
                <span className="text-sm text-gray-500">{browser.percent}%</span>
              </div>
              <Progress percent={browser.percent} showInfo={false} strokeColor={browser.color} size={6} />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-gray-400 text-xs font-bold uppercase tracking-widest text-center hover:text-blue-500 transition-colors">
        Explore Details
      </button>
    </div>
  );
}