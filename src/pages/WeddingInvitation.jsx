import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/wedding/HeroSection';
import NamesReveal from '../components/wedding/NamesReveal';
import BrideGroomSection from '../components/wedding/BrideGroomSection';
import EventsSection from '../components/wedding/EventsSection';
import CountDownSection from "../components/wedding/CountDownSection";
import GallerySection from '../components/wedding/GallerySection';
import LocationSection from '../components/wedding/LocationSection';
import RSVPSection from '../components/wedding/RSVPSection';
import FinalBlessing from '../components/wedding/FinalBlessing';
import FallingPetals from '../components/wedding/FallingPetals';
import AudioToggle from '../components/wedding/AudioToggle';

import AutoScroll from '../components/wedding/AutoScroll';

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#FDF5E6' }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2 }}
          >
            <HeroSection onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Falling petals disabled */}

            {/* Audio toggle */}
            <AudioToggle />

            {/* All sections */}
            <AutoScroll />
            <NamesReveal />
            <BrideGroomSection />

            <EventsSection />
            <CountDownSection />
            <GallerySection />
            <LocationSection />
            <RSVPSection />
            <FinalBlessing />

            {/* Footer */}
            <footer
              className="py-8 text-center"
              style={{ background: '#1a0a0b' }}
            >
              <p className="font-body text-xs tracking-[0.15em]" style={{ color: '#C5A059' }}>
                Vineeth Narayan Reddy and Jeevitha &middot; December 13-15, 2026
              </p>
              <p className="font-body text-xs mt-2" style={{ color: 'rgba(197,160,89,0.5)' }}>
                Made with love and devotion
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}