import KPISection from "./KPISection";

async function getKPIData() {
  return {
    totalSales: 250000,
    totalOrders: 1250,
    averageOrderValue: 200,
    conversionRate: 3.5,
    trends: { sales: "+12%", orders: "+8%", aov: "-3%", conversion: "+0.5%" },
  };
}

export default async function MainKPIs() {
  const data = await getKPIData();

  return (
    <main className="p-3 bg-gray-50 ">
      <h1 className="text-2xl font-semibold mb-6">Ecommerce Overview</h1>
      <KPISection data={data} />
    </main>
  );
}
