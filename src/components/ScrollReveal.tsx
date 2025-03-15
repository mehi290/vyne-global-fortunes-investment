import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  delay?: number;
}

const variants: Record<string, Variants> = {
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-down': {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade',
  delay = 0
}) => {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;