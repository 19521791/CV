/* eslint-disable react/prop-types */
import { helloCleverLink, trelloLink } from "@/constants"

const BulletPoint = ({ children }) => (
  <div>
    <i className="fa fa-bookmark text-yellow-500 inline-block mr-2 my-auto" />
    <span className="font-semibold text-gray-600">{children}</span>
  </div>
)

const ProjectDetail = ({ title, description, bullets }) => (
  <div className="flex flex-col gap-1 text-lg mb-1">
    <BulletPoint>{title}</BulletPoint>
    <div>
      {description && <p className="text-lg font-semibold text-gray-600 mb-0.5">{description}</p>}
      {bullets.map((bullet, index) => (
        <p className="mb-1" key={index}>• {bullet}</p>
      ))}
    </div>
  </div>
)

const Experience = () => {
  return (
    <div className="max-container text-slate-700">
      <h1 className="font-semibold text-5xl font-poppins mb-4 leading-snug">
        Experience
      </h1>

      <div className="mb-6 leading-tight">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
          <div className="text-3xl font-semibold text-blue-500 hover:text-sky-500 hover:underline">
            <a href={helloCleverLink} target="_blank" rel="noopener noreferrer">
              <span className="mr-1.5">Hello Clever</span>
              <i className="fa fa-external-link text-base" aria-hidden="true"></i>
            </a>
          </div>
          <div className="text-right text-sky-600 whitespace-nowrap font-semibold">
            Sep 2023 - Sep 2024
          </div>
        </div>
        <div className="text-xl font-medium mb-2">Back-end Engineer</div>

        <ProjectDetail
          title="Main project with Australia Merchant"
          description='"Hello Clever Payment Gateway, the first Australian buy-to-earn platform, simplifies shopping, payments, and managing money for everyone."'
          bullets={[
            "Design and implement additional functionalities based on the requirements of the Product Owner.",
          ]}
        />

        <ProjectDetail
          title="Adapts well to tech stack changes. Deliver tasks consistently on time."
          bullets={[
            "Collaborate with the Front-end team and the QA team to deliver new features on time.",
          ]}
        />

        <ProjectDetail
          title="Analyze work, ask questions to relevant departments to clarify work."
          bullets={[
            "Refactor code and write documentation for public APIs",
            "Integrate multiple suppliers into the system.",
          ]}
        />
      </div>

      <div className="mb-8 leading-tight">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
          <div className="text-3xl font-semibold text-blue-500 hover:text-sky-500 hover:underline">
            <a href={trelloLink} target="_blank" rel="noopener noreferrer">
              <span className="mr-1.5">Trello Board Clone</span>
              <i className="fa fa-external-link text-base" aria-hidden="true"></i>
            </a>
          </div>
          <div className="text-right text-sky-600 whitespace-nowrap font-semibold">
            April 2023 - Jun 2023
          </div>
        </div>
        <div className="text-xl font-medium mb-2">Personal Project</div>

        <ProjectDetail
          title="Cloning core features such as adding lists, and managing tasks."
          bullets={[
            "Enable drag-and-drop functionality for intuitive task organization.",
          ]}
        />

        <ProjectDetail
          title="Utilize modern technologies, including React.js, Node.js, Express.js, MongoDB, and Tailwind CSS."
          bullets={[
            "Integrate React Beautiful DnD for seamless drag-and-drop interactions.",
          ]}
        />
      </div>
    </div>
  )
}

export default Experience