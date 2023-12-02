import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Suspense } from "react";

export const App = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["slategray"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};
