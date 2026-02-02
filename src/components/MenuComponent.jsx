"use client";

import React from "react";
import { Menu } from "antd";
import { CiAt } from "react-icons/ci";
import { CgScreenMirror } from "react-icons/cg";
import { PiScreencast } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { IoHelpBuoyOutline, IoBriefcaseOutline } from "react-icons/io5";
import { FaAt, FaExclamation } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { FiSunrise, FiUsers } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosPower } from "react-icons/io";

import Link from "next/link";

const MenuComponent = ({ mode = "inline", onClick }) => {
  const menuItems = [
    {
      key: "grp1",
      label: (
        <span className="text-gray-400 text-[11px] font-bold tracking-wider">
          NAVIGATION
        </span>
      ),
      type: "group",
      children: [
        {
          key: "dashboards",
          icon: <CgScreenMirror size={22} />,
          label: "Dashboards",
          children: [
            { key: "crm", label: <Link href="/dashboard/crm">CRM</Link> },
            {
              key: "analytics",
              label: <Link href={"dashboard/analytics"}>Analytics</Link>,
            },
          ],
        },
        {
          key: "reports",
          icon: <PiScreencast size={18} />,
          label: "Reports",
          children: [
            {
              key: "sales",
              label: (
                <Link href={"/dashboard/sales-reports"}>Sales Report</Link>
              ),
            },
            {
              key: "leads-report",
              label: (
                <Link href={"/dashboard/leads-reports"}>Leads Report</Link>
              ),
            },
            {
              key: "project",
              label: (
                <Link href={"/dashboard/project-reports"}>Project Report</Link>
              ),
            },
            {
              key: "timeSheets",
              label: (
                <Link href={"/dashboard/timeSheets-reports"}>
                  TimeSheets Report
                </Link>
              ),
            },
          ],
        },
        {
          key: "applications",
          icon: <BsSend size={17} />,
          label: "Applications",
          children: [
            { key: "Email", label: <Link href={"Email"}>Email</Link> },
            { key: "Tasks", label: <Link href={"Tasks"}>Tasks</Link> },
            { key: "Notes", label: <Link href={"Notes"}>Notes</Link> },
            { key: "Storage", label: <Link href={"Storage"}>Storage</Link> },
            { key: "Calendar", label: <Link href={"Calendar"}>Calendar</Link> },
          ],
        },
        {
          key: "proposal",
          icon: <CiAt size={20} />,
          label: "Proposal",
          children: [
            {
              key: "Proposal",
              label: <Link href={"dashboard/Proposal"}>Proposal</Link>,
            },
            {
              key: "Proposal-View",
              label: (
                <Link href={"dashboard/Proposal-View"}>Proposal View</Link>
              ),
            },
            {
              key: "Proposal-Edit",
              label: (
                <Link href={"dashboard/Proposal-Edit"}>Proposal Edit</Link>
              ),
            },
            {
              key: "Proposal-Create",
              label: (
                <Link href={"dashboard/Proposal-Create"}>Proposal Create</Link>
              ),
            },
          ],
        },
        {
          key: "payment",
          icon: <LuDollarSign size={18} />,
          label: "Payment",
          children: [
            {
              key: "Payment",
              label: <Link href={"/dashboard/Payment"}>Payment</Link>,
            },
            {
              key: "Invoice-View",
              label: <Link href={"/dashboard/Invoice-View"}>Invoice View</Link>,
            },
            {
              key: "Invoice-Create",
              label: (
                <Link href={"/dashboard/Invoice-Create"}>Invoice Create</Link>
              ),
            },
          ],
        },
        {
          key: "customers",
          icon: <FiUsers size={16} />,
          label: "Customers",
          children: [
            {
              key: "Customers",
              label: <Link href={"/dashboard/Customers"}>Customers</Link>,
            },
            {
              key: "Customers-View",
              label: (
                <Link href={"/dashboard/Customers-View"}>Customers View</Link>
              ),
            },
            {
              key: "Customers-Create",
              label: (
                <Link href={"/dashboard/Customers-Create"}>
                  Customers Create
                </Link>
              ),
            },
          ],
        },
        {
          key: "leads",
          icon: <FaExclamation size={20} />,
          label: "Leads",
          children: [
            {
              key: "Lead",
              label: <Link href={"/dashboard/Leads"}>Leads</Link>,
            },
            {
              key: "Leads-View",
              label: <Link href={"/dashboard/Leads-View"}>Leads View</Link>,
            },
            {
              key: "Leads-Create",
              label: <Link href={"/dashboard/Leads-Create"}>Leads Create</Link>,
            },
          ],
        },
        {
          key: "projects",
          icon: <IoBriefcaseOutline size={16} />,
          label: "Projects",
          children: [
            {
              key: "Projects",
              label: <Link href={"/dashboard/Projects"}>Projects</Link>,
            },
            {
              key: "Projects View",
              label: (
                <Link href={"/dashboard/Projects-View"}>Projects View</Link>
              ),
            },
            {
              key: "Projects Create",
              label: (
                <Link href={"/dashboard/Projects-Create"}>Projects Create</Link>
              ),
            },
          ],
        },
        {
          key: "widgeth",
          icon: <MdOutlineSpaceDashboard size={17} />,
          label: "Widgeth",
          children: [
            {
              key: "Lists",
              label: <Link href={"/dashboard/Lists"}>Lists</Link>,
            },
            {
              key: "Tables",
              label: <Link href={"/dashboard/Tables"}>Tables</Link>,
            },
            {
              key: "Charts",
              label: <Link href={"/dashboard/Charts"}>Charts</Link>,
            },
            {
              key: "Statistics",
              label: <Link href={"/dashboard/Statistics"}>Statistics</Link>,
            },
            {
              key: "Miscellaneous",
              label: (
                <Link href={"/dashboard/Miscellaneous"}>Miscellaneous</Link>
              ),
            },
          ],
        },
        {
          key: "settings",
          icon: <CiSettings size={20} />,
          label: "Settings",
          children: [
            {
              key: "setting-Ganeral",
              label: <Link href={"/dashboard/Ganeral"}>Ganeral</Link>,
            },
            {
              key: "setting-SEO",
              label: <Link href={"/dashboard/SEO"}>SEO</Link>,
            },
            {
              key: "setting-Tags",
              label: <Link href={"/dashboard/Tags"}>Tags</Link>,
            },
            {
              key: "setting-Email",
              label: <Link href={"/dashboard/Email"}>Email</Link>,
            },
            {
              key: "setting-Tasks",
              label: <Link href={"/dashboard/Tasks"}>Tasks</Link>,
            },
            {
              key: "setting-Leads",
              label: <Link href={"/dashboard/Leads"}>Leads</Link>,
            },
            {
              key: "setting-Support",
              label: <Link href={"/dashboard/Support"}>Support</Link>,
            },
            {
              key: "setting-Finance",
              label: <Link href={"/dashboard/Finance"}>Finance</Link>,
            },
            {
              key: "setting-Gateways",
              label: <Link href={"/dashboard/Gateways"}>Gateways</Link>,
            },
            {
              key: "setting-Customers",
              label: <Link href={"/dashboard/Customers"}>Customers</Link>,
            },
            {
              key: "setting-Localization",
              label: <Link href={"/dashboard/Localization"}>Localization</Link>,
            },
            {
              key: "setting-reCAPTCHA",
              label: <Link href={"/dashboard/reCAPTCHA"}>reCAPTCHA</Link>,
            },
            {
              key: "setting-Miscellaneous",
              label: (
                <Link href={"/dashboard/Miscellaneous"}>Miscellaneous</Link>
              ),
            },
          ],
        },
        {
          key: "authentication",
          icon: <IoIosPower size={18} />,
          label: "Authentication",
          children: [
            {
              key: "login",
              label: <Link href={"/dashboard/login"}>login</Link>,
            },
            {
              key: "register",
              label: <Link href={"/dashboard/register"}>register</Link>,
            },
            {
              key: "Error-404",
              label: <Link href={"/dashboard/Error 404"}>Error 404</Link>,
            },
            {
              key: "Reset-Pass",
              label: <Link href={"/dashboard/Reset Pass"}>Reset Pass</Link>,
            },
            {
              key: "Verify-OTP",
              label: <Link href={"/dashboard/Verify OTP"}>Verify OTP</Link>,
            },
            {
              key: "Maintenance",
              label: <Link href={"/dashboard/Maintenance"}>Maintenance</Link>,
            },
          ],
        },
        {
          key: "helpCenter",
          icon: <IoHelpBuoyOutline size={18} />,
          label: "Help Center",
          children: [
            {
              key: "Support",
              label: <Link href={"/dashboard/Support"}>Support</Link>,
            },
            {
              key: "KnowledgeBase",
              label: (
                <Link href={"/dashboard/KnowledgeBase"}>KnowledgeBase</Link>
              ),
            },
            {
              key: "Documentations",
              label: (
                <Link href={"/dashboard/Documentations"}>Documentations</Link>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
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
      
    </div>
  );
};

export default MenuComponent;
