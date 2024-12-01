import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Recycle, Battery, Zap, Leaf, Share2, Download, BarChart2 } from 'lucide-react';

export function UserDashboard() {
  const [timeframe, setTimeframe] = useState('month');

  const stats = [
    {
      icon: <Recycle className="w-6 h-6" />,
      label: "Total Items Recycled",
      value: "156",
      change: "+12 this month",
      color: "text-blue-600"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      label: "Carbon Footprint Saved",
      value: "2,450 kg",
      change: "+180 kg this month",
      color: "text-green-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Energy Saved",
      value: "1,280 kWh",
      change: "+95 kWh this month",
      color: "text-yellow-600"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      label: "Toxic Materials Prevented",
      value: "45 kg",
      change: "+3 kg this month",
      color: "text-red-600"
    }
  ];

  const handleShare = () => {
    // Implement social sharing functionality
    const shareData = {
      title: 'My Sustainability Impact',
      text: `I've recycled 156 items and saved 2,450 kg of CO2! Join me in making a difference.`,
      url: window.location.href,
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  const handleExport = () => {
    // Implement report export functionality
    const reportData = {
      date: new Date().toLocaleDateString(),
      stats: stats.map(stat => ({
        label: stat.label,
        value: stat.value,
        change: stat.change,
      })),
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sustainability-report.json';
    a.click();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Impact Dashboard</h2>
        <div className="flex gap-4">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-1 border rounded-lg text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Share Impact"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            onClick={handleExport}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Export Report"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className={`${stat.color} mb-4 flex justify-between items-center`}>
              {stat.icon}
              <BarChart2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold mb-2">{stat.value}</p>
            <p className="text-sm text-green-600">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Quick Tips</h3>
        <ul className="text-sm text-blue-600 space-y-1">
          <li>• Click on any stat card to see detailed analytics</li>
          <li>• Use the timeframe selector to view different periods</li>
          <li>• Share your impact or download reports using the top buttons</li>
        </ul>
      </div>
    </div>
  );
}