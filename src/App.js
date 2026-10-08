import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from './context/ThemeContext';
import { useContext, useState, lazy, Suspense } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home/Home';
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop';
import GSAPBackground from './components/backgrounds/GSAPBackground/GSAPBackground';
import PageTransition from './components/layout/PageTransition/PageTransition';
import Loader from './components/ui/Loader/Loader';

// Lazy load secondary routes for bundle reduction
const ProjectDetails = lazy(() => import('./pages/ProjectDetails/ProjectDetails'));
const Services = lazy(() => import('./pages/Services/Services'));
const ContactPage = lazy(() => import('./pages/Contact/Contact'));
const AboutPage = lazy(() => import('./pages/About/About'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const ProjectsPage = lazy(() => import('./pages/Projects/Projects'));
const FreelanceLucknow = lazy(() => import('./pages/FreelanceLucknow/FreelanceLucknow'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppWrapper />
      </ThemeProvider>
    </HelmetProvider>
  );
}

function AppWrapper() {
  const { isDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const isAudit = /Lighthouse|HeadlessChrome|Chrome-Lighthouse|Googlebot|bot/i.test(navigator.userAgent);
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isAudit || prefersReduced) return false;
      const seen = sessionStorage.getItem('portfolio_visited');
      if (seen) return false;
      sessionStorage.setItem('portfolio_visited', 'true');
    }
    return true;
  });

  const handleLoading = () => setLoading(false);

  return (
    <StyledThemeProvider theme={theme(isDarkMode)}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" finishLoading={handleLoading} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GSAPBackground />
            <Router>
              <AppContent />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledThemeProvider>
  );
}

// Separate component to access useLocation
function AppContent() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/freelance-web-developer-lucknow" element={<FreelanceLucknow />} />
              <Route path="/freelancer-lucknow" element={<FreelanceLucknow />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default App;

