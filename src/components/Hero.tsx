import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1920"
          alt="E-waste background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            Transform E-Waste into a
            <span className="text-green-400"> Sustainable Future</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Join us in our mission to tackle electronic waste and create a more sustainable world for future generations.
          </p>
          <div className="flex gap-4">
            <a
              href="https://en.wikipedia.org/wiki/Electronic_waste"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:gap-4"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-sm transition-colors"
            >
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}