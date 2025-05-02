import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollButton } from './ScrollToTopStyles';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton 
      onClick={scrollToTop} 
      isVisible={isVisible}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
