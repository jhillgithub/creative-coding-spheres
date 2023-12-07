import { useRef } from "react";
import { useFrame, type MeshProps } from "@react-three/fiber";
import {
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Vector3,
} from "three";
import useFrustum from "@hooks/useFrustum";
import { rescale } from "src/utils";

/**Projects the x position from world space into the camera's normalized device coordinate (NDC) space [-1, 1]*/
const normalizeX = (x: number, camera: PerspectiveCamera) => {
  const position = new Vector3(x, 0, 0);
  position.project(camera);
  return position.x;
};

const setColorByPosition = (mesh: Mesh, camera: PerspectiveCamera) => {
  const hue = normalizeX(mesh.position.x, camera);
  const clampedHue = MathUtils.clamp(hue, -1, 1);
  const rescaledHue = rescale(clampedHue, -1, 1, 0, 360);
  const saturation = 100;
  const lightness = 50;

  const material = mesh.material as MeshStandardMaterial;

  material.color.setHSL(rescaledHue / 360, saturation / 100, lightness / 100);
  material.emissive.setHSL(
    rescaledHue / 360,
    saturation / 100,
    lightness / 100
  );
};

interface SphereProps extends MeshProps {
  initialDirection: Vector3;
  radius?: number;
  speed?: number;
}
export const Sphere = ({
  initialDirection,
  radius = 1,
  speed = 20,
  ...props
}: SphereProps) => {
  const meshRef = useRef<Mesh>(null);
  const direction = useRef(initialDirection);
  const { frustum, getClosestPlaneNormal } = useFrustum();

  useFrame(({ camera }, delta: number) => {
    if (!meshRef.current) return;
    const perspectiveCamera = camera as PerspectiveCamera;
    setColorByPosition(meshRef.current, perspectiveCamera);

    // Reflect the direction if the sphere is no longer in the frustum.
    if (!frustum.intersectsObject(meshRef.current)) {
      const normalOfClosestPlane = getClosestPlaneNormal(
        meshRef.current.position
      );
      // reflect the direction or reverse it
      direction.current = normalOfClosestPlane
        ? direction.current.reflect(normalOfClosestPlane)
        : direction.current.multiplyScalar(-1);
    }
    const velocity = direction.current.clone().multiplyScalar(speed * delta);
    meshRef.current.position.add(velocity);
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial
        color={"white"}
        emissive={"white"}
        emissiveIntensity={1}
      />
    </mesh>
  );
};
