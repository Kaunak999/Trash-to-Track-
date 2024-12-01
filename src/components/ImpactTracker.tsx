import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Battery, Smartphone, Scale } from 'lucide-react';

export function ImpactTracker() {
  const impacts = [
    {
      icon: <TreePine className="w-8 h-8" />,
      value: "2,345",
      label: "Trees Saved",
      color: "text-green-600"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      value: "15,789",
      label: "Batteries Recycled",
      color: "text-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      value: "8,932",
      label: "Devices Recovered",
      color: "text-purple-600"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      value: "45,678",
      label: "KG E-Waste Processed",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className={`${impact.color} mb-4 flex justify-center`}>
                {impact.icon}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-3xl font-bold mb-2"
              >
                {impact.value}
              </motion.div>
              <p className="text-gray-600">{impact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}