"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import { useState, useEffect } from "react";

function FloatingCard({ position, color, scale = 1 }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1.4, 0.9, 0.1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.25}
          roughness={0.45}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    setMounted(true);
    const low = navigator.hardwareConcurrency <= 4;
    setIsLowEnd(low);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{
        background: "transparent",
        opacity: 0.65, // 🔥 soft premium background feel
      }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
      }}
      dpr={[1, 1.5]}
    >
      {/* SOFT LIGHTING (premium studio look) */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <directionalLight position={[-5, -3, -5]} intensity={0.25} />

      {/* ❌ CENTER IS KEPT EMPTY ON PURPOSE (IMPORTANT) */}

      {/* LEFT SIDE OBJECTS */}
      <FloatingCard position={[-4.2, 1.2, -1]} color="#1D4ED8" />
      <FloatingCard position={[-3.8, -1.5, -2]} color="#64748B" scale={1.1} />

      {/* RIGHT SIDE OBJECTS */}
      <FloatingCard position={[4.2, -1, -1]} color="#0F172A" />
      <FloatingCard position={[3.8, 1.5, -2]} color="#1D4ED8" scale={1.1} />

      {/* BACK DEPTH OBJECT (very subtle) */}
      <FloatingCard position={[0, 2.5, -4]} color="#94A3B8" scale={1.3} />

      {/* GROUND SHADOW (soft premium base) */}
      <ContactShadows
        position={[0, -2.8, 0]}
        opacity={0.18}
        scale={14}
        blur={3}
        far={5}
      />

      {/* AUTO ROTATE ONLY FOR GOOD DEVICES */}
      {!isLowEnd && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />
      )}
    </Canvas>
  );
}