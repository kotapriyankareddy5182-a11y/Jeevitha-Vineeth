import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import brideImg from '../../assets/bride.jpeg';
import groomImg from '../../assets/groom.jpeg';

const SILK_BG = '/images/silk_bg.png';

function PersonCard({ image, name, parents, subtitle, delay = 0, altText }) {
  return (
    <SectionReveal delay={delay} className="flex flex-col items-center">
      {/* Decorative frame */}
      <div className="relative mb-6">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Gold border ring */}
          <div
            className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 gold-border-shimmer"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-secondary/30">
              <img
                src={image}
                alt={altText}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <h3 className="font-script text-4xl md:text-5xl mb-2 gold-shimmer-text">{name}</h3>
      <p className="font-display text-base md:text-lg italic mb-1" style={{ color: 'rgba(232,213,163,0.7)' }}>{subtitle}</p>
      <p className="font-body text-sm text-center max-w-xs" style={{ color: 'rgba(232,213,163,0.55)' }}>
        {parents}
      </p>
    </SectionReveal>
  );
}

export default function BrideGroomSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/bridegroom-bg.jpg" alt="Bride and Groom Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0505]/95 via-[#2A0808]/70 to-[#1A0505]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(232,213,163,0.7)' }}>The Couple</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold gold-shimmer-text">Two Souls, One Journey</h2>
          <GoldDivider className="mt-4" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          <PersonCard
            image={groomImg}
            name="Vineeth Narayan Reddy"
            subtitle="The Groom"

            delay={0.1}
            altText="Groom performing traditional South Indian wedding ritual"
          />
          <PersonCard
            image={brideImg}
            name="Jeevitha"
            subtitle="The Bride"

            delay={0.3}
            altText="Bride's hands with henna and temple gold jewelry holding lotus"
          />
        </div>
      </div>
    </section>
  );
}