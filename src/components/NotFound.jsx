/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import Rocket from "models/Rocket"

const NotFound = () => {
  return (
    <div className="max-w-7xl m-auto p-4 sm:p-8 md:p-12 pb-12 !pt-[100px] md:!pt-[50px] min-h-[calc(100vh-80px)] text-slate-700">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold font-poppins leading-snug mb-2">404</h1>
          <h2 className="text-xl font-medium font-poppins leading-snug mb-2">UH OH! You&apos;re lost.</h2>
          <p className="uppercase mx-4 tracking-widest text-gray-500 font-medium text-xs text-center">The page you are looking for does not exist.
            How you got here is a mystery.
          </p>
        </div>
        <div className="basis-1/2 w-full h-[800px] flex justify-center items-center">
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 1, 3] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[1, 1, 1]} intensity={1} />
              <Rocket scale={[7, 7, 7]} position={[0, -1, 0]} castShadow receiveShadow/>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound