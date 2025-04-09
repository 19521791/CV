/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef, useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { githubLink, linkedinLink, navItems } from '@/constants'
import NavbarCurve from './NavbarCurve'
import NavItem from './NavItem'
import { menuSlide } from '../../utils/animate.props'
import { AnimationContext } from '@/contexts/AnimationContext'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  const { isEverythingReady } = useContext(AnimationContext)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const closeTimer = useRef(null)

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (isHomePage && isInitialLoad && isEverythingReady) {
      setIsActive(true)
      setIsMenuExpanded(true)
      setIsInitialLoad(false)
    }
  }, [isEverythingReady])

  useEffect(() => {
    let timer

    if (isHomePage && !isActive && !isMenuExpanded) {
      timer = setTimeout(() => {
        setShowHint(true)
      }, 500)
    } else {
      setShowHint(false)
    }
    return () => clearTimeout(timer)
  }, [isActive, isMenuExpanded, isHomePage])

  const delayedCloseMenu = () => {
    closeTimer.current = setTimeout(() => {
      setIsActive(false)
      setIsMenuExpanded(false)
    }, 300)
  }

  const cancelDelayedClose = () => {
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
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <>
      <div
        ref={buttonRef}
        onMouseEnter={() => {
          cancelDelayedClose()
          setIsActive(true)
        }}
        onMouseLeave={delayedCloseMenu}
        onClick={(e) => {
          e.stopPropagation()
          cancelDelayedClose()
          setIsActive(!isActive)
          setIsInitialLoad(false)
          setIsMenuExpanded(false)
        }}
        className="nav-button"
      >
        {isHomePage && showHint && (
          <motion.div
            className="click-hint cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Click or Hover Here
          </motion.div>
        )}
        <div className={`burger ${( isActive ) ? 'burger-active' : ''}`}></div>
      </div>

      <AnimatePresence mode="wait">
        {( isActive ) && (
          <motion.div
            onMouseEnter={cancelDelayedClose}
            onMouseLeave={delayedCloseMenu}
            ref={menuRef}
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
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
                    onClick={() => {
                      setIsActive(false)
                      setIsMenuExpanded(false)
                    }}
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
            <NavbarCurve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar