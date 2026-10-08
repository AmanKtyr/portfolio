import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaArrowRight, FaBrain } from 'react-icons/fa';
import { SiDjango, SiNestjs } from 'react-icons/si';
import {
  SkillsContainer,
  SummaryWrapper,
  TechIconsGrid,
  TechIconNode,
  ActionButton,
} from './SkillsStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';

const Skills = () => {
  const techStack = [
    { id: 'html', icon: <FaHtml5 aria-hidden="true" />, name: 'HTML5' },
    { id: 'css', icon: <FaCss3Alt aria-hidden="true" />, name: 'CSS3' },
    { id: 'js', icon: <FaJs aria-hidden="true" />, name: 'JavaScript' },
    { id: 'react', icon: <FaReact aria-hidden="true" />, name: 'React' },
    { id: 'node', icon: <FaNodeJs aria-hidden="true" />, name: 'Node.js' },
    { id: 'python', icon: <FaPython aria-hidden="true" />, name: 'Python' },
    { id: 'django', icon: <SiDjango aria-label="Django" role="img" />, name: 'Django' },
    { id: 'db', icon: <FaDatabase aria-hidden="true" />, name: 'Databases' },
    { id: 'git', icon: <FaGitAlt aria-hidden="true" />, name: 'Git' },
    { id: 'ai', icon: <FaBrain aria-hidden="true" />, name: 'AI' },
    { id: 'nestjs', icon: <SiNestjs aria-label="Nest.js" role="img" />, name: 'Nest.js' }
  ];

  return (
    <SkillsContainer id="skills">
      <div className="container">
        <SectionHeading 
          number="2"
          title="CORE"
          accent="STACK"
          subtitle="A comprehensive toolkit of modern technologies, frameworks, and architectural principles that I leverage to build scalable and high-performance digital solutions."
        />

        <SummaryWrapper>
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
                <TechIconNode title={tech.name}>
                  {React.cloneElement(tech.icon, { 'aria-label': tech.name, role: 'img' })}
                  <span className="sr-only">{tech.name}</span>
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
