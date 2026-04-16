"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Stars() {
  const count = 800;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 25;
  }

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
        color="#0F172A"
        size={0.04}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[-2, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#0F172A" wireframe />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 1, 0]}>
          <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
          <meshStandardMaterial color="#1D4ED8" wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.3} floatIntensity={1.8}>
        <mesh position={[0, -2, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#334155" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{ background: "#ffffff" }}
    >
      {/* lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      {/* BOTH: stars + shapes */}
      <Stars />
      <FloatingShapes />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}