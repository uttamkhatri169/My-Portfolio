"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Cloud Geometry & Material
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const redColor = new THREE.Color("#FF3B2E");
    const darkRedColor = new THREE.Color("#80150E");
    const whiteColor = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 14;
      positions[i3 + 1] = (Math.random() - 0.5) * 14;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const rand = Math.random();
      const mixedColor = rand > 0.7 ? redColor : rand > 0.35 ? darkRedColor : whiteColor;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particles.rotation.z = Math.PI / 4;
    scene.add(particles);

    // Floating Torus Geometry
    const ringGeometry = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xff3b2e,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(3.5, -1, -3);
    scene.add(ring);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particles.rotation.x = elapsedTime * -0.02;
      particles.rotation.y = elapsedTime * -0.03;

      ring.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;
      ring.rotation.y = elapsedTime * 0.15;
      ring.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3B2E]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D92A1F]/10 rounded-full blur-[160px]" />

      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
