import { useContext, useState } from 'react'
import { ImageContext } from '@/contexts/ImageContext'
import ProjectCard from '@/components/card/ProjectCard'
import Modal from '@/components/card/Modal'
import { projectItems, groupProjects } from '@/constants'

const Projects = () => {
  const { images } = useContext(ImageContext)
  const [modal, setModal] = useState({ active: false, index: 0 })
  let globalIndex = 0
  return (
    <>
      <section className="mx-auto p-4 sm:p-8 md:p-12 pb-12 !pt-[100px]
        max-w-[1500px] font-[Sora]">
        <p className='uppercase pb-10 lg:pb-5 text-gray-500'>Standout Projects</p>
        <div className='flex flex-col items-center justify-center lg:block'>
          <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-0 lg:flex lg:flex-col'>
            {
              projectItems.map((project, index) => {
                return <ProjectCard
                  key={index}
                  index={index}
                  title={project.title}
                  link={project.link}
                  signed_url={images?.[project.src] || ''}
                  color={project.color}
                  timeline={project.timeline}
                  desc={project.description}
                  setModal={setModal}
                />
              })
            }
          </div>
        </div>
        <Modal
          modal={modal}
          projects={projectItems.map((p) => ({
            ...p,
            signed_url: images?.[p.src] || ''
          }))}
        />
      </section>
    </>
  )
}

export default Projects
