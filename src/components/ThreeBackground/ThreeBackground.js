import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
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

      // Renderer
      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Create particles
      createParticles();

      // Add event listeners
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);

      // Start animation
      animate();
    };

    // Create particles
    const createParticles = () => {
      const particleCount = 1500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const speeds = new Float32Array(particleCount);
      const opacities = new Float32Array(particleCount);

      const color = new THREE.Color();

      // Create particles in different shapes
      for (let i = 0; i < particleCount; i++) {
        // Determine particle type
        const particleType = Math.floor(Math.random() * 3);

        if (particleType === 0) {
          // Grid pattern
          const gridSize = 50;
          const cellSize = 10;
          const x = (Math.floor(Math.random() * gridSize) - gridSize / 2) * cellSize;
          const y = (Math.floor(Math.random() * gridSize) - gridSize / 2) * cellSize;
          const z = (Math.floor(Math.random() * gridSize) - gridSize / 2) * cellSize;

          positions[i * 3] = x;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = z;
        } else if (particleType === 1) {
          // Sphere pattern
          const radius = 50;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;

          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
        } else {
          // Random pattern
          positions[i * 3] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }

        // Color
        const colorIndex = Math.floor(Math.random() * 5);
        if (colorIndex === 0) {
          color.set('#2563eb'); // Primary color
        } else if (colorIndex === 1) {
          color.set('#1e40af'); // Secondary color
        } else if (colorIndex === 2) {
          color.set('#3b82f6'); // Accent color
        } else if (colorIndex === 3) {
          color.set('#9333ea'); // Purple
        } else {
          color.set('#60a5fa'); // Light blue
        }

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        // Size
        sizes[i] = Math.random() * 3;

        // Speed for animation
        speeds[i] = 0.01 + Math.random() * 0.05;

        // Opacity
        opacities[i] = 0.3 + Math.random() * 0.7;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Store speeds and opacities in userData for animation
      geometry.userData = {
        speeds,
        opacities,
        originalPositions: positions.slice()
      };

      // Create shader material for more advanced effects
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pointTexture: {
            value: new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDctMjVUMTM6NDA6MTArMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA3LTI1VDEzOjQxOjQxKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA3LTI1VDEzOjQxOjQxKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVjYTYxMGJmLTgw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')
          }
        },
        vertexShader: `
          uniform float time;
          attribute float size;
          varying vec3 vColor;

          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform sampler2D pointTexture;
          varying vec3 vColor;

          void main() {
            gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
            if (gl_FragColor.a < 0.3) discard;
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      particlesRef.current = new THREE.Points(geometry, material);
      sceneRef.current.add(particlesRef.current);
    };

    // Handle window resize
    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        // Update shader time uniform
        particlesRef.current.material.uniforms.time.value += 0.01;

        // Rotate the entire particle system
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;

        // Subtle movement based on mouse position
        particlesRef.current.rotation.x += mouseRef.current.y * 0.0003;
        particlesRef.current.rotation.y += mouseRef.current.x * 0.0003;

        // Animate individual particles
        const positions = particlesRef.current.geometry.attributes.position.array;
        const originalPositions = particlesRef.current.geometry.userData.originalPositions;
        const speeds = particlesRef.current.geometry.userData.speeds;
        const time = Date.now() * 0.001;

        for (let i = 0; i < positions.length; i += 3) {
          const ix = i;
          const iy = i + 1;
          const iz = i + 2;

          // Apply wave effect
          positions[ix] = originalPositions[ix] + Math.sin(time * speeds[i/3] + ix) * 0.5;
          positions[iy] = originalPositions[iy] + Math.cos(time * speeds[i/3] + iy) * 0.5;
          positions[iz] = originalPositions[iz] + Math.sin(time * speeds[i/3] + iz) * 0.5;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    // Set up scroll animations
    const setupScrollAnimations = () => {
      // Animate camera position on scroll
      gsap.to(cameraRef.current.position, {
        z: 20,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });

      // Animate particles rotation on scroll
      gsap.to(particlesRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
    };

    // Initialize
    initThree();

    // Set up scroll animations after a short delay to ensure everything is loaded
    setTimeout(() => {
      if (particlesRef.current) {
        setupScrollAnimations();
      }
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

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
  }, []);

  return <ThreeBackgroundContainer ref={containerRef} />;
};

export default ThreeBackground;
