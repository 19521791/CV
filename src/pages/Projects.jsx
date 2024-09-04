/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { projects } from "constants"

// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const ProjectCard = ({ name, description, image, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-95"
  >
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 hover:bg-sky-500 hover:bg-opacity-60 transition-colors duration-700">
        <h3 className="text-xl font-semibold text-white mb-2 mt-2">{name}</h3>
        <p className="text-base text-gray-300 mb-4">{description}</p>
      </div>
    </div>
  </a>
);






const Projects = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="max-container">
      <div className="flex flex-col justify-center gap-10">
        <h3 className="subhead-text">
        Projects
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-slate-700">
          Here are a few of my standout projects:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 cursor-pointer">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.company_name}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md"
        >
          <i className="fas fa-arrow-up"></i> 
        </button>
      )}
    </section>
  )
}

export default Projects