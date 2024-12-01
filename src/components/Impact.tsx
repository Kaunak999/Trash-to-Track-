import React from 'react';
import { motion } from 'framer-motion';

export function Impact() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16" id="impact">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Environmental Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800"
              alt="Environmental impact"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Why E-Waste Matters</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Electronic waste contains toxic materials that can harm our environment and health. 
              Proper disposal and recycling of e-waste is crucial for our planet's future.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Reducing Toxic Pollution</h4>
                <p className="text-gray-600">Prevents harmful chemicals from contaminating soil and water resources</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Conserving Resources</h4>
                <p className="text-gray-600">Recovers valuable materials that can be reused in manufacturing</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Creating Green Jobs</h4>
                <p className="text-gray-600">Supports employment in the recycling and sustainability sectors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}