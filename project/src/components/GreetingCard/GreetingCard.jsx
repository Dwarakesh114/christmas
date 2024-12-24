import React from 'react';
import { motion } from 'framer-motion';

export default function GreetingCard() {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg p-8 max-w-lg w-11/12 shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Merry Christmas! 🎄
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Wishing you a magical and joyful Christmas filled with love, 
            laughter, and unforgettable moments with your loved ones.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="text-4xl">🎅</span>
            <span className="text-4xl">🎁</span>
            <span className="text-4xl">⛄</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}