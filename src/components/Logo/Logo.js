import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogoWrapper, LogoSvg, LogoText } from './LogoStyles';
import logoImg from '../../assets/logo.png';

const Logo = ({ size = 'medium', showTagline = true, isFooter = false }) => {
  const { t } = useTranslation();

  return (
    <LogoWrapper to="/">
      {/* Professional SVG Monogram Logo */}
      <LogoSvg className={size}>
        <img src={logoImg} alt="Aman Katiyar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
