"use client";
import { Badge, Card, Table, Tabs, Tag } from "antd";
import React, { useState } from "react";
import { inventoryData, pendingColumns } from "../../../data/inventoryData";

const Stock = () => {
  const [activeTab, setActiveTab] = useState("out");
  return (
    <div className="w-full ">
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

export default Stock;
