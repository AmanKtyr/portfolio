// Performance utility functions for optimizing the portfolio

// Check if device has low performance
export const isLowPerformanceDevice = () => {
  // Check for mobile devices
  if (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }

  // Check for low-end devices (less than 4 CPU cores)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return true;
  }

  // Check for integrated graphics
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if (renderer.includes('Intel') || renderer.includes('Mobile') || renderer.includes('Adreno')) {
          return true;
        }
      }
    }
  } catch (error) {
    // If WebGL is not supported, consider it low performance
    return true;
  }

  return false;
};

// Check if device supports WebGL
export const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (error) {
    return false;
  }
};

// Check if device has high refresh rate
export const hasHighRefreshRate = () => {
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(min-resolution: 120dpi)');
    return mediaQuery.matches;
  }
  return false;
};

// Throttle function for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Intersection Observer with performance options
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (srcs) => {
  return Promise.all(srcs.map(src => preloadImage(src)));
};

// Check network speed (basic implementation)
export const checkNetworkSpeed = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType) {
      switch (connection.effectiveType) {
        case 'slow-2g':
        case '2g':
        case '3g':
          return 'slow';
        case '4g':
          return 'medium';
        default:
          return 'fast';
      }
    }
  }
  return 'unknown';
};

// Optimize images based on device performance
export const getOptimizedImageSrc = (originalSrc, isLowPerformance = false) => {
  if (isLowPerformance) {
    // Return smaller images for low-performance devices
    return originalSrc.replace(/\.(jpg|jpeg|png|webp)/, '-small.$1');
  }
  return originalSrc;
};

// Memory usage check (basic)
export const checkMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
    const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
    
    return {
      used: usedMB,
      total: totalMB,
      percentage: Math.round((usedMB / totalMB) * 100)
    };
  }
  return null;
};

// Performance monitoring
export const startPerformanceMonitoring = () => {
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`${entry.name}: ${entry.duration}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
    return observer;
  }
  return null;
};

// Cleanup performance monitoring
export const stopPerformanceMonitoring = (observer) => {
  if (observer) {
    observer.disconnect();
  }
};


