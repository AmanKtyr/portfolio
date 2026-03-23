import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaPhotoVideo, FaUserGraduate, FaBriefcase, FaAward } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AboutPageContainer, AboutBanner, AboutBannerContent, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton, AboutTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector, AboutStats, StatItem } from './AboutStyles';
import aboutImg from '../../assets/aman-about.jpeg';
import resumePdf from '../../assets/Aman_Katiyar_Resume.pdf';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <AboutPageContainer>
        <AboutBanner>
          {/* Grid overlay for cyberpunk/tech feel */}
          <div className="grid-overlay"></div>

          <div className="container">
            <AboutBannerContent>
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
                {t('about.title')}
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
                {t('about.subtitle')}
              </motion.p>

              {/* Animated code particles */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  color: "rgba(128, 0, 0, 0.4)",
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
                &lt;about&gt;
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "10%",
                  color: "rgba(90, 0, 0, 0.4)",
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
                &lt;/about&gt;
              </motion.div>
            </AboutBannerContent>
          </div>
        </AboutBanner>

        <div className="container">
          <AboutContent>
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

          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('about.journey.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.journey.subtitle')}
            </motion.p>
          </div>

          <AboutTimeline>
            <TimelineItem>
              <TimelineDot>
                <FaBriefcase />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.currentRole.date')}</span>
                  <h3>{t('about.journey.currentRole.title')}</h3>
                  <p>{t('about.journey.currentRole.company')}</p>
                  <p>{t('about.journey.currentRole.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaBriefcase />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.previousRole.date')}</span>
                  <h3>{t('about.journey.previousRole.title')}</h3>
                  <p>{t('about.journey.previousRole.company')}</p>
                  <p>{t('about.journey.previousRole.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaUserGraduate />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.degree.date')}</span>
                  <h3>{t('about.journey.degree.title')}</h3>
                  <p>{t('about.journey.degree.company')}</p>
                  <p>{t('about.journey.degree.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaBriefcase />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.apprenticeship.date')}</span>
                  <h3>{t('about.journey.apprenticeship.title')}</h3>
                  <p>{t('about.journey.apprenticeship.company')}</p>
                  <p>{t('about.journey.apprenticeship.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaAward />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.training.date')}</span>
                  <h3>{t('about.journey.training.title')}</h3>
                  <p>{t('about.journey.training.company')}</p>
                  <p>{t('about.journey.training.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaUserGraduate />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.diploma.date')}</span>
                  <h3>{t('about.journey.diploma.title')}</h3>
                  <p>{t('about.journey.diploma.company')}</p>
                  <p>{t('about.journey.diploma.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaUserGraduate />
              </TimelineDot>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="date">{t('about.journey.school.date')}</span>
                  <h3>{t('about.journey.school.title')}</h3>
                  <p>{t('about.journey.school.company')}</p>
                  <p>{t('about.journey.school.desc')}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          </AboutTimeline>
        </div>
      </AboutPageContainer>

      <Footer />
    </>
  );
};

export default AboutPage;

