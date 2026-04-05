import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaDatabase, FaGitAlt, FaServer, FaBrain, FaLock, FaTerminal, 
  FaCloudUploadAlt, FaRocket, FaCogs, FaCode, FaHtml5, FaCss3Alt, FaJava, FaPhp, 
  FaBootstrap, FaDocker, FaGithub, FaNodeJs, FaAws, FaLinux, FaLightbulb
} from 'react-icons/fa';
import { 
  SiDjango, SiNextdotjs, SiTailwindcss, SiJquery, SiFlask, SiPostgresql, 
  SiMysql, SiSqlite, SiSupabase, SiFirebase, SiClerk, SiPostman, 
  SiThreedotjs, SiNginx, SiFramer, SiGunicorn, SiPm2, SiLetsencrypt, SiJsonwebtokens
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { 
  SkillsPageContainer, SkillsBanner, SkillsBannerContent, SkillsContent, 
  SkillsGrid, SkillCard, SkillIcon, SkillTitle, SkillText, SkillList, 
  TechStackSection, TechStackGrid, TechItem, TechIcon, TechName, 
  SkillsTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector,
  WatermarkText, TechBadge, VisualEngine, RotatingRing, VisualNode, GridCoordinates
} from './SkillsStyles';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';

const categoryIconMap = {
  core: <FaRocket />,
  frameworks: <FaCogs />,
  backend: <FaServer />,
  database: <FaDatabase />,
  security: <FaLock />,
  tools: <FaTerminal />,
  deployment: <FaCloudUploadAlt />,
  ai: <FaBrain />,
  strategy: <FaLightbulb />
};

// Comprehensive tech stack for the grid section
const techItems = [
  { icon: <FaPython />, name: 'Python', color: '#3776AB' },
  { icon: <SiDjango />, name: 'Django', color: '#092E20' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
  { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
  { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38B2AC' },
  { icon: <SiFramer />, name: 'Framer Motion', color: '#0055FF' },
  { icon: <FaHtml5 />, name: 'HTML5', color: '#E44D26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
  { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
  { icon: <SiJquery />, name: 'jQuery', color: '#0769AD' },
  { icon: <FaPhp />, name: 'PHP', color: '#777BB4' },
  { icon: <FaJava />, name: 'Java', color: '#007396' },
  { icon: <SiFlask />, name: 'Flask', color: '#000000' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
  { icon: <SiSqlite />, name: 'SQLite', color: '#003B57' },
  { icon: <SiSupabase />, name: 'Supabase', color: '#3ECF8E' },
  { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
  { icon: <SiClerk />, name: 'Clerk', color: '#6C47FF' },
  { icon: <FaBrain />, name: 'GenAI', color: '#8E44AD' },
  { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
  { icon: <FaGithub />, name: 'GitHub', color: '#181717' },
  { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
  { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
  { icon: <FaLinux />, name: 'Linux', color: '#FCC624' },
  { icon: <SiNginx />, name: 'Nginx', color: '#009639' },
  { icon: <FaAws />, name: 'AWS', color: '#232F3E' },
  { icon: <SiThreedotjs />, name: 'Three.js', color: '#000000' },
  { icon: <FaServer />, name: 'REST APIs', color: '#444444' },
  { icon: <SiGunicorn />, name: 'Gunicorn', color: '#499848' },
  { icon: <SiPm2 />, name: 'PM2', color: '#2B037A' },
  { icon: <SiLetsencrypt />, name: 'SSL Setup', color: '#003A70' },
  { icon: <SiJsonwebtokens />, name: 'JWT Auth', color: '#000000' }
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
          <WatermarkText>SKILLS_MATRIX</WatermarkText>
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: OPTIMIZED</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BUILD: 3.1.0</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>LAT: 26.8467</span>
            <span>LON: 80.9462</span>
          </GridCoordinates>
          <GridCoordinates style={{ bottom: '10%', right: '5%' }}>
            <span>NODE: SKL_7</span>
            <span>SYNC: ACTIVE</span>
          </GridCoordinates>

          <div className="container">
            <SkillsBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t('skills.title').split(' ').map((word, i) => (
                    <span key={i} data-text={word}>{word} </span>
                  ))}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('skills.subtitle')}
                </motion.p>
              </div>

              <VisualEngine>
                <RotatingRing size={350} duration={40} />
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(var(--primary-rgb), 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(var(--primary-rgb), 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaReact />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaNodeJs />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaJs />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaDatabase />
                </VisualNode>
              </VisualEngine>
            </SkillsBannerContent>
          </div>
        </SkillsBanner>

        <div className="container">
          <SkillsContent>
            <SectionHeading 
              number="3"
              title="CORE"
              accent="SKILLS"
              subtitle={t('skills.skillsDescription')}
            />

            <SkillsGrid>
              {Array.isArray(skillCards) && skillCards.map((skill, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <SkillCard>
                    <SkillIcon>{categoryIconMap[skill.category] || <FaCode />}</SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillText>{skill.desc}</SkillText>
                    <SkillList>
                      {skill.list && skill.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </SkillList>
                  </SkillCard>
                </motion.div>
              ))}
            </SkillsGrid>
          </SkillsContent>

          <TechStackSection>
            <SectionHeading 
              number="4"
              title="TECH"
              accent="STACK"
              subtitle={t('skills.techStackSubtitle')}
            />

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

          <SectionHeading 
            number="5"
            title="PROFESSIONAL"
            accent="EVOLUTION"
            subtitle={t('skills.learningPathSubtitle')}
          />

          <SkillsTimeline>
            {Array.isArray(learningPath) && learningPath.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDot>{[<FaCode />, <FaJs />, <FaReact />, <FaServer />, <FaDatabase />, <FaRocket />, <FaBrain />][index] || <FaCode />}</TimelineDot>
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
