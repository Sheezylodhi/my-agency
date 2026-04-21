"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import { useState, useEffect, useMemo } from "react";

function Stars() {
  const count = 200; // 🔥 reduced from 500

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
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#1D4ED8"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-4.5, 0.5, 0]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#1D4ED8" wireframe />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[4.5, -0.5, 0]}>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <meshStandardMaterial color="#334155" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 🔥 low-end device detect
    const low = navigator.hardwareConcurrency <= 4;
    setIsLowEnd(low);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 40 }}
      style={{ background: "#ffffff" }}
      gl={{
        antialias: false, // 🔥 performance boost
        powerPreference: "high-performance",
        alpha: true,
      }}
      dpr={[1, 1.5]} // 🔥 optimized
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 🔥 Stars only on good devices */}
      {!isLowEnd && <Stars />}

      <FloatingShapes />

      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.25}
        scale={12}
        blur={2}
        far={4}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}