import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {Html} from '@react-three/drei'

function App3Fiber() {
  return (
    <Canvas>
        <Suspense fallback={null}>
            <Html></Html>
        </Suspense>
    </Canvas>
  )
}

export default App3Fiber