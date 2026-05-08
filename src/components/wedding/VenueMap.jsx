import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VenueMap() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">Find Us</p>
        <h2 className="font-script text-4xl sm:text-5xl text-rose-700">Wedding Venue</h2>
      </motion.div>

      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl border border-rose-100 p-6 text-center shadow-sm">
          <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-rose-500" />
          </div>

          <h3 className="font-serif text-xl text-rose-800 font-semibold">Chitirala Kalyana Mandapam</h3>
          <p className="font-sans text-sm text-rose-600 mt-1 font-medium">Giddalur, Prakasam District</p>
          <p className="font-sans text-sm text-rose-500 mt-1">Andhra Pradesh</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              className="border-rose-200 text-rose-600 hover:bg-rose-50 font-sans"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Chitirala+Kalyana+Mandapam,+Giddalur,+Prakasam+Dist,+AP', '_blank', 'noopener,noreferrer')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}