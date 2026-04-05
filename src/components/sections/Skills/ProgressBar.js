import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
`;

const ProgressBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  
  span {
    font-size: 0.9rem;
    color: #94a3b8;
    letter-spacing: 0.3px;
    
    &.skill-name {
      font-weight: 500;
      color: #e2e8f0;
    }
    
    &.percentage {
      font-weight: 600;
      color: var(--primary-color);
      text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.3);
    }
  }
`;

const ProgressBarTrack = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  overflow: visible;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--primary-color));
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.3);

  /* Glowing head */
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 6px;
    height: 12px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 8px #ffffff, 0 0 12px var(--primary-color);
    opacity: 0.8;
  }
`;

const ProgressBar = ({ skill, percentage }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { 
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1] // cubic-bezier easing for a nice spring effect
        }
      });
    }
  }, [controls, inView, percentage]);

  return (
    <ProgressBarContainer ref={ref}>
      <ProgressBarLabel>
        <span className="skill-name">{skill}</span>
      </ProgressBarLabel>
      <ProgressBarTrack>
        <ProgressBarFill 
          initial={{ width: 0 }}
          animate={controls}
        />
      </ProgressBarTrack>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

