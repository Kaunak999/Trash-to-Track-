import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Trash to Track</h3>
            <p className="text-gray-400">
              Making e-waste management sustainable and accessible for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white">Impact</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">info@trashtotrack.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">123 Green Street, Eco City</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest initiatives</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white mb-2"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Trash to Track. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}