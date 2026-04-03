import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const fill = keyframes`
  0% {
    fill: transparent;
  }
  100% {
    fill: var(--primary-color);
  }
`;

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  path {
    stroke: var(--primary-color);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 3s linear infinite, ${fill} 2s ease-in-out forwards;
    animation-delay: 0.5s;
  }
`;

const LoadingText = styled(motion.div)`
  margin-top: 2rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 5px;
  color: var(--text-color);
  font-weight: 300;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const ProgressInner = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--primary-color);
  width: 0%;
`;

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      <LoaderContainer
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        <LogoWrapper>
          <svg viewBox="0 0 100 100">
            <motion.path
              d="M 20 80 L 50 20 L 80 80 M 35 50 L 65 50"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </LogoWrapper>
        
        <LoadingText
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading Portfolio
        </LoadingText>

        <ProgressBar>
          <ProgressInner 
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </ProgressBar>
      </LoaderContainer>
    </AnimatePresence>
  );
};

export default Loader;

