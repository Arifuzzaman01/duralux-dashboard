export const inventoryData = {
  bestSelling: [
    { name: 'Wireless Pods', sales: 4000, stock: 2400, amt: 2400 },
    { name: 'Smart Watch', sales: 3000, stock: 1398, amt: 2210 },
    { name: 'Mechanical KB', sales: 2000, stock: 9800, amt: 2290 },
    { name: 'Gaming Mouse', sales: 2780, stock: 3908, amt: 2000 },
    { name: 'Gaming Mouses', sales: 2770, stock: 3908, amt: 2100 },
  ],
  lowSelling: [
    { name: 'Old Case', sales: 120, stock: 50, amt: 100 },
    { name: 'Cable Ties', sales: 200, stock: 1500, amt: 200 },
    { name: 'Stickers', sales: 150, stock: 2000, amt: 150 },
  ],
  outOfStock: [
    { id: 1, name: 'iPhone 15 Pro', sku: 'APL-15P-BLK', category: 'Mobile' },
    { id: 2, name: 'Sony WH-1000XM5', sku: 'SNY-XM5-SLV', category: 'Audio' },
  ],
  pendingOrders: [
    {
      key: '1',
      productName: 'Gaming Monitor 4K',
      sku: 'MON-4K-27',
      buyer: 'Arif Ahmed',
      address: 'Dhanmondi, Dhaka',
      method: 'COD',
      status: 'Processing'
    },
    {
      key: '2',
      productName: 'Mechanical Keyboard',
      sku: 'KB-RGB-MX',
      buyer: 'Sifat Hasan',
      address: 'Chawkbazar, Chittagong',
      method: 'SSL Commerz',
      status: 'Shipped'
    }
  ]
};