/* eslint-disable react/prop-types */
import { projects } from "@/constants"

import 'react-vertical-timeline-component/style.min.css'
import Tilt from "react-parallax-tilt"

const ProjectCard = ({ description, image, link }) => (
  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={250}>
    <div 
      className="bg-cover bg-center h-64 rounded-lg shadow-lg"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40 rounded-lg hover:bg-gray-900 hover:bg-opacity-20 transition-all ease-in-out duration-400">
          <div className="mx-16 text-white text-center uppercase font-medium text-xl">
            {description}
          </div>
        </div>
      </a>
    </div>
  </Tilt>
)

const Projects = () => {
  return (
    <div className="max-container text-slate-700">
      <h1 className="font-semibold text-5xl font-poppins mb-4 leading-snug">
        Projects
      </h1>
      <p className="text-xl mb-5">
        Here are a few of my standout projects:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 cursor-pointer px-2 sm:mx-8 md:mx-0">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects