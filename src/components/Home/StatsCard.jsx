"use client";
import React from "react";
import { Card, Flex, Progress } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export default function StatsCard({
  icon,
  title,
  value,
  subTitle,
  amount,
  percent,
  progressColor,
}) {
  return (
    <Card className="shadow-sm border-gray-100 rounded-xl overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 text-xl">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {value}
            </h2>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
          </div>
        </div>
        <MoreOutlined className="text-gray-400 cursor-pointer text-lg hover:text-blue-500 transition-colors" />
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            {subTitle}
          </span>
          <span className="text-gray-600 text-sm font-semibold">
            {amount}{" "}
            <span className="text-gray-400 font-normal ml-1">({percent}%)</span>
          </span>
        </div>
        <Progress percent={percent} showInfo={false} strokeColor={progressColor} 
          railColor="#f1f5f9" />
      </div>
    </Card>
  );
}
