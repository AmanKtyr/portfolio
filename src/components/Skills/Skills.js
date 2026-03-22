import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaArrowRight } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import {
  SkillsContainer,
  SummaryWrapper,
  TechIconsGrid,
  TechIconCircle,
  ActionButton
} from './SkillsStyles';

const Skills = () => {
  const techStack = [
    { id: 'html', icon: <FaHtml5 />, name: 'HTML5' },
    { id: 'css', icon: <FaCss3Alt />, name: 'CSS3' },
    { id: 'js', icon: <FaJs />, name: 'JavaScript' },
    { id: 'react', icon: <FaReact />, name: 'React' },
    { id: 'node', icon: <FaNodeJs />, name: 'Node.js' },
    { id: 'python', icon: <FaPython />, name: 'Python' },
    { id: 'django', icon: <SiDjango />, name: 'Django' },
    { id: 'db', icon: <FaDatabase />, name: 'Databases' },
    { id: 'git', icon: <FaGitAlt />, name: 'Git' }
  ];

  return (
    <SkillsContainer id="skills">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>My Skills Overview</h2>
        </motion.div>

        <SummaryWrapper>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            I specialize in crafting high-performance, responsive web applications with an emphasis on clean architecture and seamless user experiences. My expertise bridges the gap between scalable backends utilizing Python and Node.js, and intuitive frontends powered by React and modern JavaScript. Check out my full skills page for a detailed breakdown of my tech stack and learning path.
          </motion.p>
          
          <TechIconsGrid>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.1),
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true, margin: "-50px" }}
                title={tech.name}
              >
                <TechIconCircle>
                  {tech.icon}
                </TechIconCircle>
              </motion.div>
            ))}
          </TechIconsGrid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <ActionButton>
              <Link to="/skills">
                View Detailed Skills
                <FaArrowRight />
              </Link>
            </ActionButton>
          </motion.div>
        </SummaryWrapper>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
