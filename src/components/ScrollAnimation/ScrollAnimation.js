import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
