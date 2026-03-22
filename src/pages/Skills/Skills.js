import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaPhp, FaBootstrap, FaDocker, FaGitAlt, FaGithub, FaDatabase, FaServer, FaNodeJs, FaAws, FaBrain, FaRobot, FaPlug } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiJquery, SiFlask, SiPostgresql, SiMysql, SiNextdotjs } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/Skills/ProgressBar';
import { SkillsPageContainer, SkillsBanner, SkillsBannerContent, SkillsContent, SkillsGrid, SkillCard, SkillIcon, SkillTitle, SkillText, SkillList, TechStackSection, TechStackGrid, TechItem, TechIcon, TechName, SkillsTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector } from './SkillsStyles';

const skillIcons = [<FaPython />, <FaJava />, <SiDjango />, <FaJs />, <FaReact />, <FaDatabase />, <FaGitAlt />, <FaNodeJs />];
const skillPercentages = [90, 75, 85, 90, 85, 80, 85, 80];

const learningIcons = [<FaHtml5 />, <FaJs />, <FaReact />, <FaPlug />, <FaNodeJs />, <FaServer />, <FaBrain />];

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

const Skills = () => {
  const { t } = useTranslation();
  const skillCards = t('skills.skillCards', { returnObjects: true }) || [];
  const learningPath = t('skills.learningPath', { returnObjects: true }) || [];

  return (
    <>
      <Header />

      <SkillsPageContainer>
        <SkillsBanner>
          <div className="grid-overlay"></div>
          <div className="container">
            <SkillsBannerContent>
              <motion.div className="floating-element element-1" animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="floating-element element-2" animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

              <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
                {t('skills.title')}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 50 }}>
                {t('skills.subtitle')}
              </motion.p>

              <motion.div style={{ position: "absolute", top: "50%", left: "5%", color: "rgba(128, 0, 0, 0.4)", fontSize: "1.2rem", fontFamily: "monospace", zIndex: 5 }} animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                &lt;code&gt;
              </motion.div>
              <motion.div style={{ position: "absolute", bottom: "30%", right: "10%", color: "rgba(90, 0, 0, 0.4)", fontSize: "1.2rem", fontFamily: "monospace", zIndex: 5 }} animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                &lt;/code&gt;
              </motion.div>
            </SkillsBannerContent>
          </div>
        </SkillsBanner>

        <div className="container">
          <SkillsContent>
            <div className="section-title">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                {t('skills.title')}
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                {t('skills.skillsDescription')}
              </motion.p>
            </div>

            <SkillsGrid>
              {Array.isArray(skillCards) && skillCards.map((skill, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <SkillCard>
                    <SkillIcon>{skillIcons[index]}</SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillText>{skill.desc}</SkillText>
                    <SkillList>
                      {skill.list && skill.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </SkillList>
                    <ProgressBar skill={skill.title} percentage={skillPercentages[index]} />
                  </SkillCard>
                </motion.div>
              ))}
            </SkillsGrid>
          </SkillsContent>

          <TechStackSection>
            <div className="section-title">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                {t('skills.techStackTitle')}
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                {t('skills.techStackSubtitle')}
              </motion.p>
            </div>

            <TechStackGrid>
              {techItems.map((tech, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                  <TechItem>
                    <TechIcon style={{ color: tech.color }}>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                </motion.div>
              ))}
            </TechStackGrid>
          </TechStackSection>

          <div className="section-title">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              {t('skills.learningPathTitle')}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              {t('skills.learningPathSubtitle')}
            </motion.p>
          </div>

          <SkillsTimeline>
            {Array.isArray(learningPath) && learningPath.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDot>{learningIcons[index]}</TimelineDot>
                {index < learningPath.length - 1 && <TimelineConnector />}
                <TimelineContent>
                  <motion.div className="timeline-animation" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, type: "spring", stiffness: 50 }} viewport={{ once: true }}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
