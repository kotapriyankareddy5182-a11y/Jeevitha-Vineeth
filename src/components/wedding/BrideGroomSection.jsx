import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const BRIDE_IMAGE = "https://media.base44.com/images/public/user_69993758bcf017a40f75448f/1d0b3b39a_image.png";
const GROOM_IMAGE = "https://media.base44.com/images/public/user_69993758bcf017a40f75448f/c289b80f4_image.png";

function PersonCard({ image, name, role, delay, imageClass = "object-cover" }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="relative">
        {/* Decorative border */}
        <div className="absolute -inset-3 rounded-full border-2 border-rose-200 border-dashed" />
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={image}
            alt={name}
            className={`w-full h-full ${imageClass}`}
          />
        </div>
      </div>
      <h3 className="mt-6 font-script text-3xl sm:text-4xl text-rose-700">{name}</h3>
      <p className="mt-1 font-serif text-sm tracking-[0.2em] uppercase text-rose-400">{role}</p>
    </motion.div>
  );
}

export default function BrideGroomSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50/50 to-white">
      <motion.p
        className="text-center font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Couple
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 max-w-2xl mx-auto">
        <PersonCard image={BRIDE_IMAGE} name="Prasanna" role="The Bride" delay={0.2} />

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
            <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
          </div>
        </motion.div>

        <PersonCard 
          image={GROOM_IMAGE} 
          name="Ganesh Reddy" 
          role="The Groom" 
          delay={0.4} 
          imageClass="object-cover object-top"
        />
      </div>
    </section>
  );
}