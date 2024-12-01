import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Medal, ChevronDown, Share2 } from 'lucide-react';

export function MilestoneSection() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  const milestones = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "First Steps",
      description: "Recycled first 10 items",
      progress: 100,
      achieved: true,
      date: "2024-02-15",
      rewards: ["Green Warrior Badge", "50 Impact Points"],
      nextLevel: "Recycle 25 items to reach the next level"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Rising Star",
      description: "Saved 1,000 kg of CO₂",
      progress: 80,
      achieved: false,
      date: null,
      rewards: ["Climate Champion Badge", "100 Impact Points"],
      nextLevel: "Save 200 more kg of CO₂ to complete"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Earth Champion",
      description: "Recycled 100 items",
      progress: 60,
      achieved: false,
      date: null,
      rewards: ["Earth Protector Badge", "200 Impact Points"],
      nextLevel: "Recycle 40 more items to reach this milestone"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "Green Pioneer",
      description: "Consistent recycling for 6 months",
      progress: 40,
      achieved: false,
      date: null,
      rewards: ["Dedication Badge", "300 Impact Points"],
      nextLevel: "Keep recycling for 3 more months"
    }
  ];

  const handleShare = (milestone: any) => {
    const shareData = {
      title: `Achievement Unlocked: ${milestone.title}`,
      text: `I just ${milestone.achieved ? 'achieved' : 'am working towards'} the ${milestone.title} milestone in my sustainability journey!`,
      url: window.location.href,
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Milestones</h2>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-gray-200 overflow-hidden"
          >
            <div 
              className={`p-4 cursor-pointer ${
                expandedMilestone === index ? 'bg-gray-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  milestone.achieved ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{milestone.title}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        expandedMilestone === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${milestone.progress}%` }}
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium ml-4">
                  {milestone.progress}%
                </span>
              </div>
            </div>

            <AnimatePresence>
              {expandedMilestone === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-4 bg-gray-50 space-y-4">
                    {milestone.achieved && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Achieved on</span>
                        <span className="text-sm font-medium">{milestone.date}</span>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Rewards</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {milestone.rewards.map((reward, i) => (
                          <li key={i}>• {reward}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Next Level</h4>
                      <p className="text-sm text-gray-600">{milestone.nextLevel}</p>
                    </div>

                    {milestone.achieved && (
                      <button
                        onClick={() => handleShare(milestone)}
                        className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
                      >
                        <Share2 className="w-4 h-4" />
                        Share Achievement
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}