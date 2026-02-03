"use client";

import React, { useState, useEffect } from "react";
import { Layout, Button, theme, ConfigProvider, Drawer } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Image from "next/image";
import MenuComponent from "./MenuComponent";
import Link from "next/link";
import { FiSunrise } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import DashboardHeader from "./DashboardHeader";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    setMounted(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return <div style={{ background: "#f5f5f5", minHeight: "100vh" }} />;
  }
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1677ff" } }}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            width={280}
            style={{
              overflow: "hidden",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              borderRight: "1px solid #f0f0f0",
              zIndex: 1000,
            }}
          >
            <div
              className={`transition-all duration-300 ${collapsed ? "p-4" : " p-6"}`}
              style={{ height: "80px" }}
            >
              {collapsed ? (
                <Link
                  href={"/"}
                  className="text-2xl font-bold bg-blue-500 rounded-md text-center text-white"
                >
                  D
                </Link>
              ) : (
                <Link href={"/"}>
                  <Image
                    src="/duralux.png"
                    width={140}
                    height={50}
                    alt="logo"
                    priority
                  />
                </Link>
              )}
            </div>

            {/* Scrollable Menu Section */}
            <div
              style={{
                height: "calc(100vh - 80px)",
                overflowY: "auto",
                overflowX: "hidden",
              }}
              className="custom-sidebar-menu"
            >
              <MenuComponent collapsed={collapsed} />
              <div className="bg-[#eff0f6] text-black p-5 pl-3 rounded-md flex flex-col items-center justify-center gap-4 m-5">
                {/* icon */}
                <FiSunrise size={24} />
                <h3 className="text-[16px] font-bold text-center ">
                  Downloading Center
                </h3>
                <p className="text-xs text-gray-800  text-justify">
                  Duralux is a production ready CRM to get started up and
                  running easily.
                </p>
                <button className="w-full py-3 px-4 text-[12px] rounded-sm bg-blue-600 text-gray-100 uppercase font-semibold">
                  download now
                </button>
              </div>
            </div>
          </Sider>
        )}

        {/* Layout Body */}
        <Layout
          style={{
            marginLeft: isMobile ? 0 : collapsed ? 80 : 280,
            transition: "all 0.2s",
          }}
        >
          {/* Fixed Header */}
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              borderBottom: "1px solid #f0f0f0",
              display: "flex",
              alignItems: "center",
              position: "fixed",
              width: `calc(100% - ${isMobile ? "0px" : collapsed ? "80px" : "280px"})`,
              zIndex: 999,
              transition: "all 0.2s",
            }}
          >
            <Button
              type="text"
              icon={
                isMobile || collapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )
              }
              onClick={() =>
                isMobile ? setDrawerVisible(true) : setCollapsed(!collapsed)
              }
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
            <DashboardHeader />
          </Header>
         

          {/* Scrollable Content Area */}
          <Content
            style={{
              // marginTop: 20,
              margin: isMobile ? "10px" : "64px 0px",
              padding: isMobile ? 10 : 0,
              minHeight: "calc(100vh - 64px)",
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
            className="custom-sidebar-menu "
          >
            {children}
          </Content>
        </Layout>

        {/* Mobile Drawer */}
        <Drawer
          title="DURALUX MENU"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          styles={{ body: { padding: 0 }, wrapper: { width: 280 } }}
        >
          <MenuComponent onClick={() => setDrawerVisible(false)} />
        </Drawer>
      </Layout>
    </ConfigProvider>
  );
}
