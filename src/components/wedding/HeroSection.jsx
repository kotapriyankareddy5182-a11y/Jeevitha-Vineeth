import React from 'react';
import { motion } from 'framer-motion';
import heroBgImage from '../../assets/hero-bg.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#f7ebeb] overflow-hidden">
      
      {/* Background Image Container */}
      {/* On mobile, it covers the screen. On desktop, we limit the width to maintain the portrait aspect ratio of the card so it doesn't crop Ganesha or the couple. */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
         <img
           src={heroBgImage}
           alt="Wedding Background"
           className="w-full h-full object-cover md:object-contain object-center"
         />
      </div>

      {/* Content overlay in the middle */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 w-full max-w-lg mt-10 sm:mt-0">
        
        <motion.p
          className="font-serif text-xs sm:text-sm tracking-[0.4em] uppercase text-rose-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          We Invite You
        </motion.p>

        <motion.h1
          className="font-script text-5xl sm:text-7xl text-rose-800 leading-tight drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Prasanna
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 my-2 sm:my-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="h-[1px] w-12 bg-rose-400" />
          <span className="font-script text-3xl sm:text-5xl text-rose-600 drop-shadow-sm">&</span>
          <div className="h-[1px] w-12 bg-rose-400" />
        </motion.div>

        <motion.h1
          className="font-script text-5xl sm:text-7xl text-rose-800 leading-tight drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Ganesh Reddy
        </motion.h1>

        <motion.div
          className="mt-6 sm:mt-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="font-serif text-sm sm:text-base tracking-widest text-rose-900 uppercase font-bold bg-white/40 px-4 py-1 rounded-full backdrop-blur-sm">August 4 & 5, 2026</p>
        </motion.div>
      </div>

    </section>
  );
}