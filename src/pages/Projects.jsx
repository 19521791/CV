import { useContext, useState } from 'react'
import { ImageContext } from '@/utils/ImageGallery'
import ProjectCard from '@/components/ProjectCard'
import Modal from '@/components/Modal'
import { projectItems } from '@/constants'

const Projects = () => {
  const { images } = useContext(ImageContext)
  const [modal, setModal] = useState({ active: false, index: 0 })
  return (
    <main className="max-container max-w-[1500px]">
      <p className='uppercase pb-10 lg:pb-5 text-gray-500'>Standout Projects</p>
      <div className='project-body flex flex-col items-center justify-center lg:block'>
        <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-0 lg:flex lg:flex-col'>
          {
            projectItems.map(( project, index ) => {
              return <ProjectCard
                key={index}
                index={index}
                title={project.title}
                link={project.link}
                signed_url={images?.[project.src] || ''}
                color={project.color}
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
    </main>
  )
}

export default Projects