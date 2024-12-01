import React from 'react';
import { motion } from 'framer-motion';

export function Partners() {
  const partners = [
    {
      name: "Green Tech Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop",
    },
    {
      name: "EcoRecycle Inc",
      logo: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=300&h=300&fit=crop",
    },
    {
      name: "Sustainable Future",
      logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=300&h=300&fit=crop",
    },
    {
      name: "Tech Recyclers",
      logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Working together with industry leaders to create a sustainable future
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-gray-800"
                whileHover={{ scale: 1.1, color: '#059669' }}
              >
                {partner.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}