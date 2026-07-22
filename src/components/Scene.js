"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Environment } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

/* ---------- floating shapes ---------- */

function FloatingCard({ position, color, scale = 1, roughness = 0.45 }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1.4, 0.9, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={roughness} />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, color, scale = 1 }) {
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1}>
      <mesh position={position} scale={scale} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.55, 0.09, 32, 64]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function FloatingOrb({ position, color, scale = 1 }) {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.05}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

/* ---------- subtle mouse parallax on the whole rig ---------- */

function ParallaxRig({ children }) {
  const group = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.15,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.08,
      0.04
    );
  });

  return <group ref={group}>{children}</group>;
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
      style={{ background: "transparent", opacity: 0.75 }}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      dpr={[1, 1.5]}
    >
      {/* SOFT STUDIO LIGHTING */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#1D4ED8" />

      <fog attach="fog" args={["#ffffff", 8, 16]} />

      <ParallaxRig>
        {/* ❌ CENTER KEPT EMPTY ON PURPOSE */}

        {/* LEFT SIDE */}
        <FloatingCard position={[-4.2, 1.2, -1]} color="#1D4ED8" />
        <FloatingRing position={[-3.6, -1.6, -2]} color="#0F172A" scale={1.1} />

        {/* RIGHT SIDE */}
        <FloatingOrb position={[4.2, -1, -1]} color="#1D4ED8" />
        <FloatingCard position={[3.8, 1.6, -2]} color="#64748B" scale={1.1} />

        {/* DEPTH LAYER */}
        <FloatingRing position={[0, 2.6, -4]} color="#94A3B8" scale={1.2} />
        <FloatingCard position={[-2.2, -2.4, -3.5]} color="#334155" scale={0.85} roughness={0.6} />
      </ParallaxRig>

      {/* GROUND SHADOW */}
      <ContactShadows position={[0, -2.8, 0]} opacity={0.18} scale={14} blur={3} far={5} />

      {/* AUTO ROTATE — good devices only */}
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