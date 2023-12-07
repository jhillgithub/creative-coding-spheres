import { Vector3 } from "three";
import { Sphere } from "./Sphere";
import { useMemo } from "react";

type SpheresProps = {
  count: number;
};
export const Spheres = ({ count }: SpheresProps) => {
  // Initialize spheres with random directions
  const spheres = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        direction: new Vector3(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        ).normalize(),
      })),
    [count]
  );

  return (
    <group>
      {spheres.map((sphere, index) => (
        <Sphere key={index} initialDirection={sphere.direction} />
      ))}
    </group>
  );
};
