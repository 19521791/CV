/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import rocketScene from "/3d/toy_rocket.glb";

useGLTF.preload(rocketScene)

const Rocket = ({ ...props }) => {
  const { scene } = useGLTF(rocketScene);
  const rocketRef = useRef();

  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={rocketRef} {...props} />;
};

export default Rocket;
