import './App.css';
import React, { Suspense } from 'react'; 
import { OrbitControls, Html, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Logo from './components/Logo';
import { Model } from './components/Sneaker';
import { Plane } from './components/Plane';
import { RightPanel } from './components/RightPanel';
import { useSnapshot } from 'valtio';
import { state } from './state/State';


function App() {
  const snap = useSnapshot(state)
  return (
    <>
    <Logo/>
    <RightPanel/>
    <Canvas shadows dpr={[1, 2]}>
      <fog attach="fog" args={["#ffe082", 5, 11.5]}/>
      
      <PerspectiveCamera position={[0, 15, 150]} />
      
      <ambientLight intensity={0.5} />
      
      <spotLight intensity={0.3} position={[5,10,10]} penumbra={1} />
      <spotLight intensity={0.4} position={[-5,10,-5]} penumbra={1} />
      <spotLight intensity={0.4} angle={1.2} penumbra={1} position={[0, 17, 1]} castShadow />
            
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} maxDistance={5.5} minDistance={3.2} autoRotate={snap.rotate}/>
      
      <Suspense fallback={<Html center>LOADING...</Html>}>
        
        <Model/>
       
      </Suspense>
      <Plane />
      
    </Canvas>
    {/* <Stats /> //this can be used to show frame rate*/}
  
    </>
  );
}

export default App;
