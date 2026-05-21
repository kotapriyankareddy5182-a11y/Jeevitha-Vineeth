import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const GALLERY_IMAGES = [
    { src: '/gallery/memory-1.jpg', alt: 'Beautiful couple memory' },
    { src: '/gallery/memory-2.png', alt: 'Pre-wedding photoshoot' },
    { src: '/gallery/memory-3.jpg', alt: 'Joyful moment' },
    { src: '/gallery/memory-4.jpg', alt: 'Traditional attire' },
    { src: '/gallery/memory-5.jpg', alt: 'Evening memory' },
    { src: '/gallery/memory-6.png', alt: 'Beautiful memory' },
    { src: '/gallery/memory-7.jpg', alt: 'Beautiful memory' },
    { src: '/gallery/memory-8.png', alt: 'Beautiful memory' },
];

export default function GallerySection() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="relative py-20 md:py-28 overflow-hidden" >
            <div className="max-w-6xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-[#E8D5A3] mb-3">
                        Moments
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold">
                        A Glimpse of Our Celebration
                    </h2>
                    <GoldDivider className="mt-4" />
                </SectionReveal>

                {/* Masonry-style grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {GALLERY_IMAGES.map((img, index) => (
                        <SectionReveal key={index} delay={index * 0.05}>
                            <div
                                className={`relative overflow-hidden rounded-sm cursor-pointer group ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                                onClick={() => setSelected(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ minHeight: index % 5 === 0 ? '300px' : '200px' }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                                <div className="absolute inset-0 border border-transparent group-hover:border-secondary/50 transition-all duration-500 rounded-sm" />
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90"
                        onClick={() => setSelected(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selected.src}
                            alt={selected.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-sm"
                        />
                        <button
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ background: 'rgba(197,160,89,0.3)', color: '#FDF5E6' }}
                            onClick={() => setSelected(null)}
                        >
                            <span className="font-display text-xl">&times;</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}