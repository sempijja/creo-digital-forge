
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const particleGeometry = new THREE.BufferGeometry();
    
    // Set the positions and colors of the particles
    for (let i = 0; i < particlesCount; i++) {
      // Positions
      positions[i * 3] = (Math.random() - 0.5) * 40; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
      
      // Colors - purple/blue gradient
      colors[i * 3] = 0.4 + Math.random() * 0.2; // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.2; // G
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3; // B
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial);
    scene.add(particles);

    // Animation variables
    const rotationSpeed = 0.0003;
    const mousePosition = { x: 0, y: 0 };
    
    // Track mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.x = (event.clientX / window.innerWidth) - 0.5;
      mousePosition.y = (event.clientY / window.innerHeight) - 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the particles
      particles.rotation.x += rotationSpeed;
      particles.rotation.y += rotationSpeed * 0.5;
      
      // Follow mouse
      particles.rotation.x += (mousePosition.y * 0.5 - particles.rotation.x) * 0.02;
      particles.rotation.y += (mousePosition.x * 0.5 - particles.rotation.y) * 0.02;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose of geometries and materials
      particleGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeBackground;
