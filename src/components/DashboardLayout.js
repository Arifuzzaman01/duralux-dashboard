"use client";

import React, { useState, useEffect } from "react";
import { Layout, Button, theme, ConfigProvider, Drawer } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Image from "next/image";
import MenuComponent from "./MenuComponent"; 

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            style={{ borderRight: "1px solid #f0f0f0" }}
          >
            <div className="p-6">
              {
                collapsed ? <p className="text-4xl font-bold bg-blue-500 rounded-md px-2">D</p>: <Image src="/duralux.png" width={140} height={50} alt="logo" />
              }
            </div>
            <MenuComponent />
          </Sider>
        )}

        {/* Mobile Drawer */}
        <Drawer
          title="AYZ Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          styles={{ body: { padding: 0 }, wrapper: { width: 280 } }}
        >
          <div className="p-6 border-b">
             <Image src="/duralux.png" width={120} height={40} alt="logo" />
          </div>
          <MenuComponent onClick={() => setDrawerVisible(false)} />
        </Drawer>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={isMobile || collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => isMobile ? setDrawerVisible(true) : setCollapsed(!collapsed)}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
          </Header>

          <Content style={{ margin: isMobile ? "16px" : "24px 16px", padding: isMobile ? 16 : 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}