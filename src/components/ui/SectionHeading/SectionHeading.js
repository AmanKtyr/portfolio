import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HeadingWrapper, SectionLabel, MainTitle, CharBox, CharSpan, SubHeadingText 
} from './SectionHeadingStyles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionHeading = ({ 
  number, 
  title, 
  subtitle, 
  accent, 
  id = `heading-${Math.random().toString(36).substr(2, 9)}` 
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll('.char');
    const sub = subtitleRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        id: id
      }
    });

    // Matrix-style scramble effect
    chars.forEach((char, i) => {
      const originalText = char.innerText;
      const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*@";
      
      tl.to(char, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        onStart: () => {
          let iterations = 0;
          const interval = setInterval(() => {
            char.innerText = possibleChars[Math.floor(Math.random() * possibleChars.length)];
            if (iterations >= 8) {
              clearInterval(interval);
              char.innerText = originalText;
            }
            iterations++;
          }, 30);
        }
      }, i * 0.03);
    });

    tl.to(sub, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");

    return () => {
      ScrollTrigger.getById(id)?.kill();
    };
  }, [id]);

  const renderChars = (text) => {
    return text.split('').map((char, index) => (
      <CharBox key={index}>
        <CharSpan className="char">
          {char === ' ' ? '\u00A0' : char}
        </CharSpan>
      </CharBox>
    ));
  };

  return (
    <HeadingWrapper ref={containerRef}>
      <SectionLabel number={number}>
        SYSTEM_ACCESS // 0.{number}
      </SectionLabel>
      <MainTitle ref={titleRef}>
        <div>{renderChars(title)}</div>
        {accent && <span className="accent">{renderChars(accent)}</span>}
      </MainTitle>
      {subtitle && (
        <SubHeadingText ref={subtitleRef}>
          {subtitle}
        </SubHeadingText>
      )}
      <div className="heading-line" style={{ 
        width: '0%', 
        height: '1px', 
        background: 'var(--primary-color)', 
        marginTop: '2rem',
        opacity: 0.3
      }} />
    </HeadingWrapper>
  );
};

export default SectionHeading;
