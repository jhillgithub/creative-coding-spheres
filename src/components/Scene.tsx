import { GradientSpheres } from "./GradientSpheres";
import { CustomCamera } from "./CustomCamera";

export const Scene = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <CustomCamera position={[0, 0, 10]} />
      <GradientSpheres count={100} />
    </>
  );
};
