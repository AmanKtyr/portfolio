import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterLogo, FooterText, FooterLinks, FooterSocial, SocialLink, FooterBottom } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <div>
            <FooterLogo to="/">
              Aman Ktyr <span>Portfolio</span>
            </FooterLogo>
            <FooterText>
              A professional web developer providing high-quality web development services. Let's work together to bring your ideas to life.
            </FooterText>
            <FooterSocial>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </FooterSocial>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <FooterLinks>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </FooterLinks>
          </div>
          
          <div>
            <h3>Services</h3>
            <FooterLinks>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Responsive Design</Link></li>
              <li><Link to="/services">API Development</Link></li>
              <li><Link to="/services">E-commerce Solutions</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
            </FooterLinks>
          </div>
          
          <div>
            <h3>Contact Info</h3>
            <FooterLinks>
              <li>Lucknow, India</li>
              <li>ktyrpro@gmail.com</li>
              <li>+91 6387343245</li>
            </FooterLinks>
          </div>
        </FooterContent>
        
        <FooterBottom>
          <p>
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved. Made with <FaHeart /> by Aman Ktyr
          </p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
