import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CursorContainer, CursorDot, CursorRing, CursorTrail } from './CustomCursorStyles';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const trailsRef = useRef([]);
  const trailCount = 5;

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('clickable')) {
        setIsHovering(true);

        // Check for data attributes for custom cursor text and variant
        if (target.dataset.cursorText) {
          setCursorText(target.dataset.cursorText);
        } else if (target.closest('[data-cursor-text]')) {
          setCursorText(target.closest('[data-cursor-text]').dataset.cursorText);
        } else {
          setCursorText('');
        }

        if (target.dataset.cursorVariant) {
          setCursorVariant(target.dataset.cursorVariant);
        } else if (target.closest('[data-cursor-variant]')) {
          setCursorVariant(target.closest('[data-cursor-variant]').dataset.cursorVariant);
        } else {
          setCursorVariant('hover');
        }
      } else {
        setIsHovering(false);
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Create trail positions with delay
  const trailPositions = Array.from({ length: trailCount }).map((_, i) => {
    const delay = i * 0.05;
    return {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay
      }
    };
  });

  // Define cursor variants
  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: 'var(--primary-color)',
      mixBlendMode: 'difference'
    },
    hover: {
      scale: 1.5,
      opacity: 0.5,
      backgroundColor: 'var(--primary-color)',
      mixBlendMode: 'difference'
    },
    button: {
      scale: 1.8,
      opacity: 0.7,
      backgroundColor: 'var(--accent-color)',
      mixBlendMode: 'normal'
    },
    link: {
      scale: 2,
      opacity: 0.4,
      backgroundColor: 'var(--secondary-color)',
      mixBlendMode: 'normal'
    },
    text: {
      scale: 3,
      opacity: 0.2,
      backgroundColor: 'var(--primary-color)',
      mixBlendMode: 'exclusion'
    },
    clicking: {
      scale: 0.8,
      opacity: 1,
      backgroundColor: 'var(--primary-color)',
      mixBlendMode: 'difference'
    }
  };

  return (
    <CursorContainer>
      <CursorRing
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={isClicking ? 'clicking' : cursorVariant}
        variants={cursorVariants}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="cursor-text"
          >
            {cursorText}
          </motion.span>
        )}
      </CursorRing>

      <CursorDot
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
      />

      {trailPositions.map((position, i) => (
        <CursorTrail
          key={i}
          ref={el => trailsRef.current[i] = el}
          animate={{
            x: position.x,
            y: position.y,
            opacity: 1 - (i / trailCount),
            scale: 1 - (i / (trailCount * 2))
          }}
          transition={position.transition}
        />
      ))}
    </CursorContainer>
  );
};

export default CustomCursor;
