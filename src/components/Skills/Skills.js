import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaArrowRight, FaBrain } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql, SiNestjs } from 'react-icons/si';
import {
  SkillsContainer,
  SummaryWrapper,
  TechIconsGrid,
  TechIconNode,
  ActionButton,
  WatermarkText,
  TechBadge
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
    { id: 'git', icon: <FaGitAlt />, name: 'Git' },
    { id: 'ai', icon: <FaBrain />, name: 'AI' },
    { id: 'nestjs', icon: <SiNestjs />, name: 'Nest.js' }
  ];

  return (
    <SkillsContainer id="skills">
      <WatermarkText>EXPERTISE</WatermarkText>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>My Skills Overview</h2>
        </motion.div>

        <SummaryWrapper>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I specialize in crafting high-performance, responsive web applications with an emphasis on clean architecture and seamless user experiences. My expertise bridges the gap between scalable backends utilizing Python and Node.js, and intuitive frontends powered by React and modern JavaScript.
          </motion.p>
          
          <TechIconsGrid>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05
                }}
                viewport={{ once: true }}
                title={tech.name}
              >
                <TechIconNode>
                  {tech.icon}
                </TechIconNode>
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
