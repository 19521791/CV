/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import LoaderObject from '@/components/loading/LoaderObject'
import Loader from '@/components/loading/Preloader'
import Island from '@/models/Island'
import Sky from '@/models/Sky'
import Bird from '@/models/Bird'
import Plane from '@/models/Plane'
import ModelInfo from '@/components/ModelInfo'

const Model = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const [isCanvasLoading, setIsCanvasLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCanvasLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="w-full h-screen relative">
      {isCanvasLoading && <Loader />}

      {!isCanvasLoading && (
        <>
          <div
            className="absolute top-28 left-0 right-0 md:flex items-center justify-center hidden"
            style={{ zIndex: 'var(--z-model-info)' }}
          >
            {currentStage && <ModelInfo currentStage={currentStage} />}
          </div>

          <Canvas
            className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={ <LoaderObject />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

              <Bird />
              <Sky isRotating={isRotating} />
              <Island
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
              <Plane
                isRotating={isRotating}
                scale={planeScale}
                position={planePosition}
                rotation={[0, 20, 0]}
              />
            </Suspense>
          </Canvas>
        </>
      )}
    </section>
  )
}

export default Model