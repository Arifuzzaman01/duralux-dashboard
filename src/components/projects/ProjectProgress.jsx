// app/page.js
"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'JAN/23', blueLine: 44, redLine: 60 },
  { date: 'FEB/23', blueLine: 12, redLine: 20 },
  { date: 'MAR/23', blueLine: 76, redLine: 90 },
  { date: 'APR/23', blueLine: 35, redLine: 45 },
  { date: 'MAY/23', blueLine: 80, redLine: 100 },
  { date: 'JUN/23', blueLine: 40, redLine: 55 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
        <p className="font-medium text-gray-800">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.dataKey === 'blueLine' ? 'Blue Line' : 'Red Line'}: {entry.value}K
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ProjectProgress() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Performance Chart</h1>
        <p className="text-gray-600 mb-6">Monthly data visualization from Jan to Jun 2023</p>
        
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#e5e7eb" 
                  vertical={false}
                />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 14 }}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 14 }}
                  tickFormatter={(value) => `${value}K`}
                  domain={[0, 110]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{ paddingBottom: 20 }}
                  formatter={(value) => (
                    <span className="text-gray-700 font-medium text-sm">
                      {value === 'blueLine' ? 'Blue Line' : 'Red Line'}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="blueLine"
                  name="Blue Line"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: 'white' }}
                  activeDot={{ r: 8, fill: '#3b82f6', strokeWidth: 2, stroke: 'white' }}
                />
                <Line
                  type="monotone"
                  dataKey="redLine"
                  name="Red Line"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: 'white' }}
                  activeDot={{ r: 8, fill: '#ef4444', strokeWidth: 2, stroke: 'white' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
         
        </div>
      </div>
    </div>
  );
}