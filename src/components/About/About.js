import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDownload } from 'react-icons/fa';
import { AboutContainer, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton } from './AboutStyles';
import aboutImg from '../../assets/about-image.png'; // You'll need to add this image
import resumePdf from '../../assets/resume.pdf'; // Add your resume PDF
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <ScrollAnimation animation="fadeUp" className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </ScrollAnimation>

        <AboutContent>
          <AboutImage>
            <ScrollAnimation animation="fadeLeft">
              <img src={aboutImg} alt="About Me" />
            </ScrollAnimation>
          </AboutImage>

          <AboutText>
            <ScrollAnimation animation="fadeRight">
              <h3>I'm a Passionate Web Developer & Freelancer</h3>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeRight" delay={0.1}>
              <p>With over 5 years of experience in web development, I specialize in creating responsive, user-friendly websites and web applications that help businesses grow their online presence.</p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeRight" delay={0.2}>
              <p>I'm passionate about combining beautiful design with clean, efficient code to deliver exceptional user experiences. My approach is client-focused, ensuring that every project meets the unique needs and goals of the businesses I work with.</p>
            </ScrollAnimation>

            <AboutInfo>
              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <InfoItem>
                  <strong>Name:</strong> Your Name
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <InfoItem>
                  <strong>Email:</strong> your.email@example.com
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.5}>
                <InfoItem>
                  <strong>Location:</strong> Your City, Country
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.6}>
                <InfoItem>
                  <strong>Freelance:</strong> Available
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.7}>
                <ResumeButton href={resumePdf} download="your-name-resume.pdf">
                  <FaDownload /> Download Resume
                </ResumeButton>
              </ScrollAnimation>
            </AboutInfo>

            <AboutSkills>
              <ScrollAnimation animation="zoom" delay={0.7}>
                <SkillItem>
                  <FaCode />
                  <h4>Web Development</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.8}>
                <SkillItem>
                  <FaLaptopCode />
                  <h4>Responsive Design</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.9}>
                <SkillItem>
                  <FaMobileAlt />
                  <h4>Mobile-First</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={1.0}>
                <SkillItem>
                  <FaServer />
                  <h4>API Integration</h4>
                </SkillItem>
              </ScrollAnimation>
            </AboutSkills>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;
