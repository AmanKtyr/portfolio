import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
`;

export const CursorRing = styled(motion.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  justify-content: center;

  .cursor-text {
    color: white;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const CursorDot = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
  mix-blend-mode: difference;
`;

export const CursorTrail = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;
  mix-blend-mode: difference;
`;
