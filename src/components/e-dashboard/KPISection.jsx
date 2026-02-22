// src/components/e-dashboard/KPISection.jsx
import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const KPISection = ({ data }) => {
  const kpiItems = [
    {
      title: "মোট বিক্রয় (Total Sales)",
      value: data.totalSales,
      prefix: "$",
      trend: data.trends.sales,
      isUp: true,
      desc: "নির্দিষ্ট সময়ের মোট আয়"
    },
    {
      title: "অর্ডারের সংখ্যা (Total Orders)",
      value: data.totalOrders,
      prefix: "",
      trend: data.trends.orders,
      isUp: true,
      desc: "সফল অর্ডারের সংখ্যা"
    },
    {
      title: "গড় অর্ডার মূল্য (AOV)",
      value: data.averageOrderValue,
      prefix: "$",
      trend: data.trends.aov,
      isUp: false,
      desc: "প্রতি অর্ডারে গড় খরচ"
    },
    {
      title: "কনভার্সন রেট",
      value: data.conversionRate,
      prefix: "",
      suffix: "%",
      trend: data.trends.conversion,
      isUp: true,
      desc: "ভিজিটর থেকে ক্রেতার হার"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
      {kpiItems.map((item, index) => (
        <Card 
          key={index} 
          variant={false} 
          className="shadow-sm hover:shadow-md transition-shadow focus:outline-none"
        >
          <div className="text-gray-500 text-xs mb-1 uppercase font-semibold">
            {item.title}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
              {item.prefix}{item.value.toLocaleString()}
              {item.suffix}
            </span>
            <span className={`text-xs flex items-center ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
              {item.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              {item.trend}
            </span>
          </div>
          <p className="text-gray-400 text-[10px] mt-2 italic">
            {item.desc}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default KPISection;