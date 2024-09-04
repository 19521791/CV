import { useState, useEffect } from "react"
import CTA from "components/CTA"
import ruby from "../assets/icons/ruby-svgrepo-com.svg"
import react from "../assets/icons/react.svg"
import { Link } from "react-router-dom"
import { githubLink, linkedinLink } from "constants"

const About = () => {
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
      <Link to="/cv" className="fixed bottom-6 left-14 z-10">
        <div
          className="btn-icon"
        >
          <i className="fa fa-file-pdf-o text-lg sm:hidden" aria-hidden="true"></i>
          <p className="hidden sm:inline text-sm md:text-base">
            <span className="hidden md:inline">View PDF CV</span>
            <span className="inline md:hidden">PDF CV</span>
          </p>
        </div>
      </Link>

      <h1 className="head-text">
        Nguyen Phi <span className="blue-gradient_text font-semibold drop-shadow">Long</span>
      </h1>

      <div className="flex flex-col">
        <div>
          <div className="icon-box">
          <i className="fa fa-address-card icon-relative" />
          <p className="icon-text">
            Backend Web Developer
          </p>
          </div>

          <div className="icon-box">
            <i className="fa fa-map icon-relative" />
            <p className="icon-text">
              Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City
            </p>
          </div>

          <div className="icon-box">
            <i className="fa fa-phone icon-relative" />
            <p className="icon-text">
              +84 393277584
            </p>
          </div>

          <div className="icon-box">
            <i className="fa fa-envelope icon-relative" />
            <p className="icon-text">
              toannguyenvan145@gmail.com
            </p>
          </div>
        </div>

        <div className="block-container w-20 h-20 flex flex-row justify-center items-center space-x-4">
          <a href={githubLink.link} target="_blank" rel="noopener noreferrer" className="rounded-lg flex justify-center items-center w-10 h-10 transition-transform transform hover:scale-110">
            <img 
              src={githubLink.iconUrl}
              alt="Github"
              className="w-full h-full object-contain"
            />
          </a>
          <a href={linkedinLink.link} target="_blank" rel="noopener noreferrer" className="rounded-lg flex justify-center items-center w-10 h-10 transition-transform transform hover:scale-110">
            <img 
              src={linkedinLink.iconUrl}
              alt="Linkedin"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      <div className="mb-8 mt-3 p-4 bg-blue-100 border-l-4 rounded-r shadow-md">
        <p className="text-sm sm:text-base italic text-gray-700">
          Thank you for taking the time to visit my CV.
          <br />
          My background in <span className="font-semibold">Ruby on Rails and fintech, honed over the past year</span>, equips me with the
          skills to develop impactful solutions and optimize financial technologies for enhanced user
          experiences.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-xl flex justify-center items-center gap-1">
          <p className="text-base sm:text-lg md:text-xl text-slate-700">
            <img src={ruby} alt="rails" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 inline-block mr-1 mb-2 opacity-80 filter brightness-90"/>
            <span className="font-semibold">Back-end: </span>
            I have experience working with <span className="font-semibold">Ruby, Ruby on Rails, PostgreSQL, Redis, Sidekiq</span>.
            NodeJS, ExpressJS, MongoDB (gained through Personal Projects)
          </p>
        </div>

        <div className="rounded-xl flex items-center gap-1">
          <p className="text-base sm:text-lg md:text-xl text-slate-700">
            <img src={react} alt="react" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 inline-block mr-1 mb-2"/>
            <span className="font-semibold">Front-end: </span>
            I am currently learning <span className="font-semibold">ReactJS, Material UI, TailwindCSS, Axios</span>.
          </p>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-700 text-lg">
          <div className="flex flex-row justify-between text-slate-700">
            <h3 className="subhead-text text-slate-700">University of Information Technology</h3>
            <p className="rotate-up text-white text-xs sm:text-sm md:text-base  sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded">
              Sep 2019 - Now
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-700">
            I have completed all my courses and am currently waiting for the graduation ceremony, so I am available to work full-time without any obstacles.
          </p>

          <div className="flex flex-row items-center gap-1 text-slate-700">
            <i className="fa fa-book icon-relative text-blue-500" />
            <p className="font-semibold">
              Major: Computer Science
            </p>
          </div>

          <div className="flex flex-row items-center gap-1 text-slate-700">
            <i className="fa fa-bookmark icon-relative text-yellow-500" />
            <p className="font-semibold">
              GPA: 7.46
            </p>
          </div>
        </div>
      </div>

      <CTA />

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

export default About