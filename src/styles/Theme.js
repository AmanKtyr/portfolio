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
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    blur: '10px',
    shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
  },
  neumorphism: {
    background: '#f0f4f8',
    shadow1: '10px 10px 20px #d1d9e6',
    shadow2: '-10px -10px 20px #ffffff',
    activeShadow1: 'inset 5px 5px 10px #d1d9e6',
    activeShadow2: 'inset -5px -5px 10px #ffffff',
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
  glassmorphism: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(51, 65, 85, 0.18)',
    blur: '10px',
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  neumorphism: {
    background: '#1e293b',
    shadow1: '10px 10px 20px #131c27',
    shadow2: '-10px -10px 20px #29364f',
    activeShadow1: 'inset 5px 5px 10px #131c27',
    activeShadow2: 'inset -5px -5px 10px #29364f',
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
