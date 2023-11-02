import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Model from './model.js';
import Quiz from './quiz';

import PasswordChecker from './passwordChecker';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState('quiz');

  return (
    <div className="canvasContainerStyle">
      <div className="module-selector">
        <button 
          onClick={() => setActiveModule('quiz')}
          className={activeModule === 'quiz' ? 'active-btn' : ''}
        >
          Quiz
        </button>
        <button 
          onClick={() => setActiveModule('passwordchecker')}
          className={activeModule === 'passwordchecker' ? 'active-btn' : ''}
        >
          Password Checker
        </button>
      </div>
      <Canvas style={{ background: '#1E1E1E' }} shadows> 
        <ambientLight />
        <PerspectiveCamera makeDefault position={[4.5, 1.5, -0.5]} />
        <OrbitControls />
        <Model />
      </Canvas>
      {activeModule === 'quiz' && <Quiz />}
      {activeModule === 'passwordchecker' && <PasswordChecker />}
    </div>
  );
}

export default App;
