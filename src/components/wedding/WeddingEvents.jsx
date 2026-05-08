import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Heart } from 'lucide-react';

const events = [
  {
    name: "Haldi Ceremony",
    date: "August 4, 2026",
    time: "9:00 AM - 12:00 PM",
    icon: Sun,
    description: "A beautiful ceremony to bless the couple with turmeric",
    color: "from-yellow-100 to-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-amber-200",
  },
  {
    name: "Muhurtham",
    date: "August 5, 2026",
    time: "7:30 AM - 9:00 AM",
    icon: Sparkles,
    description: "The auspicious wedding ceremony",
    color: "from-rose-100 to-pink-50",
    iconColor: "text-rose-500",
    borderColor: "border-rose-200",
  },
  {
    name: "Wedding Reception",
    date: "August 5, 2026",
    time: "7:00 PM - 10:00 PM",
    icon: Heart,
    description: "Join us for dinner and celebration",
    color: "from-purple-100 to-violet-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-200",
  },
];

export default function WeddingEvents() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">Save The Date</p>
        <h2 className="font-script text-4xl sm:text-5xl text-rose-700">Wedding Events</h2>
      </motion.div>

      <div className="max-w-md mx-auto space-y-6">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.name}
              className={`relative p-6 rounded-2xl bg-gradient-to-r ${event.color} border ${event.borderColor} shadow-sm`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              {index < events.length - 1 && (
                <div className="absolute left-1/2 -bottom-6 w-px h-6 bg-rose-200" />
              )}

              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center ${event.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-rose-800">{event.name}</h3>
                  <p className="text-sm text-rose-600 font-sans mt-1">{event.date}</p>
                  <p className="text-sm text-rose-500 font-sans">{event.time}</p>
                  <p className="text-xs text-rose-400 font-sans mt-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}