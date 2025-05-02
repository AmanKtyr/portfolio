import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
`;

const TransitionLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
`;

const TransitionLogo = styled(motion.div)`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  z-index: 10000;
  position: relative;
  
  span {
    color: white;
  }
`;

const PageTransition = ({ children }) => {
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
    },
    animate: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <PageTransitionWrapper
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <TransitionLogo variants={logoVariants}>
          JD<span>.</span>
        </TransitionLogo>
        <TransitionLayer variants={layerVariants} />
      </PageTransitionWrapper>
      {children}
    </>
  );
};

export default PageTransition;
