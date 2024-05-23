
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Horse from './Horse';

export default function Viewer() {
  const ref = useRef();

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          <Horse />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
}    
