import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export const App = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["slategray"]} />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
};
