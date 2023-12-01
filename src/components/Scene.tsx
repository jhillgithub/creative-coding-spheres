import { Color } from "three";
import { GradientSpheres } from "./GradientSpheres";

export const Scene = () => {
  return (
    <>
      <ambientLight />
      <GradientSpheres count={10} />
    </>
  );
};
