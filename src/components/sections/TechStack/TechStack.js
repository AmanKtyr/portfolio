import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, 
  FaJava, FaPhp, FaBootstrap, FaDocker, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiDjango, SiTailwindcss, SiJquery, SiFlask, 
  SiPostgresql, SiMysql, SiSqlite 
} from 'react-icons/si';
import { 
  TechStackContainer, TechStackTitle, 
  MarqueeWrapper, MarqueeRow, TechCard, IconBox, TechName, SignatureLine 
} from './TechStackStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);

  const techItems = [
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38B2AC' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E44D26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaPhp />, name: 'PHP', color: '#777BB4' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiJquery />, name: 'jQuery', color: '#0769AD' },
    { icon: <SiFlask />, name: 'Flask', color: '#000000' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaGithub />, name: 'GitHub', color: '#181717' },
    { icon: <SiSqlite />, name: 'SQLite', color: '#003B57' },
  ];

  // Distribute tech items into two rows
  const row1 = [...techItems.slice(0, 9), ...techItems.slice(0, 9)];
  const row2 = [...techItems.slice(9), ...techItems.slice(9)];


  return (
    <TechStackContainer ref={containerRef} id="tech-stack">
        <SectionHeading 
          number="0"
          title="MASTERED"
          accent="STACK"
          subtitle="A specialized assortment of technological proficiencies, encompassing machine learning, full-stack architecture, and high-performance system design."
        />
        
        <TechStackTitle style={{ border: 'none', margin: '0' }}>
          <div className="tech-meta" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
            <div className="meta-item">
              <span>USER__SYSTEM:</span> <b style={{ color: 'var(--primary-color)' }}>Aman Katiyar</b>
            </div>
            <div className="meta-item">
              <span>ACCESS_TYPE:</span> <b style={{ color: 'var(--primary-color)' }}>FULL_STACK</b>
            </div>
            <div className="meta-item">
              <span>CORE_NODES:</span> <b style={{ color: 'var(--primary-color)' }}>{techItems.length}</b>
            </div>
          </div>
        </TechStackTitle>
        
        <MarqueeWrapper>
            <MarqueeRow duration="40s">
                {row1.map((tech, i) => (
                    <TechCard key={i}>
                        <IconBox color={tech.color}>{tech.icon}</IconBox>
                        <TechName>{tech.name}</TechName>
                    </TechCard>
                ))}
            </MarqueeRow>

            <MarqueeRow duration="35s" reverse={true}>
                {row2.map((tech, i) => (
                    <TechCard key={i}>
                        <IconBox color={tech.color}>{tech.icon}</IconBox>
                        <TechName>{tech.name}</TechName>
                    </TechCard>
                ))}
            </MarqueeRow>
        </MarqueeWrapper>
        
        <SignatureLine />
    </TechStackContainer>
  );
};

export default TechStack;
