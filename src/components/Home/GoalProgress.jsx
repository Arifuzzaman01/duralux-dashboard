"use client";
import React from "react";
import { Card, Progress, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const GoalCard = ({ title, amount, target, percent, color }) => (
  <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-200 rounded-lg">
    <Progress
      type="circle"
      percent={percent}
      strokeColor={color}
      strokeWidth={8}
      size={80}
      format={(percent) => <span className="text-sm font-bold text-gray-700">{percent}%</span>}
    />
    <h4 className="mt-4 text-sm font-bold text-gray-800">{title}</h4>
    <p className="text-xs text-gray-400 mt-1">${amount}/${target} USD</p>
  </div>
);

export default function GoalProgress() {
  const goals = [
    { title: "Marketing Goal", amount: "550", target: "1250", percent: 40, color: "#ef4444" },
    { title: "Teams Goal", amount: "550", target: "1250", percent: 65, color: "#3b82f6" },
    { title: "Leads Goal", amount: "850", target: "950", percent: 50, color: "#f59e0b" },
    { title: "Revenue Goal", amount: "5,655", target: "12,500", percent: 75, color: "#10b981" },
  ];

  return (
    <Card 
      title={<span className="font-bold">Goal Progress</span>} 
      extra={<MoreOutlined className="text-gray-400" />}
      className="shadow-sm border-gray-100 rounded-xl h-full flex flex-col"
    >
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {goals.map((goal, idx) => <GoalCard key={idx} {...goal} />)}
      </div>
      <Button type="primary" block className="mt-6 h-10 bg-blue-600 font-semibold uppercase text-xs tracking-wider">
        Generate Report
      </Button>
    </Card>
  );
}