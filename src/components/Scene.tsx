import { Spheres } from "./Spheres";

export const Scene = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Spheres count={50} />
    </>
  );
};
