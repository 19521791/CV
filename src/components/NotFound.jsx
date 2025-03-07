import Wheel from "models/Wheel"

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 md:p-12 pb-12 !pt-[100px] min-h-[calc(100vh-80px)] text-slate-700">
      <div className="flex flex-row justify-center items-center">
        <div className="basis-1/2 w-full h-full flex justify-center items-center">
          <Wheel />
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <h1>404</h1>
          <h2>UH OH! You&apos;re lost.</h2>
          <p>The page you are looking for does not exist.
            How you got here is a mystery. But you can click the button below
            to go back to the homepage.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound