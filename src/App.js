import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from './context/ThemeContext';
import { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Services from './pages/Services/Services';
import ContactPage from './pages/Contact/Contact';
import BlogPage from './pages/Blog/Blog';
import AboutPage from './pages/About/About';
import SkillsPage from './pages/Skills/Skills';
import ProjectsPage from './pages/Projects/Projects';

// Components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import PageTransition from './components/PageTransition/PageTransition';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}

function AppWrapper() {
  const { isDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

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
            <ThreeBackground />
            <ParticleBackground />
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
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default App;

