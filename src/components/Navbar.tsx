import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white py-4 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-6 w-6" />
            <span className="text-xl font-bold">Trash to Track</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/donate" className="hover:text-green-200 transition-colors">Donate</Link>
            <Link to="/kids" className="hover:text-green-200 transition-colors">Kids Zone</Link>
            <Link to="/calculator" className="hover:text-green-200 transition-colors">Calculators</Link>
            <Link to="/tracker" className="hover:text-green-200 transition-colors">Track Impact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-green-700 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-green-200" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/donate" className="hover:text-green-200" onClick={() => setIsOpen(false)}>Donate</Link>
              <Link to="/kids" className="hover:text-green-200" onClick={() => setIsOpen(false)}>Kids Zone</Link>
              <Link to="/calculator" className="hover:text-green-200" onClick={() => setIsOpen(false)}>Calculators</Link>
              <Link to="/tracker" className="hover:text-green-200" onClick={() => setIsOpen(false)}>Track Impact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}