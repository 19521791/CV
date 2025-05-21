import { useContext, useState } from 'react'
import { ImageContext } from '@/contexts/ImageContext'
import Modal from '@/components/card/Modal'
import { projectItems } from '@/constants'
import ProjectDetailModal from '@/components/card/ProjectDetailModal'

const Work = () => {
  const { images } = useContext(ImageContext)
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentProjectId, setCurrentProjectId] = useState(1)

  const currentProject = projectItems.find(p => p.id === currentProjectId)

  const handleClick = (project) => {
    if (modal) {
      setCurrentProjectId(project.id)
      setOpenModal(true)
    }
  }

  return (
    <section className="mx-auto p-4 sm:p-8 md:p-14 pb-12 !pt-[100px] max-w-[1500px] font-neuetral">
      <p className='uppercase pb-10 lg:pb-5 lg:mb-6 text-xl'>Standout Projects</p>

      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-4 border-b-[2px] border-gray-200 border-opacity-50 mix-blend-luminosity
 pb-4 uppercase text-[clamp(0.6rem,0.8vw,0.75rem)] text-slate-500">
          <div className="col-span-5 xl:col-span-5 2xl:col-span-5 pl-16 xl:pl-20 py-6">
            <div className="px-4 2xl:px-0">Project</div>
          </div>
          <div className="col-span-2 xl:col-span-3 2xl:col-span-3 py-6">
            <div className="px-4 2xl:px-0">Description</div>
          </div>
          <div className="col-span-2 xl:col-span-2 2xl:col-span-2 py-6">
            <div className="px-4 2xl:px-0">Tag</div>
          </div>
          <div className="col-span-3 xl:col-span-2 2xl:col-span-2 py-6">
            <div className="px-4 2xl:px-0">Timeline</div>
          </div>
        </div>


        <div className="font-neuetral cursor-pointer">
          {projectItems.map((project, index) => (
            <a
              key={index}
              // href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-12 gap-4 py-[clamp(1.5rem,2vw,2.5rem)] border-b-[2px] border-gray-200 border-opacity-50 mix-blend-luminosity
 transition-all duration-500 ease-out"
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              onClick={() => handleClick(project)}
            >
              <div className="col-span-5 xl:col-span-5 2xl:col-span-5 flex items-center pl-16 xl:pl-20 transition-all duration-500 ease-out group-hover:-translate-x-2">
                <div className="px-4 2xl:px-0 text-[clamp(1.5rem,2vw,2.75rem)] group-hover:mix-blend-luminosity group-hover:opacity-40 transition-all duration-500">
                  {project.title}
                </div>
              </div>

              <div className="col-span-2 xl:col-span-3 2xl:col-span-3 flex items-center">
                <div className="px-4 2xl:px-0 text-[clamp(0.875rem,1vw,1.125rem)] group-hover:translate-x-4 group-hover:mix-blend-luminosity group-hover:opacity-40 transition-all duration-500">
                  {project.description}
                </div>
              </div>

              <div className="col-span-2 xl:col-span-2 2xl:col-span-2 flex items-center">
                <div className="px-4 2xl:px-0 text-[clamp(0.875rem,1vw,1.125rem)] group-hover:translate-x-4 group-hover:mix-blend-luminosity group-hover:opacity-40 transition-all duration-500">
                  {project.tag || 'Project'}
                </div>
              </div>

              <div className="col-span-3 xl:col-span-2 2xl:col-span-2 flex items-center">
                <div className="px-4 2xl:px-0 text-[clamp(0.875rem,1vw,1.125rem)] group-hover:translate-x-4 group-hover:mix-blend-luminosity group-hover:opacity-40 transition-all duration-500">
                  {project.timeline}
                </div>
              </div>

            </a>

          ))}
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:gap-4 md:gap-8">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row items-center justify-between lg:justify-center lg:border-t
  lg:border-gray-300 mb-24 sm:mb-20 md:mb-28 lg:mb-0'
            onMouseEnter={() => {
              if (window.matchMedia('(min-width: 1024px)').matches)
                setModal({ active: true, index: index })
            }}
            onMouseLeave={() => {
              if (window.matchMedia('(min-width: 1024px)').matches)
                setModal({ active: false, index: index })
            }}
          >
            <a
              // href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className='group'
            >
              <div
                className="w-[88vw] h-[86vw] sm:w-[43vw] sm:h-[43vw] flex items-center justify-center
    mb-4 sm:mb-6 md:mb-8"
                style={{ backgroundColor: project.color }}
              >
                <div className='w-[75vw] h-[45vw] sm:w-[37vw] sm:h-[25vw] flex items-center justify-center'>
                  <img
                    src={images?.[project.src] || ''}
                    alt={project.title}
                    className="w-full h-full object-cover shadow-md rounded-sm sm:group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <div
                className='flex flex-col gap-2 sm:gap-2 md:gap-3 lg:gap-0 items-start lg:flex-row lg:items-center
    lg:justify-between w-full cursor-pointer transition-all duration-500 ease-out
    lg:group-hover:opacity-40 lg:group-hover:translate-x-2'>
                <h2
                  className='text-[35px] sm:text-[30px] md:text-[35px] lg:text-[40px]
        lg:pl-[60px] xl:pl-[100px] font-normal m-0 transition-all duration-500 ease-out'>
                  {project.title}
                </h2>
                <div className='lg:hidden w-full h-[1px] border-b-[2px] border-gray-200 border-opacity-50 mix-blend-luminosity mb-2 sm:mb-1 md:mb-3'></div>
                <div className="lg:hidden w-full flex sm:flex-col md:flex-row md:items-center justify-between gap-2">
                  <p
                    className='m-0 transition-all duration-500 ease-out'>
                    {project.description}
                  </p>
                  <p className="">{project.timeline}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <Modal
        modal={modal}
        projects={projectItems.map((p) => ({
          ...p,
          signed_url: images?.[p.src] || ''
        }))}
      />

      <ProjectDetailModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={currentProject}
        currentProjectId={currentProjectId}
        allProjects={projectItems}
        onChangeProject={(newId) => setCurrentProjectId(newId)}
      />

    </section>
  )
}

export default Work