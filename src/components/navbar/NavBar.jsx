/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef, useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { githubLink, linkedinLink, navItems } from '@/constants'
import NavbarCurve from './NavbarCurve'
import NavItem from './NavItem'
import { menuSlide } from '../../utils/animate.props'
import { AnimationContext } from '@/contexts/AnimationContext'
import { useIsMobile } from '@/hooks/useIsMobile'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isMenuExpanded, setIsMenuExpanded] = useState(true)

  const isMobile = useIsMobile()

  const { isEverythingReady } = useContext(AnimationContext)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const closeTimer = useRef(null)
  const hoverTimer = useRef(null)

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const menuVariant = isMobile
    ? {}
    : menuSlide

  const transition = isMobile
    ? { duration: 0 }
    : { type: 'spring', stiffness: 100, damping: 15 }

  useEffect(() => {
    if (isHomePage && isInitialLoad && isEverythingReady) {
      setIsActive(true)
      setIsMenuExpanded(true)
      setIsInitialLoad(false)
    }
  }, [isEverythingReady])

  useEffect(() => {
    let timer

    if (isHomePage && !isMenuExpanded && !isActive) {
      timer = setTimeout(() => {
        setShowHint(true)
      }, 500)
    } else {
      setShowHint(false)
    }
    return () => clearTimeout(timer)
  }, [isActive, isMenuExpanded, isHomePage])

  const handleMouseEnter = () => {
    if (isMobile) return
    cancelTimers()
    hoverTimer.current = setTimeout(() => {
      setIsActive(true)
      setIsMenuExpanded(true)
    }, 50)
  }

  const delayedCloseMenu = () => {
    if (isMobile) return
    cancelTimers()
    closeTimer.current = setTimeout(() => {
      setIsActive(false)
      setIsMenuExpanded(false)
    }, 300)
  }

  const handleClick = (e) => {
    if (!isMobile) return
    e.stopPropagation()
    cancelTimers()
    setIsActive(!isActive)
    setIsInitialLoad(false)
    setIsMenuExpanded(!isMenuExpanded)
  }

  const cancelTimers = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current)
      hoverTimer.current = null
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current && menuRef.current.contains(event.target) ||
      buttonRef.current && buttonRef.current.contains(event.target)
    ) {
      return
    }
    setIsActive(false)
    setIsMenuExpanded(false)
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

  useEffect(() => {
    if (!isHomePage) {
      setIsActive(false)
    }
  }, [location.pathname])

  useEffect(() => {
    return () => cancelTimers()
  }, [cancelTimers])

  return (
    <>
      <div
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={delayedCloseMenu}
        onClick={handleClick}
        className="nav-button fixed right-0 m-[20px] w-[60px] h-[60px] bg-[#101010]
          rounded-full flex items-center justify-center cursor-pointer z-nav-burger-button
          transition-all duration-300 ease-in-out"
      >
        {isHomePage && showHint && (
          <motion.div
            className={`click-hint ${isMobile ? 'click-hint-mobile' : 'click-hint-desktop'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            { isMobile ? <p>Just Click Here</p> : <p>Hey, Hover Here ʕ╯• ⊱ •╰ʔ</p> }
          </motion.div>
        )}
        <div className={`burger ${( isActive ) ? 'burger-active' : ''}`}></div>
      </div>

      <AnimatePresence mode="wait">
        {( isActive ) && (
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={delayedCloseMenu}
            ref={menuRef}
            variants={menuVariant}
            animate="enter"
            exit="exit"
            initial="initial"
            transition={transition}
            className="dlous-menu fixed right-0 top-0 h-[100vh] bg-[#363637] text-[#F5F5F5] z-nav-content"
          >
            <div className="dlous-menu-body box-border h-[100%] pt-[80px] pr-[100px] pl-[80px]">

              <div className="dlous-nav text-[56px] mt-[40px] sm:mt-[60px] mb-20">

                <div className="dlous-nav-header border-b-[1px] border-[#999] uppercase text-[11px] mb-5">

                  <p className="leading-snug tracking-wider text-[12px] mb-2">
                    Welcome to my Portfolio
                  </p>
                </div>

                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    data={{ ...item, index }}
                    onClick={() => {
                      setIsActive(false)
                      setIsMenuExpanded(false)
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between gap-[40px] text-[16px] cursor-pointer">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='footer'
                  onClick={() => setIsActive(false)}
                >
                  Github
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='footer'
                  onClick={() => setIsActive(false)}
                >
                  Linkedin
                </a>
              </div>
            </div>
            {!isMobile && <NavbarCurve />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar