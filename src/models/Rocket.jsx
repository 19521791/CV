/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import rocketScene from '/3d/toy_rocket.glb'

const Rocket = ({ ...props }) => {
  const { scene } = useGLTF(rocketScene)
  return <primitive object={scene} {...props} />
  
}
useGLTF.preload(rocketScene)
export default Rocket