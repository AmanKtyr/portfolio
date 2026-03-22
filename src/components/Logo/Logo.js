import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LogoWrapper, LogoSvg, LogoText } from './LogoStyles';

const Logo = ({ size = 'medium', showTagline = true, isFooter = false }) => {
  const { t } = useTranslation();

  return (
    <LogoWrapper to="/">
      {/* Professional SVG Monogram Logo */}
      <LogoSvg className={size}>
        <motion.svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: 10 }}
          className="logo-svg"
        >
          {/* Hexagon Background Layer */}
          <path 
            d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z" 
            fill="url(#logo-grad)" 
            className="hexagon-bg"
          />
          
          {/* Stylized 'A' component */}
          <path 
            d="M50 25L75 75H62L50 50L38 75H25L50 25Z" 
            fill="white" 
            className="logo-letter-a"
          />
          
          {/* Professional Dot/Accent */}
          <circle cx="50" cy="65" r="5" fill="rgba(255,255,255,0.7)" />
          
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#800000" /> {/* Primary Maroon */}
              <stop offset="1" stopColor="#300000" /> {/* Deep Maroon/Black */}
            </linearGradient>
          </defs>
        </motion.svg>
      </LogoSvg>
      
      <LogoText className={isFooter ? 'footer' : ''}>
        <div className="name">
          Aman<span>Katiyar</span>
        </div>
        {showTagline && (
          <div className="tagline">{t('logo.tagline')}</div>
        )}
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
