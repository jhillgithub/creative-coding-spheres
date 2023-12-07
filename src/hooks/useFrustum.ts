import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { Plane, Vector3, Frustum, Matrix4 } from "three";

const useFrustum = () => {
  const { camera } = useThree();

  const frustum = useMemo(() => {
    const frustum = new Frustum();

    frustum.setFromProjectionMatrix(
      new Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
    );
    return frustum;
  }, [camera]);

  const getClosestPlaneNormal = (position: Vector3) => {
    let closestPlane: Plane | undefined;
    let minDistance = Infinity;

    frustum.planes.forEach((plane) => {
      const distance = plane.distanceToPoint(position);
      if (distance < minDistance) {
        minDistance = distance;
        closestPlane = plane;
      }
    });

    return closestPlane?.normal.clone();
  };

  return { frustum, getClosestPlaneNormal };
};

export default useFrustum;
