import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    url: "https://media.base44.com/images/public/69fa0040b0ba16f484e70591/6f29242ef_image.png",
    caption: "Prasanna & Ganesh",
  },
  {
    url: "https://media.base44.com/images/public/69fa0040b0ba16f484e70591/0aecf0e04_image.png",
    caption: "Together",
  },
  {
    url: "https://media.base44.com/images/public/69fa0040b0ba16f484e70591/ef28fc4d2_image.png",
    caption: "Our Story",
  },
  {
    url: "https://media.base44.com/images/public/69fa0040b0ba16f484e70591/d24db7c2d_image.png",
    caption: "Always Together",
  },
  {
    url: "https://media.base44.com/images/public/69fa0040b0ba16f484e70591/746ed5a15_image.png",
    caption: "Love & Joy",
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-rose-50/30">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">Memories</p>
        <h2 className="font-script text-4xl sm:text-5xl text-rose-700">Our Moments</h2>
      </motion.div>

      <div className="max-w-sm mx-auto flex flex-col items-center gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent py-4 px-4">
                <p className="font-script text-xl text-white text-center">{photo.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}