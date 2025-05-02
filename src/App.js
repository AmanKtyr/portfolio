import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from './context/ThemeContext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Services from './pages/Services/Services';
import ContactPage from './pages/Contact/Contact';

// Components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import PageTransition from './components/PageTransition/PageTransition';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}

function AppWrapper() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme(isDarkMode)}>
      <GlobalStyles />
      <ThreeBackground />
      <ParticleBackground />
      <CustomCursor />
      <Router>
        <AppContent />
      </Router>
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
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default App;
