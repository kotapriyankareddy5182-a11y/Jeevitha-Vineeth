import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const MANDAP_BG = 'https://5.imimg.com/data5/SELLER/Default/2022/2/DE/FB/KR/141944225/4035-12-7-mbox-45.jpg';
const DIYA_IMG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/894bf2655_generated_fadd0c9e.png';

const WEDDING_DATE = new Date('2026-12-14T06:30:00');

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-sm border"
        style={{
          borderColor: 'rgba(197, 160, 89, 0.5)',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span className="font-display text-3xl md:text-4xl font-bold gold-shimmer-text">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span
        className="font-body text-xs tracking-[0.2em] uppercase mt-3"
        style={{ color: '#C5A059' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = WEDDING_DATE - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={MANDAP_BG}
          alt="Grand wedding mandap with sacred fire and elaborate decorations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/85 via-[#D63031]/80 to-[#E65C00]/85" />
      </div>

      {/* Diya decorations */}
      <div className="absolute bottom-8 left-8 w-16 h-16 opacity-60 diya-flicker hidden md:block">
        <img src={DIYA_IMG} alt="Traditional brass oil lamp" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16 opacity-60 diya-flicker hidden md:block" style={{ animationDelay: '1s' }}>
        <img src={DIYA_IMG} alt="Traditional brass oil lamp" className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6">
        <SectionReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#C5A059' }}>
            Counting Down To
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#FDF5E6' }}>
            The Sacred Muhurtham
          </h2>
          <p className="font-body text-base mb-12" style={{ color: '#E8D5A3' }}>
            December 14, 2026 &middot; 6:30 AM
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}