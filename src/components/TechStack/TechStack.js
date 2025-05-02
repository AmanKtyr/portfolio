import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiThreedotjs, SiTypescript, SiMongodb } from 'react-icons/si';
import { TechStackContainer, TechStackTitle, TechStackGrid, TechItem, TechIcon, TechName, TechCube, CubeFace } from './TechStackStyles';

const TechStack = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      
      // Check if element is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
        
        // Animate based on scroll position
        controls.start({
          opacity: clampedProgress,
          y: (1 - clampedProgress) * 50,
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
  
  const techItems = [
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E44D26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiThreedotjs />, name: 'Three.js', color: '#000000' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' }
  ];
  
  return (
    <TechStackContainer ref={containerRef}>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <TechStackTitle>
          <h2>Tech Stack</h2>
          <p>Technologies I work with</p>
        </TechStackTitle>
        
        <TechStackGrid>
          {techItems.map((tech, index) => (
            <TechItem key={index}>
              <TechCube>
                {/* Front face */}
                <CubeFace className="front" style={{ backgroundColor: tech.color }}>
                  <TechIcon>{tech.icon}</TechIcon>
                </CubeFace>
                
                {/* Back face */}
                <CubeFace className="back" style={{ backgroundColor: tech.color }}>
                  <TechName>{tech.name}</TechName>
                </CubeFace>
                
                {/* Top face */}
                <CubeFace className="top" style={{ backgroundColor: tech.color }}>
                  <TechIcon>{tech.icon}</TechIcon>
                </CubeFace>
                
                {/* Bottom face */}
                <CubeFace className="bottom" style={{ backgroundColor: tech.color }}>
                  <TechName>{tech.name}</TechName>
                </CubeFace>
                
                {/* Left face */}
                <CubeFace className="left" style={{ backgroundColor: tech.color }}>
                  <TechIcon>{tech.icon}</TechIcon>
                </CubeFace>
                
                {/* Right face */}
                <CubeFace className="right" style={{ backgroundColor: tech.color }}>
                  <TechName>{tech.name}</TechName>
                </CubeFace>
              </TechCube>
            </TechItem>
          ))}
        </TechStackGrid>
      </motion.div>
    </TechStackContainer>
  );
};

export default TechStack;
