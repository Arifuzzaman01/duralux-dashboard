import React from "react";
import { Row, Col } from "antd";
import { CiDollar, CiMonitor, CiMail, CiWavePulse1 } from "react-icons/ci";
import StatsCard from "@/components/Home/StatsCard";
import VisitorsChart from "@/components/Home/VisitorsChart";
import BrowserStates from "@/components/Home/BrowserStates";
import MiniStatsCard from "@/components/Home/MiniStatsCard";
import GoalProgress from "@/components/Home/GoalProgress";
import MarketingCampaign from "@/components/Home/MarketingCampaign";
import ProjectRemainders from "@/components/Home/ProjectRemainders";
import SocialStatistics from "@/components/Home/SocialStatistics";

export default async function HomePage() {
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

  return (
    <main className="p-4 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <VisitorsChart />
        </div>
        <div className="xl:col-span-1">
          <BrowserStates />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
      <div className="flex flex-col xl:flex-row  gap-6 mt-6">
        <div className="xl:flex-1">
          <GoalProgress />
        </div>
        <div className="xl:flex-2">
          <MarketingCampaign />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <ProjectRemainders />
        <SocialStatistics />
      </div>
    </main>
  );
}
