import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cv from "../assets/documents/nguyen_phi_long_cv_backend.pdf"

const CV = () => {
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
    <div className="max-container">

      <Link to="/about" className="fixed top-6 left-14 z-10">
        <div
          className="relative inline-block overflow-hidden text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <i className="fa fa-arrow-left text-lg sm:hidden" aria-hidden="true"></i>
          <p className="hidden sm:inline text-sm md:text-base">
            <span className="hidden md:inline">Back</span>
            <span className="inline md:hidden">Back</span>
          </p>
        </div>
      </Link>

      <div className="w-full h-screen">
  <object className='w-full h-full' data={cv} type="application/pdf" />
</div>


      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md"
        >
          <i className="fas fa-arrow-up"></i> 
        </button>
      )}
    </div>
  )
}

export default CV