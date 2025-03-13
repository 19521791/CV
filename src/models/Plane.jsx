/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '/3d/plane.glb'
import { useEffect, useRef } from 'react'

useGLTF.preload(planeScene)

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef()
  const { scene, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if(isRotating) {
      actions['Take 001'].play()
    } else {
      actions['Take 001'].stop()
    }
  }, [actions, isRotating])
  return (
    <mesh {...props} ref={ref} >
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane