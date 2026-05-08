import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-white to-rose-50 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-3xl text-rose-600 mb-3">Prasanna & Ganesh Reddy</p>
        <div className="flex items-center justify-center gap-2 text-rose-400">
          <div className="w-8 h-px bg-rose-200" />
          <Heart className="w-4 h-4 fill-rose-400" />
          <div className="w-8 h-px bg-rose-200" />
        </div>
        <p className="mt-4 font-sans text-xs text-rose-300 tracking-wider">
          August 4 & 5, 2026
        </p>
        <p className="mt-2 font-sans text-xs text-rose-300">
          We can't wait to celebrate with you!
        </p>
      </motion.div>
    </footer>
  );
}