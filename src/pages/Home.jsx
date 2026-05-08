import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopeScreen from '../components/wedding/EnvelopeScreen';
import HeroSection from '../components/wedding/HeroSection';
import BrideGroomSection from '../components/wedding/BrideGroomSection';
import WeddingEvents from '../components/wedding/WeddingEvents';
import CountdownTimer from '../components/wedding/CountdownTimer';
import VenueMap from '../components/wedding/VenueMap';
import PhotoGallery from '../components/wedding/PhotoGallery';
import RSVPSection from '../components/wedding/RSVPSection';
import Footer from '../components/wedding/Footer';
import BackgroundMusic from '../components/wedding/BackgroundMusic';

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {!envelopeOpened && (
          <EnvelopeScreen onOpen={() => setEnvelopeOpened(true)} />
        )}
      </AnimatePresence>

      {envelopeOpened && (
        <main className="overflow-x-hidden">
          <BackgroundMusic play={envelopeOpened} />
          <HeroSection />
          <BrideGroomSection />
          <WeddingEvents />
          <CountdownTimer />
          <PhotoGallery />
          <VenueMap />
          <RSVPSection />
          <Footer />
        </main>
      )}
    </div>
  );
}