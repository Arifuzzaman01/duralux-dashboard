import BangladeshD3Map from "@/components/e-dashboard/BangladeshD3Map";

import InventorySection from "@/components/e-dashboard/InventorySection";
import MainKPIs from "@/components/e-dashboard/MainKPIs";
import PromotionalSalesChart from "@/components/e-dashboard/PromotionalSalesChart";
import RecentSales from "@/components/e-dashboard/RecentSales";
import RegionalAnalytics from "@/components/e-dashboard/RegionalAnalytics";
import SalesGoalChart from "@/components/e-dashboard/SalesGoalChart";
import Stock from "@/components/e-dashboard/Stock";
import React from "react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <MainKPIs />
      <div className="lg:flex items-center">
        <div className="lg:flex-1">
          <SalesGoalChart />
        </div>
      </div>
      {/* tablet */}
      <div className="lg:flex gap-4">
        <div className="flex-1">
          <InventorySection />
        </div>
        <div className="hidden lg:block ">
          <PromotionalSalesChart />
        </div>
      </div>
      <div className="md:flex gap-3 my-5 lg:hidden ">
        <PromotionalSalesChart />
        <RegionalAnalytics />
      </div>
      <div className="my-5 space-y-5">
        <div className="md:flex gap-4 items-start">
          <div className="flex-1">
            <Stock />
          </div>
          <div>
            <RegionalAnalytics />
          </div>
        </div>
        <RecentSales />
      </div>
      <BangladeshD3Map />
    </div>
  );
}
