const lightTheme = {
  isDarkMode: false,
  colors: {
    primary: '#D92C54', // Deep Maroon
    primaryRgb: '217, 44, 84',
    secondary: '#e91244ff', // Brownish Red
    secondaryRgb: '233, 18, 68',
    accent: '#D92C54', // Vibrant Red
    dark: '#0f172a',
    light: '#f8fafc',
    gray: '#475569', // Darker gray for better text contrast
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#ffffff',
    cardBg: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#475569',
    border: '#cbd5e1',
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
    shadow: '0 8px 32px 0 rgba(var(--primary-rgb), 0.07)',
  },
  neumorphism: {
    background: '#f0f4f8',
    shadow1: '10px 10px 20px #e6d1d1',
    shadow2: '-10px -10px 20px #ffffff',
    activeShadow1: 'inset 5px 5px 10px #e6d1d1',
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
    primary: '#08CB00', // Neon Green
    primaryRgb: '8, 203, 0',
    secondary: '#39ff14', // Lighter Green
    secondaryRgb: '57, 255, 20',
    accent: '#F97A00', // Cyber Orange
    dark: '#f8fafc',
    light: '#030712',
    gray: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#030712',
    cardBg: '#0f172a',
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    border: '#1e293b',
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

