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

const InventorySection = () => {
  const [salesTab, setSalesTab] = useState("best");

  //  console.log(inventoryData);
  const pendingColumns = [
    {
      title: "Product",
      dataKey: "productName",
      key: "productName",
      render: (text, record) => (
        <div>
          <div className="font-medium">{record.productName}</div>
          <div className="text-[10px] text-gray-400">{record.sku}</div>
        </div>
      ),
    },
    { title: "Buyer", dataIndex: "buyer", key: "buyer" },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
      render: (m) => <Tag color="blue">{m}</Tag>,
    },
    { title: "Address", dataIndex: "address", key: "address", ellipsis: true },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8 px-3">
      {/* LEFT SECTION: Sales Analytics */}
      <Card
        className="lg:col-span-7 shadow-sm border-none"
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

      {/* RIGHT SECTION: Stock & Pending */}
      <Card
        className="lg:col-span-5 shadow-sm border-none"
        title="Stock & Order Status"
      >
        <Tabs
          defaultActiveKey="out"
          items={[
            {
              label: (
                <span>
                  Out of Stock{" "}
                  <Badge
                    count={inventoryData?.outOfStock?.length}
                    offset={[10, -5]}
                    size="small"
                  />
                </span>
              ),
              key: "out",
              children: (
                <ul className="space-y-3 mt-2">
                  {inventoryData.outOfStock.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center p-3 bg-red-50 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-gray-800 m-0">
                          {item.name}
                        </p>
                        <p className="text-xs text-red-400 m-0">{item.sku}</p>
                      </div>
                      <Tag color="error">Empty</Tag>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              label: "Pending Stock",
              key: "pending",
              children: (
                <Table
                  dataSource={inventoryData.pendingOrders}
                  columns={pendingColumns}
                  pagination={false}
                  size="small"
                  className="mt-2"
                />
              ),
            },
          ]}
        />

        {/* Total Status Summary */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between">
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Low Stock</p>
            <p className="text-xl font-bold text-orange-500">12</p>
          </div>
          <div className="text-center border-x px-8">
            <p className="text-xs text-gray-400 uppercase">Out of Stock</p>
            <p className="text-xl font-bold text-red-500">
              {inventoryData.outOfStock.length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Available</p>
            <p className="text-xl font-bold text-green-500">450</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InventorySection;
