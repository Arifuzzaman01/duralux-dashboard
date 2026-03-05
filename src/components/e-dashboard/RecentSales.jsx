"use client";
import React from 'react';
import { Table, Tag, Card } from 'antd';
import { recentSalesData } from '../../../data/data';

const RecentSales = () => {
  const columns = [
    {
      title: 'Buyer & Order',
      dataIndex: 'buyerName',
      key: 'buyerName',
      render: (text, record) => (
        <div>
          <div className="font-bold text-gray-800">{text}</div>
          <div className="text-[10px] text-gray-400">{record.orderId}</div>
        </div>
      ),
    },
    {
      title: 'Product Info',
      dataIndex: 'productName',
      key: 'productName',
      responsive: ['md'], // শুধুমাত্র ট্যাবলেট এবং বড় স্ক্রিনে দেখাবে
      render: (text, record) => (
        <div>
          <div className="text-sm font-medium">{text}</div>
          <div className="text-[10px] bg-gray-100 px-1 rounded w-fit uppercase">{record.sku}</div>
        </div>
      ),
    },
    {
      title: 'Location & Phone',
      dataIndex: 'location',
      key: 'location',
      responsive: ['lg'], // বড় স্ক্রিনে দেখাবে
      render: (text, record) => (
        <div className="text-xs">
          <p className="m-0 text-gray-600">{text}</p>
          <p className="m-0 text-gray-400 italic">{record.phone}</p>
        </div>
      ),
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: 'Amount',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span className="font-bold text-green-600">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Delivered' ? 'green' : status === 'Processing' ? 'blue' : 'orange';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <Card 
      title={<span className="text-xl font-bold">Recent Sales (Last 24-48 Hours)</span>}
      className="shadow-sm border-none rounded-2xl"
      extra={<a href="#" className="text-blue-500 text-sm font-medium">View All</a>}
    >
      <div className="overflow-x-auto">
        <Table 
          dataSource={recentSalesData} 
          columns={columns} 
          pagination={false}
          className="custom-table"
          onRow={(record) => ({
            onClick: () => { window.location.href = '#'; }, // রো ক্লিক করলে লিংক কাজ করবে
            className: 'cursor-pointer hover:bg-blue-50 transition-colors'
          })}
        />
      </div>
    </Card>
  );
};

export default RecentSales;