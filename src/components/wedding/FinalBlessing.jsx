import React from 'react';
import SectionReveal from './SectionReveal';

const TEMPLE_BG = '/images/temple-custom.jpg';
const DIYA_IMG = '/images/diya_img.png';

export default function FinalBlessing() {
    return (
        <section className="relative py-28 md:py-40 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={TEMPLE_BG}
                    alt="Majestic Dravidian temple at golden dawn with warm sacred light"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A0808]/40 via-[#3A1010]/40 to-[#1A0505]/90" />
            </div>

            {/* Diya lamps */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8">
                <div className="w-12 h-12 diya-flicker">
                    <img src={DIYA_IMG} alt="Brass oil lamp" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="w-12 h-12 diya-flicker" style={{ animationDelay: '0.5s' }}>
                    <img src={DIYA_IMG} alt="Brass oil lamp" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="w-12 h-12 diya-flicker" style={{ animationDelay: '1s' }}>
                    <img src={DIYA_IMG} alt="Brass oil lamp" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                <SectionReveal>
                    <p
                        className="font-body text-sm tracking-[0.3em] uppercase mb-6"
                        style={{ color: '#C5A059' }}
                    >
                        With Gratitude & Devotion
                    </p>

                    <h2
                        className="font-script text-4xl md:text-6xl mb-8 leading-relaxed gold-shimmer-text"
                    >
                        May this union be blessed for eternity
                    </h2>

                    <div className="flex items-center justify-center gap-4 my-8">
                        <div className="h-px w-16 gold-border-shimmer" />
                        <div className="w-2 h-2 rounded-full" style={{ background: '#C5A059' }} />
                        <div className="h-px w-16 gold-border-shimmer" />
                    </div>

                    <p
                        className="font-display text-lg md:text-xl italic leading-relaxed"
                        style={{ color: '#E8D5A3' }}
                    >
                        "Where two hearts meet, the gods rejoice, and the universe celebrates in eternal harmony."
                    </p>

                    <p
                        className="font-body text-sm mt-8 tracking-wider"
                        style={{ color: '#C5A059' }}
                    >
                        Vineeth Narayan Reddy and Jeevitha &middot; December 13-15, 2026
                    </p>
                </SectionReveal>
            </div>
        </section>
    );
}