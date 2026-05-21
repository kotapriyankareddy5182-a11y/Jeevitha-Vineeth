import React from 'react';
import { motion } from 'framer-motion';

export default function MiddleImageSection() {
    return (
        <section className="py-8 bg-[#FDF5E6] flex justify-center items-center px-4 md:px-8">
            <motion.div 
                className="max-w-5xl w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="w-full relative shadow-2xl rounded-lg overflow-hidden border-4" style={{ borderColor: '#C5A059' }}>
                    <img 
                        src="/middle-image.png" 
                        alt="Wedding Decor" 
                        className="w-full h-auto object-cover block"
                    />
                </div>
            </motion.div>
        </section>
    );
}
