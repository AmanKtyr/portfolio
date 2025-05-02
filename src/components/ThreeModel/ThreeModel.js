import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ThreeModelContainer } from './ThreeModelStyles';

const ThreeModel = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const initThree = () => {
      // Scene
      sceneRef.current = new THREE.Scene();

      // Camera
      const fov = 75;
      const aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      const near = 0.1;
      const far = 1000;
      cameraRef.current = new THREE.PerspectiveCamera(fov, aspect, near, far);
      cameraRef.current.position.z = 5;

      // Renderer
      rendererRef.current = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      sceneRef.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      sceneRef.current.add(directionalLight);

      // Create laptop model (simplified as a group of meshes)
      createLaptopModel();

      // Add event listeners
      window.addEventListener('resize', handleResize);

      // Start animation
      animate();
    };

    // Create a simplified laptop model
    const createLaptopModel = () => {
      modelRef.current = new THREE.Group();
      
      // Laptop base
      const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
      const baseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        shininess: 100
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      
      // Laptop screen
      const screenGeometry = new THREE.BoxGeometry(3, 2, 0.1);
      const screenMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x222222,
        shininess: 100
      });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.y = 1.1;
      screen.position.z = -0.95;
      screen.rotation.x = -0.2;
      
      // Screen display
      const displayGeometry = new THREE.PlaneGeometry(2.8, 1.8);
      const displayMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, // Primary blue color
        side: THREE.DoubleSide
      });
      const display = new THREE.Mesh(displayGeometry, displayMaterial);
      display.position.y = 1.1;
      display.position.z = -0.9;
      display.rotation.x = -0.2;
      
      // Keyboard
      const keyboardGeometry = new THREE.PlaneGeometry(2.8, 1.8);
      const keyboardMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x444444,
        shininess: 50
      });
      const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
      keyboard.position.y = 0.11;
      keyboard.position.z = 0;
      keyboard.rotation.x = -Math.PI / 2;
      
      // Add all parts to the model group
      modelRef.current.add(base);
      modelRef.current.add(screen);
      modelRef.current.add(display);
      modelRef.current.add(keyboard);
      
      // Add the model to the scene
      modelRef.current.rotation.x = 0.2;
      sceneRef.current.add(modelRef.current);
    };

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        // Gentle floating animation
        modelRef.current.rotation.y += 0.005;
        modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    // Initialize
    initThree();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  return <ThreeModelContainer ref={containerRef} />;
};

export default ThreeModel;
