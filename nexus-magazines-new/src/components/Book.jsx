import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Book({ position, title, coverColor, isOpen }) {
  const hingeRef = useRef();

  // Smooth flip animation
  useFrame(() => {
    if (hingeRef.current) {
      const target = isOpen ? Math.PI * 1.1 : 0;
      hingeRef.current.rotation.y = THREE.MathUtils.lerp(
        hingeRef.current.rotation.y,
        target,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      {/* Book body */}
      <mesh>
        <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Cover (hinged) */}
      <group ref={hingeRef} position={[-0.5, 0, 0]}>
        <mesh position={[0.5, 0, 0.101]}>
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial
            color={coverColor}
            emissive={coverColor}
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
    </group>
  );
}
