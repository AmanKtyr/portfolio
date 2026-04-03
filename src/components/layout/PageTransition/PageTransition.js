import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeContext } from '../../../context/ThemeContext';

const PageTransitionWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TransitionLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(135deg, #030712 0%, #111827 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at 0% 0%, var(--primary-color) 0%, transparent 40%), radial-gradient(circle at 100% 100%, var(--primary-color) 0%, transparent 40%)'
        : 'radial-gradient(circle at 0% 0%, rgba(128, 0, 0, 0.1) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(128, 0, 0, 0.1) 0%, transparent 40%)'};
    opacity: 0.2;
  }

  /* Digital grid overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(var(--primary-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--primary-color) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.03;
  }
`;

// Animated background elements
const CircleElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme, color }) =>
    color === 'primary'
      ? theme.isDarkMode ? 'rgba(128, 0, 0, 0.15)' : 'rgba(128, 0, 0, 0.1)'
      : theme.isDarkMode ? 'rgba(90, 0, 0, 0.1)' : 'rgba(90, 0, 0, 0.05)'};
  filter: blur(${props => props.blur || '0px'});
  z-index: 1;
`;

const GlowingLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: ${({ theme }) => 
    theme.isDarkMode 
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)' 
      : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'};
  z-index: 1;
`;

const TransitionLogo = styled(motion.div)`
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? '#ffffff' : 'var(--dark-color)'};
  z-index: 100;
  position: relative;
  font-family: 'monospace';
  text-transform: uppercase;
  letter-spacing: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  /* Subtitle for technical feel */
  & .sub {
    font-size: 0.8rem;
    letter-spacing: 4px;
    color: var(--primary-color);
    font-weight: 500;
    opacity: 0.8;
  }

  span {
    color: var(--primary-color);
  }

  /* Modern Glass Container */
  &::before {
    content: '';
    position: absolute;
    inset: -40px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.6)'
        : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(20px);
    border-radius: 4px;
    z-index: -1;
    border: 1px solid var(--primary-color);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
  }

  /* Glowing ring effect */
  &::after {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    border-radius: 50%;
    z-index: -2;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(128, 0, 0, 0.2) 0%, transparent 70%)'
        : 'radial-gradient(circle, rgba(128, 0, 0, 0.2) 0%, transparent 70%)'};
    animation: pulse 4s ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

const PageTransition = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const containerVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  const layerVariants = {
    initial: {
      height: "100%",
    },
    animate: {
      height: 0,
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    exit: {
      height: "100%",
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const logoVariants = {
    initial: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    animate: {
      y: -50,
      opacity: 0,
      scale: 0.8,
      rotate: isDarkMode ? -5 : 5,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Enhanced background elements
  const circles = [
    { size: 300, x: '20%', y: '30%', blur: '60px', color: 'primary', duration: 20 },
    { size: 200, x: '80%', y: '60%', blur: '40px', color: 'secondary', duration: 15 },
    { size: 150, x: '10%', y: '70%', blur: '30px', color: 'primary', duration: 25 },
    { size: 250, x: '70%', y: '20%', blur: '50px', color: 'secondary', duration: 18 },
  ];

  // Glowing lines
  const lines = [
    { width: '40%', x: '30%', y: '25%', duration: 8, delay: 0 },
    { width: '30%', x: '60%', y: '65%', duration: 12, delay: 2 },
    { width: '20%', x: '10%', y: '45%', duration: 10, delay: 4 },
  ];

  // Particles for enhanced visual effect
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <>
      <PageTransitionWrapper
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Background circles */}
        {circles.map((circle, index) => (
          <CircleElement
            key={`circle-${index}`}
            color={circle.color}
            blur={circle.blur}
            style={{
              width: circle.size,
              height: circle.size,
              left: circle.x,
              top: circle.y,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing lines */}
        {lines.map((line, index) => (
          <GlowingLine
            key={`line-${index}`}
            style={{
              width: line.width,
              left: line.x,
              top: line.y,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              width: [`${parseInt(line.width) - 5}%`, `${parseInt(line.width) + 5}%`, `${parseInt(line.width) - 5}%`],
              x: [0, 20, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <TransitionLayer variants={layerVariants} />

        <TransitionLogo
          variants={logoVariants}
          animate={{
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          <div>Aman <span>Katiyar</span></div>
          <div className="sub">SYSTEM_INITIALIZING...</div>
        </TransitionLogo>

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: isDarkMode
                ? `rgba(${Math.random() > 0.5 ? '56, 189, 248' : '90, 0, 0'}, ${Math.random() * 0.3 + 0.2})`
                : `rgba(${Math.random() > 0.5 ? '128, 0, 0' : '90, 0, 0'}, ${Math.random() * 0.3 + 0.2})`,
              boxShadow: isDarkMode
                ? `0 0 ${Math.random() * 10 + 5}px rgba(128, 0, 0, 0.3)`
                : `0 0 ${Math.random() * 10 + 5}px rgba(128, 0, 0, 0.3)`,
              opacity: 0.6,
              zIndex: 10001,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </PageTransitionWrapper>
      {children}
    </>
  );
};

export default PageTransition;
