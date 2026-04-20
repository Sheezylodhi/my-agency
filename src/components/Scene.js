"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import { useState, useEffect, useMemo } from "react";

function Stars() {
  // Manual points create karte hain taake size control ho sakay
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#1D4ED8" // Blue color for stars
        size={0.08}    // Size ko bada rakha hai taake waazay nazar aayein
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
}

function FloatingShapes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop par shapes ko corners par rakha hai
  const leftX = isMobile ? -1.2 : -4.8;
  const rightX = isMobile ? 1.2 : 4.8;

  return (
    <>
      {/* LEFT SHAPE */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[leftX, 0.5, 0]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#1D4ED8" wireframe />
        </mesh>
      </Float>

      {/* RIGHT SHAPE */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[rightX, -0.5, 0]}>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <meshStandardMaterial color="#334155" wireframe />
        </mesh>
      </Float>

      {/* DEPTH ELEMENT */}
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[isMobile ? 0 : -2, -3, -1]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#94A3B8" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 40 }}
      style={{ background: "#ffffff" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Background manual stars */}
      <Stars />
      
      <FloatingShapes />

      {/* Shadow under shapes */}
      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.3}
        scale={15}
        blur={2}
        far={4.5}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}