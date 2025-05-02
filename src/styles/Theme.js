const lightTheme = {
  isDarkMode: false,
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#3b82f6',
    dark: '#1e293b',
    light: '#f8fafc',
    gray: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#ffffff',
    cardBg: '#ffffff',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 5px 15px rgba(0, 0, 0, 0.1)',
    large: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.2s ease',
  },
  borderRadius: {
    small: '4px',
    default: '8px',
    large: '12px',
    round: '50%',
  },
};

const darkTheme = {
  isDarkMode: true,
  colors: {
    primary: '#3b82f6',
    secondary: '#1e40af',
    accent: '#60a5fa',
    dark: '#f8fafc',
    light: '#0f172a',
    gray: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#0f172a',
    cardBg: '#1e293b',
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    border: '#334155',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.3)',
    medium: '0 5px 15px rgba(0, 0, 0, 0.3)',
    large: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.2s ease',
  },
  borderRadius: {
    small: '4px',
    default: '8px',
    large: '12px',
    round: '50%',
  },
};

const theme = (isDarkMode) => (isDarkMode ? darkTheme : lightTheme);

export default theme;
