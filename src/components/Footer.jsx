const Footer = () => {
  return (
    <div className="hidden lg:block h-0">
      <div className="flex flex-row gap-1.5 items-center justify-center w-full flex-wrap">
        <p className="text-sm text-gray-600">
        Animations in this Portfolio are inspired by online tutorials — a learning journey to explore design
        techniques.
        </p>
        <p className="text-sm text-gray-600">
        Animation reference:
          <a className="ml-2 text-blue-500" href="https://dennissnellenberg.com/" rel="noopener noreferrer" target="_blank">
            See Here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer