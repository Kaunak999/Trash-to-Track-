import React from 'react';
import { RefreshCw, Lightbulb, Users } from 'lucide-react';

export function Solutions() {
  return (
    <div className="py-16" id="solutions">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sustainable Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <RefreshCw className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Circular Economy</h3>
            <p className="text-gray-600">
              Implementing circular economy principles to maximize resource efficiency and minimize waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lightbulb className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Developing new technologies and processes for better e-waste management and recycling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Action</h3>
            <p className="text-gray-600">
              Engaging communities in responsible e-waste disposal and recycling initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}