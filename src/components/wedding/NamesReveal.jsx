import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const STAGE_BG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/7aa127059_generated_f93ada1a.png';

export default function NamesReveal() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Wedding Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={STAGE_BG} alt="Wedding Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A0808]/40 via-[#3A1010]/40 to-[#1A0505]/90" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-body text-sm tracking-[0.3em] uppercase mb-8"
                    style={{ color: 'rgba(232,213,163,0.7)' }}
                >
                    Together with their families
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-script text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight gold-shimmer-text"
                >
                    Vineeth Narayan Reddy
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center gap-4 my-6"
                >
                    <div className="h-px w-16 md:w-24 gold-border-shimmer" />
                    <span className="font-display text-2xl md:text-3xl italic" style={{ color: '#C5A059' }}>&</span>
                    <div className="h-px w-16 md:w-24 gold-border-shimmer" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="font-script text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight gold-shimmer-text"
                >
                    Jeevitha
                </motion.h2>

                <GoldDivider />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1 }}
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