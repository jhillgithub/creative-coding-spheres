import {
  useFrame,
  type InstancedMeshProps,
  type RootState,
} from "@react-three/fiber";
import { useMemo, useRef, type RefObject } from "react";
import { rescale } from "src/utils";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  Matrix4,
  Object3D,
  OrthographicCamera,
  Vector3,
  type NormalBufferAttributes,
  MathUtils,
} from "three";

const getPosition = (index: number, mesh: InstancedMesh) => {
  const matrix = new Matrix4();
  mesh.getMatrixAt(index, matrix);
  const position = new Vector3();
  position.setFromMatrixPosition(matrix);
  return position;
};

let delayit = 0;
const updateDirection = (
  index: number,
  directions: Vector3[],
  position: Vector3,
  camera: OrthographicCamera,
  radius: number
) => {
  if (
    position.x <= camera.left + radius ||
    position.x >= camera.right - radius
  ) {
    directions[index].x = -directions[index].x;
  }
  if (
    position.y <= camera.bottom + radius ||
    position.y >= camera.top - radius
  ) {
    directions[index].y = -directions[index].y;
  }
  const zLimit = Math.abs(camera.position.z) - radius - 2;
  if (position.z <= -zLimit || position.z >= zLimit) {
    directions[index].z = -directions[index].z;
  }
};

interface GradientSpheresProps extends InstancedMeshProps {
  count: number;
}
export const GradientSpheres = ({ count, ...props }: GradientSpheresProps) => {
  const meshRef = useRef<InstancedMesh>(null);
  const directions = useMemo(() => {
    return new Array(count)
      .fill(null)
      .map(() =>
        new Vector3(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        ).normalize()
      );
  }, [count]);
  const speed = 2;
  const radius = 0.5;

  useFrame((state: RootState, delta: number) => {
    if (!meshRef.current) return;
    const camera = state.camera as OrthographicCamera;

    for (let i = 0; i < count; i++) {
      const position = getPosition(i, meshRef.current);

      /**Calculate new position */
      position.x += directions[i].x * speed * delta;
      position.y += directions[i].y * speed * delta;
      position.z += directions[i].z * speed * delta;

      /**Copy Position and set matrix*/
      const dummy = new Object3D();
      dummy.position.copy(position);
      const zDist = camera.position.z - position.z;
      const clamped = MathUtils.clamp(zDist, 0, position.z);
      const rescaledZ = rescale(clamped, 0, 1, 0.2, 0.24);
      // delayit++;
      // if (delayit % 1000 === 0) {
      //   // console.log(zDist, clamped);
      // }
      // // console.log(zDist, clamped);

      dummy.scale.set(rescaledZ, rescaledZ, rescaledZ);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      /**Invert direction if at camera bounds */
      updateDirection(i, directions, position, camera, radius);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      {...props}
      args={[undefined, undefined, count]}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </instancedMesh>
  );
};
