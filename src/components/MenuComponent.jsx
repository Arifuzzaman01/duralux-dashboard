"use client";

import React from "react";
import { Menu } from "antd";
import { CiMonitor } from "react-icons/ci";
import { PiScreencast } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { 
  IoChatbubbleOutline, 
  IoDocumentTextOutline, 
  IoWalletOutline, 
  IoPeopleOutline, 
  IoAlertCircleOutline, 
  IoBriefcaseOutline 
} from "react-icons/io5";
import Link from "next/link";

const MenuComponent = ({ mode = "inline", onClick }) => {
  
  const menuItems = [
    {
      key: "grp1",
      label: <span className="text-gray-400 text-[11px] font-bold tracking-wider">NAVIGATION</span>,
      type: "group", 
      children: [
        {
          key: "dashboards",
          icon: <CiMonitor size={20} />,
          label: "Dashboards",
          children: [ 
            { key: "crm", label: <Link href="/dashboard/crm">CRM</Link> },
            { key: "analytics", label: <Link href={"dashboard/analytics"}>Analytics</Link> },
          ],
        },
        { key: "reports", icon: <PiScreencast size={20} />, label: "Reports" },
        { key: "apps", icon: <BsSend size={18} />, label: "Applications" },
        { key: "proposal", icon: <IoChatbubbleOutline size={18} />, label: "Proposal" },
        { key: "payment", icon: <IoWalletOutline size={18} />, label: "Payment" },
        { key: "customers", icon: <IoPeopleOutline size={18} />, label: "Customers" },
        { key: "leads", icon: <IoAlertCircleOutline size={18} />, label: "Leads" },
        { key: "projects", icon: <IoBriefcaseOutline size={18} />, label: "Projects" },
      ],
    },
  ];

  return (
    <Menu
      theme="light"
      mode={mode}
      defaultSelectedKeys={["analytics"]}
      defaultOpenKeys={["dashboards"]}
      items={menuItems}
      onClick={onClick}
      style={{ borderRight: 0 }}
      className="custom-sidebar-menu"
    />
  );
};

export default MenuComponent;