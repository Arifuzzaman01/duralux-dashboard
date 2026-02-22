import InventorySection from "@/components/e-dashboard/InventorySection";
import MainKPIs from "@/components/e-dashboard/MainKPIs";
import SalesGoalChart from "@/components/e-dashboard/SalesGoalChart";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <MainKPIs />
      <SalesGoalChart />
      <InventorySection />
    </div>
  );
}
