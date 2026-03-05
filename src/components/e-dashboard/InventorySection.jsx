"use client";
import React, { useState } from "react";
import { Tabs, Table, Tag, Badge, Card } from "antd";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { inventoryData } from "../../../data/inventoryData";
import Stock from "./Stock";
import PromotionalSalesChart from "./PromotionalSalesChart";

const InventorySection = () => {
  const [salesTab, setSalesTab] = useState("best");

  return (
    <div className=" mt-3 ">
      <Card
        className="lg:col-span-8 shadow-sm border-none"
        title="Product Performance"
      >
        <Tabs
          defaultActiveKey="best"
          onChange={(key) => setSalesTab(key)}
          items={[
            { label: "Best Selling", key: "best" },
            { label: "Low Selling", key: "low" },
          ]}
        />
        <div className="h-[350px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={
                salesTab === "best"
                  ? inventoryData.bestSelling
                  : inventoryData.lowSelling
              }
              margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
            >
              <CartesianGrid stroke="#1cb811" vertical={false} />
              <XAxis
                dataKey="name"
                scale="band"
                axisLine={false}
                tickLine={false}
              />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip className="rounded-lg shadow-lg border-none" />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#1cb811"
                stroke="#91d5ff"
              />
              <Bar
                dataKey="sales"
                barSize={30}
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="#1cb811"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default InventorySection;
