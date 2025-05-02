import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { AboutContainer, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem } from './AboutStyles';
import aboutImg from '../../assets/about-image.png'; // You'll need to add this image

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>
        
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
              I'm a Passionate Web Developer & Freelancer
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              With over 5 years of experience in web development, I specialize in creating responsive, user-friendly websites and web applications that help businesses grow their online presence.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm passionate about combining beautiful design with clean, efficient code to deliver exceptional user experiences. My approach is client-focused, ensuring that every project meets the unique needs and goals of the businesses I work with.
            </motion.p>
            
            <AboutInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <InfoItem>
                  <strong>Name:</strong> Your Name
                </InfoItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <InfoItem>
                  <strong>Email:</strong> your.email@example.com
                </InfoItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <InfoItem>
                  <strong>Location:</strong> Your City, Country
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
            </AboutInfo>
            
            <AboutSkills>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <SkillItem>
                  <FaCode />
                  <h4>Web Development</h4>
                </SkillItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <SkillItem>
                  <FaLaptopCode />
                  <h4>Responsive Design</h4>
                </SkillItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <SkillItem>
                  <FaMobileAlt />
                  <h4>Mobile-First</h4>
                </SkillItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <SkillItem>
                  <FaServer />
                  <h4>API Integration</h4>
                </SkillItem>
              </motion.div>
            </AboutSkills>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;
