// src/components/animations/BackgroundScene.tsx
"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate random particles
function generateRandomPoints(count = 5000) {
  const points = new Float32Array(count * 3);
  const size = 50;

  for (let i = 0; i < count * 3; i += 3) {
    points[i] = (Math.random() - 0.5) * size;
    points[i + 1] = (Math.random() - 0.5) * size;
    points[i + 2] = (Math.random() - 0.5) * size;
  }

  return points;
}

function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  const { camera } = useThree();

  useEffect(() => {
    // Set the camera position a bit back to see particles
    camera.position.z = 15;
  }, [camera]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;

    if (points.current) {
      points.current.rotation.x = time * 0.1;
      points.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Points
      ref={points}
      positions={generateRandomPoints()}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#3b82f6" // Primary blue color
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Create grid lines
function GridLines() {
  const grid = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.2;
    if (grid.current) {
      grid.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      grid.current.rotation.y = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <group ref={grid} position={[0, 0, 0]}>
      <gridHelper
        args={[30, 30, "#3b82f6", "#1e293b"]}
        position={[0, -10, 0]}
        rotation={[0, 0, 0]}
      />
      <gridHelper
        args={[30, 30, "#6366f1", "#1e293b"]}
        position={[0, 0, -15]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <ParticleField />
        <GridLines />
      </Canvas>
    </div>
  );
}
