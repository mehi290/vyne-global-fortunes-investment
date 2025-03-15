import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <div className="relative h-8 md:h-12 w-auto">
      {/* Empty container to maintain spacing */}
      <div className="h-full w-auto relative z-10" />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{
          x: '100%'
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Gold Accent Border */}
      <motion.div
        className="absolute inset-0 rounded"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [0.98, 1, 0.98]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          background: `linear-gradient(45deg, 
            transparent 0%, 
            ${`#C6A962`}20 25%, 
            ${`#C6A962`}40 50%, 
            ${`#C6A962`}20 75%, 
            transparent 100%
          )`
        }}
      />

      {/* Subtle Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-secondary/5 blur-xl"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedLogo;