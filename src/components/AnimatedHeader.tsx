import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(
    scrollY,
    [0, 50],
    [1, 0.95]
  );

  const headerY = useTransform(
    scrollY,
    [0, 100],
    [0, -20]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-8 md:h-10 z-[999] overflow-hidden"
      style={{
        opacity: headerOpacity,
        y: headerY,
      }}
    >
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" />
      
      {/* Animated Background */}
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 h-full w-[200%] flex"
          style={{
            animation: 'slideRight 20s linear infinite',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            zIndex: 1
          }}
        >
          <div 
            className="w-1/2 h-full bg-repeat-x"
            style={{
              backgroundImage: 'url("/assets/Screenshot 2025-03-13 131621.png")',
              backgroundSize: 'auto 100%',
              filter: 'brightness(1.2) contrast(1.2)',
            }}
          />
          <div 
            className="w-1/2 h-full bg-repeat-x"
            style={{
              backgroundImage: 'url("/assets/Screenshot 2025-03-13 131621.png")',
              backgroundSize: 'auto 100%',
              filter: 'brightness(1.2) contrast(1.2)',
            }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear"
        }}
        style={{ zIndex: 2 }}
      />
    </motion.div>
  );
};

export default AnimatedHeader;