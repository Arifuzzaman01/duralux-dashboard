"use client";
import React from "react";
import { Table, Tag, Card } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const columns = [
  {
    title: 'PROJECT NAME',
    dataIndex: 'name',
    render: (text) => <span className="font-semibold text-gray-700">{text}</span>,
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    render: (status) => (
      <Tag color={status === 'Working' ? 'blue' : 'orange'} className="rounded-full px-3">
        {status}
      </Tag>
    ),
  },
  {
    title: 'REMAINING',
    dataIndex: 'remaining',
    render: (time) => <span className="text-gray-500 font-mono">{time}</span>,
  },
];

const data = [
  { key: '1', name: 'Duralux CRM Admin Project', status: 'Working', remaining: '04 : 36 : 00' },
  { key: '2', name: 'Website Redesign for Nike', status: 'Upcoming', remaining: '12 : 00 : 00' },
  { key: '3', name: 'Update User Flows with UX', status: 'Working', remaining: '01 : 15 : 00' },
  { key: '4', name: 'Duralux CRM Dashboard', status: 'Upcoming', remaining: '00 : 00 : 00' },
];

export default function ProjectRemainders() {
  return (
    <Card 
      title={<span className="font-bold">Project Remainders</span>} 
      extra={<MoreOutlined />}
      className="shadow-sm border-gray-100 rounded-xl"
    >
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        size="middle"
        className="custom-table"
      />
    </Card>
  );
}