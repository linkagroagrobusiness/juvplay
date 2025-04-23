import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function PresenterModel() {
  const { scene } = useGLTF('/models/presenter.glb');
  return <primitive object={scene} scale={1} />;
}

export default function PresenterScene() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <PresenterModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
