import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Suspense } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
export const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 50, near: 0.1, far: 150, position: [0, 0, 100] }}>
        <color attach="background" args={["black"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.9}
            luminanceSmoothing={0.01}
            intensity={0.125}
            height={300}
          />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </>
  );
};
