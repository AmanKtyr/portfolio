import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

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
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(135deg, #0F172A, #1E293B, #0F172A)'
      : 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1), transparent 40%)'
        : 'radial-gradient(circle at 20% 50%, rgba(219, 234, 254, 0.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(233, 213, 255, 0.3), transparent 40%)'};
  }

  /* Grid pattern overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) =>
      theme.isDarkMode
        ? 'linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)'
        : 'linear-gradient(rgba(30, 64, 175, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 64, 175, 0.05) 1px, transparent 1px)'};
    background-size: 30px 30px;
    opacity: 0.5;
  }
`;

// Animated background elements
const CircleElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme, color }) =>
    color === 'primary'
      ? theme.isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.1)'
      : theme.isDarkMode ? 'rgba(147, 51, 234, 0.1)' : 'rgba(147, 51, 234, 0.05)'};
  filter: blur(${props => props.blur || '0px'});
  z-index: 1;
`;

const GlowingLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.isDarkMode ? 'rgba(56, 189, 248, 0.5)' : 'rgba(37, 99, 235, 0.5)'},
    transparent
  );
  z-index: 1;
`;

const TransitionLogo = styled(motion.div)`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.isDarkMode ? '#F1F5F9' : 'white'};
  z-index: 10000;
  position: relative;
  text-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 0 15px rgba(56, 189, 248, 0.5), 0 0 30px rgba(56, 189, 248, 0.3)'
      : '0 0 15px rgba(37, 99, 235, 0.5), 0 0 30px rgba(37, 99, 235, 0.3)'};
  letter-spacing: 2px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(to right, #F1F5F9, #38BDF8, #F1F5F9)'
      : 'linear-gradient(to right, white, #60A5FA, white)'};
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    color: ${({ theme }) => theme.isDarkMode ? '#38BDF8' : 'white'};
    text-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '0 0 15px rgba(56, 189, 248, 0.8), 0 0 30px rgba(56, 189, 248, 0.5)'
        : '0 0 15px rgba(37, 99, 235, 0.5), 0 0 30px rgba(37, 99, 235, 0.3)'};
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'linear-gradient(to right, #38BDF8, #9333EA)'
        : 'linear-gradient(to right, #3B82F6, #9333EA)'};
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.3)'
        : 'rgba(255, 255, 255, 0.1)'};
    backdrop-filter: blur(12px);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(56, 189, 248, 0.1), inset 0 0 20px rgba(56, 189, 248, 0.1)'
        : '0 8px 32px 0 rgba(31, 38, 135, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.1)'};
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
        ? 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)'
        : 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'};
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

        <TransitionLogo
          variants={logoVariants}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          AmAn-KtYr<span>.</span>
        </TransitionLogo>

        <TransitionLayer variants={layerVariants} />

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
                ? `rgba(${Math.random() > 0.5 ? '56, 189, 248' : '147, 51, 234'}, ${Math.random() * 0.3 + 0.2})`
                : `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '147, 51, 234'}, ${Math.random() * 0.3 + 0.2})`,
              boxShadow: isDarkMode
                ? `0 0 ${Math.random() * 10 + 5}px rgba(56, 189, 248, 0.3)`
                : `0 0 ${Math.random() * 10 + 5}px rgba(59, 130, 246, 0.3)`,
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
