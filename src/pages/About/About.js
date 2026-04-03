import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaPhotoVideo, FaUserGraduate, FaBriefcase, FaAward } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { AboutPageContainer, AboutBanner, AboutBannerContent, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton, AboutTimeline, TimelineItem, TimelineContent, TimelineDot, AboutStats, StatItem, WatermarkText, TechBadge, VisualEngine, RotatingRing, VisualNode, GridCoordinates } from './AboutStyles';
import aboutImg from '../../assets/aman-about.png';
import resumePdf from '../../assets/Aman_Katiyar_Resume.pdf';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <AboutPageContainer>
        <AboutBanner>
          <WatermarkText>PROFILE</WatermarkText>
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: ACTIVE</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BUILD: 1.4.2</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>LAT: 26.8467</span>
            <span>LON: 80.9462</span>
          </GridCoordinates>
          <GridCoordinates style={{ bottom: '10%', right: '5%' }}>
            <span>SECTOR: 7_ALPHA</span>
            <span>UNIT: BIOS_01</span>
          </GridCoordinates>

          <div className="container">
            <AboutBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(128, 0, 0, 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(128, 0, 0, 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaUserGraduate />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaBriefcase />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaCode />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaAward />
                </VisualNode>
              </VisualEngine>
            </AboutBannerContent>
          </div>
        </AboutBanner>

        <div className="container">
          <AboutContent style={{ position: 'relative' }}>
            <WatermarkText style={{ left: 'auto', right: '-5%', writingMode: 'vertical-rl', rotate: '0deg' }}>MISSION</WatermarkText>
            <AboutImage>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={aboutImg} alt="About Me" loading="lazy" />
              </motion.div>
            </AboutImage>

            <AboutText>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t('about.aboutMeHeader')}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {t('about.aboutMeText')}
              </motion.p>

              <AboutInfo>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>{t('about.name')}</strong> Aman Katiyar
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>{t('about.email')}</strong> amankatiyar.tech01@gmail.com
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>{t('about.location')}</strong> Lucknow, UP, India
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>{t('about.freelance')}</strong> {t('about.available')}
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <ResumeButton href={resumePdf} download="Aman_Katiyar_Resume.pdf">
                    <FaDownload /> {t('about.downloadCV')}
                  </ResumeButton>
                </motion.div>
              </AboutInfo>

              <AboutSkills>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <SkillItem>
                    <FaCode />
                    <h4>{t('skills.frontend')}</h4>
                  </SkillItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <SkillItem>
                    <FaLaptopCode />
                    <h4>{t('skills.backend')}</h4>
                  </SkillItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <SkillItem>
                    <FaPhotoVideo />
                    <h4>{t('skills.design')}</h4>
                  </SkillItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <SkillItem>
                    <FaServer />
                    <h4>{t('skills.other')}</h4>
                  </SkillItem>
                </motion.div>
              </AboutSkills>
            </AboutText>
          </AboutContent>

          <AboutStats>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <TechBadge style={{ top: '5px', right: '5px', fontSize: '0.5rem' }}>DATA_STREAM</TechBadge>
                <h3>3+</h3>
                <p>{t('about.stats.experience')}</p>
              </StatItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>35+</h3>
                <p>{t('about.stats.projects')}</p>
              </StatItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>20+</h3>
                <p>{t('about.stats.clients')}</p>
              </StatItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>10+</h3>
                <p>{t('about.stats.awards')}</p>
              </StatItem>
            </motion.div>
          </AboutStats>

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
                <TimelineDot>
                  {item.icon}
                </TimelineDot>
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

