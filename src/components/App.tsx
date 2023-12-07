import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Suspense } from "react";

export const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 50, near: 0.1, far: 150, position: [0, 0, 100] }}>
        <color attach="background" args={["slategray"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};
