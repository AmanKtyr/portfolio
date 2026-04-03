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
