import React, { useRef, useEffect } from "react";
import { useThree, type OrthographicCameraProps } from "@react-three/fiber";
import { OrthographicCamera } from "three";

export const CustomCamera = (props: OrthographicCameraProps) => {
  const { size } = useThree();
  const cameraRef = useRef<OrthographicCamera>(null);
  const { set } = useThree();

  useEffect(() => {
    if (!cameraRef.current) return;
    set({ camera: cameraRef.current });
  }, [set, cameraRef]);
  useEffect(() => {
    if (cameraRef.current) {
      // Calculate the left, right, top, and bottom values based on the size
      const aspect = size.width / size.height;
      const frustumSize = 10; // Adjust the frustum size based on your needs

      cameraRef.current.left = (frustumSize * aspect) / -2;
      cameraRef.current.right = (frustumSize * aspect) / 2;
      cameraRef.current.top = frustumSize / 2;
      cameraRef.current.bottom = frustumSize / -2;
      cameraRef.current.near = 1;
      cameraRef.current.far = 1000;

      // Update the projection matrix
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size, cameraRef]);

  return <orthographicCamera ref={cameraRef} {...props} />;
};
