import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDownload, FaPhotoVideo, FaUserGraduate, FaBriefcase, FaAward } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AboutPageContainer, AboutBanner, AboutBannerContent, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton, AboutTimeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector, AboutStats, StatItem } from './AboutStyles';
import aboutImg from '../../assets/about-image.png';
import resumePdf from '../../assets/resume.pdf';

const AboutPage = () => {
  return (
    <>
      <Header />
      
      <AboutPageContainer>
        <AboutBanner>
          <div className="container">
            <AboutBannerContent>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get to know me better
              </motion.p>
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
                    <strong>Email:</strong> amanktyrrr@gmail.com
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
                  <ResumeButton href={resumePdf} download="aman-ktyr-resume.pdf">
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
                <h3>5+</h3>
                <p>Years of Experience</p>
              </StatItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatItem>
                <h3>50+</h3>
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
                  <span className="date">2015 - 2019</span>
                  <h3>Bachelor of Technology in Computer Science</h3>
                  <p>University Name, City</p>
                  <p>Graduated with honors, focusing on web development and software engineering.</p>
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
                  <span className="date">2019 - 2021</span>
                  <h3>Frontend Developer</h3>
                  <p>Company Name, City</p>
                  <p>Developed responsive websites and web applications using modern frontend technologies.</p>
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
                  <span className="date">2021 - 2022</span>
                  <h3>Full Stack Developer</h3>
                  <p>Company Name, City</p>
                  <p>Worked on full stack development projects using React, Node.js, and MongoDB.</p>
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
                  <span className="date">2022 - Present</span>
                  <h3>Freelance Web Developer</h3>
                  <p>Self-employed</p>
                  <p>Working as a freelance web developer, creating custom websites and web applications for clients worldwide.</p>
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
