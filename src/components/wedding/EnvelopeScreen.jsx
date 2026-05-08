import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import envelopeImg from '../../assets/final-envelope.png';

export default function EnvelopeScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f7ebeb] overflow-hidden"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative cursor-pointer w-full max-w-xl p-6 flex flex-col items-center justify-center"
          onClick={handleOpen}
          whileHover={!isOpening ? { scale: 1.03 } : {}}
          whileTap={!isOpening ? { scale: 0.97 } : {}}
          animate={isOpening ? { scale: 1.2, opacity: 0, filter: "blur(10px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          {/* Static Image representing the Envelope/Card */}
          <img 
            src={envelopeImg} 
            alt="Wedding Envelope" 
            className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
          />
          
          {/* Center Overlay for Names */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-4 sm:mt-8">
             <div className="bg-[#fffbf9]/95 backdrop-blur-md px-8 sm:px-12 py-6 sm:py-8 rounded-2xl shadow-xl flex flex-col items-center border border-rose-100/50">
               <p className="font-script text-[#4a1c1c] text-4xl sm:text-6xl font-bold drop-shadow-sm text-center">Prasanna</p>
               <span className="font-serif text-2xl sm:text-3xl text-rose-500 my-2">&</span>
               <p className="font-script text-[#4a1c1c] text-4xl sm:text-6xl font-bold drop-shadow-sm text-center">Ganesh</p>
               
               <p className="font-serif text-[#4a1c1c] text-[10px] sm:text-xs tracking-[0.4em] uppercase mt-8 font-bold bg-rose-50 px-5 py-2 rounded-full shadow-sm border border-rose-200 animate-pulse">
                 Tap to Open
               </p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}