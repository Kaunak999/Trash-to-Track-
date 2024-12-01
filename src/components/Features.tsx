import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Solutions",
      description: "Our sustainable practices ensure minimal environmental impact",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Responsible Recycling",
      description: "State-of-the-art recycling processes for all types of e-waste",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Impact",
      description: "Supporting local communities through sustainable initiatives",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Making a difference worldwide through our programs",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making e-waste management accessible, efficient, and environmentally responsible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}