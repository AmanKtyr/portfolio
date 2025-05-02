import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SkillsContainer, SkillsContent, SkillCard, SkillIcon, SkillTitle, SkillText, SkillList } from './SkillsStyles';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <p>What I can do for you</p>
        </motion.div>
        
        <SkillsContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaHtml5 />
              </SkillIcon>
              <SkillTitle>HTML/CSS</SkillTitle>
              <SkillText>
                Creating responsive, accessible, and semantically structured websites with modern CSS techniques.
              </SkillText>
              <SkillList>
                <li>HTML5 Semantic Elements</li>
                <li>CSS3 & Flexbox</li>
                <li>CSS Grid</li>
                <li>Responsive Design</li>
              </SkillList>
            </SkillCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaJs />
              </SkillIcon>
              <SkillTitle>JavaScript</SkillTitle>
              <SkillText>
                Building interactive and dynamic web applications with modern JavaScript.
              </SkillText>
              <SkillList>
                <li>ES6+ Features</li>
                <li>DOM Manipulation</li>
                <li>Asynchronous JS</li>
                <li>API Integration</li>
              </SkillList>
            </SkillCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaReact />
              </SkillIcon>
              <SkillTitle>React</SkillTitle>
              <SkillText>
                Developing modern, efficient, and maintainable front-end applications with React.
              </SkillText>
              <SkillList>
                <li>React Hooks</li>
                <li>Context API</li>
                <li>Redux</li>
                <li>React Router</li>
              </SkillList>
            </SkillCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaNodeJs />
              </SkillIcon>
              <SkillTitle>Node.js</SkillTitle>
              <SkillText>
                Building scalable and efficient back-end services and APIs with Node.js.
              </SkillText>
              <SkillList>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
                <li>Server-side Rendering</li>
              </SkillList>
            </SkillCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaDatabase />
              </SkillIcon>
              <SkillTitle>Databases</SkillTitle>
              <SkillText>
                Designing and implementing database solutions for web applications.
              </SkillText>
              <SkillList>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Data Modeling</li>
              </SkillList>
            </SkillCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <SkillIcon>
                <FaGitAlt />
              </SkillIcon>
              <SkillTitle>Version Control</SkillTitle>
              <SkillText>
                Managing code versions and collaborating with other developers using Git.
              </SkillText>
              <SkillList>
                <li>Git</li>
                <li>GitHub</li>
                <li>Branching Strategies</li>
                <li>Code Reviews</li>
              </SkillList>
            </SkillCard>
          </motion.div>
        </SkillsContent>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
