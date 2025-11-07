import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaPhp, FaBootstrap, FaDocker, FaGitAlt, FaGithub, FaDatabase, FaServer, FaNodeJs, FaAws, FaBrain, FaRobot, FaPlug } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiJquery, SiFlask, SiPostgresql, SiMysql, SiSqlite, SiNextdotjs } from 'react-icons/si';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/Skills/ProgressBar';
import { SkillsPageContainer, SkillsBanner, SkillsBannerContent, SkillsContent, SkillsGrid, SkillCard, SkillIcon, SkillTitle, SkillText, SkillList, TechStackSection, TechStackGrid, TechItem, TechIcon, TechName, SkillsTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector } from './SkillsStyles';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      icon: <FaPython />,
      title: 'Python',
      text: 'Developing scalable and secure web applications and scripts.',
      list: ['Django', 'Flask', 'REST API Development', 'Scripting'],
      percentage: 90
    },
    {
      id: 2,
      icon: <FaJava />,
      title: 'Java',
      text: 'Building robust and high-performance applications.',
      list: ['Core Java', 'Spring (Basic)', 'Maven', 'OOP'],
      percentage: 75
    },
    {
      id: 9,
      icon: <SiDjango />,
      title: 'Django',
      text: 'Building powerful and secure web applications with Python and Django.',
      list: ['Django REST Framework', 'Django ORM', 'Templates', 'Admin Interface'],
      percentage: 85
    },
    {
      id: 3,
      icon: <FaJs />,
      title: 'JavaScript',
      text: 'Building interactive and dynamic web applications with modern JavaScript.',
      list: ['ES6+ Features', 'DOM Manipulation', 'Asynchronous JS', 'API Integration'],
      percentage: 90
    },
    {
      id: 4,
      icon: <FaReact />,
      title: 'React.js',
      text: 'Developing modern, efficient, and maintainable front-end applications with React.',
      list: ['React Hooks', 'Context API', 'Redux', 'React Router'],
      percentage: 85
    },
    {
      id: 5,
      icon: <FaDatabase />,
      title: 'Databases',
      text: 'Designing and implementing database solutions for web applications.',
      list: ['PostgreSQL', 'MySQL', 'SQLite', 'Data Modeling'],
      percentage: 80
    },
    {
      id: 6,
      icon: <FaGitAlt />,
      title: 'Version Control',
      text: 'Managing code versions and collaborating with other developers using Git.',
      list: ['Git', 'GitHub', 'Bitbucket', 'Branching Strategies'],
      percentage: 85
    },
    {
      id: 10,
      icon: <FaNodeJs />,
      title: 'Node.js',
      text: 'Building scalable and efficient backend services.',
      list: ['Express.js', 'REST APIs', 'npm', 'Asynchronous Programming'],
      percentage: 80
    }
  ];

  const techItems = [
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaPhp />, name: 'PHP', color: '#777BB4' },
    { icon: <SiPostgresql />, name: 'SQL', color: '#336791' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E44D26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38B2AC' },
    { icon: <SiJquery />, name: 'jQuery', color: '#0769AD' },
    { icon: <SiFlask />, name: 'Flask', color: '#000000' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <FaGithub />, name: 'GitHub', color: '#181717' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },

    { icon: <FaDatabase />, name: 'SQL', color: '#336791' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
    { icon: <FaAws />, name: 'AWS', color: '#516277ff' },
  ];

  const learningPath = [
    {
      id: 1,
      icon: <FaHtml5 />,
      title: 'HTML & CSS Fundamentals',
      description: 'Started with the basics of web development, learning HTML structure and CSS styling.'
    },
    {
      id: 2,
      icon: <FaJs />,
      title: 'JavaScript Programming',
      description: 'Learned JavaScript fundamentals, DOM manipulation, and asynchronous programming.'
    },
    {
      id: 3,
      icon: <FaReact />,
      title: 'Frontend Frameworks',
      description: 'Mastered React.js and explored other frontend frameworks like Vue and Angular.'
    },
    {
      id: 4,
      icon: <FaPlug />,
      title: 'API Development',
      description: 'Building and integrating RESTful APIs for seamless data communication.'
    },
    {
      id: 5,
      icon: <FaNodeJs />,
      title: 'Backend Development',
      description: 'Expanded skills to backend development with Node.js, Express, and database integration.'
    },
    {
      id: 9,
      icon: <SiDjango />,
      title: 'Django Framework',
      description: 'Mastered the Django framework for rapid and secure web development.'
    },
    {
      id: 10,
      icon: <FaNodeJs />,
      title: 'Node.js Framework',
      description: 'Mastered the Node.js framework for rapid and secure web development.'
    },
    {
      id: 6,
      icon: <FaServer />,
      title: 'Full Stack Development',
      description: 'Combined frontend and backend skills to build complete web applications.'
    },
    {
      id: 7,
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      description: 'Exploring the world of AI and Machine Learning, and applying it to real-world problems.'
    },
    {
      id: 8,
      icon: <FaRobot />,
      title: 'Gen and Agentic AI',
      description: 'Building intelligent agents and generative models to solve complex problems.'
    }
  ];

  return (
    <>
      <Header />

      <SkillsPageContainer>
        <SkillsBanner>
          {/* Grid overlay for cyberpunk/tech feel */}
          <div className="grid-overlay"></div>

          <div className="container">
            <SkillsBannerContent>
              {/* Floating elements for visual interest */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                My Skills
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 50
                }}
              >
                What I can do for you
              </motion.p>

              {/* Animated code particles */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  color: "rgba(56, 189, 248, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;code&gt;
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "10%",
                  color: "rgba(147, 51, 234, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                &lt;/code&gt;
              </motion.div>
            </SkillsBannerContent>
          </div>
        </SkillsBanner>

        <div className="container">
          <SkillsContent>
            <div className="section-title">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Technical Skills
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                My expertise in various technologies
              </motion.p>
            </div>

            <SkillsGrid>
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard>
                    <SkillIcon>
                      {skill.icon}
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillText>{skill.text}</SkillText>
                    <SkillList>
                      {skill.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </SkillList>
                    <ProgressBar skill={skill.title} percentage={skill.percentage} />
                  </SkillCard>
                </motion.div>
              ))}
            </SkillsGrid>
          </SkillsContent>

          <TechStackSection>
            <div className="section-title">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Tech Stack
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Technologies I work with
              </motion.p>
            </div>

            <TechStackGrid>
              {techItems.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <TechItem>
                    <TechIcon style={{ color: tech.color }}>
                      {tech.icon}
                    </TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                </motion.div>
              ))}
            </TechStackGrid>
          </TechStackSection>

          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Learning Path
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              How I developed my skills over time
            </motion.p>
          </div>

          <SkillsTimeline>
            {learningPath.map((item, index) => (
              <TimelineItem key={item.id}>
                <TimelineDot>
                  {item.icon}
                </TimelineDot>
                {index < learningPath.length - 1 && <TimelineConnector />}
                <TimelineContent>
                  <motion.div
                    className="timeline-animation"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 50
                    }}
                    viewport={{ once: true }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </SkillsTimeline>
        </div>
      </SkillsPageContainer>

      <Footer />
    </>
  );
};

export default Skills;