import React, { useState } from 'react';
import { Calculator, Smartphone, Laptop, Monitor, Printer, Battery, Leaf, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

interface DeviceData {
  name: string;
  weight: number;
  toxicMaterials: number;
  energySaved: number;
  icon: React.ReactNode;
}

const deviceTypes: Record<string, DeviceData> = {
  smartphones: {
    name: 'Smartphones',
    weight: 0.17,
    toxicMaterials: 0.015,
    energySaved: 1.2,
    icon: <Smartphone className="w-5 h-5" />
  },
  laptops: {
    name: 'Laptops',
    weight: 2.5,
    toxicMaterials: 0.25,
    energySaved: 20,
    icon: <Laptop className="w-5 h-5" />
  },
  monitors: {
    name: 'Monitors',
    weight: 6.5,
    toxicMaterials: 0.5,
    energySaved: 40,
    icon: <Monitor className="w-5 h-5" />
  },
  printers: {
    name: 'Printers',
    weight: 8.0,
    toxicMaterials: 0.4,
    energySaved: 30,
    icon: <Printer className="w-5 h-5" />
  },
  batteries: {
    name: 'Batteries',
    weight: 0.045,
    toxicMaterials: 0.02,
    energySaved: 0.5,
    icon: <Battery className="w-5 h-5" />
  }
};

export function EwasteCalculator() {
  const [devices, setDevices] = useState<Record<string, number>>(
    Object.keys(deviceTypes).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );
  const [customItem, setCustomItem] = useState({ name: '', weight: '' });

  const calculateImpact = () => {
    let totalWeight = 0;
    let totalToxic = 0;
    let totalEnergy = 0;

    Object.entries(devices).forEach(([device, count]) => {
      if (deviceTypes[device]) {
        totalWeight += deviceTypes[device].weight * count;
        totalToxic += deviceTypes[device].toxicMaterials * count;
        totalEnergy += deviceTypes[device].energySaved * count;
      }
    });

    if (customItem.weight && !isNaN(parseFloat(customItem.weight))) {
      totalWeight += parseFloat(customItem.weight);
      totalToxic += parseFloat(customItem.weight) * 0.1; // Estimate
      totalEnergy += parseFloat(customItem.weight) * 5; // Estimate
    }

    return { totalWeight, totalToxic, totalEnergy };
  };

  const handleDeviceChange = (device: string, value: string) => {
    setDevices(prev => ({
      ...prev,
      [device]: Math.max(0, parseInt(value) || 0)
    }));
  };

  const impact = calculateImpact();

  const funFacts = [
    "Recycling one million laptops saves enough energy to power 3,500 homes for a year!",
    "A ton of e-waste contains more gold than 17 tons of gold ore!",
    "70% of toxic waste in landfills comes from e-waste!",
    "Only 12.5% of e-waste is currently recycled worldwide.",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold">E-Waste Calculator</h2>
        </div>

        <div className="space-y-6">
          {Object.entries(deviceTypes).map(([key, data]) => (
            <div key={key} className="flex items-center gap-4">
              <div className="text-gray-600">{data.icon}</div>
              <label className="flex-1">{data.name}</label>
              <input
                type="number"
                min="0"
                value={devices[key]}
                onChange={(e) => handleDeviceChange(key, e.target.value)}
                className="w-24 p-2 border rounded-md"
              />
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Custom Item</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Item name"
                value={customItem.name}
                onChange={(e) => setCustomItem(prev => ({ ...prev, name: e.target.value }))}
                className="p-2 border rounded-md"
              />
              <input
                type="number"
                min="0"
                placeholder="Weight (kg)"
                value={customItem.weight}
                onChange={(e) => setCustomItem(prev => ({ ...prev, weight: e.target.value }))}
                className="p-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Recycle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">{impact.totalWeight.toFixed(2)}</p>
              <p className="text-sm">Total Weight (kg)</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Battery className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{impact.totalToxic.toFixed(2)}</p>
              <p className="text-sm">Toxic Materials (kg)</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Leaf className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{impact.totalEnergy.toFixed(2)}</p>
              <p className="text-sm">Energy Saved (kWh)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Did You Know?</h3>
          <div className="space-y-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Ready to Make a Difference?</h3>
          <p className="mb-4">Your e-waste can be properly recycled and contribute to a sustainable future.</p>
          <a
            href="/donate"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Schedule a Pickup
          </a>
        </div>
      </motion.div>
    </div>
  );
}