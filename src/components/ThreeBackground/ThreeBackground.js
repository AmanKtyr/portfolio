import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeBackgroundContainer } from './ThreeBackgroundStyles';


gsap.registerPlugin(ScrollTrigger);

const ThreeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameIdRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device performance
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setIsLowPerformance(true);
        return;
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Check for integrated graphics or mobile GPUs
        if (renderer.includes('Intel') || renderer.includes('Mobile') || renderer.includes('Adreno')) {
          setIsLowPerformance(true);
        }
      }

      // Check for mobile devices
      if (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        setIsLowPerformance(true);
      }
    };

    checkPerformance();

    // Only initialize if component is visible and performance is acceptable
    if (!isVisible || isLowPerformance) return;

    if (!containerRef.current) return;

    // Initialize Three.js scene
    const initThree = () => {
      // Scene
      sceneRef.current = new THREE.Scene();

      // Camera
      const fov = 75;
      const aspect = window.innerWidth / window.innerHeight;
      const near = 0.1;
      const far = 1000;
      cameraRef.current = new THREE.PerspectiveCamera(fov, aspect, near, far);
      cameraRef.current.position.z = 30;

      // Renderer with performance optimizations
      rendererRef.current = new THREE.WebGLRenderer({
        antialias: false, // Disable antialiasing for better performance
        alpha: true,
        powerPreference: "high-performance"
      });
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // Limit pixel ratio
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Create particles with reduced count
      createParticles();

      // Add event listeners
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);

      // Start animation
      animate();
    };

    // Create particles with optimized count
    const createParticles = () => {
      // Reduce particle count based on performance
      const particleCount = isLowPerformance ? 300 : 800; // Reduced from 1500
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const speeds = new Float32Array(particleCount);

      const color = new THREE.Color();

      // Simplified particle creation
      for (let i = 0; i < particleCount; i++) {
        // Simplified positioning
        positions[i * 3] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

        // Simplified color scheme
        const colorIndex = Math.floor(Math.random() * 3);
        if (colorIndex === 0) {
          color.set('#2563eb');
        } else if (colorIndex === 1) {
          color.set('#1e40af');
        } else {
          color.set('#3b82f6');
        }

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random() * 2 + 0.5; // Smaller sizes
        speeds[i] = 0.005 + Math.random() * 0.02; // Slower speeds
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Store speeds for animation
      geometry.userData = {
        speeds,
        originalPositions: positions.slice()
      };

      // Simplified material without complex shaders
      const material = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true
      });

      particlesRef.current = new THREE.Points(geometry, material);
      sceneRef.current.add(particlesRef.current);
    };

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle mouse movement with throttling
    let mouseThrottle = 0;
    const handleMouseMove = (event) => {
      mouseThrottle++;
      if (mouseThrottle % 3 !== 0) return; // Throttle to every 3rd event
      
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Optimized animation loop
    let lastTime = 0;
    const animate = (currentTime) => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Limit frame rate for better performance
      if (currentTime - lastTime < 16) return; // ~60fps
      lastTime = currentTime;

      if (particlesRef.current) {
        // Simplified rotation
        particlesRef.current.rotation.x += 0.0002;
        particlesRef.current.rotation.y += 0.0003;

        // Reduced mouse interaction
        if (mouseThrottle % 10 === 0) {
          particlesRef.current.rotation.x += mouseRef.current.y * 0.0001;
          particlesRef.current.rotation.y += mouseRef.current.x * 0.0001;
        }

        // Simplified particle animation
        const positions = particlesRef.current.geometry.attributes.position.array;
        const originalPositions = particlesRef.current.geometry.userData.originalPositions;
        const speeds = particlesRef.current.geometry.userData.speeds;
        const time = Date.now() * 0.0005; // Slower animation

        for (let i = 0; i < positions.length; i += 3) {
          const ix = i;
          const iy = i + 1;
          const iz = i + 2;

          // Simplified wave effect
          positions[ix] = originalPositions[ix] + Math.sin(time * speeds[i/3]) * 0.3;
          positions[iy] = originalPositions[iy] + Math.cos(time * speeds[i/3]) * 0.3;
          positions[iz] = originalPositions[iz] + Math.sin(time * speeds[i/3]) * 0.3;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Simplified scroll animations
    const setupScrollAnimations = () => {
      if (!particlesRef.current || !cameraRef.current) return;
      
      gsap.to(cameraRef.current.position, {
        z: 25,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Reduced scrub intensity
        }
      });
    };

    // Initialize
    initThree();

    // Set up scroll animations after a delay
    setTimeout(() => {
      if (particlesRef.current) {
        setupScrollAnimations();
      }
    }, 200);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.clear();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [isVisible, isLowPerformance]);

  // Intersection Observer to only render when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Don't render on low-performance devices
  if (isLowPerformance) {
    return null;
  }

  return <ThreeBackgroundContainer ref={containerRef} />;
};

export default ThreeBackground;
