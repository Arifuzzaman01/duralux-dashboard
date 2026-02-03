import React from "react";
import { Row, Col } from "antd";
import {
  CiDollar,
  CiMonitor,
  CiMail,
  CiWavePulse1,
  CiFilter,
} from "react-icons/ci";
import StatsCard from "@/components/Home/StatsCard";
import VisitorsChart from "@/components/Home/VisitorsChart";
import BrowserStates from "@/components/Home/BrowserStates";
import MiniStatsCard from "@/components/Home/MiniStatsCard";
import GoalProgress from "@/components/Home/GoalProgress";
import MarketingCampaign from "@/components/Home/MarketingCampaign";
import ProjectRemainders from "@/components/Home/ProjectRemainders";
import SocialStatistics from "@/components/Home/SocialStatistics";

const statsData = [
  {
    icon: <CiDollar />,
    value: "45/76",
    title: "Invoices Awaiting Payment",
    subTitle: "Invoices Awaiting Payment",
    amount: "$5,569",
    percent: 56,
    progressColor: "#3b82f6",
  },
  {
    icon: <CiMonitor />,
    value: "48/86",
    title: "Converted Leads",
    subTitle: "Converted Leads",
    amount: "$5,559",
    percent: 63,
    progressColor: "#f59e0b",
  },
  {
    icon: <CiMail />,
    value: "16/20",
    title: "Projects In Progress",
    subTitle: "Projects In Progress",
    amount: "16 Completed",
    percent: 78,
    progressColor: "#10b981",
  },
  {
    icon: <CiWavePulse1 />,
    value: "46.59%",
    title: "Conversion Rate",
    subTitle: "Conversion Rate",
    amount: "$2,254",
    percent: 46,
    progressColor: "#ef4444",
  },
];
export default async function HomePage() {
  return (
    <main className="pb-4 space-y-5 ">
      <div className="flex flex-col md:flex-row gap-2.5 justify-between items-center bg-white py-5 px-3 ">
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 w-[1px] h-7 bg-gray-500"></p>
          <h2 className="text-gray-700 text-xl font-semibold">Home</h2>
          <h3 className="text-gray-600 font-semibold mt-1">{"> "}Dashboard</h3>
        </div>
        <div className="flex gap-2 items-center">
          <p className="uppercase p-2 border border-gray-400 rounded-sm text-gray-500 font-semibold">
            feb 01, 2026 - feb 28, 2026
          </p>
          <button className="p-[7px] border border-gray-400 rounded-sm text-gray-500 font-semibold flex items-center gap-2">
            <CiFilter size={22} /> Filter
          </button>
        </div>
      </div>
      <div className="space-y-5 md:mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-6 ">
          {statsData.map((item, index) => (
            <StatsCard key={index} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
          <div className="2xl:col-span-2">
            <VisitorsChart />
          </div>
          <div className="2xl:col-span-1">
            <BrowserStates />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          <MiniStatsCard
            title="Bounce Rate (Avg)"
            value="78.65%"
            percentage="22.85"
            isUp={true}
            color="#6366f1" // Indigo
          />
          <MiniStatsCard
            title="Page Views (Avg)"
            value="86.37%"
            percentage="34.25"
            isUp={false}
            color="#3b82f6" // Blue
          />
          <MiniStatsCard
            title="Site Impressions (Avg)"
            value="67.53%"
            percentage="42.72"
            isUp={false}
            color="#f59e0b" // Orange
          />
          <MiniStatsCard
            title="Conversions Rate (Avg)"
            value="32.53%"
            percentage="35.47"
            isUp={true}
            color="#10b981" // Green
          />
        </div>
        <div className="flex flex-col 2xl:flex-row  gap-6 mt-6">
          <div className="2xl:flex-1">
            <GoalProgress />
          </div>
          <div className="2xl:flex-2">
            <MarketingCampaign />
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 mt-6">
          <ProjectRemainders />
          <SocialStatistics />
        </div>
      </div>
    </main>
  );
}
