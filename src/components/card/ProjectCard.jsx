/* eslint-disable react/prop-types */
const ProjectCard = ({ index, title, link, signed_url, color, setModal }) => {
  return (
    <div
      className="w-full h-full flex flex-col lg:flex-row items-center justify-between lg:justify-center lg:border-t
        lg:border-gray-300 mb-28 sm:mb-20 md:mb-28 lg:mb-0"
      onMouseEnter={() => { if (window.matchMedia('(min-width: 1024px)').matches) setModal({ active: true, index: index }) }}
      onMouseLeave={() => { if (window.matchMedia('(min-width: 1024px)').matches) setModal({ active: false, index: index }) }}
    >

      <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full lg:py-[40px] group">

        <div className="lg:hidden w-[88vw] h-[86vw] sm:w-[43vw] sm:h-[43vw] flex items-center justify-center
    mb-4 sm:mb-6 md:mb-8 lg:mb-0"
        style={{ backgroundColor: color }}
        >
          <div className="w-[75vw] h-[45vw] sm:w-[37vw] sm:h-[25vw] flex items-center justify-center">
            <img
              src={signed_url}
              alt={title}
              className="w-full h-full object-cover shadow-md rounded-sm sm:group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-2 md:gap-3 lg:gap-0 items-start lg:flex-row lg:items-center
    lg:justify-between w-full cursor-pointer transition-all duration-500 ease-out
    lg:group-hover:opacity-40 lg:group-hover:translate-x-2"
        >
          <h2
            className="text-[35px] sm:text-[30px] md:text-[35px] lg:text-[40px]
        lg:pl-[60px] xl:pl-[100px] font-normal m-0 transition-all duration-500 ease-out"
          >
            {title}
          </h2>
          <div className="lg:hidden w-full h-[1px] bg-gray-200 mb-2 sm:mb-1 md:mb-3"></div>
          <p
            className="text-[18px] lg:text-[16px] lg:pr-[60px] xl:pr-[100px] font-light lg:font-normal
        m-0 transition-all duration-500 ease-out"
          >
            {title === 'Hello Clever' ? 'Payment Gateway' : 'Personal Project'}
          </p>
        </div>
      </a>

    </div>
  )
}

export default ProjectCard

