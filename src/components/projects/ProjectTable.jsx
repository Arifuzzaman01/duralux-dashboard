"use client";
import React, { useState } from "react";
import { Table, Tag, Avatar, Space, Button, Select } from "antd";
import { EyeOutlined, MoreOutlined } from "@ant-design/icons";
import { useSearchParams } from "next/navigation";

export default function ProjectTable({ data }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const searchParams = useSearchParams()
  const limit = searchParams.get("limit")
  console.log(limit);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
  const columns = [
    {
      title: "PROJECT NAME",
      dataIndex: "name",
      key: "name",
      //   width: 300,

      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            shape="square"
            size={40}
            className="bg-blue-50 text-blue-600 font-bold"
          >
            {text[0]}
          </Avatar>
          <div>
            <div className="font-bold text-gray-800">{text}</div>
            <div className="text-[11px] text-gray-400">{record.desc}</div>
          </div>
        </div>
      ),
    },
    { title: "CUSTOMER", dataIndex: "customer", key: "customer" },
    { title: "START DATE", dataIndex: "start", key: "start" },
    { title: "END DATE", dataIndex: "end", key: "end" },
    {
      title: "ASSIGNED",
      dataIndex: "assigned",
      key: "assigned",
      render: (email) => (
        <Select
          defaultValue={email}
          style={{ width: 180 }}
          className="text-xs"
          options={[{ value: email, label: email }]}
        />
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "In Progress"
            ? "blue"
            : status === "On Hold"
              ? "orange"
              : "red";
        if (status === "Completed") color = "green";
        return (
          <Tag
            color={color}
            style={{
              padding: "5px 10px ",
              width: "100%",
              border: "1px solid #B7B89F",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "ACTIONS",
      key: "actions",
      render: () => (
        <Space size="middle">
          <Button shape="circle" icon={<EyeOutlined />} size="small" />
          <Button shape="circle" icon={<MoreOutlined />} size="small" />
        </Space>
      ),
    },
  ];

  return (
    <Table
      className="bg-white "
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      rowKey="id"
      scroll={{ x: 1100 }}
      
      rowClassName={() =>
        "hover:bg-blue-50/30 transition-colors cursor-pointer"
      }
      pagination={{
        pageSize: limit,
        //   showSizeChanger: true,
        placement: ["bottomRight"],
        className: "p-4 !m-0 border-t border-gray-50",
      }}
    />
  );
}
