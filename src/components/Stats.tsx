import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Trash2, Recycle } from 'lucide-react';

export function Stats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="text-center transform transition-all duration-300 hover:shadow-lg p-6 rounded-xl bg-white"
          >
            <Scale className="w-12 h-12 mx-auto text-green-600 mb-4 animate-bounce" />
            <motion.h3 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-2"
            >
              50M+
            </motion.h3>
            <p className="text-gray-600">Tons of E-waste Annually</p>
          </motion.div>

          <motion.div 
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="text-center transform transition-all duration-300 hover:shadow-lg p-6 rounded-xl bg-white"
          >
            <Trash2 className="w-12 h-12 mx-auto text-green-600 mb-4 animate-pulse" />
            <motion.h3 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-2"
            >
              20%
            </motion.h3>
            <p className="text-gray-600">E-waste Properly Recycled</p>
          </motion.div>

          <motion.div 
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="text-center transform transition-all duration-300 hover:shadow-lg p-6 rounded-xl bg-white"
          >
            <Recycle className="w-12 h-12 mx-auto text-green-600 mb-4 animate-spin-slow" />
            <motion.h3 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold mb-2"
            >
              $57B
            </motion.h3>
            <p className="text-gray-600">Value in Raw Materials</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}