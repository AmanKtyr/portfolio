import React, { useEffect, useRef } from 'react';
import { ParticleContainer } from './ParticleBackgroundStyles';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor(window.innerWidth * 0.1), 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = Math.random() * 1 - 0.5;
        const directionY = Math.random() * 1 - 0.5;
        const color = getRandomColor();
        
        particles.push({
          x,
          y,
          directionX,
          directionY,
          size,
          color,
          originalSize: size
        });
      }
      
      particlesRef.current = particles;
    };
    
    const getRandomColor = () => {
      const colors = [
        'rgba(59, 130, 246, 0.7)', // Blue
        'rgba(147, 51, 234, 0.7)',  // Purple
        'rgba(16, 185, 129, 0.7)',  // Green
        'rgba(245, 158, 11, 0.7)',  // Yellow
        'rgba(239, 68, 68, 0.7)'    // Red
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Update position
        p.x += p.directionX;
        p.y += p.directionY;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
        
        // Mouse interaction
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            
            p.x += Math.cos(angle) * force * 2;
            p.y += Math.sin(angle) * force * 2;
            p.size = p.originalSize + force * 3;
          } else {
            p.size = p.originalSize;
          }
        }
        
        // Connect particles
        connectParticles(p, i);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const connectParticles = (p, index) => {
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.2;
          ctx.globalAlpha = 1 - (distance / 150);
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    
    // Initialize
    resizeCanvas();
    animate();
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <ParticleContainer ref={canvasRef} />;
};

export default ParticleBackground;
