import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollButton } from './ScrollToTopStyles';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    // If we're on a page with a hash, remove the hash
    if (location.hash) {
      // Navigate to the same path without the hash
      navigate(location.pathname);
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reset scroll position when location changes
  useEffect(() => {
    // Only scroll to top if it's a new page (not just a hash change)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
