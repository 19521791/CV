import { skills } from "constants"
import Tooltip from '@mui/material/Tooltip'

const Skills = () => {
  return (
    <div className="max-container">
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-700 font-semibold">
            Programming Languages & Tools:
        </p>

        <div className="mt-10 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <Tooltip
              key={index}
              title={skill.name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: '#1C1C1E',
                    borderRadius: '12px',
                    fontSize: '14px',
                    '& .MuiTooltip-arrow': {
                      color: '#BDBFC6',
                    },
                  },
                },
              }}
            >
              <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-x1" />
              <div className="btn-front rounded-x1 flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            </Tooltip>
          ))}
        </div>

        <p className="mt-10 text-base sm:text-lg md:text-xl text-slate-700 font-semibold">
          Workflow:
        </p>
        <ul className="mt-6 text-base sm:text-lg md:text-xl text-slate-700">
          <li>
            <i className="fa fa fa-check text-green-500 mr-2" />
            <span className="font-semibold">
              Testing & Debugging
            </span>
          </li>
          <li>
            <i className="fa fa fa-check text-green-500 mr-2" />
            <span className="font-semibold">
              Git, Github for Teamwork
            </span>
          </li>
          <li>
            <i className="fa fa fa-check text-green-500 mr-2" />
            <span className="font-semibold">
              Agile Development & Scrum
            </span>
          </li>
          <li>
            <i className="fa fa fa-check text-green-500 mr-2" />
            <span className="font-semibold">
              English for work
            </span>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-lg text-slate-700 ml-6">
              <li className="pl-1 py-0.5">
                <span className="-ml-1.5">For Reading: I can comfortably read and interpret documentation, project specifications.</span>
              </li>
              <li className="pl-1">
                <span className="-ml-1.5">For Speaking: I am capable of basic communication and am always striving to improve everyday.</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
