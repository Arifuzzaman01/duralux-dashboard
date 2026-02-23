import InventorySection from "@/components/e-dashboard/InventorySection";
import MainKPIs from "@/components/e-dashboard/MainKPIs";
import PromotionalSalesChart from "@/components/e-dashboard/PromotionalSalesChart";
import RegionalAnalytics from "@/components/e-dashboard/RegionalAnalytics";
import SalesGoalChart from "@/components/e-dashboard/SalesGoalChart";
import React from "react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto ">
      <MainKPIs />
      <SalesGoalChart />
      <InventorySection />
      <div className="mx-4 my-5 flex flex-col md:flex-row gap-5 items-end">
        <PromotionalSalesChart />
        <RegionalAnalytics />
      </div>
    </div>
  );
}
