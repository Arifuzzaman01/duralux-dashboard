import { Line } from "@ant-design/charts";
const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
  { month: "Jul", revenue: 72000 },
  { month: "Aug", revenue: 69000 },
  { month: "Sep", revenue: 81000 },
  { month: "Oct", revenue: 85000 },
  { month: "Nov", revenue: 92000 },
  { month: "Dec", revenue: 110000 },
];
const AntdRevenueChart = () => {
  const config = {
    data: revenueData,
    xField: "month",
    yField: "revenue",
    color: "#1890ff", // ব্লু কালার
    smooth: true,
    point: { size: 5, shape: "diamond" },
  };
  return <Line {...config} />;
};
