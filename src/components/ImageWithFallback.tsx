import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallback,
  alt,
  className = "",
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const webpSrc = src.replace(/\.(jpg|jpeg|png)($|\?)/, '.webp$2');
  
  if (prefersReducedMotion) {
    return (
      <picture ref={ref}>
        <source srcSet={webpSrc} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <img
          src={fallback}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          {...props}
        />
      </picture>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <img
          src={fallback}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          {...props}
        />
      </picture>
    </motion.div>
  );
};

export default ImageWithFallback;