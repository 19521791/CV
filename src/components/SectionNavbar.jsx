/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  open: {
    width: 400,
    height: 400,
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: 100,
    height: 40,
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, delay: 0.15, ease: [0.76, 0, 0.24, 1] }
  }
}

const persepctive = {
  initial: {
    opacity: 0,
    rotateX: 90
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + (i * 0.1),
      ease: [.215, .61, .355, 1]
    }
  }),
  exit: {
    opacity: 0
  }
}

const PerspectiveText = ({ label }) => {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}

const SectionNavbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="fixed top-4 right-4 sm:top-[50px] sm:right-[50px] z-10">
      <motion.div
        className="menu"
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          { isActive && <div className='nav'>
            <div className='nav-body'>
              <div className='linkContainer'>
                <motion.div
                  custom={0}
                  variants={persepctive}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  <a href='#home'>Home</a>
                </motion.div>
              </div>
              <div className='linkContainer'>
                <motion.div
                  custom={0}
                  variants={persepctive}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  <a href='#info'>About Me</a>
                </motion.div>
              </div>

              <div className='linkContainer'>
                <motion.div
                  custom={1}
                  variants={persepctive}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  <a href='#tech-stack'>Tech Stack</a>
                </motion.div>
              </div>

              <div className='linkContainer'>
                <motion.div
                  custom={2}
                  variants={persepctive}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  <a href='#project'>Projects</a>
                </motion.div>
              </div>

              <div className='linkContainer'>
                <motion.div
                  custom={3}
                  variants={persepctive}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  <a href='#experience'>Experience</a>
                </motion.div>
              </div>
            </div>
          </div> }
        </AnimatePresence>
      </motion.div>

      <div onClick={() => setIsActive(!isActive)} className="button">

        <motion.div
          className='section-slider'
          animate={{ top: isActive ? '-100%' : '0' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="el">
            <PerspectiveText label="Menu" />
          </div>

          <div className="el">
            <PerspectiveText label="Close" />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default SectionNavbar