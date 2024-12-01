import React, { useState } from 'react';
import { Leaf, Car, Home, ShoppingBag } from 'lucide-react';

export function CarbonCalculator() {
  const [values, setValues] = useState({
    carMiles: 0,
    electricityKwh: 0,
    gasTherm: 0,
    wasteKg: 0
  });

  const factors = {
    carMiles: 0.404, // kg CO2 per mile
    electricityKwh: 0.92, // kg CO2 per kWh
    gasTherm: 5.3, // kg CO2 per therm
    wasteKg: 2.89 // kg CO2 per kg waste
  };

  const calculateTotalEmissions = () => {
    return Object.entries(values).reduce((total, [key, value]) => {
      return total + (value * factors[key as keyof typeof factors]);
    }, 0);
  };

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: Math.max(0, parseFloat(value) || 0)
    }));
  };

  const totalEmissions = calculateTotalEmissions();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Leaf className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-semibold">Carbon Footprint Calculator</h2>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Car className="w-5 h-5 text-gray-600" />
            <label className="flex-1">Miles Driven (per month)</label>
            <input
              type="number"
              min="0"
              value={values.carMiles}
              onChange={(e) => handleChange('carMiles', e.target.value)}
              className="w-24 p-2 border rounded-md"
            />
          </div>

          <div className="flex items-center gap-4">
            <Home className="w-5 h-5 text-gray-600" />
            <label className="flex-1">Electricity Usage (kWh/month)</label>
            <input
              type="number"
              min="0"
              value={values.electricityKwh}
              onChange={(e) => handleChange('electricityKwh', e.target.value)}
              className="w-24 p-2 border rounded-md"
            />
          </div>

          <div className="flex items-center gap-4">
            <Home className="w-5 h-5 text-gray-600" />
            <label className="flex-1">Natural Gas (therms/month)</label>
            <input
              type="number"
              min="0"
              value={values.gasTherm}
              onChange={(e) => handleChange('gasTherm', e.target.value)}
              className="w-24 p-2 border rounded-md"
            />
          </div>

          <div className="flex items-center gap-4">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <label className="flex-1">Waste Generated (kg/month)</label>
            <input
              type="number"
              min="0"
              value={values.wasteKg}
              onChange={(e) => handleChange('wasteKg', e.target.value)}
              className="w-24 p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Monthly Carbon Footprint</p>
            <p className="text-3xl font-bold text-green-600">{totalEmissions.toFixed(2)} kg CO2</p>
          </div>
        </div>
      </div>
    </div>
  );
}