import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function VisualizationSection() {
  const data = [
    { month: 'Jan', items: 45, carbon: 850 },
    { month: 'Feb', items: 52, carbon: 920 },
    { month: 'Mar', items: 61, carbon: 1050 },
    { month: 'Apr', items: 58, carbon: 980 },
    { month: 'May', items: 72, carbon: 1180 },
    { month: 'Jun', items: 68, carbon: 1120 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Progress Over Time</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="items"
              stroke="#3B82F6"
              name="Items Recycled"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="carbon"
              stroke="#10B981"
              name="Carbon Saved (kg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}