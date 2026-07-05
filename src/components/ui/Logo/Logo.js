import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogoWrapper, LogoSvg, LogoText } from './LogoStyles';

const Logo = ({ size = 'medium', showTagline = true, isFooter = false }) => {
  const { t } = useTranslation();

  return (
    <LogoWrapper to="/">
      {/* Recreated Monogram Logo based on User's Image */}
      <LogoSvg className={`${size} logo-svg`}>
        <svg viewBox="-10 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-color, #ffffff)' }}>
          {/* White 'A' Shape */}
          <polygon 
            points="40,10 0,90 15,90 40,40 52.5,65 60,50 40,10" 
            fill="currentColor" 
          />
          
          {/* Blue 'K' Shape */}
          <polygon 
            points="45,90 80,20 95,20 85,40 110,90 95,90 77.5,55 60,90" 
            fill="var(--primary-color, #3b82f6)" 
          />
        </svg>
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
