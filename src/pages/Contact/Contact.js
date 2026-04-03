import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Contact from '../../components/sections/Contact/Contact';
import { ContactPageContainer, ContactBanner, ContactBannerContent, ContactMap, WatermarkText, TechBadge, VisualEngine, RotatingRing, VisualNode, GridCoordinates } from './ContactStyles';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <ContactPageContainer>
        <ContactBanner>
          <WatermarkText>COMMUNICATIONS</WatermarkText>
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: ONLINE</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BUILD: 4.1.2</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>LAT: 26.8467</span>
            <span>LON: 80.9462</span>
          </GridCoordinates>
          <GridCoordinates style={{ bottom: '10%', right: '5%' }}>
            <span>PORT: 8080</span>
            <span>MODE: SECURE</span>
          </GridCoordinates>

          <div className="container">
            <ContactBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t('contact.title').split(' ').map((word, i) => (
                    <span key={i} data-text={word}>{word} </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('contact.subtitle')}
                </motion.p>
              </div>

              <VisualEngine>
                <RotatingRing size={350} duration={40} />
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(128, 0, 0, 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(128, 0, 0, 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaEnvelope />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaPhone />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaMapMarkerAlt />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaPaperPlane />
                </VisualNode>
              </VisualEngine>
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

