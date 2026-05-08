import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-08-05T07:30:00');

function TimeBlock({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-rose-100 flex items-center justify-center px-4 py-3">
        <span className="font-serif text-3xl sm:text-4xl font-bold text-rose-700">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="mt-2 font-sans text-xs tracking-widest uppercase text-rose-400">{label}</p>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = WEDDING_DATE - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-rose-50/50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">
          Counting Down To
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-rose-700">Our Big Day</h2>
      </motion.div>

      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" delay={0.1} />
        <span className="font-serif text-2xl text-rose-300 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" delay={0.2} />
        <span className="font-serif text-2xl text-rose-300 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" delay={0.3} />
        <span className="font-serif text-2xl text-rose-300 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" delay={0.4} />
      </div>
    </section>
  );
}