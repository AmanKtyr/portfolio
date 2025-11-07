import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import { ContactPageContainer, ContactBanner, ContactBannerContent, ContactMap } from './ContactStyles';

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactPageContainer>
        <ContactBanner>
          <div className="grid-overlay"></div>
          <div className="container">
            <ContactBannerContent>
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
                Contact Me
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
                Let's discuss your project and bring your ideas to life
              </motion.p>
            </ContactBannerContent>
          </div>
        </ContactBanner>
        <Contact />
        <ContactMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61293.561139084224!2d80.92496128294971!3d26.849391020942367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1756317578118!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </ContactMap>
      </ContactPageContainer>
      <Footer />
    </>
  );
};

export default ContactPage;