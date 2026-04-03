import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const LoaderContainer = styled.div`
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
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--primary-color) 0%, transparent 80%);
    opacity: 0.03;
    pointer-events: none;
  }
`;

const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin-bottom: 2rem;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  path {
    stroke: var(--primary-color);
    stroke-width: 1.5;
    fill: transparent;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LoadingText = styled.div`
  font-family: 'Space Mono', monospace;
  letter-spacing: 8px;
  color: var(--text-color);
  font-weight: 300;
  font-size: 0.7rem;
  text-transform: uppercase;
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    opacity: 0;
    transform: translateY(10px);
  }
`;

const StatusLine = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  color: var(--primary-color);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 10%;
  font-family: 'Space Mono', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
  pointer-events: none;
`;

const ScanLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--primary-color), transparent);
  opacity: 0.1;
  pointer-events: none;
`;

const Loader = ({ finishLoading }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const scanLineRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('span');
    const path = logoRef.current.querySelector('path');
    
    // Path drawing setup
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: finishLoading
        });
      }
    });

    // Initial flicker
    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 })
    .to(path, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power2.inOut"
    })
    .to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.7)"
    }, "-=1.5")

    // Scan line animation (independent of main timeline)
    gsap.to(scanLineRef.current, {
      top: "100%",
      duration: 2,
      repeat: -1,
      ease: "none"
    });


    // Percentage counter logic
    const countObj = { val: 0 };
    gsap.to(countObj, {
      val: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(countObj.val))
    });

    return () => tl.kill();
  }, [finishLoading]);

  const text = "INITIALIZING_SYSTEM";

  return (
    <LoaderContainer ref={containerRef}>
      <ScanLine ref={scanLineRef} />
      
      <LogoWrapper ref={logoRef}>
        <svg viewBox="0 0 100 100">
          <path d="M 20 80 L 50 20 L 80 80 M 35 50 L 65 50" />
        </svg>
      </LogoWrapper>
      
      <TextContainer>
        <LoadingText ref={textRef}>
          {text.split('').map((char, i) => (
            <span key={i}>{char === '_' ? '\u00A0' : char}</span>
          ))}
        </LoadingText>
        <StatusLine>
          {percent < 100 ? `SYNCING_CORES... [${percent}%]` : "SYSTEM_READY"}
        </StatusLine>
      </TextContainer>

      <Counter ref={counterRef}>
        {percent.toString().padStart(3, '0')}
      </Counter>
    </LoaderContainer>
  );
};

export default Loader;
