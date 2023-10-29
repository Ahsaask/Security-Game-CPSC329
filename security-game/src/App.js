import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Model from './model';
import Quiz from './quiz';
import './App.css'

function App() {
  return (
    <div className="canvasContainerStyle">
      <Canvas style={{ background: '#1E1E1E' }} shadows> 
        <ambientLight />
        <PerspectiveCamera makeDefault position={[4.5, 1.5, -0.5]} />
        <OrbitControls />
        <Model />
      </Canvas>
      <Quiz/>
    </div>
  );
}

export default App;
