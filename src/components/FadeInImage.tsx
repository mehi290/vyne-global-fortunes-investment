import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  delay?: number;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ delay = 0, ...props }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <img loading="lazy" decoding="async" {...props} />;
  }

  return (
    <motion.img
      loading="lazy"
      decoding="async"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      {...props}
    />
  );
};

export default FadeInImage;