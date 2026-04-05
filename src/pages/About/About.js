import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaBrain, FaShieldAlt, FaBriefcase, FaUserGraduate, FaAward, FaCog, FaLock, FaRocket, FaFingerprint } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Meta from '../../components/common/Meta/Meta';
import { 
  AboutPageContainer, 
  AboutBanner, 
  AboutBannerContent, 
  PillarsSection,
  PillarCard,
  BlueprintSection,
  BlueprintGrid,
  BlueprintNode,
  BlueprintVisual,
  ProfileSpec,
  ParameterCard,
  OperativeCard,
  NarrativeBio,
  StatsDashboard,
  DashboardItem,
  MasterActionArea,
  AboutTimeline, 
  TimelineItem, 
  TimelineContent, 
  TimelineDot, 
  WatermarkText, 
  TechBadge, 
  VisualEngine, 
  RotatingRing, 
  VisualNode, 
  GridCoordinates 
} from './AboutStyles';
import aboutImg from '../../assets/aman-about.png';
import resumePdf from '../../assets/Aman_Katiyar_Resume.pdf';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import { ResumeBtn, AvailabilityIndicator } from '../../components/sections/About/AboutStyles';

const AboutPage = () => {
  const { t } = useTranslation();

  const parameters = [
    { label: 'System_Name', value: 'Aman Katiyar' },
    { label: 'Link_Endpoint', value: 'amankatiyar.tech01@gmail.com' },
    { label: 'Deploy_Region', value: 'Lucknow, UP, India' },
    { label: 'Core_Logic', value: 'Full-Stack Architect' },
  ];

  const operatives = [
    { label: 'Web_Architecture', icon: <FaCode /> },
    { label: 'Enterprise_Systems', icon: <FaLaptopCode /> },
    { label: 'AI_Agent_Logic', icon: <FaBrain /> },
    { label: 'Resilient_Security', icon: <FaShieldAlt /> },
  ];

  const stats = [
    { value: '3+', label: 'Strategic Years' },
    { value: '35+', label: 'Ecosystems Shipped' },
    { value: '20+', label: 'Enterprise Partners' },
    { value: '10+', label: 'Tech Honors' },
  ];

  return (
    <>
      <Meta 
        title="About Deep-Dive | Aman Katiyar" 
        description="Explore the architectural blueprint of Aman Katiyar's career. From full-stack engineering to AI solutions architecture." 
        url="https://aman.ktyr.in/about"
      />

      <Header />

      <AboutPageContainer>
        <AboutBanner>
          <WatermarkText>ARCHITECT</WatermarkText>
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: OPTIMIZED</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BLUEPRINT: 2.0.0</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>SEC_LVL: 04</span>
            <span>AUTH: GRANTED</span>
          </GridCoordinates>

          <div className="container">
            <AboutBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {t('about.title').split(' ').map((word, i) => (
                    <span key={i} data-text={word}>{word} </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('about.subtitle')}
                </motion.p>
              </div>

              <VisualEngine>
                <RotatingRing size={350} duration={40} />
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(var(--primary-rgb), 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(var(--primary-rgb), 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)' }}>
                  <FaBrain />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)' }}>
                  <FaShieldAlt />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)' }}>
                  <FaLaptopCode />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)' }}>
                  <FaCode />
                </VisualNode>
              </VisualEngine>
            </AboutBannerContent>
          </div>
        </AboutBanner>

        <div className="container">
          <BlueprintSection>
            <NarrativeBio>
              <SectionHeading 
                number="05"
                title="Full-Stack Systems Architect &"
                accent="AI Solutions Engineer"
              />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t('about.aboutMeText')}
              </motion.p>
            </NarrativeBio>

            <BlueprintGrid>
              <BlueprintNode>
                {parameters.map((p, i) => (
                  <ParameterCard key={i} side="left">
                    <span className="label">{p.label}</span>
                    <span className="value">{p.value}</span>
                  </ParameterCard>
                ))}
              </BlueprintNode>

              <BlueprintVisual>
                <ProfileSpec>
                  <img src={aboutImg} alt="Aman Katiyar Blueprint" />
                  <div className="corner-tag">U_IDENT: AMAN_K</div>
                </ProfileSpec>
              </BlueprintVisual>

              <BlueprintNode>
                {operatives.map((o, i) => (
                  <OperativeCard key={i}>
                    <div className="icon">{o.icon}</div>
                    <div className="details">
                      <h4>{o.label}</h4>
                    </div>
                  </OperativeCard>
                ))}
              </BlueprintNode>
            </BlueprintGrid>

            <StatsDashboard>
              {stats.map((s, i) => (
                <DashboardItem key={i}>
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </DashboardItem>
              ))}
            </StatsDashboard>

            <MasterActionArea>
              <ResumeBtn href={resumePdf} download="Aman_Katiyar_Resume.pdf">
                <FaDownload /> {t('about.downloadCV')}
              </ResumeBtn>
              <AvailabilityIndicator>
                <div className="dot"></div>
                {t('about.available')}
              </AvailabilityIndicator>
            </MasterActionArea>
          </BlueprintSection>

          <PillarsSection>
            <SectionHeading 
              number="06"
              title="SYSTEMS"
              accent="PHILOSOPHY"
              subtitle="The foundational principles that drive every architectural decision I make."
            />

            <div className="pillars-grid">
              <PillarCard>
                <div className="pillar-header">
                  <FaRocket className="icon" />
                  <span className="tag">PRIORITY_01</span>
                </div>
                <h4>Scalability First</h4>
                <p>Architecting ecosystems that grow effortlessly. Every line of code is written with planetary-scale infrastructure in mind, ensuring your system remains robust under extreme load.</p>
              </PillarCard>

              <PillarCard>
                <div className="pillar-header">
                  <FaLock className="icon" />
                  <span className="tag">ZERO_TRUST</span>
                </div>
                <h4>Security by Design</h4>
                <p>Proactive protection is a standard, not an afterthought. I implement multi-layered hardening strategies to safeguard data integrity and secure your digital assets from day one.</p>
              </PillarCard>

              <PillarCard>
                <div className="pillar-header">
                  <FaFingerprint className="icon" />
                  <span className="tag">UX_ARCH</span>
                </div>
                <h4>Human-Centric Logic</h4>
                <p>Bridging the gap between complex engineering and intuitive experience. I build architectures that treat user experience as a core technical performance metric.</p>
              </PillarCard>

              <PillarCard>
                <div className="pillar-header">
                  <FaBrain className="icon" />
                  <span className="tag">AI_STRATEGY</span>
                </div>
                <h4>Strategic Innovation</h4>
                <p>Leveraging GenAI and Agentic systems to solve real-world business bottlenecks. I don't just follow trends; I engineer AI to drive measurable commercial impact.</p>
              </PillarCard>
            </div>
          </PillarsSection>

          <SectionHeading 
            number="7"
            title="PROFESSIONAL"
            accent="JOURNEY"
            subtitle={t('about.journey.subtitle')}
          />

          <AboutTimeline>
            {[
              { role: 'currentRole', icon: <FaBriefcase /> },
              { role: 'previousRole', icon: <FaBriefcase /> },
              { role: 'degree', icon: <FaUserGraduate /> },
              { role: 'apprenticeship', icon: <FaBriefcase /> },
              { role: 'training', icon: <FaAward /> },
              { role: 'diploma', icon: <FaUserGraduate /> },
              { role: 'school', icon: <FaUserGraduate /> }
            ].map((item, index) => (
              <TimelineItem key={index} index={index}>
                <TimelineDot>{item.icon}</TimelineDot>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="date">{t(`about.journey.${item.role}.date`)}</span>
                    <h3>{t(`about.journey.${item.role}.title`)}</h3>
                    <p>{t(`about.journey.${item.role}.company`)}</p>
                    <p>{t(`about.journey.${item.role}.desc`)}</p>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </AboutTimeline>
        </div>
      </AboutPageContainer>

      <Footer />
    </>
  );
};

export default AboutPage;
