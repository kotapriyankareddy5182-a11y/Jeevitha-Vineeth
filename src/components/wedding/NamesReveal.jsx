import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const TEMPLE_BG = '/images/temple-custom.jpg';

export default function NamesReveal() {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden h-screen flex items-center justify-center">
            {/* Wedding Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={TEMPLE_BG} alt="Temple Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A0808]/40 via-[#3A1010]/40 to-[#1A0505]/90" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
                    style={{ color: '#E8D5A3' }}
                >
                    With the blessings of the Almighty
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="mb-4"
                >
                    <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-shimmer-text leading-tight">
                        Vineeth Narayan Reddy & Jeevitha
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="font-display text-lg md:text-xl italic mt-6"
                    style={{ color: 'rgba(232,213,163,0.85)' }}
                >
                    Request the honor of your gracious presence at the celebration of their union
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="font-body text-base mt-4 tracking-wide gold-shimmer-text"
                >
                    December 13-15, 2026
                </motion.p>
            </div>
        </section>
    );
}