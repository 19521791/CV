/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { githubLink, linkedinLink } from '@/constants'
import Curve from './Curve'

const navItems = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Work',
    href: '/work'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Letter',
    href: '/cover-letter'
  },
  {
    title: '3D',
    href: '/model'
  }
]

const NavItem = ({ data }) => {
  const isActive = location.pathname === data.href

  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={`nav-item ${isActive ? 'active' : ''}`}
    >
      <a href={data.href}>
        {data.title}
      </a>
    </motion.div>
  )
}

const menuSlide = {
  initial: {
    x: 'calc(100% + 100px)'
  },
  enter: {
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
}

const slide = {
  initial: {
    x: '80px'
  },
  enter: (i) => ({
    x: '0px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  }),
  exit: (i) => ({
    x: '80px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  })
}

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    let timer

    if (isHomePage && !isActive) {
      timer = setTimeout(() => {
        setShowHint(true)
      }, 500)
    } else {
      setShowHint(false)
    }
    return () => clearTimeout(timer)
  }, [isActive, isHomePage])

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current && menuRef.current.contains(event.target) ||
      buttonRef.current && buttonRef.current.contains(event.target)
    ) {
      return
    }
    setIsActive(false)
  }, [])

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive, handleClickOutside])

  return (
    <>
      <div
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation()
          setIsActive(!isActive)
        }}
        className="nav-button"
      >
        {isHomePage && showHint && (
          <motion.div
            className="click-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Please click Here
          </motion.div>
        )}
        <div className={`burger ${isActive ? 'burger-active' : ''}`}></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            ref={menuRef}
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="dlous-menu"
          >
            <div className="dlous-menu-body">
              <div className="dlous-nav">
                <div className="dlous-nav-header">
                  <p className="leading-snug tracking-wider text-[12px] md:text-base mb-6">
                    Welcome to my Portfolio
                  </p>
                </div>

                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    data={{ ...item, index }}
                    onClick={() => setIsActive(false)}
                  />
                ))}
              </div>
              <div className="dlous-nav-footer">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsActive(false)}
                >
                  Github
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsActive(false)}
                >
                  Linkedin
                </a>
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
