import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { isLowPerformanceDevice } from '../../utils/performanceUtils';

const ScrollAnimation = ({ 
  children, 
  threshold = 0.1,
  triggerOnce = true,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.5,
  className = '',
  style = {}
}) => {
  const isLowPerformance = useMemo(() => isLowPerformanceDevice(), []);
  
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '50px' // Start animation slightly before element comes into view
  });

  // Memoize animations to prevent unnecessary re-renders
  const animations = useMemo(() => ({
    fadeUp: {
      hidden: { opacity: 0, y: isLowPerformance ? 20 : 50 }, // Reduced movement for low-performance devices
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration, // Faster animations for low-performance
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeDown: {
      hidden: { opacity: 0, y: isLowPerformance ? -20 : -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: isLowPerformance ? -20 : -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeRight: {
      hidden: { opacity: 0, x: isLowPerformance ? 20 : 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    zoom: {
      hidden: { opacity: 0, scale: isLowPerformance ? 0.9 : 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    flip: {
      hidden: { opacity: 0, rotateY: isLowPerformance ? 45 : 90 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: {
          duration: isLowPerformance ? duration * 0.7 : duration,
          delay,
          ease: 'easeOut'
        }
      }
    }
  }), [isLowPerformance, duration, delay]);

  const selectedAnimation = animations[animation] || animations.fadeUp;

  // For low-performance devices, use simpler animations
  if (isLowPerformance && (animation === 'flip' || animation === 'zoom')) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      className={className}
      style={style}
      // Performance optimizations
      layout={false} // Disable layout animations for better performance
      transition={{
        type: "tween", // Use tween instead of spring for better performance
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
