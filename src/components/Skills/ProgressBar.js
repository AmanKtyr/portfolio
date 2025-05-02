import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const ProgressBarTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => 
    theme.isDarkMode 
      ? 'rgba(30, 41, 59, 0.3)' 
      : 'rgba(226, 232, 240, 0.5)'};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
`;

const ProgressBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-size: 0.9rem;
    color: var(--gray-color);
    
    &.skill-name {
      font-weight: 600;
      color: var(--text-color);
    }
    
    &.percentage {
      font-weight: 500;
      color: var(--primary-color);
    }
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
        <span className="percentage">{percentage}%</span>
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
