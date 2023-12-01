import {
  useFrame,
  type InstancedMeshProps,
  type RootState,
} from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { InstancedMesh, Object3D, Vector3 } from "three";
import { rescale } from "src/utils";

type Sphere = {
  position: Vector3;
  rotation?: Vector3;
  scale?: Vector3;
  direction?: Vector3;
};
interface GradientSpheresProps extends InstancedMeshProps {
  count: number;
}
export const GradientSpheres = ({ count, ...props }: GradientSpheresProps) => {
  const sphere = useRef<InstancedMesh>(null);
  /**Dummy variables used for positioning and movement */
  const dummyTarget = new Object3D();
  const spheres = useRef<Array<Sphere>>([]);

  useMemo(() => {
    // Initialize positions and movement vectors
    for (let i = 0; i < count; i++) {
      // Initial random position
      const position = new Vector3(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );

      // Initial random scale
      const size = rescale(Math.random(), 0, 1, 0.25, 0.8);
      const scale = new Vector3(size, size, size);

      // Random movement vector
      const direction = new Vector3(
        Math.random() * 1.0 - 0.5,
        Math.random() * 1.0 - 0.5,
        Math.random() * 1.0 - 0.5
      ).normalize();

      spheres.current.push({ position, scale, direction });
    }
  }, [count]);

  useFrame((state: RootState, delta: number) => {
    if (!sphere.current) return;

    for (let i = 0; i < count; i++) {
      const { position, scale, direction } = spheres.current[i];
      // Update position based on movement vector and delta
      if (direction) {
        position.add(direction.clone().multiplyScalar(delta));
      }

      // Apply the updated position
      dummyTarget.position.copy(position);
      if (scale) {
        dummyTarget.scale.copy(scale);
      }
      dummyTarget.updateMatrix();
      sphere.current.setMatrixAt(i, dummyTarget.matrix);
    }

    sphere.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={sphere} {...props} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </instancedMesh>
  );
};
