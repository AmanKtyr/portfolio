import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDownload, FaPhotoVideo, FaUserGraduate, FaBriefcase, FaAward } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AboutPageContainer, AboutBanner, AboutBannerContent, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton, AboutTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector, AboutStats, StatItem } from './AboutStyles';
import aboutImg from '../../assets/aman-about.jpeg';
import resumePdf from '../../assets/Aman_Katiyar_Resume.pdf';

const AboutPage = () => {
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
                About Me
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
                Get to know me better
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
                &lt;about&gt;
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
                <img src={aboutImg} alt="About Me" />
              </motion.div>
            </AboutImage>

            <AboutText>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                I'm a Web Developer from Lucknow, UP
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I create a unique and appealing website in line with your brand and vision. I seamlessly blend creativity in design with excellence in functionality to deliver exceptional user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My approach is client-focused, ensuring that every project meets the unique needs and goals of the businesses I work with. I'm dedicated to delivering high-quality solutions that help my clients achieve their online objectives.
              </motion.p>

              <AboutInfo>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>Name:</strong> AmAn-KtYr
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>Email:</strong> amankatiyar.tech01@gmail.com
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>Location:</strong> Lucknow, UP, India
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <InfoItem>
                    <strong>Freelance:</strong> Available
                  </InfoItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <ResumeButton href={resumePdf} download="Aman_Katiyar_Resume.pdf">
                    <FaDownload /> Download Resume
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
                    <h4>Web Development</h4>
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
                    <h4>App Development</h4>
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
                    <h4>Photoshop</h4>
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
                    <h4>SEO Marketing</h4>
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
                <p>Years Experience</p>
              </StatItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>25+</h3>
                <p>Projects Completed</p>
              </StatItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>30+</h3>
                <p>Happy Clients</p>
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
                <p>Awards Received</p>
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
              My Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Education & Experience
            </motion.p>
          </div>

          <AboutTimeline>
            <TimelineItem>
              <TimelineDot>
                <FaUserGraduate />
              </TimelineDot>
              <TimelineConnector />
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >

                 <span className="date">2024 - Present</span>
                  <h3>Full-Stack Web Developer</h3>
                  <p>Sipher Web Pvt. Ltd.</p>
                  <p>Developed scalable web apps using Python with Django/React.js, built REST APIs, and implemented security best practices for client projects.</p>
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
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="date">2022 - 2025</span>
                  <h3>B.Tech in Computer Science & Engineering</h3>
                  <p>Sagar Group of Institute, Barabanki (AKTU)</p>
                  <p>Currently pursuing degree with focus on full-stack development and software architecture.</p>
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
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="date">2020 - 2022</span>
                  <h3>Diploma in Computer Science</h3>
                  <p>JawaharLal Nehru Polytechnic, MMB, Sitapur</p>
                  <p>Secured 74% marks with focus on programming fundamentals</p>
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
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="date">2022 (6 Months)</span>
                  <h3>Apprenticeship Training,</h3>
                  <p>Softpro India Computer Technologies,Lucknow </p>
                  <p>Developed reporting portal using PHP/MySQL and created responsive UIs with Bootstrap.</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaAward />
              </TimelineDot>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="date">2021 (Summer)</span>
                  <h3>Summer Training</h3>
                  <p>Softpro India Computer Technologies, Lucknow</p>
                  <p>Built E-Banking web application with Django/MySQL and secure authentication system.</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot>
                <FaCode />
              </TimelineDot>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="date">2019 - Present</span>
                  <h3>PROJECTS & ACHIEVEMENTS</h3>
                  <p>Sipher Web Tech (React/Tailwind)</p>
                  <p>Gurukul Setu (Django SaaS)</p>
                  <p>Steamax Burner (WordPress)</p>
                  <p>NASA Recognized JWST Model</p>
                  <p>Published "Space Math" E-book</p>
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