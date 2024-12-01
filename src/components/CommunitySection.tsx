import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Award, Calendar } from 'lucide-react';

export function CommunitySection() {
  const events = [
    {
      title: "E-Waste Collection Drive",
      date: "March 15, 2024",
      location: "City Center Park",
      description: "Join us for our monthly e-waste collection event"
    },
    {
      title: "Recycling Workshop",
      date: "March 22, 2024",
      location: "Community Center",
      description: "Learn about proper e-waste disposal techniques"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-600">{event.location}</p>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Community Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">5,000+</h4>
                <p>Active Members</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">10,000+</h4>
                <p>Community Posts</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">150+</h4>
                <p>Success Stories</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}