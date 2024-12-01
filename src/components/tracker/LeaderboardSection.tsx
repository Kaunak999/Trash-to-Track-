import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

export function LeaderboardSection() {
  const leaders = [
    { name: "Sarah Johnson", points: 2450, items: 156 },
    { name: "Michael Chen", points: 2280, items: 143 },
    { name: "Emma Davis", points: 2150, items: 138 },
    { name: "James Wilson", points: 1980, items: 125 },
    { name: "Lisa Anderson", points: 1820, items: 115 }
  ];

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Top Contributors</h2>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-4 p-4 rounded-lg ${
              index === 0 ? 'bg-yellow-50' : 'bg-gray-50'
            }`}
          >
            <div className="w-8 text-xl font-bold text-gray-500">
              {getRankIcon(index) || `#${index + 1}`}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="text-sm text-gray-600">{leader.items} items recycled</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">{leader.points}</p>
              <p className="text-sm text-gray-600">points</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}