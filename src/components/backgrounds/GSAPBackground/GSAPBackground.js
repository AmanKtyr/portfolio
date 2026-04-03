import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.5s ease;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: ${({ theme }) => theme.isDarkMode ? 0.4 : 0.15};
  will-change: transform;
`;

// Using subtle professional colors: royal blue, purple, cyan
const Orb1 = styled(Orb)`
  width: 45vw;
  height: 45vw;
  background: ${({ theme }) => theme.isDarkMode 
    ? 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0) 70%)'
    : 'radial-gradient(circle, rgba(217, 44, 84, 0.3) 0%, rgba(217, 44, 84, 0) 70%)'}; /* Use Maroon in light mode */
  top: -10%;
  left: -10%;
`;

const Orb2 = styled(Orb)`
  width: 55vw;
  height: 55vw;
  background: ${({ theme }) => theme.isDarkMode 
    ? 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)' 
    : 'radial-gradient(circle, rgba(71, 85, 105, 0.2) 0%, rgba(71, 85, 105, 0) 70%)'}; /* Slate in light mode */
  bottom: -20%;
  right: -10%;
`;

const Orb3 = styled(Orb)`
  width: 35vw;
  height: 35vw;
  background: ${({ theme }) => theme.isDarkMode 
    ? 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 70%)'
    : 'radial-gradient(circle, rgba(217, 44, 84, 0.15) 0%, rgba(217, 44, 84, 0) 70%)'}; /* Subtle Maroon in light mode */
  top: 40%;
  left: 30%;
`;

const GSAPBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // MatchMedia check to disable heavy animations for reduced-motion pref
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle, continuous flowing animations for a natural feel
      gsap.to('.orb-1', {
        x: "15vw",
        y: "15vh",
        scale: 1.1,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to('.orb-2', {
        x: "-20vw",
        y: "-15vh",
        scale: 1.2,
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to('.orb-3', {
        x: "20vw",
        y: "-10vh",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Mouse interaction for extra modern touch
      const handleMouseMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
        
        gsap.to('.orb-1', {
          xPercent: xPos,
          yPercent: yPos,
          duration: 2,
          ease: "power2.out"
        });
        gsap.to('.orb-2', {
          xPercent: -xPos * 1.5,
          yPercent: -yPos * 1.5,
          duration: 2.5,
          ease: "power2.out"
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <BackgroundContainer ref={containerRef}>
      <Orb1 className="orb-1" />
      <Orb2 className="orb-2" />
      <Orb3 className="orb-3" />
    </BackgroundContainer>
  );
};

export default GSAPBackground;
