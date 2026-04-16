"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function RotatingGroup() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.001;
  });

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2, 0, 0]}>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial color="#9333ea" wireframe />
        </mesh>
      </Float>

      <Float speed={3}>
        <mesh position={[2, 1, 0]}>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function ServicesScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <RotatingGroup />
    </Canvas>
  );
}