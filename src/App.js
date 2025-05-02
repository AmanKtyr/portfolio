import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from './context/ThemeContext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

// Pages
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Services from './pages/Services/Services';
import ContactPage from './pages/Contact/Contact';

// Components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme(isDarkMode)}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </StyledThemeProvider>
  );
}

export default App;
