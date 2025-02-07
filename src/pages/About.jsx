import ruby from "/icons/ruby-svgrepo-com.svg"
import react from "/icons/react.svg"
import { githubLink, linkedinLink } from "constants"

const About = () => {
  return (
    <section className="max-container text-slate-700">
      <h1 className="text-5xl font-semibold font-poppins leading-snug mb-2 -ml-1">
        Nguyen Phi <span className="blue-gradient_text drop-shadow">Long</span>
      </h1>

      <div className="mb-4 font-semibold">
        <div className="mb-3">
          <i className="fa fa-address-card text-lg inline-block mr-2" />
          <span className="text-xl">
            Backend Web Developer
          </span>
        </div>

        <div className="mb-3">
          <i className="fa fa-map text-lg inline-block mr-2" />
          <span className="text-xl">
            Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City
          </span>
        </div>

        <div className="mb-3">
          <i className="fa fa-phone text-lg inline-block mr-2" />
          <span className="text-xl">
            +84 393277584
          </span>
        </div>

        <div className="mb-3">
          <i className="fa fa-envelope text-lg inline-block mr-2" />
          <span className="text-xl">
            toannguyenvan145@gmail.com
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-row items-center gap-4">
          <a href={githubLink.link} target="_blank" rel="noopener noreferrer" className="rounded-lg w-10 h-10 hover:scale-110 transition-all ease-in-out duration-300">
            <img 
              src={githubLink.iconUrl}
              alt="Github"
              className="w-full h-full object-contain"
            />
          </a>
          <a href={linkedinLink.link} target="_blank" rel="noopener noreferrer" className="rounded-lg w-10 h-10 hover:scale-110 transition-all ease-in-out duration-300">
            <img 
              src={linkedinLink.iconUrl}
              alt="Linkedin"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-100 rounded-md shadow-md">
        <p className="text-lg italic text-gray-700">
          Thank you for taking the time to visit my CV.
          <br />
          My background in <span className="font-semibold">Ruby on Rails and fintech, honed over the past year</span>, equips me with the
          skills to develop impactful solutions and optimize financial technologies for enhanced user
          experiences.
        </p>
      </div>

      <div className="mb-8">
        <div className="text-xl mb-2">
          <img src={ruby} alt="rails" className="w-4 h-4 md:w-4.5 md:h-4.5 inline-block mr-1 mb-1"/>
          <span>
            <span className="font-semibold">Back-end: </span>
            I have experience working with <span className="font-semibold">Ruby, Ruby on Rails, PostgreSQL, Redis, Sidekiq</span>.
            NodeJS, ExpressJS, MongoDB (gained through Personal Projects)
          </span>
        </div>

        <div className="text-xl">
          <img src={react} alt="react" className="w-4 h-4 md:w-5 md:h-5 inline-block mr-0.5 mb-1"/>
          <span>
            <span className="font-semibold">Front-end: </span>
            I am currently learning <span className="font-semibold">ReactJS, Material UI, TailwindCSS, Axios</span>.
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-3xl font-semibold mb-2">Education</p>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex-1">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:justify-between mb-0.5">
                <span className="text-2xl font-semibold mb-0.5">
                  University of Information Technology
                </span>
                <span className="text-sky-600 whitespace-nowrap font-semibold text-lg mb-0.5">
                  Sep 2019 - Now
                </span>
              </div>

              <p className="text-lg mb-1">
                I have completed all my courses and am currently waiting for the
                graduation ceremony, so I am available to work full-time without any
                obstacles.
              </p>
              <div className="text-lg mb-1">
                <i className="fa fa-book text-blue-500 mr-1.5" />
                <span className="font-semibold">Major: </span>
                <span>Computer Science</span>
              </div>
              <div className="text-lg">
                <i className="fa fa-bookmark text-yellow-500 mr-1.5" />
                <span className="font-semibold">GPA: </span>
                <span>7.46</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-4">
        <div className="flex items-center">
          <p className="font-extrabold text-2xl">Let&apos;s build something together!</p>
        </div>
        <div className="dlous-email">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="absolute text-gray-600 text-lg">
              toannguyenvan145@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About