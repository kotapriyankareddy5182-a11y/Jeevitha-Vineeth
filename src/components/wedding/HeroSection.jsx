import React from 'react';
import { motion } from 'framer-motion';

const TEMPLE_BG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/ea6eaa011_generated_eb0bf413.png';

export default function HeroSection({ onOpen }) {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={TEMPLE_BG}
                    alt="Golden morning light hitting the intricate stone carvings of a Dravidian temple tower"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A0808]/40 via-[#3A1010]/40 to-[#1A0505]/90" />
            </div>


            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 text-center px-6"
            >
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
                    style={{ color: '#E8D5A3' }}
                >
                    With the blessings of the Almighty
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="mb-4"
                >
                    <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-shimmer-text leading-tight">
                        Vineeth Narayan Reddy & Jeevitha
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="font-display text-lg md:text-xl tracking-[0.2em] mb-2"
                    style={{ color: '#E8D5A3' }}
                >
                    are getting married
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="font-body text-sm tracking-[0.15em] mb-12"
                    style={{ color: '#C5A059' }}
                >
                    December 15, 2026 &middot; Chennai
                </motion.p>

                {/* Open Invitation button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    onClick={onOpen}
                    className="relative group cursor-pointer"
                >
                    <div
                        className="px-10 py-4 rounded-sm font-display text-lg md:text-xl tracking-[0.15em] transition-all duration-500 border"
                        style={{
                            borderColor: '#C5A059',
                            color: '#C5A059',
                            background: 'rgba(197, 160, 89, 0.1)',
                        }}
                    >
                        <span className="relative z-10">Open Invitation</span>
                        <div
                            className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                boxShadow: '0 0 30px rgba(197, 160, 89, 0.5), inset 0 0 30px rgba(197, 160, 89, 0.1)',
                            }}
                        />
                    </div>
                </motion.button>
            </motion.div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}