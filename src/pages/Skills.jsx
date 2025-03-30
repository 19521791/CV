/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { skills } from '@/constants'
import Tooltip from '@mui/material/Tooltip'
import { ImageContext } from '@/utils/ImageGallery'

const SkillItem = ({ skill }) => {
  const { images } = useContext(ImageContext)

  return (
    <Tooltip
      title={skill.name}
      placement="top"
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: '#1C1C1E',
            borderRadius: '12px',
            fontSize: '14px',
            '& .MuiTooltip-arrow': {
              color: '#BDBFC6'
            }
          }
        }
      }}
    >
      <div className="block-container w-20 h-20">
        <div className="btn-back rounded-xl" />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={images[skill.imageUrl]}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </Tooltip>
  )
}

const WorkflowItem = ({ children }) => (
  <li className="mb-1">
    <i className="fa fa-check text-green-500 mr-2" />
    <span className="font-semibold">{children}</span>
  </li>
)

const Skills = () => {
  return (
    <div>
      <p className="text-xl font-semibold mb-6">Programming languages & Tools:</p>
      <div className="flex flex-wrap gap-12 cursor-pointer mb-6">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>

      <p className="text-xl font-semibold mb-1 leading-tight">Others:</p>
      <ul className="text-xl">
        <WorkflowItem>Good understanding of OOP methodologies</WorkflowItem>
        <WorkflowItem>Agile Development & Scrum</WorkflowItem>
        <WorkflowItem>Experience using in linux</WorkflowItem>
        <li>
          <i className="fa fa-check text-green-500 mr-2" />
          <span className="font-semibold">English for work</span>
          <ul className="list-disc list-inside text-lg ml-6">
            <li className="pl-1 py-0.5">
              <span className="-ml-1.5">For Reading: I can comfortably read and interpret documentation, project specifications.</span>
            </li>
            <li className="pl-1">
              <span className="-ml-1.5">For Speaking: I am capable of basic communication.</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Skills