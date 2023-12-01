import { Color } from "three";

export const Scene = () => {
  return (
    <>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={new Color(0x00ffff)} />
      </mesh>
    </>
  );
};
