// Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
    const { scene } = useGLTF('/retro_computer.glb');
  
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.alphaTest = 0.5;
        child.material.depthWrite = true;
      }
    });
  
    scene.scale.set(3.5, 3.5, 3.5);
    scene.position.set(-3, -1, 1);  // Moved model to the left
  
    useFrame(({ clock }) => {
      scene.rotation.y = clock.elapsedTime * 0.5; // Rotation around the horizontal axis
    });
  
    return <primitive object={scene} />;
};

export default Model;
